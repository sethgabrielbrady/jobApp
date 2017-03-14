

(function (){
    'use strict';
      window.jobApp = window.jobApp || {};


  console.log('apply module');// says hey-Im in the main.js apply module
  let submitCount = 0;
    $('.form-horizontal').submit(function(event){//targets the form then the submit event
        event.preventDefault(); //prevents the submit button from inputing to request bin
        submitCount = submitCount ++;
        $(' .alert').css('display', 'block');
          $('#results').append('Your application has been successfully submitted.');
              console.log('prevention');
              return;
            });


})();
