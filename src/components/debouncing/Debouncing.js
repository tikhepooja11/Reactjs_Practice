Debouncing -> It is used to ensure that the time consuming tasks do not fire so often.
              It is used to control the frequency of a function call expecially in the case where frequent event triggering is not not desirable.
              This happens with user input events like typing in a search bar, scrolling, or resizing a window.

  for example ->
  If any user enters some text in search bar 
  This will invoke callback function to execute on each and every key-stroke which is not recommended
  Instead of executing callback fun on every time event triggered, we will set a timer. 
  So that if the event occurs before that time, then that timer will be cancel and new timer will be setted
  And this way, callback function will be called only after timer expires.



    function debounce(callback, delay) {
  let timerId;

  return function (...args) {
    clearTimeout(timerId);

    timerId = setTimeout(() => {
      callback(...args);
    }, delay);
  };
}

// Example usage:
const debounceFunction = debounce((searchTerm) => {
  // Perform search or other time-consuming task
  console.log(`Searching for: ${searchTerm}`);
}, 300);

// Assuming this is called on each keystroke in a search input
debounceFunction("react");
debounceFunction("reactjs");
debounceFunction("react hooks");
// The actual search function will be invoked only after 300 milliseconds without any new keystrokes.

