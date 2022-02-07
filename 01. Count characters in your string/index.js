// https://www.codewars.com/kata/52efefcbcdf57161d4000091

const count = (string) => {
  return string.split("").reduce((acc, el) => {
    acc[el] = acc[el] ? acc[el] + 1 : 1;
    return acc;
  }, {})
}