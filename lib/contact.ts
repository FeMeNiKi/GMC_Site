export type ContactFormData = {
  name: string;
  company: string;
  phone: string;
  email: string;
};

export type ContactFormState = {
  success: boolean;
  message: string;
  errors?: Partial<Record<keyof ContactFormData, string>>;
};

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function validateContactForm(data: ContactFormData): ContactFormState["errors"] {
  const errors: Partial<Record<keyof ContactFormData, string>> = {};

  if (!data.name.trim() || data.name.trim().length < 2) {
    errors.name = "Informe seu nome completo.";
  }

  if (!data.company.trim() || data.company.trim().length < 2) {
    errors.company = "Informe o nome da empresa ou granja.";
  }

  const phoneDigits = data.phone.replace(/\D/g, "");
  if (phoneDigits.length < 10) {
    errors.phone = "Informe um telefone válido com DDD.";
  }

  if (!emailRegex.test(data.email.trim())) {
    errors.email = "Informe um e-mail válido.";
  }

  return Object.keys(errors).length > 0 ? errors : undefined;
}
