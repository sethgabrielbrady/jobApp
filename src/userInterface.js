

(function appModule(){

window.jobApp ={};


//looks for the value of the value of full-name
  document.querySelector('#full-name').addEventListener('blur', function checkLength(eventObj){
      // console.log("off the box!!!"); eventObj.target.value
      if (document.querySelector('#full-name').value.length === 0){
        // console.log("You aint got not text!!!");
          document.querySelector('#full-name').parentNode.parentNode.classList.add('has-error');

        }else {
          document.querySelector('#full-name').parentNode.parentNode.classList.remove('has-error');
        }
    });

//id exp
document.querySelector('#exp').addEventListener('change', function sliderValue(eventObj){
      console.log('Im clicking inside the experience range');
      let exp = document.querySelector('#exp').value + ' years';
      // document.querySelector('#exp').parentNode.childNodes[1].innertext = exp;
      document.querySelector('figure').innerText = exp;
      console.log(exp);
});
















})();
