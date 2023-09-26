export interface ApiImage {
  id: number;
  attributes: {
    title: string;
    shutterSpeed: string;
    aperture: string;
    focalLength: string;
    camera: string;
    description: string;
    location: string;
    file: FileInfo;
    slug: string;
    category: string;
    portfolio: boolean;
  };
}

export interface FileInfo {
  data: {
    id: number;
    attributes: {
      name: string;
      width: number;
      height: number;
      url: string;
    };
  };
}

export interface Image {
  title: string;
  shutterSpeed: string;
  aperture: string;
  focalLength: string;
  camera: string;
  url: string;
  width: number;
  height: number;
  slug: string;
  description: string;
  location: string;
  category: string;
  portfolio: boolean;
}
