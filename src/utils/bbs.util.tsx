import { pipe } from 'ramda';

const replaceAll = (origin: string, destination: string) => (src: string) => {
  if (!src) return '';
  return src.split(origin).join(destination);
};

export const bbsUnescape = pipe(
  replaceAll('&gt;', '>'),
  replaceAll('&lt;', '<'),
  replaceAll('&nbsp;', ' '),
  replaceAll('&quot;', '"'),
  replaceAll('&amp;', '&'),
  replaceAll('\r\n', '')
);

export const bbsEscape = pipe(
  replaceAll('&', '&amp;'),
  replaceAll('"', '&quot;'),
  replaceAll(' ', '&nbsp;'),
  replaceAll('>', '&gt;'),
  replaceAll('<', '&lt;')
);

export const dateFormat = (dateString: string) => {
  const date: Date = new Date(dateString);
  return date.getFullYear().toString() + '.' + (date.getMonth() + 1).toString() + '.' + date.getDate().toString();
};
