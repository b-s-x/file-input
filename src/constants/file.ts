export const MAX_FILE_SIZE_5 = 5 * 1024 * 1024; /* 5 242 880 */
export const MAX_FILE_SIZE_10 = 10 * 1024 * 1024; /* 10 485 760 */
export const MAX_FILE_SIZE_20 = 20 * 1024 * 1024; /* 20 971 520 */

export const MAX_TOTAL_SIZE_10 = 10 * 1024 * 1024; /* 10 485 760 */
export const MAX_TOTAL_SIZE_20 = 20 * 1024 * 1024; /* 20 971 520 */
export const MAX_TOTAL_SIZE_25 = 25 * 1024 * 1024; /* 26 214 400 */

export const MAX_FILES_COUNT_3 = 3;
export const MAX_FILES_COUNT_5 = 5;
export const MAX_FILES_COUNT_10 = 10;

export const UPLOAD_FILE_ERROR_TITLE = 'Превышен допустимый размер файла';
export const DEFAULT_UPLOAD_ERROR_MESSAGE = 'Вы не можете прикрепить файл больше';

export const PDF_MIME = 'application/pdf';
export const IMAGE_MIMES = ['image/jpeg', 'image/png'];
export const WORD_MIMES = ['application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'];
export const ZIP_MIMES = ['application/zip', 'application/octet-stream', 'application/x-zip-compressed'];

export const ALLOW_FILES_MIMES = [
  PDF_MIME,
  ...IMAGE_MIMES,
  ...WORD_MIMES,
  ...ZIP_MIMES,
];
