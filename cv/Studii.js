const Studii= [
    {
        id: "1",
        Scoala: "Universitatea Tehnica Cluj Napoca",
        Specializarea: "Automatica si informatica aplicata",
        endDate: "2023",
      },
    {
        id: "2",
        Scoala: "Liceul Teoretic Ana Ipatescu",
        Specializarea: "Matematica-informatica",
        endDate: "2019",
      },
      {
        id: "3",
        Scoala: "Liceul Teoretic Petru Maior",
        Specializarea: "Stiinte ale naturii",
        endDate: "2017",
      }
    ]
    function generetaStudii(Studii){
        const stud =document.createElement("div");
        const Scoala= document.createElement("h4");
        const Specializarea= document.createElement("p");
        const endDate= document.createElement("p");
        Scoala.innerText=Studii.Scoala;
        endDate.innerText=Studii.endDate;
        Specializarea.innerText=Studii.Specializarea;
        stud.appendChild(Scoala);
        stud.appendChild(Specializarea);
        stud.appendChild(endDate);
        return stud;
    }
    function popstd(std){
    const mainPARENT=document.getElementById("Studii");
    std.forEach(function(stdobj ,index){
        const stud=generetaStudii(stdobj);
        mainPARENT.appendChild(stud);
    })
        
    };
    console.log(generetaStudii(Studii[0]));
    console.log(generetaStudii(Studii[1]));
    console.log(generetaStudii(Studii[2]));
    popstd(Studii);

    function myFunction() {
      var x = document.getElementById("myLinks");
      if (x.style.display === "block") {
        x.style.display = "none";
      } else {
        x.style.display = "block";
      }
    }