$(document).ready(function () {
  $('.lock-holder').bind('touchstart click', function (e) {
    e.preventDefault();
    let lock = `<i class="fas fa-lock" ></i>`
    let unlock = `<i class="fas fa-unlock-alt" ></i>`
    let target = $('.lock-holder');

    if (target.hasClass('unlocked')) {
      target.addClass('locked bounce').removeClass('unlocked')
      $('.gate-button').attr("disabled", true).addClass('btn-secondary').removeClass('btn-danger').empty().append('Not Available').off('touchstart')
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

  $('.door-holder').bind('touchstart click', function (e) {
    e.preventDefault();
    let lock = `<i class="fas fa-door-closed"></i>`
    let unlock = `<i class="fas fa-door-open"></i>`
    let target = $('.door-holder');

    if (target.hasClass('door-locked')) {
      target.addClass('door-unlocked bounce').removeClass('door-locked')
      
      doorOpen();
      setTimeout(function () {

        target.removeClass('bounce')
        target.empty().append(unlock)
      }, 600)

      setTimeout(function () {
        target.addClass('door-locked').removeClass('door-unlocked')
        target.empty().append(lock)
      },4000)
    }

  })

  $('.front-door-holder').bind('touchstart click', function (e) {
    e.preventDefault();
    let lock = `<i class="fas fa-door-closed"></i>`
    let unlock = `<i class="fas fa-door-open"></i>`
    let target = $('.front-door-holder');

    if (target.hasClass('unlocked')) {
      target.addClass('bounce')
      console.log('unlockFrontDoor button clicked...')
      console.log('calling unlockFrontDoor function...')
      unlockFrontDoor();
      console.log('done');
      
      setTimeout(function () {
        target.removeClass('bounce')
      }, 600)
    }
  })
})