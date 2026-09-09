import { Phone } from "lucide-react";
import { SiLine, SiInstagram } from "react-icons/si";
import { gymConfig } from "@/lib/gymConfig";
import { useT } from "@/lib/i18n";

export default function MobileContactBar() {
  const t = useT();
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
        <span className="text-[10px] font-medium tracking-wide">{t("体験予約")}</span>
      </a>

      <a
        href={`tel:${gymConfig.phone}`}
        data-testid="mobile-bar-phone"
        className="flex-1 flex flex-col items-center justify-center gap-1 bg-[#EAA53B] text-[#111111] py-3 text-center active:brightness-90 transition-all border-x border-black/10"
      >
        <Phone className="w-6 h-6" />
        <span className="text-[10px] font-medium tracking-wide">{t("電話")}</span>
      </a>

      <a
        href={gymConfig.sns.instagram}
        target="_blank"
        rel="noopener noreferrer"
        data-testid="mobile-bar-instagram"
        className="flex-1 flex flex-col items-center justify-center gap-1 text-white py-3 text-center active:brightness-90 transition-all"
        style={{ background: "#E1306C" }}
      >
        <span
          className="w-6 h-6 rounded-[7px] flex items-center justify-center"
          style={{ background: "radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%, #d6249f 60%, #285AEB 90%)" }}
        >
          <SiInstagram className="w-4 h-4 text-white" />
        </span>
        <span className="text-[10px] font-medium tracking-wide">Instagram</span>
      </a>
    </div>
  );
}
