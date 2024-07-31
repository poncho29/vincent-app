export const urlToFile = async (url: string, filename: string) => {
  const response = await fetch(url);
  
  const blob = await response.blob();

  const mimeType = blob.type || 'application/octet-stream';

  return new File([blob], filename, { type: mimeType });
}
