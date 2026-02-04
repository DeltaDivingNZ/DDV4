// app/page.tsx
export const metadata = {
  title: "Delta Detailing – Premium Car Detailing NZ",
  description: "Professional car detailing services in New Zealand. Make your car shine inside and out!",
  openGraph: {
    title: "Delta Detailing – Premium Car Detailing NZ",
    description: "Professional car detailing services in New Zealand. Make your car shine inside and out!",
    url: "https://www.deltadetailing.co.nz",
    images: [
      {
        url: "https://www.deltadetailing.co.nz/images/home-preview.jpg", // Replace with your homepage OG image
        width: 1200,
        height: 630,
        alt: "Delta Detailing – Car Detailing Services",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Delta Detailing – Premium Car Detailing NZ",
    description: "Professional car detailing services in New Zealand. Make your car shine inside and out!",
    images: ["https://www.deltadetailing.co.nz/images/home-preview.jpg"],
  },
};

import Hero from "./components/Hero";
import ServiceGrid from "./components/ServiceGrid";
import WhyChoose from "./components/WhyChoose";
import TestimonialsSlider from "./components/TestimonialsSlider";

export default function HomePage() {
  return (
    <>
      <Hero />
      <ServiceGrid />
      <WhyChoose />
      <TestimonialsSlider />
    </>
  );
}
