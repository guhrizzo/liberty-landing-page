import './BrokenCar.css';

function BrokenCar() {
    const handleScroll = () => {
        const section = document.querySelector("#carousel-section");
        if (section) {
            section.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <section className='broken-car-section'>
            <div className="img-car-hero">
                <div className="content-wrapper">
                    <h1 className='title-car'>
                        Ainda está tentando <br /> 
                        manter um carro <br /> 
                        <span className='text-car-effect'>que já virou um peso?</span>
                    </h1>
                    
                    <p className='text-info'>
                        Veja o que acontece quando você tenta <br /> 
                        segurar um carro que <span className='text-car-highlight'>já está te afundando:</span>
                    </p>

                    <button className='btn-broken' onClick={handleScroll}>
                        Saiba mais
                    </button>
                </div>
            </div>
        </section>
    );
}

export default BrokenCar;