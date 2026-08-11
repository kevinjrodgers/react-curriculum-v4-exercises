import { useEffect, useState } from 'react';
import StudentButton from './components/StudentButton.jsx';
import StudentTask from './components/StudenTask.jsx';
import taskFilterer from './utils/taskFilterer.js';

export default function StudentWork() {
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState('all');
  const [loading, setLoading] = useState(true);

  //  #1: Data fetching + state + UI logic all mixed together // Custom hook
  useEffect(() => {
    const timeout = setTimeout(() => {
      setTasks([
        { id: 1, title: 'Learn React', completed: true },
        { id: 2, title: 'Refactor code', completed: false },
        { id: 3, title: 'Organize files', completed: false },
      ]);
      setLoading(false);
    }, 500);

    return () => clearTimeout(timeout);
  }, []);

  // #2: Filtering logic inside component //Helper function
  let visibleTasks = tasks;
  if (loading) {
    return <p>Loading tasks...</p>;
  } else {
    visibleTasks = taskFilterer(visibleTasks, filter);
  }

  return (
    <div>
      {/* #3: Hardcoded UI, not reusable */}
      <h2>Welcome, Student</h2>

      {/* #4: Repeated button JSX */}
      <div>
        <StudentButton filterType="all" setFilter={setFilter}></StudentButton>
        <StudentButton
          filterType="completed"
          setFilter={setFilter}
        ></StudentButton>
        <StudentButton
          filterType="pending"
          setFilter={setFilter}
        ></StudentButton>
        <p>Current filter: {filter}</p>
      </div>

      {/* #5: Inline list rendering */}
      <ul>
        {visibleTasks.map((task) => (
          <StudentTask key={task.id} task={task}></StudentTask>
        ))}
      </ul>
    </div>
  );
}
