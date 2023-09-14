export default function TaskContainer() {
  return (
    <div className='tasksContainer'>
      <h1> To Do List</h1>
      <ul>
        <li>
          <label>
            <input type='checkbox' /> Item 1
          </label>
          <button> Remove</button>
        </li>
      </ul>
    </div>
  );
}
