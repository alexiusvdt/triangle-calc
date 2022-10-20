// if equilateral === true, unhide equilateral
//if isosceles === true, unhide isosceles
//if  no sides ===, unhide scalene
//else invalid

window.addEventListener("load", function() {
  //building reset button
  function resetClass() {;
    document.getElementById("equilateral").setAttribute("class", "hidden");
    document.getElementById("isosceles").setAttribute("class", "hidden");
    document.getElementById("scalene").setAttribute("class", "hidden");
    document.getElementById("invalid").setAttribute("class", "hidden");  
    };
  // bool evals for each type of triangle
  function equilatTest(a, b, c) {;
    const result = Boolean
    if (a === b === c && a !== null)  {;
      result = true;
    } else {
      result = false;
    }
      return result
    } 
  function isoscTest(a, b, c) {;
    const result = Boolean
    if (a === b || b === c || c === a && a !== null) {;
      result = true;
    } else {
      result = false;
    }
      return result
    }     
  function scalTest(a, b, c) {;
    const result = Boolean
    if (a !== b || b !== c || c !== a && a !== null) {;
      result = true;
    } else {
      result = false;
    }
      return result
    } 
//invalid criteria:
//the sum of the lengths of any two sides of a triangle is less than or equal to 
//the length of the third side.
// if this evaluates to TRUE it is an INVALID triangle. If false, it is a valid 
// triangle of another type & can proceed
  function invalTest(a, b, c) {;
    const result = Boolean
    if (a + b <= c || b + c <= a || a === null, b === null, c === null) {;
      result = true;
    } else {
      result = false;
    }
      return result
    } 

  // runs our typeTest functions and evaluates a decision tree  
  function triangleTester() {;
    const a = parseInt(document.querySelector("input#a").value);
    const b = parseInt(document.querySelector("input#b").value);
    const c = parseInt(document.querySelector("input#c").value);
    if (a && b && c) {
      if (invalTest() === false){
        document.getElementById("invalid").removeAttribute("class");
      } else if (equilatTest() === true) {
        document.getElementById("equilateral").removeAttribute("class");
      } else if (isoscTest() === true) {
        document.getElementById("isosceles").removeAttribute("class");
      } else (scalTest() === true) {
        document.getElementById("scalene").removeAttribute("class");
      }
    };
  };

    // variable declaration
  let form = document.querySelector("form");
  //creating the submit listener and specifying its function
  form.addEventListener("submit", function(event) {
    event.preventDefault();
    resetClass();
    triangleTester();   
  });
});