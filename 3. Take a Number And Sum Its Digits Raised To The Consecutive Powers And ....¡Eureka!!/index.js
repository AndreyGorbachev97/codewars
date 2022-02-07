function sumDigPow(a, b) {
  let result = [];
  for(let i = a; i < b; i++) {
      let arr_num = i.toString().split('');
      let r = arr_num.reduce((acc, el, i) => acc += el**(i+1), 0);
      if(r === i) {
          result.push(i);
      }
  }
  return result;
}