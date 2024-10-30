let array = [

    {
        "name":"james",
        "age":32
    },
    {
        "name":"bob",
        "age":322
    },
    {
        "name":"alex",
        "age":1000
    }
]

function test(){
    let searchValue = document.getElementById("searchbar").value;
    let outputdiv = document.getElementById("output")

    array.forEach(object =>{

        if(object.name.toLocaleLowerCase() == searchValue){
           let p = document.createElement("p")
            p.innerHTML = `${object.name} is ${object.age}`;
            outputdiv.appendChild(p);
        }



    })
}

let click = document.getElementById("send")

click.onclick = test;

    
