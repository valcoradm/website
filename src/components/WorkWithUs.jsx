import { useState } from "react";
import FormButton from "./form/Button";

function Preloader() {
  const [saving, setSaving] = useState(false);
  const [data, setData] = useState({
    name: "",
    mail: "",
    medicalCenter: "",
    contactNumber: "",
  });
  const submit = (evt) => {
    evt.preventDefault();
    if(saving){
        return;
    }
    setSaving(true);
    alert("Need to be implemented");
  };
  return (
    <div className="check-up-area pb-100">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div className="check-up-text">
              <div className="section-title-two">
                <h2>Únete a la red de doctores que confían en VALCOR</h2>
              </div>
              <form className="appointment-form" onSubmit={submit}>
                <div>
                  <div className="row">
                    <div className="col-lg-6">
                      <div className="form-group">
                        <input
                          type="text"
                          className="form-control"
                          id="enter-your-name"
                          placeholder="Nombre"
                          disabled={saving}
                          value={data.name}
                          onChange={(e) =>
                            setData({ ...data, name: e.target.value })
                          }
                        />
                        <i className="bx bx-user"></i>
                      </div>
                    </div>

                    <div className="col-lg-6">
                      <div className="form-group">
                        <input
                          type="email"
                          className="form-control"
                          id="enter-your-email"
                          placeholder="Correo"
                          disabled={saving}
                          value={data.mail}
                          onChange={(e) =>
                            setData({ ...data, mail: e.target.value })
                          }
                        />
                        <i className="bx bx-envelope"></i>
                      </div>
                    </div>

                    <div className="col-md-6 col-lg-6">
                      <div className="form-group">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Centro Médico"
                          disabled={saving}
                          value={data.medicalCenter}
                          onChange={(e) =>
                            setData({ ...data, medicalCenter: e.target.value })
                          }
                        />
                      </div>
                    </div>

                    <div className="col-lg-6">
                      <div className="form-group">
                        <input
                          type="text"
                          className="form-control"
                          id="contact-number"
                          placeholder="N° de Contacto"
                          disabled={saving}
                          value={data.contactNumber}
                          onChange={(e) =>
                            setData({ ...data, contactNumber: e.target.value })
                          }
                        />
                        <i className="bx bx-phone-call"></i>
                      </div>
                    </div>
                  </div>

                  <div className="appointment-btn">
                    <FormButton type="submit" saving={saving} text={saving ? "Grabando" : "Confirmar"}></FormButton>
                  </div>
                </div>
              </form>
            </div>
          </div>

          <div className="col-lg-6">
            <div className="check-up-img">
              <div className="main-img">
                <img src="assets/img/check-up.jpg" alt="Image" />
              </div>
              <div className="shape">
                <img src="assets/img/shapes/shape-5.png" alt="Shape" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Preloader;
