function superbowlWin(record){
  let winYear = record.find(win);
  return winYear ? winYear.year : undefined;

} 

function win(obj){
  return obj.result === "W"
}