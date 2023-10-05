const mainForm = document.forms.main;
SetProjectName();

function GetProjectNameByUrlSourse()
{
    const urlParams = new URLSearchParams(window.location.search);
    const source = urlParams.get('source');
    return source;
}

function SetProjectName()
{
    const nameInput = mainForm.elements.project_title;
    let name = GetProjectNameByUrlSourse();
    nameInput.value = name;
    console.log(nameInput)
}

var dt = new DataTransfer();

const inputFile = document.getElementById('file')
const imgElement = document.createElement('img');

var image;
var imageLabel;

inputFile.addEventListener('change', (event) => {
  const file = event.target.files[0];

  const reader = new FileReader();
  reader.readAsDataURL(file);
  reader.onload = (e) => {
    imgElement.src = e.target.result;
	imageLabel = document.getElementById('placeForImage')
	image = imageLabel.appendChild(imgElement);
  };
});



$(document).ready(function(){
	
	var dt = new DataTransfer();

	$('.input-file input[type=file]').on('change', function(){
		let $files_list = $(this).closest('.input-file').next();
		$files_list.empty();

		for(var i = 0; i < this.files.length; i++){
			let new_file_input = '<div class="input-file-list-item">' +
				'<span class="input-file-list-name">' + this.files.item(i).name + '</span>' +
				'<a href="#" onclick="removeFilesItem(this); return false;" class="input-file-list-remove">x</a>' +
				'</div>';
			$files_list.append(new_file_input);
			dt.items.add(this.files.item(i));
		};
		this.files = dt.files;
	});

});
 
function removeFilesItem(target){
	let name = $(target).prev().text();
	let input = $(target).closest('.input-file-row').find('input[type=file]');	
	$(target).closest('.input-file-list-item').remove();	
	for(let i = 0; i < dt.items.length; i++){
		if(name === dt.items[i].getAsFile().name){
			dt.items.remove(i);
		}
	}
	input[0].files = dt.files;  
	imageLabel.removeChild(image)
}

var saveButton = document.querySelector('#saveButton');

saveButton.addEventListener('click', save);

function save() {
	localStorage.setItem('savedHTML', document.body.outerHTML);
}

// window.addEventListener('load', function() {
// 	var savedHTML = localStorage.getItem('savedHTML');
// 	document.body.outerHTML = savedHTML;
// 	});