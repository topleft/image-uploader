module.exports = {
  auth: require('./auth'),
  notes: require('./basic-crud')('notes', false),
  image: require('./image'),
  health: require('./health'),
};
