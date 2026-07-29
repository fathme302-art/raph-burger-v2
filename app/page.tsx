import Link from "next/link";

export default function Home() {
  return (
    <main
      className="relative min-h-screen w-full flex flex-col items-center justify-center px-6 text-center"
      style={{
        background:
          "radial-gradient(120% 90% at 50% 8%, color-mix(in srgb, #C64A22 26%, white) 0%, color-mix(in srgb, #C64A22 15%, white) 55%, #ffffff 100%)",
      }}
    >
      <p className="text-xs tracking-[0.3em] uppercase text-black/50 mb-4">
        Abidjan · Côte d&apos;Ivoire
      </p>
      <h1 className="font-display text-5xl md:text-7xl text-black leading-none">
        RAPH BURGER
      </h1>
      <p className="mt-4 text-sm md:text-base tracking-widest uppercase text-black/70">
        Cuisine ivoirienne authentique
      </p>
      <p className="mt-6 max-w-md text-black/60 text-sm md:text-base leading-relaxed">
        Des saveurs généreuses préparées maison, avec des produits frais et le
        vrai goût du pays. Du garba au foutou sauce graine, on vous sert
        l&apos;authenticité dans chaque assiette.
      </p>
      <div className="mt-8 flex flex-wrap gap-3 justify-center">
        <Link
          href="/menu"
          className="rounded-full bg-black px-6 py-3 text-sm font-semibold text-white transition-transform hover:scale-105 active:scale-95"
        >
          Voir le Menu
        </Link>
        <a
          href="https://wa.me/2250594979530"
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full bg-[#25D366] px-6 py-3 text-sm font-semibold text-white transition-transform hover:scale-105 active:scale-95"
        >
          Commander sur WhatsApp
        </a>
      </div>
    </main>
  );
}
