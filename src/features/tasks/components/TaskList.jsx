import { HTML_TAGS } from "../../../shared/constants/html-tags.constants"
import { TASK_UI_TEXT } from "../constants/task-ui.constants"
import { TaskItem } from "./TaskItem"

export function TaskList({ tasks, onToggleTask, onDeleteTask }) {

  const SectionTag = HTML_TAGS.SECTION
  const TittleTag = HTML_TAGS.H2
  const ParagraphTag = HTML_TAGS.P
  const ListTag = HTML_TAGS.UL

  return (
    <SectionTag>
      <TittleTag>{TASK_UI_TEXT.LIST_TITLE}</TittleTag>

      {tasks.length === 0 ? (
        <ParagraphTag>{TASK_UI_TEXT.EMPTY_MESSAGE}</ParagraphTag>
      ) : (
        <ListTag>
          {tasks.map((task) => (
            <TaskItem
              key={task.id}
              task={task}
              onToggleTask={onToggleTask}
              onDeleteTask={onDeleteTask}
            />
          ))}
        </ListTag>
      )}
    </SectionTag>
  )
}