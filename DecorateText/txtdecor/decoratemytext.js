var sizeSelector = true;
var intervalId;

  function changeSize(){
     var x = window.getComputedStyle(document.getElementById('text')).fontSize;
     reSize= parseInt(x)+ 2 +'px';
     document.getElementById('text').style.fontSize =reSize;
}

  function Oncheck(){
   if(document.getElementById("checked").checked =true){
      // alert("what it up!!");
      document.getElementById('text').style.fontWeight='bold';
      document.getElementById('text').style.color = 'green';
      document.getElementById('text').style.textDecoration = 'underline';
      document.body.style.backgroundImage = "url('http://www.cs.washington.edu/education/courses/190m/CurrentQtr/labs/6/hundred-dollar-bill.jpg')";
   }
   else{
     document.getElementById('text').style.fontSize = 'normal';
     document.getElementById('text').style.color = 'black';
     document.getElementById('text').style.textDecoration = 'none';
     document.body.style.backgroundImage = 'none';  
   }
  }
    function setTimeDisplay(){
     if (sizeSelector) {
        intervalId = setInterval(changeSize,500);
        sizeSelector = false;
    }
    else {
        clearInterval(intervalId);
        sizeSelector = true;
    }

  }
