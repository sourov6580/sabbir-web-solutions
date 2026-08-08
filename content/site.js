/* =============================================================================
   SABBIR WEB SOLUTIONS — SITE CONTENT (Bangla)
   -----------------------------------------------------------------------------
   পুরো সাইটের সব লেখা এখানেই। এডিট করতে quotes-এর ভেতরের লেখা বদলান।
   • [ ... ] অ্যারের ভেতরে আইটেম যোগ/বাদ দেওয়া যায়।
   • ছবি বসাতে: ফাইল /public/images-এ রাখুন, তারপর image ফিল্ডে path দিন
     (যেমন "/images/photo.jpg")। null থাকলে বিল্ট-ইন প্লেসহোল্ডার দেখাবে।
   • icon values: "globe" | "video" | "message" | "layout" | "sparkles" | "check" | "zap"
============================================================================= */

export const brand = {
  name: "Sabbir Web Solutions",
  logoLine1: "Sabbir Web",
  logoLine2: "Solutions",
  logoImage: "/images/logo.png", // null দিলে বিল্ট-ইন মার্ক দেখাবে
  founderName: "সাব্বির হোসেন",
  founderRole: "ফাউন্ডার ও ডিজাইনার",
  founderInitials: "SH",
  domainLabel: "sabbirwebsolutions.site",
  tagline: "ওয়েব ডিজাইন & Ai ভিডিও কন্টেন্ট সার্ভিস",
};

/* nav: label = যা দেখাবে, href = কোথায় যাবে (সেকশন id ইংরেজিই থাকবে) */
export const nav = [
  { label: "হোম", href: "/" },
  { label: "সার্ভিস", href: "#services" },
  { label: "পোর্টফোলিও", href: "#portfolio" },
  { label: "প্রাইসিং", href: "#pricing" },
  { label: "পরিচিতি", href: "#about" },
  { label: "যোগাযোগ", href: "#contact" },
];

export const startProjectLabel = "প্রজেক্ট শুরু করুন";

export const hero = {
  badge: "Sabbir Web Solutions এ আপনাকে স্বাগতম",
  titleLead: "আপনার বিজনেস গ্রোথ এর   ",
  titleAccent: "Smart Solution",
  subtitle:
    "ছোট ব্যবসা, ই-কমার্স ব্র্যান্ড আর স্টার্টআপের জন্য আমি এমন Website ও Promotional Video বানাই — যা Customer-এর আস্থা অর্জন করে আর সত্যিকারের বিক্রি বাড়ায়।",
  primaryCta: { label: "প্রজেক্ট শুরু করুন", href: "#contact" },
  secondaryCta: { label: "পোর্টফোলিও দেখুন", href: "#portfolio" },
  microcopy: "ফ্রি কনসালটেশন · 24 ঘণ্টার মধ্যে উত্তর",
  trust: [
    { icon: "zap", text: "দ্রুত, সময়মতো ডেলিভারি" },
    { icon: "message", text: "সরাসরি ফাউন্ডারের সাথে যোগাযোগ" },
    { icon: "sparkles", text: "সন্তুষ্ট না হওয়া পর্যন্ত রিভিশন" },
  ],
};

export const services = {
  eyebrow: "আমরা যা করি",
  title: "আপনার ব্র্যান্ড বড় করার সার্ভিস",
  sub: "দুটি ফোকাসড সার্ভিস — এজেন্সি-মানের প্রিমিয়াম ফিনিশিং সহ।",
  cards: [
    {
      no: "01",
      icon: "globe",
      tag: "ডিজাইন ও ডেভেলপমেন্ট",
      title: "ওয়েবসাইট ডিজাইন",
      desc: "আস্থা তৈরি করে আর ভিজিটরকে ক্রেতায় রূপান্তর করে — এমন conversion-focused Website।",
      items: [
        "Landing Page Design",
        "Business Website",
        "E-commerce Website",
        "WordPress Website",
        "Website Optimization",
      ],
    },
    {
      no: "02",
      icon: "video",
      tag: "ক্রিয়েটিভ প্রোডাকশন",
      title: "ভিডিও এডিটিং",
      desc: "আপনার ব্র্যান্ড স্টোরি বলে আর real engagement আনে — এমন scroll-stopping Video।",
      items: [
        "Product Videos",
        "Facebook Ads Videos",
        "Promotional Videos",
        "Social Media Content",
        "Brand Videos",
      ],
    },
  ],
};

