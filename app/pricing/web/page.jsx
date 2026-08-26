import PricingView from "@/components/PricingView";

export const metadata = {
  title: "ওয়েবসাইট প্রাইসিং — Sabbir Web Solutions",
  description: "ওয়েবসাইট ডিজাইন সার্ভিসের স্বচ্ছ, ভ্যালু-ফার্স্ট প্যাকেজ।",
  alternates: { canonical: "/pricing/web" },
};

export default function Page() {
  return <PricingView active={0} />;
}
