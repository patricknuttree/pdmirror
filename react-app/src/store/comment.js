//ACTIONS
const GET_COMMENTS = "/api/comments/GET_COMMENTS"

//ACTION CREATOR
const getComments = (list) => {
    return {
        type: GET_COMMENTS,
        list
    }
}

//THUNK ACTION
export const displayComments = (id) => async (dispatch) => {
    const response = await fetch(`/api/comments/reflection/${id}/comments`);
    if(response.ok){
        const data = await response.json();
        dispatch(getComments(data))
    }
}

const initialState = {
    list: [],
};

const sortList = list => {
    return list.map(comment => comment.id)
}



// REDUCER
export default function commentReducer(state = initialState, action){
    switch(action.type){
        case GET_COMMENTS:
            const nextState = {}
            action.list.comments.forEach(comment => {
                nextState[comment.id] = comment
            })
            return {
                ...state,
                ...nextState,
                list: sortList(action.list.comments)
            };
        default:
            return state;
    }
}