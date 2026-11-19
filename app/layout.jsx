import "./globals.css";

export const metadata = {
  title: "Pangasinan Heritage Digital Showcase",
  description: "A lightweight mobile-first heritage showcase for Pangasinan destinations."
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
