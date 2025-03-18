import {$, $$, expect, driver} from '@wdio/globals';

describe('ios', () => {
    it('Find by accessibility id', async () => {
        await $('~Alert Views').click();
        await $('~Simple').click();
        await expect(await driver.getAlertText()).toContain('A Short Title Is Best');
    });

    it('Find by tag name', async () => {
        console.log(await $('XCUIElementTypeStaticOther').getText());
      
        const els = await $$('XCUIElementTypeStaticOther');
        for (const el of els) {
            console.log(el.getText());
        }
    })

    it('Find by xpath', async () => {
        // await $('//XCUIElementTypeStaticText[@name="Alert Views"]').click();
        // await $('//XCUIElementTypeStaticText[@name="Simple"]').click();

        await $('//*[@name="Alert Views"]').click();
        await $('//*[@name="Simple"]').click();
        await expect(await driver.getAlertText()).toContain('A Short Title Is Best');
    })

    it('Find by class chain', async () => {
        const alertText = '**/XCUIElementTypeStaticText[`name == "Alert Views"`]';
        await $(`-ios class chain:${alertText}`).click();
        await $('//*[@name="Simple"]').click();
        await expect(await driver.getAlertText()).toContain('A Short Title Is Best');
    })

    it('Find by predicate string', async () => {
        // const alertText = 'name == "Alert Views"';
        const alertText = 'value BEGINSWITH[c] "alert"';
        await $(`-ios predicate string:${alertText}`).click();
        await $('//*[@name="Simple"]').click();
        await expect(await driver.getAlertText()).toContain('A Short Title Is Best');
    })

    it.only('Search text', async () => {
        await $('~SearchViewControllers').click();
        await $('~Default').click();
        await $('XCUIElementTypeSearchField').setValue('hehe');
        await expect($('XCUIElementTypeSearchField')).toHaveAttr('value');
        await $('~Clear text').click();
        await expect($('XCUIElementTypeSearchField')).not.toHaveAttr('value');
    })
});