export type FileRead = Promise<ArrayBuffer | string | null>;

export const readFile = (file: File): FileRead => new Promise((resolve, reject) => {
  const reader = new FileReader();
  reader.readAsDataURL(file);
  reader.onload = () => resolve(reader.result);
  reader.onerror = error => reject(error);
});

export const getImage = (src: string): Promise<HTMLImageElement> => new Promise((resolve, reject) => {
  const image = new Image();
  image.onload = () => resolve(image);
  image.onerror = error => reject(error);
  image.src = src;
});

const openLink = (file: string): Window | null => window.open(file, '_blank');
const openBlob = (file: Blob): void => {
  const fileURL = window.URL.createObjectURL(file) ;
  window.open(fileURL, '_blank');
  return window.URL.revokeObjectURL(fileURL);
}

export const openFileInBrowser = (file: string | Blob) => {
  typeof file === 'string'
   ? openLink(file)
   : openBlob(file);
};

export const checkIsImage = (name: string): boolean => getFileKindFromExtension(name) === FileKind.Image;

export enum FileKind {
  Image = 'image',
  PDF = 'pdf',
  Document = 'doc',
  Unknown = 'unknown',
}

export type FileMetadata = {
  extension: string;
  kind: FileKind;
}

export const getFileKindFromExtension = (ext: string): FileKind => {
  if (/pdf/gi.test(ext)) return FileKind.PDF;
  if (/docx?/gi.test(ext)) return FileKind.Document;
  if (/(jpe?g|jf?if|jpe|png|gif)/gi.test(ext)) return FileKind.Image;

  return FileKind.Unknown;
}

export const getFileMetaData = (fname: string): FileMetadata => {
  const extension = getFileExtension(fname);
  if (!extension) return {
    extension: '',
    kind: FileKind.Unknown,
  };
  const kind = getFileKindFromExtension(extension);

  return { extension, kind };
}

export const getFileExtension = (name: string): string | null => {
  const dotIdx = name.lastIndexOf('.');
  if (dotIdx === -1) return null;

  return name.slice(dotIdx + 1);
};
