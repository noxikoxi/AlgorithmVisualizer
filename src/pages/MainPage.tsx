import { Link } from "react-router-dom";
import { sorts } from "../algorithms/sorting/config";

function MainPage() {
  const links = sorts.map((item) =>  "/sorting/" + item.split(" ")[0].toLowerCase());
  
  return (
    <div id="content">
      <div style={{paddingLeft: 20, height: "100%"}} className="centered">
        <p className="title" style={{margin: 10}}>Algorithm Visualizer</p>
        <span style={{fontWeight: "bold"}}>Learn about Data Structures and Algorithms</span>
        <span className="tiny">Every algorithm/data structure contains visualizations.</span>
        <span className="tiny">Currently working on sorting algorithms.</span>
        <div style={{display: "grid", gridTemplateColumns: "1fr 1fr", alignItems: "center", gap: 30}}>
          <img alt="sorted bars" src="/sort.png" width="192px" height="192px"></img>
          <ul>
              {links.map((link, index) => (
                  <Link to={link} key={index}>
                      <li>
                          {sorts[index]}
                      </li>
                  </Link>
              ))}   
          </ul>
        </div>
      </div>
    </div>
  );
}

export default MainPage;
