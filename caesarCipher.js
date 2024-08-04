export function caesarCipher(string, shift) {
  const alphabet = 'abcdefghijklmnopqrstuvwxyz';
  
  function shiftChar(char) {
    const isUpperCase = char === char.toUpperCase();
    const index = alphabet.indexOf(char.toLowerCase());
    if (index === -1) return char;
    
    let newIndex = (index + shift) % 26;
    if (newIndex < 0) newIndex += 26;
    
    const shiftedChar = alphabet[newIndex];
    return isUpperCase ? shiftedChar.toUpperCase() : shiftedChar;
  }
  
  return string.split('').map(shiftChar).join('');
}
