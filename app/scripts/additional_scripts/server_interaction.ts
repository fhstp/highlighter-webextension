import { browser } from 'webextension-polyfill-ts';


// Here come the function which should send the data to the server
export type agbObject = {
  found_occurences: any[],
  link: string,
  markupString: string[]
};

export function sendData_no_compare(head_link: any, head_text: any, criteria_array: any) {

  let xhttp = new XMLHttpRequest();
  let json_criteria = JSON.stringify(criteria_array);
  console.log(json_criteria);


  xhttp.open('POST', 'http://highlighter.media.fhstp.ac.at:8080/agb', true);
  xhttp.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
  xhttp.onreadystatechange = () => {
    if (xhttp.readyState === 4 && xhttp.status === 201) {
      const data = xhttp.response;
      const agb = JSON.parse(data) as agbObject;
      insertIntoHTML_without_compare(agb);

    }
  };
  xhttp.send('link=' + head_link + '&text=' + head_text + '&search[]=' + json_criteria);
}

export async function insertIntoHTML_without_compare(agb: any) {
  // open tab in background, so this context isn't unloadad (?); wait for it to be ready
  const highlighterTab = await browser.tabs.create({ url: 'https://highlighter.media.fhstp.ac.at', active: false });
  if (highlighterTab.id != null) {

    agb = JSON.stringify(agb);

    const interpolatedCode = `
    var el = document.querySelector('#data1');
    var agb_string = JSON.stringify(${agb});
    el.setAttribute('value', agb_string);
    var event = new Event('input', {'bubbles': true, 'cancelable': true});
    el.dispatchEvent(event);
      `;
    await browser.tabs.executeScript(highlighterTab.id, { code: interpolatedCode });

    // bring tab to front after the injected script was executed
    browser.tabs.update(highlighterTab.id, { active: true });
  } else {
    throw new Error('Tab creation failed');
  }
}


export function insertIntoHTML_with_compare(head_text_1: any, head_link_1: any, head_text_2: any, head_link_2: any, json_criteria: any, JSON_data: any) {
  browser.tabs.create({ url: 'https://highlighter.media.fhstp.ac.at' });
  browser.tabs.executeScript({
    code: 'var element = document.querySelector("#data1"); element.setAttribute("value", ' + JSON_data + '); var event = new Event("input", {"bubbles": true, "cancelable": true}); element.dispatchEvent(event);'

  });



  // browser.tabs.create({url: 'https://highlighter.media.fhstp.ac.at'});
  // // first inputs
  // browser.tabs.executeScript({
  //   code: 'document.body.innerHTML = ""; var input_text = document.createElement("input"); var textNode = "' + head_text_1 + '"; input_text.setAttribute("value", textNode );document.body.appendChild(input_text)'
  // });
  // browser.tabs.executeScript({
  //   code: 'var input_link= document.createElement("input"); var textNode = "' + head_link_1 + '"; input_link.setAttribute("value", textNode );document.body.appendChild(input_link)'
  // });
  // // second inputs
  // browser.tabs.executeScript({
  //   code: 'var input_text = document.createElement("input"); var textNode = "' + head_text_2 + '"; input_text.setAttribute("value", textNode );document.body.appendChild(input_text)'
  // });
  // browser.tabs.executeScript({
  //   code: 'var input_link = document.createElement("input"); var textNode = "' + head_link_2 + '"; input_link.setAttribute("value", textNode );document.body.appendChild(input_link)'
  // });
  // for (let i = 0; i < JSON.parse(json_criteria).length; i++) {
  //   browser.tabs.executeScript({
  //       code: 'var input_attr= new Array(); var textNode = "' + JSON.parse(json_criteria)[i] + '";input_attr[' + i + '] = document.createElement("div");input_attr[' + i + '].innerHTML = textNode;document.body.appendChild(input_attr[' + i + ']);'
  //     });
}

export function sendData_with_compare(head_link_1: any, head_text_1: any, head_link_2: any, head_text_2: any, checkbox_array: any) {

  let xhttp = new XMLHttpRequest();
  let json_criteria = JSON.stringify(checkbox_array);

  // first inputs
  xhttp.open('POST', 'https://highlighter.media.fhstp.ac.at', true);
  xhttp.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
  xhttp.onreadystatechange = () => {
    if (xhttp.readyState === 4 && xhttp.status === 201) {
      let data = xhttp.responseText;
      let JSON_data = JSON.parse(data);
      // insertIntoHTML_without_compare(agb);
    }
  };
  xhttp.send('link=' + head_link_2 + '&text=' + head_text_2 + '&search[]=' + json_criteria);
  xhttp.abort();

  // second inputs
  xhttp.open('POST', 'https://highlighter.media.fhstp.ac.at', true);
  xhttp.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
  xhttp.onreadystatechange = () => {
    if (xhttp.readyState === 4 && xhttp.status === 201) {
      let data = xhttp.responseText;
      let JSON_data = JSON.parse(data);
      insertIntoHTML_with_compare(head_text_1, head_link_1, head_text_2, head_link_2, json_criteria, JSON_data);

    }
  };
  xhttp.send('link=' + head_link_2 + '&text=' + head_text_2 + '&search[]=' + json_criteria);

}
