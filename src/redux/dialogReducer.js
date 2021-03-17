const AddMessage = "ADD_MESSAGE";


const dialogReducer = (state, action) => {
    switch (action.type) {
        case AddMessage:
            state.messages.push({id: 1, message: action.message});
            break;
    }

    return state
}

export default dialogReducer