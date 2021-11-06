import React from 'react'
import Task from './Task'
import PropTypes, { arrayOf } from 'prop-types'

const TaskList = ( { loading, tasks, onArchive, onPinned } ) =>
{
    const events = { onArchive, onPinned }

    const Loading = (
        <div className="loading-item">
            <span className="glow-checkbox"></span>
            <span className="glow-text">
                <span>Loading</span><span>cool</span>
            </span>
        </div>
    )

    if ( loading )
    {
        return <div className="list-items">
            {Loading }
            {Loading }
            {Loading }
            {Loading }
            {Loading }
            {Loading }
        </div>
    }
   if (tasks.length === 0) {
    return (
      <div className="list-items">
        <div className="wrapper-message">
          <span className="icon-check" />
          <div className="title-message">No Tasks</div>
          <div className="subtitle-message">Lets Have a Drink</div>
        </div>
      </div>
    );
  }

    const taskInOrder = [
        ...tasks.filter( t => t.state === "TASK_PINNED" ),
        ...tasks.filter( t => t.state !== "TASK_PINNED")
    ]



    return (
        <div className="list-items">
            {taskInOrder.map( task =>
            (
                <Task key={ task.id } task={ task } {...events}/>
            ))}
        </div>
    )
}

export default TaskList


TaskList.propTypes = {
    loading: PropTypes.bool,
    tasks: PropTypes.arrayOf( Task.propTypes.task ).isRequired,
    onArchive: PropTypes.func,
    onPinned: PropTypes.func,
};
TaskList.defaultProps = {
    loading: false,
}





