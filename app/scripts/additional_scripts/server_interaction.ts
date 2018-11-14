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
  const highlighterTab = await browser.tabs.create({ url: 'https://highlighter.media.fhstp.ac.at/#/viz', active: false });
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

export async function insertIntoHTML_with_compare(agb_1: any, agb_2: any) {
  // open tab in background, so this context isn't unloadad (?); wait for it to be ready
  const highlighterTab = await browser.tabs.create({ url: 'https://highlighter.media.fhstp.ac.at/#/viz', active: false });
  if (highlighterTab.id != null) {

    agb_1 = JSON.stringify(agb_1);
    agb_2 = JSON.stringify(agb_2);

    const interpolatedCode = `
    var el1 = document.querySelector('#data1');
    var el2 = document.querySelector('#data2');
    var agb_string_1 = JSON.stringify(${agb_1});
    var agb_string_2 = JSON.stringify(${agb_2});
    el1.setAttribute('value', agb_string_1);
    el2.setAttribute('value', agb_string_2);
    var event = new Event('input', {'bubbles': true, 'cancelable': true});
    el1.dispatchEvent(event);
    el2.dispatchEvent(event);
      `;
    await browser.tabs.executeScript(highlighterTab.id, { code: interpolatedCode });

    // bring tab to front after the injected script was executed
    browser.tabs.update(highlighterTab.id, { active: true });
  } else {
    throw new Error('Tab creation failed');
  }

}

export function sendData_with_compare(head_link_1: any, head_text_1: any, head_link_2: any, head_text_2: any, criteria_array: any) {

  let xhttp = new XMLHttpRequest();
  let xhttp2 = new XMLHttpRequest();
  let json_criteria = JSON.stringify(criteria_array);
  let agb1: any;
  let agb2: any;

  // Opening first Request and processing Data
  xhttp.open('POST', 'http://highlighter.media.fhstp.ac.at:8080/agb', true);
  xhttp.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
  xhttp.onreadystatechange = () => {
    if (xhttp.readyState === 4 && xhttp.status === 201) {
      const data1 = xhttp.response;
       agb1 = JSON.parse(data1) as agbObject;

      // Opening second Request and processing Data
       xhttp2.open('POST', 'http://highlighter.media.fhstp.ac.at:8080/agb', true);
       xhttp2.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
       xhttp2.onreadystatechange = () => {
         if (xhttp2.readyState === 4 && xhttp2.status === 201) {
           const data2 = xhttp2.response;
            agb2 = JSON.parse(data2) as agbObject;
           insertIntoHTML_with_compare(agb1, agb2);
         }
       };
       xhttp2.send('link=' + head_link_2 + '&text=' + head_text_2 + '&search[]=' + json_criteria);
    }
  };
  xhttp.send('link=' + head_link_1 + '&text=' + head_text_1 + '&search[]=' + json_criteria);

}
