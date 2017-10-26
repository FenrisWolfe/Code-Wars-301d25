function insertDash(num) {
  //code me
  var n = num.toString();
  var answer = '';
  var i = 0;
  while (i < n.length) {

    if (parseInt(n[i]) % 2 !== 0 && parseInt(n[i + 1]) % 2 !== 0 && i !== n.length - 1) {
      answer = answer + n[i] + '-';
    } else if (parseInt(n[i]) % 2 !== 0 && parseInt(n[i + 1]) % 2 !== 0 && i === n.length - 1) {
      answer = answer + n[i];
    } else {
      answer = answer + n[i];
    }
    i++;
  }
  return answer;
}
