 // Loading of the second page through jQuery
 import * as $  from 'jquery';
 // import { test } from './additionnal_scripts.ts/utility';

// page 1
 let content_1: any;
 // page 2
let content_2: any;
    // to add critics this button is made
    let add_button: any; let add_button_image: any;
// localStorage implementation
let key: any;
key = 'lS';
if (localStorage.getItem(key) !== 'true' && localStorage.getItem(key) !== 'false') {
 localStorage.setItem(key, 'false');
 }
 let key_2: any;
key_2 = 'lS_2';
if (localStorage.getItem(key_2) !== 'true' && localStorage.getItem(key_2) !== 'false') {
 localStorage.setItem(key_2, 'false');
 }

 // div of page 3
 let div_page_3: any;
 div_page_3 = $('<div></div>')
 .attr('id', 'div_page_3');


 // giving the checkbox an event
let checkbox_1 = $('<input>');
 // div_of the add critiques div


 // a counter for the number of times the critiques-div was hidden
 let counter: number;
 counter = 0;
 let input_critiques: any;

let bool_1: boolean; // for checking if the checkbox is not being activated for the frist time // decides if the second input fields should be loaded after the checking of of checkbox_1
 bool_1 = false;
 let bool_3 = false; // currently not used ( it is used at the functions addCritique() and hideNexCritique()
 let bool_4= false; // it is for inicating that the the localStorage caluable is now set on true (is now "hiding" the information pages)
 let bool_5 = false; // for indicating the press of the info-button on page 3
 let bool_crit_sel= false; // checkes if the criteria have been added
 let bool_input_vis= false;

let div_agb_2: any; // div in which the added inputs of the checkbox are

let add_critics: any; // the div for adding the critiria

let title_div: any;

let input_critics_button: any; // input "OK"-button
input_critics_button = $('<button></button>')
    .attr('type', 'button')
    .attr('class', 'button_primary')
   .attr('id', 'button_critiques');
    input_critics_button.append('OK');
let input_critics: any; // it should have been named criteria
// the input to write the new criteria in
input_critics = $('<input>') // with only input as the string it had been added 9 times
.attr('type', 'text')
.attr('id', 'input_critiques')
.attr('placeholder', 'Kriterien hinzufügen');

let checkbox_array = new Array(); // checkboxes of the criteria
let textNode_array = new Array(); // actually strings & the text for the checkboxes

// button for deleting criteria

let button_delete_criteria: any;
let image_delete_criteria: any;

let div_new_critique: any; // the div for only on of the new criteria
// div_new_critique = new Array();

let  div_all_new_criteria = $('<div></div>');
let val = 0;// for counting the new criteria



$(document).ready(
  function listenToClicks() {
  let content_1: any;
  let content_2: any;
    let lS: any;
  let number_page: any;
  number_page = 1;
  lS = localStorage.getItem(key);
 if (lS === 'false') {
      $('#popup-content_2').removeClass('hidden');
      localStorage.setItem(key, 'true');
    }
    else if (lS === 'true') {
      loadThirdPage(content_2);
    }
    $('#button_firstpage').click( () => {
      $('#popup-content_2').addClass('hidden');
      if (!bool_5) {
        loadThirdPage(content_2);
      }
      else {
        $('#div_page_3').removeClass('hidden');
        $('#button_thirdpage').removeClass('hidden');
      }
        });


  $('#button_secondpage').click( () => {
    $('#div_page_3').removeClass('hidden');
  $('#button_thirdpage').removeClass('hidden');
  $('#content_2').addClass('hidden');
    bool_3 = false; // Check not complete
  });

$('#general_information').click(() => {

      $('#popup-content_2').removeClass('hidden');
          $('#div_page_3').addClass('hidden');
          bool_5 = true;

  let button_thirdpage: any;
    button_thirdpage = $('#button_thirdpage');
    button_thirdpage.addClass('hidden');
});

$('#closing_icon').click(
  (() => {
    window.close();
  })
);
  }
);

 function loadSecondPage() {
  $('#div_page_3').addClass('hidden');
  $('#button_thirdpage').addClass('hidden');
  $('#content_2').removeClass('hidden');
  }

