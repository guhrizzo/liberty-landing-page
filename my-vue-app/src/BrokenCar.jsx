import './BrokenCar.css';
import { scrollToSection } from './smoothScroll';

function BrokenCar() {
    return (
        <section className='broken-car-section'>
            <div className="img-car-hero">
                <video
                    className="hero-video"
                    src="/hero-video.mp4"
                    autoPlay
                    muted
                    loop
                    playsInline
                    preload="auto"
                />
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

                    <button className='btn-broken' onClick={() => scrollToSection(".carousel-section-container")}>
                        Saiba mais
                    </button>
                </div>
            </div>
        </section>
    );
}

export default BrokenCar;
