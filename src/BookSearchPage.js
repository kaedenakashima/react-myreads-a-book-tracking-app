import React, {useState} from 'react'
import CloseIcon from '@mui/icons-material/Close'
import BookLayout from './BookLayout'
import {BookItem} from './BookListPage'
import {Link} from 'react-router-dom'
export function BookSearchList(props){
    const updatedBooks = props.searchBooks.map(x => {
      //▼　If shelf is updated at books, searchedBooks data will be replaced.
      props.books.map(
        y => {if(y.id === x.id){x.shelf = y.shelf}return y}
      )
      //▲
      return x
    })
      return (
      <>
      <BookLayout title='Result'>
        {updatedBooks.map(x => (
          <BookItem
            key={x.id}
            book ={x}
            shelf={x.shelf ? x.shelf: 'none'}
            onChange3Shelf={props.onChange3Shelf}
          />
        ))}
      </BookLayout>
      </>
      )
  }
export function BookSearchController(props) {
    const [value, setValue] = useState('')
    const onChange2Search = e => {
      setValue(e.target.value)
      props.onChange3Search(e.target.value)}
      return (
        <div style={{display: 'inline-block', verticalAlign: 'top'}}>
        <input
         type='text'
         value={value}
         placeholder='Ex. React'
         onChange={onChange2Search}
         autoFocus
        />
        <Link to='/'>
        <CloseIcon className='close-icon-btn' onClick={props.onClick2GoBack}/>
        </Link>
        </div>
      )
  }