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
    if (a === b && a === c && b === c && a !== null)  {;
      return true;
    } else {
      return false;
    };
  };

  function isoscTest(a, b, c) {;
    if (a === b || b === c || c === a && a !== null) {;
      return true;
    } else {
      return false;
    }
  };
        
  function scalTest(a, b, c) {;
    if (a !== b || b !== c || c !== a && a !== null) {;
      return true;
    } else {
      return false;
    }
  };
 
//invalid criteria:
//the sum of the lengths of any two sides of a triangle is less than or equal to 
//the length of the third side.
// if this evaluates to TRUE it is an INVALID triangle. If false, it is a valid 
// triangle of another type & can proceed
  function invalTest(a, b, c) {;
    if (a + b <= c || b + c <= a || a === null, b === null, c === null) {;
      return true;
    } else {
      return false;
    }
  }; 

  // runs our typeTest functions and evaluates a decision tree  
  function triangleTester() {;
    const a = parseInt(document.querySelector("input#a").value);
    const b = parseInt(document.querySelector("input#b").value);
    const c = parseInt(document.querySelector("input#c").value);
    if (a && b && c) {
      if (invalTest() === true) {
        document.getElementById("invalid").removeAttribute("class");
      } else if (scalTest() === true) {
        document.getElementById("scalene").removeAttribute("class");
      } else if (equilatTest() === true) {
        document.getElementById("equilateral").removeAttribute("class");
      } else if (isoscTest() === true) {
        document.getElementById("isosceles").removeAttribute("class");
      } else {
        document.getElementById("invalid").removeAttribute("class")
      };
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