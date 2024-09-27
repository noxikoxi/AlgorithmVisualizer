import { Link } from "react-router-dom";
import { sorts } from "../algorithms/sorting/config";
import {DS} from "../algorithms/data-structures/config";

function MainPageLinks({links, text, imgAlt, imgSrc} : {
  links: string[],
  text: string[],
  imgAlt: string,
  imgSrc: string
}) {
  return (
      <div style={{display: "grid", gridTemplateColumns: "1fr 1fr", alignItems: "center", gap: 30}}>
          <img alt={imgAlt} src={imgSrc} width="192" height="192"></img>
          <ul>
            {links.map((link, index) => (
                <Link to={link} key={link+index.toString()}>
                  <li>
                    {text[index]}
                  </li>
                </Link>
            ))}
          </ul>
      </div>
  )
}

function MainPage() {
  const sortlinks = sorts.map((item) =>  "/sorting/" + item.split(" ")[0].toLowerCase());
  const dsLinks = DS.map((item) => "/ds/" + item.toLowerCase());
  return (
    <div id="content">
      <div style={{paddingLeft: 20, height: "100%", justifyContent: "center"}} className="centered">
        <p className="title" style={{margin: 10}}>Algorithm Visualizer</p>
        <span style={{fontWeight: "bold"}}>Learn about Data Structures and Algorithms</span>
        <span className="tiny">Every algorithm/data structure contains visualizations.</span>
        <span className="tiny">Currently working on sorting algorithms.</span>
        <MainPageLinks imgAlt="sorted bars" imgSrc="/sort.png" links={sortlinks} text={sorts}/>
        <MainPageLinks imgAlt="data structures" imgSrc="/ds.png" links={dsLinks} text={DS}/>
      </div>
    </div>
  );
}

export default MainPage;
