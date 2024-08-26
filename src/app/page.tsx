import Approach from "@/components/Approach";
import Clients from "@/components/Clients";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import Grid from "@/components/Grid";
import Hero from "@/components/Hero";
import RecentProjects from "@/components/RecentProjects";
import { FloatingNav } from "@/components/ui/FloatingNavbar";
import { navItems } from "@/data";
import { client } from "@/lib/sanityClient";

export default async function Home() {
  const hero = await client.fetch(`*[_type == "hero"][0]`);
  const testimonials = await client.fetch(`*[_type == "testimonial"]`);
  const workExp = await client.fetch(`*[_type == "workExperience"] | order(date asc)`);
  const approach = await client.fetch(`*[_type == "approach"] | order(order asc)`);
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col mx-auto sm:px-10 px-5 overflow-clip">
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={navItems} />
        <Hero data={hero}/>
        <Grid />
        <RecentProjects />
        <Clients data={testimonials}/>
        <Experience workExperience={workExp}/>
        <Approach data={approach}/>
        <Footer/>
      </div>
    </main>
  );
}
