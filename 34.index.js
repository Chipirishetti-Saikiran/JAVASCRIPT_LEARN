const url="https://dog.ceo/api/breeds/list/all";

const btn=document.getElementById("btn");

const para=document.getElementById("fact");




const getDog=async()=>{
    console.log("loading");
    let res=await fetch(url);
    let res_data=await res.json();
    console.log(res_data);
    

    let breeds = Object.keys(res_data.message);
    let randomBreed = breeds[Math.floor(Math.random() * breeds.length)];
    para.innerText = randomBreed;
}


btn.addEventListener("click",getDog);