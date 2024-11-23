import './../style/home.css'

function Home() {
  
    return (
        <div className="homepage">
            <div className="hero">
                <div className="titulo">
                    <h1>Mi Librería</h1>
                </div>
                <div className="parrafo">
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quam amet ab, aut dicta dolorem minima voluptate ducimus eos ipsa cupiditate deserunt repellendus minus magni ipsam ratione repudiandae hic porro laboriosam? Illum, distinctio aut! Cum ad saepe, earum dicta at similique sunt modi consectetur. Fuga sapiente earum itaque eaque omnis? Ipsam.</p>
                </div>
            </div>
            <div className="hero2">
                <div className="hero2Izq">
                    <div className="subtitulo">
                        <h2>Muchos libros en esta librería</h2>
                    </div>
                    <div className="parrafo2">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi quasi atque suscipit possimus officiis ab quos reprehenderit velit delectus, inventore consectetur quas ratione corporis ipsam, vitae autem eum? Omnis, accusantium?</p>
                    </div>
                </div>
                <div className="hero2Der">
                    <div className="imagen">
                        <h4>Aqui hay imagen</h4>
                    </div>
                    <div className="datos">
                        <div className="dato1">
                            <div>libro 1</div>
                            <div>libro 2</div>
                        </div>
                        <div className="dato2">
                            <div>libro 3</div>
                            <div>libro 4</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
  }
  
  export default Home
  