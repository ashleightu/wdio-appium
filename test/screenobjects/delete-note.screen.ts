import AddNoteScreen from "./add-note.screen";

class DeleteNoteScreen {
    get threeDotsBtnInNote() {
        return $('~More')
    }

    get deleteBtn() {
        return $('//*[@text="Delete"]');
    }

    get threeDotsBtn() {
        return $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/icon_nav"]');
    }

    get trashCanBtn() {
        return $('//*[@text="Trash Can"]');
    }

    get titleText() {
        return $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/title"]');
    }

    async deleteNote() {
        await this.threeDotsBtnInNote.click();
        await this.deleteBtn.click();
        await this.acceptAlert();
        await this.verifyNoteDeleted();
    }

    async acceptAlert() {
        await driver.acceptAlert();
    }

    async getTitleText() {
        return await this.titleText.getText();
    }

    async verifyNoteDeleted() {
        await this.threeDotsBtn.click();
        await this.trashCanBtn.click();
        const noteTitle = await this.getTitleText();
        await expect(AddNoteScreen.noteTitle).toHaveText(noteTitle);
    }

}

export default new DeleteNoteScreen();