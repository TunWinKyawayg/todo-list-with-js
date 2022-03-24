function addList(){
    let inputValue=document.getElementById("input");
    if (inputValue.value){
        let liElement=document.createElement("li");
        liElement.setAttribute("class","list-group-item");
        liElement.append(inputValue.value);

        let spanElement=document.createElement("span");
        spanElement.setAttribute("class","icon");
        spanElement.append("x");
        liElement.append(spanElement);

        let ulElement=document.getElementById("ul-list");
        ulElement.append(liElement);

        spanElement.setAttribute("onclick","remove(this)");

        inputValue.value="";
    }
};

function remove(d){
        d.parentNode.remove();
    };