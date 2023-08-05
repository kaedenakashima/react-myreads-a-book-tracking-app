import React, {useState, useEffect} from 'react'
import ReactDOM from 'react-dom/client'
import * as BookData from './BookData'
import {debounce} from 'throttle-debounce'
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom'
import './index.css'
import SearchIcon from '@mui/icons-material/Search'
import BookmarksIcon from '@mui/icons-material/Bookmarks'
import {BookCollection} from './BookListPage'
import {BookSearchController, BookSearchList} from './BookSearchPage'
function App() {
  const [books, setBooks] = useState([])
  const [searchBooks, setSearchBooks] = useState([])
  useEffect(() => {BookData.getAll().then(x => {setBooks(x)})}, [])
  const onChange4Shelf = (book, shelf) => {
    BookData.update(book, shelf)
    let updatedBooks = []
    updatedBooks = books.filter(x => x.id !== book.id)
    if(shelf !== 'none'){
      book.shelf = shelf
      updatedBooks = updatedBooks.concat(book)
    }
    setBooks(updatedBooks)
  }
  const onChange3Search = debounce(300, false, query => {
   if(query.length > 0) {
     BookData.search(query).then(x=> {
       if(x.error){
         setSearchBooks([])
       } else {
        setSearchBooks(x)
       }
     })
    }else {
      setSearchBooks([])
    }
  })
  const onClick3GoBack =() => {
   setSearchBooks([])
  }
   return (
     <div className="App">
      <HeaderNav />
      <Routes>
      <Route path='/' element={<HeaderNav />}/>
      <Route index element={ 
        <BookCollection 
          books={books}
          onChange3Shelf={onChange4Shelf}
        />
      }/> 
      <Route path='/search' element={<>
        <BookSearchController 
          onChange3Search={onChange3Search}
          onClick2GoBack={onClick3GoBack}
        />
        <BookSearchList 
          searchBooks={searchBooks}
          books={books}
          onChange3Search={onChange3Search}
          onChange3Shelf={onChange4Shelf}
          onClick2GoBack={onClick3GoBack}
        />
      </>
      }/>
      </Routes>
      </div>
    )
}
function HeaderNav(){
console.log('path', window.location.pathname)
console.log('path2',window.location.href)
// console.log('path2', `../${location.pathname}`)
//{`{window.location.pathname} + '/search'`||'/search'} 
  return (
    <>
      <h1 className='app-ttl'><b>React Original Frontend Book App</b></h1>
      <Link to='/' className='nav-item' relative='path'><BookmarksIcon/></Link>
      <Link to='/search' className='nav-item' relative='path'><SearchIcon/></Link>
    </>
  )
}
const root = ReactDOM.createRoot( document.getElementById('root') )
root.render(<BrowserRouter basename={window.location.pathname || '/'}><App /></BrowserRouter>)