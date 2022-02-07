function toWeirdCase(string){
  let arr = string.split(' ');
  let new_arr = [];
  for(let i = 0; i < arr.length; i++) {
      let word = '';
      for(let j = 0; j < arr[i].length; j++) {
          if(j % 2 === 0) {
              word += arr[i][j].toUpperCase()
          } else {
              word += arr[i][j].toLowerCase()
          }
      }
      new_arr.push(word)
  }
  return new_arr.join(' ');
}