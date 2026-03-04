import {
  AboutUs,
  ContactForm,
  Features,
  Footer,
  Header,
  Hero,
  PricingPage,
} from "./components";
import { FAQ } from "./components/FAQs";

export default function Home() {
  return (
    <div className="w-full h-full font-inter" id="home">
      <div className="min-h-screen bg-background relative">
        <Header />
        <Hero />
      </div>
      <AboutUs />
      <PricingPage />
      <Features />
      <FAQ />
      <ContactForm />
      <Footer />
    </div>
  );
}
