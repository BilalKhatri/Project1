import React from "react";
import "./Contact.css";
import msg_icon from "../../Assets/msg-icon.png";
import mail_icon from "../../Assets/mail-icon.png";
import tele_icon from "../../Assets/phone-icon.png";
import address_icon from "../../Assets/location-icon.png";
import white_icon from "../../Assets/white-arrow.png";

const Contact = () => {

    const [result, setResult] = React.useState("");

    const onSubmit = async (event) => {
      event.preventDefault();
      setResult("Sending....");
      const formData = new FormData(event.target);
  
      formData.append("access_key", "YOUR_ACCESS_KEY_HERE");
  
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
  
      const data = await response.json();
  
      if (data.success) {
        setResult("Form Submitted Successfully");
        event.target.reset();
      } else {
        console.log("Error", data);
        setResult(data.message);
      }
    }
  return (
    <div className="contact">
      <div class="contact-col">
        <h3>
          Send us a message <img src={msg_icon} alt="" />
        </h3>
        <p>
          Feel free to reach out through contact form or find our contact
          information below. Your feedback, questions, and suggestions are
          important to us as we strive to provide exceptional service to our
          university community.
        </p>
        <ul>
          <li>
            <img src={mail_icon} alt="" />
            Contact@GreatStack.dev
          </li>
          <li>
            <img src={tele_icon} alt="" />
            +1 123-456-7890
          </li>
          <li>
            <img src={address_icon} alt="" />
            77 Massachusetts Ave, Cambridge
            <br /> MA 02139, United States
          </li>
        </ul>
      </div>

      <div className="contact-col">
        <form onSubmit={onSubmit}>
          <label>Your name</label>
          <input type="text" name="name" placeholder="Enter your name" required="" />
          <label>Phone Number</label>
          <input type="tel" name="phone" placeholder="Enter your mobile number" required="" />
          <label>Your Email</label>
          <input type="email" name="email" placeholder="Enter your email id" required="" />
          <label>Write your messages here</label>
          <textarea name="message" rows="6" placeholder="Enter your message"
            required=""
          ></textarea>
          <button type="submit" class="btn dark-btn submit-btn">Submit now <img src={white_icon} alt="" /></button>
        </form>
        <span>{result}</span>
      </div>
    </div>
  );
};

export default Contact;
