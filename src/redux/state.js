import profileReducer from "./profileReducer";
import dialogReducer from "./dialogReducer";


export const AddMessageAC = (text) => {
    return {
        type: "ADD_MESSAGE",
        message: text
    }
}

export const AddPostAc = () => {
    return {type: "ADD_POST"}
}
export const ChangePostTextAC = (text) => {
    return {
        type: "CHANGE_POST_TEXT",
        postText: text
    }
}


let store = {

    dispatch(action) {

        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogReducer(this._state.dialogsPage, action);

        this._rerenderEtireTree(this._state)
    },


    subscribe: function (observer) {
        this._rerenderEtireTree = observer
    },
    _rerenderEtireTree() {
        console.log(55)
    },
    getState() {
        return this._state;
    },
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: 'Hi, how are you?', likesCount: 12},
                {id: 2, message: 'It\'s my first post', likesCount: 11},
                {id: 3, message: 'Blabla', likesCount: 11},
                {id: 4, message: 'Dada', likesCount: 11}
            ],
            newPostText: 'wee'
        },
        dialogsPage: {
            dialogs: [
                {id: 1, name: 'Dimych'},
                {id: 2, name: 'Andrew'},
                {id: 3, name: 'Sveta'},
                {id: 4, name: 'Sasha'},
                {id: 5, name: 'Viktor'},
                {id: 6, name: 'Valera'}
            ],
            messages: [
                {id: 1, message: 'Hi'},
                {id: 2, message: 'How is your it-kamasutra?'},
                {id: 3, message: 'Yo'},
                {id: 4, message: 'Yo'},
                {id: 5, message: 'Yo'}
            ]
        },
        sidebar: {}
    }
}

export default store;
window.store = store;
