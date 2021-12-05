// COURSE OF ACTION: 
// BEGIN BY DEFINING UI ELEMENTS WITHIN THE DOM 
// OBTAIN FORMULA FOR CONVERSION FROM REPITIONS AND WEIGHT PROVIDED
// CREATE A FUNCTION WHERE THE CONVERESION FROM THE GIVEN USER INPUT VALUES CALCULATED
// GET ICONS FROM BOOTSTRAP/W3S 
// CREATE CONTAINER WHERE RESULTS ARE APPENDED AND DISPLAYED TO THE USER
// CREATE A TRASH ICON WHERE THE USER CAN REMOVE THEIR RESULTS
// CREATE A NOTE AREA WHERE THE USER KNOWS HOW TO CONVERT FROM KG TO LBPS
// ALLOW THE USER TO SWITCH BETWEEN KG AND LBPS REPEATEDLY


// CALCULATE BUTTON
const button = document.getElementById('button');

button.addEventListener('click', calculateMax);

// BENCH MAX CALCULATOR
function calculateMax(e) {

  e.preventDefault();

    // DEFLINING UI/DOM ELEMENTS
    const weight = document.getElementById('weight').value;
    const reps = document.getElementById('reps').value;
    const results = document.getElementById('results');
    const errorContainer = document.getElementById('error-container');

    // ERROR DISPLAY
    if(reps.length === 0 && weight.length === 0) {
      showError('ENTER CALCULATED VALUES!');
    } else {
      // REPITIONS EQUATION
      var repitions = parseFloat((reps/30) + 1);

      // APPENDED CONTENT
      var weightList = document.createElement('p');
      weightList.innerText = (repitions * weight).toFixed(1) + ' LBPS';
      results.classList.add('result');
      weightList.classList.add('text-hover', 'lb')
      results.appendChild(weightList);
      
      // DELETE ICON
      var trashIcon = document.createElement('i');
      trashIcon.classList.add('trash-icon');
      trashIcon.innerHTML = '<i class="fa fa-trash"></i>';
      results.appendChild(trashIcon);
    }

    // SMOOTH SCROLL FOR CALCULATE BUTTON
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener("click", function(e) {
        document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior : "smooth"
        });      
      });
    });
    
    // CONVERT FROM KG TO LBPS BACK AND FORTH
    weightList.addEventListener('click', function(){
      if(weightList.classList.contains('lb')){
        weightList.innerText = ((weight * repitions) / 2.205).toFixed(1) + ' KG';
        weightList.classList.remove('lb');
      } else {
        weightList.innerText = (repitions * weight).toFixed(1) + ' LBPS';
        weightList.classList.add('lb');
      }
    })

    // TRASH ICON AND REMOVING THE CALCULATED WEIGHT FROM UI
    trashIcon.addEventListener('click', function() {
        results.removeChild(weightList);
        results.removeChild(trashIcon);
        results.classList.remove('result');
    })
  }; 

// FUNCTION SHOW ERROR TO USER
function showError(error){
  // CREATE DIV FOR ERROR
  const errorDiv = document.createElement('div');

  // GET ELEMENTS FOR ERROR CONTAINER
  const container = document.querySelector('#container');
  const heading = document.querySelector('.heading');

  // ERROR MESSAGE FORMATTING
  errorDiv.className = 'alert alert-danger';
  errorDiv.appendChild(document.createTextNode(error));

  container.insertBefore(errorDiv, heading);

  // CLEAR ERROR MESSAGE AUTOMATICALLY IN THREE SECONDS
  setTimeout(clearError, 5000);
}

// CLEAR ERROR FUNCTION FOR CALL BACK IN THE MAX CALCULATORS
function clearError(){
  document.querySelector('.alert').remove();
}