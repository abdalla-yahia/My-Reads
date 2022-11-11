
import React, { useState} from 'react'
import { useEffect } from 'react';
import { search } from '../BooksAPI';
import { useDispatch,useSelector} from 'react-redux';


export default function FinallResult(props) {
    const [resultSearch, setResultSearch] = useState([])
    const [state, setState] = useState('')
    const dispatch =useDispatch()
    const store = useSelector(state => state.mainStore)

    useEffect(() => {
        setState(props.state)
    }, [props.state])
    
    useEffect(() => {
        const ResultHandeller = async () => {
            if (props.input !== "") {
                const res = setResultSearch(await search(props.input))
            }
        }
        ResultHandeller()
        
    }, [props.input, store])


const RESULT = () => {
    if (resultSearch === undefined || resultSearch.length < 1 ) {
        return <h1>Find here the books you want 😀</h1>
    }
    if (Array.isArray(resultSearch)) {
        return <div>
            <div className="bookshelf-books" >
                <ol className="books-grid" >
                    {resultSearch.map((e) => {
                        if (e.shelf == null) {
                            e.shelf = "none"
                        }
                        if (Array.isArray(store)) {
                            state.map(el =>el.id === e.id ? e.shelf = el.shelf :"")}
                return<li key={e.id}>
                        <div className="book">
                            <div className="book-top">
                                    {e.imageLinks !== undefined && <div
                                        className="book-cover"
                                        style={{
                                            width: 128,
                                            height: 193,
                                            backgroundImage:
                                                `url(${e.imageLinks.thumbnail})`
                                        }}
                                    ></div>}
                                <div className="book-shelf-changer">
                                        <select defaultValue={e.shelf} onChange={(i) => {
                                            
                                            if (e.shelf !== "none") {
                                                dispatch({ type: 'remove', payload:e,shelf:i.target.value})
                                                e.shelf = i.target.value
                                            } else {
                                                
                                                dispatch({ type: 'add', payload: e })
                                                e.shelf = i.target.value
                                            }
                                                }
                                        }>
                                        <option value="disabled" disabled>
                                            Move to...
                                        </option>
                                        <option value="currentlyReading" >
                                            Currently Reading
                                        </option>
                                        <option value="wantToRead" >Want to Read</option>
                                        <option value="read" >Read</option>
                                        <option value="none" >None</option>
                                    </select>
                                </div>
                            </div>
                            <div className="book-title">{e.title}</div>
                                {e.authors !== undefined && <div className="book-authors">{e.authors}</div> }
                    </div>
                    
                    </li> 
                
                
            })
            }
                </ol>
                    </div>
        </div> 
    } else if(Object(resultSearch)) {
        return <h1>Oops Not Found Any Thing!! 🙂</h1>
    } else {
        return <h1>Error !! 🙂</h1>
    }
}
    return (<>
    <hr/>
    {RESULT()}
    
</>
)
}
