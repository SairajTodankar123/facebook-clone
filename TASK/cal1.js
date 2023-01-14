var state = [];

typeInput = (value) => {
  var res = document.getElementById("value");
  localStorage.setItem("number", value);
  let NewValue = localStorage.getItem("number");
  res.value = NewValue;
};

