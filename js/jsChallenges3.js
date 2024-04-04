// Both boxes must have radio buttons selected to move on
// If one or both radio buttons isn’t selected create an alert

document.querySelector("#ch3form").addEventListener("submit", function(){
    console.log("this worked")
    var standing = document.querySelector('input[name="standing"]:checked')
    var gradDate = document.querySelector('input[name="gradDate"]:checked')
    if(standing == null || gradDate == null){
        alert("You must select a choice from each set of radio buttons");
        event.preventDefault();
        return false
    }
    else{
        return true
    }
})

