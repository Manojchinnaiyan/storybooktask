import React from 'react'
import Task from './Task'
import PropTypes from 'prop-types'
import { archiveTask, pinnedTask } from '../lib/redux'
import { connect } from "react-redux"


export function PureTaskList( { loading, tasks, onArchive, onPinned } )
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




PureTaskList.propTypes = {
    loading: PropTypes.bool,
    tasks: PropTypes.arrayOf( Task.propTypes.task ).isRequired,
    onArchive: PropTypes.func.isRequired,
    onPinned: PropTypes.func.isRequired
};

PureTaskList.defaultProps = {
    loading: false,
}


export default connect(
  ({ tasks }) => ({
    tasks: tasks.filter(t => t.state === 'TASK_INBOX' || t.state === 'TASK_PINNED'),
  }),
  dispatch => ({
    onArchive: id => dispatch(archiveTask(id)),
    onPinned: id => dispatch(pinnedTask(id)),
  })
)( PureTaskList );







 