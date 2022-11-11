import React,{useState,useEffect} from 'react'
import BookShow from './BookShow'

export default function Want2Read(props) {
    const [state, setState] = useState([])

    useEffect(() => {
        setState(props.shelf)
    }, [props.shelf])

    return (
    <>
        <div className="bookshelf">
        <h2 className="bookshelf-title">Want to Read</h2>
        <div className="bookshelf-books">
            <ol className="books-grid">
                <BookShow state={ state} />
            </ol>
        </div>
        </div>
    </>
    )
}
