import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X, Phone } from "lucide-react";
import { gymConfig } from "@/lib/gymConfig";

const deepFitLogo = "/images/deepfit-logo.webp";

const navLinks = [
  { href: "/", label: "ホーム" },
  { href: "/about", label: "ジムについて" },
  { href: "/schedule", label: "クラス・料金" },
  { href: "/instructors", label: "インストラクター" },
  { href: "/contact", label: "お問い合わせ" },
];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-black/52 backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <div className="w-full px-3 sm:px-6 lg:px-10 xl:px-14">
        <div className="flex items-center justify-between h-12 lg:h-14">
          <Link
            href="/"
            data-testid="link-logo"
            className="flex items-center shrink-0"
            style={{ marginTop: "-6px", marginBottom: "-6px" }}
          >
            <img
              src={deepFitLogo}
              alt="DEEP.FIT"
              data-testid="img-logo"
              width={88}
              height={88}
              className="h-[72px] lg:h-[88px] w-auto object-contain drop-shadow-lg"
            />
          </Link>

          <nav className="hidden lg:flex items-center gap-0.5">
            {navLinks.map((link) => {
              const isActive = location === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  data-testid={`link-nav-${link.href.replace("/", "") || "home"}`}
                  className={`px-3.5 py-1.5 rounded text-xs font-medium tracking-wide transition-all duration-200 ${
                    isActive
                      ? "text-[#EAA53B]"
                      : "text-white/60 hover:text-white/90"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-2">
            <a
              href={`tel:${gymConfig.phone}`}
              data-testid="button-phone"
              className="hidden lg:flex items-center gap-2 bg-[#F2AC55] text-white px-4 py-2 rounded-full text-sm font-medium transition-all duration-200"
            >
              <Phone className="w-4 h-4" />
              {gymConfig.phone}
            </a>

            <button
              data-testid="button-mobile-menu"
              aria-label="メニュー"
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden text-white/70 hover:text-white p-1.5 rounded"
            >
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.22, ease: "easeInOut" }}
            className="lg:hidden bg-black/80 backdrop-blur-md border-t border-white/8 overflow-hidden"
          >
            <div className="px-4 py-3 space-y-0.5">
              {navLinks.map((link) => {
                const isActive = location === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    data-testid={`link-mobile-${link.href.replace("/", "") || "home"}`}
                    className={`block px-4 py-2.5 rounded text-sm font-medium transition-all ${
                      isActive
                        ? "text-[#EAA53B]"
                        : "text-white/65 hover:text-white"
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              })}
              <a
                href={`tel:${gymConfig.phone}`}
                className="flex items-center gap-2 bg-[#F2AC55] text-white px-4 py-3 rounded-md text-sm font-medium mt-2"
              >
                <Phone className="w-3.5 h-3.5" />
                {gymConfig.phone}
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
