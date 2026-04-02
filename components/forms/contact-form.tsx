"use client";

import { Button } from "@/components/ui/button";
import { useContactForm } from "@/hooks/use-contact-form";

export function ContactForm() {
  const { values, errors, isSubmitting, feedback, setField, handleSubmit } = useContactForm();

  return (
    <form
      className="rounded-[2rem] border border-border bg-white p-8 shadow-card"
      onSubmit={(event) => {
        event.preventDefault();
        void handleSubmit();
      }}
    >
      <div className="grid gap-6 md:grid-cols-2">
        <label className="space-y-2 text-sm font-semibold text-ink">
          Họ tên
          <input
            className="w-full rounded-2xl border border-border bg-parchment px-4 py-3 font-normal text-ink outline-none focus:border-accent"
            value={values.name}
            onChange={(event) => setField("name", event.target.value)}
          />
          {errors.name ? <span className="block text-xs text-red-600">{errors.name}</span> : null}
        </label>

        <label className="space-y-2 text-sm font-semibold text-ink">
          Email
          <input
            className="w-full rounded-2xl border border-border bg-parchment px-4 py-3 font-normal text-ink outline-none focus:border-accent"
            type="email"
            value={values.email}
            onChange={(event) => setField("email", event.target.value)}
          />
          {errors.email ? (
            <span className="block text-xs text-red-600">{errors.email}</span>
          ) : null}
        </label>

        <label className="space-y-2 text-sm font-semibold text-ink">
          Số điện thoại
          <input
            className="w-full rounded-2xl border border-border bg-parchment px-4 py-3 font-normal text-ink outline-none focus:border-accent"
            value={values.phone}
            onChange={(event) => setField("phone", event.target.value)}
          />
          {errors.phone ? (
            <span className="block text-xs text-red-600">{errors.phone}</span>
          ) : null}
        </label>

        <label className="space-y-2 text-sm font-semibold text-ink">
          Doanh nghiệp
          <input
            className="w-full rounded-2xl border border-border bg-parchment px-4 py-3 font-normal text-ink outline-none focus:border-accent"
            value={values.company}
            onChange={(event) => setField("company", event.target.value)}
          />
        </label>
      </div>

      <label className="mt-6 block space-y-2 text-sm font-semibold text-ink">
        Nội dung yêu cầu
        <textarea
          className="min-h-40 w-full rounded-[1.5rem] border border-border bg-parchment px-4 py-3 font-normal text-ink outline-none focus:border-accent"
          value={values.message}
          onChange={(event) => setField("message", event.target.value)}
        />
        {errors.message ? (
          <span className="block text-xs text-red-600">{errors.message}</span>
        ) : null}
      </label>

      <div className="mt-6 flex flex-wrap items-center gap-4">
        <Button disabled={isSubmitting} type="submit">
          {isSubmitting ? "Đang gửi..." : "Gửi yêu cầu"}
        </Button>
        {feedback ? <p className="text-sm text-steel">{feedback}</p> : null}
      </div>
    </form>
  );
}
