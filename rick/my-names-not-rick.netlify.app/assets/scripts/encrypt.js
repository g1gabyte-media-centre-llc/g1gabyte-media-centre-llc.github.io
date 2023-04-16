var salt = 'saltyboi';

function encrypt(text) {
  var byteHex = n => ('0' + Number(n).toString(16)).substr(-2);
  return textToChars(text).map(applySaltToChar).map(byteHex).join('');
}
function decrypt(encoded) {
  return encoded
    .match(/.{1,2}/g)
    .map(hex => parseInt(hex, 16))
    .map(applySaltToChar)
    .map(charCode => String.fromCharCode(charCode))
    .join('');
}

function textToChars(text) {
  return text.split('').map(c => c.charCodeAt(0));
}

function applySaltToChar(code) {
  return textToChars(salt).reduce((a, b) => a ^ b, code);
}
