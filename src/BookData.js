let token = localStorage.token
if(!token) 
  token = Math.random().toString(36).substr(-8)
const url = process.env.REACT_APP_BOOK_API_KEY
const options = {
    headers:{
        'content-type':'application/json',
        Accept:'application/json',
        Authorization: token
    }
}
export const get = bookId => 
    fetch(`${url}/books/${bookId}`, options)
    .then(res=> res.json())
    .then(x=> x.book)
export const getAll = () => 
    fetch(`${url}/books`, options)
    .then(res => res.json())
    .then(x => x.books)
export const update = (book, shelf) => 
    fetch(`${url}/books/${book.id}`, {
        method: 'PUT',
        ...options,
        body: JSON.stringify({shelf})
    }).then(res=>res.json())
export const search = query => 
    fetch(`${url}/search`,{
        method:'POST',
        ...options,
        body:JSON.stringify({query})
    })
    .then(res=> res.json())
    .then(x=> x.books)


