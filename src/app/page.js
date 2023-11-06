import Hero from "@/components/home/hero"
import Contact from "@/components/home/contact";
import Chat from "@/components/chat/chat";
import Feature from "@/components/home/feature";


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between ">
      <Hero />
      <Feature />
      <Chat />
      <Contact />
    </main>
  );
}
