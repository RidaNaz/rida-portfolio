import Hero from "@/components/main/Hero"
import Skills from "@/components/main/Skills";
// import Education from "@/components/main/Education"
import Projects from "@/components/main/Projects"
import Certificate from "@/components/main/Certificate"
// import Image from "next/image";

export default function Home() {
  return (
    <main className="h-full w-full">
      <div className="flex flex-col gap-20">
        <Hero />
        <Skills />
        <Certificate/>
        <Projects />
      </div>

    </main>
  );
}