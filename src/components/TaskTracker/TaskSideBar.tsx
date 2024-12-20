import React from 'react';
import TaskAdder from './TaskAdder';
import TaskFilter from './TaskFilter';
import { SideBarMain } from './styles/trackerStyles';
import { Separator } from '../shared/styles/commonStyles';


const TaskSideBar = () => (
  <SideBarMain>
    <TaskAdder />
    <Separator />
    <TaskFilter />
  </SideBarMain>
);

export default TaskSideBar;
