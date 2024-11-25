import Link from 'next/link'
import { Navbar } from '@/components/navbar'

export default function CookiePolicy() {
  return (
    <div className="min-h-screen bg-white text-gray-800">
      <Navbar />
      <main className="container mx-auto px-6 py-12">
        <h1 className="text-3xl font-bold mb-6">Cookie Policy</h1>
        <p className="mb-4">At Evertwine, we prioritize your privacy and are committed to transparency about how we collect, use, and store information through cookies and similar technologies. This Cookie Policy explains what cookies are, how we use them, and your choices regarding their usage. This policy aligns with our Privacy Policy and Terms of Service to protect your data and enhance your experience on our platform.</p>

        <h2 className="text-2xl font-semibold mt-6 mb-3">What Are Cookies?</h2>
        <p className="mb-4">Cookies are small text files placed on your device (computer, smartphone, or other electronic devices) when you visit our website or use our app. They are widely used to make websites work more efficiently, enhance user experience, and provide information to the site owners.</p>

        <h2 className="text-2xl font-semibold mt-6 mb-3">Types of Cookies We Use</h2>
        <p className="mb-2">Evertwine uses different types of cookies to serve various purposes:</p>
        <ul className="list-disc pl-6 mb-4">
          <li><strong>Essential Cookies:</strong> These cookies are necessary for the operation of our website and app. They enable you to navigate through our site and use its features, such as accessing secure areas.</li>
          <li><strong>Analytical/Performance Cookies:</strong> These cookies allow us to analyze how users interact with our site, which helps us improve the functionality and user experience.</li>
          <li><strong>Functionality Cookies:</strong> These cookies are used to recognize you when you return to our site. They enable us to personalize our content for you, greet you by name, and remember your preferences (e.g., your choice of language or region).</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-6 mb-3">How We Use Cookies</h2>
        <p className="mb-2">We use cookies to:</p>
        <ul className="list-disc pl-6 mb-4">
          <li><strong>Enhance User Experience:</strong> By remembering your preferences and settings, we provide a more personalized experience.</li>
          <li><strong>Improve Site Performance:</strong> Cookies help us understand how our services are being used and allow us to make necessary improvements.</li>
          <li><strong>Security and Verification:</strong> Ensure that your account and data are secure and verify user authenticity.</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-6 mb-3">No Advertising or Targeting Cookies</h2>
        <p className="mb-4">Evertwine is committed to providing a user-focused experience without the intrusion of advertisements. We do not use cookies for advertising purposes or to track your browsing behavior for targeted marketing. Your interactions on our platform are free from any advertising influences.</p>

        <h2 className="text-2xl font-semibold mt-6 mb-3">Third-Party Cookies</h2>
        <p className="mb-4">In addition to our own cookies, we use third-party cookies for performance and analytics purposes. These third parties may use cookies alone or in conjunction with web beacons or other tracking technologies to collect information about how you use our website. The data they collect may be associated with your personal information or may be anonymous, helping us improve our services.</p>

        <h2 className="text-2xl font-semibold mt-6 mb-3">Your Cookie Choices</h2>
        <p className="mb-4">You have the right to decide whether to accept or reject cookies. You can set your web browser to refuse cookies or to alert you when cookies are being sent. However, if you choose to disable cookies, some parts of our services may not function properly or may become inaccessible.</p>

        <h3 className="text-xl font-semibold mt-4 mb-2">Browser Controls</h3>
        <p className="mb-2">Most web browsers allow you to control cookies through their settings preferences. You can find more information about how to manage cookies on the most common browsers by visiting the following links:</p>
        <ul className="list-disc pl-6 mb-4">
          <li><Link href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Google Chrome</Link></li>
          <li><Link href="https://support.mozilla.org/en-US/kb/enable-and-disable-cookies-website-preferences" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Mozilla Firefox</Link></li>
          <li><Link href="https://support.apple.com/guide/safari/manage-cookies-and-website-data-sfri11471" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Safari</Link></li>
          <li><Link href="https://support.microsoft.com/en-us/microsoft-edge/delete-cookies-in-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Microsoft Edge</Link></li>
          <li><Link href="https://help.opera.com/en/latest/web-preferences/#cookies" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Opera</Link></li>
        </ul>

        <h3 className="text-xl font-semibold mt-4 mb-2">Opt-Out Tools</h3>
        <p className="mb-2">Although we do not use cookies for advertising, you can still opt out of tracking by certain third parties that we use for analytics:</p>
        <ul className="list-disc pl-6 mb-4">
          <li><Link href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Google Analytics Opt-Out Browser Add-on</Link></li>
          <li><Link href="https://optout.networkadvertising.org/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Network Advertising Initiative</Link></li>
          <li><Link href="https://optout.aboutads.info/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Digital Advertising Alliance</Link></li>
        </ul>

        <h2 className="text-2xl font-semibold mt-6 mb-3">Updating Our Cookie Policy</h2>
        <p className="mb-4">We may update our Cookie Policy from time to time to reflect changes in technology, data protection laws, or our operations. We will notify you of any significant changes by posting the new policy on our website and updating the date at the top of this policy. Your continued use of our services following the posting of changes constitutes your acceptance of such changes.</p>

        <h2 className="text-2xl font-semibold mt-6 mb-3">Contact Us</h2>
        <p className="mb-4">If you have any questions or concerns about our use of cookies or this Cookie Policy, please contact us at <a href="mailto:contact@evertwinedating.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">contact@evertwinedating.com</a>.</p>

        <h2 className="text-2xl font-semibold mt-6 mb-3">Conclusion</h2>
        <p className="mb-4">At Evertwine, your privacy and experience are paramount. We use cookies to improve our services and provide a better, more personalized experience. Your control and transparency over how we use these technologies are critical, and we encourage you to manage your cookie preferences to suit your comfort and expectations.</p>
        <p className="mb-4">By using Evertwine, you agree to our use of cookies as described in this policy. We appreciate your trust and are committed to ensuring your experience on our platform is both secure and enjoyable.</p>
      </main>
    </div>
  )
}

