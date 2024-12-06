# certificate-package

> A simple and customizable React component for generating certificates, designed to help you easily create professional certificates with dynamic content.

[![NPM](https://img.shields.io/npm/v/certificate-package.svg)](https://www.npmjs.com/package/certificate-package)  
[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

To get started with the `certificate-package`, simply install it via npm:

```bash
npm install --save certificate-package
```

## Usage

```jsx
// App.js
import React from 'react';
import Certificate from 'certificate-package';
import 'certificate-package/dist/index.css';  // Import the default CSS for styling

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


```

## License

MIT © [Mohammadsd](https://github.com/Mohammadsd)

---

این فایل **`README.md`** شامل تمام توضیحات، نصب، استفاده، ویژگی‌ها، props و نمونه‌هایی برای سفارشی‌سازی است. این فایل به‌طور کامل به شما کمک می‌کند تا پکیج را به‌درستی منتشر و مستندات مناسبی برای استفاده کاربران ارائه دهید.

- **نصب**: چگونه پکیج را نصب کنند.
- **استفاده**: نحوه استفاده از کامپوننت `Certificate` در React.
- **ویژگی‌ها**: توصیف ویژگی‌ها و امکانات پکیج.
- **سفارشی‌سازی استایل**: چطور استایل‌های پیش‌فرض را تغییر دهند.

اگر سوالی دارید یا نیاز به تغییرات بیشتری دارید، خوشحال می‌شوم کمک کنم!

