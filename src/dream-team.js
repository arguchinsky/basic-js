module.exports = function createDreamTeam(members) {
  //throw 'Not implemented';
  // remove line with error and write your code here
  if (members instanceof Array){
    return members.filter((e) => typeof e === 'string').map((e) => e.trim()[0].toUpperCase()).sort().join('');
  }
  return false;
};
