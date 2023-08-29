import "./Contact.css"
import "leaflet/dist/leaflet.css"
import {Icon} from "leaflet"
import icon from "../../assets/logos/user.png"
import { useRef } from "react"
import emailjs from "@emailjs/browser"
import { toast, ToastContainer } from "react-toastify"
import { MapContainer,Marker,Popup,TileLayer } from "react-leaflet";
import 'react-toastify/dist/ReactToastify.css';

export default function Contact() {

    const customIcon = new Icon({
        iconUrl : icon,
        iconSize : [38,38]
    });

    const Form = useRef();

    const sendEmail = (e) => {

        e.preventDefault();

        emailjs.sendForm(process.env.REACT_APP_SERVICE_ID,process.env.REACT_APP_TEMPLATE_ID, Form.current, "H9PKiMK9i-T1nSA9X")
          .then((result) => {
              console.log("Email sent successfully");
              toast.success('🦄 Email sent successfully', {
                position: "bottom-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                });
                const form = document.getElementById('form');
                form.reset();
          }, (error) => {
              console.log("Email submission failed");
              toast.error('Message Not Sent!', {
                position: "bottom-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                });
          });
      };

    return (
        <>
            <div className="contact">
                <div className="contact-form">
                    <span className="tag">&lt;body&gt;</span><br />
                        <span style={{marginLeft : "20px"}} className="tag">&lt;h1&gt;</span>
                        <h1>Contact Me</h1>
                        <span className="tag">&lt;/h1&gt;</span><br />
                        <span style={{marginLeft : "20px"}} className="tag">&lt;form class="Feel-free-to-reach-out" &gt;</span><br />
                        <form id="form" ref={Form} onSubmit={sendEmail}>
                            <input type="text" name="name" placeholder="Name" required/>
                            <input type="email" name="email" placeholder="Email" required/>
                            <input type="text" name="subject" placeholder="subject" required/>
                            <textarea name="message" placeholder="Message" rows="30" cols="10" required/>
                            <button type="submit">Submit</button>
                        </form>
                        <span style={{marginLeft : "20px"}} className="tag">&lt;form&gt;</span><br />
                    <span className="tag">&lt;/body&gt;</span><br />
                </div>
                <div className="map-container">
                    <MapContainer center={[10.7285, 79.0184]} zoom={13} className="map-main">
                        <TileLayer
                            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        />
                        <Marker position={[10.7285, 79.0184]} icon={customIcon}>
                            <Popup>
                            Hi There, <br /> I live here.
                            </Popup>
                        </Marker>
                    </MapContainer>
                </div>
                <ToastContainer
                    position="bottom-right"
                    autoClose={5000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                    theme="light"
                    />
            </div>
        </>
    );
}