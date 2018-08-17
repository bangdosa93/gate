$(document).ready(function () {
  $('.lock-holder').bind('touchstart click', function (e) {
    e.preventDefault();
    let lock = `<i class="fas fa-lock" ></i>`
    let unlock = `<i class="fas fa-unlock-alt" ></i>`
    let target = $('.lock-holder');

    if (target.hasClass('unlocked')) {
      target.addClass('locked bounce').removeClass('unlocked')
      $('.gate-button').attr("disabled", true).addClass('btn-secondary').removeClass('btn-danger').empty().append('Not Available')
      gateHold();
      setTimeout(function(){
        target.removeClass('bounce')  
        target.empty().append(lock)
      },600)
      
    } else if (target.hasClass('locked')) {
      target.addClass('unlocked bounce').removeClass('locked')
      $('.gate-button').attr("disabled", false).addClass('btn-danger').removeClass('btn-secondary').empty().append('OPEN GATE')
      signalOff();
      setTimeout(function () {
        target.removeClass('bounce')  
        target.empty().append(unlock)
      }, 600)
    }
  })
})