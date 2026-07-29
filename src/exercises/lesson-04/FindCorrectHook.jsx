// TOPIC: Choose the correct tool: useRef vs useState
// TASK: Make sure it updates the text *without* triggering a re-render
import { useRef } from 'react';

export default function FindCorrectHook() {
  let clickCount = useRef(0); // ← incorrect implementation
  let buttonRef = useRef();

  function handleClick() {
    clickCount.current = clickCount.current + 1;
    buttonRef.current.innerHTML = clickCount.current + ' Clicks';
  }

  return (
    <div>
      <h2>useRef vs useState Decision</h2>
      <button onClick={handleClick} ref={buttonRef}>
        0 Clicks
      </button>
    </div>
  );
}
