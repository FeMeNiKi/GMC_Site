import { NextResponse } from "next/server";
import { validateContactForm, type ContactFormData } from "@/lib/contact";

export async function POST(request: Request) {
  let body: ContactFormData;

  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { success: false, message: "Payload inválido." },
      { status: 400 }
    );
  }

  const errors = validateContactForm(body);

  if (errors) {
    return NextResponse.json(
      { success: false, message: "Dados inválidos.", errors },
      { status: 422 }
    );
  }

  console.info("[GMC Contact API]", {
    ...body,
    submittedAt: new Date().toISOString(),
  });

  return NextResponse.json({
    success: true,
    message: "Contato recebido com sucesso.",
  });
}
