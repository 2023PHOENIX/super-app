import "./browse.css";

import ProfileImage from "../../assets/browse/profile-image.png";
import Profile from "../../components/BrowsePage/profile/Profile";
import Weather from "../../components/BrowsePage/weather/Weather";
const Brose = () => {
  return (
    <div className="brose-page">
      <div className="left">
        <Profile />
        <Weather />
      </div>
      <div className="right">
        <div className="wallpaper"></div>
        <div className="content"></div>
      </div>
    </div>
  );
};

export default Brose;
