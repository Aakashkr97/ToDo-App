import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteTask, editTask } from './taskSlice';

const TaskList = () => {
  const tasks = useSelector((state) => state.tasks);
  const dispatch = useDispatch();

  const handleDeleteTask = (taskId) => {
    dispatch(deleteTask(taskId));
  };

  const handleEditTask = (taskId) => {
    const newTask = prompt("Edit task:");
    if (newTask) {
      dispatch(editTask({ id: taskId, text: newTask }));
    }
  };

  return (
    <ul>
      {tasks.map((task) => (
        <li key={task.id}>
          {task.text}
          <button onClick={() => handleEditTask(task.id)}>Edit</button>
          <button onClick={() => handleDeleteTask(task.id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
};

export default TaskList;
