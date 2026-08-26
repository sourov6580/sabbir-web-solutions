import PricingView from "@/components/PricingView";

export const metadata = {
  title: "ভিডিও প্রাইসিং — Sabbir Web Solutions",
  description: "ভিডিও এডিটিং ও অ্যাড ভিডিও সার্ভিসের স্বচ্ছ, ভ্যালু-ফার্স্ট প্যাকেজ।",
  alternates: { canonical: "/pricing/video" },
};

export default function Page() {
  return <PricingView active={1} />;
}
