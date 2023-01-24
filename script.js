fetch("https://cat-fact.herokuapp.com/facts")
.then((response) => response.JSON())
.then((data) =>{
    data.forEach(element => {
        const cats={
            ...element,
            user: element.user,
            text: element.text,
            type: element.type
        }
        catfacts(cats)
    });
}).catch((error) => console.log ("error"));

function catfacts({user,text,type}){
    document.body.innerHTML +=`
    <div class="container">
    <div class="card">
    <div class="card-header">
    <h1>catfacts</h1>
    </div>
    <div class="info">
    <p><span>User:<span/>${user}</p>
    <p><span>Text:<span/>${text}</p>
    <p><span>Type:<span/>${type}</p>
    </div>
    </div>
    </div>`
}