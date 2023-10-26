import React from "react";
import ProfileImage from "../../../assets/browse/profile-image.png";
import "./profile.css"
function Profile(props) {
  return (
    <div className="profile">
      <div className="profile-image">
        <img src={ProfileImage} alt="profile" className="img-profile" />
      </div>

      <div className="profile-details">
        <div className="heading-name">
          KK Vinay
          <br></br>
          Vinay090@gmail.com
          <br></br>
          <span className="user-name">vinay060</span>
        </div>

        <div className="user-genre-wrapper">
          <div className="user-genre">Horror</div>
          <div className="user-genre">Horror</div>
          <div className="user-genre">Horror</div>
          <div className="user-genre">Horror</div>
          {/* <div className="user-genre">Horror</div> */}
        </div>
      </div>
    </div>
  );
}

export default Profile;
