import "./formComponent.css";
import logo from "../../images/logo.svg";
import FormElement from "./FormElement";
import image from "../../images/play.png";

function FormComponent() {
  return (
    <div className="form__component  d-flex">
      <aside className="frame"></aside>
      <section className="content">
        <div className="logo">
          <img src={logo} alt="" />
        </div>

        {/*  display: none  --- before responsivity*/}
        <div className="form-play__up">
          <h1>
            AVS Video ReMaker <br /> <span> Giveaway</span>
          </h1>
        </div>
        {/*  display: none  --- before responsivity*/}

        <div className="form__content">
          <div className="form__text">
            <h1>Get started for free</h1>
            <h6>
              Please, fill in the form and get a free license key for your PC
            </h6>
          </div>
          <FormElement />
        </div>
        {/*  display: none  --- before responsivity*/}
        <div className="form-play__down">
          <img src={image} alt="img" />
        </div>
        {/*  display: none  --- before responsivity*/}
      </section>
    </div>
  );
}

export default FormComponent;
