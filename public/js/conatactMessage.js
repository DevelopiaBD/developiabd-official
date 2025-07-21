const contact_form = document.getElementById("contact_form");
const inputValFNAll = document.querySelectorAll(".inputValFN");



const actionForForm= ()=>{
let formData = {
    // name:"",
    // phone:"",
    // message:"",
    // email:"",
    // country:""
};




inputValFNAll.forEach((datas,i)=>{
    datas.addEventListener("keydown",  (e)=>{
        const {name, value} = e.target;
        
        
        formData = {
            ...formData,
            [name]: value
        }
        
        localStorage.setItem("formDataAuto", JSON.stringify(formData))
        
        console.log(formData);
        
    })
    
});


contact_form.addEventListener("submit", async(e)=>{
    
try {
    
    const response = await fetch("/contact", {
        method:"POST",
        headers:{
            "Content-Type":"application/json"
        },
        body: JSON.stringify(formData)
    });

    const result = await response.json();
    console.log(result.message)
    if(response.ok){
        alert("Your Message Send SuccessFully. Very Soon We Will Conatact You")
    }
    else{
        const error = result.message? result.message: "I Think Net Problem. Try Again Letter!!";
        alert(error)
    }
  } catch (error) {
    console.log(error.message);
    
  }
        
})
}



actionForForm()