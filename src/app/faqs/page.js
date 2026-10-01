"use client";
import { useState } from 'react';

const faqsData = [
  {
    category: "General",
    questions: [
      { q: "What is HRMS software and what are its primary benefits?", a: "Shenll HRMS is a Human Resource Management System designed to manage employee operations from a single platform. It helps businesses automate attendance, leave, payroll, employee records, task management, reports, and workforce operations. The primary benefits include reduced manual work, improved accuracy, centralized employee data, faster HR processes, and better workforce visibility through dashboards and analytics." },
      { q: "How do I choose the right HRMS software for a mid-sized IT company?", a: "A mid-sized IT company should look for an HRMS that supports scalability, role-based access, attendance automation, payroll processing, project and task tracking, employee self-service, and customizable workflows. Shenll HRMS is built to adapt to growing teams and operational workflows while providing both web and mobile access for employees and administrators." },
      { q: "Is Shenll HRMS an affordable HRMS software solution in India?", a: "Shenll HRMS offers flexible pricing suitable for startups, growing businesses, and enterprise organizations. Businesses can start with core HR modules and scale gradually by adding more employees, advanced modules, or custom workflows based on operational needs." },
      { q: "Can employees access the system from mobile?", a: "Yes. Shenll HRMS provides mobile app access for employees to manage attendance, leave requests, tasks, approvals, notifications, payslips, and other employee self-service features from anywhere." },
      { q: "Can the software be customized based on our company workflow?", a: "Yes. Shenll HRMS supports customizable workflows, approval structures, role permissions, attendance policies, payroll rules, and dashboard configurations based on company operations and internal processes." },
      { q: "Can the system scale as our company grows?", a: "Yes. The platform is designed to support growing organizations with scalable employee management, modular features, additional user access, and enterprise-level customization options." },
      { q: "Can reports and dashboards be customized for management needs?", a: "Yes. HR teams and management can configure reports, dashboards, KPIs, filters, and analytics views based on departments, projects, attendance, payroll, performance, and operational requirements." },
      { q: "Does the software adapt to different industries and business types?", a: "Yes. Shenll HRMS is suitable for industries including Information Technology (IT), manufacturing, construction, logistics, healthcare, retail, engineering, education, and service-based organizations. The system can be configured according to industry-specific workflows and policies." }
    ]
  },
  {
    category: "Attendance",
    questions: [
      { q: "Can attendance sync automatically with payroll?", a: "Yes. Attendance data such as working hours, overtime, late entries, absences, and leave records can automatically sync with payroll calculations to reduce manual processing." },
      { q: "Can employees check their leave balance and apply online?", a: "Yes. Employees can view available leave balances, submit leave requests, track approval status, and view leave history directly through the web portal or mobile application." },
      { q: "Can overtime and late entries be calculated automatically?", a: "Yes. Shenll HRMS can automatically calculate overtime, shift timings, late arrivals, early exits, and attendance deviations based on configured company rules and policies." },
      { q: "Does Shenll HRMS auto-flag suspicious attendance patterns like ghost workers or repeated late-comers?", a: "Yes. The system can identify abnormal attendance behaviors such as repeated late entries, missing check-ins, unusual attendance activity, or inconsistent work patterns through attendance monitoring and reporting features." }
    ]
  },
  {
    category: "Leave Management",
    questions: [
      { q: "Is leave management suitable for both small and large companies?", a: "Yes. Shenll HRMS supports leave management for startups, mid-sized businesses, and enterprise organizations with configurable leave policies, approval workflows, and department-specific rules." },
      { q: "What is leave management and how does it work?", a: "Leave management is the process of tracking employee leave requests, balances, approvals, holidays, and attendance impact. Employees apply for leave through the system, managers approve or reject requests, and balances update automatically based on company policy." },
      { q: "Can leave approvals be managed completely online?", a: "Yes. Managers and HR teams can review, approve, reject, or escalate leave requests digitally through the web application or mobile app." },
      { q: "Does Shenll HRMS support multiple leave types and policies?", a: "Yes. The system supports casual leave, sick leave, earned leave, maternity leave, loss of pay (LOP), compensatory off, and custom leave policies based on company requirements." }
    ]
  },
  {
    category: "Payroll",
    questions: [
      { q: "Does Shenll HRMS support PF, ESI, PT, and TDS calculations?", a: "Yes. Shenll HRMS supports payroll configurations for Provident Fund (PF), Employee State Insurance (ESI), Professional Tax (PT), Tax Deducted at Source (TDS), and other salary components based on company policies and regional compliance requirements." },
      { q: "Can salary structures and payroll policies be customized?", a: "Yes. HR teams can configure salary structures, pay grades, allowances, deductions, overtime rules, incentives, reimbursements, and approval workflows according to company policies." },
      { q: "Can allowances, deductions, incentives, and overtime rules be configured?", a: "Yes. Payroll administrators can create custom payroll components and define calculation rules for allowances, deductions, overtime, bonuses, incentives, and reimbursements." },
      { q: "Can payslips be shared automatically through email, mobile app, or employee portal?", a: "Yes. Payslips can be securely distributed to employees through email notifications, employee self-service portals, and mobile applications." },
      { q: "Can payroll reports and salary analytics be generated?", a: "Yes. Shenll HRMS provides payroll summaries, salary reports, deduction reports, compliance reports, and employee payroll analytics for management and finance teams." }
    ]
  },
  {
    category: "Projects & Tasks",
    questions: [
      { q: "Does Shenll HRMS include project and task management?", a: "Yes. Professional and enterprise plans include project management, task tracking, workload monitoring, project progress tracking, and team collaboration tools." },
      { q: "Can project progress be tracked in real time?", a: "Yes. Managers can monitor project completion percentage, milestones, sprint progress, overdue tasks, workload distribution, and task completion analytics through dashboards and reports." },
      { q: "Can tasks have custom stages and workflows?", a: "Yes. Task stages, workflows, priorities, and approval flows can be fully customized according to project methodology and business operations." }
    ]
  },
  {
    category: "Security & Support",
    questions: [
      { q: "Is employee data secure in Shenll HRMS?", a: "Yes. Shenll HRMS uses secure cloud infrastructure, role-based access control, encrypted communication, and controlled permissions to help protect employee and company data." },
      { q: "Does Shenll HRMS provide onboarding and setup support?", a: "Yes. The Shenll team provides implementation guidance, onboarding assistance, setup support, and workflow configuration based on business requirements." },
      { q: "Is training available for employees and administrators?", a: "Yes. Training and support can be provided for administrators, HR teams, managers, and employees to ensure smooth adoption of the platform." },
      { q: "What support channels are available?", a: "Support may include email support, ticket-based assistance, onboarding guidance, and priority support options depending on the selected plan." }
    ]
  }
];

