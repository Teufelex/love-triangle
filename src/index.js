/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
  var i;
  var f = 0;
  for (i = 0; i < preferences.length; i++) {
    var n = preferences[i];
    var k = preferences[n-1];
    var m = preferences[k-1];
    if (m == i+1 && k!=n && k!=m && m!=n) {
      f++;
    }
    }
  f=f/3;
return f;
}
  