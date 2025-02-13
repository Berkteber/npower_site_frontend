import { useState } from "react";
import { submitForm } from "../hooks/formapi.js";

function Contact() {
  const [formData, setFormData] = useState({
    formType: "contact",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await submitForm(formData);
      alert("İletişim formu başarıyla gönderildi!");
      setFormData({ formType: "contact", email: "", phone: "", message: "" });
    } catch (error) {
      alert("Form gönderilirken hata oluştu.");
    }
  };

  return (
    <div className="contact-page">
      <div className="container contact">
        <div className="row">
          <div className="col-lg-6 col-12 contact-left">
            <h3>Bize Ulaşın</h3>
            <form className="p-0" onSubmit={handleSubmit}>
              <div className="form-group flex-column gap-0 p-0">
                <input type="email" className="mail-input mb-20" name="email" placeholder="E-mail" value={formData.email} onChange={handleChange} required />
                <input type="text" className="phone-input mb-20" name="phone" placeholder="Telefon" value={formData.phone} onChange={handleChange} required />
                <textarea className="message-input mb-20" name="message" placeholder="Sorularınız" value={formData.message} onChange={handleChange} required />
              </div>
              <button className="form-button w-100" type="submit">Gönder</button>
            </form>
          </div>
          <div className="col-lg-6 col-12 contact-right">
            <iframe src="https://www.google.com/maps/embed?..." title="Harita"></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
