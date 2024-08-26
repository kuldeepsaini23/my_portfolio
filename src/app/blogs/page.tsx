import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import BlogCard from "@/components/core/Blogs/BlogCard";
import FeatureCard from "@/components/core/Blogs/FeatureCard";
import { FloatingNav } from "@/components/ui/FloatingNavbar";
import { navItems } from "@/data";

export default function Home() {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col mx-auto sm:px-10 px-5 overflow-clip">
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={navItems} />
        <Hero showButton={false} />
        <FeatureCard />
        {/* Blog Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto mb-20 px-4 z-[100]">
          {
            Array.from({ length: 6 }).map((_, i) => (
              <BlogCard key={i} />
            ))
          }
        </div>
        <Footer />
      </div>
    </main>
  );
}
