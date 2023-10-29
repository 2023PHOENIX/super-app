import React from "react";
import ProfileImage from "../../../assets/browse/profile-image.png";
import "./profile.css"
function Profile(props) {
  
  const userInfo = localStorage.getItem('user-selected-category')?.split(",");
  const user = localStorage.getItem('user');
  // console.log(user);

  // TODO: fix the issue of localstorage && dynamic data in this component
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
          {userInfo?.map((u,i) => {
            return <div key={i} className="user-genre">{u}</div>
          })}
          <div className="user-genre">Horror</div>
          <div className="user-genre">Horror</div>
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
