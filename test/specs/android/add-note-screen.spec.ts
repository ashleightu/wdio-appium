import AddNoteScreen from "../../screenobjects/add-note.screen";

describe('Add Notes', () => {
    it('Add note, save changes and verify note', async () => {
        await AddNoteScreen.skipTutorial();
        await AddNoteScreen.addNewNote();       
    })
})