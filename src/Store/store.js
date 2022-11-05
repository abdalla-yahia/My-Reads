// import {createStore} from 'react-redux'
import { createStore } from "redux"


const initState = {
    name: {
        currentlyReading: [],
        wantToRead: [],
        read: []
    }
}
export const CurrentlyReading = 'currentlyReading'
export const Want2Read = 'wantToRead'
export const Read = 'read'

const reducer = (state = initState, action) => {
    switch (action.type) {
        case 'currentlyReading':
            return {
                ...state,
                currentlyReading: state.name.currentlyReading.push( action.payload)
            }
        case 'wantToRead':
            return {
                ...state,
                wantToRead: state.name.wantToRead.push( action.payload)
            }
        case 'read':
            return {
                ...state,
                read: state.name.read.push( action.payload)
            }
        default:
            return state
    }
}

const store = createStore(reducer)

export default store;