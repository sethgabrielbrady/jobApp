

(function appModule(){

window.jobApp ={};


//looks for the value of the value of full-name
  document.querySelector('[name=full-name]').addEventListener('blur', function checkLength(eventObj){
      console.log("off the box!!!");
      if (document.querySelector('[name=full-name]').value.length === 0){
        console.log("You aint got not text!!!");
          document.querySelector('[name=full-name]').parentNode.classList.add('has-error');
        }else {
          document.querySelector('[name=full-name]').parentNode.classList.remove('has-error')
        }
        //need to add an error(has-error) class to the ancestor aside tag

  });





















})();
