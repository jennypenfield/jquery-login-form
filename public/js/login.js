/* global $ */

$('#loginBtn').click(login)

function login (evt) {
  evt.preventDefault()
  let username = $('#username').val()
  let password = $('#password').val()
  if (username !== '' && password !== '') {
    waitingForServer()
    const LOGIN_URL = 'http://127.0.0.1:7979/api/login'
    let data = {username: username, password: password}
    $.post(LOGIN_URL, data).done(loginSuccess).fail(loginFail)
  } else {
    window.alert('Please enter a valid username and password')
  }
}

function waitingForServer () {
  $('#loginBtn').attr('disable', true)
}

function loginSuccess () {
  window.location = 'http://127.0.0.1:7979/index.html'
}

function loginFail (error) {
  if (error.status === 400) {
    window.alert('Invalid username or password')
  } else {
    window.alert('Technical difficulties--please try again.')
  }
  $('#loginBtn').attr('disable', false)
}
