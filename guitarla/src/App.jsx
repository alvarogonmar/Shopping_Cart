import { useState } from "react"
import Guitar from "./components/Guitar"
import Header from "./components/Header" // Importar el componente
import { db } from "./data/db"

function App() {

    const [data, setData] = useState(db)
        return (
        <>
         
        <Header />
        
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