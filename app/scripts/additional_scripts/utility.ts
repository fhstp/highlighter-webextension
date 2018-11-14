// Imported using:
import * as $ from 'jquery';

export function reset_settings(
  load_first_page: string,
  switch_to_second_page: string
) {
  // reset all settings!
  if (
    localStorage.getItem(load_first_page) !== 'true' &&
    localStorage.getItem(load_first_page) !== 'false'
  ) {
    localStorage.setItem(load_first_page, 'false');
  }

  if (
    localStorage.getItem(switch_to_second_page) !== 'true' &&
    localStorage.getItem(switch_to_second_page) !== 'false'
  ) {
    localStorage.setItem(switch_to_second_page, 'false');
  }
}

// With credits to https://bytutorial.com/blogs/jquery/jquery-get-selected-checkboxes
export function getValueUsingClass() {
  let chkArray: any[] = [];
  let processed: any[] = [];
  /* look for all checkboxes that have a class 'chk' attached to it and check if it was checked and push it to an array*/
  $('.chk:checked').each(function(e) {
    chkArray.push($(this).val());
    const original = chkArray[e];
    const items = original.split(',');
    for (let item of items) {
      processed.push(item.trim());
    }
  });
  return processed;
}
