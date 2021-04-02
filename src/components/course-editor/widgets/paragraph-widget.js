import React from 'react'


const ParagraphWidget = ({widget, editing, setEditingWidget, editingWidget}) => {
  return(
      <>
        {editing &&
          <>
            <textarea onChange={event=>setEditingWidget({...editingWidget, text: event.target.value})}
                      value={editingWidget.text} className="form-control">
            </textarea>
          </>
        }
        { !editing &&
          <p>
            {widget.text}
          </p>
        }
      </>)
}

export default ParagraphWidget

