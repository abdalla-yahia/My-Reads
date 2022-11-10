import { Link } from 'react-router-dom';
import { useState } from 'react';
import FinallResult from "./FinallResult";

const NavSearch = () => {
    const [inputValue, setInputValue] = useState('')
    return (<>
        
        <div className="search-books">
          <div className="search-books-bar">
            <Link
              className="close-search"
              to='/'
            >
              Close
            </Link>
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