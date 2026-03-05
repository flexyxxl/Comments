async function loadComments(){
    const res = await fetch("/comments");
    const data = await res.json();
    
    const div = document.getElementById("comments");
    div.innerHTML="";
    
    data.forEach(c=>{
    div.innerHTML += `
    <div class="comment">
    <b>${c.name}</b>
    <p>${c.text}</p>
    </div>
    `;
    });
    }
    
    async function sendComment(){
    
    const name = document.getElementById("name").value;
    const text = document.getElementById("text").value;
    
    await fetch("/comments",{
    method:"POST",
    headers:{"Content-Type":"application/json"},
    body:JSON.stringify({name,text})
    });
    
    loadComments();
    }
    
    loadComments();