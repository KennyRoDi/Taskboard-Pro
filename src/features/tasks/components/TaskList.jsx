import { TASK_UI_TEXT } from "../constants/task-ui.constants"

export function TaskList({ tasks }) {
  return (
    <section>
      <h3>{TASK_UI_TEXT.LIST_TITLE}</h3>

      {tasks.length === 0 ? (
        <p>{TASK_UI_TEXT.EMPTY_MESSAGE}</p>
      ) : (
        <ul>
          {tasks.map((task) => (
            <li key={task.id}>{task.title}</li>
          ))}
        </ul>
      )}
    </section>
  )
}