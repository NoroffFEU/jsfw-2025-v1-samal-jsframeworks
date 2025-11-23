import { type FormEvent, useState } from "react";
import { toast } from "react-toastify";
import { validateContactForm } from "@/pages/Contact/utils/validation/contactValidation";
import type {
  ContactFormErrors,
  ContactFormValues,
} from "@/types/contact.types";

export const Contact = () => {
  const [values, setValues] = useState<ContactFormValues>({
    name: "",
    subject: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState<ContactFormErrors>({});

  /** Update form values and clear errors when user types */
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setValues((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: undefined }));
  };

  /** Validate and submit contact form */
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    const validationErrors = validateContactForm(values);
    const hasErrors = Object.keys(validationErrors).length > 0;

    if (hasErrors) {
      setErrors(validationErrors);
      toast.error("Please fix the errors in the form.");
      return;
    }

    toast.success("Your message has been sent successfully!");
    setValues({ name: "", subject: "", email: "", message: "" });
  };

  return (
    <div className="bg-white mx-auto py-18 h-full container">
      <div className="mx-auto max-w-md">
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div>
            <label htmlFor="name">Full Name</label>
            <input
              name="name"
              type="text"
              placeholder="Your name"
              value={values.name}
              onChange={handleChange}
              className="mt-2 p-2 border border-gray-300 rounded-md w-full"
            />
            {errors.name && (
              <p className="mt-1 text-red-500 text-sm">{errors.name}</p>
            )}
          </div>

          <div>
            <label htmlFor="subject">Subject</label>
            <input
              name="subject"
              type="text"
              placeholder="Order problem…"
              value={values.subject}
              onChange={handleChange}
              className="mt-2 p-2 border border-gray-300 rounded-md w-full"
            />
            {errors.subject && (
              <p className="mt-1 text-red-500 text-sm">{errors.subject}</p>
            )}
          </div>

          <div>
            <label htmlFor="email">Email</label>
            <input
              name="email"
              type="email"
              placeholder="roberto@example.com"
              value={values.email}
              onChange={handleChange}
              className="mt-2 p-2 border border-gray-300 rounded-md w-full"
            />
            {errors.email && (
              <p className="mt-1 text-red-500 text-sm">{errors.email}</p>
            )}
          </div>

          <div>
            <label htmlFor="message">Message</label>
            <textarea
              name="message"
              rows={4}
              placeholder="helo, why no coming product...?"
              value={values.message}
              onChange={handleChange}
              className="mt-2 p-2 border border-gray-300 rounded-md w-full max-h-35"
            />
            {errors.message && (
              <p className="mt-1 text-red-500 text-sm">{errors.message}</p>
            )}
          </div>

          <button
            className="bg-black hover:bg-gray-800 px-4 py-2 w-full text-white cursor-pointer"
            type="submit"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};
