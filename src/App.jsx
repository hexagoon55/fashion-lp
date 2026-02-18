import { motion } from "framer-motion";

export default function LandingPage() {
  const sections = [
    { id: "concept", title: "CONCEPT", description: "ここにブランドコンセプトが入ります。静けさと緊張感をまとった、ハイエンドな世界観を簡潔な言葉で表現します。" },
    { id: "gallery", title: "GALLERY", description: "ここにビジュアルギャラリーが入ります。余白を大きく取り、1点ずつ魅せる構成を想定しています。" },
    { id: "news", title: "NEWS", description: "ここに最新情報が入ります。コレクション発表や限定リリースなどを簡潔に掲載します。" },
    { id: "company", title: "COMPANY", description: "ここに会社概要が入ります。過度な装飾を避け、信頼感を重視した情報設計を想定しています。" },
  ];

  return (
    <div className="font-serif text-gray-900 bg-white selection:bg-black selection:text-white">
      <header className="fixed top-0 left-0 w-full bg-white z-50">
        <nav className="max-w-6xl mx-auto flex justify-between items-center px-8 py-6">
          <div className="text-sm tracking-[0.3em]">BRAND NAME</div>
          <ul className="flex gap-10 text-[11px] tracking-[0.35em]">
            {sections.map((s) => (
              <li key={s.id}>
                <a href={`#${s.id}`} className="hover:opacity-50 transition">{s.title}</a>
              </li>
            ))}
          </ul>
        </nav>
      </header>

      <main className="pt-32">
        {sections.map((s) => (
          <section
            id={s.id}
            key={s.id}
            className="min-h-screen flex items-center justify-center px-8"
          >
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.0, ease: "easeOut" }}
              viewport={{ once: true }}
              className="max-w-xl text-center"
            >
              <h2 className="text-3xl md:text-4xl font-light tracking-[0.4em] mb-12">
                {s.title}
              </h2>
              <p className="text-sm leading-[2.2] text-gray-500">
                {s.description}
              </p>
            </motion.div>
          </section>
        ))}
      </main>

      <footer className="py-20 text-center text-[10px] tracking-[0.4em] text-gray-400">
        © 20XX BRAND NAME
      </footer>
    </div>
  );
}
