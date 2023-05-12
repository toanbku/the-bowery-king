import { HomePage } from "@/modules/home";

export default function Home() {
  return (
    <div className="w-full h-full min-h-screen p-4">
      {/* header */}

      {/* container */}
      <main
        className={`md:pt-20 max-w-3xl mx-auto flex flex-col gap-10 items-center justify-between `}
      >
        <HomePage />
      </main>

      {/* footer */}
    </div>
  );
}
