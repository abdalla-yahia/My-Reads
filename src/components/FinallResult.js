/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState} from 'react'
import { useEffect } from 'react';
import { search } from '../BooksAPI';
import { useDispatch} from 'react-redux';


export default function FinallResult(props) {
    const [resultSearch, setResultSearch] = useState('')
    const dispatch =useDispatch()
   
    useEffect(() => {
        const ResultHandeller = async () => {
        const res =setResultSearch(await search(props.input))
        }
        ResultHandeller()
    }, [props.input])

const RESULT = () => {
    if (resultSearch === undefined) {
        return <h1>Find the books you want 😀</h1>
    }
    else if (Array.isArray(resultSearch)) {
        return <div>
            <div className="bookshelf-books" >
                <ol className="books-grid" >
            {resultSearch.map((e) => {
                return <>
                    <div className='' >
                        <li key={e.id}>
                        <div className="book">
                            <div className="book-top">
                                <div 
                                    className="book-cover"
                                    style={{
                                        width: 128,
                                        height: 193,
                                        backgroundImage:
                                            `url(${e.imageLinks.thumbnail})`,
                                    }}
                                ></div>
                                <div className="book-shelf-changer">
                                        <select onChange={(i) => {
                                                dispatch({ type: i.target.value,payload:e.id })
                                        }
                                        }>
                                        <option value="none" disabled>
                                            Move to...
                                        </option>
                                        <option value="currentlyReading">
                                            Currently Reading
                                        </option>
                                        <option value="wantToRead">Want to Read</option>
                                        <option value="read">Read</option>
                                        <option value="none" selected>None</option>
                                    </select>
                                </div>
                            </div>
                            <div className="book-title">{e.title}</div>
                            <div className="book-authors">{e.authors}</div> 
                        </div>
                    </li> 
                </div>
                    </>
            })
            }
                </ol>
                    </div>
        </div> 
    } else if(Object(resultSearch)) {
        return <h1>Oops Not Found !! 🙂</h1>
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
