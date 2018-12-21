const parseParams = (params) => {
  const PARAMS_LENGTH = params.length;
  const MATCH_PATTERN = '--(.*?)=';
  const REGEX_PATTERN = new RegExp(MATCH_PATTERN, 'g');
  let parsedParams = [];

  params.forEach((param) => {
    // parsedParams.push(REGEX_PATTERN.exec(REGEX_PATTERN));
    if(REGEX_PATTERN.test(param)) {
      console.log(param)
    }
  });

  console.log(parsedParams);
}

parseParams(process.argv.slice(2))

module.exports = parseParams;