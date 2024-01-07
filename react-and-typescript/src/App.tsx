import { useState } from 'react';
import NewTodo from './components/NewTodo';
import Todos from './components/Todos';
import Todo from './models/todo';

function App() {
  const [todos, setTodos] = useState<Todo[]>([]);

  function addTodoHanlder(todoText: string) {
    const newTodo = new Todo(todoText);

    setTodos((prev) => {
      return prev.concat(newTodo);
    });
  }

  function onRemoveTodoHandler(todoId: string) {
    setTodos((prev) =>
      prev.filter((todo) => todo.id !== todoId)
    );
  }

  return (
    <div>
      <NewTodo onAddTodo={addTodoHanlder} />
      <Todos
        onRemoveTodo={onRemoveTodoHandler}
        items={todos}
      />
    </div>
  );
}

export default App;
