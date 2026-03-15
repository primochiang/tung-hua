import Image from "next/image";
import {
  Eye,
  Heart,
  Shield,
  Zap,
  ArrowLeftRight,
  Instagram,
  Facebook,
  Mail,
} from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Navigation } from "@/components/navigation";

/* ───────── Hero ───────── */
function Hero() {
  return (
    <section className="flex flex-col-reverse lg:flex-row items-center gap-8 md:gap-12 lg:gap-16 px-5 md:px-8 lg:px-30 py-12 md:py-16 lg:py-20 lg:min-h-[640px]">
      <div className="flex flex-col gap-6 md:gap-8 flex-1 text-center lg:text-left">
        <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold leading-[1.3] text-text-dark">
          讓天賦自由流動，
          <br />
          讓靈魂共鳴連結。
        </h1>
        <p className="text-base md:text-lg leading-[1.7] text-text-muted">
          瞳畫聚落是一個透過才藝交換，建立溫暖連結的女性社群。在這裡，每個人的天賦都值得被看見、被分享、被交換。
        </p>
        <div className="flex items-center justify-center lg:justify-start gap-3 md:gap-4">
          <a
            href="#signup"
            className="rounded-full bg-brand px-6 md:px-8 py-3 md:py-3.5 text-sm md:text-base font-medium text-white hover:bg-brand-dark transition-colors"
          >
            加入創始村民
          </a>
          <a
            href="#exchange"
            className="rounded-full border-[1.5px] border-brand px-6 md:px-8 py-3 md:py-3.5 text-sm md:text-base font-medium text-brand hover:bg-brand-light transition-colors"
          >
            探索交換
          </a>
        </div>
      </div>
      <div className="relative w-full lg:w-[520px] aspect-[520/480] rounded-3xl overflow-hidden shrink-0">
        <Image
          src="/images/generated-1773561795476.png"
          alt="Hero"
          fill
          className="object-cover"
          priority
        />
      </div>
    </section>
  );
}

/* ───────── Brand Story ───────── */
function BrandStory() {
  return (
    <section id="story" className="flex flex-col md:flex-row items-center gap-10 md:gap-12 lg:gap-20 px-5 md:px-8 lg:px-30 py-16 md:py-20 lg:py-24">
      <div className="relative w-full md:w-[360px] lg:w-[480px] aspect-[480/400] rounded-3xl overflow-hidden shrink-0">
        <Image
          src="/images/generated-1773561833381.png"
          alt="Brand Story"
          fill
          className="object-cover"
        />
      </div>
      <div className="flex flex-col gap-4 md:gap-6 flex-1 text-center md:text-left">
        <span className="text-[13px] font-semibold tracking-[2px] text-brand uppercase">
          Our Story
        </span>
        <h2 className="font-serif text-2xl md:text-3xl lg:text-4xl font-bold text-text-dark">
          一座屬於靈魂的聚落
        </h2>
        <div className="text-sm md:text-base leading-[1.8] text-text-muted whitespace-pre-line">
          {`在瞳畫聚落，每個人都擁有獨特的天賦。透過分享與交換，這些光芒在社群中流動。

我們相信，生活中最珍貴的不是物質的交換，而是靈魂與靈魂之間的共鳴。當你分享你的天賦，你也正在點亮另一個人的世界。

我們一起創造一種更有質感的生活。`}
        </div>
      </div>
    </section>
  );
}

/* ───────── Core Values ───────── */
const values = [
  {
    icon: Eye,
    title: "看見微光",
    desc: "每個人都有獨特的天賦，等待被看見。在這裡，你的才華不再被忽略。",
    color: "#2AABB3",
    bg: "#E5F5F7",
  },
  {
    icon: Heart,
    title: "靈魂共鳴",
    desc: "遇見懂你的人，在交換中找到心靈的共鳴與連結。",
    color: "#5BBCC3",
    bg: "#D5EEF0",
  },
  {
    icon: Shield,
    title: "真實安全",
    desc: "在信任與尊重中安心做自己，這是一個溫暖而安全的空間。",
    color: "#3D9BA3",
    bg: "#D0ECF0",
  },
  {
    icon: Zap,
    title: "能量流動",
    desc: "分享讓生命更豐盛，當天賦流動，每個人都在發光。",
    color: "#2AABB3",
    bg: "#D5EEF0",
  },
];

