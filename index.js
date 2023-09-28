// Your code here
const dodger = document.getElementById("dodger");

function moveDodgerLeft() {
    const leftNumbers = dodger.style.left.replace("px", "");
    const left = parseInt(leftNumbers, 10);

    if (left > 0) {
      dodger.style.left = `${left -1}px`;
    }
  }

  function moveDodgerRight() {
    const dodger = document.getElementById("dodger");
    const left = parseInt(dodger.style.left, 10) || 0;
    const newLeft = left + 1;
  
    if (newLeft < 360) { 
      dodger.style.left = `${newLeft}px`;
    }
  }
  

