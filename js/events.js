//define functions here

$(document).ready(function(){

  getIt();
  pressIt();
  frameIt();
  submitIt();

});

function getIt() {
  $('p').on('click',()=>{
    alert('Hey!')
  })
}

function pressIt(){
  $('input#typing').on('keydown',function(key){
    if(key.which == 71){
      alert('G was pressed!')
    }
  })
}

function frameIt(){
  $('img').on('load', function(){
    $('img').addClass('tasty')
  });
}

function submitIt(){
  $('form').on('submit',()=>{
    console.log('Your form is going to be submitted now!')
    alert('Your form is going to be submitted now.')
  })
}
