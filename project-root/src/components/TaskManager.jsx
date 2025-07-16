import { useState } from 'react';
import useLocalStorage from '../hooks/useLocalStorage';

export default function TaskManager() {
  const [tasks, setTasks] = useLocalStorage('tasks', []);
  const [filter, setFilter] = useState('All');
  const [task, setTask] = useState('');

  const filteredTasks = tasks.filter(t =>
    filter === 'All' ? true : filter === 'Active' ? !t.completed : t.completed
  );

  const addTask = () => {
    setTasks([...tasks, { id: Date.now(), text: task, completed: false }]);
    setTask('');
  };

  const toggleComplete = id => {
    setTasks(tasks.map(t => (t.id === id ? { ...t, completed: !t.completed } : t)));
  };

  const deleteTask = id => setTasks(tasks.filter(t => t.id !== id));

  return (
    <div>
      <input
        className="border p-2 mr-2"
        value={task}
        onChange={e => setTask(e.target.value)}
        placeholder="New task"
      />
      <button onClick={addTask} className="bg-green-500 text-white px-4 py-2 rounded">Add</button>

      <div className="mt-4 space-x-2">
        {['All', 'Active', 'Completed'].map(f => (
          <button key={f} onClick={() => setFilter(f)} className="underline">
            {f}
          </button>
        ))}
      </div>

      <ul className="mt-4">
        {filteredTasks.map(t => (
          <li key={t.id} className="flex justify-between items-center">
            <span className={t.completed ? 'line-through' : ''}>{t.text}</span>
            <div>
              <button onClick={() => toggleComplete(t.id)} className="mr-2 text-sm">✔️</button>
              <button onClick={() => deleteTask(t.id)} className="text-sm">🗑️</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
