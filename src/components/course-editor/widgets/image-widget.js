import React from "react"


const ImageWidget = ({widget, editing, setEditingWidget, editingWidget}) =>
    <div>
      {
        !editing &&
        <>
          <img width={widget.width} height={widget.height} src={widget.src}/>
        </>
      }
      {
        editing &&
            <>
              Image Url
              <input onChange={event=>setEditingWidget({...editingWidget, src:event.target.value})}
                     value={editingWidget.src} className="form-control"/>
              Image width
              <input onChange={event=>setEditingWidget({...editingWidget, width:event.target.value})}
                     value={editingWidget.width} className="form-control"/>
              Image height
              <input onChange={event=>setEditingWidget({...editingWidget, height:event.target.value})}
                     value={editingWidget.height} className="form-control"/>
            </>
      }
    </div>

export default ImageWidget