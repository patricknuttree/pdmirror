//ACTIONS
const GET_REFLECTIONS = "/REFLECTIONS/GET_REFLECTIONS"
const POST_REFLECTION = "/reflections/POST_REFLECTION"

//ACTION CREATOR
const getReflections = (list) => {
    return {
        type: GET_REFLECTIONS,
        list
    }
}

const postReflection = (payload) => {
    return {
        type: POST_REFLECTION,
        payload
    }
}

//THUNK
export const displayReflections = (id) => async (dispatch) => {
    const response = await fetch(`/api/pds/${id}/reflections`)
    if (response.ok) {
        const data = await response.json();
        dispatch(getReflections(data))
    }
}

export const createReflection = (payload) => async (dispatch) => {
    const { post, rating, pd_id } = payload;
    const response = await fetch(`/api/pds/${pd_id}/reflections`, {
        method: "POST",
        headers: {
            "Content-type": "application/json",
        },
        body: JSON.stringify(payload)
    })
    if (response.ok) {
        const data = await response.json();
        dispatch(postReflection(data))
    }
}

//REDUCER
const initialState = {
    list: [],
};

const sortList = list => {
    return list.map(reflection => reflection.id)
}

export default function reflectionReducer(state = initialState, action){
    switch(action.type){
        case GET_REFLECTIONS:
            const nextState = {}
            action.list.reflections.forEach(reflection => {
                nextState[reflection.id] = reflection
            })
            return {
                ...state,
                ...nextState,
                list: sortList(action.list.reflections)
            }
        case POST_REFLECTION:
            return { ...state, ...action.payload };
        default:
            return state;
    }
}