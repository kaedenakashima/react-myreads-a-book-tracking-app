import React from'react'
export default function BookLayout({title, children}) {
    return(
      <div style={{margin: '8px', padding: '8px'}}>
      <h2 style={{borderBottom: '1px solid black', fontSize:'16px'}}><b>◆{title}◆</b></h2>
      <div style={{marginTop: '4px',display:'flex', flexWrap: 'wrap'}}>
      {children}
      </div>
      </div>
    )
}