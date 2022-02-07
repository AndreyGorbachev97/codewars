function domainName(url){
  return url.replace(/(https?:\/\/)?(www.)?/i, '').split('.')[0];
}