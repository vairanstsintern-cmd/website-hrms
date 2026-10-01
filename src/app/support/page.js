export default function Support() {
  return (
    <>
      <header>
        <div className="w nav">
          <a className="logo" href="/" style={{fontWeight: 'bold', fontSize: '24px', textDecoration: 'none', color: 'var(--ink)'}}>
            Shenll HRMS
          </a>
          <nav aria-label="Main"><ul><li><a href="/">Home</a></li></ul></nav>
        </div>
      </header>
      <main style={{paddingTop: '120px', paddingBottom: '80px', minHeight: '80vh'}}>
        <div className="w">
          <div className="hd" style={{textAlign: 'center', margin: '0 auto 40px'}}>
            <h2>Support Center – Shenll HRMS</h2>
          </div>
          <div style={{color: 'var(--ink)', lineHeight: '1.8', maxWidth: '800px', margin: '0 auto', fontSize: '15.5px'}}>
            <p style={{marginBottom: '16px'}}>Welcome to the Shenll HRMS Support Center. At Shenll HRMS, we aim to provide responsive operational support, onboarding assistance, and technical guidance to help organizations manage their HRMS workflows efficiently.</p>
            <p style={{marginBottom: '16px'}}>Our support services are intended to help customers with platform usage, configuration guidance, troubleshooting, operational assistance, and general service-related inquiries.</p>

            <h4 style={{marginTop: '32px', marginBottom: '16px', fontSize: '18px', fontWeight: 'bold'}}>Support Services</h4>
            <p style={{marginBottom: '8px'}}>Shenll HRMS may provide assistance related to:</p>
            <ul style={{marginBottom: '24px', listStyleType: 'disc', paddingLeft: '20px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px'}}>
              <li>Platform onboarding</li>
              <li>User account support</li>
              <li>Attendance workflows</li>
              <li>Payroll configuration guidance</li>
              <li>Leave management setup</li>
              <li>Employee management workflows</li>
              <li>Reporting assistance</li>
              <li>Mobile application support</li>
              <li>Technical troubleshooting</li>
              <li>General operational guidance</li>
            </ul>
            <p style={{marginBottom: '16px'}}>Support scope may vary depending on subscription plans, service agreements, and organizational requirements.</p>

            <h4 style={{marginTop: '32px', marginBottom: '16px', fontSize: '18px', fontWeight: 'bold'}}>Support Channels</h4>
            <p style={{marginBottom: '16px'}}>Customers and users may contact the Shenll HRMS support team through available communication channels including email, ticketing systems, customer communication platforms, or authorized business support channels.</p>
            <p style={{marginBottom: '8px'}}>Official support contacts:</p>
            <ul style={{marginBottom: '24px', listStyleType: 'none', padding: '0'}}>
              <li style={{marginBottom: '8px'}}>Shenll HRMS Official Website</li>
              <li style={{marginBottom: '8px'}}>Email: <a href="mailto:support@shenll.com" style={{color: 'var(--br)', textDecoration: 'none'}}>support@shenll.com</a></li>
            </ul>
            <p style={{marginBottom: '16px'}}>Additional support channels may be provided depending on customer plans, enterprise agreements, or onboarding arrangements.</p>

            <h4 style={{marginTop: '32px', marginBottom: '16px', fontSize: '18px', fontWeight: 'bold'}}>Support Availability</h4>
            <p style={{marginBottom: '16px'}}>Support response times and availability may vary depending on issue severity, subscription plans, business hours, operational workload, and infrastructure incidents.</p>
            <p style={{marginBottom: '16px'}}>Certain advanced support services, onboarding assistance, or dedicated operational support may be available only under specific commercial agreements or enterprise plans.</p>

            <h4 style={{marginTop: '32px', marginBottom: '16px', fontSize: '18px', fontWeight: 'bold'}}>Customer Responsibilities</h4>
            <p style={{marginBottom: '8px'}}>Customers are responsible for:</p>
            <ul style={{marginBottom: '24px', listStyleType: 'disc', paddingLeft: '20px'}}>
              <li>Providing accurate issue descriptions</li>
              <li>Managing authorized administrative users</li>
              <li>Maintaining internal operational processes</li>
              <li>Protecting login credentials</li>
              <li>Configuring organization-level settings appropriately</li>
            </ul>
            <p style={{marginBottom: '16px'}}>Efficient issue resolution may depend on customer cooperation, access permissions, and operational context.</p>

            <h4 style={{marginTop: '32px', marginBottom: '16px', fontSize: '18px', fontWeight: 'bold'}}>Feature Requests & Product Improvements</h4>
            <p style={{marginBottom: '16px'}}>Shenll HRMS continuously works to improve platform functionality, workflows, and user experience. Customers may submit feature suggestions, usability feedback, operational improvement ideas, or enhancement requests through available support channels.</p>
            <p style={{marginBottom: '16px'}}>Submission of feedback does not guarantee implementation timelines or feature availability.</p>

            <h4 style={{marginTop: '32px', marginBottom: '16px', fontSize: '18px', fontWeight: 'bold'}}>Operational Limitations</h4>
            <p style={{marginBottom: '16px'}}>While Shenll HRMS aims to provide reliable operational support and platform assistance, certain issues may depend on third-party services, customer infrastructure, internet connectivity, device configurations, external integrations, and customer-side operational practices.</p>
            <p style={{marginBottom: '16px'}}>Some operational limitations may be outside our direct control.</p>
          </div>
        </div>
      </main>
      <footer className="ft">
        <div className="w">
          <span>© 2026 Shenll HRMS. All rights reserved.</span>
          <div><a href="/faqs">FAQs</a><a href="/support">Support</a><a href="/security">Security</a><a href="/terms">Terms</a><a href="/privacy">Privacy</a></div>
        </div>
      </footer>
    </>
  );
}
