// завдання 1
const par = document.querySelectorAll(".paragraph");

for (let i = 0; i < par.length; i++) {
    if (par[0].textContent.length > par[1].textContent.length) {
        par[0].addEventListener("click", ()=>{
            par[0].style.color = "red";
        })
    } else {
        par[1].addEventListener("click", ()=>{
            par[1].style.color = "blue";
        });
    }
};

// завдання 2
const input = document.querySelector("#input");
const button = document.querySelector("#btn");
button.addEventListener("click",()=>{
    const bonus =(input.value * 15)/100 + Number(input.value)
    const taxes = bonus - (bonus * 10)/100 
    const salary = (taxes - 190)/2
    alert("залишок: " + salary)
    input.value = ""
})
