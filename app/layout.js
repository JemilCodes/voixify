import "./globals.css";

export const metadata = {
  title: "Voixify",
  description:
    "Boost your online reputation and testimonials on platforms like Google, Facebook, Bookings.com, Airbnb and More.",
  keywords:
    "Online Reputation Management, Testimonial Enhancement, Boost Reviews, Google Reviews, Facebook Testimonials, Bookings.com Reviews, Airbnb Feedback, Reputation Building, Online Testimonial Strategy, Platform-Specific Testimonials, Review Optimization, Testimonial Marketing, Social Proof Enhancement, Trustworthy Online Presence, Positive Customer Feedback",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta
          http-equiv="Content-Security-Policy"
          content="upgrade-insecure-requests"
        />
      </head>
      <body className="center">{children}</body>
    </html>
  );
}
