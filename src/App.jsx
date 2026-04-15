import { TaskBoard } from "./features/tasks/components/TaskBoard"
import { HTML_TAGS } from "./shared/constants/html-tags.constants"

function App() {

  const { MAIN, H1} = HTML_TAGS

    return (
      <MAIN>
        <H1>Task Management App</H1>
        <TaskBoard />
      </MAIN>
  )
}

export default App