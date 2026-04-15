import { TASK_UI_TEXT } from "../constants/task-ui.constants"
import { HTML_TAGS } from "../../../shared/constants/html-tags.constants"
import { useEffect, useId, useRef } from "react"

export function TaskForm({ taskText, onTaskTextChange, onAddTask }) {
  const SectionTag = HTML_TAGS.SECTION
  const TittleTag = HTML_TAGS.H3
  const InputTag = HTML_TAGS.INPUT
  const ButtonTag = HTML_TAGS.BUTTON
  const FormTitle = TASK_UI_TEXT.FORM_TITLE

  const inputRef = useRef(null)
  const inputId = useId()

  useEffect(() => {
    inputRef.current.focus()
  }, [])

  return (
    <SectionTag>
      <TittleTag>
        {TASK_UI_TEXT.FORM_TITLE}
      </TittleTag>

      <label 
        htmlFor={taskInputId}>{FormTitle}
      </label>

      <InputTag
        ref={inputRef}
        id={taskInputId}
        type="text"
        value={taskText}
        onChange={onTaskTextChange}
        placeholder={TASK_UI_TEXT.INPUT_PLACEHOLDER}
      />

      <ButtonTag 
        onClick={onAddTask}>{TASK_UI_TEXT.ADD_BUTTON}
      </ButtonTag>
    </SectionTag>
  )
}