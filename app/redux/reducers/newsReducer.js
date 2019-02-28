const initialState = {
    results: [],
    data: {},
    isLoading: false,
    isError: false
}

function newsReducer(state = initialState, action) {
    switch (action.type) {
        case "GET_NEWS_PENDING":
            return {...state, isLoading: true}
        case "GET_NEWS_FULFILLED":
            return {...state, isLoading: false, data: action.data}
        case "GET_NEWS_REJECTED":
            return {...state, isLoading: false, isError: true}
        default:
            return state
    }
}

export default newsReducer