function rgb(r, g, b){
  return [r, g, b].map(x => {
      if(x > 255) x = 255;
      if(x < 0) x = 0;
      const hex = x.toString(16).toUpperCase()
      return hex.length === 1 ? '0' + hex : hex
  }).join('')
}