export interface ApiImage {
  id: string;
  attributes: {
    title: string;
    shutterSpeed: string;
    aperture: string;
    focalLength: string;
    camera: string;
    file: FileInfo;
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
}

// images {
//   data: {
//     id: 1,
//     attributes: {
//       name: 'DSCF0623.jpg',
//       alternativeText: null,
//       caption: null,
//       width: 5152,
//       height: 7728,
//       formats: [Object],
//       hash: 'DSCF_0623_ae119772f4',
//       ext: '.jpg',
//       mime: 'image/jpeg',
//       size: 2759.92,
//       url: '/uploads/DSCF_0623_ae119772f4.jpg',
//       previewUrl: null,
//       provider: 'local',
//       provider_metadata: null,
//       createdAt: '2023-09-18T12:18:37.519Z',
//       updatedAt: '2023-09-18T12:18:37.519Z'
//     }
//   }
// }
