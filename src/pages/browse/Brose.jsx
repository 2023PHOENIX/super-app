import "./browse.css";

import ProfileImage from "../../assets/browse/profile-image.png";
import Profile from "../../components/BrowsePage/profile/Profile";
import Weather from "../../components/BrowsePage/weather/Weather";

import Wallpaper from "./../../assets/profile/wallpaper-mountain.png";
import { useEffect } from "react";
import { useState } from "react";
const Brose = () => {
  const [news, setNews] = useState(null);

  const fetchNews = async () => {
    const url =
      "https://newsapi.org/v2/everything?q=tesla&from=2023-09-27&sortBy=publishedAt&apiKey=451345b7ec1f48c3bd285d3343017bb0";


    const response = await fetch(url);

    const data = await response.json();
    // console.log(data);

    setNews(data.articles)
    
  };

  useEffect(() => {
    fetchNews();

    console.log(news);
  }, []);

  // TODO: make truncate feature work
  // ? truncate is not working currently
  const makeNews = () => {
    if (news) {
      let latestNews = "";
      for (let i = 0; i < 20; i++) {
        latestNews += news[i]?.description;
      }
      return latestNews;
      // console.log(makeNews);
    }
  };

  // console.log(JSON.parse(localStorage.getItem('time')).time)

  return (
    <div className="brose-page">
      <div className="left">
        <Profile />
        <Weather />
      </div>
      <div className="right">
        <div className="wallpaper">
          <img src={Wallpaper} />
          <div className="heading-wallpaper">
            <div>Want to climb Mount Everest?</div>

            <div className="date-time">
              <div>{JSON.parse(localStorage.getItem("time")).date}</div>
              |
              <div>{JSON.parse(localStorage.getItem("time")).time}</div>
            </div>
          </div>
        </div>
        <div className="content">
          <div className="text">{makeNews()}</div>
        </div>
      </div>
    </div>
  );
};

export default Brose;
