import "./TeamRoles.css";
import addCircle from "../../Assets/Roles/add-circle.png";
import infoCircle from "../../Assets/Roles/info-circle.png";
export default function TeamRoles(props) {
  return (
    <section className="team-roles-panel">
      <div className="team-Button-a">
        <div>
          <p>Team Roles</p>
          <button className="team-roles-button">
            <img
              src={addCircle}
              alt="add Circle Icon"
              className="add-circle-icon"
            />
            Add Team Member
          </button>
        </div>
        <img
          src={infoCircle}
          alt="Info Circle Icon"
          className="info-circle-icon"
        ></img>
      </div>
      <div className="available-roles"></div>
    </section>
  );
}
