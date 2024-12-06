import React from 'react';
import Certificate from 'certificate-package';
// import 'certificate-package/dist/index.css';  // Import the default CSS for styling

const App = () => {
  return (
    <div>
      <h1>Certificate Generator</h1>
      <Certificate 
        name="Jane Smith"          // The name of the recipient
        course="Advanced React"    // The course name
        date="January 2025"        // Date of certificate issue
        companyName="Tech Solutions"  // The company issuing the certificate
        companyLogo="https://example.com/logo.png"  // The URL to the company logo image
      />
    </div>
  );
};

export default App;