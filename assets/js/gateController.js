let signalOn = function () {

  let so = new XMLHttpRequest();
  so.open("GET", "../../utils/gateOpen.php");
  so.onreadystatechange = function () {
    if (so.readyState == 4) {
      if (so.status == 200) {
      }
      else {
        // alert("HTTP ERRORS");
        console.log('HTTP ERROR from signalOn()')
      }
    }
  }
  so.send();
}

let signalOff = function () {
  let so = new XMLHttpRequest();
  so.open("GET", "../../utils/allPinsOff.php");
  so.onreadystatechange = function () {
    if (so.readyState == 4) {
      if (so.status == 200) {
      }
      else {
        // alert("HTTP ERRORS");
        console.log('HTTP ERROR from signalOff()')
      }
    }
  }
  so.send();
}

let alarmOff = function () {
  let ao = new XMLHttpRequest();
  ao.open("GET", "../../utils/alarmOff.php");
  ao.onreadystatechange = function () {
    if (ao.readyState == 4) {
      if (ao.status == 200) {
      }
      else {
        // alert("HTTP ERRORS");
        console.log('HTTP ERROR from alarmOff()')
      }
    }
  }
  ao.send();
}

let gateHold = function () {
  let ao = new XMLHttpRequest();
  ao.open("GET", "../../utils/gateHold.php");
  ao.onreadystatechange = function () {
    if (ao.readyState == 4) {
      if (ao.status == 200) {
      }
      else {
        // alert("HTTP ERRORS");
        console.log('HTTP ERROR from gateHold()')
      }
    }
  }
  ao.send();
}

let doorOpen = function () {
  let ao = new XMLHttpRequest();
  ao.open("GET", "../../utils/doorOpen.php");
  ao.onreadystatechange = function () {
    if (ao.readyState == 4) {
      if (ao.status == 200) {
      }
      else {
        // alert("HTTP ERRORS");
        console.log('HTTP ERROR from gateHold()')
      }
    }
  }
  ao.send();
}

let unlockFrontDoor = function () {
  let ufd = new XMLHttpRequest();
  ufd.open("GET", "http://door.cateam.org/utils/unlockFrontDoor.php", true);
  ufd.onreadystatechange = function () {
    if (ufd.readyState == 4) {
      if (ufd.status == 200) {
        console.log('Successfully called unlockFrontDoor.php');
      }
      else {
        // alert("HTTP ERRORS");
        console.log('HTTP ERROR from unlockFrontDoor.php')
      }
    }
  }
  ufd.send();
}

let openFrontDoor = function () {
  let ofd = new XMLHttpRequest();
  // ofd.open("GET", "../../utils/frontDoor/openFrontDoor.php");
  ofd.open("GET", "http://door.cateam.org/utils/openFrontDoor.php", true);
  ofd.onreadystatechange = function () {
    if (ofd.readyState == 4) {
      if (ofd.status == 200) {
        console.log('Successfully called openFrontDoor.php');
      }
      else {
        // alert("HTTP ERRORS");
        console.log('HTTP ERROR from openFrontDoor.php')
      }
    }
  }
  ofd.send();
}


$(document).ready(function () {
  // send signal to close gate every 10 seconds
  // setInterval(function(){
  //   signalOff();
  //   alarmOff();
  // },10000)

  $('#logout').bind('click touchstart', function (e) {
    e.preventDefault();

    let target = $('#logout')
    target.fadeOut();
    target.fadeIn();
    setTimeout(function () {
      window.history.go(0);
    }, 700)
  })

  $('#clickON').bind('touchstart click', function (e) {
    signalOn();
    $('#clickON').addClass("btn-success").removeClass("btn-danger");
    // setTimeout(function () { signalOff(); }, 300);
    setTimeout(function () {
      // $('#clickON').prop('disabled', true);
      $('#clickON').addClass("btn-danger").removeClass("btn-success");
      // $('#clickON').prop('disabled', false);
      // alarmOff();
    }, 1000);
  })

  $('#openFrontDoor').bind('touchstart click', function (e) {
    console.log('openFrontDoor button clicked...')
    console.log('calling openFrontDoor function...')
    openFrontDoor();
    console.log('done...')
    $('#openFrontDoor').addClass("btn-success").removeClass("btn-danger");

    setTimeout(function () {
      $('#openFrontDoor').addClass("btn-danger").removeClass("btn-success");
    }, 1000);
  })

})
