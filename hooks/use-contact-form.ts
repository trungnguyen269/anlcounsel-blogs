"use client";

import { useState } from "react";

import type { ContactPayload } from "@/services/api/types";

type FormErrors = Partial<Record<keyof ContactPayload, string>>;

const initialForm: ContactPayload = {
  name: "",
  email: "",
  phone: "",
  company: "",
  message: ""
};

function validate(values: ContactPayload): FormErrors {
  const errors: FormErrors = {};

  if (!values.name.trim()) {
    errors.name = "Vui lòng nhập họ tên.";
  }

  if (!values.email.trim() || !/^\S+@\S+\.\S+$/.test(values.email)) {
    errors.email = "Email không hợp lệ.";
  }

  if (!values.phone.trim()) {
    errors.phone = "Vui lòng nhập số điện thoại.";
  }

  if (!values.message.trim() || values.message.trim().length < 20) {
    errors.message = "Nội dung cần tối thiểu 20 ký tự.";
  }

  return errors;
}

export function useContactForm() {
  const [values, setValues] = useState<ContactPayload>(initialForm);
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [feedback, setFeedback] = useState<string | null>(null);

  async function handleSubmit() {
    const nextErrors = validate(values);
    setErrors(nextErrors);
    setFeedback(null);

    if (Object.keys(nextErrors).length > 0) {
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_BASE_URL ?? "https://api.anlcounsel.vn"}/v1/contact`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
          },
          body: JSON.stringify(values)
        }
      );

      if (!response.ok) {
        throw new Error("Contact submission failed");
      }

      const payload = (await response.json()) as { message?: string };
      setFeedback(payload.message ?? "Đã gửi yêu cầu thành công.");
      setValues(initialForm);
    } catch {
      setFeedback("Không thể gửi yêu cầu lúc này. Vui lòng thử lại sau.");
    } finally {
      setIsSubmitting(false);
    }
  }

  return {
    values,
    errors,
    isSubmitting,
    feedback,
    setField<K extends keyof ContactPayload>(field: K, value: ContactPayload[K]) {
      setValues((current) => ({ ...current, [field]: value }));
    },
    handleSubmit
  };
}
