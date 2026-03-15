"use client";

import Image from "next/image";
import Link from "next/link";
import { User } from "lucide-react";

const locations = [
  {
    name: "村莊入口",
    image: "/images/village/entrance.png",
    imgW: 200,
    imgH: 200,
    x: "41.7%",
    y: "5.9%",
    href: "/",
  },
  {
    name: "村莊公告",
    image: "/images/village/bulletin.png",
    imgW: 180,
    imgH: 180,
    x: "12.5%",
    y: "17.6%",
    href: "#",
  },
  {
    name: "聚落廣場",
    image: "/images/village/square.png",
    imgW: 220,
    imgH: 220,
    x: "36.1%",
    y: "35.2%",
    href: "#",
  },
  {
    name: "交換技能市集",
    image: "/images/village/market.png",
    imgW: 220,
    imgH: 220,
    x: "63.9%",
    y: "27.3%",
    href: "#",
  },
  {
    name: "我的家",
    image: "/images/village/home1.png",
    imgW: 200,
    imgH: 200,
    x: "11.1%",
    y: "54.7%",
    href: "/village/my-home",
  },
  {
    name: "作品展覽廊",
    image: "/images/village/gallery.png",
    imgW: 200,
    imgH: 200,
    x: "73.6%",
    y: "58.6%",
    href: "#",
  },
  {
    name: "學習工坊",
    image: "/images/village/workshop.png",
    imgW: 200,
    imgH: 200,
    x: "41.7%",
    y: "68.4%",
    href: "#",
  },
];

function LocationCard({
  loc,
}: {
  loc: (typeof locations)[number];
}) {
  return (
    <Link
      href={loc.href}
      className="absolute flex flex-col items-center gap-2 group"
      style={{ left: loc.x, top: loc.y }}
    >
      <div className="relative overflow-hidden rounded-[20px] shadow-[0_4px_12px_rgba(0,0,0,0.2)] group-hover:shadow-[0_6px_20px_rgba(0,0,0,0.3)] transition-shadow duration-300">
        <Image
          src={loc.image}
          alt={loc.name}
          width={loc.imgW}
          height={loc.imgH}
          className="object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      <span className="rounded-full bg-black/55 px-4 py-1.5 text-sm md:text-base font-semibold text-white backdrop-blur-sm">
        {loc.name}
      </span>
    </Link>
  );
}

export default function VillagePage() {
  return (
    <div className="relative w-full h-screen overflow-hidden bg-warm-bg">
      {/* Village background map */}
      <div className="relative w-full h-full">
        <Image
          src="/images/village/bg.png"
          alt="瞳畫聚落村莊地圖"
          fill
          className="object-cover"
          priority
        />

        {/* Title bar with gradient */}
        <div className="absolute top-0 left-0 right-0 z-20 flex items-center justify-between h-[60px] px-6 md:px-10 bg-gradient-to-b from-black/40 to-transparent">
          <span className="font-serif text-xl md:text-2xl font-bold text-white">
            瞳畫聚落
          </span>
          <div className="flex items-center gap-4">
            <div className="flex items-center justify-center w-9 h-9 rounded-full bg-[#7CCFD5]">
              <User size={20} className="text-white" />
            </div>
          </div>
        </div>

        {/* Location cards */}
        <div className="absolute inset-0 z-10">
          {locations.map((loc) => (
            <LocationCard key={loc.name} loc={loc} />
          ))}
        </div>
      </div>
    </div>
  );
}
