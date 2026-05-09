import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock, Loader2 } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { z } from "zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import SEO from "@/components/SEO";
import { seoConfig, gymConfig } from "@/lib/gymConfig";

const insertContactInquirySchema = z.object({
  name: z.string().min(1, "お名前を入力してください"),
  email: z.string().email("有効なメールアドレスを入力してください"),
  phone: z.string().nullable().optional(),
  inquiryType: z.string().min(1, "お問い合わせ種別を選択してください"),
  message: z.string().min(1, "メッセージを入力してください"),
});

type InsertContactInquiry = z.infer<typeof insertContactInquirySchema>;

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number] } },
};

const fadeInLeft = {
  hidden: { opacity: 0, x: -60 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number] } },
};

const fadeInRight = {
  hidden: { opacity: 0, x: 60 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number] } },
};

const contactInfo = [
  { icon: Phone, label: "電話番号", value: gymConfig.phone, href: `tel:${gymConfig.phone}` },
  { icon: Mail, label: "メールアドレス", value: gymConfig.email, href: `mailto:${gymConfig.email}` },
  { icon: MapPin, label: "住所", value: `${gymConfig.address}\nJR尼崎駅 徒歩10分`, href: null },
  { icon: Clock, label: "営業時間", value: `月〜水・金: ${gymConfig.hours.weekday}\n土: ${gymConfig.hours.saturday}\n日: ${gymConfig.hours.sunday}\n定休日: ${gymConfig.hours.closed}`, href: null },
];

const inquiryTypes = ["体験レッスン予約", "入会について", "料金について", "見学予約", "その他"];

export default function Contact() {
  const { toast } = useToast();

  const form = useForm<InsertContactInquiry>({
    resolver: zodResolver(insertContactInquirySchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      inquiryType: "",
      message: "",
    },
  });

  const mutation = useMutation({
    mutationFn: async (data: InsertContactInquiry) => {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("送信失敗");
      return res.json();
    },
    onSuccess: () => {
      toast({ title: "送信完了", description: "お問い合わせを受け付けました。近日中にご連絡いたします。" });
      form.reset();
    },
    onError: () => {
      toast({ title: "送信失敗", description: "送信に失敗しました。時間をおいて再度お試しください。", variant: "destructive" });
    },
  });

  return (
    <>
      <SEO title={seoConfig.pages.contact.title} description={seoConfig.pages.contact.description} path="/contact" />

      {/* Hero */}
      <div className="relative" style={{ height: "50vh", minHeight: "400px" }}>
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('/images/hero-gym.png')" }} />
        <div className="absolute inset-0 bg-[#4D5058]/78" />
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-[#F2AC55] text-xs tracking-[0.3em] uppercase mb-3"
          >
            Contact
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-4xl sm:text-5xl font-bold text-white"
          >
            無料体験・お問い合わせ
          </motion.h1>
        </div>
      </div>

      {/* Contact Section */}
      <section className="py-20 lg:py-28 bg-[#1A1D24]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-10">
            {/* Contact Info */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInLeft}
              className="lg:col-span-2 space-y-5"
            >
              <div className="mb-8">
                <p className="text-[#F2AC55] text-xs tracking-[0.3em] uppercase mb-3">Get In Touch</p>
                <h2 className="text-3xl font-bold text-white">連絡先</h2>
                <p className="text-white/60 text-sm mt-3 leading-relaxed">
                  体験レッスンのご予約やご質問など、お気軽にお問い合わせください。
                </p>
              </div>

              {contactInfo.map((item, i) => {
                const Icon = item.icon;
                return (
                  <div key={i} className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-md bg-[#F2AC55] flex items-center justify-center shrink-0">
                      <Icon className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="text-white/50 text-xs mb-0.5">{item.label}</p>
                      {item.href ? (
                        <a href={item.href} className="text-white text-sm font-medium hover:text-[#F2AC55] transition-colors">
                          {item.value}
                        </a>
                      ) : (
                        <p className="text-white text-sm font-medium whitespace-pre-line">{item.value}</p>
                      )}
                    </div>
                  </div>
                );
              })}
            </motion.div>

            {/* Form */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInRight}
              className="lg:col-span-3"
            >
              <div className="bg-[#232830] rounded-md p-7 sm:p-8 border border-white/10">
                <h3 className="text-xl font-bold text-white mb-6">お問い合わせフォーム</h3>
                <Form {...form}>
                  <form onSubmit={form.handleSubmit((data) => mutation.mutate(data))} className="space-y-5">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-[#4D5058] text-sm">お名前 <span className="text-red-500">*</span></FormLabel>
                          <FormControl>
                            <Input data-testid="input-name" placeholder="山田 太郎" {...field} className="bg-white" />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-[#4D5058] text-sm">メールアドレス <span className="text-red-500">*</span></FormLabel>
                          <FormControl>
                            <Input data-testid="input-email" type="email" placeholder="example@email.com" {...field} className="bg-white" />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="phone"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-[#4D5058] text-sm">電話番号（任意）</FormLabel>
                          <FormControl>
                            <Input data-testid="input-phone" type="tel" placeholder="06-0000-0000" {...field} value={field.value ?? ""} className="bg-white" />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="inquiryType"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-[#4D5058] text-sm">お問い合わせ種別 <span className="text-red-500">*</span></FormLabel>
                          <Select onValueChange={field.onChange} value={field.value}>
                            <FormControl>
                              <SelectTrigger data-testid="select-inquiry-type" className="bg-white">
                                <SelectValue placeholder="選択してください" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              {inquiryTypes.map((type) => (
                                <SelectItem key={type} value={type}>{type}</SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-[#4D5058] text-sm">メッセージ <span className="text-red-500">*</span></FormLabel>
                          <FormControl>
                            <Textarea
                              data-testid="input-message"
                              placeholder="お問い合わせ内容をご記入ください"
                              className="bg-white min-h-[120px]"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <Button
                      type="submit"
                      data-testid="button-submit"
                      disabled={mutation.isPending}
                      className="w-full bg-[#F2AC55] hover:bg-[#D99A40] text-white rounded-full"
                    >
                      {mutation.isPending ? (
                        <>
                          <Loader2 className="w-4 h-4 animate-spin mr-2" />
                          送信中...
                        </>
                      ) : "送信する"}
                    </Button>
                  </form>
                </Form>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map */}
      <div className="h-96 w-full">
        <iframe
          src={gymConfig.googleMapsUrl}
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="DEEP.FIT アクセス"
        />
      </div>
    </>
  );
}
