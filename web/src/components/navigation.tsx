"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const links = [
  { href: "#story", label: "理念" },
  { href: "#exchange", label: "交換模式" },
  { href: "#community", label: "社群" },
];

export function Navigation() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="relative flex items-center justify-between px-5 md:px-8 lg:px-30 h-16 md:h-20 w-full">
      <Link href="/">
        <Image
          src="/logo-cropped.png"
          alt="瞳畫聚落"
          width={200}
          height={64}
          className="h-10 md:h-16 w-auto object-contain"
        />
      </Link>

      {/* Desktop nav */}
      <div className="hidden md:flex items-center gap-8">
        {links.map((l) => (
          <a
            key={l.href}
            href={l.href}
            className="text-sm font-medium text-text-muted hover:text-brand transition-colors"
          >
            {l.label}
          </a>
        ))}
        <Link
          href="/login"
          className="rounded-full border-[1.5px] border-brand px-8 py-3.5 text-base font-medium text-brand hover:bg-brand-light transition-colors"
        >
          進入村莊
        </Link>
        <a
          href="#signup"
          className="rounded-full bg-brand px-8 py-3.5 text-base font-medium text-white hover:bg-brand-dark transition-colors"
        >
          加入村民
        </a>
      </div>

      {/* Mobile hamburger */}
      <button
        onClick={() => setOpen(!open)}
        className="md:hidden p-2 text-text-dark"
        aria-label="Toggle menu"
      >
        {open ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Mobile menu */}
      {open && (
        <div className="absolute top-full left-0 right-0 bg-warm-bg border-b border-warm-border flex flex-col items-center gap-4 py-6 z-50 md:hidden">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="text-base font-medium text-text-muted hover:text-brand transition-colors"
            >
              {l.label}
            </a>
          ))}
          <Link
            href="/login"
            onClick={() => setOpen(false)}
            className="rounded-full border-[1.5px] border-brand px-8 py-3 text-base font-medium text-brand hover:bg-brand-light transition-colors"
          >
            進入村莊
          </Link>
          <a
            href="#signup"
            onClick={() => setOpen(false)}
            className="rounded-full bg-brand px-8 py-3 text-sm font-medium text-white hover:bg-brand-dark transition-colors"
          >
            加入村民
          </a>
        </div>
      )}
    </nav>
  );
}
