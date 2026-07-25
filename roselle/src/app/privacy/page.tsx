import { buildMetadata } from "@/lib/metadata";
import { siteConfig } from "@/lib/constants";
import { LegalHero, LegalBody, LegalSection } from "@/components/legal/LegalLayout";

export const metadata = buildMetadata({
  title: "Privacy Policy",
  description:
    "Learn how Roselle collects, uses, stores, and protects your personal and health data across the app and website.",
  path: "/privacy",
});

export default function PrivacyPage() {
  return (
    <>
      <LegalHero
        eyebrow="Legal"
        title="Privacy Policy"
        description="Your health data is deeply personal. Here's exactly what we collect, why, and how you stay in control of it."
        lastUpdated={siteConfig.lastUpdated}
      />

      <LegalBody>
        <LegalSection id="overview" title="1. Overview">
          <p>
            {siteConfig.companyName} (&ldquo;Roselle,&rdquo; &ldquo;we,&rdquo; &ldquo;us,&rdquo; or
            &ldquo;our&rdquo;) operates the Roselle iOS application and the website at{" "}
            {siteConfig.url} (together, the &ldquo;Service&rdquo;). This Privacy Policy explains
            how we collect, use, disclose, and safeguard your information when you use the
            Service, and describes the choices and rights available to you.
          </p>
          <p>
            By downloading, accessing, or using Roselle, you agree to the collection and use of
            information in accordance with this Privacy Policy. If you do not agree with this
            policy, please do not use the Service.
          </p>
        </LegalSection>

        <LegalSection id="information-we-collect" title="2. Information we collect">
          <p>
            <strong>Health and cycle data.</strong> Menstrual cycle dates, flow intensity,
            symptoms, mood entries, basal body temperature, sexual activity, medication and
            contraception logs, notes, and any other wellness information you choose to enter
            into the app.
          </p>
          <p>
            <strong>Account information.</strong> If you create an account, we collect your
            email address, an encrypted password (or Sign in with Apple identifier), and your
            display name if provided.
          </p>
          <p>
            <strong>Apple Health data.</strong> If you choose to connect Apple HealthKit, Roselle
            may read and write cycle, sleep, and activity data solely to enrich your predictions
            and insights. This connection is optional, controlled entirely through your iOS
            Health app permissions, and can be revoked at any time.
          </p>
          <p>
            <strong>AI Assistant conversations.</strong> Messages you send to Roselle&rsquo;s AI
            Assistant, along with the cycle and symptom context needed to generate a relevant
            response.
          </p>
          <p>
            <strong>Community content.</strong> Posts, comments, and reactions you share in
            Roselle&rsquo;s community spaces. Community posts are associated with an anonymous
            handle, never your real name or account email.
          </p>
          <p>
            <strong>Device and usage data.</strong> Device model, iOS version, app version,
            language settings, crash logs, and aggregated feature-usage analytics that help us
            improve the Service.
          </p>
          <p>
            <strong>Purchase information.</strong> If you subscribe to Roselle Premium, Apple
            processes your payment. We receive only a confirmation of subscription status and
            transaction identifiers &mdash; we never see or store your card details.
          </p>
        </LegalSection>

        <LegalSection id="how-we-use" title="3. How we use your information">
          <ul className="list-disc space-y-2 pl-5">
            <li>To provide, operate, and maintain cycle tracking and predictions.</li>
            <li>To generate personalized AI insights based on your own logged data.</li>
            <li>To sync your data securely across your devices, if you enable an account.</li>
            <li>To moderate community spaces and enforce our content guidelines.</li>
            <li>To respond to support requests and communicate service updates.</li>
            <li>To detect, investigate, and prevent fraud, abuse, and security incidents.</li>
            <li>To improve app performance through aggregated, de-identified analytics.</li>
          </ul>
          <p>
            We do not use your health data to serve targeted third-party advertising, and we do
            not sell your personal or health information to data brokers or advertisers.
          </p>
        </LegalSection>

        <LegalSection id="legal-basis" title="4. Legal basis for processing">
          <p>
            Where applicable law requires a legal basis for processing (such as under the EU/UK
            GDPR), we rely on: your explicit consent for health-related data; the necessity of
            processing to perform our contract with you (providing the Service); our legitimate
            interests in securing and improving the Service; and compliance with legal
            obligations where relevant.
          </p>
        </LegalSection>

        <LegalSection id="sharing" title="5. How we share information">
          <p>We do not share your personal or health data except in the following limited cases:</p>
          <ul className="list-disc space-y-2 pl-5">
            <li>
              <strong>Service providers</strong> who host our infrastructure, send transactional
              email, or provide crash analytics, bound by contractual confidentiality and data
              protection obligations.
            </li>
            <li>
              <strong>With your explicit consent</strong>, such as exporting a health report to
              share with your doctor.
            </li>
            <li>
              <strong>Legal compliance</strong>, if required to comply with a valid legal
              process, protect our rights, or ensure user safety.
            </li>
            <li>
              <strong>Business transfers</strong>, in the event of a merger, acquisition, or asset
              sale, subject to continued protection under this Privacy Policy.
            </li>
          </ul>
        </LegalSection>

        <LegalSection id="storage-security" title="6. Data storage and security">
          <p>
            Health data is encrypted at rest and in transit using industry-standard protocols
            (TLS 1.2+ and AES-256). Sensitive local data is protected using iOS Data Protection
            and, where available, Face ID/Touch ID app-lock. Access to production systems is
            restricted to authorized personnel and logged. While we work hard to protect your
            information, no method of transmission or storage is 100% secure, and we cannot
            guarantee absolute security.
          </p>
        </LegalSection>

        <LegalSection id="retention" title="7. Data retention">
          <p>
            We retain your data for as long as your account is active or as needed to provide the
            Service. If you delete your account, we permanently delete your health data and
            personal identifiers within 30 days, except where retention is required to comply
            with legal obligations, resolve disputes, or enforce our agreements.
          </p>
        </LegalSection>

        <LegalSection id="your-rights" title="8. Your rights and choices">
          <ul className="list-disc space-y-2 pl-5">
            <li>
              <strong>Access and export:</strong> download a copy of your logged data at any time
              from Settings → Export Data.
            </li>
            <li>
              <strong>Correction:</strong> edit or delete any entry directly within the app.
            </li>
            <li>
              <strong>Deletion:</strong> permanently delete your account and all associated data
              from Settings → Delete Account, or by emailing {siteConfig.privacyEmail}.
            </li>
            <li>
              <strong>Withdraw consent:</strong> disconnect Apple Health or opt out of analytics
              at any time from Settings → Privacy.
            </li>
            <li>
              <strong>Regional rights:</strong> residents of the EEA, UK, and certain U.S. states
              (including California under the CCPA/CPRA) may have additional rights to access,
              correct, delete, or restrict processing of personal data, and to lodge a complaint
              with a supervisory authority.
            </li>
          </ul>
        </LegalSection>

        <LegalSection id="childrens-privacy" title="9. Children's privacy">
          <p>
            Roselle is not directed to children under 13 (or the minimum age required by your
            country of residence), and we do not knowingly collect personal information from
            children under that age. If we learn that we have inadvertently collected data from a
            child, we will delete it promptly. Parents who believe their child has provided us
            with personal information may contact us at {siteConfig.privacyEmail}.
          </p>
        </LegalSection>

        <LegalSection id="international" title="10. International data transfers">
          <p>
            Roselle is available globally. Your information may be transferred to, stored, and
            processed in a country other than your own, including the United States, where our
            servers and service providers operate. Where required, we rely on appropriate
            safeguards such as Standard Contractual Clauses to protect data transferred
            internationally.
          </p>
        </LegalSection>

        <LegalSection id="third-party-links" title="11. Third-party links and services">
          <p>
            The Service may contain links to third-party websites or integrate with services like
            Apple Health and Sign in with Apple. We are not responsible for the privacy practices
            of these third parties, and we encourage you to review their respective privacy
            policies.
          </p>
        </LegalSection>

        <LegalSection id="changes" title="12. Changes to this policy">
          <p>
            We may update this Privacy Policy from time to time. If we make material changes, we
            will notify you through the app or by email prior to the change becoming effective.
            Your continued use of the Service after changes take effect constitutes acceptance of
            the revised policy.
          </p>
        </LegalSection>

        <LegalSection id="contact" title="13. Contact us">
          <p>
            If you have questions, concerns, or requests regarding this Privacy Policy or your
            data, please contact us at:
          </p>
          <p>
            <strong>{siteConfig.companyName}</strong>
            <br />
            Email:{" "}
            <a href={`mailto:${siteConfig.privacyEmail}`} className="text-rose-600 underline">
              {siteConfig.privacyEmail}
            </a>
          </p>
        </LegalSection>
      </LegalBody>
    </>
  );
}
