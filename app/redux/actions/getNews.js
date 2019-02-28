// import axios from 'axios'

const apiUrl = 'https://newsapi.org/v2/top-headlines?country=us&apiKey=3e6d0f91b9f14b00a5e63f63eb35ee8b'

// export function GET_NEWS() {
//     return {
//         type: "GET_NEWS",
//         payload: axios.get('https://newsapi.org/v2/top-headlines?country=us&apiKey=3e6d0f91b9f14b00a5e63f63eb35ee8b')
//     }
// }

export function GET_NEWS() {
    return (dispatch)=> {
        dispatch(getNewsPending())

        return (fetch(apiUrl))
        .then(res => res.json())
        .then(json => {
            return (dispatch(getNewsFulfilled(json)))
        })
        .catch(err => dispatch(getNewsRejected(err)))
    }
}

function getNewsPending() {
    return {
        type: 'GET_NEWS_PENDING'
    }
}

function getNewsFulfilled(data) {
    return {
        type: 'GET_NEWS_FULFILLED',
        data
    }
}

function getNewsRejected() {
    return {
        type: 'GET_NEWS_REJECTED'
    }
}
