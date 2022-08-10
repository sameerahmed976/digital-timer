const hour = document.querySelector(".hour");
const minute = document.querySelector(".minute");
const second = document.querySelector(".second");

const timer = setInterval(() => {
  const date = new Date();

  const hours = date.getHours();

  const minutes = date.getMinutes();

  const seconds = date.getSeconds();

  hour.innerHTML = `${hours}`;

  minute.innerHTML = `${minutes}`;

  second.innerHTML = `${seconds}`;
}, 1000);
