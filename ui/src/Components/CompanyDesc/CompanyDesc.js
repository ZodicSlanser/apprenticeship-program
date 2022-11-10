import { useState, memo, useEffect } from "react";
import "./CompanyDesc.css";
import exclmark from "../../Assets/CompanyDesc/exclmark.svg";
import TextareaAutosize from "react-textarea-autosize";
import { useLocation } from "react-router-dom";

export default memo(function CompanyDesc(props) {
  const [opacity, setOpacity] = useState(0.3);
  const [typing, setTyping] = useState(false);
  const [active, setActive] = useState(false);
  const location = useLocation();
  useEffect(() => {
    if (location.state?.compDesc) {
      props.invokeCompany(null, true, 1);
    }
  }, []);

  return (
    <div>
      <div
        className="panel"
        onClick={() => {
          setActive(true);
          props.invokeActivity(null, 1);
        }}
        onMouseEnter={() => {
          props.invokeActivity(null, 1);
          setActive(true);
        }}
        onMouseLeave={() => {
          if (!typing) {
            setActive(false);
            props.invokeActivity(null, 0);
          } else props.invokeActivity(null, 0, true);
        }}
        style={
          active
            ? {
                border: "1px solid #793EF5",
                boxShadow: "0px 24px 34px rgba(0, 0, 0, 0.12)",
              }
            : null
        }
      >
        <img src={exclmark} alt="exmark" className="exmark" />
        <div className="panel-heading">Company Description</div>
        <br />
        <div>
          <TextareaAutosize
            className="textarea"
            placeholder={"Enter Description"}
            defaultValue={location.state ? location.state.compDesc : null}
            onBlur={(e) => {
              setActive(false);
              props.setCompanyDesc(e.target.value);
              if (e.target.value !== "") {
                if (location.state) location.state.compDesc = null;
                setOpacity(1);
                props.invokeCompany(null, true, 1);
              } else {
                setOpacity(0.3);
                props.invokeCompany(null, false, 1);
              }
              props.invokeActivity(null, 0, false);
              setTyping(false);
            }}
            onClick={() => {
              setOpacity(1);
              props.invokeActivity(null, 1, true);
              setTyping(true);
            }}
            style={{ opacity: opacity }}
          ></TextareaAutosize>
        </div>
      </div>
    </div>
  );
});
