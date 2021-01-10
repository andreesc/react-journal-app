import Swal from "sweetalert2";
import {db} from "../firebase/firebase-config";
import {types} from "../types/types";
import {loadNotes} from "../helpers/loadNotes";
import {fileUpdate} from "../helpers/fileUpload";

export const startNewNote = () => {
    return async (dispatch, getState) => {
        const {uid} = getState().auth;
        const newNote = {
            title: '',
            body: '',
            date: new Date().getTime()
        }
        const doc = await db.collection(`${uid}/journal/notes`).add(newNote);
        dispatch(activeNote(doc.id, newNote));

        dispatch(addNewNoteToSideBar(doc.id, newNote));
    }
}

export const startLoadingNotes = (uid) => {
    return async (dispatch) => {
        const notes = await loadNotes(uid);
        dispatch(setNotes(notes));
    }
}

export const setNotes = (notes) => {
    return {
        type: types.NOTES_LOAD,
        payload: notes
    }
}

export const activeNote = (id, note) => {
    return {
        type: types.NOTES_ACTIVE,
        payload: {
            id,
            ...note
        }
    }
}

export const addNewNoteToSideBar = (id, note) => {
    return {
        type: types.NOTES_ADD_NEW,
        payload: {
            id, ...note
        }
    }
}

export const startSaveNote = (note) => {
    return async (dispatch, getState) => {
        const {uid} = getState().auth;
        if (!note.url) {
            delete note.url;
        }
        const noteToFireStore = {...note};
        delete noteToFireStore.id;

        await db.doc(`${uid}/journal/notes/${note.id}`).update(noteToFireStore);
        dispatch(refreshNote(note.id, noteToFireStore));
        Swal.fire('Saved', note.title, 'success');
    }
}

export const refreshNote = (id, note) => {
    return {
        type: types.NOTES_UPDATED,
        payload: {
            id,
            note: {
                id,
                ...note
            }
        }
    }
}

export const startUploading = (file) => {
    return async(dispatch, getState) => {

        const {active:activeNote} = getState().notes;

        Swal.fire({
            title: 'Uploading',
            text: 'Please wait...',
            allowOutsideClick: false,
            showConfirmButton: false,
            onBeforeOpen: () => {
                Swal.showLoading();
            }
        });

        const fileUrl = await fileUpdate(file);
        activeNote.url = fileUrl;

        dispatch(startSaveNote(activeNote));
        Swal.close();

    }
}

export const startDeleting = (id) => {
    return async(dispatch, getState) => {

        const uid = getState().auth.uid;

        await db.doc(`${uid}/journal/notes/${id}`).delete();

        dispatch(deleteNote(id));

    }
}

export const deleteNote = (id) => {
    return {
        type: types.NOTES_DELETE,
        payload: id
    }
}

export const notesLogOut = () => {
    return {
        type: types.NOTES_LOGOUT_CLEANING
    }
}