import {useSelector} from 'react-redux'


const Header = () => {
  const CartNum = useSelector(state=> state.Datax.numberCart)
 

 
  return (
   <header>
    <h3>React Burger</h3>

    <div>
        <h3>Cart {CartNum}</h3>
    </div>
   </header>
  )
}

export default Header