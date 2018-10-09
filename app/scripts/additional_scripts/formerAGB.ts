import * as $ from 'jquery';

/**  **/


export function setFormerAGB(link: string, agb: any) {
  let data = {
    link: link,
    agb_text: agb,
    timeStamp: new Date().toDateString()
  };
  checkLocalStorage(data);

}

export function createBadges() {
  // if not set
  if (!localStorage.hasOwnProperty(key)) {
      return null;
  } else {
    let buttonArray: any[] = [];
    let buttondiv = $('<div class="buttonDiv"></div>');
    let stored_obj = JSON.parse(String(localStorage.getItem(key)));
    for (let i = 0; i < stored_obj.length; i++) {
      let link = String(stored_obj[i].link);
      link = link.replace('www.', '');
      link = link.replace('http://', '');
      link = link.replace('https://', '');
      let re = /\.[a-z]*?(.*)/; // capture everything behind...
      link = link.replace(re, '');
      let button = $('<button type="button" class="btn btn-primary"><span class="badge badge-light"></span></button>')
        .append(link);
        buttondiv.append(button);
        buttonArray.push(buttondiv);
    }
    return buttonArray;
  }
}

/** HELPER METHODS **/
const key = 'FormerAGB';

function checkLocalStorage(agb: any) {
  // If there are no entries -> just push it
  if (!localStorage.hasOwnProperty(key)) {
    let data = [];
    data.push(agb);
    const data_stringifed = JSON.stringify(data);
    localStorage.setItem(key, data_stringifed);
  } else {
    // If there are already entries, check if there are more then six, then shift or push them
    let stored_obj = JSON.parse(String(localStorage.getItem(key)));
    if (stored_obj.length > 6) {
      stored_obj.shift(agb);
      const data_stringifed = JSON.stringify(stored_obj);
      localStorage.setItem(key, data_stringifed);
    } else {
      stored_obj.push(agb);
      const data_stringifed = JSON.stringify(stored_obj);
      localStorage.setItem(key, data_stringifed);
    }
  }
}
