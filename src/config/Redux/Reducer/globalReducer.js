const initialState = {
    name: "Reva"
}

const globalReducer = (state = initialState, action) => {
    if (action.type === 'UPDATE_NAME')
    return {
        ...state,
        name: "Doni"
    }
    return state;
}

export default globalReducer