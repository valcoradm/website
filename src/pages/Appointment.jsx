import React from "react";
import Preloader from "../components/preloader";
import Navbar from "../components/Navbar";

const Appointment = () => {
  return (
    <div>
      <Navbar />

      <div class="container">
        <div class="row align-items-center">
          <div class="col-lg-6">
            <div class="check-up-text">
              <div class="section-title-two">
                <a href="/">Volver</a>
                <h2>
                  Need a doctor for a pet check-up just make quick appointment
                </h2>
                <p>
                  We are one of the best company for your to make a good doctor
                  for you &amp; you can easily. We are one of the best agency to
                  make appoint you a good doctors intoa proper way. This will
                  help us to make a proper way of work &amp; this is one of the
                  of the best way for making this.
                </p>
              </div>

              <div class="appointment-form">
                <form>
                  <div class="row">
                    <div class="col-lg-6">
                      <div class="form-group">
                        <input
                          type="text"
                          class="form-control"
                          id="enter-your-name"
                          placeholder="Enter your name"
                        />
                        <i class="bx bx-user"></i>
                      </div>
                    </div>

                    <div class="col-lg-6">
                      <div class="form-group">
                        <input
                          type="email"
                          class="form-control"
                          id="enter-your-email"
                          placeholder="Enter your email"
                        />
                        <i class="bx bx-envelope"></i>
                      </div>
                    </div>

                    <div class="col-md-6 col-lg-6">
                      <div class="form-group">
                        <input type="date" class="form-control" />
                      </div>
                    </div>

                    <div class="col-md-6 col-lg-6">
                      <div class="form-group">
                        <select
                          class="form-control"
                          style={{ display: "none" }}
                        >
                          <option>Select time</option>
                          <option>10:00 AM</option>
                          <option>11:00 AM</option>
                          <option>12:00 PM</option>
                          <option>01:00 PM</option>
                          <option>02:00 PM</option>
                        </select>
                        <div class="nice-select form-control" tabindex="0">
                          <span class="current">Select time</span>
                          <ul class="list">
                            <li
                              data-value="Select time"
                              class="option selected focus"
                            >
                              Select time
                            </li>
                            <li data-value="10:00 AM" class="option">
                              10:00 AM
                            </li>
                            <li data-value="11:00 AM" class="option">
                              11:00 AM
                            </li>
                            <li data-value="12:00 PM" class="option">
                              12:00 PM
                            </li>
                            <li data-value="01:00 PM" class="option">
                              01:00 PM
                            </li>
                            <li data-value="02:00 PM" class="option">
                              02:00 PM
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    <div class="col-lg-6">
                      <div class="form-group">
                        <input
                          type="text"
                          class="form-control"
                          id="contact-number"
                          placeholder="Contact number"
                        />
                        <i class="bx bx-phone-call"></i>
                      </div>
                    </div>

                    <div class="col-lg-6">
                      <div class="appointment-btn">
                        <button type="submit" class="default-btn">
                          Confirm an appointment{" "}
                          <span
                            style={{ top: "-18.6px", left: "-8.10001px" }}
                          ></span>
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>

          <div class="col-lg-6">
            <div class="check-up-img">
              <div class="main-img">
                <img src="assets/img/check-up.jpg" alt="Image" />
              </div>
              <div class="shape">
                <img src="assets/img/shapes/shape-5.png" alt="Shape" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Appointment;
