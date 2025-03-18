class AddNoteScreen {

    get skipBtn() {
        return $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/btn_start_skip"]');
    }

    get addNoteText() {
        return $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/empty_text"]');
    }

    get textOption() {
        return $('//*[@text="Text"]');
    }

    get editingText() {
        return $('//*[@text="Editing"]');
    }

    get editTitle() {
        return $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/edit_title"]');
    }

    get editNote() {
        return $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/edit_note"]');
    }

    get backBtn() {
        return $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/back_btn"]');
    }

    get editBtn() {
        return $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/edit_btn"]');
    }

    get viewNote() {
        return $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/view_note"]');
    }

    get noteTitle() {
        return $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/title"]');
    }

    get emptyText() {
        return $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/empty_text"]');
    }

    async skipTutorial() {
        await this.skipBtn.click();
        await expect(this.emptyText).toBeDisplayed();
    }

    async addNewNote() {
        await this.clickAddNote();
        await this.addTitle('Grocery List');
        await this.addBody('1. Bread\n2. Milk\n3. Bacon');
        await this.clickBackBtn();
        await this.verifyNoteAdded('1. Bread\n2. Milk\n3. Bacon');
    }

    async clickAddNote() {
        await this.addNoteText.click();
        await this.textOption.click();
        await expect(this.editingText).toBeDisplayed();
    }

    async addTitle(title: string) {
        await this.editTitle.setValue(title);
    }

    async addBody(body: string) {
        await this.editNote.setValue(body);
    }

    async clickBackBtn() {
        await this.backBtn.click();
    }

    async verifyNoteAdded(body: string) {
        await expect(this.editBtn).toBeDisplayed();
        await expect(this.viewNote).toHaveText(body);
    }

}

export default new AddNoteScreen();