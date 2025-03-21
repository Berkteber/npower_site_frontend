import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone } from '@fortawesome/free-solid-svg-icons';

const ServicesArea = ({ services }) => {
  if (!services || services.length === 0) return null;

  return (
    <div className="services-area">
      <div className="container services">
        <h2>Products & Services</h2>
        <div className="services-grid">
          {services.map((service, index) => (
            <div
              key={service.id}
              className={`services-item ${index % 2 === 0 ? 'services-item-left' : 'services-item-right'}`}
            >
              {index % 2 === 0 && <img src={service.img} alt={service.title} />}
              <div className="services-content">
                <h4>{service.title}</h4>
                <p>{service.description}</p>
                <Link to={service.link}>Detailed Information</Link>
              </div>
              {index % 2 !== 0 && <img src={service.img} alt={service.title} />}
            </div>
          ))}
        </div>
        <div className="services-contact">
          <p>Do you have questions?</p>
          <Link to="/contact">
            Let us call you <FontAwesomeIcon icon={faPhone} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ServicesArea;
