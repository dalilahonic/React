import React, {
  useEffect,
  useState,
  useCallback,
} from 'react';

import Tasks from './components/Tasks/Tasks';
import NewTask from './components/NewTask/NewTask';
import useFetch from './hooks/useFetch';

function App() {
  const [tasks, setTasks] = useState([]);

  const transformTasks = useCallback((tasksObj) => {
    const loadedTasks = [];

    for (const taskKey in tasksObj) {
      loadedTasks.push({
        id: taskKey,
        text: tasksObj[taskKey].text,
      });
    }

    setTasks(loadedTasks);
  }, []);

  const { isLoading, error, sendRequest } =
    useFetch(transformTasks);

  useEffect(() => {
    sendRequest({
      url: 'https://react-10d3f-default-rtdb.firebaseio.com/tasks.json',
    });
  }, [sendRequest]);

  const taskAddHandler = (task) => {
    setTasks((prevTasks) => prevTasks.concat(task));
  };

  return (
    <React.Fragment>
      <NewTask onAddTask={taskAddHandler} />
      <Tasks
        items={tasks}
        loading={isLoading}
        error={error}
        onFetch={sendRequest}
      />
    </React.Fragment>
  );
}

export default App;

// import React from 'react';
// import BackwardCounter from './components/BackwardCounter';
// import ForwardCounter from './components/ForwardCounter';

// function App() {
//   return (
//     <React.Fragment>
//       <ForwardCounter />
//       <BackwardCounter />
//     </React.Fragment>
//   );
// }

// export default App;