function loadThirdPage(c2: any) {

$(checkbox_1).change( (e: any) => {
    if (e.target.checked && !bool_1) {
      if ( localStorage.getItem(key_2) === 'false') {
        loadSecondPage();
         localStorage.setItem(key_2, 'true');
      }
    div_agb_2 = $('<div></div>')
    .attr('id', 'div_agb_2');
    let AGB_text_2 = $('<input>')
    .attr('id', 'AGBtext_2')
    .attr('type', 'text')
    .attr('placeholder', 'Fügen Sie den Text der AGBs ein...');
    div_agb_2.append(AGB_text_2);
    let AGB_link_2 = $('<input>')
    .attr('id', 'AGBlink_2')
    .attr('type', 'text')
    .attr('placeholder', 'Fügen Sie den Link ein...');
    div_agb_2.append(AGB_link_2);

     $('#AGBlink_1').after(div_agb_2);

    bool_1 = true;
    bool_input_vis = true;
  }
  else if ( e.target.checked && bool_1) {
    $(div_agb_2).removeAttr('class hidden');
   bool_input_vis = true;
  }
  else if ( !e.target.checked && bool_1) {
    $(div_agb_2).attr('class', 'hidden');
    bool_input_vis = false;
  }

});

  c2 =  $('#content_2');
  c2.attr('class', 'hidden');

  let AGB_text = $('<input>')
    .attr('placeholder', 'Fügen Sie den Text der AGBs ein...')
    .attr('type', 'text')
    .attr('id', 'AGBtext_1');

  div_page_3.append(AGB_text);

  let AGB_link = $('<input>')
   .attr('placeholder', 'Fügen Sie den Link ein...')
   .attr('type', 'text')
   .attr('id', 'AGBlink_1');

  div_page_3.append(AGB_link);

  // div-tag
  let div: any;
  div = $('<div></div>')
 .attr('id', 'div_page_3');

checkbox_1
 .attr('type', 'checkbox')
.attr('id', 'checkbox_1');

  let textNode_1 = 'Vergleiche AGBs';

  div
  .append(checkbox_1)
  .append(textNode_1);

  div_page_3.append(div);

  let div_array = new Array();

  let div_page_3_part_2: any;
  div_page_3_part_2 = $('<div></div>')
  .attr('id', 'div_page_3_part_2');

  title_div = $('<h3></h3>')
  .attr('class', 'heading_3')
  .attr('id', 'div_add_crits')
  .append('Kriterien');

  div_page_3_part_2.append(title_div);
  div_page_3.append(div_page_3_part_2);

  div_page_3_part_2.append(title_div);
  div_page_3.append(div_page_3_part_2);

  for (let i = 0 ; i < 6 ; i++) {
    div_array[i] = $('<div></div>')
    .attr('id', 'div_out_of_array_' + (i + 1) );

    checkbox_array[i] = $('<input>')
    .attr('id', 'checkbox_out_of_array_' + i + 1 )
    .attr('type', 'checkbox');
    div_array[i].append(checkbox_array[i]);

    switch (i) {
      case 0: {
        textNode_array[0] = $('<span></span>')
         .append('Bezahlung')
         .attr('class', 'critiques');
         div_array[i].append(textNode_array[i]);
      }
      case 1: {
        textNode_array[1] = $('<span></span>')
        .append('Lieferung und Versand')
        .attr('class', 'critiques');
        div_array[i].append(textNode_array[i]);

      }
      case 2: {
        textNode_array[2] = $('<span></span>')
        .append('Gewährleistung')
        .attr('class', 'critiques');
        div_array[i].append(textNode_array[i]);
      }
      case 3: {
        textNode_array[3] = $('<span></span>')
        .append('Garantie')
        .attr('class', 'critiques');
        div_array[i].append(textNode_array[i]);
      }
      case 4: {
        textNode_array[4] = $('<span></span>')
        .append('Umtausch')
        .attr('class', 'critiques');
        div_array[i] .append(textNode_array[i]);
      }
      case 5: {
        textNode_array[5] = $('<span></span>')
        .append('Rückgabe')
        .attr('class', 'critiques');
        div_array[i].append(textNode_array[i]);
      }
        div_page_3.append(div_array[i]);
    }
  }
  add_button = $('<button></button>')
  .attr('id', 'add_button');

  add_button_image = $('<i></i>')
  .attr('id', 'add_buttonimage')
  .attr('class','fa fa-plus-circle')
  .attr('aria-hidden','true');




  add_critics = $('<div></div>')
  .attr('id', 'div_add_crits')
  .append(add_button)
  .append('Kriterien hinzufügen');
  add_button.attr('id', 'button_add')
   .append(add_button_image);

    div_page_3.append(add_critics);

    // the mistake was accidently putting it into the for-loop
    $(add_button).click( () => {
      if (bool_3) {
        hideNewCritiques();
      }
      else {
        addNewCritiques();
      }
    });
      // adding the event to the OK-button
      $(input_critics_button).click( () => {

        let input_crit: any;
        input_crit = $('input#input_critiques');
        // check if there are critiques
        if (input_crit.val() !== '' ) {
          // check if they are already added
          let critiques_selector: any;
          critiques_selector = $('.critiques');
          for (let i = 0; i < critiques_selector.length; i++) {
            if (critiques_selector[i].innerHTML === input_crit.val()) {
              bool_crit_sel = true;
            }
          }

      if (!bool_crit_sel ) {


        let crit_checkbox: any;
        crit_checkbox = $('<input>')
        .attr('type', 'checkbox');

        let span_new_critique: any;
        span_new_critique = $('<span></span>')
        .attr('class', 'critiques');

// <i class="fa fa-minus-circle" aria-hidden="true"></i>

        image_delete_criteria = $('<i></i>')
        .attr('id', 'delete_criteria')
        .attr('class', 'fa fa-minus-circle')
        .attr('aria-hidden', 'true');

        button_delete_criteria = $('<button></button')
        .attr('class', 'button_delete_criteria')
        .append(image_delete_criteria);
        span_new_critique.append(input_crit.val());
       div_new_critique = $('<div></div>')
        .attr('class', 'div_new_critiques')
        .append(crit_checkbox)
        .append(crit_checkbox)
        .append(span_new_critique)
        .append(button_delete_criteria);

div_all_new_criteria.append( div_new_critique);
$('div#div_add_crits').before(div_all_new_criteria);

  $('.button_delete_criteria').click( (e) => {
     $(e.currentTarget).parent().remove();
   });


      }

      else {
      alert('Dieses Kriterium ist schon hinzugefügt');
      bool_crit_sel = false;
      }

        }
      });
      $('#button_thirdpage').click( () => {
        // if button.thirdpage.checked
        if (!checkbox_1.prop('checked')) {
          // sendData_no_compare();
        }
      });

       // The primary button of the third page
  let button_thirdpage: any;
  button_thirdpage = $('<button></button>')
  .attr('class', 'button_primary')
  .attr('id', 'button_thirdpage')
  .append('Check AGBs');

  div_page_3.appendTo(document.body);
  button_thirdpage.appendTo(document.body);
}
   function addNewCritiques() {

  if (counter === 0) {

    let input_critics_div = $('<div></div>')
    .attr('id', 'input_critiques_div');

    input_critics_div.append(input_critics)
    .append(input_critics_button);

    $('div#div_add_crits').after(input_critics_div);




}
else if (counter > 0) {

  input_critiques.removeClass('hidden');
}
bool_3 = true;

}

function hideNewCritiques() {

 // alert('hide');
  input_critiques = $('#input_critiques_div')
  .addClass('hidden');
  bool_3 = false;
  if (counter === 0) {
    counter++;
  }
}


