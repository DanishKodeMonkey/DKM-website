export const getPreviewImageUrl = (
  username: string,
  repoName: string,
): string => {
  return `https://raw.githubusercontent.com/${username}/${repoName}/main/preview.png`;
};

export const checkPreviewImageExists = async (
  url: string,
): Promise<boolean> => {
  try {
    const response = await fetch(url);

    if (response.status === 404) {
      return false; // Not found
    }

    return response.ok;
  } catch (error) {
    console.error(`Error checking image existence for ${url}:`, error);
    return false;
  }
};
