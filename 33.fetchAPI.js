const url="https://dog.ceo/api/breeds/list/all";

//First Apporach

const getdata=async()=>{
    console.log("Loading");
    let prom=await fetch(url);
    let data=await prom.json();
    /*

        AJAX is Async JS & XML

        json is Java Script Object Notation
        json() method: returns a second promise that resolves with
        the result of parsing the response body text as JSON.
        (input json,output Objcet)

    */
    console.log(data);
    console.log(data.status);
}

//getdata();



//Second Apporach

/*

fetch(url)
    .then(res => {
        console.log("Loading");
        return res.json(); 
    })
    .then(data => console.log(data)) 
    .catch(e => console.error(e));

*/


//Third Apporach Using Async Await


const ready=async()=>{
    try{
        const data_new=await fetch("https://jsonplaceholder.typicode.com/posts");
        const data_final=await data_new.json();
        console.log(data_final);
        console.log(data_final.status);
    }
    catch(e){
        console.log(e)
    }
}
ready();