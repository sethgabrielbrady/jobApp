(function appModule() {

    window.jobApp = {};


    document.querySelector('#full-name').addEventListener('blur', function checkLength(eventObj) {
        // console.log("off the box!!!"); eventObj.target.value
        if (document.querySelector('#full-name').value.length === 0) {
            // console.log("You aint got not text!!!");
            document.querySelector('#full-name').parentNode.parentNode.classList.add('has-error');

        } else {
            document.querySelector('#full-name').parentNode.parentNode.classList.remove('has-error');
        }
    });

    //id exp
    document.querySelector('#exp').addEventListener('change', function sliderValue(eventObj) {
        console.log('Im clicking inside the experience range');

        console.log(eventObj.target.parentNode.childNodes); //has a nodelist [5]

        // console.log(NodeList.item(figure));
        eventObj.target.parentNode.childNodes[3].innerText = eventObj.target.value + ' years';
        // document.querySelector('figure').innerText = eventObj.target.value + ' years';
        console.log(exp);
    });


    let checkCount = 0;
    // console.log(document.querySelectorAll('[name="languages"]'));
    Array.from(document.querySelectorAll('[name="languages"]'))
        .forEach(function checkCheckboxes(each) {
            each.addEventListener('change', function checked(eventObj) {
                if (eventObj.target.checked) {
                    checkCount++;
                } else {
                    checkCount--;
                }
                console.log(eventObj.target.parentNode.parentNode.childNodes); //has a nodelist [9]
                eventObj.target.parentNode.parentNode.childNodes[7].innerText = checkCount + 'languages';
                // document.querySelector('figure').innerText = checkCount + 'languages';
            });

        });

        console.log('app module');

})();
