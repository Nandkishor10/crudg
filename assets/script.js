var selectedRow = null;

// Function to add a new row to the table
function addRow() {
  var firstName = document.getElementById('firstName').value;
  var lastName = document.getElementById('lastName').value;
  var phoneNumber = document.getElementById('phoneNumber').value;
  var email = document.getElementById('email').value;

  if (selectedRow === null) {
    var table = document.getElementById('dataTable').getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.rows.length);

    var cell1 = newRow.insertCell(0);
    var cell2 = newRow.insertCell(1);
    var cell3 = newRow.insertCell(2);
    var cell4 = newRow.insertCell(3);
    var cell5 = newRow.insertCell(4);

    cell1.innerHTML = firstName;
    cell2.innerHTML = lastName;
    cell3.innerHTML = phoneNumber;
    cell4.innerHTML = email;
    cell5.innerHTML =
      '<button class="btn btn-primary btn-sm" onclick="editRow(this)">Edit</button> ' +
      '<button class="btn btn-danger btn-sm" onclick="deleteRow(this)">Delete</button>';
  } else {
    selectedRow.cells[0].innerHTML = firstName;
    selectedRow.cells[1].innerHTML = lastName;
    selectedRow.cells[2].innerHTML = phoneNumber;
    selectedRow.cells[3].innerHTML = email;
    selectedRow = null;
  }

  // Clear form inputs after adding/updating a row
  document.getElementById('myForm').reset();
  toggleButtons('add');
}

// Function to edit a row
function editRow(btn) {
  selectedRow = btn.parentNode.parentNode;
  document.getElementById('firstName').value = selectedRow.cells[0].innerHTML;
  document.getElementById('lastName').value = selectedRow.cells[1].innerHTML;
  document.getElementById('phoneNumber').value = selectedRow.cells[2].innerHTML;
  document.getElementById('email').value = selectedRow.cells[3].innerHTML;
  toggleButtons('edit');
}

// Function to delete a row
function deleteRow(btn) {
  var row = btn.parentNode.parentNode;
  row.parentNode.removeChild(row);
}

// Function to toggle buttons between Add and Update
function toggleButtons(mode) {
  var addBtn = document.getElementById('addBtn');
  var updateBtn = document.getElementById('updateBtn');
  var cancelBtn = document.getElementById('cancelBtn');

  if (mode === 'add') {
    addBtn.classList.remove('d-none');
    updateBtn.classList.add('d-none');
    cancelBtn.classList.add('d-none');
  } else if (mode === 'edit') {
    addBtn.classList.add('d-none');
    updateBtn.classList.remove('d-none');
    cancelBtn.classList.remove('d-none');
  }
}

// Event listener to submit the form
document.getElementById('myForm').addEventListener('submit', function (event) {
  event.preventDefault(); // Prevent form submission
  addRow(); // Call the addRow function
});

// Event listener for Cancel button
document.getElementById('cancelBtn').addEventListener('click', function () {
  selectedRow = null;
  document.getElementById('myForm').reset();
  toggleButtons('add');
});



