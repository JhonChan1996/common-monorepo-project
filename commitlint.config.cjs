// eslint-disable-next-line @typescript-eslint/no-var-requires
const fg = require('fast-glob');
const getFoldersByPath = (FastGlob, path = '', exclude = []) => {
  const foldersArray = FastGlob.sync('*', { cwd: path, onlyDirectories: true });
  if (!exclude.length) return foldersArray;
  return foldersArray.filter((item) => !exclude.includes(item));
};
const scopes = getFoldersByPath(fg, 'src');
module.exports = {
  extends: ['@common/commitlint'],
  prompt: {
    scopes,
  },
};
