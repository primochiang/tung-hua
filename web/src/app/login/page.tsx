import Image from "next/image";
import Link from "next/link";
import { DoorOpen, ArrowLeft } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function LoginPage() {
  return (
    <div className="flex min-h-screen bg-warm-bg">
      {/* Left - Village Illustration */}
      <div className="hidden lg:flex relative flex-1 justify-end">
        <Image
          src="/images/login-village.png"
          alt="瞳畫聚落村莊"
          fill
          className="object-cover"
          priority
        />
        {/* Gradient overlay - only darken bottom text area */}
        <div className="absolute inset-0 bg-[linear-gradient(to_top,#1A3C40DD_0%,#1A3C4099_20%,transparent_45%,transparent_100%)]" />
        {/* Text overlay */}
        <div className="relative z-10 flex flex-col gap-4 justify-end p-12 pb-16">
          <span className="text-sm font-medium tracking-[2px] text-[#7CCFD5]">
            Welcome Back
          </span>
          <h1 className="font-serif text-5xl font-bold leading-[1.2] text-warm-bg">
            歡迎回到
            <br />
            瞳畫聚落
          </h1>
          <p className="text-base text-warm-bg/85">
            推開村莊的門，走進屬於你的創作天地
          </p>
        </div>
      </div>

      {/* Right - Login Form */}
      <div className="flex flex-col items-center justify-center w-full lg:w-[560px] shrink-0 px-6 py-12 lg:px-15">
        <div className="flex flex-col gap-8 w-full max-w-[400px]">
          {/* Form Header */}
          <div className="flex flex-col gap-2">
            <DoorOpen size={32} className="text-brand" />
            <h2 className="font-serif text-3xl font-bold text-text-dark">
              進入村莊
            </h2>
            <p className="text-sm text-text-muted">
              輸入你的帳號密碼，回到村莊
            </p>
          </div>

          {/* Fields */}
          <div className="flex flex-col gap-5">
            <div className="flex flex-col gap-1.5">
              <label className="text-sm font-medium text-text-dark">帳號</label>
              <Input
                type="email"
                placeholder="請輸入電子信箱"
                className="h-11 rounded-[10px] border-warm-border bg-white"
              />
            </div>
            <div className="flex flex-col gap-1.5">
              <label className="text-sm font-medium text-text-dark">密碼</label>
              <Input
                type="password"
                placeholder="請輸入密碼"
                className="h-11 rounded-[10px] border-warm-border bg-white"
              />
            </div>
          </div>

          {/* Forgot password */}
          <div className="flex justify-end">
            <a href="#" className="text-[13px] font-medium text-brand hover:text-brand-dark transition-colors">
              忘記密碼？
            </a>
          </div>

          {/* Login button */}
          <Button className="w-full rounded-full bg-brand hover:bg-brand-dark text-white py-3.5 h-auto text-base font-medium">
            進入村莊
          </Button>

          {/* Divider */}
          <div className="flex items-center gap-4">
            <div className="flex-1 h-px bg-warm-border" />
            <span className="text-[13px] text-text-light">或</span>
            <div className="flex-1 h-px bg-warm-border" />
          </div>

          {/* Join guide */}
          <div className="flex flex-col items-center gap-3">
            <span className="text-sm text-text-muted">還不是村民嗎？</span>
            <Link
              href="/#signup"
              className="flex items-center justify-center w-full rounded-full border-[1.5px] border-brand px-8 py-3.5 text-base font-medium text-brand hover:bg-brand-light transition-colors"
            >
              加入村民
            </Link>
          </div>

          {/* Back home */}
          <Link
            href="/"
            className="flex items-center justify-center gap-2 text-[13px] text-text-light hover:text-text-muted transition-colors"
          >
            <ArrowLeft size={16} />
            返回首頁
          </Link>
        </div>
      </div>
    </div>
  );
}
