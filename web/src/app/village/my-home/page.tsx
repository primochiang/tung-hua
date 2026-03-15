"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  User,
  Sparkles,
  ArrowLeftRight,
  MapPin,
  Calendar,
  GraduationCap,
  BookOpen,
  Plus,
  CircleCheck,
  Clock3,
  Mail,
} from "lucide-react";

/* ───────── Header ───────── */
function Header() {
  return (
    <div className="flex items-center justify-between h-[60px] px-6 md:px-10 bg-gradient-to-b from-[#3D2E2ACC] to-[#3D2E2A99]">
      <Link href="/village" className="font-serif text-2xl font-bold text-white">
        瞳畫聚落
      </Link>
      <div className="flex items-center gap-4">
        <div className="flex items-center justify-center w-9 h-9 rounded-full bg-[#7CCFD5]">
          <User size={20} className="text-white" />
        </div>
      </div>
    </div>
  );
}

/* ───────── Hero Banner ───────── */
function HeroBanner() {
  return (
    <div className="relative flex flex-col items-center justify-center gap-3 h-[200px] md:h-[240px]">
      <Image
        src="/images/myhome-hero.png"
        alt="我的家"
        fill
        className="object-cover"
        priority
      />
      <div className="relative z-10 flex flex-col items-center gap-3">
        <h1 className="font-serif text-3xl md:text-5xl font-bold text-white">
          我的家
        </h1>
        <p className="text-sm md:text-base text-white/80">
          管理你的個人資訊、技能與交換紀錄
        </p>
      </div>
    </div>
  );
}

