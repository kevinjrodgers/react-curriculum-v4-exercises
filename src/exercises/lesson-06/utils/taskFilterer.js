export default function taskFilterer(tasks, filter) {
  let visibleTasks = tasks;
  if (filter === 'completed') {
    return (visibleTasks = tasks.filter((task) => task.completed));
  }
  if (filter === 'pending') {
    return (visibleTasks = tasks.filter((task) => !task.completed));
  }
  if (filter === 'all') {
    return visibleTasks;
  }
  /*if (loading) {
    return <p>Loading tasks...</p>;
  }
  */
}
