import React, {useEffect} from 'react'
import {connect} from "react-redux";
import EditableItem from "../editable-item";
import {useParams} from 'react-router-dom';
import moduleService from "../../services/module-service";
import lessonService from "../../services/lesson-service";


const ModuleList = ({modules=[], createModule, deleteModule, updateModule, findModulesForCourse}) => {
  const {layout,courseId, moduleId} = useParams();
  useEffect(() => {findModulesForCourse(courseId)}, [])
  return (
  <ul className="list-group" id="leftSideList">
    {modules.map(module =>
        <li className={`list-group-item list-group-item-primary ${module._id === moduleId ? 'active':''}`} key={module._id}>
          <EditableItem to={`/courses/${layout}/edit/${courseId}/modules/${module._id}`}
                        deleteItem={deleteModule}
                        item={module}
                        updateItem={updateModule}/>
        </li>)}
    <li className="list-group-item list-group-item-primary">
      <i onClick={() => createModule(courseId)} className="fas fa-plus fa-2x"></i>
    </li>
  </ul>)
}

const stpm = (state) => {
      return {
        modules: state.moduleReducer.modules
      }
}

const dtpm = (dispatch) => {
  return {
    createModule: (courseId) => moduleService.createModule(courseId,
        {title: "New Module"}).then(newModule =>
                                  dispatch({type: "CREATE_MODULE", module:newModule})),
    deleteModule: (module) => moduleService.deleteModule(module._id).then(status =>
        dispatch({type: "DELETE_MODULE", module: module})),

    updateModule: (module) => moduleService.updateModule(module._id, module).then(status =>
    dispatch({type: "UPDATE_MODULE", module: module})),

    findModulesForCourse: (courseId) => {
      dispatch({type: "FIND_LESSONS_FOR_MODULE", lessons: []});
      dispatch({type: "FIND_TOPICS_FOR_LESSON", topics: []});
      moduleService.findModulesForCourse(courseId).then(modules =>
          dispatch({type: "FIND_MODULES_BY_COURSE", modules: modules}))
    }
  }
}

export default connect(stpm, dtpm)(ModuleList)
