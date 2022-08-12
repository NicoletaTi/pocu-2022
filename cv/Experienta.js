const experienta1= [
    {
        id: "1",
        name: "Practica",
        company: "Endava" ,
        description: "Front-end development",
        startDate: "01/07/2021",
        endDate: "30/08/2021",
      },
    ]

function generetaExperienta(experienta){
    const exp =document.createElement("div");
    const name= document.createElement("p");
    const comp= document.createElement("p");
    const desc= document.createElement("p");
    const sd= document.createElement("p");
    const ed= document.createElement("p");
    name.innerText=experienta.name;
    comp.innerText=experienta.company;
    desc.innerText=experienta.description;
    sd.innerText=experienta.startDate;
    ed.innerText=experienta.endDate;
    exp.appendChild(name);
    exp.appendChild(comp);
    exp.appendChild(desc);
    exp.appendChild(sd);
    exp.appendChild(ed);
    return exp;
}
function popexp(exp){
const mainPARENT=document.getElementById("Experienta2");
exp.forEach(function(expobj ,index){
    const exper=generetaExperienta(expobj);
    mainPARENT.appendChild(exper);
})
    
};
console.log(generetaExperienta(experienta1[0]));
popexp(experienta1);

function myFunction() {
    var x = document.getElementById("myLinks");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }
  