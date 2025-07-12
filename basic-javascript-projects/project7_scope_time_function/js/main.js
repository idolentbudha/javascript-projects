function scopeFunction() {
  var globalVariable = 10;
  function addNumOne() {
    var localVar = 20;
    return localVar + globalVariable;
  }
  // function addNumTwo() {
  //   return globalVariable + localVar;
  // }
  console.log(addNumOne());
  // console.log(addNumTwo());

  document.getElementById("resultMain").innerHTML = addNumOne();
}

function generateError() {
  var gVar = 10;
  function addNumberSample() {
    var localVar = 20;
    return localVar + gVar;
  }
  function addNumberTwoSample() {
    return gVar + localVar;
  }
  console.log(addNumberSample());
  console.log(addNumberTwoSample());

  document.getElementById("resultMain").innerHTML = addNumberSample();
}
