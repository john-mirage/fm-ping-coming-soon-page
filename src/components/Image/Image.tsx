import { FunctionComponent } from "react";
import dashboardIllustration from "@images/illustration-dashboard.png";

const Image: FunctionComponent = () => {
  return (
    <img
      src={dashboardIllustration}
      alt="dashboard illustration"
      draggable="false"
    />
  );
};

export default Image;
