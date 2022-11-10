import { useState, useEffect, memo } from "react";
import "./TeamAdmin.css";
import TeamPage from "./TeamPage";
import Rectangle from "../../Assets/TeamAdmin/Rectangle.svg";
import addCircle from "../../Assets/TeamAdmin/add-circle.svg";
import infoCircle from "../../Assets/TeamAdmin/info-circle.svg";
import link from "../../Assets/TeamAdmin/linkedin.svg";
import trash from "../../Assets/TeamAdmin/close.svg";
import { useLocation } from "react-router-dom";

function TeamAdmin(props) {
  const location = useLocation();
  const [modalOpen, setModal] = useState(false);
  const [selectedImage, setSelectedImage] = useState();
  const [list, setList] = useState(
    location.state?.members ? location.state.members : []
  );
  const [errorMessage, setErrorMessage] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    socialURL: "",
    photo: "",
    email: "",
  });

  useEffect(() => {
    props.invokeAdmin(null, list.length === 0 ? false : true);
    props.setAdmin(list);
  }, [list.length]);
  const handleSubmit = (e) => {
    if (
      formData.name === "" ||
      formData.photo === "" ||
      formData.email === ""
    ) {
      setErrorMessage("Please fill all the required fields");
      e.preventDefault();
    } else {
      e.preventDefault();
      setList((ls) => [...ls, formData]);
      setFormData("");
      handleClose();
    }
  };

  const handleImage = (e) => {
    if (
      e.target.files &&
      e.target.files.length > 0 &&
      e.target.files[0].type.split("/")[0] === "image"
    ) {
      setSelectedImage(e.target.files[0]);
      if (location.state) location.state.photo = null;
      setFormData((prevFormData) => {
        return {
          ...prevFormData,
          photo: e.target.files[0],
        };
      });
    }
  };
  const handleClose = () => {
    setModal(false);
    setErrorMessage("");
    setSelectedImage(false);
  };
  const removeAdmin = (index) => {
    setList(list.filter((el, i) => i !== index));
  };

  const createObject = (img) => {
    let objectURL;
    try {
      objectURL = URL.createObjectURL(img);
    } catch (e) {
      objectURL = "";
    }
    return objectURL;
  };

  const handleChange = (e) => {
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [e.target.name]: e.target.value,
      };
    });
  };
  return (
    <div>
      <div
        className="Team-container"
        onClick={(e) => {
          props.invokeActivity(null, 4);
        }}
        onMouseEnter={(e) => {
          props.invokeActivity(null, 4);
        }}
        onMouseLeave={(e) => {
          props.invokeActivity(null, 0);
        }}
      >
        <div className="Title-container">
          <div className="Title">
            <span>Team Admin</span>
            <button
              className="Add-member"
              onClick={() => {
                setModal(true);
              }}
            >
              <img src={addCircle} alt="add-circle"></img>
              <span style={{ marginTop: "1px" }}> Add Team Member</span>
            </button>
          </div>
          <img src={infoCircle} className="info-circle" alt="info-circle"></img>
        </div>
        {list.length !== 0 && (
          <div className="TeamAdmin-container">
            {list.map((a, index) => (
              <div className="Admin-details" key={index}>
                <div className="ImageTitleAdmin">
                  {a.photo ? (
                    <img
                      className="preview"
                      src={
                        location.state?.members[index]?.photo
                          ? a.photo
                          : createObject(a.photo)
                      }
                      alt="pic"
                    ></img>
                  ) : (
                    <img className="preview" src={Rectangle} alt="pic"></img>
                  )}
                  <div className="admin-firstName">
                    <span> {a.name}</span>
                  </div>
                </div>
                <div className="IconsAdmin">
                  <a href={a.socialURL} className="LinkedInIcon">
                    <img src={link} alt="LinkedIn"></img>
                  </a>

                  <img
                    className="deleteAdmin"
                    src={trash}
                    onClick={() => removeAdmin(index)}
                    alt="trash"
                  ></img>
                </div>
              </div>
            ))}
          </div>
        )}
        {modalOpen && (
          <TeamPage
            closeModal={handleClose}
            handleform={handleChange}
            selectedImage={selectedImage}
            changeImage={handleImage}
            submit={handleSubmit}
            error={errorMessage}
          />
        )}
      </div>
    </div>
  );
}
export default memo(TeamAdmin);
