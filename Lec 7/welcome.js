let checkName=(event)=>
{
    event.preventDefault();
    console.log(event);
    let namebox = document.getElementById("name");
    let s1=namebox.value;
    localStorage.setItem("naam",s1);
    setTimeout(
        ()=>
        {
            window.location.href = "./quiz.html"
        },2000);
}