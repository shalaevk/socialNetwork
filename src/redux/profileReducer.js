const AddPost ="ADD_POST";
const ChangePost = "CHANGE_POST_TEXT";



const profileReducer = (state, action) => {

    switch (action.type) {
        case AddPost:
            let newPost = {
                id: 15,
                message: state.newPostText,
                likesCount: 0
            }
            state.posts.push(newPost)
            break;
        case ChangePost:
            state.newPostText = action.postText
            break;
    }


    return state
}

export default profileReducer;