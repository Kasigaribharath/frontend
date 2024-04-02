import React from 'react';

const LegalInformation = () => {
  const companyName = "Agent Esports";

  return (
    <div className='bg-dark text-white p-3'>
      <h1>Legal Information</h1>
      
      <section>
        <h3>Conditions of Use</h3>
        <p>Welcome to {companyName}. By accessing or using this website, you confirm that you are at least 18 years old. If you are under 18 years of age, you are not eligible to use this website. If you continue to browse and use this website, you are agreeing to comply with and be bound by the following terms and conditions of use. If you disagree with any part of these terms and conditions, please do not use our website.</p>
        <p>1. By accessing or using this website, you agree to be bound by these Terms and Conditions, all applicable laws, and regulations, and agree that you are responsible for compliance with any applicable local laws. If you do not agree with any of these terms, you are prohibited from using or accessing this site.</p>
        <p>2. In order to access certain features of the website, you may be required to register an account. When registering, you agree to provide accurate and complete information. You are solely responsible for maintaining the confidentiality of your account and password and for restricting access to your computer. You agree to accept responsibility for all activities that occur under your account or password.</p>
        {/* Add more conditions of use as needed */}
      </section>
      
      <section>
        <h3>Privacy Notice</h3>
        <p>This Privacy Notice explains how {companyName} collects, uses, and protects your personal information when you use our website. We are committed to protecting your privacy and ensuring the security of your personal data.</p>
        <p>We may collect personal information such as your name, email address, and contact information when you register an account or subscribe to our newsletter. We use this information to improve our services, personalize your experience, and communicate with you about our products and promotions.</p>
        {/* Add more privacy notice content as needed */}
      </section>
      
      <section>
        <h3>Disclaimers</h3>
        <p>This website and its contents are provided "as is" without any representations or warranties, express or implied. {companyName} makes no representations or warranties in relation to this website or the information and materials provided on this website.</p>
        {/* Add more disclaimer content as needed */}
      </section>
      
      <section>
        <h3>Community Guidelines</h3>
        <p>Our Community Guidelines outline acceptable behavior for users of our website. We reserve the right to remove content and suspend accounts for violations of these guidelines.</p>
        {/* Add more community guidelines content as needed */}
      </section>
      
      <section>
        <h3>Payment Terms</h3>
        <p>When making purchases on our website, you agree to abide by our payment terms and refund policies. Payments are processed securely through our payment partners.</p>
        {/* Add more payment terms content as needed */}
      </section>
      
      <section>
        <h3>Contact Information</h3>
        <p>If you have any questions or concerns about our legal documents or practices, please contact us at legal@agentesports.com.</p>
        {/* Add more contact information content as needed */}
      </section>
      
      <section>
        <h3>Updates and Modifications</h3>
        <p>We reserve the right to update or modify our legal documents at any time. Please check back periodically for updates. Your continued use of our website constitutes acceptance of any changes.</p>
        {/* Add more updates and modifications content as needed */}
      </section>
    </div>
  );
}

export default LegalInformation;
