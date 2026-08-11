import { useEffect, useState } from 'react';
import StudentButton from './components/StudentButton.jsx';
import StudentTask from './components/StudenTask.jsx';
import taskFilterer from './utils/taskFilterer.js';
import { useStudentArray } from './hooks/useStudentArray.jsx';

export default function StudentWork() {
  const { tasks, loading } = useStudentArray(); //  #1: Data fetching + state + UI logic all mixed together // Custom hook
  const [filter, setFilter] = useState('all');

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
