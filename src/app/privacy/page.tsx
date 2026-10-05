import type { Metadata } from "next";
import Link from "next/link";
import LegalTableOfContents from "@/app/components/LegalTableOfContents";

export const metadata: Metadata = {
  title: "Privacy Policy | BRH - Business Review Helper",
  description:
    "Learn how BRH (Business Review Helper) and Gelora Tech collect, use, and protect your business review data and customer feedback information. Your business privacy is our top priority.",
};

export default function PrivacyPolicyPage() {
  const appName = "BRH";
  const appFullName = "Business Review Helper";
  const companyName = "Gelora Tech";
  const contactEmail = "brh@geloratech.com";

  const sections = [
    {
      id: "introduction",
      title: "1. Introduction",
      content: [
        `${companyName} ("we", "our", or "us") operates ${appFullName} (${appName}) — a QR-powered customer review management platform. We are deeply committed to safeguarding the privacy and confidentiality of your business data and customer feedback records.`,
        `This Privacy Policy outlines how we collect, process, store, and safeguard your data when you use the ${appName} platform, website, QR tools, and related review management services.`,
        `This policy is formulated in compliance with the Information Technology Act, 2000, the Information Technology (Reasonable Security Practices and Procedures and Sensitive Personal Data or Information) Rules, 2011, the Digital Personal Data Protection Act, 2023, and other applicable Indian regulations.`,
        `By accessing or using ${appName}, you agree to the practices described in this Privacy Policy. If you do not agree, please discontinue using the platform.`,
      ],
    },
    {
      id: "information-we-collect",
      title: "2. Information We Collect",
      content: [
        `2.1 Account & Business Profile: When you register for ${appName}, we collect your name, business/shop name, email address, and contact number to set up and manage your account and QR-linked business profile.`,
        `2.2 QR & Review Activity Data: We collect data related to QR scans (timestamp, device type, scan count), customer feedback ratings submitted through the QR flow, written feedback entered by your customers, and data on whether customers were routed to Google Reviews or the private feedback form.`,
        `2.3 Device & Usage Information: We collect technical diagnostic information such as your device model, operating system version, IP address, app performance logs, and interaction patterns to ensure smooth platform performance and security.`,
        `2.4 Customer Feedback Content: When your customers scan your QR code and submit feedback, we collect their rating, written comments, and optionally their contact details (if they choose to provide them). This data is stored securely and accessible only through your account dashboard.`,
      ],
    },
    {
      id: "how-we-use",
      title: "3. How We Use Your Information",
      content: [
        `We use the collected information exclusively to provide, maintain, and enhance your review management experience:`,
        `Review Management & Routing: To intelligently route satisfied customers to your Google review page and capture negative feedback privately through our internal feedback form, helping protect and grow your online reputation.`,
        `Analytics & Reporting: To generate your review performance dashboard, QR scan analytics, feedback trends, and downloadable reports for your business insights.`,
        `Account & QR Management: To maintain your business profile, generate and manage your unique QR codes, and ensure they remain linked correctly to your Google Business listing.`,
        `Customer Support & Updates: To assist you with troubleshooting, respond to inquiries, and notify you about critical platform updates, new features, and security advisories.`,
        `Security & Fraud Prevention: To detect unauthorized access, prevent QR code misuse, and protect the integrity of your review data.`,
      ],
    },
    {
      id: "data-ownership",
      title: "4. Data Ownership & Confidentiality",
      content: [
        `You maintain 100% ownership of all business review data, customer feedback records, and analytics generated through ${appName} for your account.`,
        `${companyName} does NOT sell, rent, monetize, or share your business data, customer feedback, or QR analytics with any third party, marketing agency, or advertiser.`,
        `Your customer feedback data is confidential to your account. Our team cannot access or view your private feedback records unless explicitly authorized by you for specific customer support troubleshooting purposes.`,
      ],
    },
    {
      id: "information-sharing",
      title: "5. How We Share Your Information",
      content: [
        `We only share minimal necessary information under strict conditions:`,
        `Infrastructure & Service Providers: Trusted cloud hosting platforms that provide encrypted database storage. All partners are bound by strict non-disclosure and data processing agreements.`,
        `Google Integration: When your QR code routes a customer to your Google review page, the redirection occurs directly to Google's platform. We do not transmit customer personal data to Google; the customer interacts with Google's own review interface directly.`,
        `Legal & Regulatory Mandates: We may disclose information if required by a valid court order, law enforcement inquiry, or applicable statutory regulation under Indian jurisdiction.`,
      ],
    },
    {
      id: "data-security",
      title: "6. Data Security & Encryption",
      content: [
        `We employ multi-layered industry-standard technical and organizational security controls to protect your data:`,
        `In-Transit Encryption: All communication between the ${appName} platform and our servers is encrypted using modern TLS 1.3 cryptographic protocols.`,
        `At-Rest Encryption: Your business data, customer feedback records, and analytics are encrypted using AES-256 bit encryption in secure data centers.`,
        `Access Controls: Account access is protected by secure authentication mechanisms and automated session management.`,
        `While we implement the highest reasonable standards of security, please note that no transmission method over the internet is completely infallible. We encourage you to keep your login credentials secure and never share them with unauthorized persons.`,
      ],
    },
    {
      id: "data-retention",
      title: "7. Data Retention & Account Deletion",
      content: [
        `We retain your review data, customer feedback records, and analytics for as long as your account remains active so that you can access your historical performance data and feedback trends.`,
        `You have the right to request deletion of your account and all associated data at any time. When an account deletion request is processed, all business data, feedback records, and QR configurations are permanently purged from our active databases.`,
        `Certain anonymized statistical data may be retained for service improvement purposes with no personally identifiable information attached.`,
      ],
    },
    {
      id: "your-rights",
      title: "8. Your Rights & Controls",
      content: [
        `As a user of ${appName}, you have complete control over your information:`,
        `Right to Access & Export: You can download your complete analytics reports, feedback summaries, and review performance data directly from your dashboard.`,
        `Right to Rectify: You can update your business profile, contact details, and QR configurations at any time through your account settings.`,
        `Right to Erase: You can request complete account erasure by contacting us at ${contactEmail}. Upon request, all your data will be permanently deleted within 15 business days.`,
        `Right to Restrict: You can deactivate your QR codes at any time, which stops all new feedback collection while preserving your historical data.`,
      ],
    },
    {
      id: "google-third-party",
      title: "9. Google & Third-Party Platforms",
      content: [
        `${appName} integrates with Google Business Profiles and Google Review pages to facilitate the review collection flow. When a customer is directed to Google's review platform via your QR code, they are subject to Google's own Privacy Policy and Terms of Service.`,
        `${companyName} is not responsible for data handling practices of Google or any other third-party platform that customers are directed to through ${appName}.`,
        `We recommend you familiarize yourself with Google's review policies to ensure your use of ${appName} remains compliant with their guidelines.`,
      ],
    },
    {
      id: "policy-updates",
      title: "10. Changes to This Privacy Policy",
      content: [
        `We may periodically update this Privacy Policy to reflect platform enhancements, legal amendments, or revised practices.`,
        `Whenever significant changes are made, we will notify you through an in-platform notice or direct email communication. The effective date at the top of this policy will reflect the date of the latest revisions.`,
      ],
    },
    {
      id: "contact",
      title: "11. Grievance Officer & Contact Us",
      content: [
        `If you have any questions, concerns, feedback, or grievances regarding this Privacy Policy or our data handling practices, please contact our designated team:`,
        `Company: ${companyName} | Platform: ${appFullName} (${appName}) | Email: ${contactEmail} | Support Hours: Monday to Saturday, 9:30 AM – 6:30 PM IST. We strive to acknowledge all grievances within 24 hours and resolve them within 15 business days.`,
      ],
    },
  ];

  return (
    <>
      <main className="legal-page-root">
        {/* ── HERO ── */}
        <div className="legal-hero">
          <Link href="/" className="legal-back-btn" id="privacy-back-home-btn" aria-label="Back to Home">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="15 18 9 12 15 6" />
            </svg>
            <span>Back to Home</span>
          </Link>

          <div className="legal-hero-inner">
            <h1 className="legal-hero-title">Privacy Policy</h1>
            <p className="legal-hero-subtitle">
              Your business review data is strictly confidential. Learn how {appFullName} ({appName}) and {companyName} protect your data, customer feedback, and business privacy.
            </p>
          </div>
        </div>

        {/* ── BODY ── */}
        <div className="legal-body">
          <LegalTableOfContents sections={sections.map((s) => ({ id: s.id, title: s.title }))} />

          <article className="legal-content">
            {sections.map((section) => (
              <section key={section.id} id={section.id} className="legal-section">
                <h2 className="legal-section-title">{section.title}</h2>
                <div className="legal-section-body">
                  {section.content.map((para, i) => (
                    <p key={i} className="legal-para">{para}</p>
                  ))}
                </div>
              </section>
            ))}

            <div className="legal-footer-note">
              <p>
                Have questions about your data privacy? Reach out anytime at{" "}
                <a href={`mailto:${contactEmail}`} target="_blank" className="legal-email-link">
                  {contactEmail}
                </a>.
              </p>
            </div>
          </article>
        </div>

        <footer className="legal-minimal-footer">
          <p>© 2026 {appFullName} ({appName}) by {companyName}. All rights reserved.</p>
        </footer>
      </main>

      <style dangerouslySetInnerHTML={{ __html: LEGAL_STYLES }} />
    </>
  );
}

