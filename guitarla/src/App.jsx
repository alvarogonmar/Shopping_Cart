import { useState, useEffect } from "react"
import Guitar from "./components/Guitar"
import Header from "./components/Header" // Importar el componente
import { db } from "./data/db"

function App() {

    const [data, setData] = useState(db)
    const [cart, setCart] = useState([])

    const MAX_ITEMS = 10

    useEffect (() => {
        localStorage.setItem('cart', JSON.stringify(cart))
    }, [cart])

    function addToCart(item){
        // Agregar items al carrito
        const itemExists = cart.findIndex(guitar => guitar.id === item.id)
        if(itemExists >= 0){ // existe en el carrito
            if(cart[itemExists].quantity >= MAX_ITEMS) return
            const updatedCart = [...cart]
            updatedCart[itemExists].quantity++
            setCart(updatedCart)
        } else{
            item.quantity = 1
            setCart([...cart, item])   
        }
    }
    
    function removeFromCart(id){
        setCart(prevCart => prevCart.filter(guitar => guitar.id !== id)) // Filtrar y "traer" las guitarras diferente a la del id que estoy quitando
    }

    function increaseQuantity(id) {
        const updatedCart = cart.map( item => {
            if(item.id === id && item.quantity < MAX_ITEMS) {
                return {
                    ...item,
                    quantity: item.quantity + 1
                }
            }
            return item
        })
        setCart(updatedCart)
    }

    function decreaseQuantity(id){
        const updatedCart = cart.map( item => {
            if(item.id === id && item.quantity > 1 && item.quantity <= MAX_ITEMS){
                return {
                    ...item,
                    quantity: item.quantity - 1
                }
            }
            return item
        })
        setCart(updatedCart)
    }

    function clearCart (e) {
        setCart([])
    }
    
    return (
        <>
         
        <Header 
            cart={cart}
            removeFromCart={removeFromCart}
            increaseQuantity={increaseQuantity}
            decreaseQuantity={decreaseQuantity}
            clearCart={clearCart}

        />
        
        <main className="container-xl mt-5"> 
            <h2 className="text-center">Our Collection</h2>

            <div className="row mt-5">
                {data.map((guitar) => ( /**  AQUI se manda llamar el elemento de nuestra
                base de datos, cada elemento se mostrara, sea la cantidd que sea y se escribe
                entre llaves porque es codigo de JavaScript */
                    <Guitar
                        key={guitar.id} // Prop especial que siempre debes usar cuando iteres en una lista y pasarle un valor unico (ej image, name, id)

                        // Props - Permiten pasar informacion, crear componentes reutilizables
                        guitar={guitar} // nombreProp = {valor}
                        setCart={setCart}
                        addToCart={addToCart}
                    />
                ))}

            </div>
        </main>


        <footer className="bg-dark mt-5 py-5">
            <div className="container-xl">
                <p className="text-white text-center fs-4 mt-4 m-md-0">GuitarLA - All rights reserved</p>
            </div>
        </footer>
        </>
  )
}

export default App