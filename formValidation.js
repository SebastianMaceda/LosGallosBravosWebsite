const formFname = document.querySelector('#fname');
const formEmailBox = document.querySelector('#emailBox');
const formSubjectBox = document.querySelector('#subjectBox');
const formMessageBox = document.querySelector('#messageBox');

const submitBtn = document.querySelector('.submitBtn');


submitBtn.addEventListener('click', formSubmit);



function formSubmit(e){
    e.preventDefault();
    if (formFname.value == "" || formFname.value == NaN){
        console.log('yeep');
    }if (formEmailBox.value == "" || formEmailBox.value == NaN){
        console.log('yeep 1 ');
    }if (formSubjectBox.value == "" || formSubjectBox.value == NaN){
        console.log('yeep 2');
    }if (formMessageBox.value == "" || formMessageBox.value == NaN){
        console.log('yeep 3');
    }

    
    
    
    console.log("hello there");
}