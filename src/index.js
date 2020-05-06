import StateMachine from "javascript-state-machine";

const btn = document.getElementById("btn");

const fsm = StateMachine({
  init: "normal",

  transitions: [
    { name: "focus", from: "normal", to: "focused" },
    { name: "blur", from: "focused", to: "normal" }
  ],

  methods: {
    // Enters
    onEnterFocused: () => {
      console.log("Focus entered");
      btn.classList.add("focused");
    },
    onLeaveFocused: () => {
      console.log("Focus left");
      btn.classList.remove("focused");
    }
  }
});

btn.addEventListener("focus", event => {
  fsm.focus();
});

btn.addEventListener("blur", event => {
  fsm.blur();
});
