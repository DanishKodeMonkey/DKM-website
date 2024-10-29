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
      console.log(`${url} does not have a preview image (404 Not Found)`);
      return false; // Not found
    }

    console.log(`${url} has a preview image`);
    return response.ok; // Checks for other successful responses
  } catch (error) {
    console.error(`Error checking image existence for ${url}:`, error);
    return false; // Return false if there's an error
  }
};
