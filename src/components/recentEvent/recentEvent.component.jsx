import "./recentEvent.style.css";
//import missionImg from "../../assets/missionImg.webp";
import vissionImg from "../../assets/vissionImg.webp";
import "animate.css/animate.min.css";
import { AnimationOnScroll } from "react-animation-on-scroll";
import axios from "axios";
import {useEffect,useState} from "react";
const RecentEvent = () => {
  const [missionImg,setMissionImg] = useState(null);
  const getImage=()=>{
 axios.post("https://athirst-backend.herokuapp.com/get-img").then(res=>{
   alert(res.data.message);
   setMissionImg(res.data.data);
 }).catch(err=>{alert(err.message)});
};
  useEffect(()=>{
      getImage();
  },[]);
  
  return (
    <div className="recentEventDiv">
      <AnimationOnScroll
        initiallyVisible={true}
        duration={5}
        animateIn="animate__swing"
      >
        <h3>Recent Event</h3>
      </AnimationOnScroll>

      <AnimationOnScroll
        animateIn="animate__shakeY"
        animateOut="animate__bounceOutRight"
      >
        <p>
          The Athirst Foundation visited Harfard Model School at Aina Street in
          Lagos and provided Bibles. books and pens to students in Primary 6.
          What a great and amazing time with the students.{" "}
        </p>
      </AnimationOnScroll>

      <div className="recentEventDivGrid">
        <div>
          <img src={missionImg} alt="" className="recentEventDivGridImg" />
        </div>
        <div>
          <img src={vissionImg} alt="" className="recentEventDivGridImg" />
        </div>
      </div>
    </div>
  );
};

export default RecentEvent;
