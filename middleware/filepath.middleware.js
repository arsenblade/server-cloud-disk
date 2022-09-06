function filePath(path) {
  return function cors(req, res, next) {
    require.filePath = path;
    next();
  }
}

module.exports = filePath