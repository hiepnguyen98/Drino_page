import { SiteShell } from "@/components/site-shell";

export default function PrivacyPageEn() {
  return (
    <SiteShell title="Privacy Policy" description="Drino — Car Maintenance Manager">
      <div className="space-y-6">
        <header>
          <h1 className="text-2xl font-semibold">Privacy Policy</h1>
          <p className="text-sm text-muted">Drino — Car Maintenance Manager</p>
          <p className="text-sm text-muted">Last updated: January 14, 2026</p>
        </header>

        <section className="glass-panel rounded-[1rem] p-6">
          <h2 className="text-lg font-semibold">1. Introduction</h2>
          <p className="mt-3 text-sm text-muted">Welcome to Drino. We are committed to protecting your privacy and personal data. This privacy policy explains how we collect, use, and protect information when you use the Drino app.</p>
          <p className="mt-2 text-sm text-muted">By using Drino, you agree to the terms described in this policy.</p>
        </section>

        <section className="glass-panel rounded-[1rem] p-6">
          <h2 className="text-lg font-semibold">2. Information We Collect</h2>

          <h3 className="mt-3 font-semibold">2.1. Information you provide</h3>
          <div className="mt-2 text-sm text-muted space-y-1">
            <p><strong>Vehicle information:</strong> details about your vehicle (license plate, make, model, year)</p>
            <p><strong>Maintenance history:</strong> records of services and repairs (date, service type, cost, notes)</p>
            <p><strong>Reminders:</strong> maintenance reminders you set</p>
            <p><strong>Images:</strong> photos of vehicles, receipts, or related documents you upload</p>
          </div>

          <h3 className="mt-4 font-semibold">2.2. Automatically collected information</h3>
          <div className="mt-2 text-sm text-muted space-y-1">
            <p><strong>Device information:</strong> device type, operating system, app version</p>
            <p><strong>Usage data:</strong> how you interact with the app and which features you use</p>
            <p><strong>Crash data:</strong> error reports to help improve performance</p>
          </div>
        </section>

        <section className="glass-panel rounded-[1rem] p-6">
          <h2 className="text-lg font-semibold">3. How We Use Information</h2>
          <p className="mt-3 text-sm text-muted">We use the information we collect to:</p>
          <ul className="mt-2 list-disc list-inside text-sm text-muted space-y-1">
            <li>Provide and operate the Drino app</li>
            <li>Store and sync your maintenance data</li>
            <li>Send maintenance reminders</li>
            <li>Improve and develop app features</li>
            <li>Analyze usage to optimize user experience</li>
            <li>Troubleshoot technical issues and security incidents</li>
            <li>Contact you about updates or changes</li>
          </ul>
        </section>

        <section className="glass-panel rounded-[1rem] p-6">
          <h2 className="text-lg font-semibold">4. Storage and Security</h2>

          <h3 className="mt-3 font-semibold">4.1. Data storage</h3>
          <p className="mt-2 text-sm text-muted">Your data is stored locally on your device. If you choose to sync data, it will be encrypted during transfer and stored securely on trusted cloud providers.</p>

          <h3 className="mt-3 font-semibold">4.2. Security</h3>
          <p className="mt-2 text-sm text-muted">We apply appropriate security measures to protect user data.</p>
          <ul className="mt-2 list-disc list-inside text-sm text-muted space-y-1">
            <li>Encryption in transit (SSL/TLS)</li>
            <li>Access control</li>
          </ul>
        </section>

        <section className="glass-panel rounded-[1rem] p-6">
          <h2 className="text-lg font-semibold">5. Sharing Information</h2>
          <p className="mt-3 text-sm text-muted">We <strong>DO NOT</strong> sell, trade, or share your personal information for commercial purposes. We may share data in the following limited cases:</p>
          <ul className="mt-2 list-disc list-inside text-sm text-muted space-y-1">
            <li><strong>With your consent:</strong> when you explicitly allow it</li>
            <li><strong>Service providers:</strong> partners that help operate the app (hosting, analytics) under strict confidentiality</li>
            <li><strong>Legal requests:</strong> when required by law or government authorities</li>
            <li><strong>Protecting rights:</strong> to protect the rights, property, or safety of users and Drino</li>
          </ul>
        </section>

        <section className="glass-panel rounded-[1rem] p-6">
          <h2 className="text-lg font-semibold">6. Your Rights</h2>
          <p className="mt-3 text-sm text-muted">You have rights regarding your personal data, including:</p>
          <ul className="mt-2 list-disc list-inside text-sm text-muted space-y-1">
            <li><strong>Access:</strong> request the personal data we hold about you</li>
            <li><strong>Correction:</strong> update inaccurate information</li>
            <li><strong>Deletion:</strong> request removal of your personal data</li>
            <li><strong>Data export:</strong> receive a copy of your data in a usable format</li>
            <li><strong>Withdraw consent:</strong> stop processing based on consent</li>
          </ul>
          <p className="mt-2 text-sm text-muted">To exercise these rights, contact us using the details below.</p>
        </section>

        <section className="glass-panel rounded-[1rem] p-6">
          <h2 className="text-lg font-semibold">7. Push Notifications & Permissions</h2>
          <p className="mt-3 text-sm text-muted">Drino may request the following permissions:</p>
          <ul className="mt-2 list-disc list-inside text-sm text-muted space-y-1">
            <li><strong>Notifications:</strong> to send maintenance reminders</li>
            <li><strong>Camera / Photos:</strong> to capture or upload vehicle images (only with your permission)</li>
            <li><strong>Storage:</strong> to save data and images locally</li>
          </ul>
          <p className="mt-2 text-sm text-muted">You can manage these permissions in your device settings. Denying some permissions may affect app functionality.</p>
        </section>

        <section className="glass-panel rounded-[1rem] p-6">
          <h2 className="text-lg font-semibold">8. Ads & Analytics</h2>
          <p className="mt-3 text-sm text-muted">Drino may use third‑party analytics services (such as Firebase Analytics) to collect anonymous usage data to help improve the app.</p>
          <p className="mt-2 text-sm text-muted">We do not display intrusive ads; you can opt out of analytics collection in app settings.</p>
        </section>

        <section className="glass-panel rounded-[1rem] p-6">
          <h2 className="text-lg font-semibold">9. Children's Data</h2>
          <p className="mt-3 text-sm text-muted">Drino is not directed at children under 13. We do not knowingly collect personal data from children. If you believe a child has provided us with personal data, contact us to request deletion.</p>
        </section>

        <section className="glass-panel rounded-[1rem] p-6">
          <h2 className="text-lg font-semibold">10. Changes to This Policy</h2>
          <p className="mt-3 text-sm text-muted">We may update this privacy policy over time. For material changes, we will notify you via:</p>
          <ul className="mt-2 list-disc list-inside text-sm text-muted space-y-1">
            <li>In-app notifications</li>
            <li>Email (if you are registered)</li>
            <li>Updating the “Last updated” date at the top of this page</li>
          </ul>
          <p className="mt-2 text-sm text-muted">Please review this policy periodically to stay informed about how we protect your data.</p>
        </section>

        <section className="glass-panel rounded-[1rem] p-6">
          <h2 className="text-lg font-semibold">11. Cookie Policy</h2>
          <p className="mt-3 text-sm text-muted">The Drino app does not use traditional cookies. Some local storage technologies may be used to store user preferences and settings on the device.</p>
        </section>

        <section className="glass-panel rounded-[1rem] p-6">
          <h2 className="text-lg font-semibold">12. Third‑party Sign‑In</h2>
          <p className="mt-3 text-sm text-muted">If you sign in with Google or Apple, we may receive basic profile information such as your name, email, and avatar to create and manage your account.</p>
        </section>

        <section className="glass-panel rounded-[1rem] p-6">
          <h2 className="text-lg font-semibold">13. Contact</h2>
          <p className="mt-3 text-sm text-muted">Email: drino.support@gmail.com</p>
        </section>
      </div>
    </SiteShell>
  );
}
