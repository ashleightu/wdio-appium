describe('Android Elements Test', () => {
    it('Find element by accessibility id', async () => {
        const appOption = await $('~App');

        await appOption.click();

        const actionBar = await $('~Action Bar');

        await expect(actionBar).toBeExisting();
    })

    it('Find element by class name', async() => {
        const className = await $('android.widget.TextView');
        console.log(await className.getText());

        await expect(className).toHaveText('API Demos');
    })

    xit('Find element by xpath', async () => {
        await $('//android.widget.TextView[@content-desc="Alert Dialogs"]').click();

        await $('//android.widget.Button[@resource-id="io.appium.android.apis:id/select_button"]').click();

        await $('//android.widget.TextView[@text="Command two"]').click();

        const textAssertion = await $('//android.widget.TextView');
        await expect(textAssertion).toHaveText('You selected: 1 , Command two');
    })

    it('Find element by UIAutomator', async() => {
        await $('android=new UiSelector().textContains("Alert")').click();
    });

    it('Find multiple elements', async () => {
        const textList = await $$('android.widget.TextView');

        const expectedList = [
            'API Demos', 
            "Access'ibility", 
            'Accessibility',
            'Animation',
            'App',
            'Content',
            'Graphics',
            'Media',
            'NFC',
            'OS',
            'Preference',
            'Text',
            'Views'
        ]
        const actualList = [];

        for (const el of textList) {
            actualList.push(await el.getText());
        }

        expect(actualList).toEqual(expectedList);
    });

    it.only('Access text field', async() => {
        await $('android=new UiSelector().text("Views")').click();
        await $('android=new UiSelector().text("Auto Complete")').click();
        await $('android=new UiSelector().text("1. Screen Top")').click();
        const countryName = await $('android.widget.AutoCompleteTextView').setValue('Malaysia')
        expect(countryName).toHaveText('Malaysia');
    });
})