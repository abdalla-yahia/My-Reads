import React,{useState,useEffect} from 'react'
import { get } from '../BooksAPI'
import { useSelector } from 'react-redux'


export default function Read() {
    const [state, setState] = useState([])
    const [data, setData] =useState([])
    const store = useSelector(state => state.name)
    useEffect(() => {
        const DataHandeller = async () => {
            setData( await store.read)
        }
        DataHandeller()
    },[])
    useEffect(() => {
    const HandellerGet = async () => {
        data.map(async (e) => {
            const res = await get(e)
            return setState(prev => { return [...prev, res]})
        })
        }
        HandellerGet()
    }, [data])

    const RESULT = () => {
        if (state === undefined) {
            return <h1>Sorry 😀</h1>
        }
        else if (Array.isArray(state)) {
            const res = state.map(el => {
                return<>
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
                    <select>
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
                    <div className="book-title">{ el.title}</div>
                    <div className="book-authors">{ el.authors}</div>
                </div>
            </li>
                </>
            })
            return res;
        }
            }
    
  return (
    <>
        <div className="bookshelf">
        <h2 className="bookshelf-title">Read</h2>
        <div className="bookshelf-books">
                <ol className="books-grid">
                {RESULT()}
            </ol>
        </div>
        </div>
    </>
  )
}
