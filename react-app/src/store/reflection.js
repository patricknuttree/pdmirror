//ACTIONS
const GET_REFLECTIONS = "/REFLECTIONS/GET_REFLECTIONS"

//ACTION CREATOR
const getReflections = (list) => {
    return {
        type: GET_REFLECTIONS,
        list
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
        default:
            return state;
    }
}