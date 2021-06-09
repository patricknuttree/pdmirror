//ACTIONS
const GET_COMMENTS = "/api/comments/GET_COMMENTS"
const POST_COMMENT = "/api/comments/POST_COMMENT"
const DELETE_COMMENT = "/api/comments/DELETE_COMMENT"

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

const deleteComment = (deletePayload) => {
    return {
        type: DELETE_COMMENT,
        deletePayload
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

export const updateComment = (payload) => async (dispatch) => {
    const { reflection_id, comment_id } = payload;
    const response = await fetch(`/api/comments/reflection/${reflection_id}/comments/${comment_id}`, {
        method: "PUT",
        headers: {
            "Content-Type":"application/json"
        },
        body: JSON.stringify(payload)
    })
    // if(response.ok){
    //     const data = await response.json();
    //     dispatch(postComment(data))
    // }
}

export const deleteCommentThunk = (deletePayload) => async (dispatch) => {
    const { reflection_id, comment_id} = deletePayload
    const response = await fetch(`/api/comments/reflection/${reflection_id}/comments/${comment_id}`, {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            comment_id
        })
    })
    if(response.ok){
        dispatch(deleteComment(comment_id))
    }
}

// CREATE STATE
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

        case DELETE_COMMENT:
            const lastState = { ...state }
            delete lastState[action.deletePayload]
            return lastState
        default:
            return state;
    }
}