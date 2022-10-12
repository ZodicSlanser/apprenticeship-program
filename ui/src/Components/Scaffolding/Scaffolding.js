import "./Scaffolding.css";
function Scaffolding(props) {
  setTimeout(() => {
    return <div className="scaffolding">{props.children}</div>;
  }, 100);
  return;
}
export default Scaffolding;
