// Loading of the second page through jQuery
import * as $ from 'jquery';
import { browser } from 'webextension-polyfill-ts';

// Loading bootstrap
import 'bootstrap';

// import configs and do typecast to any for iterations
import * as crits from '../config/criterias.json';
let criterias_array = crits;

// Loading additional functions
import { reset_settings } from './additional_scripts';

// Loading page structure
import { loadSecondPage } from './additional_scripts';
import { loadThirdPage } from './additional_scripts';

// localStorage implementation
let load_first_page =  'lS_load_first_page';
let switch_to_second_page =  'lS_switch_second_page';

// reset settings of local Storage
reset_settings(load_first_page, switch_to_second_page);

// All Triggers are now stored in a map
let triggers = new Map();

triggers.set('checkbox_first_time', false);
triggers.set('trigger_criterias', false);
triggers.set('switch_to_third_page', false);
triggers.set('criteria_selected', false);

/********  Creation of Content and Program starting  ********/

$(document).ready(
  function listenToClicks() {

    let lS = localStorage.getItem(load_first_page);
    let number_page: any;
    number_page = 1;
    if (lS === 'false') {
      $('#popup-content_2').removeClass('hidden');
      localStorage.setItem(load_first_page, 'true');
    }
    else if (lS === 'true') {
      loadThirdPage(triggers, switch_to_second_page, criterias_array);
    }

    insertText();
    insertLink();

    $('#button_firstpage').click(() => {
      $('#popup-content_2').addClass('hidden');
      if (!triggers.get('switch_to_third_page')) {
        loadThirdPage(triggers, switch_to_second_page, criterias_array);
      }
      else {
        $('#div_page_3').removeClass('hidden');
        $('#button_thirdpage').removeClass('hidden');
      }
    });

    $('#button_secondpage').click(() => {
      $('#div_page_3').removeClass('hidden');
      $('#button_thirdpage').removeClass('hidden');
      $('#content_2').addClass('hidden');
      triggers.set('trigger_criterias', false);
    });

    $('#general_information').click(() => {

      $('#popup-content_2').removeClass('hidden');
      $('#div_page_3').addClass('hidden');
      triggers.set('switch_to_third_page', true);

      let button_thirdpage: any;
      button_thirdpage = $('#button_thirdpage');
      button_thirdpage.addClass('hidden');
    });

    $('#closing_icon').click(
      (() => {
        window.close();
      })
    );
  });

loadSecondPage();

// *** HELPER FUNCTIONS *** //

function insertText() {
  browser.tabs.executeScript({
    code: 'window.getSelection().toString();'
  }).then(function (selection) {
    $('#AGBtext_1').val(selection[0]);
  });
}

function insertLink() {
  browser.tabs.executeScript({
    code: 'window.location.href'
  }).then(function (href) {
    $('#AGBlink_1').val(href);
  });
}
