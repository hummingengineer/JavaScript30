function timer(seconds) {
  const now = Date.now(); // now is in milliseconds
  const then = now + seconds * 1000;
  console.log({now, then});

  // Every single second, we need to display the amount of time left
}