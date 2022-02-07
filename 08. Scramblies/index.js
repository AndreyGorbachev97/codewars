function scramble(str1, str2) {
  for(let i = 0; i < str2.length; i++) {
      let re = new RegExp(str2[i], 'g');
      if(!str1.match(re)) return false
      if(str1.match(re).length < str2.match(re).length) {
          return false;
      }
  }
  return true;
}