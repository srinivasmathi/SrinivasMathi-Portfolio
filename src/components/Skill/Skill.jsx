import "./Skill.css"

import mongodb from "../../assets/logos/mongodb.png"
import rt from "../../assets/logos/react.png"
import bootstrap from "../../assets/logos/bootstrap.png"
import cpp from "../../assets/logos/c++.png"
import django from "../../assets/logos/django.png"
import frontend from "../../assets/logos/frontend.png"
import git from "../../assets/logos/git.png"
import node from "../../assets/logos/node.png"
import sql from "../../assets/logos/sql.png"


export default function Skill() {
    return (
        <>
            <div className="skill">
                <div className="contents">
                    <span className="tag">&lt;body&gt;</span><br />
                    <span className="tag" style={{marginLeft : "20px"}}>&lt;h1&gt;</span><h1>Skills</h1><span className="tag">&lt;h1&gt;</span><br />
                    <span className="tag" style={{marginLeft : "20px"}}>&lt;p class="skills-and-profiles"&gt;</span><br />
                    <p>
                        Proficient in Front-end Technologies including HTML5,CSS3,JavaScript,Bootstrap,React & Back-end Technologies including NodeJs,Django and the Database Systems such as Oracle SQL and Mongodb.<br />
                        <br />
                        Profiles - <a href="https://github.com/srinivasmathi">Github</a><a href="https://www.linkedin.com/in/srinivas-mathivanan-74660517b/">LinkedIn</a><a href="https://leetcode.com/Srinivas_mathivanan/">Leetcode</a><a href="https://www.codechef.com/users/srinivasmathi1">CodeChef</a>
                    </p>
                    <span className="tag" style={{marginLeft : "20px"}}>&lt;p&gt;</span><br />
                    <span className="tag">&lt;/body&gt;</span><br />
                </div>
                <div className="img-container">
                    <img src={frontend} />
                    <img src={bootstrap} />
                    <img src={sql} />
                    <img src={mongodb} />
                    <img src={cpp} />
                    <img src={rt} />
                    <img src={git} />
                    <img src={node} />
                    <img src={django} />
                </div>
            </div>
        </>
    );
}