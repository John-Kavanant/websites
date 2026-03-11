import ContactForm from "@/components/sections/ContactForm";

const ContactPage = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-white via-iza-blue-light to-iza-purple-light">
        <div className="container-custom text-center">
          <h1 className="heading-xl mb-4">Contact Us</h1>
          <p className="text-iza-gray-dark max-w-2xl mx-auto">
            Have questions about IzaHealth's solutions? Ready to start your monitoring program?
            Our team is here to help you every step of the way.
          </p>
        </div>
      </section>

      {/* Contact Form Section */}
      <ContactForm />
    </div>
  );
};

export default ContactPage;
