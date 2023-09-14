import './App.css';
import NewTask from './components/NewTask';
import TaskContainer from './components/TaskContainer';

function App() {
  function handleData(data) {
    console.log(data);
  }

  return (
    <>
      <NewTask onAddTask={handleData} />
      <TaskContainer />
    </>
  );
}

export default App;
