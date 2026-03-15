"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Globe,
  Heart,
  ArrowLeftRight,
  Instagram,
  Facebook,
  Check,
} from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

/* ───────── Section A - Hero ───────── */
function HeroSection() {
  return (
    <section className="relative flex flex-col items-center justify-center gap-6 px-5 md:px-8 lg:px-30 py-20 md:py-24 lg:py-25 min-h-[600px] md:min-h-[700px]">
      {/* Background image + overlay */}
      <Image
        src="/images/hero2-bg.jpg"
        alt=""
        fill
        className="object-cover"
        priority
      />
      <div className="absolute inset-0 bg-[#3D2E2A]/55" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center gap-6 text-center max-w-[680px]">
        <h1 className="font-[family-name:var(--font-noto-serif)] text-4xl md:text-5xl lg:text-[56px] font-medium tracking-tight text-warm-bg leading-[1.2]">
          瞳畫聚落
        </h1>
        <span className="font-serif text-xl md:text-2xl lg:text-[28px] tracking-[2px] text-warm-bg/80">
          TONG HUA Village
        </span>
        <p className="font-[family-name:var(--font-noto-serif)] text-lg md:text-[22px] text-warm-bg">
          遇見美好，同在一起。
        </p>
        <p className="text-sm md:text-base leading-[1.8] text-warm-bg/75 max-w-[560px]">
          從眼裡的美好畫面，到手裡的幸福實踐。這是一個不談金錢，只談天賦流動的聚落。
        </p>
        <a
          href="#form"
          className="rounded-full bg-brand px-8 py-3.5 text-[15px] font-medium text-white hover:bg-brand-dark transition-colors mt-2"
        >
          成為首批創始村民
        </a>
      </div>
    </section>
  );
}

/* ───────── Section B - Mission ───────── */
function MissionSection() {
  return (
    <section className="flex flex-col items-center gap-10 md:gap-12 bg-warm-bg px-5 md:px-8 lg:px-30 py-16 md:py-20">
      <div className="flex flex-col items-center gap-4 text-center max-w-[680px]">
        <h2 className="font-[family-name:var(--font-noto-serif)] text-2xl md:text-3xl lg:text-4xl font-medium tracking-tight text-text-dark">
          從記錄幸福，到共創美好
        </h2>
        <p className="text-sm md:text-base leading-[1.8] text-text-muted">
          過去，「瞳畫」用鏡頭捕捉你們眼裡的幸福瞬間。現在，我們想邀請你進入「聚落」，不再只是被動記錄，而是主動創造。在這裡，你的每一份才藝，都是連結另一個靈魂的鑰匙。
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 w-full max-w-[900px]">
        <div className="flex flex-col gap-4 rounded-[20px] bg-white p-6 md:p-8 border border-warm-border">
          <Globe size={28} className="text-brand" />
          <h3 className="font-[family-name:var(--font-noto-serif)] text-lg md:text-[22px] font-medium text-text-dark">
            聚落廣場
          </h3>
          <p className="text-sm leading-[1.7] text-text-muted">
            開放給所有熱愛生活的靈魂，進行跨界技能交換
          </p>
        </div>
        <div className="flex flex-col gap-4 rounded-[20px] bg-white p-6 md:p-8 border border-warm-border">
          <Heart size={28} className="text-[#5BBCC3]" />
          <h3 className="font-[family-name:var(--font-noto-serif)] text-lg md:text-[22px] font-medium text-text-dark">
            專屬空間
          </h3>
          <p className="text-sm leading-[1.7] text-text-muted">
            保留瞳畫初衷，為女性與女同社群舉辦深度療癒活動
          </p>
        </div>
      </div>
    </section>
  );
}

