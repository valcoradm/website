import { useEffect } from "react";

function Preloader({files}) {
  useEffect(() => {
    window.jQuery(".preloader").show();
    if(files.length===0){
      return;
    }
    const promises = files.map((src)=>new Promise((resolve, reject) => {
      const img = new Image();
      img.src = src;
      img.onload = resolve;
      img.onerror = reject;
    }));
    Promise.all(promises).then(() => {
      window.jQuery(".preloader").fadeOut(500);
    });
  }, [files]);
  return (
    <div className="preloader">
      <div className="container">
        <div className="d-table">
          <div className="d-table-cell">
            <div className="preloader loading">
              <span className="slice"></span>
              <span className="slice"></span>
              <span className="slice"></span>
              <span className="slice"></span>
              <span className="slice"></span>
              <span className="slice"></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Preloader;
