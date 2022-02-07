function anagrams(word, words) {
  let sort_word = [...word].sort().join('');
  let sort_arr = [...words].map(_ => [..._].sort().join(''));
  let res_arr = [];
  for(let i = 0; i < words.length; i++) {
      if(sort_word === sort_arr[i]) {
          res_arr.push(words[i]);
      }
  }
  return res_arr;
}