import Task from "./Task";
import AddTask from "./AddTask";
import { useState } from "react";
import { useTasksQuery } from "./services/taskApi";

function TaskManager() {
  const [openAddModal, setOpenAddModal] = useState(false);
  const { data, error, isLoading, isSuccess } = useTasksQuery();

  return (
    <div className="taskManager">
      <header>Task Manager</header>
      <div className="taskManager__container">
        <button onClick={() => setOpenAddModal(true)}>Add task +</button>

        <div className="taskManager__tasks">
          <div className="isErrorIsLoading">
            {error && <p>An error occured</p>}
            {isLoading && <p>Loading...</p>}
          </div>
          {isSuccess && (
            <>
              {data.map((task) => (
                <Task
                  id={task.id}
                  key={task.id}
                  completed={task.completed}
                  title={task.title}
                  description={task.description}
                />
              ))}
            </>
          )}
          {/* <Task
            id={1}
            title="COMPLETE RTK QUERY TUT"
            description={`Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown 
            printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, 
            but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing 
            Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`}
            completed={false}
          />
          <Task
            id={2}
            title="GO TO THE GYM"
            description={`Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown 
            printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, 
            but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing 
            Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`}
            completed={false}
          /> */}
        </div>
      </div>

      {openAddModal && (
        <AddTask onClose={() => setOpenAddModal(false)} open={openAddModal} />
      )}
    </div>
  );
}

export default TaskManager;
