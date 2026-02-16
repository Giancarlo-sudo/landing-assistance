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
    <div className="w-full h-full" id="home">
      <Header />
      <Hero />
      <AboutUs />
      <PricingPage />
      <Features />
      <FAQ />
      <ContactForm />
      <Footer />
    </div>
  );
}
