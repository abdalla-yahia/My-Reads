
import { useState } from 'react';
import FinallResult from "./FinallResult";

const NavSearch = (props) => {
    const [inputValue, setInputValue] = useState('')
    return (<>
        
        <div className="search-books">
          <div className="search-books-bar">
            <a
              className="close-search"
              onClick={() => props.setsrch(!props.srch)}
            >
              Close
            </a>
            <div className="search-books-input-wrapper">
                <input
                type="text"
                placeholder="Search by title, author, or ISBN"
                onChange={(e) => setInputValue(e.target.value.toUpperCase())}
                />
                
            </div>
          </div>
          <div className="search-books-results">
          <FinallResult input={inputValue}/>
          </div>
        </div>
        
    </>)
}

export default NavSearch;