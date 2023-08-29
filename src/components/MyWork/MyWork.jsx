import "./MyWork.css"
import Card from "./Card/Card"
import dailyJournal from "../../assets/works/daily-journal.png"; 
import weatherHub from "../../assets/works/weather-hub.png";
import loginForm from "../../assets/works/login-form.png";
import encrypt from "../../assets/works/img1.png";

export default function MyWork() {
    return (
        <>
            <div className="myworks">
                <span className="tag">&lt;h1&gt;</span><h1> My Works </h1><span className="tag">&lt;/h1&gt;</span>
                <div className="cards">
                    <Card imgURL ={dailyJournal} cardTitle="Daily Journal" 
                        cardContent = "Blog web app where people can post their contents and others will be able to view them.Built using NodeJs,EJS."
                        link = "https://github.com/srinivasmathi/Daily-Journal-WEBAPP"
                    />
                    <Card imgURL ={weatherHub} cardTitle="Weather Hub" 
                        cardContent = "Weather details and forecast by fetching data from external server.Built using ReactJs,NodeJs."
                        link = "https://github.com/srinivasmathi/Weather-Hub-Client"    
                    />
                    <Card imgURL ={loginForm} cardTitle="Login Form" 
                        cardContent = "Login form and register form with local and open authentication using passportJs"
                        link = "https://github.com/srinivasmathi/LogIn-signUp-Form"
                    />
                    <Card imgURL ={encrypt} cardTitle="Image Encryption" 
                        cardContent = "Image Encryption algorithm using chaotic maps"
                        link = "https://github.com/srinivasmathi/Image-Encryption-using-chaotic-maps"
                    />
                </div>
            </div>
        </>
    );
}