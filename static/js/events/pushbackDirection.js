import { state, updateDirection } from '../state/state.js';

// pushback direction
export const selectPushbackDirection = (direction) => {
  const requestType = "pushback";
  if (state.steps[requestType].direction === direction) return;

  const pushbackBtn = document.getElementById("pushback-btn");
  const cancelPushbackBtn = document.getElementById("cancel-pushback-btn");

  const leftButton = document.getElementById("pushback-left");
  const rightButton = document.getElementById("pushback-right");

  if (direction === "left") {
    leftButton.classList.add("active");
    rightButton.classList.remove("active");
  } else {
    rightButton.classList.add("active");
    leftButton.classList.remove("active");
  }

  updateDirection(direction)
  pushbackBtn.disabled = false;
  cancelPushbackBtn.disabled = false;
}