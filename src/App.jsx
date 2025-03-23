
import React, { useState } from 'react';

function App() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');

  const handleInputChange = (event) => {
    setNewTask(event.target.value);
  };

  const handleAddTask = () => {
    if (newTask.trim() !== '') {
      setTasks([...tasks, { text: newTask, completed: false }]);
      setNewTask('');
    }
  };

  const handleToggleComplete = (index) => {
    const updatedTasks = tasks.map((task, i) =>
      i === index ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
  };

  const handleDeleteTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-indigo-100 to-purple-100 py-6 flex flex-col justify-center sm:py-12">
      <div className="relative py-3 sm:max-w-xl sm:mx-auto">
        <div className="relative px-4 py-10 bg-white shadow-md sm:rounded-lg sm:p-20">
          <div className="max-w-md mx-auto">
            <div>
              <h1 className="text-2xl font-semibold text-center mb-6 text-gray-800">To-Do List</h1>
            </div>
            <div className="divide-y divide-gray-200">
              <div className="py-4">
                <input
                  type="text"
                  value={newTask}
                  onChange={handleInputChange}
                  placeholder="Add a new task"
                  className="w-full p-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-200"
                />
                <button
                  onClick={handleAddTask}
                  className="mt-2 w-full bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md transition-colors"
                >
                  Add Task
                </button>
              </div>
              <div>
                {tasks.map((task, index) => (
                  <div key={index} className="py-2 flex items-center justify-between">
                    <div className="flex items-center">
                      <input
                        type="checkbox"
                        checked={task.completed}
                        onChange={() => handleToggleComplete(index)}
                        className="mr-2 form-checkbox h-5 w-5 text-blue-600"
                      />
                      <span className={`text-gray-700 ${task.completed ? 'line-through' : ''}`}>
                        {task.text}
                      </span>
                    </div>
                    <button
                      onClick={() => handleDeleteTask(index)}
                      className="text-red-500 hover:text-red-700 transition-colors"
                    >
                      Delete
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;