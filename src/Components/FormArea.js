import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { submitForm } from "../hooks/formapi.js"; 

const FormArea = () => {
    const [formData, setFormData] = useState({
        formType: "offer",
        companyName: "",
        email: "",
        phone: "",
        productDetails: {},
        message: "",
    });

    const [isOpen, setIsOpen] = useState({
        select1: false,
        select2: false,
        select3: false,
    });

    const toggleOpen = (key) => {
        setIsOpen((prev) => ({
            ...prev,
            [key]: !prev[key],
        }));
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleProductChange = (e) => {
        setFormData({
            ...formData,
            productDetails: { ...formData.productDetails, [e.target.name]: e.target.value },
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await submitForm(formData);
            alert("The offer form has been successfully submitted!");
            setFormData({
                formType: "offer",
                companyName: "",
                email: "",
                phone: "",
                productDetails: {},
                message: "",
            });
        } catch (error) {
            alert("Error sending the form.");
        }
    };

    return (
        <div className="form-area">
            <div className="container form-container">
                <h2>Get Offer</h2>
                <div className="form-title">
                    <h3>Company Information</h3>
                    <h3>Product Information</h3>
                </div>
                <form onSubmit={handleSubmit}>
                    <div className="form-input-area">
                        <div className="form-group">
                            <input type="text" className="company-input" name="companyName" id="firmaAdi" placeholder="Company Name" value={formData.companyName} onChange={handleChange} required />
                            <input type="email" className="mail-input" name="email" id="mail" placeholder="E-mail" value={formData.email} onChange={handleChange} required />
                            <input type="text" className="phone-input" name="phone" id="phone" placeholder="Phone Number" value={formData.phone} onChange={handleChange} required />
                        </div>

                        <div className="form-group">
                            <div className="custom-select">
                                <select onFocus={() => toggleOpen("select1")} onBlur={() => toggleOpen("select1")} name="generatorPower" id="urunBilgisi" onChange={handleProductChange} required>
                                    <option value="" disabled selected>Generator Power (kVa)</option>
                                    <option value="10kVa">10 kVa</option>
                                    <option value="20kVa">20 kVa</option>
                                    <option value="50kVa">50 kVa</option>
                                </select>
                                <FontAwesomeIcon icon={faAngleDown} className={isOpen.select1 ? "rotate" : ""} />
                            </div>

                            <div className="custom-select">
                                <select onFocus={() => toggleOpen("select2")} onBlur={() => toggleOpen("select2")} name="generatorEngine" id="urunBilgisi" onChange={handleProductChange} required>
                                    <option value="" disabled selected>Generator Engine</option>
                                    <option value="perkins">Perkins</option>
                                    <option value="cummins">Cummins</option>
                                </select>
                                <FontAwesomeIcon icon={faAngleDown} className={isOpen.select2 ? "rotate" : ""} />
                            </div>

                            <div className="custom-select">
                                <select onFocus={() => toggleOpen("select3")} onBlur={() => toggleOpen("select3")} name="generatorHz" id="urunBilgisi" onChange={handleProductChange} required>
                                    <option value="" disabled selected>Generator Hz</option>
                                    <option value="50Hz">50 Hz</option>
                                    <option value="60Hz">60 Hz</option>
                                </select>
                                <FontAwesomeIcon icon={faAngleDown} className={isOpen.select3 ? "rotate" : ""} />
                            </div>
                        </div>
                    </div>

                    <div className="form-group">
                        <input className="message-input" name="message" id="message" placeholder="Message" value={formData.message} onChange={handleChange} required />
                    </div>
                    <button className="form-button" type="submit">Send</button>
                </form>
            </div>
        </div>
    );
};

export default FormArea;
