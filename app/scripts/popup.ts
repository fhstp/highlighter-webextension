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

  let counter_AGB: any;
 counter_AGB = 'lS_2';
  if (localStorage.getItem(counter_AGB) !== 'true' && localStorage.getItem(counter_AGB) !== 'false') {
   localStorage.setItem(counter_AGB, 'false');
   }
 // div of page 3
 let div_page_3: any;
 div_page_3 = $('<div></div>')
 .attr('id', 'div_page_3');


 // giving the checkbox an event
let checkbox_1: any;
checkbox_1 = $('<input>');
 // div_of the add critiques div


 // a counter for the number of times the critiques-div was hidden
 let counter: number;
 counter = 0;
 let input_critiques: any;

let bool_1: boolean; // for checking if the checkbox is not being activated for the frist time // decides if the second input fields should be loaded after the checking of of checkbox_1
 bool_1 = false;
 let bool_3: any = false; // currently not used ( it is used at the functions addCritique() and hideNexCritique()
 let bool_4: any = false; // it is for inicating that the the localStorage caluable is now set on true (is now "hiding" the information pages)
 let bool_5: any = false; // for indicating the press of the info-button on page 3
 let bool_crit_sel: any = false; // checkes if the criteria have been added
 let bool_input_vis: any = false;
 let bool_7 = false; // bool how the compare_AGB-function should be used

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

// The primary button of the third page
let button_thirdpage: any;
button_thirdpage = $('<button></button>')
.attr('class', 'button_primary')
.attr('id', 'button_thirdpage')
.append('Check AGBs');

 // valuable declatations for the server
 let body_link: any;
 let body_text;
 let body_search = new Array();

 // the first AGB_section

 let AGB_text: any;
 let AGB_link: any;

 let test = 'true';



 function insert_in_input(filtered_data: any) {
   chrome.tabs.create({url: 'http://highlighter.media.fhstp.ac.at:8080/agb'});
  chrome.tabs.executeScript( { // the code should be written with the help of jQuery and the parameter content should be worked oni
    code: ' document.body.innerHTML = "";var input_field = document.createElement("input"); input_field.value =  "' + filtered_data.markupString[0] + '"; document.body.appendChild(input_field); '});
  }



$(document).ready(
  function listenToClicks() {
  let content_1: any;
  let content_2: any;
    let lS: any;
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
    if (bool_5 ) { // && bool_input_vis
       $('#div_page_3').removeClass('hidden');
       $('#button_thirdpage').removeClass('hidden');
       $('#content_2').addClass('hidden');
      }
      else {
        loadThirdPage(content_2);
      }
    counter = 0;
    bool_3 = false;

    number_page = 2;
  });


