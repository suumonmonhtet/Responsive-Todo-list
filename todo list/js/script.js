let data = JSON.parse(localStorage.getItem("data")) || [];
    for (let i =0; i < data.length; i++){
            createItem(data[i]);
    }
    //data.map( i => createItem(i));

    document.querySelector("#clear").onclick = function(){
        if (confirm("Are you sure ?")){
            let lis = document.querySelectorAll("#done li");
            //lis.remove();
            for(let i = 0; i< lis.length; i++){
                if (i > 0) lis[i].remove();
            }
        }
           
}

    document.querySelector("button").onclick = function() {
        let text = document.querySelector("#add").value;
        if(!text) return false; // need to edit
        createItem(text);
        //console.log(text);
        let data = JSON.parse(localStorage.getItem("data")) || [];
        data.push(text);
        localStorage.setItem("data", JSON.stringify(data));

}

    document.querySelector("#add").onkeydown = function(e){
        //alert(e.which);
        if (e.which == 13){
            document.querySelector("button").onclick();
        }
    }

    function createItem(text){

        let li = document.createElement("li");
        li.classList.add("list-group-item");
        li.textContent = text;

        let check = document.createElement("span");
        //check.setAttribute("href", "#");
        check.classList.add("fas", "fa-circle-check", "float-start", "text-info", "pt-1", "me-4");
        check.onclick = function(){
        document.querySelector("#done").appendChild(li);
        //li.classList.add("text-muted");
        li.classList.add("text-decoration-line-through");
        check.remove();
        }
        
        li.appendChild(check);

        let del = document.createElement("span");
        //del.setAttribute("href", "#");
        del.classList.add("fas", "fa-trash", "float-end", "text-danger");
        del.onclick = function(){
        let data = JSON.parse(localStorage.getItem("data")) || [];
        data = data.filter (i => i !== text);
        localStorage.setItem("data", JSON.stringify(data));
                
        li.remove();
        }
        li.appendChild(del);

        document.querySelector("#todo").appendChild(li);

        document.querySelector("#add").value = "";
        document.querySelector("#add").focus();
    }

// document.querySelector("button").addEventListener("click", fn);