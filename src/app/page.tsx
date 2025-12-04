import { AboutUs, ContactForm, Features, Footer, Header, Hero } from "./components";
import { FAQ } from "./components/FAQs";

export default function Home() {
  return (
    <div className="w-full h-full">
      <div className="min-h-screen bg-linear-to-r via-sky-50 from-white from-40% to-white my-6 mx-8 rounded-2xl shadow-md">
        <Header />
        <Hero />
      </div>

      <AboutUs />
      <Features />
      <FAQ />
      <ContactForm />
      <Footer />
    </div>
  );
}