export const portfolio = {
  eyebrow: "নির্বাচিত কাজ",
  title: "পোর্টফোলিও",
  sub: "সাম্প্রতিক কিছু Web ও Video প্রজেক্টের ঝলক।",
  webFilters: [
    "সব",
    "Landing Page",
    "Single Page Website",
    "Multi Page Website",
    "E-commerce Website",
  ],
  videoFilters: [
    "সব",
    "Product Video",
    "Promotional Video",
    "Facebook Ads",
    "Social Media Video",
  ],
  web: [
    { t: "Aria Studio", cat: "Landing Page", biz: "ফ্যাশন", image: null },
    { t: "GreenLeaf Bistro", cat: "Multi Page Website", biz: "ফুড", image: null },
    { t: "Lumière Jewels", cat: "E-commerce Website", biz: "জুয়েলারি", image: null },
    { t: "BrightPath Academy", cat: "Multi Page Website", biz: "এডুকেশন", image: null },
    { t: "CareWell Clinic", cat: "Single Page Website", biz: "হেলথকেয়ার", image: null },
    { t: "Prime Consult", cat: "Landing Page", biz: "সার্ভিস বিজনেস", image: null },
  ],
  video: [
    { t: "Mango Harvest Reel", cat: "Product Video", biz: "এগ্রিকালচার", image: null },
    { t: "Summer Fashion Drop", cat: "Promotional Video", biz: "ফ্যাশন", image: null },
    { t: "Crispy Bites Ad", cat: "Facebook Ads", biz: "ফুড", image: null },
    { t: "ShopEasy Launch", cat: "Social Media Video", biz: "ই-কমার্স", image: null },
    { t: "Consult Pro Intro", cat: "Promotional Video", biz: "সার্ভিস বিজনেস", image: null },
    { t: "Fresh Farm Story", cat: "Product Video", biz: "এগ্রিকালচার", image: null },
  ],
};

export const caseStudy = {
  eyebrow: "কেস স্টাডি",
  title: "ফলাফলই কথা বলে",
  sub: "একটি ফোকাসড অ্যাপ্রোচ কীভাবে একটা দোকানকে সেলস মেশিনে রূপ দিল।",
  clientLabel: "ক্লায়েন্ট",
  client: "Lumière Jewels",
  projectType: "E-commerce Website + Product Video",
  metrics: [
    { value: "+180%", label: "অনলাইন সেলস" },
    { value: "2.4x", label: "কনভার্সন রেট" },
    { value: "-45%", label: "বাউন্স রেট" },
  ],
  blocks: [
    {
      head: "চ্যালেঞ্জ",
      body: "পুরনো একটা স্টোর — ধীর লোডিং আর কম আস্থার কারণে চেকআউটের আগেই মোবাইল ক্রেতা হারিয়ে যাচ্ছিল।",
    },
    {
      head: "সমাধান",
      body: "পরিষ্কার product flow, trust signal আর অ্যাডের জন্য একটা পলিশড promo video সহ নতুন করে বানানো WooCommerce স্টোর।",
    },
    {
      head: "ফলাফল",
      body: "দ্রুত পেজ, বেশি আস্থা আর প্রথম দুই মাসেই সম্পূর্ণ অর্ডারে স্পষ্ট বৃদ্ধি।",
    },
  ],
  techLabel: "ব্যবহৃত টেকনোলজি",
  tech: ["WordPress", "WooCommerce", "Elementor Pro", "CapCut", "Performance Tuning"],
};

