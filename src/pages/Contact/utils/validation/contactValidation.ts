import type {
	ContactFormErrors,
	ContactFormValues,
} from "@/types/contact.types";

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

/** Validate contact form fields and return error messages for invalid inputs */
export const validateContactForm = (
	values: ContactFormValues,
): ContactFormErrors => {
	const errors: ContactFormErrors = {};

	if (!values.name || values.name.trim().length < 3) {
		errors.name = "Name must be at least 3 characters.";
	}

	if (!values.subject || values.subject.trim().length < 3) {
		errors.subject = "Subject must be at least 3 characters.";
	}

	if (!values.email || !emailRegex.test(values.email)) {
		errors.email = "Please enter a valid email address.";
	}

	if (!values.message || values.message.trim().length < 10) {
		errors.message = "Message must be at least 10 characters.";
	}

	return errors;
};
