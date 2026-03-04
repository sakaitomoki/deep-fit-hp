import { Link } from "wouter";
import { Phone, MessageSquare } from "lucide-react";
import { SiLine } from "react-icons/si";
import { gymConfig } from "@/lib/gymConfig";

export default function MobileContactBar() {
  return (
    <div className="lg:hidden fixed bottom-0 left-0 right-0 z-50 flex border-t border-white/10 shadow-2xl" style={{ paddingBottom: "env(safe-area-inset-bottom)" }}>
      <a
        href={gymConfig.sns.line}
        target="_blank"
        rel="noopener noreferrer"
        data-testid="mobile-bar-line"
        className="flex-1 flex flex-col items-center justify-center gap-1 bg-[#06C755] text-white py-3 text-center active:brightness-90 transition-all"
      >
        <SiLine className="w-6 h-6" />
        <span className="text-[10px] font-medium tracking-wide">LINE</span>
      </a>

      <a
        href={`tel:${gymConfig.phone}`}
        data-testid="mobile-bar-phone"
        className="flex-1 flex flex-col items-center justify-center gap-1 bg-[#4D5058] text-white py-3 text-center active:brightness-90 transition-all border-x border-white/10"
      >
        <Phone className="w-6 h-6" />
        <span className="text-[10px] font-medium tracking-wide">電話</span>
      </a>

      <Link
        href="/contact"
        data-testid="mobile-bar-contact"
        className="flex-1 flex flex-col items-center justify-center gap-1 bg-[#F2AC55] text-white py-3 text-center active:brightness-90 transition-all"
      >
        <MessageSquare className="w-6 h-6" />
        <span className="text-[10px] font-medium tracking-wide">お問い合わせ</span>
      </Link>
    </div>
  );
}
