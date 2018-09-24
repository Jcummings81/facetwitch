import axios from 'axios';
const TWITCHES = 'TWITCHES'
const ADD_TWITCH = 'ADD_TWITCH'
const UPDATE_TWITCH = 'UPDATE_TWITCH'
const DELETE_TWITCH = 'DELETE_TWITCH'

export const getTwitches = () => {
    return(dispatch) => {
        axios.get('api/twitches')
            .then( res => dispatch({type: TWITCHES, twitches: res.data}))
    
    }
}

export const addTwitch = (twitch) => {
    return(dispatch) => {
        axios.post('api/twitches', {twitch})
            .then( res => dispatch({type: ADD_TWITCH, twitch: res.data}))

    }
}

export const updateTwitch = (twitch) => {
    return(dispatch) => {
        axios.put('api/twitches${twitch.id}', {twitch})
            .then( res => dispatch({type: UPDATE_TWITCH, twitch: res.data}))
    }
}

export const deleteTwitch = (id) => {
    return(dispatch) => {
        axios.delete('api/twitches/$id}')
            .then( () => dispatch({type: DELETE_TWITCH, id}))
    }
}

export default (state = [], action ) => {
    switch(action.type) {
        case TWITCHES:
            return action.twitches
        case ADD_TWITCH:
            return [action.twitch, ...state]
        case UPDATE_TWITCH:
            return state.map( t => {
                if (t.id === action.twitch.id)
                return action.twitch
            return t
            })
        case DELETE_TWITCH:
            return state.filter( t => t.id !== action.id )
        default
            return state;
    }
}