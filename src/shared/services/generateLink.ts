export const generateLink = (link: string) => {
  return link.slice(0, 4) === 'http' ? link : 'https://t.me/' + link;
};
