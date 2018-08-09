import $ from 'jquery';

$(document).ready(
  function listenToClicks() {
    $('#button_firstpage').click(); { () => {
        document.body.innerHTML = '';
      };
    }

  });


/*
document.addEventListener('click', (e: any) => {
  let event_id = e.target.id;
  if (event_id === 'button_firstpage') {
      document.body.innerHTML = '';
  }


});*/

