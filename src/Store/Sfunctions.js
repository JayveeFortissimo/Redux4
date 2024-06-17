import { Datayy } from "./DataBurger";

export const Datasy = () =>{

    return async(dispatch) =>{
        try{

    const response =  await fetch("https://narutodb.xyz/api/character",{
        method:"GET",
        headers:{
            'Content-Type':'application/json'
        }
    })
    const data =  await response.json();
dispatch(Datayy.addData(data.characters))
        }catch(error){
            console.log("Errror Fetching")
        }
    }

}
