import { memo } from "react";
import "./Scaffolding.css";
function Scaffolding(props) {
  return <div className="scaffolding">{props.children}</div>;
}
export default memo(Scaffolding);
