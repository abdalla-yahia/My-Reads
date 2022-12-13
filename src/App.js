import { useState} from "react";
import NavSearch from "./components/NavSearch";
import BooksShelf from "./components/BooksShelf";
import { Route, Routes } from "react-router-dom";
import React,{useEffect} from "react";
import { useSelector, useDispatch } from "react-redux";
import {getAll} from './BooksAPI'
import "./App.css";

function App() {

    const [state, setState] = useState([])
    const [books, setBooks] = useState([])
    const store = useSelector(state => state)
    const dispatch = useDispatch()
    //Set Data Into State from Store
    useEffect(() => {
        const fun = async () => {
            await store
            setState(await store.mainStore)
            setState(prev => {
                return [
                    ...prev,
                    ...books
                ]
            })
        }
        fun()
    }, [books, dispatch, store])

  //Get Default Book 
    useEffect(() => {
        const fun = async () => {
            setBooks(await getAll())
        }
        fun()
        books.map(e=>dispatch({type:'add', payload:e}))
    }, [dispatch])
  
  
  return (
    <div className="app">
        <Routes>
        <Route path="/" element={<BooksShelf state={state} />} />
        <Route path='/search' exact element={<NavSearch state={state} />} />
        </Routes>
    

    </div>
  );
}

export default App;
