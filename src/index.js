import React, { useState } from 'react';
import { jsPDF } from 'jspdf';
import html2canvas from 'html2canvas';
import styled from 'styled-components';

// Styled components
const CertificateContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
`;

const CertificateBorder = styled.div`
  width: 80%;
  max-width: 900px;
  padding: 40px;
  border-radius: 10px;
  background: linear-gradient(135deg, #d1c4e9, #9575cd);
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
  text-align: center;
  border: 8px solid #673ab7;
  overflow: hidden;
`;

const CertificateHeader = styled.div`
  margin-bottom: 40px;
`;

const CertificateTitle = styled.h1`
  font-size: 40px;
  font-family: 'Georgia', serif;
  color: #ffffff;
  font-weight: bold;
  text-transform: uppercase;
  margin-bottom: 20px;
`;

const CertificateBody = styled.div`
  margin-bottom: 40px;
  padding: 20px;
`;

const CertificateText = styled.p`
  font-size: 22px;
  font-family: 'Arial', sans-serif;
  color: #ffffff;
  margin: 10px 0;
`;

const CertificateName = styled.h2`
  font-size: 50px;
  font-family: 'Georgia', serif;
  font-weight: bold;
  color: #fff;
  margin: 10px 0;
`;

const CertificateCourse = styled.h3`
  font-size: 30px;
  font-style: italic;
  color: #ffffff;
  margin: 10px 0;
`;

const CertificateFooter = styled.div`
  margin-top: 50px;
`;

const CertificateDate = styled.p`
  font-size: 22px;
  font-family: 'Arial', sans-serif;
  color: #ffffff;
  margin-bottom: 30px;
`;

const SignatureSection = styled.div`
  margin-top: 20px;
  text-align: center;
`;

const SignatureLine = styled.div`
  width: 200px;
  height: 2px;
  background-color: #ffffff;
  margin: 0 auto;
`;

const SignatureText = styled.p`
  font-size: 18px;
  color: #ffffff;
  margin-top: 5px;
  font-style: italic;
  text-transform: uppercase;
`;

const CompanyLogo = styled.img`
  max-width: 100px;
  margin-top: 20px;
  display: block;
  margin-left: auto;
  margin-right: auto;
`;

const DownloadButtons = styled.div`
  margin-top: 20px;
  text-align: center;
`;

const DownloadButton = styled.button`
  margin: 10px;
  padding: 10px 20px;
  font-size: 18px;
  background-color: #673ab7;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #5e35b1;
  }

  &:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }
`;

const Certificate = ({ name, course, date, companyName, companyLogo }) => {
  const [loading, setLoading] = useState(false);
  const [buttonsVisible, setButtonsVisible] = useState(true); // state for controlling button visibility

  // تابع دانلود PDF
  const downloadPDF = () => {
    setLoading(true);
    setButtonsVisible(false); // hide buttons

    const certificateElement = document.getElementById("certificate");

    // مخفی کردن دکمه‌ها از DOM برای مخفی کردن آنها در هنگام اسکرین‌شات
    const buttons = document.querySelectorAll(".download-buttons button");
    buttons.forEach(button => button.style.display = 'none');

    html2canvas(certificateElement).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");

      // تنظیم PDF به صورت افقی و ابعاد مناسب
      const doc = new jsPDF('landscape', 'px', 'a4');
      doc.addImage(imgData, 'PNG', 10, 10, 570, 320);  // ابعاد مناسب برای 80 درصد از صفحه
      doc.save('certificate.pdf');

      // نمایش دوباره دکمه‌ها پس از دانلود
      setTimeout(() => {
        buttons.forEach(button => button.style.display = 'block');
        setButtonsVisible(true); // show buttons after download
        setLoading(false);
      }, 10000); // 10 seconds delay
    });
  };

  // تابع دانلود Image
  const downloadImage = () => {
    setLoading(true);
    setButtonsVisible(false); // hide buttons

    const certificateElement = document.getElementById("certificate");

    // مخفی کردن دکمه‌ها از DOM برای مخفی کردن آنها در هنگام اسکرین‌شات
    const buttons = document.querySelectorAll(".download-buttons button");
    buttons.forEach(button => button.style.display = 'none');

    html2canvas(certificateElement).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const link = document.createElement('a');
      link.href = imgData;
      link.download = 'certificate.png';
      link.click();

      // نمایش دوباره دکمه‌ها پس از دانلود
      setTimeout(() => {
        buttons.forEach(button => button.style.display = 'block');
        setButtonsVisible(true); // show buttons after download
        setLoading(false);
      }, 10000); // 10 seconds delay
    });
  };

  return (
    <CertificateContainer>
      <CertificateBorder id="certificate">
        <CertificateHeader>
          <CertificateTitle>Certificate of Achievement</CertificateTitle>
        </CertificateHeader>

        <CertificateBody>
          <CertificateText>This certifies that</CertificateText>
          <CertificateName>{name || 'John Doe'}</CertificateName>
          <CertificateText>Has successfully completed the course</CertificateText>
          <CertificateCourse>{course || 'React for Beginners'}</CertificateCourse>
          <CertificateText>With excellent performance</CertificateText>

          {companyName && <CertificateText>Issued by: {companyName}</CertificateText>}
          {companyLogo && <CompanyLogo src={companyLogo} alt="Company Logo" />}
          
          <CertificateFooter>
            <CertificateDate>Date: <strong>{date || 'December 2024'}</strong></CertificateDate>
            <SignatureSection>
              <SignatureLine />
              <SignatureText>Signature</SignatureText>
            </SignatureSection>
            <SignatureSection>
              <SignatureLine />
              <SignatureText>Authorized Person</SignatureText>
            </SignatureSection>
          </CertificateFooter>
        </CertificateBody>

        {/* دکمه‌های دانلود */}
        {buttonsVisible && (
          <DownloadButtons>
            <DownloadButton onClick={downloadPDF} disabled={loading}>
              {loading ? 'Processing...' : 'Download as PDF'}
            </DownloadButton>
            <DownloadButton onClick={downloadImage} disabled={loading}>
              {loading ? 'Processing...' : 'Download as Image'}
            </DownloadButton>
          </DownloadButtons>
        )}
      </CertificateBorder>
    </CertificateContainer>
  );
};

export default Certificate;
