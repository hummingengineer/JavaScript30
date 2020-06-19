function timer(seconds) {
  const now = Date.now(); // now is in milliseconds
  const then = now + seconds * 1000;
  console.log({now, then});

  // Every single second, we need to display the amount of time left
  countdown = setInterval(() => {
    const secondsLeft = Math.round((then - Date.now()) / 1000);
  }, 1000);
}
