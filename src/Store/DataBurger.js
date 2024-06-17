import {createSlice} from '@reduxjs/toolkit';


const initialBurgerData = {
    Datas:[],
    numberCart:0
}

const burgerData = createSlice({
    name:"BurgerArray",
    initialState:initialBurgerData,
    reducers:{
        addData(state,action){
                             //itone action paylooad is array
                             //nafilter na yung unique id lang
                             // para d add nang add
                             //kaya gumamit ng some ichecheck nya
                             //if yung id sa pag call back ni ilter
                             //tsaka sakanya is equal ayn na
            const newData = action.payload.filter(
                newItem => !state.Datas.some(item => item.id === newItem.id)
              );
              state.Datas.push(...newData);
        },
      quantityCart(state,action){

    if(action.payload){
        state.numberCart++
    } else{
        console.log("")
    }
         
        console.log(action.payload)
          
      }
    }
})


export const Datayy = burgerData.actions;


        //Dont forget the reducer here hehehe Sorry
export default burgerData.reducer;