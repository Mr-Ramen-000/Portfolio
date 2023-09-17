import { useState } from "react";
import styles from "./Contact.module.css";
import validator from "validator";

function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const checkEmail = validator.isEmail(formData.email.trim());

    if (
      checkEmail &&
      formData.message.length != 0 &&
      formData.name.length != 0
    ) {
      const mailtoLink = `mailto:macvillaflores000@gmail.com,ramengamingph@gmail.com?subject=${encodeURIComponent(
        "Message from web portfolio"
      )}&body=${encodeURIComponent(
        `Sender Name: ${formData.name} \nEmail: ${formData.email} \n\n${formData.message}`
      )}`;
      window.location.href = mailtoLink;
      setFormData({
        name: "",
        email: "",
        message: "",
      });
    } else {
      alert("Check your inputs");
    }
  };

  return (
    <section id="contact" className={styles.contactContainer}>
      <div className={styles.formContainer}>
        <form onSubmit={handleSubmit}>
          <div className={styles.heading}>
            <h1>Contact</h1>
            <p>Reach out to me using the form below.</p>
          </div>
          <div className={styles.inputs}>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Your name"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <textarea
              name="message"
              id="message"
              placeholder="Your message"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
          </div>

          <button type="submit">Send Message</button>
        </form>
      </div>
    </section>
  );
}

export default ContactSection;
