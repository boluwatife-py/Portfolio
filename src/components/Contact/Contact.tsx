import ContactForm from "./ContactForm";
import ContactInfo from "./ContactInfo";
import Connect from "./Connect";
import Availabilty from "./Availability";

function Contact({ darkMode }: { darkMode: boolean }) {
  return (
    <section
      id="contact"
      className={`py-12 sm:py-16 md:py-20 ${
        darkMode ? "bg-gray-900" : "bg-gray-50"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-5 md:px-6">
        <div className="text-center mb-8 sm:mb-12 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2 sm:mb-3 md:mb-4">
            Get In <span className="text-indigo-600">Touch</span>
          </h2>
          <p
            className={`text-sm sm:text-base max-w-2xl mx-auto ${
              darkMode ? "text-gray-400" : "text-gray-600"
            }`}
          >
            Have a project in mind or want to discuss potential opportunities?
            Feel free to reach out to me.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-6 sm:gap-8 md:gap-12 items-start">
          <ContactForm darkMode={darkMode} />
          <div className="space-y-6 sm:space-y-7 md:space-y-8">
            <ContactInfo darkMode={darkMode} />
            <Connect darkMode={darkMode} />
            <Availabilty darkMode={darkMode} />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
