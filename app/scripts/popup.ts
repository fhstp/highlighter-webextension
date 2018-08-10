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

// div of page 3
  let div_page_3: any;
  div_page_3 = document.createElement('div');
// loading the first three pages
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
// giving the checkbox an event
let checkbox_1: any; let bool_1:boolean; bool_1=false;
let div_agb_2:any;
checkbox_1 = document.createElement('input');
checkbox_1.addEventListener('change', (e: any) => {
  if (e.target.checked && e.target.id === 'checkbox_1' && !bool_1) {
    div_agb_2 = document.createElement('div');
    let AGB_text_2 = document.createElement('input');
    AGB_text_2.setAttribute('placeholder', 'Fügen Sie den Text der AGBs ein...');
    AGB_text_2.setAttribute('type', 'text');
    AGB_text_2.setAttribute('id', 'AGBtext_1');

    div_agb_2.appendChild(AGB_text_2);

    let AGB_link_2 = document.createElement('input');
    AGB_link_2.setAttribute('placeholder', 'Fügen Sie den Link ein...');
    AGB_link_2.setAttribute('type', 'text');
    AGB_link_2.setAttribute('id', 'AGBlink_1');

    div_agb_2.appendChild(AGB_link_2);

    // appendChild is not wanted, insertBefore should be used instead
    div_page_3.appendChild(div_agb_2);
  }
  else if(e.target.checked && e.target.id === 'checkbox_1' && bool_1){
    div_agb_2.removeAttribute('class','hidden');
  }
  else if(!e.target.checked && e.target.id === 'checkbox_1'){
    div_agb_2.setAttribute('class','hidden');
    bool_1=true;
  }
});



function loadSecondPage(e: any, c1: any, c2: any) {


    c1 = document.getElementById('content_1');
      c1.classList.add('hidden');

    c2 = document.getElementById('content_2');
      c2.classList.remove('hidden');
}
function loadThirdPage(c2: any) {
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

 // checkbox_1...to select the comparison of AGBs
  checkbox_1.setAttribute('type', 'checkbox');
  checkbox_1.setAttribute('id', 'checkbox_1');

  let textNode_1 = document.createTextNode('Vergleiche AGBs');
  div.appendChild(checkbox_1);
  div.appendChild(textNode_1);

  div_page_3.appendChild(div);


  let div_array = new Array();
  let checkbox_array = new Array();
  let textNode_array = new Array();

  let div_page_3_part_2:any;
  div_page_3_part_2= document.createElement('div');
  div_page_3_part_2.setAttribute('id','div_page_3_part_2');


  let title_div:any;
  title_div= document.createElement('h3');
  title_div.setAttribute('class', 'heading_3');
  title_div.appendChild(document.createTextNode('Kriterien'));


  div_page_3_part_2.appendChild(title_div);
  div_page_3.appendChild(div_page_3_part_2);

  for (let i = 0 ; i < 6 ; i++) {
    div_array[i] = document.createElement('div');
    div_array[i].setAttribute('id', 'div_out_of_array_' + (i + 1) );

    checkbox_array[i] = document.createElement('input');
    checkbox_array[i].setAttribute('id', 'checkbox_out_of_array_' + i + 1 );
    checkbox_array[i].setAttribute('type', 'checkbox');

    div_array[i].appendChild(checkbox_array[i]);

    switch (i) {
        case 0: {
          textNode_array[0]=document.createTextNode('Bezahlung');
          div_array[i].appendChild(textNode_array[i]);
        }
        case 1: {
          textNode_array[1]=document.createTextNode('Lieferung und Versand');
          div_array[i].appendChild(textNode_array[i]);

        }
        case 2: {
          textNode_array[2]=document.createTextNode('Gewährleistung');
          div_array[i].appendChild(textNode_array[i]);

        }
        case 3: {
          textNode_array[3]=document.createTextNode('Garantie');
          div_array[i].appendChild(textNode_array[i]);

        }
        case 4: {
          textNode_array[4]=document.createTextNode('Umtausch');
          div_array[i].appendChild(textNode_array[i]);

        }
        case 5: {
          textNode_array[5]=document.createTextNode('Rückgabe');
          div_array[i].appendChild(textNode_array[i]);

        }

        div_page_3.appendChild(div_array[i]);
    }



  }





  var button_thirdpage:any;
  button_thirdpage=document.createElement('button');
  button_thirdpage.setAttribute('class','button_primary');
  button_thirdpage.setAttribute('id','button_thirdpage');
  button_thirdpage.appendChild(document.createTextNode('Check AGBs'));

  document.body.appendChild(div_page_3);
  document.body.appendChild(button_thirdpage);


}
