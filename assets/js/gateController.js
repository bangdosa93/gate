let signalOn = function () {
  let so = new XMLHttpRequest();
  so.open("GET", "../../utils/pinon.php");
  so.onreadystatechange = function () {
    if (so.readyState == 4) {
      if (so.status == 200) {
      }
      else {
        alert("HTTP ERRORS");
      }
    }
  }
  so.send();
}

let signalOff = function () {
  let so = new XMLHttpRequest();
  so.open("GET", "../../utils/pinoff.php");
  so.onreadystatechange = function () {
    if (so.readyState == 4) {
      if (so.status == 200) {
      }
      else {
        alert("HTTP ERRORS");
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
        alert("HTTP ERRORS");
      }
    }
  }
  ao.send();
}

$(document).ready(function () {
  $('#logout').bind('click touchstart', function (e) {
    e.preventDefault();
    // window.history.go(0);
    let target = $('#logout')
    target.fadeOut();
    setTimeout(function(){
      target.fadeIn();
    },100)
  })

  $('#clickON').bind('touchstart click', function (e) {
    signalOn();
    $('#clickON').addClass("btn-success").removeClass("btn-danger");
    setTimeout(function () { signalOff(); }, 300);
    setTimeout(function () {
      $('#clickON').prop('disabled', true);
      $('#clickON').addClass("btn-danger").removeClass("btn-success");
      $('#clickON').prop('disabled', false);
      alarmOff();
    }, 1000);
  })
})
