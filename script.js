let submit =document.getElementById('submit');



submit.addEventListener('click', function(event){
    let name =document.getElementById('name');
    let surname =document.getElementById('surname');
    let age =document.getElementById('age');
    let box= document.getElementById('info');
    

    let fName = document.getElementById('form-name').value;
    let fSurname = document.getElementById('form-surname').value;
    let fAge = document.getElementById('form-age').value;

    box.style.display = "flex"

    name.innerText= `${fName}`
    name.style.color = "red"

    surname.innerText= `${fSurname}`
    surname.style.color = "red"

    age.innerText= `${fAge}`
    age.style.color = "red"

    document.getElementById('form-name').value="";
    document.getElementById('form-surname').value="";
    document.getElementById('form-age').value="";

    





});