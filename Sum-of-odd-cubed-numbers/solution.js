function cubeOdd(arr) {
if (arr.some(n => typeof n !== 'number')) return undefined;
  return arr.filter(n => n%2 != 0).map(n => n*n*n).reduce((a, b) => a + b, 0);
}
