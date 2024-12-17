import Guitar from "./components/Guitar"
import Header from "./components/Header" // Importar el componente

function App() {

  return (
    <>
    
    <Header />
    
    <main className="container-xl mt-5">
        <h2 className="text-center">Our Collection</h2>

        <div className="row mt-5">
            <Guitar />
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
