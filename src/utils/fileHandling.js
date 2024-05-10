const RANDOM_NAME_CHARS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
const RANDOM_NAME_LENGTH = 18;

export const downloadBlob = (blob) => {
  const blobUrl = window.URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = blobUrl;
  link.setAttribute('download', `${getRandomName()}.mp4`);
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  window.URL.revokeObjectURL(blobUrl);
};

const getRandomName = () => {
  const charactersLength = RANDOM_NAME_CHARS.length;
  let counter = 0;
  let result = '';
  while (counter < RANDOM_NAME_LENGTH) {
    result += RANDOM_NAME_CHARS.charAt(Math.floor(Math.random() * charactersLength));
    counter += 1;
  }
  return result;
};
