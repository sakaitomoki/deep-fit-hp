import { Link } from "wouter";
import { AlertCircle } from "lucide-react";
import SEO from "@/components/SEO";
import { useT } from "@/lib/i18n";

export default function NotFound() {
  const t = useT();
  return (
    <>
      <SEO title="ページが見つかりません｜DEEP.FIT" description="お探しのページは見つかりませんでした。" noindex />
      <div className="min-h-screen w-full flex items-center justify-center bg-gray-50">
        <div className="w-full max-w-md mx-4 rounded-lg border border-gray-200 bg-white shadow-sm">
          <div className="pt-6 p-6">
            <div className="flex mb-4 gap-2">
              <AlertCircle className="h-8 w-8 text-red-500" />
              <h1 className="text-2xl font-bold text-gray-900">{t("ページが見つかりません")}</h1>
            </div>

            <p className="mt-4 text-sm text-gray-600">
              {t("お探しのページは移動または削除された可能性があります。")}
            </p>

            <div className="mt-6">
              <Link href="/" className="text-sm text-[#F0A93A] hover:underline font-medium">
                {t("ホームへ戻る")}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
