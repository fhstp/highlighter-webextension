import { browser } from 'webextension-polyfill-ts';

// Here come the function which should send the data to the server

function sendData_no_compare(head_link: any, head_text: any, checkbox_array: any) {
  let criteria_array = new Array();
  for (let i = 0; i < checkbox_array.length; i++) {
    if (checkbox_array[i].prop('checked')) {
      criteria_array[i] = checkbox_array[i].html();
    }
    else {
      criteria_array[i] = '';
    }
  }

  let xhttp = new XMLHttpRequest();
  let json_criteria = JSON.stringify(criteria_array);

  xhttp.open('POST', 'http://highlighter.media.fhstp.ac.at:8080/agb', true);
  xhttp.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
   xhttp.onreadystatechange = () => {
    if (xhttp.readyState === 4 && xhttp.status === 201) {
      insertIntoHTML_without_compare(head_text, head_link, json_criteria);
      let data = xhttp.responseText;
      let JSON_data = JSON.parse(data);

  } };
  xhttp.send('link=' + head_link + '&text=' + head_text + '&search[]=' + json_criteria);


  }

function insertIntoHTML_without_compare(head_text: any, head_link: any, json_criteria: any) {
browser.tabs.create({url: 'https://highlighter.media.fhstp.ac.at'});
browser.tabs.executeScript({
  code: 'document.body.innerHTML = ""; var input_text = document.createElement("input"); var textNode = "' + head_text + '"; input_text.setAttribute("value", textNode );document.body.appendChild(input_text)'
});
chrome.tabs.executeScript({
  code: 'var input_link= document.createElement("input"); var textNode = "' + head_link + '"; input_link.setAttribute("value", textNode );document.body.appendChild(input_link)'
});
for (let i = 0; i < JSON.parse(json_criteria).length; i++) {
    chrome.tabs.executeScript({
      code: 'var input_attr= new Array(); var textNode = "' + JSON.parse(json_criteria)[i] + '";input_attr[' + i + '] = document.createElement("div");input_attr[' + i + '].innerHTML = textNode;document.body.appendChild(input_attr[' + i + ']);'
    });
}}

function insertIntoHTML_with_compare(head_text_1: any, head_link_1: any, head_text_2: any, head_link_2: any, json_criteria: any) {
  browser.tabs.create({url: 'https://highlighter.media.fhstp.ac.at'});
  // first inputs
  browser.tabs.executeScript({
    code: 'document.body.innerHTML = ""; var input_text = document.createElement("input"); var textNode = "' + head_text_1 + '"; input_text.setAttribute("value", textNode );document.body.appendChild(input_text)'
  });
  browser.tabs.executeScript({
    code: 'var input_link= document.createElement("input"); var textNode = "' + head_link_1 + '"; input_link.setAttribute("value", textNode );document.body.appendChild(input_link)'
  });
  // second inputs
  browser.tabs.executeScript({
    code: 'var input_text = document.createElement("input"); var textNode = "' + head_text_2 + '"; input_text.setAttribute("value", textNode );document.body.appendChild(input_text)'
  });
  browser.tabs.executeScript({
    code: 'var input_link= document.createElement("input"); var textNode = "' + head_link_2 + '"; input_link.setAttribute("value", textNode );document.body.appendChild(input_link)'
  });
  for (let i = 0; i < JSON.parse(json_criteria).length; i++) {
    browser.tabs.executeScript({
        code: 'var input_attr= new Array(); var textNode = "' + JSON.parse(json_criteria)[i] + '";input_attr[' + i + '] = document.createElement("div");input_attr[' + i + '].innerHTML = textNode;document.body.appendChild(input_attr[' + i + ']);'
      });
  }}

  function sendData_with_compare(head_link_1: any, head_text_1: any, head_link_2: any, head_text_2: any, checkbox_array: any) {
    let criteria_array = new Array();
    for (let i = 0; i < checkbox_array.length; i++) {
      if (checkbox_array[i].prop('checked')) {
        criteria_array[i] = checkbox_array[i].html();
      }
      else {
        criteria_array[i] = '';
      }
    }
    let xhttp = new XMLHttpRequest();
    let json_criteria = JSON.stringify(criteria_array);

    // first inputs
    xhttp.open('POST', 'https://highlighter.media.fhstp.ac.at', true);
    xhttp.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
     xhttp.onreadystatechange = () => {
      if (xhttp.readyState === 4 && xhttp.status === 201) {
        insertIntoHTML_without_compare(head_text_1, head_link_1, json_criteria);
        let data = xhttp.responseText;
        let JSON_data = JSON.parse(data);

    } };
    xhttp.send('link=' + head_link_2 + '&text=' + head_text_2 + '&search[]=' + json_criteria);
    xhttp.abort();

    // second inputs
    xhttp.open('POST', 'https://highlighter.media.fhstp.ac.at', true);
    xhttp.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
     xhttp.onreadystatechange = () => {
      if (xhttp.readyState === 4 && xhttp.status === 201) {
        insertIntoHTML_with_compare(head_text_1, head_link_1, head_text_2, head_link_2, json_criteria);
        let data = xhttp.responseText;
        let JSON_data = JSON.parse(data);

    } };
    xhttp.send('link=' + head_link_2 + '&text=' + head_text_2 + '&search[]=' + json_criteria);

    }
