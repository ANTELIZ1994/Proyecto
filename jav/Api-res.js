const apiURL= 'https://restcountries.com/v3.1/region/north america';
function API(){
async function API(){

  try{

    const resultsDiv=document.getElementById('resultado');
    

    const response=await fetch(apiURL);
    if(!response.ok){
         throw new Error("Network response was not ok");

    }
    const users=await response.json();
     datos="";
    users.forEach(element => {
      datos=datos+`${element.id}+"-"+${element.username}`
      
    });
    resultsDiv.innerHTML=datos;
    

  }catch (error){
    console.error("hubo error",error);
  }
  



}
}
