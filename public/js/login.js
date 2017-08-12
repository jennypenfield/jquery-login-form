/* global $ */

$('#loginBtn').click(login)

function login (evt) {
  evt.preventDefault()
  let username = $('#username').val()
  let password = $('#password').val()
  if (username !== '' && password !== '') {
    waitingForServer()
    const LOGIN_URL = 'http://127.0.0.1:7979/api/login'
    let userData = {username: username, password: password}

    $.ajax({
      type: 'POST',
      url: LOGIN_URL,
      data: userData,
      success: loginSuccess,
      timeout: 15000,
      error: loginFail
    })
  } else {
    $('.messages-to-user').html('Please enter a valid username and password')
  }
}

function waitingForServer () {
  $('#loginBtn').attr('disable', true)
}

function loginSuccess () {
  window.location = 'http://127.0.0.1:7979/index.html'
}

function loginFail (error) {
  console.log(error)
  if (error.status === 400) {
    $('.messages-to-user').html('Invalid username or password')
  } else {
    $('.messages-to-user').html('Technical difficulties--please try again.')
  }
  $('#loginBtn').attr('disable', false)
}

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Help Modal
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

$('#getHelpBtn').click(showHelpModal)

function showHelpModal () {
  console.log('help modal clicked')
  let helpFileName = 'login-help-' + randomNum(1, 4) + '.md'
  $.ajax({
    url: 'http://127.0.0.1:7979/md/' + helpFileName,
    dataType: 'text',
    success: function (data) {
      $('.help-modal').addClass('modal-open')
      $('body').addClass('modal-open modal-back')
      $('.modal-body').html(data)
    }
  })
}

function randomNum (min, max) {
  return Math.floor(Math.random() * max + min)
}

$('.close-btn, .x-btn').click(closeHelpModal)
$('.modal-open, .modal-back').click(closeHelpModal)

function closeHelpModal () {
  console.log('close button clicked')
  $('.help-modal').removeClass('modal-open')
  $('body').removeClass('modal-open modal-back')
}