export const pricing = {
  eyebrow: "প্রাইসিং",
  title: "স্বচ্ছ, ভ্যালু-ফার্স্ট প্যাকেজ",
  sub: "শুরুর দাম — চূড়ান্ত কোট আপনার প্রজেক্ট অনুযায়ী।",
  groups: [
    {
      label: "ওয়েবসাইট ডিজাইন",
      plans: [
        { name: "স্টার্টার Landing Page", price: "৳3,000", feats: ["1টি conversion-focused পেজ", "মোবাইল রেসপন্সিভ", "বেসিক SEO সেটআপ", "3 দিনে ডেলিভারি"] },
        { name: "বিজনেস Website", price: "৳6,000", featured: true, feats: ["6টি পর্যন্ত পেজ", "কাস্টম ডিজাইন", "On-page SEO", "স্পিড অপটিমাইজেশন", "Contact ইন্টিগ্রেশন"] },
        { name: "E-commerce Website", price: "৳10,000", feats: ["WooCommerce স্টোর", "প্রোডাক্ট সেটআপ", "পেমেন্ট গেটওয়ে", "কার্ট ও চেকআউট", "লঞ্চ সাপোর্ট"] },
      ],
    },
    {
      label: "ভিডিও এডিটিং",
      plans: [
        { name: "বেসিক Promotional Video", price: "৳1,500", feats: ["30 সেকেন্ড পর্যন্ত", "মিউজিক ও ক্যাপশন", "1 রিভিশন", "HD এক্সপোর্ট"] },
        { name: "বিজনেস Advertisement", price: "৳3,000", featured: true, feats: ["60 সেকেন্ড পর্যন্ত", "মোশন গ্রাফিক্স", "2 রিভিশন", "Ad-ready ফরম্যাট", "ভয়েসওভার সিংক"] },
        { name: "প্রিমিয়াম Brand Video", price: "৳6,000", feats: ["ফুল ব্র্যান্ড স্টোরি", "অ্যাডভান্সড এডিটিং", "3 রিভিশন", "মাল্টি-প্ল্যাটফর্ম এক্সপোর্ট", "প্রায়োরিটি ডেলিভারি"] },
      ],
    },
  ],
  reassurance: ["কোনো লুকানো খরচ নেই", "মাইলস্টোন-ভিত্তিক পেমেন্ট", "আগে ফ্রি কনসালটেশন"],
  customNote: "কাস্টম কিছু দরকার?",
  customLinkLabel: "কাস্টম কোট নিন →",
};

export const about = {
  eyebrow: "পরিচিতি",
  title: "ডিজাইন ও স্টোরির মাধ্যমে আস্থা তৈরি",
  body:
    "আমি সাব্বির, Sabbir Web Solutions-এর ফাউন্ডার। আধুনিক Website আর ক্রিয়েটিভ Video-র মাধ্যমে ব্যবসাগুলোকে প্রফেশনাল অনলাইন উপস্থিতি গড়ে তুলতে সাহায্য করি।",
  image: null,
  imageCaption: "প্রোফাইল ছবির জায়গা",
  highlights: [
    { head: "ডিজাইন-কেন্দ্রিক", body: "প্রতিটি প্রজেক্ট শুরু হয় লক্ষ্য দিয়ে, টেমপ্লেট দিয়ে নয়।" },
    { head: "ডিটেইল-কেন্দ্রিক", body: "প্রতিটি কাজে স্পিড, আস্থা আর স্পষ্টতা।" },
  ],
};

