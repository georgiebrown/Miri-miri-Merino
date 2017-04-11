$(document).ready(start);

function start(){


  $('.emailMe').click(sendEmail);

  function sendEmail(){
    window.open('mailto:hello@mirimirimerino.com?subject=Hello&body=');
  }

}
