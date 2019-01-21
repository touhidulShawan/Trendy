$(document).ready(function () {
  $('.sidenav').sidenav()
  $('.materialboxed').materialbox()
  $('.parallax').parallax()
  $('.input#input_text, textarea#textarea2').characterCounter()
  $('.tooltipped').tooltip()
  $('.scrollspy').scrollSpy()
  $('#menu-options a').click(function () {
    $('a').removeClass('active')
    $(this).addClass('active')
  })
})
