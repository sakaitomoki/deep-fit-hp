import { Link } from "wouter";
import { Phone, Mail, MapPin, Instagram } from "lucide-react";
import { SiX, SiLine } from "react-icons/si";
import GymLogo from "./GymLogo";
import { gymConfig } from "@/lib/gymConfig";

const pageLinks = [
  { href: "/", label: "ホーム" },
  { href: "/about", label: "ジムについて" },
  { href: "/schedule", label: "クラス・料金" },
  { href: "/instructors", label: "インストラクター" },
  { href: "/contact", label: "お問い合わせ" },
];

export default function Footer() {
  return (
    <footer className="bg-[#2C1F10] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
          <div className="lg:col-span-1">
            <GymLogo size="md" />
            <p className="mt-4 text-white/60 text-sm leading-relaxed">
              兵庫県尼崎市のサーキット×キックボクシングジム。初心者から上級者まで、あなたの目標をサポートします。
            </p>
            <div className="flex items-center gap-3 mt-5">
              <a
                href={gymConfig.sns.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="DEEP.FIT Instagram公式アカウント"
                data-testid="link-sns-instagram"
                className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center transition-all duration-200 hover:bg-[#F2AC55]"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href={gymConfig.sns.twitter}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="DEEP.FIT X（旧Twitter）公式アカウント"
                data-testid="link-sns-x"
                className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center transition-all duration-200 hover:bg-[#F2AC55]"
              >
                <SiX className="w-4 h-4" />
              </a>
              <a
                href={gymConfig.sns.line}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="DEEP.FIT LINE公式アカウント"
                data-testid="link-sns-line"
                className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center transition-all duration-200 hover:bg-[#F2AC55]"
              >
                <SiLine className="w-4 h-4" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-heading font-semibold text-base tracking-wider mb-4 text-white/90">PAGES</h3>
            <ul className="space-y-2">
              {pageLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/60 text-sm hover:text-[#F2AC55] transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-heading font-semibold text-base tracking-wider mb-4 text-white/90">CONTACT</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-[#F2AC55] mt-0.5 shrink-0" />
                <a href={`tel:${gymConfig.phone}`} className="text-white/70 text-sm hover:text-white transition-colors">
                  {gymConfig.phone}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-4 h-4 text-[#F2AC55] mt-0.5 shrink-0" />
                <a href={`mailto:${gymConfig.email}`} className="text-white/70 text-sm hover:text-white transition-colors break-all">
                  {gymConfig.email}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#F2AC55] mt-0.5 shrink-0" />
                <span className="text-white/70 text-sm">{gymConfig.address}</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#F2AC55] mt-0.5 shrink-0 text-sm">🚲</span>
                <span className="text-white/70 text-sm">駐輪スペースあり（バイクも可）</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#F2AC55] mt-0.5 shrink-0 text-sm">🚗</span>
                <span className="text-white/70 text-sm">近隣にコインパーキングあり。お車でお越しの方はご利用ください。</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-heading font-semibold text-base tracking-wider mb-4 text-white/90">HOURS</h3>
            <ul className="space-y-2">
              {gymConfig.hoursDisplay.map((item, i) => (
                <li key={i} className="flex justify-between gap-2 text-sm">
                  <span className="text-white/50 shrink-0">{item.label}</span>
                  <span className="text-white/80 text-right">{item.time}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-10 pt-6 text-center">
          <p className="text-white/40 text-xs">
            © {new Date().getFullYear()} DEEP.FIT All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
