import DeleteNoteScreen from "../../screenobjects/delete-note.screen";
import AddNoteScreen from "../../screenobjects/add-note.screen";

describe('Web browser access', async() => {
    before(async () => {

    })

    it('Access external link and verify content in the browser', async () => {
        await AddNoteScreen.skipTutorial();
        await expect(AddNoteScreen.addNoteText).toBeExisting()
        await DeleteNoteScreen.navIcon.click();
        //await $('//*[@text="Like us on Facebook"]').click();

        await driver.pause(10000)
    })
})