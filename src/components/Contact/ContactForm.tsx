import React, { useState } from "react";
import toast from "react-hot-toast";
import Input, { TextArea } from "../ui/Input";
import Label from "../ui/Label";

function ContactForm({ darkMode }: { darkMode: boolean }) {
  const [errors, setErrors] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);

    const name = formData.get("name")?.toString().trim() ?? "";
    const email = formData.get("email")?.toString().trim() ?? "";
    const subject = formData.get("subject")?.toString().trim() ?? "";
    const message = formData.get("message")?.toString().trim() ?? "";

    const newErrors = {
      name: name === "" ? "Name is required" : "",
      email:
        email === ""
          ? "Email is required"
          : !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
          ? "Invalid email address"
          : "",
      subject: subject === "" ? "Subject is required" : "",
      message: message === "" ? "Message is required" : "",
    };

    setErrors(newErrors);

    const hasError = Object.values(newErrors).some((msg) => msg !== "");

    if (!hasError) {
      const loadingToast = toast.loading("Sending message...");
      try {
        const response = await fetch(
          "https://boluwatifeileri.pythonanywhere.com/send-email",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              subject,
              body: `From: ${name} <${email}>\n\n${message}`,
            }),
          }
        );

        if (!response.ok) {
          const errorData = await response.json();
          console.error("Email failed to send:", errorData.error);
          toast.error("Failed to send message: " + errorData.error, {
            id: loadingToast,
          });
          return;
        }

        toast.success("Message sent successfully!", {
          id: loadingToast,
        });
        form.reset();
        setErrors({ name: "", email: "", subject: "", message: "" });
      } catch (error) {
        console.error("Unexpected error:", error);
        toast.error("An unexpected error occurred. Please try again.", {
          id: loadingToast,
        });
      }
    }
  };

  return (
    <div
      className={`rounded-xl p-4 sm:p-6 md:p-8 ${
        darkMode ? "bg-gray-800" : "bg-white"
      }`}
    >
      <h3 className="text-lg sm:text-xl font-bold mb-4 sm:mb-6">
        Send Me a Message
      </h3>
      <form
        className="space-y-4 sm:space-y-6"
        onSubmit={handleSubmit}
        noValidate
      >
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
            required
            error={errors.name}
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
            required
            error={errors.email}
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
            required
            autoComplete="off"
            error={errors.subject}
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
            required
            error={errors.message}
          />
        </div>
        <button
          type="submit"
          className="w-full px-4 sm:px-6 py-2.5 sm:py-3 text-xs sm:text-sm font-medium rounded-lg bg-indigo-600 hover:bg-indigo-700 text-white transition-colors !rounded-button whitespace-nowrap cursor-pointer"
        >
          Send Message
        </button>
      </form>
    </div>
  );
}

export default ContactForm;
