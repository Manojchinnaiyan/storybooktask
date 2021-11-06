import React from "react"
import TaskList from "./TaskList"
import * as TaskStories from './Task.stories'

export default {
    title: "TaskList/Tasks",
    component: TaskList
    
}

const Template = ( args ) => <TaskList { ...args } />

export const Default = Template.bind( {} )
Default.args = {
    tasks: [
        { ...TaskStories.DefaultTask.args.task, id: "1", title: "Task 1" },
        { ...TaskStories.DefaultTask.args.task, id: "2", title: "Task 2" },
        { ...TaskStories.DefaultTask.args.task, id: "3", title: "Task 3" },
        { ...TaskStories.DefaultTask.args.task, id: "4", title: "Task 4" },
        { ...TaskStories.DefaultTask.args.task, id: "5", title: "Task 5" },
        
   ]
}

export const Pinned = Template.bind( {} )
Pinned.args = {
    tasks: [
        ...Default.args.tasks.slice( 0, 4 ),
        { id: "6", title: "Task 6", state: "TASK_PINNED" },
        { id:"7", title: "Task 7" , state:"TASK_PINNED"},
        
    ]
}

export const Loading = Template.bind( {} )
Loading.args = {
    tasks: [],
    loading: true,
}

export const Empty = Template.bind( {} )
Empty.args = {
    ...Loading.args,
    loading: false,
}