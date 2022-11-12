import CurrentlyReading from "./CurrentlyReading";
import Read from "./Read";
import Want2Read from "./Want2Read";
import React,{useState,useEffect} from "react";
import {Link } from "react-router-dom";


const BooksShelf = (props) => {
    const [state, setState] = useState([])
    useEffect(() => {
        setState(props.state)
    }, [props.state])

    return (
        <div className="list-books">
    <div className="list-books-title">
    <h1>MyReads</h1>
    </div>
    <div className="list-books-content">
    <div>
        <CurrentlyReading shelf={state.filter(e => e.shelf === "currentlyReading") } />
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

