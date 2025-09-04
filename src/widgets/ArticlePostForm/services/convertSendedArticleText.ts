export const convertSendedArticleText = (text: string) => {
  return `[{"tag":"p","children":["${text}"]}]`;
};
