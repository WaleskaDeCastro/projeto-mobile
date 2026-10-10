import { Before, After } from "@wdio/cucumber-framework";

Before(async () => {
    await driver.executeScript('mobile: clearApp', [{ appId: 'com.solodroid.solomerce' }]);
    await driver.activateApp("com.solodroid.solomerce");
});

After(async () => {
    await driver.terminateApp("com.solodroid.solomerce");
});