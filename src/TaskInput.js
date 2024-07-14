import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from './taskSlice';

const TaskInput = () => {
  const [task, setTask] = useState('');    // State to store the current input value
  const dispatch = useDispatch();         // Hook to dispatch actions to the Redux store

  // Function to handle adding a new task
  const handleAddTask = () => {
    if (task.trim()) {
      dispatch(addTask(task));     // Dispatch the addTask action with the input value
      setTask('');      //// Clear the input field
    }
  };

  return (
    <div>
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        onKeyPress={(e) => e.key === 'Enter' ? handleAddTask() : null}
        placeholder="Enter a task"
      />
      <button onClick={handleAddTask}>Add Task</button>
    </div>
  );
};

export default TaskInput;

