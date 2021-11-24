const button = document.getElementById('button');

button.addEventListener('click', calculateMax);

function calculateMax() {

    // DEFLINE UI ELEMENTS
    const weight = document.getElementById('weight').value;
    const reps = document.getElementById('reps').value;
    const results = document.getElementById('results');
    const errorContainer = document.getElementById('error-container');

    // ERROR SECTION
    if(reps.length === 0 && weight.length === 0) {
        showError('ENTER CALCULATED VALUES!');
    } else {
    // REPITIONS EQUATION
    var repitions = parseFloat((reps/30) + 1);

    // APPENDED CONTENT
    var weightList = document.createElement('p');
    weightList.innerText = (repitions * weight).toFixed(1) + ' LBPS';
    results.classList.add('result');
    weightList.classList.add('text-hover')
    results.appendChild(weightList);
    // DELETE ICON
    var trashIcon = document.createElement('i');
    trashIcon.classList.add('trash-icon');
    trashIcon.innerHTML = '<i class="fa fa-trash"></i>';
    results.appendChild(trashIcon);
    }

    weightList.addEventListener('click', function(){
        // weightList.style.textDecoration = "line-through";
        weightList.innerText = ((weight * repitions) / 2.205).toFixed(1) + ' KG';
    })

    weightList.addEventListener('dblclick', function(){
        results.removeChild(weightList);
        results.classList.remove('result')
    })

    trashIcon.addEventListener('click', function() {
        results.removeChild(weightList);
        results.removeChild(trashIcon);
        results.classList.remove('result');
    })
};

// Show Error
function showError(error){
  // Create a div
  const errorDiv = document.createElement('div');

  // Get elements
  const container = document.querySelector('#container');
  const heading = document.querySelector('.heading');

  errorDiv.className = 'alert alert-danger';
    errorDiv.appendChild(document.createTextNode(error));
  container.insertBefore(errorDiv, heading);
  setTimeout(clearError, 3000);
}

// Clear error
function clearError(){
  document.querySelector('.alert').remove();
}