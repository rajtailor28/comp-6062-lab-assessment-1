const studentName = "Rajkumar Tailor" ;
const studentNumber = "1162651" ;

const TemplateLiterals = `${studentName} - ${studentNumber}`;

const headerContent = document.querySelector('h1');

headerContent.innerHTML = `${studentName} - ${studentNumber}`;
headerContent.classList.add('heading1');

console.log(TemplateLiterals);