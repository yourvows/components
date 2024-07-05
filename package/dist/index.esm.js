var capitalize = function capitalize(word) {
  return word.charAt(0).toUpperCase() + word.slice(1);
};
var validPhones = ['90', '91', '33', '50', '93', '94', '88', '95', '97', '98', '99', '77', '20'];
var isUzPhone = function isUzPhone(val) {
  var phone = val.replace(/[\s)(-]/g, '');
  return phone.length === 9 && validPhones.includes(phone.substring(0, 2));
};

export { capitalize, isUzPhone };
