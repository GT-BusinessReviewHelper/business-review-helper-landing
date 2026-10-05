import type { Metadata } from "next";
import Link from "next/link";
import LegalTableOfContents from "@/app/components/LegalTableOfContents";

export const metadata: Metadata = {
  title: "Terms of Use | BRH - Business Review Helper",
  description:
    "Review the Terms of Use for BRH (Business Review Helper) by Gelora Tech. Understand your rights and responsibilities when using our QR-powered review management platform.",
};

export default function TermsOfUsePage() {
  const appName = "BRH";
  const appFullName = "Business Review Helper";
  const companyName = "Gelora Tech";
  const contactEmail = "brh@geloratech.com";

  const sections = [
    {
      id: "acceptance",
      title: "1. Acceptance of Terms",
      content: [
        `These Terms of Use ("Terms") constitute a legally binding agreement between you ("User", "you", or "your") and ${companyName} ("we", "us", or "our"), governing your access to and use of the ${appFullName} (${appName}) platform, including our website, QR code tools, review management dashboard, and related services (collectively, the "Platform").`,
        `By creating an account, generating a QR code, or accessing any part of the Platform, you acknowledge that you have read, understood, and agree to be bound by these Terms and our Privacy Policy. If you do not agree to these Terms, you must not use or access ${appName}.`,
      ],
    },
    {
      id: "eligibility",
      title: "2. Eligibility & Account Registration",
      content: [
        `2.1 Legal Capacity: You must be at least 18 years of age and legally competent to enter into binding contracts. By using ${appName}, you represent and warrant that you fulfill these requirements.`,
        `2.2 Account Security: You are solely responsible for maintaining the confidentiality of your account credentials. Any actions performed through your registered account will be deemed to have been authorized by you.`,
        `2.3 Accuracy of Information: You agree to provide accurate and truthful business and profile details upon registration and keep your contact details updated at all times.`,
      ],
    },
    {
      id: "services-description",
      title: "3. Service Description & Purpose",
      content: [
        `${appName} (${appFullName}) is a QR-powered customer feedback and Google review management platform designed for shopkeepers, restaurant owners, service providers, and small-to-medium businesses.`,
        `Key features include generating unique QR codes for your business, routing customer feedback intelligently (positive reviews directed to Google, negative feedback privately captured), real-time review tracking dashboards, downloadable analytics reports, and automated review reminder systems.`,
        `${appName} is a marketing and reputation management tool. It does not guarantee the publication, removal, or ranking of any review on Google or any third-party review platform.`,
      ],
    },
    {
      id: "qr-code-usage",
      title: "4. QR Code Usage & Review Flow",
      content: [
        `4.1 QR Code Ownership: Each QR code generated through ${appName} is linked exclusively to your registered business account. You must not share, sell, or transfer your QR code to any other business or individual.`,
        `4.2 Review Routing: ${appName} uses an intelligent routing mechanism to direct customers to your Google review page or to an internal feedback form based on their satisfaction rating. You acknowledge that this routing does not constitute manipulation of review platforms and is designed to improve the genuine customer experience.`,
        `4.3 Google Policies: You agree to use ${appName} in full compliance with Google's review policies. ${companyName} is not responsible for any action taken by Google against your business listing due to review policy violations caused by your use of the Platform.`,
      ],
    },
    {
      id: "user-conduct",
      title: "5. User Conduct & Acceptable Use",
      content: [
        `You agree to use ${appName} in full compliance with all applicable laws. You shall NOT:`,
        `(a) Use the Platform to incentivize, purchase, or fabricate fake customer reviews on Google or any third-party platform;`,
        `(b) Place QR codes in locations intended to deceive customers or manipulate their review-giving intent;`,
        `(c) Attempt to reverse engineer, decompile, hack, copy, or disassemble the ${appName} software or QR infrastructure;`,
        `(d) Introduce malicious software, viruses, or automated bots that interfere with the review collection process;`,
        `(e) Impersonate any business, individual, or entity without proper authorization;`,
        `(f) Use the Platform's customer data for any purpose other than legitimate business communication and review management.`,
      ],
    },
    {
      id: "customer-feedback",
      title: "6. Customer Feedback & Data",
      content: [
        `${appName} collects feedback submitted by your customers through the QR-triggered feedback flow. You represent that customers who scan your QR code are genuine patrons of your business.`,
        `You are responsible for informing your customers that scanning the QR code initiates a review or feedback process. Customer feedback data captured privately (negative feedback) is accessible only to you through your dashboard.`,
        `${companyName} will not use your customers' private feedback data for any purpose other than delivering the core service to you.`,
      ],
    },
    {
      id: "intellectual-property",
      title: "7. Intellectual Property Rights",
      content: [
        `All rights, title, and interest in and to ${appName}, including software source code, QR generation technology, interface designs, logos, trademarks, illustrations, graphics, and documentation, are the exclusive property of ${companyName}.`,
        `We grant you a personal, limited, non-exclusive, non-transferable, and revocable license to use the ${appName} platform solely for your own business reputation management needs.`,
        `Nothing in these Terms grants you any right to license, resell, sublicense, or commercially exploit ${appName} technology, QR infrastructure, or branding.`,
      ],
    },
    {
      id: "data-analytics",
      title: "8. Analytics & Reporting Data",
      content: [
        `You retain full ownership of all business data, customer feedback, and analytics reports generated within ${appName} for your account.`,
        `${companyName} may use anonymized and aggregated statistical data (with no personally identifiable information) to improve Platform performance, benchmarks, and feature development.`,
        `We recommend regularly downloading your analytics reports and review summaries for your offline business records.`,
      ],
    },
    {
      id: "limitation-liability",
      title: "9. Disclaimers & Limitation of Liability",
      content: [
        `THE PLATFORM IS PROVIDED ON AN "AS IS" AND "AS AVAILABLE" BASIS WITHOUT WARRANTIES OF ANY KIND, EXPRESS OR IMPLIED.`,
        `${companyName} does not guarantee any specific number of Google reviews, improvement in Google ratings, or increase in business revenue as a result of using ${appName}. Review outcomes depend entirely on genuine customer actions.`,
        `To the maximum extent permitted under applicable law, ${companyName} shall not be liable for: (a) Any removal of your business reviews by Google or changes in Google's review policies; (b) Loss of business reputation due to negative reviews posted publicly; (c) Any indirect, consequential, or lost-profit damages; (d) Service interruptions caused by third-party platform outages.`,
        `In any event, the total cumulative liability of ${companyName} to you shall not exceed the total fees paid by you to ${companyName} in the 12 months preceding the claim.`,
      ],
    },
    {
      id: "termination",
      title: "10. Account Suspension & Termination",
      content: [
        `You may terminate your account and cease using ${appName} at any time by contacting our support team.`,
        `We reserve the right to suspend or terminate your account immediately without prior notice if you violate these Terms, engage in review manipulation or fraudulent activities, or if required by law enforcement authorities.`,
        `Upon termination, your QR codes will be deactivated and your right to access the Platform ceases immediately.`,
      ],
    },
    {
      id: "governing-law",
      title: "11. Governing Law & Jurisdiction",
      content: [
        `These Terms shall be governed by, construed, and enforced in accordance with the laws of the Republic of India, without regard to conflict of law principles.`,
        `Any dispute, claim, or controversy arising out of or relating to these Terms or the breach, termination, or invalidity thereof shall be subject to the exclusive jurisdiction of the competent courts in India.`,
      ],
    },
    {
      id: "contact",
      title: "12. Contact & Customer Support",
      content: [
        `If you have questions, feedback, or require assistance regarding these Terms of Use, please reach out to us:`,
        `Company: ${companyName} | Platform: ${appFullName} (${appName}) | Email: ${contactEmail} | Support Hours: Monday to Saturday, 9:30 AM – 6:30 PM IST.`,
      ],
    },
  ];

  return (
    <>
      <main className="legal-page-root">
        {/* ── HERO ── */}
        <div className="legal-hero">
          <Link href="/" className="legal-back-btn" id="terms-back-home-btn" aria-label="Back to Home">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="15 18 9 12 15 6" />
            </svg>
            <span>Back to Home</span>
          </Link>

          <div className="legal-hero-inner">
            <h1 className="legal-hero-title">Terms of Use</h1>
            <p className="legal-hero-subtitle">
              Clear, transparent rules for using {appFullName} — the QR-powered review management platform by {companyName}. Please review these terms carefully.
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
                Questions about our Terms of Use? Contact our team at{" "}
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
