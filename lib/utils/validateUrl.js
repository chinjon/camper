const validateUrl = (str) => {
  const pattern = /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/;
  const patternMatch = new RegExp(pattern);

  if(str.match(patternMatch)) {
    return str;
  } else {
    throw 'Not a valid URL';
  }
}

module.exports = validateUrl;
