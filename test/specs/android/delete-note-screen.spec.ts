import AddNoteScreen from "../../screenobjects/add-note.screen";
import DeleteNoteScreen from '../../screenobjects/delete-note.screen';

describe('Add Notes', () => {
    it('Add note, save changes and verify note', async () => {
        await AddNoteScreen.skipTutorial();
        await AddNoteScreen.addNewNote();       
    })

    it.only('Delete note', async() => {
        await AddNoteScreen.skipTutorial();
        await AddNoteScreen.addNewNote();
        await DeleteNoteScreen.deleteNote();      
    })
})