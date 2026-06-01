"use client";

import { useActionState } from "react";
import { finalCta } from "@/content/copy";
import { submitContactForm } from "@/app/actions/contact";
import type { ContactFormState } from "@/lib/contact";
import { Button } from "@/components/ui/Button";

const initialState: ContactFormState = {
  success: false,
  message: "",
};

function FormField({
  id,
  label,
  type = "text",
  name,
  error,
  required = true,
}: {
  id: string;
  label: string;
  type?: string;
  name: string;
  error?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label htmlFor={id} className="block text-sm font-medium text-slate-700 mb-1.5">
        {label}
      </label>
      <input
        id={id}
        name={name}
        type={type}
        required={required}
        aria-invalid={error ? true : undefined}
        aria-describedby={error ? `${id}-error` : undefined}
        className={`w-full rounded-lg border px-4 py-2.5 text-slate-900 placeholder:text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-primary-600 focus:border-transparent ${
          error ? "border-red-400 bg-red-50/50" : "border-slate-200 bg-white"
        }`}
      />
      {error && (
        <p id={`${id}-error`} className="mt-1 text-sm text-red-600" role="alert">
          {error}
        </p>
      )}
    </div>
  );
}

export function FinalCta() {
  const [state, formAction, pending] = useActionState(submitContactForm, initialState);

  return (
    <section
      id="contato"
      className="py-20 sm:py-28 bg-gradient-to-br from-primary-600 to-primary-700"
      aria-labelledby="cta-heading"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          <div className="text-white">
            <h2
              id="cta-heading"
              className="text-3xl sm:text-4xl font-bold leading-tight text-balance"
            >
              {finalCta.headline}
            </h2>
            <p className="mt-4 text-lg text-primary-50/90">{finalCta.subheadline}</p>
          </div>

          <div className="rounded-2xl bg-white p-6 sm:p-8 shadow-soft-lg">
            <h3 className="text-xl font-bold text-slate-900 mb-6">{finalCta.formTitle}</h3>

            {state.success ? (
              <div
                className="rounded-lg bg-green-50 border border-green-200 p-4 text-green-800"
                role="status"
              >
                <p className="font-medium">{state.message}</p>
              </div>
            ) : (
              <form action={formAction} className="space-y-4" noValidate>
                {state.message && !state.success && (
                  <p className="text-sm text-red-600 bg-red-50 border border-red-200 rounded-lg p-3" role="alert">
                    {state.message}
                  </p>
                )}

                <FormField
                  id="name"
                  label="Nome"
                  name="name"
                  error={state.errors?.name}
                />
                <FormField
                  id="company"
                  label="Empresa"
                  name="company"
                  error={state.errors?.company}
                />
                <FormField
                  id="phone"
                  label="Telefone"
                  name="phone"
                  type="tel"
                  error={state.errors?.phone}
                />
                <FormField
                  id="email"
                  label="E-mail"
                  name="email"
                  type="email"
                  error={state.errors?.email}
                />

                <Button type="submit" size="lg" className="w-full" disabled={pending}>
                  {pending ? "Enviando..." : finalCta.cta}
                </Button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
