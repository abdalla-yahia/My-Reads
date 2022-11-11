import React,{useState,useEffect} from "react";
import CurrentlyReading from "./CurrentlyReading";
import Read from "./Read";
import Want2Read from "./Want2Read";
import {Link } from "react-router-dom";
import { useSelector,useDispatch } from "react-redux";

const BooksShelf = () => {
    const [state, setState] = useState([])
    const store = useSelector(state => state)
    const dispatch = useDispatch()
    //Set Data Into State from Store
    useEffect(() => {
        const fun =async () => {
            await store
            setState( await store.mainStore)
        }
        fun()
    }, [dispatch, store])

    return (
    <div className="list-books">
    <div className="list-books-title">
    <h1>MyReads</h1>
    </div>
    <div className="list-books-content">
    <div>
        <CurrentlyReading shelf={state.filter(e => e.shelf === "currentlyReading")} />
        <Want2Read shelf={state.filter(e => e.shelf === "wantToRead")}/>
        <Read shelf={state.filter(e => e.shelf === "read")}/>
    </div>
    </div>
            <div className="open-search">
    <Link to='search'>Add a book</Link>
    </div>
</div> 
    )
}

export default BooksShelf;

