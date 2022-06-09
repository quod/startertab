export const getClientUrl = (): string => {
  return process.env.VERCEL_URL
    ? process.env.VERCEL_URL
    : 'http://localhost:3000/';
};

export const getSpotifyRedirectUrl = (): string => {
  return process.env.VERCEL_URL
    ? `https://${process.env.VERCEL_URL}/api/spotify/authorize`
    : 'http://localhost:3000/api/spotify/authorize';
};

export const getRedirectUrl = (
  clientID: string,
  scopes: string[],
  redirectUri: string,
  showDialog: boolean
) => {
  return (
    "https://accounts.spotify.com/authorize?response_type=code" +
    `&client_id=${clientID}` +
    `&scope=${scopes.join("%20")}` +
    "&show_dialog=" +
    Boolean(showDialog) +
    `&redirect_uri=${redirectUri}`
  );
};