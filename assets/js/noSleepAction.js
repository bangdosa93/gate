let noSleep = new NoSleep;
var wakeLockEnabled = false;
let target = $('.no-sleep');
// console.log(target)
target.bind('touchstart click', function(){
  if (!wakeLockEnabled) {
    noSleep.enable(); // keep the screen on!
    wakeLockEnabled = true;
    target.css('color',"#e0f119");
  } else {
    noSleep.disable(); // let the screen turn off.
    wakeLockEnabled = false;
    target.css('color',"white");
  }
})
    
    
    