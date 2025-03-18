class AddToDoListScreen {
    get createListBtn() {
        return $('//*[@name="Create list"]')
    }

    get listNameInput() {
        return $('//*[@value="List Name"]');
    }

    get createBtn() {
        return $('~Create');
    }

    get listTitle() {
        return $('~To do list');
    }

    get createItemBtn() {
        return $('//*[@value="Create item"]');
    }

    get itemTitleInput() {
        return $('//*[@value="Title"]');
    }

    get itemDueInput() {
        return $('//*[@value="Due"]');
    }

    get dateBtn() {
        return $('~20');
    }

    get itemTitle() {
        return $('~Item 1');
    }

    get itemDue() {
        return $('~Due 20 March 2025');
    }

    async createList() {
        await this.createListBtn.click();
        await this.listNameInput.setValue('To do list');
        await this.createBtn.click();
        await expect(this.listTitle).toBeDisplayed();
    }

    async createItem() {
        await this.listTitle.click();
        await this.createItemBtn.click();
        await this.itemTitleInput.setValue('Item 1');
        await this.itemDueInput.click();
        await this.dateBtn.click();
        await this.createBtn.click();
        await expect(this.itemTitle).toBeExisting();
        await expect(this.itemDue).toBeExisting();
    }
}

export default new AddToDoListScreen()