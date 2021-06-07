//ACTIONS
const GET_PDS = "/api/pds/GET_PDS"


//ACTION CREATOR
const getPds = (list) => {
    return {
        type: GET_PDS,
        list
    }
}

//THUNK ACTION
export const displayPds = () => async (dispatch) => {
    const response = await fetch('/api/pds/');
    if (response.ok) {
        const data = await response.json();
        // console.log("DATA", data)
        dispatch(getPds(data))
    }
}

const initialState = {
    list: [],
};

const sortList = list => {
    return list.map(pd => pd.id)
}

export default function pdReducer(state = initialState, action){
    switch(action.type){
        case GET_PDS:
            const nextState = {}
            action.list.pds.forEach(pd => {
                nextState[pd.id] = pd
            })
            return {
                ...state,
                ...nextState,
                list: sortList(action.list.pds)
            };
        default:
            return state;
    }
}