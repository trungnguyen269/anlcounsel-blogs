"use client";

import { useEffect } from "react";

import { Button } from "@/components/ui/button";

export default function Error({
  error,
  reset
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="mx-auto max-w-4xl px-4 py-24 text-center sm:px-6 lg:px-8">
      <p className="text-sm font-semibold uppercase tracking-[0.3em] text-accent">Lỗi hệ thống</p>
      <h1 className="mt-4 font-display text-5xl text-ink">Không thể tải nội dung</h1>
      <p className="mt-4 text-lg text-steel">
        Đã xảy ra lỗi ngoài dự kiến trong quá trình lấy dữ liệu từ external API.
      </p>
      <div className="mt-8 flex justify-center">
        <Button onClick={reset} type="button">
          Thử lại
        </Button>
      </div>
    </div>
  );
}
