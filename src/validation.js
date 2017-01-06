module.exports = {
  validateLength: function(string) {
    if(string.length > 0) {
      return 2;
    } else {
      return -1;
    }
  }
}
