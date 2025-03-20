describe('Web browser access', async() => {
    it('Access external link and verify content in the browser', async () => {
        await $('//*[@name="Webview"]').click();

        // wait for all the contexts
        await driver.waitUntil(async () => {
            const contexts = await driver.getContexts();
            return contexts.length > 1;
        }, { timeout: 30000, timeoutMsg: 'Timed out waiting for another context'});

        // get all contexts
        const contexts = await driver.getContexts();
        
        // switch to webview context
        await driver.switchContext(contexts[1]);
        console.log(`SWITCHED TO ${contexts[1]}`);

        // asertion
        // await expect($('//*[@name="Get Started"]')).toBeDisplayed();

        //switch back to native app
        await driver.switchContext('NATIVE_APP');
        console.log(`SWITCHED BACK TO ${contexts[0]}`);
        await $('~Home').click();

        // asertion
        const webdriverText = await $('//*[@name="WEBDRIVER"]');
        await expect(webdriverText).toBeDisplayed();
    })
})