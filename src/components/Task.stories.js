import React from "react"

import Task from './Task'

export default {
    title: 'Task/List-Items',
    component: Task
}

const Template = ( args ) => <Task { ...args } />

export const DefaultTask = Template.bind( {} )
DefaultTask.args = {
    task: {
        id: "1",
        title: "Test Task",
        state: "TASK_INBOX",
        upDatedAt: new Date(2020,0,1,9,0),
    }
}

export const PinnedTask = Template.bind( {} )
PinnedTask.args = {
    task: {
        ...DefaultTask.args.task,
        state:"TASK_PINNED"
    }
}

export const ArchievedTask = Template.bind( {} )
ArchievedTask.args = {
    task: {
        ...DefaultTask.args.task,
        state:"TASK_ARCHIVED"
    }
}
