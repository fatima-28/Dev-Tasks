let box=document.querySelector(".second-main-inner");
let boxArr =
 [{text:"захисту рослин",image:"Group.png"},
{text:"Добрива",image:"Group.png"},
{text:"кормова група",image:"Group.png"},
{text:"Агроному в поміч",image:"Group.png"},
];

for(const obj of boxArr){
    let div=document.createElement("div");
    div.classList.add("second-main-items")
    div.innerHTML=`
       <div class="second-main-inners-item">
                                <img src="./assets/img/${obj.image}" alt="logo">
                                <p> ${obj.text}</p>
                            </div>`;
                            box.appendChild(div);
}



