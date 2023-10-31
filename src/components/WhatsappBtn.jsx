import { useEffect } from "react";
import "./WhatsappBtn.css";
function WhatsappBtn({ phone, message, popover }) {
  useEffect(() => {
    const tippyInstance = window.tippy('#wz-button', {
      content: popover,
      placement: "right",
    });
    return () => {
      tippyInstance[0].destroy();
    };
  }, [popover]);
  return (
    <a
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
    </a>
  );
}

export default WhatsappBtn;
