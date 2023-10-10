function AddNewProject() {
    var rows = document.getElementsByTagName('tr');    
    const lastRow = rows[rows.length-1];

    var htmlCode = '<tr><td><input type="checkbox"></td><td><a href="editing_information.html?source=Новый проект">Новый проект</a></td></tr>';
    lastRow.insertAdjacentHTML('afterend', htmlCode);
}

function DeleteProjects() {
    let rows = document.getElementsByTagName('tr');
    rows = Array.from(rows);
    rows.forEach(element => {
        const checkbox = element.querySelector('input[type="checkbox"]');
        if (checkbox?.checked) {
            element.parentNode?.removeChild(element)
        }
    });
  }

  function CheckSelect()
  {
    let rows = document.getElementsByTagName('tr');
    rows = Array.from(rows);
    rows.forEach(element => {
        const checkbox = element.querySelector('input[type="checkbox"]');
        if (checkbox?.checked) {
            var myModal = new bootstrap.Modal(document.getElementById('closeMe'), {})
            myModal.show()
        }
    });
  }