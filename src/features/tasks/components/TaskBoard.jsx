import { useReducer, useState, useState } from "react"
import { taskReducer } from "../reducers/task.reducer"
import { TaskForm } from "./TaskForm"
import { TaskList } from "./TaskList"
import { TASK_UI_TEXT } from "../constants/task-ui.constants"
import { TASK_ACTION_TYPES } from "../reducers/task-action-types"
import {HTML_TAGS} from "../../../shared/constants/html-tags.constants"

export function TaskBoard() {
  const [taskText, setTaskText] = useState("")
  const [tasks, dispatch] = useReducer(taskReducer, []) 

  const SectionTag = HTML_TAGS.SECTION
  const  TittleTag = HTML_TAGS.H2

  const handleTaskTextChange = (event) => {
    setTaskText(event.target.value)
  }

  const handleAddTask = () => {
    if (taskText.trim() === "") {
      return
    }

    const newTask = {
      id: Date.now(),
      title: taskText,
      completed: false,
    }

    dispatch (
      { type: TASK_ACTION_TYPES.ADD_TASK, payload: newTask })
    setTaskText("")
  }

  const handleToggleTask = (taskId) => {
    dispatch(
      { type: TASK_ACTION_TYPES.TOGGLE_TASK, payload: taskId })
  }

  const handleDeleteTask = (taskId) => {
    dispatch(
      { type: TASK_ACTION_TYPES.DELETE_TASK, payload: taskId })
  }

  return (
    <SectionTag>
      <TittleTag>{TASK_UI_TEXT.BOARD_TITLE}</TittleTag>

      <TaskForm
        taskText={taskText}
        onTaskTextChange={handleTaskTextChange}
        onAddTask={handleAddTask}
      />

      <TaskList 
        tasks={tasks} 
        onToggleTask={handleToggleTask}
        onDeleteTask={handleDeleteTask}
      />
    </SectionTag>
  )
}