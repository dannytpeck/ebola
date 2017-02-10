var webdriver = require('selenium-webdriver'),
    By = webdriver.By,
    until = webdriver.until;

var driver = new webdriver.Builder()
  .forBrowser('chrome')
  .build();

var username = 'USERNAME';
var password = 'PASSWORD';

driver.get('https://limeadedemorb.mywellmetrics.com/Home');

// input username and password then click login button
driver.findElement(By.name('ctl00$content$SiteThemeContentFragmentPage1$fragment_3526$ctl01$ctl00$LoginForm1$ctl06$username')).sendKeys(username);
driver.findElement(By.name('ctl00$content$SiteThemeContentFragmentPage1$fragment_3526$ctl01$ctl00$LoginForm1$ctl06$password')).sendKeys(password);
driver.findElement(By.name('ctl00$content$SiteThemeContentFragmentPage1$fragment_3526$ctl01$ctl00$LoginForm1$ctl06$loginButton')).click();

// wait for CSS class to be present (item-title) to make sure the tiles are loaded
driver.wait(until.elementLocated(By.css('#otherthings .item-title')), 1000);

// click on the Health & Fitness tile
driver.findElement(By.css('a[title^="Health & Fitness"]')).click();

// close page
driver.quit();
