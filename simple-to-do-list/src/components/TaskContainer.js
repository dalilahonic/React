export default function TaskContainer(props) {
  return (
    <div className='tasksContainer'>
      <ul>
        <li>
          <label>
            <input type='checkbox' /> {props.task}
          </label>
          <button onClick={props.onRemoveTask}>
            Remove
          </button>
        </li>
      </ul>
    </div>
  );
}
