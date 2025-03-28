// script.js
function generateQuestion() {
  fetch('/.netlify/functions/script')  // เรียกใช้งานฟังก์ชันจาก Netlify
    .then(response => response.json())  // แปลงข้อมูลเป็น JSON
    .then(data => {
      document.getElementById('question-box').innerHTML = `<p>${data.question}</p>`;
    })
    .catch(error => console.error('Error:', error));  // แสดงข้อผิดพลาดหากเกิดขึ้น
}
