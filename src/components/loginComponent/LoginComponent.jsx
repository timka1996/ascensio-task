import "./LoginComponent.css";
import logo from "../../images/logo.svg";
import books from "../../images/books.svg";
import lamp from "../../images/lamp.svg";
import question from "../../images/question.svg";
import { NavLink } from "react-router-dom";
import image from "../../images/play.png";

function LoginComponent() {
  return (
    <div className="login__component d-flex">
      <aside className="frame"></aside>
      <section className="content">
        <div className="logo">
          <NavLink to={"/"}>
            <img src={logo} alt="" />
          </NavLink>
        </div>

        {/*  display: none --- before responsivity */}
        <div className="login-play__up">
          <h1>
            AVS Video ReMaker <br /> <span> Giveaway</span>
          </h1>
        </div>
        {/*  display: none  --- before responsivity*/}

        <div className="text__content">
          <h1>Thank you!</h1>
          <h6>Download the full version of AVS Video ReMaker 6.7.1.262</h6>
          <button type="button">Download the full version</button>
        </div>
        <hr />
        <div className="resources">
          <h3>Helpful resources</h3>
          <div className="logos d-flex justify-content-between">
            <div className="logos__item d-flex flex-column">
              <img src={books} alt="books" />
              <p>Knowledge centre </p>
            </div>
            <div className="logos__item d-flex flex-column">
              <img src={lamp} alt="books" />
              <p>Tips & tricks</p>
            </div>
            <div className="logos__item d-flex flex-column">
              <img src={question} alt="books" />
              <p>
                Got a question or <br /> an idea? <NavLink>Contact us</NavLink>
              </p>
            </div>
          </div>
        </div>

        {/*  display: none --- before responsivity*/}
        <div className="login-play__down">
          <img src={image} alt="img" />
        </div>
        {/*  display: none  --- before responsivity*/}
      </section>
    </div>
  );
}

export default LoginComponent;
