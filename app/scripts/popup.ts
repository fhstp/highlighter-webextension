// Loading of the second page through jQuery(Is not accessible at the moment)
/* import $ from 'jquery';

$(document).ready(
  function listenToClicks() {
    $('#button_firstpage').click(); { () => {
        document.body.innerHTML = '';
      };
    }

  });

*/

document.addEventListener('click', (e: any) => {
  let event_id = e.target.id;
  let content_1: any;
  let content_2: any;

  if (event_id === 'button_firstpage') {
    loadSecondPage(e, content_1, content_2);
  }


  else if (event_id === 'button_secondpage') {
    loadThirdPage(content_2);

  }


});

function loadSecondPage(e: any, c1: any, c2: any) {


    c1 = document.getElementById('content_1');
      c1.classList.add('hidden');

    c2 = document.getElementById('content_2');
      c2.classList.remove('hidden');
}
function loadThirdPage(c2: any) {
  let div_page_3: any;
  div_page_3 = document.createElement('div');
  div_page_3.setAttribute('id', 'div_page_3');

  c2 = document.getElementById('content_2');
  c2.classList.add('hidden');

  let AGB_text = document.createElement('input');
  AGB_text.setAttribute('placeholder', 'Fügen Sie den Text der AGBs ein...');
  AGB_text.setAttribute('type', 'text');
  AGB_text.setAttribute('id', 'AGBtext_1');

  div_page_3.appendChild(AGB_text);

  let AGB_link = document.createElement('input');
  AGB_link.setAttribute('placeholder', 'Fügen Sie den Link ein...');
  AGB_link.setAttribute('type', 'text');
  AGB_link.setAttribute('id', 'AGBlink_1');

  div_page_3.appendChild(AGB_link);

  // span-tag
  let div: any;
  div = document.createElement('div');
  div.setAttribute('id', 'div_page_3');

  let checkbox_1: any;
  checkbox_1 = document.createElement('input');
  checkbox_1.setAttribute('type', 'checkbox');
  checkbox_1.setAttribute('id', 'checkbox_1');

  let textNode_1 = document.createTextNode('Vergleiche AGBs');
  div.appendChild(checkbox_1);
  div.appendChild(textNode_1);

  div_page_3.appendChild(div);


  let div_checkboxenlist:any;
  div_checkboxenlist=document.createElement('div');
  div_checkboxenlist.setAttribute('id','checkboxen');

  let p_policies:any;
  p_policies=document.createElement('p');
  p_policies.setAttribute('id','p_policies');

  let form_checkboxen: any;
  form_checkboxen=document.createElement('form');
  form_checkboxen.setAttribute('id', 'form_checkboxen');

  let checkbox_array=new Array();
  let textNode_array=new Array();
  for (let i = 0 ; i < 6 ; i++){
    checkbox_array[i]=document.createElement('input');
    checkbox_array[i].setAttribute('id','checkbox_out_of_array_' + i + 1 );

    switch (i) {
        case 0: {
          textNode_array[0] = document.createElement('p');
          textNode_array[0].appendChild(document.createTextNode('Bezahlung'));

        }
        case 1: {
          textNode_array[1]=document.createTextNode('Lieferung und Versand');

        }
        case 2: {
          textNode_array[2]=document.createTextNode('Gewährleistung');

        }
        case 3: {
          textNode_array[3]=document.createTextNode('Garantie');

        }
        case 4: {
          textNode_array[4]=document.createTextNode('Umtausch');

        }
        case 5: {
          textNode_array[5]=document.createTextNode('Rückgabe');

        }


    }



    checkbox_array[i].appendChild(textNode_array[i]);
  }




  div_checkboxenlist.appendChild(form_checkboxen);
  div_checkboxenlist.appendChild(p_policies);



  document.body.appendChild(div_page_3);



}
