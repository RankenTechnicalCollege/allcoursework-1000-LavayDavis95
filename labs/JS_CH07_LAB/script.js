function updateClock() {
  const now = new Date();
  
  let hours = now.getHours();
  const minutes = now.getMinutes();
  const seconds = now.getSeconds();
  
  const ampm = hours >= 12 ? 'PM' : 'AM';

  hours = hours % 12;
  hours = hours ? hours : 12;
  const formattedMinutes = minutes < 10 ? '0' + minutes : minutes;
  const formattedSeconds = seconds < 10 ? '0' + seconds : seconds;

  const clockDiv = document.getElementById('clock');
  clockDiv.textContent = `${hours}:${formattedMinutes}:${formattedSeconds} ${ampm}`;
}
  setInterval(updateClock, 1000);
  updateClock();


