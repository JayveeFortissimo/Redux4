import {useDispatch,useSelector} from 'react-redux'; 
import { useEffect } from 'react';
import { Datasy } from '../Store/Sfunctions';
import { Datayy } from '../Store/DataBurger';
import {Data2Actions} from '../Store/MainCart.js';

const Body = () => {
const dispatch = useDispatch();
                                             //Galing sa storeCongig
const BurgerItems = useSelector(state => state.Datax.Datas);

const CartItems = useSelector(state => state.Carts.Carts);


const addQuanta = useSelector(state => state.Carts.Add);



console.log(CartItems);

useEffect(()=>{
  //I dispatch yung unction na Datasy para maging
  //Action sya yan sabi eh, pero mag try pa ko
  // sa ibang YT Tutorials
dispatch(Datasy())

},[dispatch]);


///Important This one
useEffect(() => {
  //addQuanta is a boolean value
  if (addQuanta) {
      dispatch(Datayy.quantityCart(addQuanta));
  }
}, [addQuanta, dispatch]);


  return (
   <section>

    <div>
       <h4> Items here...</h4>

<article>
{
  BurgerItems.map(elements =>{
    return(
      <main key={elements.id} onClick={()=> {
        dispatch(Data2Actions.pushCart({name:elements.name,pics:elements.images}));
       
      }}>
        <p>{elements.name}</p>
        <img src={elements.images[0]} alt="" />
        </main>
    )
  })
}
</article>




    </div>

   </section>
  )
}

export default Body