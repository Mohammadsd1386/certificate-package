import React, { useState } from 'react';
import { jsPDF } from 'jspdf';
import html2canvas from 'html2canvas';
import './style.css'; 

const Certificate = ({ name, course, date, companyName, companyLogo }) => {
  const [loading, setLoading] = useState(false);

  // تابع دانلود PDF
  const downloadPDF = () => {
    setLoading(true);
    const certificateElement = document.getElementById("certificate");

    // مخفی کردن دکمه‌ها
    const buttons = document.querySelectorAll(".download-buttons button");
    buttons.forEach(button => button.style.display = 'none');

    html2canvas(certificateElement).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const doc = new jsPDF();
      doc.addImage(imgData, 'PNG', 10, 10);
      doc.save('certificate.pdf');

      // نمایش مجدد دکمه‌ها پس از دانلود
      buttons.forEach(button => button.style.display = 'block');
      setLoading(false);
    });
  };

  // تابع دانلود Image
  const downloadImage = () => {
    setLoading(true);
    const certificateElement = document.getElementById("certificate");

    // مخفی کردن دکمه‌ها
    const buttons = document.querySelectorAll(".download-buttons button");
    buttons.forEach(button => button.style.display = 'none');

    html2canvas(certificateElement).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const link = document.createElement('a');
      link.href = imgData;
      link.download = 'certificate.png';
      link.click();

      // نمایش مجدد دکمه‌ها پس از دانلود
      buttons.forEach(button => button.style.display = 'block');
      setLoading(false);
    });
  };

  return (
    <div className="certificate-container">
      <div className="certificate-border" id="certificate">
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

        {/* دکمه‌های دانلود */}
        <div className="download-buttons">
          <button onClick={downloadPDF} disabled={loading}>
            {loading ? 'Processing...' : 'Download as PDF'}
          </button>
          <button onClick={downloadImage} disabled={loading}>
            {loading ? 'Processing...' : 'Download as Image'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Certificate;
