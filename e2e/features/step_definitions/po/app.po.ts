import {browser, by, element} from "protractor";

export class AppPage {

  navigateTo() {
    return browser.get('http://localhost:4200');
  }

  getElementByAttribute(attr) {
    return element(by.css(`[${attr}]`))
  }

  getLoginButton() {
    return element(by.css('button'))
  }

}
