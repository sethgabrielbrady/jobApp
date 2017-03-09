

(function appModule() {

        window.jobApp = {};


        //looks for the value of the value of full-name
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

            // let exp = document.querySelector('#exp').value + ' years';
            console.log(eventObj.target.parentNode.childNodes); //has a nodelist [5]
            //in your eventObj, go up the parent, then back downt the child element at index 3(figure)
            //I dont quite understand why figure is at index 3 other than the console telling me
            // console.log(NodeList.item(figure));
            eventObj.target.parentNode.childNodes[3].innerText = eventObj.target.value + ' years';
            // document.querySelector('figure').innerText = eventObj.target.value + ' years';
            console.log(exp);
        });


        let checkCount = 0;
        // console.log(document.querySelectorAll('[name="languages"]'));
        Array.from(document.querySelectorAll('[name="languages"]'))//create an array from input types with name=languages
            .forEach(function checkCheckboxes(each) {//and iterate throught it with a for each
                each.addEventListener('change', function checked(eventObj) {//at each iteration, ad an even listener of 'change' that
                  //will check if the eventObj 'checkbox' is 'checked'
                    if (eventObj.target.checked) {//if it is 'checked'
                        checkCount++;
                    } else {
                        checkCount--; //otherwise
                    }
                    console.log(eventObj.target.parentNode.parentNode.childNodes); //has a nodelist [9]
                    //so target the parent of the parent of the eventobj,
                    eventObj.target.parentNode.parentNode.childNodes[7].innerText = checkCount + 'languages';
                    //checkbox(is the target)-we go up to label(parentNODE1), the up aside(parentNode 2)
                    //we then move back down -aside[0], label[1],input[2], label[3], input[4], label[5],
                    //input[6], figure[7],
                });

            });












})();
