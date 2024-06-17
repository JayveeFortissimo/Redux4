import {createSlice} from '@reduxjs/toolkit'


const addCart = {Carts:[],Add:false};


const Data2 = createSlice({
    name:"Cart",
    initialState:addCart,
    reducers:{
         pushCart(state,action){
                   // Kaya Not state.Carts kase titignan nyo kung
                   //wala pa don yung item
                   //callback element.name is equal ba sa action
            const itemSee = !state.Carts.some(element => element.name === action.payload.name)
    console.log(itemSee)
            if(itemSee){
                state.Add = true
                state.Carts.push(action.payload);
                
            }else{
                state.Add = false
            }
            
         }
    }
})


export const Data2Actions = Data2.actions;
               
               ///Dont forget this one
export default Data2.reducer;