const LEGAL_STYLES = `
  /* ─── Reset & Root ─────────────────────────────────────────────────── */
  .legal-page-root {
    min-height: 100vh;
    background: #F4F8FF;
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
    color: #05031C;
    width: 100%;
    position: relative;
  }

  /* ─── Hero Section ──────────────────────────────────────────────────── */
  .legal-hero {
    background: linear-gradient(135deg, #02205A 0%, #1A3DB5 45%, #3157FF 75%, #4A7AFF 100%);
    padding: clamp(76px, 10vw, 96px) 20px clamp(44px, 6vw, 68px);
    text-align: center;
    position: relative;
    overflow: hidden;
  }
  .legal-hero::before {
    content: '';
    position: absolute;
    inset: 0;
    background:
      radial-gradient(ellipse at 20% 50%, rgba(255,255,255,0.06) 0%, transparent 55%),
      radial-gradient(ellipse at 80% 15%, rgba(74,122,255,0.3) 0%, transparent 50%),
      radial-gradient(ellipse at 50% 90%, rgba(2,32,90,0.5) 0%, transparent 60%);
    pointer-events: none;
  }

  /* Back button */
  .legal-back-btn {
    position: absolute;
    top: 22px;
    left: clamp(16px, 4vw, 48px);
    display: inline-flex;
    align-items: center;
    gap: 7px;
    color: rgba(255,255,255,0.88);
    font-size: 13px;
    font-weight: 600;
    text-decoration: none;
    background: rgba(255,255,255,0.12);
    border: 1px solid rgba(255,255,255,0.22);
    backdrop-filter: blur(8px);
    -webkit-backdrop-filter: blur(8px);
    border-radius: 24px;
    padding: 7px 16px 7px 10px;
    transition: all 0.2s ease;
    z-index: 20;
  }
  .legal-back-btn:hover {
    background: rgba(255,255,255,0.22);
    color: #FFFFFF;
    transform: translateX(-2px);
  }

  /* Hero inner content */
  .legal-hero-inner {
    position: relative;
    max-width: 760px;
    margin: 0 auto;
  }
  .legal-hero-badge {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    background: rgba(255,255,255,0.15);
    border: 1px solid rgba(255,255,255,0.25);
    color: rgba(255,255,255,0.9);
    font-size: 11.5px;
    font-weight: 700;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    padding: 5px 14px;
    border-radius: 20px;
    margin-bottom: 16px;
  }
  .legal-hero-title {
    font-size: clamp(30px, 5.5vw, 50px);
    font-weight: 800;
    color: #FFFFFF;
    margin: 0 0 14px 0;
    line-height: 1.15;
    letter-spacing: -0.025em;
  }
  .legal-hero-subtitle {
    font-size: clamp(14px, 2.5vw, 16px);
    line-height: 1.65;
    color: rgba(255, 255, 255, 0.78);
    margin: 0 auto;
    max-width: 620px;
  }

  /* ─── Body Layout ───────────────────────────────────────────────────── */
  .legal-body {
    max-width: 1200px;
    margin: 0 auto;
    padding: 52px 28px 100px;
    display: flex;
    gap: 36px;
    align-items: flex-start;
    width: 100%;
    box-sizing: border-box;
  }

  /* ─── Table of Contents ─────────────────────────────────────────────── */
  .legal-toc {
    width: 270px;
    flex-shrink: 0;
    position: sticky;
    top: 28px;
  }
  .legal-toc-card {
    background: #FFFFFF;
    border: 1px solid #D8E6FB;
    border-radius: 16px;
    padding: 20px 18px;
    box-shadow: 0 4px 18px rgba(2, 32, 90, 0.07);
  }
  .legal-toc-title {
    font-size: 11px;
    font-weight: 800;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    color: #3157FF;
    margin: 0 0 12px 0;
    padding-bottom: 10px;
    border-bottom: 1.5px solid #EEF4FF;
  }
  .legal-toc-list {
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: column;
    gap: 2px;
    list-style: none;
  }
  .legal-toc-item { list-style: none; }
  .legal-toc-link {
    width: 100%;
    text-align: left;
    background: none;
    border: none;
    font-family: inherit;
    font-size: 12.5px;
    line-height: 1.4;
    color: #5B7A9E;
    cursor: pointer;
    transition: all 0.18s ease;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 7px 10px;
    border-radius: 8px;
    border-left: 3px solid transparent;
  }
  .legal-toc-link:hover {
    color: #02205A;
    background: #EEF4FF;
    border-left-color: rgba(49, 87, 255, 0.3);
  }
  .legal-toc-link--active {
    color: #02205A !important;
    font-weight: 700;
    background: #EEF4FF !important;
    border-left: 3px solid #3157FF !important;
  }
  .legal-toc-text {
    flex: 1;
    min-width: 0;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .legal-toc-pointer {
    flex-shrink: 0;
    color: #3157FF;
    display: inline-flex;
    align-items: center;
    margin-left: 6px;
  }

  /* ─── Article Content ───────────────────────────────────────────────── */
  .legal-content {
    flex: 1;
    min-width: 0;
    width: 100%;
  }
  .legal-section {
    background: #FFFFFF;
    border: 1px solid #D8E6FB;
    border-radius: 18px;
    padding: 28px 32px;
    margin-bottom: 16px;
    transition: box-shadow 0.22s ease, border-color 0.22s ease;
    scroll-margin-top: 32px;
  }
  .legal-section:hover {
    box-shadow: 0 6px 24px rgba(49, 87, 255, 0.09);
    border-color: rgba(49, 87, 255, 0.25);
  }
  .legal-section:last-of-type {
    margin-bottom: 24px;
  }
  .legal-section-title {
    font-size: clamp(16px, 2.8vw, 18.5px);
    font-weight: 700;
    color: #02205A;
    margin: 0 0 14px 0;
    padding-bottom: 12px;
    border-bottom: 2px solid #EEF4FF;
    line-height: 1.35;
  }
  .legal-section-body {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
  .legal-para {
    margin: 0;
    font-size: clamp(13.5px, 2.3vw, 14.5px);
    line-height: 1.75;
    color: #374F6A;
    word-break: break-word;
  }

  /* ─── Footer Note ───────────────────────────────────────────────────── */
  .legal-footer-note {
    background: #EEF4FF;
    border: 1px solid #D8E6FB;
    border-radius: 14px;
    padding: 20px 26px;
    margin-top: 8px;
    text-align: center;
  }
  .legal-footer-note p {
    margin: 0;
    font-size: 14px;
    color: #02205A;
    line-height: 1.6;
  }
  .legal-email-link {
    color: #3157FF;
    font-weight: 600;
    text-decoration: underline;
    text-underline-offset: 2px;
  }
  .legal-email-link:hover { color: #02205A; }

  /* ─── Page Footer ───────────────────────────────────────────────────── */
  .legal-minimal-footer {
    width: 100%;
    border-top: 1px solid #D8E6FB;
    background: #FFFFFF;
    padding: 22px 20px;
    text-align: center;
  }
  .legal-minimal-footer p {
    margin: 0;
    font-size: 13px;
    color: #6B87A8;
  }

  /* ─── Responsive ────────────────────────────────────────────────────── */
  @media (max-width: 1023px) {
    .legal-body {
      padding: 28px 18px 60px;
      display: block;
    }
    .legal-toc {
      display: none !important;
    }
    .legal-section {
      padding: 20px 18px;
      border-radius: 14px;
      margin-bottom: 12px;
    }
    .legal-footer-note {
      padding: 16px 18px;
    }
  }
  @media (max-width: 640px) {
    .legal-hero {
      padding: 72px 16px 36px;
    }
    .legal-back-btn {
      top: 14px;
      left: 12px;
      font-size: 12px;
      padding: 6px 12px 6px 8px;
    }
    .legal-section {
      padding: 18px 14px;
    }
  }
`;
