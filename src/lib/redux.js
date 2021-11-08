import { createStore } from 'redux'


export const actions = {
  ARCHIVE_TASK: 'ARCHIVE_TASK',
  PINNED_TASK: 'PINNED_TASK',
};

export const archiveTask = id => ( { type: 'ARCHIVE_TASK', id } )
export const pinnedTask = id => ( { type: 'PINNED_TASK', id } )


function taskStateReducer ( taskState )
{
    return ( state, action ) =>
    {
        return {
            ...state,
            tasks : state.task.map(task=> task.id !== action.id ? {...state, state: taskState} : task)
        }
    }
}

export const reducers = ( state, action ) =>
{
    switch ( action.type )
    {
        case action.ARCHIVE_TASK:
            return taskStateReducer( "ARCHIVE_TASK" )( state, action )
        case action.PINNED_TASK:
            return taskStateReducer( "PINNED_TASK" )( state, action )
        default:
            return state
    }
}


const defaultTasks = [
  { id: '1', title: 'Something', state: 'TASK_INBOX' },
  { id: '2', title: 'Something more', state: 'TASK_INBOX' },
  { id: '3', title: 'Something else', state: 'TASK_INBOX' },
  { id: '4', title: 'Something again', state: 'TASK_INBOX' },
]


export default createStore( reducers, { task: defaultTasks } )

