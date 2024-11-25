import Link from 'next/link'
import { Button } from "@/components/ui/button"

export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-white">
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">Terms of Service</h1>
        
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Welcome to Evertwine</h2>
          <p className="mb-4">
            We're delighted to have you join Evertwine, a ground-breaking dating platform where safety, inclusivity, and the pursuit of genuine connections take center stage. In the ever-evolving world of online dating, Evertwine stands out by offering an unparalleled experience that goes beyond the conventional.
          </p>
          <p className="mb-4">
            Our mission is to redefine what it means to connect in the digital age, creating a space where meaningful interactions flourish and every member feels valued and respected.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Our Vision</h2>
          <p className="mb-4">
            At the heart of Evertwine is the belief that relationships, whether friendships or romantic endeavors, should be built on a foundation of trust and mutual respect. We've meticulously designed our platform to encapsulate this ethos, embedding advanced safety features, fostering an inclusive community, and leveraging technology to enhance the depth of connections.
          </p>
          <p className="mb-4">
            Evertwine isn't just an app; it's a movement towards more authentic, lasting relationships in a world where digital connection is ubiquitous.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">A Safe Haven for Connection</h2>
          <p className="mb-4">
            Understanding the importance of safety in the online realm, Evertwine prioritizes your security above all else. We employ a verification process to ensure that your journey with us is as safe as it is enjoyable. Every member must be verified to interact with other users, ensuring a trusted environment where meaningful connections can flourish.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Embarking on Your Evertwine Journey</h2>
          <p className="mb-4">
            By joining Evertwine, you're not just signing up for another dating app; you're taking a step towards discovering relationships that resonate on a deeper level. We're here to guide and support you through this exciting journey, offering tools and features designed to introduce you to people who share your interests, values, and aspirations.
          </p>
          <p className="mb-4">
            As you navigate through the Evertwine experience, remember that our team is always here to support you. Whether you're seeking advice, have questions about our features, or need assistance with your account, we're just an email away at <a href="mailto:contact@evertwine.com" className="text-blue-600 hover:underline">contact@evertwine.com</a>.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Your Legal Agreement with Evertwine</h2>
          <p className="mb-4">
            When you create an Evertwine account or use our services in any capacity, you enter into a legal contract with Evertwine, LLC. This agreement is comprised of these Terms and Conditions along with our Privacy Policy, which together govern your use of the Evertwine platform.
          </p>
          <p className="mb-4">
            It's important to understand that this contract is legally binding, meaning it creates rights and responsibilities for both you and Evertwine.
          </p>
        </section>

        {/* Add more sections as needed */}

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
          <p className="mb-4">
            If you have any questions about these Terms of Service, please contact us at <a href="mailto:contact@evertwinedating.com" className="text-blue-600 hover:underline">contact@evertwinedating.com</a>.
          </p>
        </section>

        <div className="flex justify-center mt-8">
          <Button asChild>
            <Link href="/">Return to Home</Link>
          </Button>
        </div>
      </main>
    </div>
  )
}

