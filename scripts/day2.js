
const save=document.getElementById("save");
save.addEventListener("click",()=>{

alert("hello man")



})
save.addEventListener("dblclick",()=>{
    console.log("Hello double click")
})

const form=document.getElementById("form");
// const submit=document.getElementById("submit");
form.addEventListener("submit",(event)=>{
    event.preventDefault();
    
    let text=form.username.value;
    let password=form.pass.value
    alert(text + ''+"and"+''+''+password)
    form.reset();

    if(text==""){
        alert("please fill the form")
    
    }

})
 
