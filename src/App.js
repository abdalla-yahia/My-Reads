import { useState} from "react";
import NavSearch from "./components/NavSearch";
import BooksShelf from "./components/BooksShelf";
import { Route, Routes } from "react-router-dom";

import "./App.css";


function App() {
  const [showSearchPage, setShowSearchpage] = useState(false);
  return (
    <div className="app">
      
        <Routes>
        <Route path="/" element={<BooksShelf setsrch={setShowSearchpage} srch={showSearchPage} />} />
        <Route path='/search' exact element={<NavSearch setsrch={setShowSearchpage} srch={showSearchPage} />} />
        </Routes>

    </div>
  );
}

export default App;
