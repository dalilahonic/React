import { useState } from 'react';
import './App.css';
import NewTask from './components/NewTask';
import TaskContainer from './components/TaskContainer';
import Heading from './components/Heading';

function App() {
  const [tasksData, setTasksData] = useState([]);

  function handleData(data) {
    setTasksData((prevTasks) => [...prevTasks, data]);
  }

  function removeTask(indexToRemove) {
    setTasksData((prev) => {
      return prev.filter(
        (_, index) => index !== indexToRemove
      );
    });
  }

  return (
    <>
      <NewTask onAddTask={handleData} />
      <Heading></Heading>

      <div className='mainTasksContainer'>
        {tasksData.map((task, index) => (
          <TaskContainer
            task={task}
            key={index}
            onRemoveTask={() => removeTask(index)}
          />
        ))}
      </div>
    </>
  );
}

export default App;
