//src/exercises/lesson-03/BugEffectLoop.jsx

/* 
  BUG #1 — Effect Issue 

  This component uses useState and useEffect to update a value.
  The effect is running on every render, which causes the
  component to behave incorrectly.
  */

import { useEffect, useState } from 'react';

export default function BugEffectLoop() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    setCount(count + 1);
  }, []);

  return <p>Bug 1 Count: {count}</p>;
}

// Explanation:
/* 
  When the component is mounted, the count's state changes, which triggers a re-render, which increments the count again and triggers
  another re-render. This goes on until an error occurs. By adding in an empty dependency array at the end of the hook, this means that no
  state changes will trigger a re-render, so the hook will only run once which is when the component is mounted.
*/
