import React, {useState} from 'react'
import BookLayout from './BookLayout'
export function BookCollection(props) {
    const [shelfTtls, setShelfTtls] = useState([
      {key:'currentlyReading', name:'Currently Reading'},
      {key: 'read', name:'Read'},
      {key: 'wantToRead', name: 'Want to Read'}
    ])
    return(
    <div>
    {shelfTtls.map(x=> (
        <BookList
          key={x.key}
          shelf={x}
          books={props.books}
          onChange3Shelf={props.onChange3Shelf}
        />
      ))}
    </div>
    )
  }
export function BookList(props){
    const selectedBooks = props.books.filter(x=>x.shelf === props.shelf.key)
    return (
      <BookLayout title={props.shelf.name}>
        {selectedBooks.map(x=> (
          <BookItem 
            key={x.id}
            book={x}
            shelf={props.shelf.key}
            onChange3Shelf={props.onChange3Shelf}
          />
        ))}
      </BookLayout>
    )
  }
export function BookItem(props) {
    const [value, setValue] = useState(props.shelf)
    const onChange2Shelf = e => {
      setValue(e.target.value)
      props.onChange3Shelf(props.book, e.target.value)
    }
      return (
        <div style={{ width: '129px', fontSize:'12px'}}>
        <div
          style={{
            backgroundImage: `url(${props.book.imageLinks && props.book.imageLinks.thumbnail})`,
            width: '82px',
            height: '119px',
            marginBottom: '8px',
            backgroundSize: 'contain'
          }}
        />
        <div style={{display:'flex',justifyContent: 'space-between'}}>
        <b>{props.book.title}</b>
        <div className='dot-btn'>
        <select value={value} onChange={onChange2Shelf}>
          <option value='move' disabled>Move to...</option>
          <option value='currentlyReading'>Currently Reading</option>
          <option value='read'>Read</option>
          <option value='wantToRead'>Want to Read</option>
          <option value='none'>None</option>
        </select>
        </div>
        </div>
        <div>{props.book.authors && props.book.authors.join(', ')}</div>
        </div>
      )
  }