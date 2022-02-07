function incrementString (strng) {
  let str = strng.match(/[A-Za-z]+/g);
  let num = strng.match(/[0-9]+/g);
  if(!num) {
      return (str+1).toString();
  } else {
      let temp = +num[0] + 1;
      while(temp.toString().length < num[0].length) {
          temp = '0' + temp;
      }
      if(!str) return temp.toString();
      return str[0] + temp;
  }
}