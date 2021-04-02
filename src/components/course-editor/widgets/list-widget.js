import React from "react"


const ListWidget = ({editing, widget, editingWidget, setEditingWidget}) => {
  return (
      <div>
        {
          editing &&
              <>
                <input type="checkbox" onChange={(event)=>setEditingWidget({...editingWidget,
                  ordered:event.target.checked})} checked={editingWidget.ordered} /> Ordered
                <br/>
                Item list
                <textarea onChange={event => setEditingWidget({...editingWidget, text: event.target.value})}
                          value={editingWidget.text} rows={10} className="form-control"/>
              </>
        }
        {

          !editing &&
          <>
            {!widget.ordered &&
            <ul>
              {widget.text.split("\n").map((item) => {
                return (
                    <li>{item}</li>
                )
              })}
            </ul>
            }
            {widget.ordered &&
            <ol>
              {widget.text.split("\n").map((item) => {
                return (
                    <li>{item}</li>
                )
              })}
            </ol>
            }
          </>
        }
      </div>
  )
}

export default ListWidget