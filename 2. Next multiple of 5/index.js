const nextMultipleOfFive = n => {
  
  if (n === 0) return 5;
  const n2 = n.toString(2);
  let res = 0;

  for (let i = 0; i < 5; i++) {
    res = parseInt(n2 + i.toString(2), 2);
    if(res % 5 === 0) break;
    res = parseInt(n2 + '0' + i.toString(2), 2);
    if(res % 5 === 0) break;
  }
  return res;
}