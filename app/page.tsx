import ClientsSection from "@/components/clientssection";
import ContactsSection from "@/components/contactssection";
import EbooksSection from "@/components/ebookssection";
import HeroSection from "@/components/herosection";
import WeAreSection from "@/components/wearesesection";
import WeWorkSection from "@/components/weworks";

export default function Home() {
  return (
    <main className="">
      <HeroSection />
      <WeAreSection />
      <WeWorkSection />
      <ClientsSection />
      <EbooksSection />
      <ContactsSection />
    </main>
  );
}