/* ───────── Personal Info ───────── */
function PersonalInfo() {
  return (
    <section className="flex flex-col gap-6">
      <div className="flex items-center gap-2.5">
        <User size={22} className="text-brand" />
        <h2 className="font-serif text-xl md:text-[22px] font-semibold text-text-dark">
          個人資訊
        </h2>
      </div>
      <div className="flex flex-col md:flex-row gap-8 rounded-2xl bg-white p-6 md:p-8 border border-warm-border">
        {/* Left - avatar & basic */}
        <div className="flex flex-col items-center gap-4 md:w-[180px] shrink-0">
          <Image
            src="/avatars/profile.png"
            alt="村民名稱"
            width={100}
            height={100}
            className="w-20 h-20 md:w-[100px] md:h-[100px] rounded-full object-cover"
          />
          <span className="font-serif text-lg md:text-xl font-semibold text-text-dark">
            村民名稱
          </span>
          <div className="flex items-center gap-1.5">
            <MapPin size={14} className="text-text-light" />
            <span className="text-sm text-text-muted">台北市</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Calendar size={14} className="text-text-light" />
            <span className="text-[13px] text-text-light">
              加入日期：2025/06/15
            </span>
          </div>
        </div>

        {/* Right - bio & progress */}
        <div className="flex flex-col gap-5 flex-1">
          <div className="flex flex-col gap-2">
            <span className="text-sm font-medium text-text-dark">自我介紹</span>
            <p className="text-sm leading-[1.6] text-text-muted">
              熱愛藝術與手作的村民，擅長水彩畫與書法。希望在聚落中認識更多志同道合的朋友，一起交流學習新技能！
            </p>
          </div>

          {/* Progress bar */}
          <div className="flex flex-col gap-2">
            <div className="flex items-center justify-between">
              <span className="text-[13px] text-text-muted">個人檔案完整度</span>
              <span className="text-[13px] font-semibold text-brand">75%</span>
            </div>
            <div className="h-2 w-full rounded bg-warm-border">
              <div className="h-2 rounded bg-brand" style={{ width: "75%" }} />
            </div>
          </div>

          <div className="flex justify-end">
            <button className="rounded-full bg-brand px-8 py-3.5 text-base font-medium text-white hover:bg-brand-dark transition-colors">
              編輯個人資料
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ───────── Skills ───────── */
function SkillsSection() {
  return (
    <section className="flex flex-col gap-6">
      <div className="flex items-center gap-2.5">
        <Sparkles size={22} className="text-brand" />
        <h2 className="font-serif text-xl md:text-[22px] font-semibold text-text-dark">
          我的技能
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Teach */}
        <div className="flex flex-col gap-4 rounded-2xl bg-white p-6 border border-warm-border">
          <div className="flex items-center gap-2">
            <GraduationCap size={18} className="text-brand" />
            <span className="font-serif text-lg font-semibold text-brand">
              我能教的
            </span>
          </div>
          <div className="flex flex-wrap gap-2.5">
            {["水彩畫", "書法", "攝影"].map((s) => (
              <span
                key={s}
                className="rounded-full bg-brand-light px-4 py-2 text-[13px] font-medium text-brand"
              >
                {s}
              </span>
            ))}
          </div>
          <button className="flex items-center gap-1.5 rounded-full border border-brand px-4 py-2 text-[13px] text-brand hover:bg-brand-light transition-colors w-fit">
            <Plus size={14} />
            新增技能
          </button>
        </div>

        {/* Learn */}
        <div className="flex flex-col gap-4 rounded-2xl bg-white p-6 border border-warm-border">
          <div className="flex items-center gap-2">
            <BookOpen size={18} className="text-brand-dark" />
            <span className="font-serif text-lg font-semibold text-brand-dark">
              我想學的
            </span>
          </div>
          <div className="flex flex-wrap gap-2.5">
            {["吉他", "烹飪", "程式設計"].map((s) => (
              <span
                key={s}
                className="rounded-full bg-[#D0ECF0] px-4 py-2 text-[13px] font-medium text-brand-dark"
              >
                {s}
              </span>
            ))}
          </div>
          <button className="flex items-center gap-1.5 rounded-full border border-brand-dark px-4 py-2 text-[13px] text-brand-dark hover:bg-[#D0ECF0] transition-colors w-fit">
            <Plus size={14} />
            新增技能
          </button>
        </div>
      </div>
    </section>
  );
}

/* ───────── Exchange Records ───────── */
const exchanges = [
  {
    status: "done",
    statusLabel: "已完成",
    statusColor: "#4CAF50",
    statusBg: "#E8F5E9",
    StatusIcon: CircleCheck,
    date: "2026/03/01",
    name1: "林小美",
    name2: "王大明",
    skill1: "水彩畫",
    skill2: "吉他",
  },
  {
    status: "active",
    statusLabel: "進行中",
    statusColor: "#2AABB3",
    statusBg: "#E5F5F7",
    StatusIcon: Clock3,
    date: "2026/03/10",
    name1: "林小美",
    name2: "陳志明",
    skill1: "攝影",
    skill2: "烹飪",
  },
  {
    status: "waiting",
    statusLabel: "等待回覆",
    statusColor: "#5BBCC3",
    statusBg: "#D5EEF0",
    StatusIcon: Mail,
    date: "2026/03/14",
    name1: "林小美",
    name2: "張雅琪",
    skill1: "書法",
    skill2: "程式設計",
  },
];

function ExchangeSection() {
  const [tab, setTab] = useState("all");
  const tabs = [
    { key: "all", label: "全部" },
    { key: "active", label: "進行中" },
    { key: "done", label: "已完成" },
  ];

  const filtered =
    tab === "all"
      ? exchanges
      : exchanges.filter((e) => e.status === tab);

  return (
    <section className="flex flex-col gap-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <ArrowLeftRight size={28} className="text-brand" />
          <h2 className="font-serif text-2xl md:text-[28px] font-bold text-text-dark">
            交換紀錄
          </h2>
        </div>
        <div className="flex items-center gap-2">
          {tabs.map((t) => (
            <button
              key={t.key}
              onClick={() => setTab(t.key)}
              className={`rounded-full px-5 py-2 text-[13px] font-medium transition-colors ${
                tab === t.key
                  ? "bg-brand text-white"
                  : "bg-transparent text-text-muted border border-warm-border hover:bg-warm-section"
              }`}
            >
              {t.label}
            </button>
          ))}
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-3 gap-4 md:gap-6">
        {[
          { num: "12", label: "總交換次數", color: "#2AABB3" },
          { num: "3", label: "進行中", color: "#3D9BA3" },
          { num: "8", label: "已完成", color: "#5BBCC3" },
        ].map((s) => (
          <div
            key={s.label}
            className="flex flex-col items-center gap-1 rounded-xl bg-warm-section p-4 md:py-4 md:px-6"
          >
            <span
              className="font-serif text-2xl md:text-[32px] font-bold"
              style={{ color: s.color }}
            >
              {s.num}
            </span>
            <span className="text-[13px] text-text-muted">{s.label}</span>
          </div>
        ))}
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
        {filtered.map((ex, i) => (
          <div
            key={i}
            className="flex flex-col gap-4 rounded-2xl bg-white p-6 border border-warm-border"
          >
            {/* Status row */}
            <div className="flex items-center justify-between">
              <div
                className="flex items-center gap-1.5 rounded-full px-3 py-1"
                style={{ backgroundColor: ex.statusBg }}
              >
                <ex.StatusIcon size={14} style={{ color: ex.statusColor }} />
                <span
                  className="text-xs font-medium"
                  style={{ color: ex.statusColor }}
                >
                  {ex.statusLabel}
                </span>
              </div>
              <span className="text-xs text-text-light">{ex.date}</span>
            </div>

            {/* Skills */}
            <div className="flex items-center justify-center gap-2">
              <span className="rounded-full bg-brand-light px-3.5 py-1.5 text-[13px] font-medium text-brand">
                {ex.skill1}
              </span>
              <span className="text-base text-text-light">↔</span>
              <span className="rounded-full bg-[#D0ECF0] px-3.5 py-1.5 text-[13px] font-medium text-brand-dark">
                {ex.skill2}
              </span>
            </div>

            {/* Avatars */}
            <div className="flex items-center justify-center gap-3">
              <div className="w-12 h-12 rounded-full bg-brand-medium" />
              <ArrowLeftRight size={20} className="text-brand" />
              <div className="w-12 h-12 rounded-full bg-brand-light" />
            </div>

            {/* Names */}
            <div className="flex items-center justify-center gap-2 text-sm">
              <span className="font-medium text-text-dark">{ex.name1}</span>
              <span className="text-text-light">與</span>
              <span className="font-medium text-text-dark">{ex.name2}</span>
            </div>
          </div>
        ))}
      </div>

      {/* CTA */}
      <div className="flex justify-center">
        <button className="rounded-full bg-brand px-8 py-3.5 text-base font-medium text-white hover:bg-brand-dark transition-colors">
          發起新交換
        </button>
      </div>
    </section>
  );
}

/* ───────── Page ───────── */
export default function MyHomePage() {
  return (
    <div className="flex flex-col min-h-screen bg-warm-bg">
      <Header />
      <HeroBanner />
      <div className="flex flex-col gap-12 px-5 md:px-8 lg:px-20 py-10 md:py-12 max-w-[1280px] mx-auto w-full">
        <PersonalInfo />
        <SkillsSection />
        <ExchangeSection />
      </div>
    </div>
  );
}
