const todayElement = document.getElementById("today");
const timeElement = document.getElementById("time");

function getTime() {
  const textNode = new Date();
  const year = textNode.getFullYear();
  const month = textNode.getMonth() + 1;
  const date = textNode.getDate();
  const hour = textNode.getHours();
  const minute = textNode.getMinutes();
  const second = textNode.getSeconds();

  todayElement.textContent = `
  ${year}년 
  ${month > 9 ? month : "0" + month}월 
  ${date > 9 ? date : "0" + date}일`;
  timeElement.textContent = `${hour}시 ${minute}분 ${second}초`;
}

getTime();
setInterval(getTime, 1000);
