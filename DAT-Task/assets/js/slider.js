let images=["https://www.agroberichtenbuitenland.nl/binaries/large/content/gallery/agroberichtenbuitenland/content-afbeeldingen/h/hongarije/newsflash-pictures/wheat-865152_1920.jpg",
"https://www.bakingbusiness.com/ext/resources/2022/08/31/HRS-harvest-LEAD.jpg?t=1661948515&width=1080",
"http://1.bp.blogspot.com/_HdR0er-_VIM/TKZqBoQTP3I/AAAAAAAAABQ/6hfJAXEiqdE/s1600/harvest.jpg"];
let boxSlide=document.querySelector(".slider-box-inner");
 let div=document.createElement("div");
 let indexImg=1;
 div.innerHTML=`
 <img class="slide-images" id="imgid" src="${images[1]}" alt="harvest-image" style="  width: 100% !important;">
          `;
  boxSlide.appendChild(div);


  function Next() {
   
     if (indexImg<images.length-1) {
         document.getElementById("imgid").src=images[indexImg+1];
                 indexImg++;
     }
 }

   function Prevoious() {
    if (indexImg>0) {
        document.getElementById("imgid").src=images[indexImg-1];
                    indexImg--;
    }
                    
 }