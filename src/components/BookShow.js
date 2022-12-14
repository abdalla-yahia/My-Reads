import React,{useState,useEffect,useCallback} from 'react'
import {useDispatch } from 'react-redux'
import { update } from '../BooksAPI'

export default function BookShow(props) {
    const [state, setState] = useState([])
    const dispatch = useDispatch()

    useEffect(() => {
        setState(props.state)
    },[props.state])

        const RESULT = useCallback(() => {
        if (state === undefined) {
            return <h1>Sorry 😀</h1>
        }
        else if (Array.isArray(state)) {
            const res = state.map(el => {
                return <li key={el.id}>
                        <div className="book">
                            <div className="book-top">
                                {el.imageLinks === undefined ?
                            <div
                                className="book-cover"
                                style={{
                                    width: 128,
                                    height: 193,
                                    
                                }}>
                                </div>
                                :
                                <div
                                className="book-cover"
                                style={{
                                    width: 128,
                                    height: 193,
                                    backgroundImage:
                                        `url(${el.imageLinks.thumbnail})`
                                }}
                            ></div>}
                                <div className="book-shelf-changer">
                                    <select defaultValue={el.shelf} onChange={(i) => {
                                        dispatch({ type: 'add', payload:''})
                                        setState(prev => {
                                            return {
                                                ...prev,
                                            
                                            }
                                        })
                                    el.shelf = i.target.value
                                    update(el,i.target.value)
                                    }
                                    }>
                                        <option value="disabled" disabled>
                                            Move to...
                                        </option>
                                        <option value="currentlyReading">
                                            Currently Reading
                                        </option>
                                        <option value="wantToRead">Want to Read</option>
                                        <option value="read">Read</option>
                                        <option value="none">None</option>
                                    </select>
                                </div>
                            </div>
                            <div className="book-title">{el.title}</div>
                            <div className="book-authors">{el.authors}</div>
                        </div>
                    </li>
                
                
            })
            return res;
        }
    }, [dispatch, state])
    return (
        <>
    {RESULT()}
        </>
)
}
