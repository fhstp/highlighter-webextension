import * as $ from 'jquery';
import swal from 'sweetalert2';

import { setFormerAGB, createBadges, setValueOfAGB, removeAGB } from './index';
import { sendData_no_compare, sendData_with_compare } from './server_interaction';
import { getValueUsingClass } from './utility';

export function create_criteria() {
  let input_criteria = $('<input>')
    .attr('type', 'text')
    .attr('id', 'input_critiques')
    .attr('placeholder', 'Kriterien hinzufügen');

  return input_criteria;
}

export function create_criteria_button() {
  let input_criteria_button = $('<button></button>')
    .attr('type', 'button')
    .attr('class', 'btn btn-primary')
    .attr('id', 'button_critiques');

  input_criteria_button.append('OK');
  return input_criteria_button;
}

let input_criteria_button = create_criteria_button();
let input_criteria = $('<input>') // with only input as the string it had been added 9 times
  .attr('type', 'text')
  .attr('id', 'input_critiques')
  .attr('class', 'form-control')
  .attr('placeholder', 'Kriterien hinzufügen');

export function loadSecondPage() {
  $('#div_page_3').addClass('hidden');
  $('#button_thirdpage').addClass('hidden');
/*   $('#content_2').removeClass('hidden'); */
}

export function loadThirdPage(triggers: Map<string, boolean>, pageSwitch: string, crits: any) {
  let checkbox_1 = $('<input>');
  let div_agb_2: any; // div in which the added inputs of the checkbox are
  // div of page 3
  let div_page_3: any;
  div_page_3 = $('#div_page_3');

  let title_div: any;

  let checkbox_array = new Array(); // checkboxes of the criteria
  // let textNode_array = new Array(); // actually strings & the text for the checkboxes

  // Various storages for the buttons
  let add_button: any, add_button_image: any, button_delete_criteria: any,
  image_delete_criteria: any, div_new_critique: any; // the div for only on of the new criteria

  let div_all_new_criteria = $('<div></div>');
  let add_critics: any; // the div for adding the critiria

  $(checkbox_1).change((e: any) => {
    if (e.target.checked && !triggers.get('checkbox_first_time')) {
      if (localStorage.getItem(pageSwitch) === 'false') {
        localStorage.setItem(pageSwitch, 'true');
        localStorage.setItem('showComparisonInfo', 'show');
      }
      div_agb_2 = $('<div></div>')
        .attr('id', 'div_agb_2');
      let AGB_text_2 = $('<textarea>')
        .attr('id', 'AGBtext_2')
        .attr('type', 'textarea')
        .attr('placeholder', 'Fügen Sie den Text der AGBs ein...')
        .attr('class', 'form-control input-sm');
      div_agb_2.append(AGB_text_2);
      let AGB_link_2 = $('<input>')
        .attr('id', 'AGBlink_2')
        .attr('type', 'text')
        .attr('class', 'form-control')
        .attr('placeholder', 'Fügen Sie den Link ein...');
      div_agb_2.append(AGB_link_2);

      if (createBadges() !== null) {
        div_agb_2.append(createBadges);
      }

      $('#AGBlink_1').after(div_agb_2);

      triggers.set('checkbox_first_time', true);
      triggers.set('bool_input,vis', true);
    }
    else if (e.target.checked && triggers.get('checkbox_first_time')) {
      localStorage.setItem('showComparisonInfo', 'show');
      $(div_agb_2).removeAttr('class hidden');
      triggers.set('bool_input,vis', true);
    }
    else if (!e.target.checked && triggers.get('checkbox_first_time')) {
      localStorage.setItem('showComparisonInfo', 'noShow');
      $(div_agb_2).attr('class', 'hidden');
      triggers.set('bool_input,vis', true);
    }
  });

  let AGB_text = $('<textarea>')
    .attr('placeholder', 'Fügen Sie den Text der AGBs ein...')
    .attr('type', 'textarea')
    .attr('class', 'form-control input-sm')
    .attr('id', 'AGBtext_1');

  div_page_3.append(AGB_text);

  let AGB_link = $('<input>')
    .attr('placeholder', 'Fügen Sie den Link ein...')
    .attr('type', 'text')
    .attr('id', 'AGBlink_1')
    .attr('class', 'form-control');

  div_page_3.append(AGB_link);

  // div-tag
  let div = $('<div></div>')
    .attr('id', 'div_page_3_1');

  checkbox_1
    .attr('type', 'checkbox')
    .attr('id', 'checkbox_1')
    .attr('class', 'checkbox');


  let textNode_1 = '<span class="criterias">Vergleiche AGBs</span>';

  div.append(checkbox_1)
    .append(textNode_1);

  div_page_3.append(div);

  let div_array = new Array();

  let div_page_3_part_2: any;
  div_page_3_part_2 = $('<div></div>')
    .attr('id', 'div_page_3_part_2');

  title_div = $('<h3></h3>')
    .attr('class', 'heading_3')
    .attr('id', 'div_add_crits')
    .append('Kriterien:');

  div_page_3_part_2.append(title_div);
  div_page_3.append(div_page_3_part_2);

  div_page_3_part_2.append(title_div);
  div_page_3.append(div_page_3_part_2);


  // Creation of criterias and checkboxes
  let criterias_array = (crits as any).criterias;
  div_page_3.append('<div id="checkboxContainer"></div>');

  for (let i = 0; i < criterias_array.length; i++) {

    let criteria = criterias_array[i];
    let additional_array = crits[criteria];
    let additional_attributes: string = '';

    // Collecting all of the additional criterias, out of the json.
    let values = additional_array.toString();
    for (let j = 0; j < additional_array.length; j++) {
      const textToAdd = ', ' + additional_array[j];
      additional_attributes += textToAdd;
    }
    div_array[i] = $('<div class="noListItem"><input type="checkbox" class="checkbox chk" value="' + criterias_array[i] + ', ' + values + '"></div>')
      .append(criterias_array[i])
      .attr('title', criterias_array[i] + additional_attributes)
      .attr('id', 'div_out_of_array_' + (i + 1))
      .append('<small>' + additional_attributes + '</small>');

    $('#checkboxContainer').append(div_array[i]);
  }


  add_button = $(`<button class="btn" id="add_button"><i id="add_buttonimage"
  class="fa fa-plus-circle" aria-hidden="true"></i> Kriterien hinzufügen</button>`);

  add_critics = $('<div></div>')
    .attr('id', 'div_add_crits')
    .append(add_button);

  div_page_3.append(add_critics);


  $(add_button).click(() => {
    if (triggers.get('trigger_criterias')) {
      hideNewCritiques(triggers);
    }
    else {
      addNewCritiques(triggers);
    }
  });

  $(document).on('keydown', '#input_critiques', function (evt) {
    if (evt.keyCode === 13) {
      // Ignore Error: Due to no Type of event.target -> See: https://stackoverflow.com/questions/28900077/why-is-event-target-not-element-in-typescript
      const val = (evt.target as any).value; // eslint-disable-line
      if (val !== undefined || val !== '' || val !== null) {
        let trig = false;
        // check if they are already added
        let critiques_selector = $('.chk');
        let already_added = false;
        let criterias_array_for_check = [];
        for (let i = 0; i < critiques_selector.length; i++) {
          const original = <HTMLInputElement>critiques_selector[i];
          const value = original.value;
          const items = value.split(',');
          for (let item of items) {
            criterias_array_for_check.push(item.trim());
          }
        }
          for (let item of criterias_array_for_check) {
            if (item === val) {
              already_added = true;
            }
          }

          console.log(criterias_array_for_check);
          if (!already_added && !trig) {

            let crit_checkbox: any;
            crit_checkbox = $('<input>')
              .attr('type', 'checkbox')
              .attr('class', 'chk')
              .attr('value', val)
              .prop('checked', true);

            let span_new_critique: any;
            span_new_critique = $('<span></span>')
              .attr('class', 'criterias');

            image_delete_criteria = $('<i></i>')
              .attr('id', 'delete_criteria')
              .attr('class', 'fa fa-minus-circle')
              .attr('aria-hidden', 'true');

            button_delete_criteria = $('<button></button')
              .attr('class', 'button_delete_criteria')
              .append(image_delete_criteria);
            span_new_critique.append(val);
            div_new_critique = $('<div></div>')
              .attr('class', 'div_new_criterias')
              .append(crit_checkbox)
              .append(crit_checkbox)
              .append(span_new_critique)
              .append(button_delete_criteria);

            div_all_new_criteria.append(div_new_critique);
            $('div#div_add_crits').before(div_all_new_criteria);

            $('.button_delete_criteria').click((e) => {
              $(e.currentTarget).parent().remove();
            });
            // After the new criteria is added -> reset input field.
            $('#input_critiques').val('');
            trig = true;
          } else {
            swal({
              type: 'error',
              title: 'Achtung',
              text: 'Dieses Kriterium ist schon hinzugefügt!',
              showCloseButton: true
            });
            triggers.set('criteria_selected', false);
          }
      }
    }
  });

  // adding the event to the OK-button
  $(input_criteria_button).click(() => {

    let input_crit: any;
    input_crit = $('input#input_critiques');
    // check if there are critiques
    if (input_crit.val() !== '') {
      // check if they are already added
      let critiques_selector = $('.chk');

      let already_added = false;
      let criterias_array_for_check = [];
      for (let i = 0; i < critiques_selector.length; i++) {
        const original = <HTMLInputElement>critiques_selector[i];
        const value = original.value;
        const items = value.split(',');
        for (let item of items) {
          criterias_array_for_check.push(item.trim());
        }
        for (let item of criterias_array_for_check) {
          if (item === input_crit.val()) {
            already_added = true;
          }
        }
      }

      for (let i = 0; i < critiques_selector.length; i++) {
        if (critiques_selector[i].innerHTML === input_crit.val()) {
          triggers.set('criteria_selected', true);
        }
      }

      if (!already_added) {

        let crit_checkbox: any;
        crit_checkbox = $('<input>')
          .attr('type', 'checkbox')
          .attr('class', 'chk')
          .attr('value', input_crit.val())
          .prop('checked', true);

        let span_new_critique: any;
        span_new_critique = $('<span></span>')
          .attr('class', 'criterias');

        image_delete_criteria = $('<i></i>')
          .attr('id', 'delete_criteria')
          .attr('class', 'fa fa-minus-circle')
          .attr('aria-hidden', 'true');

        button_delete_criteria = $('<button></button')
          .attr('class', 'button_delete_criteria')
          .append(image_delete_criteria);
        span_new_critique.append(input_crit.val());
        div_new_critique = $('<div></div>')
          .attr('class', 'div_new_criterias')
          .append(crit_checkbox)
          .append(crit_checkbox)
          .append(span_new_critique)
          .append(button_delete_criteria);

        div_all_new_criteria.append(div_new_critique);
        $('div#div_add_crits').before(div_all_new_criteria);

        $('.button_delete_criteria').click((e) => {
          $(e.currentTarget).parent().remove();
        });
        // After the new criteria is added -> reset input field.
        $('#input_critiques').val('');
      } else {
        swal({
          type: 'error',
          title: 'Achtung',
          text: 'Dieses Kriterium ist schon hinzugefügt!',
          showCloseButton: true,
          customClass: 'bootstrapLook'
        });
        triggers.set('criteria_selected', false);
        // After checking if the value is already added -> reset input field.
        $('#input_critiques').val('');
      }
    }
  });

  // The primary button of the third page
  let button_thirdpage: any;
  button_thirdpage = $('<button></button>')
    .attr('class', 'btn btn-primary')
    .attr('id', 'button_thirdpage')
    .append('Check AGBs');

  div_page_3.appendTo(document.body);
  button_thirdpage.appendTo(document.body);

  // If we want to check AGBs (start sending request to server)
  $('#button_thirdpage').click(() => {
    const link = $('#AGBlink_1').val();
    const agb_text = $('#AGBtext_1').val();
    const checkboxes = getValueUsingClass();
    if (!checkbox_1.prop('checked')) {
      setFormerAGB(String(link), agb_text);
      sendData_no_compare(link, agb_text, checkboxes);
    } else {
      const link_2 = $('#AGBlink_2').val();
      const agb_text_2 = $('#AGBtext_2').val();
      sendData_with_compare(link, agb_text, link_2, agb_text_2, checkboxes);
    }
  });
}
$(document).on('click', '.buttonFormer', function () {
  setValueOfAGB(Number($(this).attr('data-btn')));
});
$(document).on('click', '.closebtn', function () {
  removeAGB(Number($(this).attr('data-btn')));
});
// a counter for the number of times the critiques-div was hidden
let counter: number;
counter = 0;
let input_critiques: any;
function addNewCritiques(triggers: Map<string, boolean>) {

  if (counter === 0) {

    let input_criteria_div = $('<div></div>')
      .attr('id', 'input_criterias_div');

    input_criteria_div.append(input_criteria)
      .append(input_criteria_button);

    $('div#div_add_crits').after(input_criteria_div);
  }
  else if (counter > 0) {
    input_critiques.removeClass('hidden');
  }
  triggers.set('trigger_criterias', true);
}

function hideNewCritiques(triggers: Map<string, boolean>) {

  input_critiques = $('#input_critiques_div')
    .addClass('hidden');
  triggers.set('trigger_criterias', false);
  if (counter === 0) {
    counter++;
  }
}
