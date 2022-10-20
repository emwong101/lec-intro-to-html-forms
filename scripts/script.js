const formEl = document.getElementById("signUpForm");

formEl.addEventListener("submit", (event) => {
    event.preventDefault();
    
    /* Validation check */
    if (event.target.funWaiver.checked === false) {
        // invalid form
        
        // show invalid form message
        const errorEl = document.createElement("p");
        errorEl.classList.add("sign-up-form__error-message");
        errorEl.innerText = "You have to agree to have fun to see the puppy";

        formEl.appendChild(errorEl);

        // return at this point -> ends this function
        return;
    }

    /**
     * Handle valid form:
     *      1. Hide the form
     *      2. Show a success message in its place!
     **/
    formEl.classList.add("sign-up-form--hidden");

    /* Success message markup:
        <section class="submit-success-message">
            <h2>Thanks for submitting the form, {name}</h2>
            
            <p>We will contact you via {contactMethod} at {phone / email}</p>
            <p>You signed up for {visitPurpose}</p>
        </section>
    */

    const submitSuccessEl = document.querySelector(".submit-success-message")

    const headingEl = document.createElement("h2");
    headingEl.innerText = "Thanks for submitting the form, " + event.target.name.value;

    const contactEl = document.createElement("p");

    contactEl.innerText = "We will contact you via ";
    if (event.target.contactMethod.value === 'phone') {
        contactEl.innerText += "phone at " + event.target.phone.value;
    } else {
        contactEl.innerText += "email at " + event.target.email.value;
    }

    const purposeEl = document.createElement("p");
    purposeEl.innerText = "You signed up for " + event.target.visitPurpose.value;

    submitSuccessEl.appendChild(headingEl);
    submitSuccessEl.appendChild(contactEl);
    submitSuccessEl.appendChild(purposeEl);
});


/* These two lines are virtually identical:

    if ( !email.value.includes("@") )
    if ( email.value.includes("@") == false)


    This if statement would be entered if the value of email 
    does not have an @ character. Very simple validation!
*/