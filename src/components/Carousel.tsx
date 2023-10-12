import '~/css/carousel.css';

import { Image } from 'astro:assets';
import useEmblaCarousel from 'embla-carousel-react';
import { useCallback, useEffect, useState } from 'react';
import { flushSync } from 'react-dom';
import { countImagesPerCategory } from '~/utils/images';
import type { Image as ImageType } from '~/utils/interface';

const TWEEN_FACTOR = 1.2;

interface CarouselProps {
  images: ImageType[];
}

export function Carousel({ images }: CarouselProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    direction: 'ltr',
  });
  const count = countImagesPerCategory(images);
  const [tweenValues, setTweenValues] = useState<number[]>([]);

  const onScroll = useCallback(() => {
    if (!emblaApi) return;

    const engine = emblaApi.internalEngine();
    const scrollProgress = emblaApi.scrollProgress();

    const styles = emblaApi.scrollSnapList().map((scrollSnap, index) => {
      let diffToTarget = scrollSnap - scrollProgress;

      if (engine.options.loop) {
        engine.slideLooper.loopPoints.forEach((loopItem) => {
          const target = loopItem.target();
          if (index === loopItem.index && target !== 0) {
            const sign = Math.sign(target);
            if (sign === -1) diffToTarget = scrollSnap - (1 + scrollProgress);
            if (sign === 1) diffToTarget = scrollSnap + (1 - scrollProgress);
          }
        });
      }
      return diffToTarget * (-1 / TWEEN_FACTOR) * 100;
    });
    setTweenValues(styles);
  }, [emblaApi, setTweenValues]);

  useEffect(() => {
    if (!emblaApi) return;
    onScroll();
    emblaApi.on('scroll', () => {
      flushSync(() => onScroll());
    });
    emblaApi.on('reInit', onScroll);
  }, [emblaApi, onScroll]);

  return (
    <div className="embla p-6">
      <div className="embla__viewport overflow-hidden" ref={emblaRef}>
        <div className="embla__container flex touch-pan-y">
          {images.map((img, index) => (
            <div className="embla__slide relative min-w-0" key={img.slug}>
              <div className="embla__slide__number">
                <span>{index + 1}</span>
              </div>
              <div className="embla__parallax h-full overflow-hidden">
                <div
                  className="embla__parallax__layer relative h-full w-full"
                  style={{
                    ...(tweenValues.length && {
                      transform: `translateX(${tweenValues[index]}%)`,
                    }),
                  }}
                >
                  <img
                    className="embla__slide__img embla__parallax__img"
                    src={img.url}
                    alt="Your alt text"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