$('#general_information').click(() => {
  switch (number_page) {
    case 1: {
       // possibility 1: page one info
      loadSecondPage(content_1, content_2);
    }
    case 2: {

          $('#div_page_3').addClass('hidden');
          bool_5 = true;


  let button_thirdpage: any;
    button_thirdpage = $('#button_thirdpage');
    button_thirdpage.addClass('hidden');
  loadSecondPage(content_1, content_2);
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



$(checkbox_1).change( (e: any) => {
  if (e.target.checked && !bool_1) {
    div_agb_2 = $('<div></div>')
    .attr('id', 'div_agb_2');
    let div_agb2_b = $('<b></b>')
    .attr('id', 'div_agb2_b')
    .append('Bereits verwendete AGBs');
    let AGB_text_2 = $('<input>')
    .attr('id', 'AGBtext_2')
    .attr('type', 'text')
    .attr('placeholder', 'Fügen Sie den Text der AGBs ein...');
    let AGB_link_2 = $('<input>')
    .attr('id', 'AGBlink_2')
    .attr('type', 'text')
    .attr('placeholder', 'Fügen Sie den Link ein...');
    // if there are any former AGBs
    if ( localStorage.getItem(counter_AGB) !== '0') {
       let AGB_span = $('<span></span>');
       let array_of_AGB_buttons = new Array();
       for (let i = 0; i < 10; i++) {
        array_of_AGB_buttons[i] = $('<button></button>')
        .attr('id', 'array_of_AGBs' + i)
        .attr('class', 'array_of_AGBs');
        AGB_span.append(array_of_AGB_buttons[i]);
       }
        bool_7 = true;
      //  switch_case_counterAGB();

    }
    div_agb_2
    .append(div_agb2_b)
    .append(AGB_text_2)
    .append(AGB_link_2);
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

  add_button_image = $('<img>')
  .attr('id', 'add_buttonimage')
  .attr('src', '../images/add_button.png');



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
    $(button_thirdpage).click( () => {
      body_link = $(AGB_link).val();
      body_text = $(AGB_text).val();
      check_criteria();
      switch_case_counterAGB();

      // if button.thirdpage.checked
              if (!checkbox_1.checked) {
      //  sendData_no_compare(body_link , body_text, body_search);
      }
    });

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



  // alert('add');
  }
  else if (counter > 0) {
  // alert('show');
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

  // Here come the functiona which should send the data to the server

  function sendData_no_compare(body_link: any, body_text: any, body_search: any) {
    // valuable declaration
    let xhttp = new XMLHttpRequest();
    let data: any;
    let filtered_data: any;

    let body_search_stringify = JSON. stringify(body_search);
    xhttp.open('POST', 'http://highlighter.media.fhstp.ac.at:8080/agb', false) ;
    xhttp.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
   xhttp.send('link=' + body_link + '&text=' + body_text + '&search[]=' + body_search_stringify);

  data = xhttp.responseText;
  filtered_data = JSON.parse(data);
    insert_in_input(filtered_data);


  }
  function check_criteria() {
    let j = 0;
    for (let i = 0; i < checkbox_array.length; i++) {
      if ($('#checkbox_out_of_array_' + i + 1).prop('checked')) {
        body_search[j] = $('#textNode_out_of_array_' + j + 1 ).html();
        j++;
      }
    }

  }

  function switch_case_counterAGB() {
    if (!bool_7 && $('#checkbox_1')checked) {
        switch (localStorage.getItem(counter_AGB)) {
          case '0': localStorage.setItem(counter_AGB, '1');
          case '1': localStorage.setItem(counter_AGB, '2');
          case '2': localStorage.setItem(counter_AGB, '3');
          case '3': localStorage.setItem(counter_AGB, '4');
          case '4': localStorage.setItem(counter_AGB, '5');
          case '5': localStorage.setItem(counter_AGB, '6');
          case '6': localStorage.setItem(counter_AGB, '7');
          case '7': localStorage.setItem(counter_AGB, '8');
          case '8': localStorage.setItem(counter_AGB, '9');
          case '9': localStorage.setItem(counter_AGB, '10');

      }
    }
    else if (bool_7) {
      let div_AGB_array = new Array();
      if (checkbox_1.checked) {
        switch (localStorage.getItem(counter_AGB)) {
          case '0': localStorage.setItem(counter_AGB, '1');
                     div_AGB_array[0] = $('<div></div>');
          case '1': localStorage.setItem(counter_AGB, '2');
                    div_AGB_array[1] = $('<div></div>');
          case '2': localStorage.setItem(counter_AGB, '3');
          div_AGB_array[2] = $('<div></div>');
          case '3': localStorage.setItem(counter_AGB, '4');
          div_AGB_array[3] = $('<div></div>');
          case '4': localStorage.setItem(counter_AGB, '5');
          div_AGB_array[4] = $('<div></div>');
          case '5': localStorage.setItem(counter_AGB, '6');
          div_AGB_array[5] = $('<div></div>');
          case '6': localStorage.setItem(counter_AGB, '7');
          div_AGB_array[6] = $('<div></div>');
          case '7': localStorage.setItem(counter_AGB, '8');
          div_AGB_array[7] = $('<div></div>');
          case '8': localStorage.setItem(counter_AGB, '9');
          div_AGB_array[8] = $('<div></div>');
          case '9': localStorage.setItem(counter_AGB, '10');
          div_AGB_array[9] = $('<div></div>');
        }
      }
    }
  }
