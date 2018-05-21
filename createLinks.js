function setButtons(objects) {
    return new Promise((resolve, reject) => {
        objects.forEach((object) => {
            try {
                var button = document.querySelector(`button[id=${object.quizId}]`);
                button.querySelector('a').setAttribute('href', `https://pathway.lds.org/LangEval/Test?source=${object.source}&provider=EC`);
                if (!button.getAttribute('class').includes('btn-outline-info')) {
                    button.classList.add('btn-outline-info');
                    button.disabled = false;
                    resolve();
                }
            } catch (err) {
                reject(err);
            }
        });
    });
}

function main() {
    d3.csv('ec3Links.csv')
        .then(setButtons)
        .catch(console.log);
}
main();