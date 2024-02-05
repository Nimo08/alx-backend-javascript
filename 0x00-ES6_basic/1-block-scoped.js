export default function taskBlock(trueOrFalse) {
    var task = false;
    var task2 = true;
  
    // let only covers the block scope, avoids overwriting
    if (trueOrFalse) {
      let task = true;
      let task2 = false;
    }
  
    return [task, task2];
  }