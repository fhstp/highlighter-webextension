import * as $ from 'jquery';

export function exampleFunction() {
  console.log('Function was called from a module!');
}

export function create_criteria() {
  let input_criteria =  $('<input>') // with only input as the string it had been added 9 times
    .attr('type', 'text')
    .attr('id', 'input_critiques')
    .attr('placeholder', 'Kriterien hinzufügen');

    return input_criteria;
}

export function create_criteria_button() {

  let input_criteria_button = $('<button></button>')
  .attr('type', 'button')
  .attr('class', 'button_primary')
  .attr('id', 'button_critiques');
input_criteria_button.append('OK');

return input_criteria_button;


}
