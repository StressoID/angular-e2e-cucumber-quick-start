import {defineSupportCode} from 'cucumber';
import {AppPage} from "./po/app.po";

const appPage: AppPage = new AppPage();

defineSupportCode(({Then, Given}) => {
  Given(/я нахожусь на странице авторизации/i, () => appPage.navigateTo());

  Then(/я заполняю логин/i, () => {
    return appPage.getElementByAttribute('name=login').sendKeys('login');
  });

  Then(/я заполняю пароль/i, () => {
    return appPage.getElementByAttribute('name=password').sendKeys('password');
  });

  Then(/я нажимаю кнопку войти/i, () => appPage.getLoginButton().click());
});
