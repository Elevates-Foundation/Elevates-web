import Loader from "@/components/loader";
import Hero from "@/components/hero";
import About from "@/components/about";
import Domains from "@/components/domains";
import Programs from "@/components/programs";
import Workflow from "@/components/workflow";
import Features from "@/components/features";
import Membership from "@/components/membership";
import FutureScope from "@/components/future-scope";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-paper overflow-x-hidden selection:bg-flame selection:text-paper">
      <Loader />
      <Hero />
      <div id="about"><About /></div>
      <div id="programs"><Programs /></div>
      <div id="workflow"><Workflow /></div>
      <div id="domains"><Domains /></div>
      <Membership />
      <FutureScope />
      <Features />
      <div id="footer"><Footer /></div>
    </main>
  );
}
