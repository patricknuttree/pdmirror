//ACTIONS
const GET_COMMENTS = "/api/comments/GET_COMMENTS"
const POST_COMMENT = "/api/comments/POST_COMMENTS"

//ACTION CREATOR
const getComments = (list) => {
    return {
        type: GET_COMMENTS,
        list
    }
}

const postComment = (payload) => {
    return {
        type: POST_COMMENT,
        payload
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

export const createComment = (payload) => async (dispatch) => {
    const { reflection_id } = payload;
    const response = await fetch(`/api/comments/reflection/${reflection_id}/comments`, {
        method: "POST",
        headers: {
            "Content-type": "application/json",
        },
        body: JSON.stringify(payload)
    })
    if(response.ok){
        const data = await response.json();
        dispatch(postComment(data))
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
        case POST_COMMENT:
            return { ...state, ...action.payload };
        default:
            return state;
    }
}