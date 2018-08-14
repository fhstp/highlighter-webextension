 // Loading of the second page through jQuery
 import * as $  from 'jquery';
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
 // div of page 3
 let div_page_3: any;
 div_page_3 = $('<div></div>')
 .attr('id', 'div_page_3');


 // giving the checkbox an event
let checkbox_1: any;
 // div_of the add critiques div


 // a counter for the number of times the critiques-div was hidden
 let counter: number;
 counter = 0;
 let input_critiques: any;

let bool_1: boolean;
 bool_1 = false;
 let bool_3 = false;
 let bool_4: any;
 let bool_5: any = false;
 // another boolean for the click-eventHandler
 let bool_crit_sel: any;
 bool_crit_sel = false;
let div_agb_2: any;


$(document).ready (
  function w() {
    $('#add_button').click( () => {
      alert('woww');
    });
  }

);




checkbox_1 = $('<input>');

$(checkbox_1).change( (e) => {
  if (e.target.checked && !bool_1) {
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


    div_page_3.before(div_agb_2);
  }
  else if ( e.target.checked && bool_1) {
    $(div_agb_2).removeAttr('class hidden');
  }
  else if ( !e.target.checked) {
    $(div_agb_2).attr('class', 'hidden');
    bool_1 = true;
  }
}
);








$(document).ready(
  function listenToClicks() {
  let content_1: any;
  let content_2: any;
    let lS: any;

    bool_4 = false;
  let number_page: any;
  number_page = 1;
  lS = localStorage.getItem(key);


    $('#button_firstpage').click( () => {

    if (lS === 'false') {
      loadSecondPage(content_1, content_2);
    number_page = false;
    bool_4 = true;
          localStorage.setItem(key, 'true');
  }
    else if (lS === 'true') {
      content_1 = $('#content_1')
     .addClass('hidden');
     loadThirdPage(content_2);
     number_page = 2;
  }

  });

  $('#button_secondpage').click( () => {
    // check if there had been AGBs loaded before
    if (bool_5) {
      $('#div_agb_2').removeClass('hidden');
    }
    loadThirdPage(content_2);
    number_page = 2;
  });


/*

  else if ((event_id === 'add_buttonimage' || event_id === 'add_button') && bool_3) {
    hideNewCritiques();
  }
*/
$('#general_information').click(() => {
  switch (number_page) {
    case 1: {
       // possibility 1: page one info
      loadSecondPage(content_1, content_2);
    }
    case 2: {
      if ($('#div_agb_2').html() !== '') {
          $('#div_agb_2').addClass('hidden');
          bool_5 = true;
      }
      let div_page_3: any;
      div_page_3 = $('#div_page_3');
  let button_thirdpage: any;
    button_thirdpage = $('#button_thirdpage');
     div_page_3.html('');
    button_thirdpage.remove();

  loadSecondPage(content_1, content_2);

    }
  }

});
// fff
$('#button_critiques').click( () => {
  let input_crit: any;
  input_crit = $('#input_critiques');
  // check if there are critiques
  if (input_crit.value !== '' ) {
    // check if they are already added
    let critiques_selector: any;
    critiques_selector = $('.critiques');

    for (let i = 0; i < critiques_selector.length; i++) {
      if (critiques_selector[i].html() === input_crit.value) {
        bool_crit_sel = true;
      }
    }



if (!bool_crit_sel) {
let crit_checkbox: any;
crit_checkbox = $('<input>')
.attr('type', 'checkbox');

let div_new_critique: any;
div_new_critique = $('<div></div>')
.append(crit_checkbox);

let span_new_critique: any;
span_new_critique = $('<span></span>')
.attr('class', 'critiques');

div_new_critique.append(crit_checkbox);
span_new_critique.append(input_crit.value + '');
div_new_critique.append(span_new_critique);


 div_page_3.berfore(div_new_critique);
}
else {
alert('Dieses Kriterium ist schon hinzugefügt');
bool_crit_sel = false;
}

  }
});







$('#closing_icon').click(
  (() => {
    window.close();
  })
);




  }
);





 function loadSecondPage(c1: any, c2: any) {

  c1 = $('#content_1');
  $('#content_1').addClass('hidden');


  c2 = $('#content_2');
  $('#content_2').removeClass('hidden');
  }
function loadThirdPage(c2: any) {


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

 // checkbox_1...to select the comparison of AGBs
 checkbox_1
 .attr('type', 'checkbox')
.attr('id', 'checkbox_1');


  let textNode_1 = 'Vergleiche AGBs';

  div
  .append(checkbox_1)
  .append(textNode_1);

  div_page_3.append(div);


  let div_array = new Array();
  let checkbox_array = new Array();
  let textNode_array = new Array(); // actually just strings

  let div_page_3_part_2: any;
  div_page_3_part_2 = $('<div></div>')
  .attr('id', 'div_page_3_part_2');

  let title_div: any;
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


    add_button = $('<button></button>')
    .attr('id', 'add_button');

    add_button_image = $('<img>')
    .attr('id', 'add_buttonimage')
    .attr('src', '../images/add_button.png');




  }
  let add_critics: any;
  add_critics = $('<div></div>')
  .attr('id', 'div_add_crits')
  .append(add_button)
  .append('Kriterien hinzufügen');
  add_button.append(add_button_image);

    div_page_3.append(add_critics);

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

    let input_critics: any; // it should have been named criteria
  let input_critics_button: any;


  if (counter === 0) {
    input_critics = $('input')
    .attr('type', 'text')
    .attr('id', 'input_critiques')
    .attr('placeholder', 'Kriterien hinzufügen');


    input_critics_button = $('<button></button>')
    .attr('type', 'button')
    .attr('class', 'button_primary')
   .attr('id', 'button_critiques');
    input_critics_button.append('OK');

    let input_critics_div = $('<div></div>')
    .attr('id', 'input_critiques_div');

    input_critics_div.append(input_critics)
    .append(input_critics_button);

    div_page_3.before(input_critics_div);




}
else if (counter > 0) {
  input_critiques.removeClass('hidden');
}
bool_3 = true;
}

function hideNewCritiques() {


  input_critiques = $('#input_critiques_div')
  .addClass('hidden');

  if (counter === 0) {
    counter++;
  }
  bool_3 = false;
}

