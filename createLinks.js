/******************************************************
 *              setButtons()
 * 
 * description: The setButtons function takes in an 
 * array of objects from the CSV and iterates through
 * them to create links inside of buttons on the 
 * practice.html webpage. If a link is created the 
 * button receives a blue outline.
 * 
 * return type: Promise
 ****************************************************/
function setButtons(objects) {
    return new Promise((resolve, reject) => {
        // Iterate through the objects
        objects.forEach((object) => {
            try {
                // If the current object's source property is an empty string, go to the next object
                if (object.source === '') {
                    return;
                } else {
                    // The current object's source is not empty
                    // Grab the correct button using the object's quizId property
                    var button = document.querySelector(`#${object.quizId}`);
                    // Select the button's a tag and set its href to the correct link using the object's source property
                    button.querySelector('a').setAttribute('href', `https://pathway.lds.org/LangEval/Test?source=${object.source}&provider=EC`);
                    // Check if the current button already has a blue outline
                    if (!button.getAttribute('class').includes('btn-outline-info')) {
                        // Button does not have a blue outline, add one
                        button.classList.add('btn-outline-info');
                        button.disabled = false;
                    }
                }
            } catch (err) {
                // Something didn't work, reject the err so it will display in the console
                reject(err);
            }
        });
    });
}

// The driver function for creating links and setting buttons
function main() {
    // Use d3.csv to read in the CSV file and transform it into objects
    // the d3.csv function return the objects wrapped inside of a promise
    d3.csv('ec3Links.csv')
        .then(setButtons)
        .catch(console.log);
}
main();