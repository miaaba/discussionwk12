document.querySelector("#subscribe").addEventListener("click", function(){
    console.log("this worked")

    if(this.checked){
        document.getElementById("emailDiv").style.display="block"
    }
    else{
        document.getElementById("emailDiv").style.display="none"
    }
})

document.addEventListener("click", function(){
    let currentTime = new Date();
    alert("Current time " + currentTime);
})

