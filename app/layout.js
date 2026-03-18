import "./globals.css";

export const metadata = {
  title: "Call Tv Customer Service",
  description: "Your All-in-One Solution for Speed, Safety & Streaming.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="antialiased">
        {/* <a href="tel:8013403488">Call Us: 801-340-3488  */}
        {children}
        {/* </a> */}
      </body>
    </html>
  );
}