function getButtons() {
    return Array.from(document.querySelectorAll('button[class*="btn"]'));
}

function setClass(buttons) {
    // Check if the button needs the 
    buttons.forEach(button => {
        if (!button.getAttribute('class').includes('btn-outline-info')) {
            button.classList.add('btn-outline-info');
            button.disabled = false;
        }
    });
    console.log(buttons);
}

function setLinks(objects) {
    return new Promise((resolve, reject) => {
        var buttons = getButtons();
        resolve(buttons.filter(button => {
            return true;
        }));
    });
}

function main() {
    d3.csv('ec3Links.csv')
        .then(setLinks)
        .then(setClass);
}

main();