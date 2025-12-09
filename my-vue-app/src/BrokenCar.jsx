
import './BrokenCar.css'

function BrokenCar() {
    return (
        <div className='broken-car-container'>
            <div className="img-car">

                <h1 className='title-car'>Ainda está tentando <br /> manter um carro <br /> <span className='text-car-effect'>que já virou um peso?
                </span></h1>
                <p className='text-info'>Veja o que acontece <br />quando você tenta segurar <br /><span className='text-car-effect'>
                    Um carro que já está te afundando: </span>
                </p>
                <button
                    className='btn-broken'
                    onClick={() => {
                        const section = document.querySelector("#carousel-section");
                        if (section) {
                            section.scrollIntoView({ behavior: "smooth" });
                        }
                    }}
                >
                    Saiba mais
                </button>

            </div>
        </div>
    )
}

export default BrokenCar