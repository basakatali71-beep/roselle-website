import { buildMetadata } from "@/lib/metadata";
import { siteConfig } from "@/lib/constants";
import { LegalHero, LegalBody, LegalSection } from "@/components/legal/LegalLayout";

export const metadata = buildMetadata({
  title: "Terms of Use",
  description:
    "The terms and conditions governing your use of the Roselle iOS application and website.",
  path: "/terms",
});

export default function TermsPage() {
  return (
    <>
      <LegalHero
        eyebrow="Legal"
        title="Terms of Use"
        description="The rules of the road for using Roselle — written in plain language wherever we could manage it."
        lastUpdated={siteConfig.lastUpdated}
      />

      <LegalBody>
        <LegalSection id="acceptance" title="1. Acceptance of terms">
          <p>
            These Terms of Use (&ldquo;Terms&rdquo;) form a binding agreement between you and{" "}
            {siteConfig.companyName} (&ldquo;Roselle,&rdquo; &ldquo;we,&rdquo; &ldquo;us&rdquo;)
            governing your access to and use of the Roselle iOS application and{" "}
            {siteConfig.url} (together, the &ldquo;Service&rdquo;). By downloading, installing, or
            using Roselle, you agree to be bound by these Terms and our Privacy Policy. If you do
            not agree, do not use the Service.
          </p>
          <p>You must be at least 13 years old (or the age of digital consent in your country) to use Roselle.</p>
        </LegalSection>

        <LegalSection id="medical-disclaimer" title="2. Medical disclaimer">
          <p>
            Roselle is a wellness and informational tool. It is <strong>not</strong> a medical
            device, and it does not provide medical advice, diagnosis, or treatment. Cycle
            predictions, AI-generated insights, and community content are for general
            informational purposes only and should never replace professional medical judgment.
          </p>
          <p>
            Always seek the advice of your physician or other qualified health provider with any
            questions regarding a medical condition, fertility planning, or contraception. Never
            disregard professional medical advice or delay seeking it because of something you
            read or were told within Roselle. If you believe you are experiencing a medical
            emergency, call your local emergency number immediately.
          </p>
        </LegalSection>

        <LegalSection id="accounts" title="3. Accounts">
          <p>
            You are responsible for maintaining the confidentiality of your account credentials
            and for all activity that occurs under your account. You agree to provide accurate
            information and to notify us promptly at {siteConfig.supportEmail} of any unauthorized
            use of your account.
          </p>
        </LegalSection>

        <LegalSection id="subscriptions" title="4. Subscriptions and billing">
          <ul className="list-disc space-y-2 pl-5">
            <li>
              Roselle Premium is offered as an auto-renewing subscription billed through your
              Apple ID account.
            </li>
            <li>
              Payment is charged to your Apple ID at confirmation of purchase, and your
              subscription automatically renews unless canceled at least 24 hours before the end
              of the current period.
            </li>
            <li>
              Your account will be charged for renewal within 24 hours prior to the end of the
              current period, at the price you agreed to at purchase.
            </li>
            <li>
              You can manage or cancel your subscription anytime in your Apple ID account
              settings, under Subscriptions. Deleting the app does not cancel your subscription.
            </li>
            <li>
              Any unused portion of a free trial period, if offered, will be forfeited when you
              purchase a subscription.
            </li>
            <li>
              Refunds are handled by Apple in accordance with Apple&rsquo;s App Store refund
              policies. We do not process refunds directly.
            </li>
          </ul>
        </LegalSection>

        <LegalSection id="acceptable-use" title="5. Acceptable use">
          <p>You agree not to:</p>
          <ul className="list-disc space-y-2 pl-5">
            <li>Use the Service for any unlawful purpose or in violation of these Terms.</li>
            <li>
              Post harassing, hateful, sexually explicit, or medically dangerous content in
              community spaces.
            </li>
            <li>Attempt to reverse-engineer, decompile, or extract source code from the app.</li>
            <li>Interfere with or disrupt the integrity or performance of the Service.</li>
            <li>Impersonate any person or entity, or misrepresent your affiliation with us.</li>
            <li>Use automated systems (bots, scrapers) to access the Service without permission.</li>
          </ul>
        </LegalSection>

        <LegalSection id="community-guidelines" title="6. Community guidelines">
          <p>
            Community spaces are anonymous, moderated, and intended to be safe and supportive. We
            reserve the right to remove content and suspend or terminate access for any user who
            violates these Terms or our community guidelines, at our sole discretion and without
            prior notice.
          </p>
        </LegalSection>

        <LegalSection id="ai-assistant" title="7. AI Assistant">
          <p>
            Roselle&rsquo;s AI Assistant generates responses using your logged data and machine
            learning models. Responses may occasionally be inaccurate or incomplete. You
            acknowledge that AI-generated content is provided &ldquo;as is&rdquo; for informational
            purposes only and does not constitute medical, legal, or professional advice.
          </p>
        </LegalSection>

        <LegalSection id="intellectual-property" title="8. Intellectual property">
          <p>
            The Service, including its design, text, graphics, logos, and underlying software, is
            owned by {siteConfig.companyName} and protected by intellectual property laws. You are
            granted a limited, non-exclusive, non-transferable license to use the app for your
            personal, non-commercial use. All content you submit (such as journal entries or
            community posts) remains yours, but you grant us a license to host, store, and display
            it as necessary to operate the Service.
          </p>
        </LegalSection>

        <LegalSection id="termination" title="9. Termination">
          <p>
            We may suspend or terminate your access to the Service at any time, with or without
            cause, including for violation of these Terms. You may stop using the Service and
            delete your account at any time from Settings.
          </p>
        </LegalSection>

        <LegalSection id="disclaimers" title="10. Disclaimers">
          <p>
            THE SERVICE IS PROVIDED &ldquo;AS IS&rdquo; AND &ldquo;AS AVAILABLE&rdquo; WITHOUT
            WARRANTIES OF ANY KIND, WHETHER EXPRESS OR IMPLIED, INCLUDING WARRANTIES OF
            MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, OR NON-INFRINGEMENT. WE DO NOT
            WARRANT THAT PREDICTIONS OR INSIGHTS WILL BE ACCURATE OR ERROR-FREE.
          </p>
        </LegalSection>

        <LegalSection id="liability" title="11. Limitation of liability">
          <p>
            TO THE MAXIMUM EXTENT PERMITTED BY LAW, {siteConfig.companyName.toUpperCase()} SHALL
            NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE
            DAMAGES ARISING FROM YOUR USE OF THE SERVICE. OUR TOTAL LIABILITY FOR ANY CLAIM
            ARISING FROM THESE TERMS SHALL NOT EXCEED THE AMOUNT YOU PAID US IN THE 12 MONTHS
            PRECEDING THE CLAIM.
          </p>
        </LegalSection>

        <LegalSection id="governing-law" title="12. Governing law">
          <p>
            These Terms are governed by the laws of the State of California, USA, without regard
            to its conflict of law provisions, except where local consumer protection laws in your
            jurisdiction of residence require otherwise.
          </p>
        </LegalSection>

        <LegalSection id="apple-terms" title="13. Apple's standard EULA">
          <p>
            To the extent Apple&rsquo;s Standard End User License Agreement conflicts with more
            restrictive terms herein, the more restrictive term shall apply. Apple is not a party
            to these Terms and has no obligation to furnish any maintenance or support services
            for the Service. Apple is a third-party beneficiary of these Terms and may enforce
            them against you.
          </p>
        </LegalSection>

        <LegalSection id="changes-terms" title="14. Changes to these terms">
          <p>
            We may modify these Terms from time to time. Material changes will be notified through
            the app or by email. Continued use of the Service after changes take effect
            constitutes your acceptance of the revised Terms.
          </p>
        </LegalSection>

        <LegalSection id="contact-terms" title="15. Contact us">
          <p>
            Questions about these Terms can be sent to{" "}
            <a href={`mailto:${siteConfig.supportEmail}`} className="text-rose-600 underline">
              {siteConfig.supportEmail}
            </a>
            .
          </p>
        </LegalSection>
      </LegalBody>
    </>
  );
}
