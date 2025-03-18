describe('Android native feature tests', () => {
    it('Access an activity directly', async () => {
        await driver.startActivity('io.appium.android.apis', 'io.appium.android.apis.app.AlertDialogSamples');

        await driver.pause(3000);

        await expect($('//*[@text="App/Alert Dialogs"]')).toExist();
    })

    it('Alert message', async () => {
        await driver.startActivity('io.appium.android.apis', 'io.appium.android.apis.app.AlertDialogSamples');

        await $('//*[@resource-id="io.appium.android.apis:id/two_buttons"]').click();

        await driver.acceptAlert();

        expect(await $('//*[@resource-id="android:id/alertTitle"]')).not.toExist();
    })

    it('Vertical scrolling', async () => {
        await $('~App').click();
        await $('~Activity').click();

        await $('android=new UiScrollable(new UiSelector().scrollable(true)).scrollTextIntoView("Secure Surfaces")').click();

        await expect($('~Secure Dialog')).toExist();
    })

    it('Horizontal scrolling', async() => {
        await driver.startActivity('io.appium.android.apis', 'io.appium.android.apis.view.Gallery1');

        await $('android=new UiScrollable(new UiSelector().scrollable(true)).setAsHorizontalList().scrollForward()').click();
        await $('android=new UiScrollable(new UiSelector().scrollable(true)).setAsHorizontalList().scrollBackward()').click();

        await driver.pause(3000);
    })

    it.only('Date picker', async () => {
        await driver.startActivity('io.appium.android.apis','io.appium.android.apis.view.DateWidgets1');

        const date = await $('//*[@resource-id="io.appium.android.apis:id/dateDisplay"]');

        const currentDateText = await date.getText();

        await $('//*[@resource-id="io.appium.android.apis:id/pickDate"]').click();

        await $('android=new UiScrollable(new UiSelector().scrollable(true)).setAsHorizontalList().scrollForward()');

        await $('//android.view.View[@text="10"]').click();

        await $('//*[@resource-id="android:id/button1"]').click();

        await expect(date.getText()).not.toEqual(currentDateText);
    })
})