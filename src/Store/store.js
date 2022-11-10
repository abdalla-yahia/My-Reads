// import {createStore} from 'react-redux'
import { createStore } from "redux"


const initState = {
    currentlyReading: [],
    globalStore: [],
    mainStore : []
}
export const CurrentlyReading = 'currentlyReading'
export const Want2Read = 'wantToRead'
export const Read = 'read'


const reducer = (state = initState, action) => {
    switch (action.type) {
        case 'add':
            return {
                ...state,
                add:state.currentlyReading.push(action.payload)
            }
        case 'remove':
            return {
                ...state,
                remove: state.currentlyReading.filter(el => 
                el.id === action.payload.id ? el.shelf = action.shelf : ''
                
                )}
        default:
            return state
    }
}

const store = createStore(reducer)

export default store;

