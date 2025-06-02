import Input, { TextArea } from "../ui/Input";
import Label from "../ui/Label";

function ContactForm({ darkMode }: { darkMode: boolean }) {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };
  return (
    <div className={`rounded-xl p-8 ${darkMode ? "bg-gray-800" : "bg-white"}`}>
      <h3 className="text-xl font-bold mb-6">Send Me a Message</h3>
      <form className="space-y-6" onSubmit={handleSubmit}>
        <div>
          <Label darkMode={darkMode} htmlFor="name">
            Your Name
          </Label>
          <Input
            darkMode={darkMode}
            placeholder="Boluwatife Akingbade"
            autoComplete="name"
            type="text"
            id="name"
            name="name"
            required={true}
          />
        </div>
        <div>
          <Label darkMode={darkMode} htmlFor="email">
            Your Email
          </Label>

          <Input
            darkMode={darkMode}
            placeholder="email@boluwatife.tech"
            autoComplete="email"
            type="email"
            id="email"
            name="email"
            required={true}
          />
        </div>
        <div>
          <Label darkMode={darkMode} htmlFor="subject">
            Subject
          </Label>
          <Input
            darkMode={darkMode}
            placeholder="Project Inquiry"
            type="text"
            id="subject"
            name="subject"
            required={true}
            autoComplete="off"
          />
        </div>
        <div>
          <Label darkMode={darkMode} htmlFor="message">
            Message
          </Label>
          <TextArea
            darkMode={darkMode}
            id="message"
            name="message"
            placeholder="Your message here..."
            required={true}
          />
        </div>
        <button
          type="submit"
          className="w-full px-6 py-3 text-sm font-medium rounded-lg bg-indigo-600 hover:bg-indigo-700 text-white transition-colors !rounded-button whitespace-nowrap cursor-pointer"
        >
          Send Message
        </button>
      </form>
    </div>
  );
}

export default ContactForm;
