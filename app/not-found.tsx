import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-24 text-center sm:px-6 lg:px-8">
      <p className="text-sm font-semibold uppercase tracking-[0.3em] text-accent">
        Không tìm thấy
      </p>
      <h1 className="mt-4 font-display text-5xl text-ink">Nội dung bạn cần không tồn tại</h1>
      <p className="mt-4 text-lg text-steel">
        Liên kết có thể đã thay đổi hoặc nội dung chưa được xuất bản.
      </p>
      <Link
        className="mt-8 inline-flex rounded-full border border-accent/20 px-5 py-3 text-sm font-semibold text-accent hover:bg-accentSoft"
        href="/"
      >
        Quay về trang chủ
      </Link>
    </div>
  );
}
