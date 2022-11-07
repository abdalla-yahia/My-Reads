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
        // case 'wantToRead':
        //     return {
        //         ...state,
        //         currentlyReading: state.currentlyReading.push( action.payload)
        //     }
        // case 'read':
        //     return {
        //         ...state,
        //         currentlyReading: state.currentlyReading.push( action.payload)
        //     }
        case 'global':
            return {
                ...state,
                add:state.globalStore.push(action.payload)
                
            }
        default:
            return state
    }
}

const store = createStore(reducer)

export default store;