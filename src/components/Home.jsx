import Product from "./Product";
import portada_ from "../images/home/portada_.jpg";
import Portada_2 from "../images/home/Portada_2.jpg";
import Portada_3 from "../images/home/Portada_3.jpg";
import Portada_4 from "../images/home/Portada_4.jpg";

const Home = () => {
  return (
    <div>
      <div
        id="carouselExampleIndicators"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="3"
            aria-label="Slide 4"
          ></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={portada_} className="d-block w-100" alt="Shop" />
          </div>
          <div className="carousel-item">
            <img src={Portada_2} className="d-block w-100" alt="Shop" />
          </div>
          <div className="carousel-item">
            <img src={Portada_3} className="d-block w-100" alt="Shop" />
          </div>
          <div className="carousel-item">
            <img src={Portada_4} className="d-block w-100" alt="Shop" />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Anterior</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Siguiente</span>
        </button>
      </div>
      <Product />
    </div>
  );
};

export default Home;
