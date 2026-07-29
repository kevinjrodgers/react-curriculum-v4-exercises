// TOPIC: StrictMode Effects and Cleanup
// TASK: Notice how the count increments incorrectly based on the `setInterval` logic. Fix the useEffect so that the counter increments correctly.

import { useEffect, useState } from 'react';

export default function BugStrictMode() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const secondsTimer = setInterval(() => {
      setCount((c) => c + 1);
    }, 1000);
    return () => clearInterval(secondsTimer);
  }, []);

  return (
    <div>
      <h2>StrictMode Timer Bug</h2>
      <p>Count: {count}</p>
    </div>
  );
}

// Write your explanation of how StrictMode helps us catch this bug
/*
  StrictMode mounts -> unmounts -> mounts again when in developer mode. Due to StrictMode, we can properly see that it increments by 2, so
  there was a bug due to the counter not being cleared each time. The setInterval() method will mount and then unmounts, and on the final
  mount it will increment by 1. Initially, the setInterval() count was not cleared. So when the setInterval() method was mounted, it incremented
   the count by 1. Then it was unmounted. On the re-mount, because the interval wasn't cleared, it ran again, and now it increments by 2. By 
   assigning the method to a variable, we can now target it in order to clear it so it only runs once instead of twice during StrictMode. 
*/
