import React, {useState} from 'react'
import {Link} from "react-router-dom";

const EditableItem = (
    { to = '/some/where/to/go',
      updateItem,
      deleteItem,
      item,
      active = false
    }) => {
  const [editing, setEditing] = useState(false)
  const [cachedItem, setCachedItem] = useState(item)

  const setCheck = () => {
    updateItem(cachedItem)
    setEditing(false)
  }

  return (
      <>
        {!editing &&
          <>
            <Link className={`nav-link ${active ? 'active':''}`} aria-current="page" to={to}>
            {item.title}
            </Link>
            <i onClick={() => setEditing(true)} className='fas fa-edit'></i>
          </>
        }
        {editing &&
        <>
          <input type="text" onChange={event => setCachedItem({...cachedItem, title: event.target.value})}
                 value={cachedItem.title}/>
          <i onClick={() => setCheck()} className='fas fa-check'></i>
          <i onClick={() => deleteItem(item)} className='fas fa-times'></i>
        </>}
      </>
  )

}


export default EditableItem
