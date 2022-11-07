import React,{useState} from "react";
import CurrentlyReading from "./CurrentlyReading";
import Read from "./Read";
import Want2Read from "./Want2Read";
import { useSelector } from "react-redux";

const BooksShelf = (props) => {
    const [state, setState] = useState('')
    const store = useSelector(state => state)
    console.log(store.currentlyReading)
    console.log(store.wantToRead)
    console.log(store.read)
    return (
    <div className="list-books">
    <div className="list-books-title">
    <h1>MyReads</h1>
    </div>
    <div className="list-books-content">
    <div>
        <CurrentlyReading />
        <Want2Read />
        <Read />
    </div>
    </div>
    <div className="open-search">
    <a onClick={() => props.setsrch(!props.srch)}>Add a book</a>
    </div>
</div> 
    )
}

export default BooksShelf;

