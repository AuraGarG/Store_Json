import { NavLink } from "react-router-dom";

const About = () => {
  return (
    <div>
      <div className="container py-5 my-5">
        <div className="row">
          <div className="col-md-6">
            <h1 className="text-primary fw-bold mb-4">Acerca de Nosotros</h1>
            <p className="lead mb-4">
              Somos una marca con sello propio y más que una tienda de vestidos
              de novia es una marca que ha logrado tener su propia identidad,
              actualmente contamos con registro de marca. Trabajamos con pasión
              por la moda nupcial y nos caracterizamos por ofrecer un servicio
              de asesoría personalizada a cada una de las novias que visitan
              nuestra tienda, haciendo importante y único cada momento en la
              elección de su vestido.
            </p>
            <NavLink to="/contact" className="btn btn-outline-primary px-3">
              Contactanos
            </NavLink>
          </div>
          <div className="col-md-6 d-flex justify-content-center">
            <img
              src="../images/contact.jpg"
              alt="About us"
              height="400px"
              width="400px"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
