import React from "react"
import { PureInboxScreen } from "./InBoxScreen"
import { Provider } from 'react-redux';
import * as TaskListStories from './TaskList.stories';
import { action } from '@storybook/addon-actions'

const store = {
    getState: () =>
    {
        return {
      tasks: TaskListStories.Default.args.tasks,
    };
    },
    subscribe: () => 0,
    dispatch: action('dispatch')
}


export default ( {
    title: "Screens/TaskList",
    component: PureInboxScreen,
    decorators: [ story => <Provider store={store}>{story() }</Provider>]
} )

const Template = ( args ) => <PureInboxScreen { ...args } />


export const Default = Template.bind( {} )


export const Error = Template.bind({});
Error.args = {
  error: 'Something',
};

