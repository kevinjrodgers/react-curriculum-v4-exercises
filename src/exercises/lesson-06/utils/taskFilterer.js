export default function taskFilterer(filter, tasks, loading) {
  let visibleTasks = tasks;
  if (filter === 'completed') {
    visibleTasks = tasks.filter((task) => task.completed);
  } else if (filter === 'pending') {
    visibleTasks = tasks.filter((task) => !task.completed);
  } else if (loading) {
    return <p>Loading tasks...</p>;
  }
}
