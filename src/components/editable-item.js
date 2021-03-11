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
            <Link className={`nav-link ${active ? 'active':''} yz-editable-item-link`} aria-current="page" to={to}>
            {item.title}
            </Link>
            <i onClick={() => {setEditing(true)}} className='fas fa-edit float-right yz-editable-item-edit'></i>
          </>
        }
        {editing &&
        <>
          <Link className='nav-link active' aria-current="page">
          <input type="text" onChange={event => setCachedItem({...cachedItem, title: event.target.value})}
                 value={cachedItem.title} className="yz-editable-item-input"/>
          </Link>
          <i onClick={() => setCheck()} className='fas fa-check yz-editable-item-check float-right'></i>
          <span>&nbsp;&nbsp;&nbsp;</span>
          <i onClick={() => {setEditing(false); deleteItem(item)}} className='fas fa-times yz-editable-item-delete float-right'></i>
          <i></i>
        </>}
      </>
  )

}


export default EditableItem
