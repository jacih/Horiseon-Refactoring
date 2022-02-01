function keydownAction(event) {

  console.log(event);

  let keyPress = event.key;
  let keyCode = event.code;

  document.querySelector("#key").innerHTML = keyPress;
  document.querySelector("#code").innerHTML = keyCode;
  document.querySelector("#status").innerHTML = "KEYDOWN Event";
}

function keyupAction() {
  document.querySelector("#key").innerHTML = "";//reassigning value to default;
  document.querySelector("#code").innerHTML = "";//reassigning value to default;
  document.querySelector("#status").innerHTML = "KEYUP Event";
}

document.addEventListener("keyup", keyupAction);
document.addEventListener("keydown", keydownAction);

