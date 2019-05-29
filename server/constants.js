const path = require('path');

const ENV = process.env.NODE_ENV || 'development';
const IS_DEV = ENV === 'development';
const PORT = process.env.PORT || 9000;

const STATIC_DIR = IS_DEV 
  ? path.join(__dirname, '..', 'dist')
  : path.join(__dirname, '..');

module.exports = {
  PORT,
  ENV,
  IS_DEV,
  STATIC_DIR,
}