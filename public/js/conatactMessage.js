const contact_form = document.getElementById("contact_form");
const inputValFNAll = document.querySelectorAll(".inputValFN");

let formData = {};


contact_form.addEventListener("submit", async(e)=>{
    e.preventDefault();

inputValFNAll.forEach((datas,i)=>{
    datas.addEventListener("keyup",  (e)=>{
        const {name, value} = e.target
        formData = {
            ...formData,
            [name]: value
        }

        console.log(formData);
        
    })

});







        
    const response = await fetch("/contact", {
        method:"POST",
        headers:{
            "Content-Type":"application/json"
        },
        body: JSON.stringify(formData)
    });

    const result = await response.json();
    console.log(result.message)
        
})
