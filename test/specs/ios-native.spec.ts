describe('ios native', async() => {
    it('Working with alert box', async () => {
        await $('~Alert Views').click();
        await $('~Okay / Cancel').click();
        //await $('~OK').click();
        console.log(await driver.getAlertText());
        await driver.dismissAlert();
        await expect($('~OK')).not.toBeDisplayed();
    })

    it.only('scrollable elements', async () => {
        // await driver.execute('mobile: scroll', { direction: 'down' });
        // await driver.execute('mobile: scroll', { direction: 'up' });

        await $('~Picker View').click();
        const redPicker = await $('~Red color component value');
        const greenPicker = await $('~Green color component value');
        const bluePicker = await $('~Blue color component value'); 

        // await driver.execute('mobile: scroll', { element: redPicker.elementId, direction: 'down'});
        // await driver.execute('mobile: scroll', { element: greenPicker.elementId, direction: 'down'});
        // await driver.execute('mobile: scroll', { element: bluePicker.elementId, direction: 'up'});
        
        //set to purple
        await redPicker.addValue('125');
        await greenPicker.addValue('0');
        await bluePicker.addValue('125');
    })
})