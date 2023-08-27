import "./Home.css";
import image from "../../assets/images/me.jpeg";
import TypeWriter from "typewriter-effect";

export default function Home() {
    return (
        <>  
            <div className="home-container">
                <div className="name-container">
                <span className="tag">&lt;body&gt;</span><br />
                    <span className="tag" style={{ marginLeft : "10px" }}>&lt;h1&gt;</span>
                    <h1 style={{ marginLeft : "30px" }}>Hi, I'm Srinivas</h1>
                    <span className="tag" style={{ marginLeft : "10px" }}>&lt;h1&gt;</span><br />
                    <span className="tag" style={{ marginLeft : "10px" }}>&lt;h2&gt;</span>
                    <TypeWriter className="job" options={{autoStart:true,loop:true,strings:['Aspiring Software Developer.','Competitive Programmer.']}}/>
                    <span className="tag" style={{ marginLeft : "10px" }}>&lt;h2&gt;</span><br /><br />
                    <span className="tag">&lt;button&gt;</span><a href="/contact" style={{margin: "10px 20px"}}>Contact Me</a><span className="tag">&lt;/button&gt;</span><br /><br />
                <span className="tag" style={{ marginLeft : "-5px" }}>&lt;/body&gt;</span><br />
                </div>
                <div className="main-img-container">
                    <img src={image} alt="Picture of srinivas M"></img>
                </div>
            </div>
        </>
    );
}