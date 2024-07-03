
// This function executes when the HTML document is fully loaded and parsed

document.addEventListener('DOMContentLoaded', function () {
    
    const form = document.getElementById("contactForm");
    const tableBody = document.querySelector("table tbody");
    var newRowHTML;
    var data = localStorage.getItem('userDetails') ?? "[]";
    var arr = JSON.parse(data);
    var formArry = arr;
    
    for (let i = 0; i < formArry.length; i++) {
        let obj = formArry[i];
    
        
        newRowHTML = `
        <tr>
            <td>${obj.firstName}</td>
            <td>${obj.lastName}</td>
            <td>${obj.mobileNumber}</td>
            <td>${obj.email}</td>
            <td><button>Delete</button></td>
        </tr>
    `;
        tableBody.innerHTML += newRowHTML;  
         
    }

    // Load existing data from localStorage if available

    form.addEventListener('submit', function (event) {
        event.preventDefault();
        let firstName = document.getElementById("firstName").value;
        let lastName = document.getElementById("lastName").value;
        let mobileNumber = document.getElementById("mobileNumber").value;
        let email = document.getElementById("email").value;

        // Create formData object
        var formData = {
            firstName: firstName,
            lastName: lastName,
            mobileNumber: mobileNumber,
            email: email
        };


        var data = localStorage.getItem('userDetails') ?? "[]";
        var arr = JSON.parse(data);
        var formArry = arr;
        console.log(formArry);
        formArry.push(formData)
        localStorage.setItem('userDetails', JSON.stringify(formArry));

        

        newRowHTML = `
                    <tr>
                        <td>${firstName}</td>
                        <td>${lastName}</td>
                        <td>${mobileNumber}</td>
                        <td>${email}</td>
                        <td><button>Delete</button></td>
                    </tr>
                `;

        tableBody.innerHTML += newRowHTML;

       
        
       
        form.reset();


    });


});



// class FormHandler {
//     constructor(formId) {
//         this.form = document.getElementById(formId);
//     }

//     getFormData() {
//         return {
//             firstName: this.form.querySelector("#firstName").value,
//             lastName: this.form.querySelector("#lastName").value,
//             mobileNumber: this.form.querySelector("#mobileNumber").value,
//             email: this.form.querySelector("#email").value
//         };
//     }

//     resetForm() {
//         this.form.reset();
//     }
// }

// document.addEventListener('DOMContentLoaded', () => {
//     const tableBody = document.querySelector("table tbody");
//     const formHandler = new FormHandler("contactForm");

//     const loadTableData = () => {
//         try {
//             // Clear existing rows
//             tableBody.innerHTML = "";

//             // Retrieve data from localStorage
//             const data = localStorage.getItem('userDetails') ?? "[]";
//             const formArry = JSON.parse(data);

//             // Iterate over formArry and populate table
//             formArry.forEach((obj, index) => {
//                 const newRowHTML = `
//                     <tr data-index="${index}">
//                         <td>${obj.firstName}</td>
//                         <td>${obj.lastName}</td>
//                         <td>${obj.mobileNumber}</td>
//                         <td>${obj.email}</td>
//                         <td><button class="delete-btn">Delete</button></td>
//                     </tr>
//                 `;
//                 tableBody.innerHTML += newRowHTML;
//             });
//         } catch (error) {
//             console.error('Error loading table data:', error);
//         }
//     };

//     loadTableData();

//     formHandler.form.addEventListener('submit', (event) => {
//         event.preventDefault();

//         const formData = formHandler.getFormData();

//         try {
//             let data = localStorage.getItem('userDetails') ?? "[]";
//             let formArry = JSON.parse(data);

//             formArry.push(formData);

//             localStorage.setItem('userDetails', JSON.stringify(formArry));

//             const newRowHTML = `
//                 <tr>
//                     <td>${formData.firstName}</td>
//                     <td>${formData.lastName}</td>
//                     <td>${formData.mobileNumber}</td>
//                     <td>${formData.email}</td>
//                     <td><button class="delete-btn">Delete</button></td>
//                 </tr>
//             `;
//             tableBody.innerHTML += newRowHTML;

//             formHandler.resetForm();
//         } catch (error) {
//             console.error('Error saving form data:', error);
//         }
//     });

//     // Event delegation for delete buttons
//     tableBody.addEventListener('click', (event) => {
//         if (event.target.classList.contains('delete-btn')) {
//             const row = event.target.closest('tr');
//             const index = row.getAttribute('data-index');

//             try {
//                 let data = localStorage.getItem('userDetails') ?? "[]";
//                 let formArry = JSON.parse(data);

//                 // Remove item from array
//                 formArry.splice(index, 1);

//                 // Update localStorage
//                 localStorage.setItem('userDetails', JSON.stringify(formArry));

//                 // Remove row from table
//                 row.remove();
//             } catch (error) {
//                 console.error('Error deleting row:', error);
//             }
//         }
//     });
// });
