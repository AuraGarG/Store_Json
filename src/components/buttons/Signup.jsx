import { BsGoogle } from "react-icons/bs";
import { AiOutlineFacebook } from "react-icons/ai";
import { AiOutlineUserAdd } from "react-icons/ai";

const Signup = () => {
  return (
    <div>
      <button
        type="button"
        className="btn btn-outline-primary ms-2"
        data-bs-toggle="modal"
        data-bs-target="#singupModal"
      >
        <AiOutlineUserAdd className="me-2" />
        Registrate
      </button>

      <div
        className="modal fade"
        id="singupModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">
                REGISTRATE
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body d-grid gap-2 mx-auto">
              <button className="btn btn-primary w-100 mb-4">
                <BsGoogle className="me-2" />
                Registrate con Google
              </button>
              <button className="btn btn-primary w-100 mb-4">
                <AiOutlineFacebook className="me-2" />
                Registrate con Facebook
              </button>

              <form>
                <div className="mb-3">
                  <label htmlFor="exampleInput" className="form-label">
                    Nombre de Usuario
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="exampleInput"
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="exampleInputEmail1" className="form-label">
                    Correo Electronico
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="exampleInput"
                    aria-describedby="emailHelp"
                  />
                  <div id="emailHelp" className="form-text">
                    No compartas tu correo electronico
                  </div>
                </div>
                <div className="mb-3">
                  <label htmlFor="exampleInputPassword1" className="form-label">
                    Clave
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    id="exampleInputPassword1"
                  />
                </div>
                <div className="mb-3 form-check">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    id="exampleCheck1"
                  />
                  <label className="form-check-label" htmlFor="exampleCheck1">
                    Check me out
                  </label>
                </div>
                <button
                  type="submit"
                  className="btn btn-outline-primary w-100 mt-5"
                >
                  Registrarme
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
