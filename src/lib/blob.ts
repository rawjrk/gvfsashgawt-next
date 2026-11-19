export const fetchBlob = async (url: string): Promise<Blob> => {
  const response = await fetch(url);
  return response.blob();
};

export const blobToBase64 = async (blob: Blob): Promise<string> => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onloadend = () => {
      const contentWithDataPrefix = reader.result;

      if (contentWithDataPrefix) {
        const [, bareContent] = contentWithDataPrefix.toString().split(",");
        resolve(bareContent);
      }

      reject(new Error("Failed to load base-64 from null"));
    };
    reader.onerror = (error) => reject(error);
    reader.readAsDataURL(blob);
  });
};
