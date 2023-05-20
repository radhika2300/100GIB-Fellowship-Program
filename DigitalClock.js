function displayDigitalClock() {
    setInterval(() => {
      const currentDate = new Date();
      let hours = currentDate.getHours();
      let minutes = currentDate.getMinutes();
      let seconds = currentDate.getSeconds();  
      // Pad single-digit hours, minutes, and seconds with leading zero
      hours = hours < 10 ? "0" + hours : hours;
      minutes = minutes < 10 ? "0" + minutes : minutes;
      seconds = seconds < 10 ? "0" + seconds : seconds;  
      const currentTime = hours + ":" + minutes + ":" + seconds;
      console.log(currentTime);
    }, 1000);
  }
  
  // Example usage
  displayDigitalClock();
  