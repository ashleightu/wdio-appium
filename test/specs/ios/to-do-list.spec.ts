import AddToDoListScreen from "../../screenobjects/add-to-do-list.screen"

describe('iOS real app', async() => {
    it('Create to do list', async() => {
        await AddToDoListScreen.createList();
        await AddToDoListScreen.createItem();
    })
})