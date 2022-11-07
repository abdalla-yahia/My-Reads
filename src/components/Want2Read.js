import React,{useState,useEffect,useCallback} from 'react'
import { useSelector,useDispatch } from 'react-redux'


export default function Want2Read() {
    const [state, setState] = useState([])
    const dispatch = useDispatch()
    
    const store = useSelector(state => state.currentlyReading)
    useEffect(() => {
        const DataHandeller = async () => {
            setState( await store)
        }
        DataHandeller()
    },[state])
 useEffect(() => {
        RESULT()
    },[state])
    const RESULT = useCallback(() => {
        if (state === undefined) {
            return <h1>Sorry 😀</h1>
        }
        else if (Array.isArray(state)) {
            const res = state.map(el => {
                return <>{el.shelf === "wantToRead" &&
                    <li>
                        <div className="book">
                            <div className="book-top">
                                <div
                                    className="book-cover"
                                    style={{
                                        width: 128,
                                        height: 193,
                                        backgroundImage:
                                            `url(${el.imageLinks.thumbnail})`
                                    }}
                                ></div>
                                <div className="book-shelf-changer">
                                    <select defaultValue={el.shelf} onChange={(i) => {
                                        dispatch({ type: 'add', payload:''})
                                        setState(prev => {
                                            return {
                                                ...prev,
                                               
                                            }
                                        })
                                        el.shelf = i.target.value
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
                                        <option value="none">None</option>
                                    </select>
                                </div>
                            </div>
                            <div className="book-title">{el.title}</div>
                            <div className="book-authors">{el.authors}</div>
                        </div>
                    </li>
                }
                </>
            })
            return res;
        }
    }, [state])
   
  return (
      <>
          <div className="bookshelf">
        <h2 className="bookshelf-title">Want to Read</h2>
        <div className="bookshelf-books">
                  <ol className="books-grid">
                      {RESULT()}
            </ol>
        </div>
        </div>
      </>
  )
}
