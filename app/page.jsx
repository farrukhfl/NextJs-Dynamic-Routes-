import Header from "@/components/header/Header";
import Link from "next/link";

export default function HomePage() {
  return (
    <main>
      <Header />
      <p>🔥 Let&apos;s goo! 🔥</p>
      <p>
        <Link href="/about">About Us</Link>
      </p>
      <p>
        <Link href="/blog">Blog</Link>
      </p>
    </main>
  );
}
