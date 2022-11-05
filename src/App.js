import { useState} from "react";
import NavSearch from "./components/NavSearch";
import BooksShelf from "./components/BooksShelf";
import "./App.css";


function App() {
  const [showSearchPage, setShowSearchpage] = useState(false);

  return (
    <div className="app">
      {showSearchPage ?
        <NavSearch setsrch={setShowSearchpage} srch={showSearchPage} />
        :
        (
          <BooksShelf setsrch={ setShowSearchpage} srch={showSearchPage}/>
        
        )
      }
    </div>
  );
}

export default App;
