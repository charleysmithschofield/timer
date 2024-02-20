
/*
  System Sound (Beep / Ding)

  This will make the timer beep at 3, 5, 9, 10, and 15 seconds.
   node TimeRanges.js 10 3 5 15 9

  A quick Google search of "node system beep" shows that in order
  to make our machine perform a system sound, we can simply output
  the following special character to stdout:

  process.stdout.write('\x07');
*/

/*
  Pseudocode:

  1. Define function, setTimers, for each specified time.
  2. Use a for..of loop to iterate through the times.
    2a. Within the for..of loop setTimeout.
    2b. Within the setTimeout, console.log('Beep!') every time one of the times is reached.
    2c. Convert the time from seconds to miliseconds.
  
  3. Use command line arugments to exclude the first two elements (node/script file paths).

  4. Convert the command line args to numbers.

  5. Call the function to set timers.
*/

// Define function, setTimers, for each specified time.
const setTimers = (times) => {

  
  // use a for..of loop to iterate through the times.
  for (const time of times) {
    // setTimeout
    setTimeout(() => {
      // Within setTimeout, console.log ('Beep!') everytime one of the times is reached.
      console.log('Beep!')
      // converts the time from seconds to miliseconds.
    }, time * 1000);
  }
};

// Get command line args excluding the first two elements (node/script file path)
const args = process.argv.slice(2);

// Conver the command line args to numbers, then filter our non-numbers & negative numbers
const times = args.map(Number).filter(time => !isNaN(time) && time > 0);

// Call the setTimers function with the times.
setTimers(times);