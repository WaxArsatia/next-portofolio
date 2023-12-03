import "./globals.css";

export const metadata = {
  title: "Denis Arsyatya Portofolio",
  description: "Denis Arsyatya Portofolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-slate-100">{children}</body>
    </html>
  );
}
