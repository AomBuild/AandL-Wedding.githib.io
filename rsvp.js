
//RSVP SURVEY

document.addEventListener("DOMContentLoaded", () => {

    function InputTagCreator(ParentContainer) {

        const tags = [];
        //this is the placeholder array to fill in the values submitted from the form
        

        const tagInput = ParentContainer.querySelector(".tagInput");
        const tagContents = ParentContainer.querySelector(".tagContents");
        const hiddenTagContents = ParentContainer.querySelector(".hiddenTagContents");
        const tagButton = ParentContainer.querySelector(".ADD");

        const tagBoxText = ParentContainer.querySelector(".tagBoxText");
        

        


        function addTag() {

            const value = tagInput.value.trim();

                if (value === "") return;

                if (tags.includes(value)) {
                    tagInput.value = "";
                    return;
                }
            
            
            tags.push(value);
            //this pushes the acceptable value into the 'placeholder array'

            updateHiddenInput();
            //Adds the input hidden iteration, not the html div iteration

            renderTags();
            //calls the function below to visualise that tags

            tagInput.value = "";
            //Resets the value back to the placeholder

        }

        function renderTags() {

            // This resets the tags without clearning the text -> DO NOT REMOVE
            tagContents.querySelectorAll(".tag").forEach(tag => tag.remove());

            if(tags.length === 0) {

                // There is no style added to this container -> "" = default to what the original style was.
                tagBoxText.style.display = "";
                return;
            }
            
            tagBoxText.style.display = "none";

            tags.forEach((tag, index) => {

                const chip = document.createElement("div");

                chip.className = "tag";

                chip.innerHTML = 
                `
                    ${tag} <button type="button" data-index="${index}">✕</button>
                `;

                tagContents.appendChild(chip);

            });
        
        }
        

        tagButton.addEventListener("click", addTag); 

        tagInput.addEventListener("keydown", (event) => {

            if (event.key === "Enter") {

                event.preventDefault();

                addTag();

            }
        });

        tagContents.addEventListener("click", (event) => {

            console.log(event.target);

            if (event.target.tagName !== "BUTTON") return;

            const index = event.target.dataset.index;

            tags.splice(index, 1);

            updateHiddenInput();

            renderTags();

        });


        function updateHiddenInput() {
            hiddenTagContents.value = tags.join(", ");
        }

    }


    InputTagCreator(document.querySelector("#dietaryRequirements"));
    InputTagCreator(document.querySelector("#allergies"));

    
    
    //This tackles the Google Script 

    const scriptURL = 'https://script.google.com/macros/s/AKfycbx8OKGxNLrdzySJbPdYj5RbjMrCCjNocHqY70voMWGg-G8rxJLOklAFUJlTwDk_axb2Ow/exec'

    const form = document.forms['RSVP']
    const submitButton = form.querySelector('input[type="submit"]');

    form.addEventListener('submit', e => {
    
    e.preventDefault()

    submitButton.disabled = true;
    submitButton.value = "Submitting...";
    
    fetch(scriptURL, { 
        method: 'POST',
        body: new FormData(form)})
        .then(response => alert("Thank you! Form is submitted" ))
        .then(() => { window.location.reload(); })
        .catch(error => console.error('Error!', error.message))
    });

});