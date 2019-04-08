class Formatter {
  static capitalize(string) {
 return string.charAt(0).toUpperCase() + string.slice(1);
  }

  static sanitize(string) {
    string = string.replace(/[^a-z0-9áéíóúñü '\.,_-]/gim,"");
    return string.trim();
  }

  static titleize(string) {
    var words = string.match(/\b\w+\b/g),
      preps = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from'];
  return words.map(function(e,i) {
                     return preps.indexOf(e) == -1 || i === 0 ? e[0].toUpperCase()+e.slice(1) : e;
                   }).join(" ");
  }

}
