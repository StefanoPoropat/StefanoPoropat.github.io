document.addEventListener("DOMContentLoaded", function() {
   const genderSelect = document.getElementById("spol");
   const radios = document.getElementsByName("ocjena");
   const checkboxes = document.getElementsByName("sastranica");

   // Event listener for gender dropdown
   genderSelect.addEventListener("change", function() {
       if (genderSelect.value !== "ODABERI") {
           genderSelect.setCustomValidity(""); // Clear custom validity if a valid option is selected
       } else {
           genderSelect.setCustomValidity("Molimo vas, odaberite svoj spol."); // Set error if default is selected
       }
   });

   // Event listeners for radio buttons
   Array.from(radios).forEach(radio => {
       radio.addEventListener("change", function() {
           Array.from(radios).forEach(radio => radio.setCustomValidity("")); // Clear custom validity on selection
       });
   });

   // Event listeners for checkboxes
   Array.from(checkboxes).forEach(checkbox => {
       checkbox.addEventListener("change", function() {
           if (Array.from(checkboxes).some(checkbox => checkbox.checked)) {
               Array.from(checkboxes).forEach(checkbox => checkbox.setCustomValidity("")); // Clear custom validity if any checkbox is checked
           }
       });
   });
});

function validateForm() {
   const form = document.getElementById("contactForm");
   const genderSelect = document.getElementById("spol");
   const radios = document.getElementsByName("ocjena");
   const checkboxes = document.getElementsByName("sastranica");

   // Clear previous custom validity messages
   Array.from(radios).forEach(radio => radio.setCustomValidity(""));
   Array.from(checkboxes).forEach(checkbox => checkbox.setCustomValidity(""));

   let isRadioSelected = Array.from(radios).some(radio => radio.checked);
   let isCheckboxChecked = Array.from(checkboxes).some(checkbox => checkbox.checked);

   // Validate gender
   if (genderSelect.value === "ODABERI") {
       genderSelect.setCustomValidity("Molimo vas, odaberite svoj spol.");
   }

   // Validate radio buttons
   if (!isRadioSelected) {
       Array.from(radios).forEach(radio => radio.setCustomValidity("Molimo vas, odaberite ocjenu."));
   }

   // Validate checkboxes
   if (!isCheckboxChecked) {
       Array.from(checkboxes).forEach(checkbox => checkbox.setCustomValidity("Molimo vas, odaberite barem jednu opciju."));
   }

   // Check if any validity messages are set
   if (!form.checkValidity()) {
       return false; // Prevent actual form submission
   }

   document.getElementById("confirmationMessage").style.display = "block";
   return false; // Prevent actual form submission
}
