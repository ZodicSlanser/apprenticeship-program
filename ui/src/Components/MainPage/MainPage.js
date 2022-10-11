import LogoTitlePanel from "../LogoTitlePanel/LogoTitlePanel";
import ProgressBar from "../ProgressBar/ProgressBar";
import Scaffolding from "../Scaffolding/Scaffolding";

function MainPage() {
  return (
    <div>
      <div>Header goes here</div>
      <div>
        <ProgressBar></ProgressBar>
      </div>
      <Scaffolding>
        <LogoTitlePanel></LogoTitlePanel>
        <div>rest of page</div>
      </Scaffolding>
    </div>
  );
}
