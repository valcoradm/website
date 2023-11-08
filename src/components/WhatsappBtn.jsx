import { useEffect, useState } from "react";
import "./WhatsappBtn.css";
import Modal from "react-bootstrap/Modal";
function WhatsappBtn({ phone, message, popover, isMain = false }) {
  const [show, setShow] = useState(false);
  useEffect(() => {
    if (isMain) return;
    const tippyInstance = window.tippy("#wz-button", {
      content: popover,
      placement: "right",
    });
    return () => {
      tippyInstance[0].destroy();
    };
  }, [popover]);
  return (
    <>
      {/* <a
        id="wz-button"
        href={
          "https://api.whatsapp.com/send?phone=" +
          phone +
          "&text=" +
          encodeURIComponent(message)
        }
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src="assets/img/whatsapp/icon.png" alt="" />
      </a> */}
      {!isMain && (
        <a href="#" onClick={() => setShow(true)} id="wz-button" className="wz">
          <img src="assets/img/whatsapp/icon.png" alt="" />
        </a>
      )}
      {isMain && (
        <a
          target=""
          onClick={() => setShow(true)}
          href="/#"
          class="wz default-btn two"
        >
          <i class="fa fa-calendar-plus-o" aria-hidden="true"></i> AGENDA TU
          VISITA<span></span>
        </a>
      )}
      <div
        className="modal show"
        style={{ display: "block", position: "initial" }}
      >
        <Modal show={show} onHide={() => setShow(false)}>
          <Modal.Header closeButton>
            <Modal.Title>Seleccione Sucursal</Modal.Title>
          </Modal.Header>

          <Modal.Body>
            {window.sucursales.data.map((sucursal, index) => {
              return (
                <div
                  className="b-two-btn"
                  key={sucursal.Descripcion + "." + index}
                >
                  <a
                    target="_blank"
                    style={{ width: "100%" }}
                    onClick={() => setShow(false)}
                    href={
                      "https://api.whatsapp.com/send?phone=" +
                      sucursal.whatsapp +
                      "&text=" +
                      encodeURIComponent(sucursal.defaultWhatsappText)
                    }
                    className="default-btn two"
                  >
                    {sucursal.Descripcion}
                    <span></span>
                  </a>
                </div>
              );
            })}
          </Modal.Body>
        </Modal>
      </div>
    </>
  );
}

export default WhatsappBtn;
