"use server";

import {
  validateContactForm,
  type ContactFormData,
  type ContactFormState,
} from "@/lib/contact";

export async function submitContactForm(
  _prevState: ContactFormState,
  formData: FormData
): Promise<ContactFormState> {
  const data: ContactFormData = {
    name: String(formData.get("name") ?? ""),
    company: String(formData.get("company") ?? ""),
    phone: String(formData.get("phone") ?? ""),
    email: String(formData.get("email") ?? ""),
  };

  const errors = validateContactForm(data);

  if (errors) {
    return {
      success: false,
      message: "Verifique os campos destacados e tente novamente.",
      errors,
    };
  }

  // Integrate with Resend, Formspree, or internal CRM API here.
  console.info("[GMC Contact]", {
    ...data,
    submittedAt: new Date().toISOString(),
  });

  return {
    success: true,
    message:
      "Recebemos seu pedido! Nossa equipe entrará em contato em breve para agendar sua demonstração.",
  };
}
