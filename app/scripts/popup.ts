import * as $ from 'jquery';

$(document).ready(
  function listenToClicks() {
    $('#button_firstpage').click(); { () => {
        document.body.innerHTML = '';
      };
    }

  });




 /* function listenToClicks(e){
    document.addEventListener('click',=>{
      var ev = e.target.id.toString();
      if(e.target.id=='button_firstpage') {
        document.body.innerHTML = '';
      }
    });
  }
*/