export const process = {
  eyebrow: "আমরা যেভাবে কাজ করি",
  title: "সহজ, পরিষ্কার প্রসেস",
  steps: [
    { icon: "message", head: "রিকোয়ারমেন্ট আলোচনা", body: "আপনার লক্ষ্য, অডিয়েন্স আর স্কোপ নিয়ে একমত হই।" },
    { icon: "layout", head: "প্ল্যানিং ও স্ট্র্যাটেজি", body: "কাজ শুরুর আগে পরিষ্কার রোডম্যাপ ও স্ট্রাকচার।" },
    { icon: "sparkles", head: "ডিজাইন ও ডেভেলপমেন্ট", body: "নিখুঁতভাবে সাইট বা ভিডিও তৈরি।" },
    { icon: "check", head: "রিভিউ ও ডেলিভারি", body: "পরিমার্জন, পলিশ আর লঞ্চ-রেডি হ্যান্ডঅফ।" },
  ],
};

export const testimonials = {
  eyebrow: "ক্লায়েন্ট রিভিউ",
  title: "ক্লায়েন্টরা যা বলেন",
  sub: "যেসব ব্যবসার সাথে কাজ করেছি তাদের সত্যিকারের মতামত।",
  items: [
    { quote: "নতুন Website আমাদের ব্র্যান্ডকে দেখার ধরনটাই বদলে দিয়েছে। কয়েক সপ্তাহেই বিক্রি বেড়েছে।", name: "Rina A.", role: "ফ্যাশন স্টোর ওনার" },
    { quote: "দ্রুত, প্রফেশনাল আর সত্যিই ক্রিয়েটিভ। আমাদের promo video আগের যেকোনো অ্যাডের চেয়ে ভালো পারফর্ম করেছে।", name: "Tanvir H.", role: "E-commerce ফাউন্ডার" },
    { quote: "পরিষ্কার যোগাযোগ আর প্রিমিয়াম রেজাল্ট। মনে হলো একটা ফুল এজেন্সির সাথে কাজ করছি।", name: "Meherun N.", role: "সার্ভিস বিজনেস" },
  ],
};

export const contact = {
  eyebrow: "যোগাযোগ",
  heading: "চলুন আপনার প্রজেক্ট শুরু করি",
  sub: "আপনার প্রয়োজন জানান — আমরা পরিষ্কার প্ল্যান আর কোট নিয়ে যোগাযোগ করব।",
  email: "sabbirngdca1@gmail.com",
  whatsappNumber: "8801610034234",
  whatsappLabel: "WhatsApp-এ চ্যাট করুন",
  location: "নাটোর, বাংলাদেশ",
  // ডান পাশের ছবি: /public/images-এ ছবি রেখে এখানে path দিন। null দিলে প্লেসহোল্ডার ফ্রেম দেখাবে।
  image: null,
  imageCaption: "আপনার ছবি এখানে",
  services: ["ওয়েবসাইট ডিজাইন", "ভিডিও এডিটিং", "দুটোই"],
  privacyNote: "আপনার তথ্য গোপন থাকবে · কোনো স্প্যাম নয়",
  submitLabel: "মেসেজ পাঠান",
};

export const footer = {
  copyright: "Sabbir Web Solutions. সর্বস্বত্ব সংরক্ষিত।",
};

export const seo = {
  title: "Sabbir Web Solutions — ব্যবসা বাড়ানোর Website ও ক্রিয়েটিভ Video",
  description:
    "সাব্বির হোসেনের ক্রিয়েটিভ ডিজিটাল এজেন্সি। ছোট ব্যবসা, ই-কমার্স ব্র্যান্ড আর স্টার্টআপের জন্য হাই-কনভার্টিং Website ও Promotional Video।",
  siteUrl: "https://sabbirwebsolutions.site",
  ogImage: "/images/og-image.jpg",
  keywords: [
    "ওয়েবসাইট ডিজাইন",
    "ভিডিও এডিটিং",
    "web design",
    "website development",
    "video editing",
    "WordPress",
    "ই-কমার্স ওয়েবসাইট",
    "landing page",
    "Sabbir Web Solutions",
    "বাংলাদেশ ওয়েব ডিজাইনার",
  ],
};