/* ───────── Section C - How It Works ───────── */
function HowItWorksSection() {
  return (
    <section className="flex flex-col items-center gap-10 md:gap-12 bg-white px-5 md:px-8 lg:px-30 py-16 md:py-20">
      <h2 className="font-[family-name:var(--font-noto-serif)] text-2xl md:text-3xl lg:text-4xl font-medium tracking-tight text-text-dark text-center">
        美好交換，就是這麼簡單
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 w-full max-w-[900px]">
        {/* Exchange 1 */}
        <div className="flex flex-col items-center gap-4">
          <span className="font-[family-name:var(--font-noto-serif)] text-lg md:text-xl font-medium text-text-dark">
            手感生活
          </span>
          <div className="flex flex-col items-center gap-5 rounded-2xl bg-white p-6 w-full">
            <div className="flex items-center gap-4">
              <Image
                src="/avatars/ex-craft-a.jpg"
                alt=""
                width={48}
                height={48}
                className="w-12 h-12 rounded-full object-cover"
              />
              <ArrowLeftRight size={20} className="text-brand" />
              <Image
                src="/avatars/ex-craft-b.jpg"
                alt=""
                width={48}
                height={48}
                className="w-12 h-12 rounded-full object-cover"
              />
            </div>
            <div className="flex flex-col items-center gap-2.5 w-full">
              <span className="rounded-full bg-brand-light px-4 py-2 text-[13px] font-medium text-brand">
                手工藝編織（毛線杯墊）
              </span>
              <span className="text-base text-text-light">↔</span>
              <span className="rounded-full bg-[#D0ECF0] px-4 py-2 text-[13px] font-medium text-brand-dark">
                基礎裁縫教學（學車縫拉鍊）
              </span>
            </div>
          </div>
          <span className="text-[13px] text-text-light text-center">
            同在一起完成一件居家飾品
          </span>
        </div>

        {/* Exchange 2 */}
        <div className="flex flex-col items-center gap-4">
          <span className="font-[family-name:var(--font-noto-serif)] text-lg md:text-xl font-medium text-text-dark">
            內在探索
          </span>
          <div className="flex flex-col items-center gap-5 rounded-2xl bg-white p-6 w-full">
            <div className="flex items-center gap-4">
              <Image
                src="/avatars/ex-soul-a.jpg"
                alt=""
                width={48}
                height={48}
                className="w-12 h-12 rounded-full object-cover"
              />
              <ArrowLeftRight size={20} className="text-brand" />
              <Image
                src="/avatars/ex-soul-b.jpg"
                alt=""
                width={48}
                height={48}
                className="w-12 h-12 rounded-full object-cover"
              />
            </div>
            <div className="flex flex-col items-center gap-2.5 w-full">
              <span className="rounded-full bg-brand-light px-4 py-2 text-[13px] font-medium text-brand">
                30分鐘頌缽療癒/冥想引導
              </span>
              <span className="text-base text-text-light">↔</span>
              <span className="rounded-full bg-[#D0ECF0] px-4 py-2 text-[13px] font-medium text-brand-dark">
                人像攝影基礎教學
              </span>
            </div>
          </div>
          <span className="text-[13px] text-text-light text-center">
            在平靜的呼吸中，捕捉最動人的神韻
          </span>
        </div>
      </div>
    </section>
  );
}

/* ───────── Section D - Form ───────── */
const giveOptions = ["手作", "冥想", "攝影", "健身", "音樂", "其他"];

