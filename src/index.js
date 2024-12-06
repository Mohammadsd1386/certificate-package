import React from 'react'
import './styles.module.css'

// Certificate.js
const Certificate = ({ name, course, date, companyName, companyLogo }) => {
  return (
    <div className="certificate-container">
      <div className="certificate-border">
        <div className="certificate-header">
          <h1 className="certificate-title">Certificate of Achievement</h1>
        </div>

        <div className="certificate-body">
          <p className="certificate-text">This certifies that</p>
          <h2 className="certificate-name">{name || 'John Doe'}</h2>
          <p className="certificate-text">Has successfully completed the course</p>
          <h3 className="certificate-course">{course || 'React for Beginners'}</h3>
          <p className="certificate-text">With excellent performance</p>

          {companyName && <p className="certificate-text">Issued by: {companyName}</p>}
          {companyLogo && <img src={companyLogo} alt="Company Logo" className="company-logo" />}

          <div className="certificate-footer">
            <p className="certificate-date">Date: <strong>{date || 'December 2024'}</strong></p>
            <div className="signature-section">
              <div className="signature-line"></div>
              <p className="signature-text">Signature</p>
            </div>
            <div className="signature-section">
              <div className="signature-line"></div>
              <p className="signature-text">Authorized Person</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Certificate;