function CoreValues() {
  return (
    <section className="flex flex-col items-center gap-8 md:gap-12 bg-warm-section px-5 md:px-8 lg:px-30 py-16 md:py-20 lg:py-24">
      <div className="flex flex-col items-center gap-3 text-center">
        <span className="text-[13px] font-semibold tracking-[2px] text-brand uppercase">
          Core Values
        </span>
        <h2 className="font-serif text-2xl md:text-3xl lg:text-4xl font-bold text-text-dark">
          我們相信的力量
        </h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 w-full">
        {values.map((v) => (
          <div
            key={v.title}
            className="flex flex-col items-center gap-4 rounded-2xl bg-white p-6 md:p-8"
          >
            <div
              className="flex items-center justify-center w-14 h-14 rounded-full"
              style={{ backgroundColor: v.bg }}
            >
              <v.icon size={24} style={{ color: v.color }} />
            </div>
            <h3 className="font-serif text-xl font-semibold text-text-dark text-center">
              {v.title}
            </h3>
            <p className="text-sm leading-[1.6] text-text-muted text-center">
              {v.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ───────── Talent Exchange ───────── */
const exchanges = [
  { skill1: "編織", skill2: "攝影", s1Color: "#2AABB3", s1Bg: "#E5F5F7", s2Color: "#3D9BA3", s2Bg: "#D0ECF0" },
  { skill1: "冥想", skill2: "吉他", s1Color: "#3D9BA3", s1Bg: "#D0ECF0", s2Color: "#2AABB3", s2Bg: "#E5F5F7" },
  { skill1: "瑜伽", skill2: "語言", s1Color: "#2AABB3", s1Bg: "#D5EEF0", s2Color: "#5BBCC3", s2Bg: "#D5EEF0" },
  { skill1: "書法", skill2: "舞蹈", s1Color: "#2AABB3", s1Bg: "#E5F5F7", s2Color: "#3D9BA3", s2Bg: "#D0ECF0" },
];

function TalentExchange() {
  return (
    <section id="exchange" className="flex flex-col items-center gap-8 md:gap-12 px-5 md:px-8 lg:px-30 py-16 md:py-20 lg:py-24">
      <div className="flex flex-col items-center gap-3 text-center">
        <span className="text-[13px] font-semibold tracking-[2px] text-brand uppercase">
          Talent Exchange
        </span>
        <h2 className="font-serif text-2xl md:text-3xl lg:text-4xl font-bold text-text-dark">
          天賦交換，讓生活更美
        </h2>
        <p className="text-sm md:text-base text-text-muted">
          用你的才華，交換另一種生活體驗
        </p>
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 w-full">
        {exchanges.map((ex, i) => (
          <div
            key={i}
            className="flex flex-col items-center gap-4 md:gap-5 rounded-2xl bg-white p-4 md:p-6"
          >
            <div className="flex items-center gap-3 md:gap-4">
              <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-brand-medium" />
              <ArrowLeftRight size={18} className="text-brand md:hidden" />
              <ArrowLeftRight size={20} className="text-brand hidden md:block" />
              <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-brand-light" />
            </div>
            <div className="flex items-center gap-2 md:gap-3">
              <span
                className="rounded-full px-3 md:px-4 py-1.5 md:py-2 text-xs md:text-[13px] font-medium"
                style={{ backgroundColor: ex.s1Bg, color: ex.s1Color }}
              >
                {ex.skill1}
              </span>
              <span className="text-sm md:text-base text-text-light">↔</span>
              <span
                className="rounded-full px-3 md:px-4 py-1.5 md:py-2 text-xs md:text-[13px] font-medium"
                style={{ backgroundColor: ex.s2Bg, color: ex.s2Color }}
              >
                {ex.skill2}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ───────── Community Preview ───────── */
const members = [
  { name: "小雨", city: "台北", give: "水彩畫", take: "花藝" },
  { name: "Amber", city: "台中", give: "瑜伽", take: "陶藝" },
  { name: "心寧", city: "高雄", give: "攝影", take: "吉他" },
  { name: "Luna", city: "花蓮", give: "冥想", take: "手作蠟燭" },
];

function CommunityPreview() {
  return (
    <section id="community" className="flex flex-col items-center gap-8 md:gap-12 bg-warm-section px-5 md:px-8 lg:px-30 py-16 md:py-20 lg:py-24">
      <div className="flex flex-col items-center gap-3 text-center">
        <span className="text-[13px] font-semibold tracking-[2px] text-brand uppercase">
          Community
        </span>
        <h2 className="font-serif text-2xl md:text-3xl lg:text-4xl font-bold text-text-dark">
          遇見你的靈魂夥伴
        </h2>
        <p className="text-sm md:text-base text-text-muted">
          來自不同城市的創作者，正在這裡等待你的加入
        </p>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 w-full">
        {members.map((m) => (
          <div
            key={m.name}
            className="flex flex-col items-center gap-3 md:gap-4 rounded-2xl bg-white p-4 md:p-6"
          >
            <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-brand-medium" />
            <h3 className="font-serif text-base md:text-lg font-semibold text-text-dark">
              {m.name}
            </h3>
            <span className="text-xs md:text-[13px] text-text-light">{m.city}</span>
            <div className="flex flex-col gap-1.5 md:gap-2 w-full">
              <div className="flex items-center gap-1.5">
                <span className="text-xs font-semibold text-brand">Give:</span>
                <span className="text-xs text-text-muted">{m.give}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="text-xs font-semibold text-brand-dark">Take:</span>
                <span className="text-xs text-text-muted">{m.take}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ───────── Signup Form ───────── */
function SignupForm() {
  return (
    <section id="signup" className="flex flex-col items-center gap-8 md:gap-12 px-5 md:px-8 lg:px-30 py-16 md:py-20 lg:py-24">
      <div className="flex flex-col items-center gap-3 text-center">
        <span className="text-[13px] font-semibold tracking-[2px] text-brand uppercase">
          Join Us
        </span>
        <h2 className="font-serif text-2xl md:text-3xl lg:text-4xl font-bold text-text-dark">
          成為創始村民
        </h2>
        <p className="text-sm md:text-base text-text-muted">
          加入我們的創始社群，一起打造這座溫暖的聚落
        </p>
      </div>
      <div className="flex flex-col gap-4 md:gap-5 w-full max-w-[560px] rounded-3xl bg-white p-6 md:p-10 border border-warm-border">
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="flex flex-col gap-1.5 flex-1">
            <label className="text-sm font-medium text-text-dark">姓名</label>
            <Input placeholder="你的名字" className="h-11 rounded-[10px] border-warm-border bg-white" />
          </div>
          <div className="flex flex-col gap-1.5 flex-1">
            <label className="text-sm font-medium text-text-dark">Email</label>
            <Input placeholder="your@email.com" className="h-11 rounded-[10px] border-warm-border bg-white" />
          </div>
        </div>
        <div className="flex flex-col gap-1.5">
          <label className="text-sm font-medium text-text-dark">所在地</label>
          <Input placeholder="你所在的城市" className="h-11 rounded-[10px] border-warm-border bg-white" />
        </div>
        <div className="flex flex-col gap-1.5">
          <label className="text-sm font-medium text-text-dark">你可以分享的技能</label>
          <Textarea
            placeholder="例如：水彩畫、瑜伽、編織..."
            className="h-[100px] rounded-[10px] border-warm-border bg-white resize-none"
          />
        </div>
        <div className="flex flex-col gap-1.5">
          <label className="text-sm font-medium text-text-dark">你想學習的技能</label>
          <Textarea
            placeholder="例如：攝影、吉他、花藝..."
            className="h-[100px] rounded-[10px] border-warm-border bg-white resize-none"
          />
        </div>
        <Button className="w-full rounded-full bg-brand hover:bg-brand-dark text-white py-3.5 h-auto text-base font-medium">
          成為創始村民
        </Button>
      </div>
    </section>
  );
}

/* ───────── Footer ───────── */
function Footer() {
  return (
    <footer className="flex flex-col gap-8 md:gap-12 bg-brand-darker px-5 md:px-8 lg:px-30 py-10 md:py-16">
      <div className="flex flex-col md:flex-row md:justify-between gap-8 w-full">
        <div className="flex flex-col gap-3 max-w-[320px]">
          <span className="font-serif text-xl md:text-2xl font-bold text-warm-bg">
            瞳畫聚落
          </span>
          <p className="text-sm leading-[1.6] text-text-light">
            讓天賦流動，讓靈魂共鳴，讓生活更有美感。
          </p>
        </div>
        <div className="flex gap-12 md:gap-20">
          <div className="flex flex-col gap-3 md:gap-4">
            <span className="text-sm font-semibold text-warm-bg">About</span>
            <a href="#story" className="text-sm text-text-light hover:text-warm-bg transition-colors">我們的故事</a>
            <a href="#" className="text-sm text-text-light hover:text-warm-bg transition-colors">核心價值</a>
            <a href="#exchange" className="text-sm text-text-light hover:text-warm-bg transition-colors">交換模式</a>
          </div>
          <div className="flex flex-col gap-3 md:gap-4">
            <span className="text-sm font-semibold text-warm-bg">Contact</span>
            <a href="mailto:hello@tonghua.village" className="text-sm text-text-light hover:text-warm-bg transition-colors">hello@tonghua.village</a>
            <a href="#" className="text-sm text-text-light hover:text-warm-bg transition-colors">Instagram</a>
            <a href="#" className="text-sm text-text-light hover:text-warm-bg transition-colors">Facebook</a>
          </div>
        </div>
      </div>
      <div className="h-px w-full bg-[#2A5258]" />
      <div className="flex flex-col-reverse sm:flex-row items-center justify-between gap-4 w-full">
        <span className="text-xs md:text-[13px] text-text-muted text-center sm:text-left">
          &copy; 2026 瞳畫聚落 TongHua Village. All rights reserved.
        </span>
        <div className="flex items-center gap-4">
          <a href="#" className="text-text-light hover:text-warm-bg transition-colors">
            <Instagram size={20} />
          </a>
          <a href="#" className="text-text-light hover:text-warm-bg transition-colors">
            <Facebook size={20} />
          </a>
          <a href="mailto:hello@tonghua.village" className="text-text-light hover:text-warm-bg transition-colors">
            <Mail size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
}

/* ───────── Page ───────── */
export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-warm-bg">
      <Navigation />
      <Hero />
      <BrandStory />
      <CoreValues />
      <TalentExchange />
      <CommunityPreview />
      <SignupForm />
      <Footer />
    </div>
  );
}