function FormSection() {
  const [selectedGive, setSelectedGive] = useState<string[]>(["手作"]);
  const [selectedSpace, setSelectedSpace] = useState("plaza");

  const toggleGive = (opt: string) => {
    setSelectedGive((prev) =>
      prev.includes(opt) ? prev.filter((o) => o !== opt) : [...prev, opt]
    );
  };

  return (
    <section
      id="form"
      className="flex flex-col items-center bg-warm-section px-5 md:px-8 py-16 md:py-20"
    >
      <div className="flex flex-col gap-10 w-full max-w-[640px] rounded-[20px] bg-white p-6 md:p-10 lg:p-12 border border-warm-border">
        {/* Header */}
        <div className="flex flex-col items-center gap-3 text-center">
          <h2 className="font-serif text-2xl md:text-[32px] tracking-tight text-text-dark">
            成為首批創始村民
          </h2>
          <p className="text-sm md:text-base text-text-muted leading-[1.5]">
            留下你的美好，讓天賦開始流動
          </p>
        </div>

        <div className="h-px w-full bg-warm-border" />

        {/* Fields */}
        <div className="flex flex-col gap-6">
          {/* Name */}
          <div className="flex flex-col gap-1.5">
            <label className="text-sm font-medium text-text-dark">村民稱呼</label>
            <Input
              placeholder="你希望大家怎麼稱呼你？"
              className="h-11 rounded-[10px] border-warm-border bg-white"
            />
          </div>

          {/* Contact */}
          <div className="flex flex-col gap-1.5">
            <label className="text-sm font-medium text-text-dark">聯絡方式</label>
            <Input
              placeholder="Email 或 Line ID"
              className="h-11 rounded-[10px] border-warm-border bg-white"
            />
          </div>

          {/* Give options */}
          <div className="flex flex-col gap-2">
            <label className="text-sm font-medium text-text-dark">
              我能分享的美好 (Give)
            </label>
            <div className="flex flex-wrap gap-2.5">
              {giveOptions.map((opt) => {
                const active = selectedGive.includes(opt);
                return (
                  <button
                    key={opt}
                    onClick={() => toggleGive(opt)}
                    className={`rounded-full px-[18px] py-2.5 text-[13px] font-medium transition-colors ${
                      active
                        ? "bg-brand-light text-brand border border-[#7CCFD5]"
                        : "bg-warm-bg text-text-muted border border-transparent hover:border-warm-border"
                    }`}
                  >
                    {opt}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Take */}
          <div className="flex flex-col gap-1.5">
            <label className="text-sm font-medium text-text-dark">
              我想遇見的靈感 (Take)
            </label>
            <Textarea
              placeholder="簡單描述你想學習或體驗的事物..."
              className="h-[100px] rounded-[10px] border-warm-border bg-white resize-none"
            />
          </div>

          {/* Space selection */}
          <div className="flex flex-col gap-2.5">
            <label className="text-sm font-medium text-text-dark">
              我想加入的空間
            </label>
            <div className="flex flex-col gap-2.5">
              <button
                onClick={() => setSelectedSpace("plaza")}
                className={`flex items-center gap-3 rounded-xl p-4 md:px-5 border transition-colors text-left ${
                  selectedSpace === "plaza"
                    ? "bg-warm-bg border-[#7CCFD5]"
                    : "bg-white border-warm-border"
                }`}
              >
                <div
                  className={`flex items-center justify-center w-[22px] h-[22px] rounded-md shrink-0 ${
                    selectedSpace === "plaza"
                      ? "bg-brand"
                      : "bg-transparent border-[1.5px] border-[#D0CCC4]"
                  }`}
                >
                  {selectedSpace === "plaza" && (
                    <Check size={14} className="text-white" />
                  )}
                </div>
                <div className="flex flex-col gap-0.5">
                  <span className="text-sm font-medium text-text-dark">
                    聚落廣場（所有人）
                  </span>
                  <span className="text-xs text-text-light">
                    開放給所有熱愛生活的靈魂
                  </span>
                </div>
              </button>
              <button
                onClick={() => setSelectedSpace("exclusive")}
                className={`flex items-center gap-3 rounded-xl p-4 md:px-5 border transition-colors text-left ${
                  selectedSpace === "exclusive"
                    ? "bg-warm-bg border-[#7CCFD5]"
                    : "bg-white border-warm-border"
                }`}
              >
                <div
                  className={`flex items-center justify-center w-[22px] h-[22px] rounded-md shrink-0 ${
                    selectedSpace === "exclusive"
                      ? "bg-brand"
                      : "bg-transparent border-[1.5px] border-[#D0CCC4]"
                  }`}
                >
                  {selectedSpace === "exclusive" && (
                    <Check size={14} className="text-white" />
                  )}
                </div>
                <div className="flex flex-col gap-0.5">
                  <span className="text-sm font-medium text-text-dark">
                    專屬空間（女性／女同限定）
                  </span>
                  <span className="text-xs text-text-light">
                    為女性與女同社群舉辦深度療癒活動
                  </span>
                </div>
              </button>
            </div>
          </div>
        </div>

        {/* Submit */}
        <Button className="w-full rounded-full bg-brand hover:bg-brand-dark text-white py-3.5 h-auto text-base font-medium">
          預約我的美好交換
        </Button>
      </div>
    </section>
  );
}

/* ───────── Section E - Footer ───────── */
function Footer2() {
  return (
    <footer className="flex flex-col items-center gap-8 md:gap-10 bg-brand-darker px-5 md:px-8 lg:px-20 py-12 md:py-15">
      <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-6 w-full">
        <div className="flex flex-col gap-2">
          <span className="font-serif text-xl md:text-2xl tracking-tight text-warm-bg">
            瞳畫聚落
          </span>
          <span className="text-[13px] tracking-[2px] text-warm-bg/60">
            TONG HUA Village
          </span>
        </div>
        <div className="flex items-center gap-4">
          <a
            href="#"
            className="flex items-center justify-center w-10 h-10 rounded-full bg-white/10 text-warm-bg hover:bg-white/20 transition-colors"
          >
            <Instagram size={20} />
          </a>
          <a
            href="#"
            className="flex items-center justify-center w-10 h-10 rounded-full bg-white/10 text-warm-bg hover:bg-white/20 transition-colors"
          >
            <Facebook size={20} />
          </a>
        </div>
      </div>
      <div className="h-px w-full bg-white/10" />
      <div className="flex flex-col items-center gap-3">
        <span className="text-xs text-warm-bg/50 text-center">
          &copy; 2024 瞳畫聚落 TONG HUA Village. All Rights Reserved.
        </span>
        <span className="text-[11px] text-warm-bg/35 text-center">
          本平台僅提供技能媒合資訊，實體交換請注意自身安全。
        </span>
      </div>
    </footer>
  );
}

/* ───────── Page ───────── */
export default function Home2() {
  return (
    <div className="flex flex-col min-h-screen">
      <HeroSection />
      <MissionSection />
      <HowItWorksSection />
      <FormSection />
      <Footer2 />
    </div>
  );
}
