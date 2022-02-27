import { DEFAULT_UPLOAD_ERROR_MESSAGE } from '@/constants/file';

export const generateErrorMessage = (error: any) => ({
  response: {
    data: {
      error,
    },
  },
});

export const generateError = (error: string) => {
  const message = generateErrorMessage(error);
  throw message;
};

export const uploadFileErrorMessage = (
  maxSize: number | string,
  msg: string = DEFAULT_UPLOAD_ERROR_MESSAGE,
) => generateErrorMessage(`${msg} ${maxSize}`);
