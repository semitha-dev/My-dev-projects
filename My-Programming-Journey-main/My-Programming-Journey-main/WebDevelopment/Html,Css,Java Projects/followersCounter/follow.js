let x = 0;


function increaseCount(){
   x++;
   display =  document.getElementById("countDisplay").innerHTML = x;

}

function reset(){



    document.getElementById("countDisplay").innerHTML = 0;
}