import useFetch from '../../hooks/useFetch';
import Section from '../UI/Section';
import TaskForm from './TaskForm';

const NewTask = (props) => {
  const {
    isLoading,
    error,
    sendRequest: sendTaskRequest,
  } = useFetch();

  const enterTaskHandler = async (taskText) => {
    sendTaskRequest(
      {
        url: 'https://react-10d3f-default-rtdb.firebaseio.com/tasks.json',
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          body: { text: taskText },
        },
      },
      () => {
        const generatedId = taskText.name;
        const createdTask = {
          id: generatedId,
          text: taskText,
        };

        props.onAddTask(createdTask);
      }
    );
  };

  return (
    <Section>
      <TaskForm
        onEnterTask={enterTaskHandler}
        loading={isLoading}
      />
      {error && <p>{error}</p>}
    </Section>
  );
};

export default NewTask;
