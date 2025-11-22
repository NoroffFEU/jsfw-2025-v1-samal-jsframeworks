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
    <div className="container mx-auto py-18 h-full bg-white">
      <div className="max-w-md mx-auto">
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div>
            <label htmlFor="name">Full Name</label>
            <input
              name="name"
              type="text"
              placeholder="Your name"
              value={values.name}
              onChange={handleChange}
              className="border border-gray-300 w-full mt-2 rounded-md p-2"
            />
            {errors.name && (
              <p className="text-red-500 text-sm mt-1">{errors.name}</p>
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
              className="border border-gray-300 w-full mt-2 rounded-md p-2"
            />
            {errors.subject && (
              <p className="text-red-500 text-sm mt-1">{errors.subject}</p>
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
              className="border border-gray-300 w-full mt-2 rounded-md p-2"
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">{errors.email}</p>
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
              className="border border-gray-300 w-full mt-2 rounded-md p-2 max-h-35"
            />
            {errors.message && (
              <p className="text-red-500 text-sm mt-1">{errors.message}</p>
            )}
          </div>

          <button
            className="bg-black text-white py-2 px-4 w-full hover:bg-gray-800 cursor-pointer "
            type="submit"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};
