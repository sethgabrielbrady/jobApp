

(function() {
    'use strict';
    window.jobApp = window.jobApp || {};

    let subCount = 1;
    console.log('apply module'); // says hey-Im in the main.js apply module
    $('.form-horizontal').submit(function(event) { //targets the form then the submit event
        event.preventDefault(); //prevents the submit button from inputing to request bin
        if (subCount === 1) {
            subCount = subCount + 1;
            $(' .alert').css('display', 'block');
            $('#results').append('Your application has been successfully submitted.');
            console.log('prevention');
        } else {
            alert('You have already submitted your application.');
            return;
        }

    });

})();