export default function FAQs() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredData = faqsData.map(group => {
    // If a specific category is selected and doesn't match this group, skip it (unless 'All')
    if (activeCategory !== 'All' && group.category !== activeCategory) {
      return { ...group, questions: [] };
    }
    
    // Filter questions by search query
    const filteredQuestions = group.questions.filter(q => 
      q.q.toLowerCase().includes(searchQuery.toLowerCase()) || 
      q.a.toLowerCase().includes(searchQuery.toLowerCase())
    );
    
    return { ...group, questions: filteredQuestions };
  }).filter(group => group.questions.length > 0);

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
            <h2>Frequently Asked Questions</h2>
            <p>Find answers about implementation, payroll, attendance, employee lifecycle management, mobile access, AI-powered automation, and support.</p>
          </div>
          
          <div style={{maxWidth: '800px', margin: '0 auto 40px'}}>
             <div style={{display: 'flex', border: '1px solid var(--ln)', borderRadius: '99px', padding: '6px 12px', background: 'var(--sf)'}}>
               <input 
                 type="text" 
                 placeholder="Search questions..." 
                 value={searchQuery}
                 onChange={(e) => setSearchQuery(e.target.value)}
                 style={{border: 'none', background: 'transparent', outline: 'none', width: '100%', padding: '8px', fontSize: '16px', color: 'var(--ink)'}}
               />
             </div>
          </div>

          <div className="tabs" style={{justifyContent: 'center', marginBottom: '40px'}}>
             <button className="tab" aria-selected={activeCategory === 'All'} onClick={() => setActiveCategory('All')}>All</button>
             {faqsData.map(group => (
               <button key={group.category} className="tab" aria-selected={activeCategory === group.category} onClick={() => setActiveCategory(group.category)}>
                 {group.category}
               </button>
             ))}
          </div>

          <div className="faq facc" style={{maxWidth: '800px', margin: '0 auto'}}>
            {filteredData.length === 0 ? (
              <div style={{textAlign: 'center', padding: '40px', color: 'var(--mu)'}}>
                <h3>No questions found</h3>
                <p>Try adjusting your search criteria.</p>
              </div>
            ) : (
              filteredData.map((group, gIdx) => (
                <div key={gIdx} style={{marginBottom: '40px'}}>
                   <h3 style={{fontSize: '22px', borderBottom: '1px solid var(--ln)', paddingBottom: '12px', marginBottom: '20px', color: 'var(--ink)'}}>{group.category}</h3>
                   {group.questions.map((faq, i) => (
                     <details key={i} style={{marginBottom: '12px'}}>
                       <summary>{faq.q}</summary>
                       <p>{faq.a}</p>
                     </details>
                   ))}
                </div>
              ))
            )}
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
