const formFname = document.querySelector('#fname');
const formEmailBox = document.querySelector('#emailBox');
const formSubjectBox = document.querySelector('#subjectBox');
const formMessageBox = document.querySelector('#messageBox');

const submitBtn = document.querySelector('.submitBtn');


submitBtn.addEventListener('submit', formSubmit);



function formSubmit(e){
    e.preventDefault();
    if (formFname.value == "" || formFname.value == NaN){
        // alert("Please Enter Your Full Name");
        console.log('yeep');
    }if (formEmailBox.value == "" || formEmailBox.value == NaN){
        console.log('yeep 1 ');
        // alert("Please Enter Your Email");

    }if (formSubjectBox.value == "" || formSubjectBox.value == NaN){
        console.log('yeep 2');
        // alert("Please Enter A Subject");

    }if (formMessageBox.value == "" || formMessageBox.value == NaN){
        console.log('yeep 3');
        // alert("Please Enter Your Message");

    }

    
    
    
    console.log("hello there");
}