import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X, Phone } from "lucide-react";
import deepFitLogo from "@assets/DEEP.FIT_ロゴデザイン_1775627509340.png";
import { gymConfig } from "@/lib/gymConfig";

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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-[#4D5058]/95 backdrop-blur-md shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          <Link href="/" data-testid="link-logo" className="py-1 pr-2 sm:pr-3 lg:pr-4">
            <img
              src={deepFitLogo}
              alt="DEEP.FIT"
              data-testid="img-logo"
              className="h-9 sm:h-10 lg:h-12 w-auto object-contain"
            />
          </Link>

          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => {
              const isActive = location === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  data-testid={`link-nav-${link.href.replace("/", "") || "home"}`}
                  className={`px-4 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
                    isActive
                      ? "text-[#F2AC55] bg-white/10"
                      : "text-white/80 hover:text-white hover:bg-white/5"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-3">
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
              className="lg:hidden text-white p-2 rounded-md"
            >
              {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
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
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="lg:hidden bg-[#4D5058]/98 backdrop-blur-md border-t border-white/10 overflow-hidden"
          >
            <div className="px-4 py-4 space-y-1">
              {navLinks.map((link) => {
                const isActive = location === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    data-testid={`link-mobile-${link.href.replace("/", "") || "home"}`}
                    className={`block px-4 py-3 rounded-md text-sm font-medium transition-all ${
                      isActive
                        ? "text-[#F2AC55] bg-white/10"
                        : "text-white/80 hover:text-white hover:bg-white/5"
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
                <Phone className="w-4 h-4" />
                {gymConfig.phone}
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
