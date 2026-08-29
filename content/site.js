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

/* nav: label = যা দেখাবে, href = কোথায় যাবে।
   "/#services" মানে হোম পেজের services সেকশন — অন্য পেজ থেকেও কাজ করবে। */
export const nav = [
  { label: "হোম", href: "/" },
  { label: "সার্ভিস", href: "/#services" },
  { label: "ওয়েব স্যাম্পল", href: "/web-samples" },
  { label: "ভিডিও স্যাম্পল", href: "/video-samples" },
  { label: "প্রাইসিং", href: "/pricing/web" },
  { label: "পরিচিতি", href: "/#about" },
  { label: "যোগাযোগ", href: "/#contact" },
];

export const startProjectLabel = "প্রজেক্ট শুরু করুন";

export const hero = {
  image: "/images/webhero.webp", // ডান পাশের হিরো ভিজ্যুয়াল (4:3)
  badge: "Sabbir Web Solutions এ আপনাকে স্বাগতম",
  titleLead: "আপনার বিজনেস গ্রোথ এর   ",
  titleAccent: "Smart Solution",
  subtitle:
    "ছোট ব্যবসা, ই-কমার্স ব্র্যান্ড আর স্টার্টআপের জন্য আমি এমন Website ও Promotional Video বানাই — যা Customer-এর আস্থা অর্জন করে আর সত্যিকারের বিক্রি বাড়ায়।",
  primaryCta: { label: "প্রজেক্ট শুরু করুন", href: "#contact" },
  secondaryCta: { label: "পোর্টফোলিও দেখুন", href: "#portfolio" },
  microcopy: "ফ্রি কনসালটেশন · 24 ঘণ্টার মধ্যে উত্তর",
  trust: [
    { icon: "zap", text: "সময়মতো ডেলিভারি" },
    { icon: "message", text: "সরাসরি ফাউন্ডারের সাথে যোগাযোগ" },
    { icon: "sparkles", text: "একাধিক রিভিশন এর সুযোগ" },
  ],
};

export const services = {
  eyebrow: "আমরা যা করি",
  title: "আপনার বিজনেস এর জন্য আমাদের সার্ভিস সমূহ",
  sub: "সাশ্রয়ী বাজেটে সেরা মান্সের সার্ভিস এখন আপনার হাতের নাগালে",
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
        "Organization Website",
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
  eyebrow: "আমাদের কাজের স্যাম্পল",
  title: "পোর্টফোলিও",
  sub: "সাম্প্রতিক কিছু Website ও Video প্রজেক্ট দেখুন।",
  // ওয়েব স্যাম্পল পেজের হেডিং
  webPage: {
    eyebrow: "আমাদের কাজের স্যাম্পল",
    title: "ওয়েব স্যাম্পল",
  },
  // ভিডিও স্যাম্পল পেজের হেডিং
  videoPage: {
    eyebrow: "আমাদের কাজের স্যাম্পল",
    title: "ভিডিও স্যাম্পল",
  },
  webFilters: [
    "সব",
    "Landing Page",
    "E-commerce Website",
    "Business Website",
    "Other Website",
  ],
  videoFilters: [
    "All",
    "E-commerce & Product Ads",
    "Clothing & Fashion Ads",
    "Organic & Herbal Solutions",
    "Real Estate & Property Ads",
    "Business & Service Ads",
  ],
  web: [
    { t: "আলাপন", cat: "Landing Page", biz: "Organic Food", url: "https://landing.rwmart.shop/step/alapon/", image: "/images/alaapon.com.png" },
    { t: "ABC China Mart", cat: "Landing Page", biz: "Gadget Shop", url: "https://landing.rwmart.shop/step/abcchinamart/", image: "/images/abcchinamart.com.png" },
    { t: "Mini Niqab", cat: "Landing Page", biz: "Clothing", url: "https://landing.rwmart.shop/step/mininiqab/", image: "/images/landing.rwmart.shop_step_mininiqab.png" },
    { t: "Intelligence Book Bangla", cat: "Landing Page", biz: "Kid's Item", url: "https://landing.rwmart.shop/step/intelligence-book-bangla/", image: "/images/landing.rwmart.shop_step_intelligence-book-bangla.webp" },
    { t: "Her Wishes — Abaya", cat: "Landing Page", biz: "Clothing", url: "https://herwishes.rwmart.shop/step/shrug-type-abaya-with-beautifully-motif-work-new/", image: "/images/herwishes.rwmart.shop_step_new.webp" },
    { t: "Ai Online Mart", cat: "Landing Page", biz: "Daily Necessities", url: "https://landing.rwmart.shop/step/ai-online-mart/", image: "/images/ai-online-mart.webp" },
    { t: "ট্যাপ ফিল্টার", cat: "Landing Page", biz: "Daily Necessities", url: "https://landing.rwmart.shop/step/water-filter/", image: "/images/landing.rwmart.shop_step_water-filter.png" },
    { t: "New Zone BD", cat: "E-commerce Website", biz: "Book Shop", url: "https://newzonebd.rwmart.shop/", image: "/images/newzonebd.rwmart.shop.png" },
    { t: "Borka Everyday", cat: "E-commerce Website", biz: "Clothing", url: "https://borkaeveryday.rwmart.shop/", image: "/images/borkaeveryday.rwmart.shop.png" },
    { t: "Her Wishes", cat: "E-commerce Website", biz: "Clothing", url: "https://herwishes.rwmart.shop/", image: "/images/herwishes.shop.webp" },
    { t: "BLACK DIAMOND", cat: "E-commerce Website", biz: "Jewellery", url: "https://blackdimons.rwmart.shop/", image: "/images/blackdimons.rwmart.shop.webp" },
    { t: "City Decor & Thai", cat: "Business Website", biz: "Interior Design", url: "https://citydecorandthai.rwmart.shop/", image: "/images/citydecorandthai.rwmart.shop.png" },
    { t: "আমাদের ঐতিহ্য", cat: "Other Website", biz: "Organization", url: "https://amader-proshchitra.lovable.app/", image: "/images/amader-oitijjo.png" },
  ],
  video: [
    { t: "আপনার বিজনেস এর সেল সিস্টেম কে করুন অটোমেটিক।", cat: "E-commerce & Product Ads", biz: "এডুকেশন", url: "https://youtu.be/UeeqMI55iXc", vertical: false, image: "https://img.youtube.com/vi/UeeqMI55iXc/hqdefault.jpg" },
    { t: "Fresh Mango Rajshahi – Premium Agro", cat: "E-commerce & Product Ads", biz: "এগ্রিকালচার", url: "https://youtu.be/-FJiPYMp5gQ", vertical: false, image: "https://img.youtube.com/vi/-FJiPYMp5gQ/hqdefault.jpg" },
    { t: "Hridoy Agro Faridpur", cat: "E-commerce & Product Ads", biz: "এগ্রিকালচার", url: "https://youtube.com/shorts/TW3fuZ24LqE", vertical: true, image: "https://img.youtube.com/vi/TW3fuZ24LqE/hqdefault.jpg" },
    { t: "JS Calligraphy video Ad", cat: "E-commerce & Product Ads", biz: "গিফট আইটেম", url: "https://youtube.com/shorts/dxNGjvSbX7Y", vertical: true, image: "https://img.youtube.com/vi/dxNGjvSbX7Y/hqdefault.jpg" },
    { t: "Non Slip Floor Mat - Bhog Bazar", cat: "E-commerce & Product Ads", biz: "হোম অ্যান্ড লিভিং", url: "https://youtu.be/K3Phnwqd4uE", vertical: false, image: "https://img.youtube.com/vi/K3Phnwqd4uE/hqdefault.jpg" },
    { t: "M M Agro – Fresh Agricultural & Dairy", cat: "E-commerce & Product Ads", biz: "এগ্রিকালচার", url: "https://youtu.be/Fn0Z41aj2Gs", vertical: false, image: "https://img.youtube.com/vi/Fn0Z41aj2Gs/hqdefault.jpg" },

    { t: "Mimi's Fashion Indian 3pis", cat: "Clothing & Fashion Ads", biz: "ফ্যাশন", url: "https://youtube.com/shorts/msdQ-eVA2jQ", vertical: true, image: "https://img.youtube.com/vi/msdQ-eVA2jQ/hqdefault.jpg" },
    { t: "Rupak Store – Premium Collection", cat: "Clothing & Fashion Ads", biz: "ফ্যাশন", url: "https://youtu.be/aB2BcOuFxO0", vertical: false, image: "https://img.youtube.com/vi/aB2BcOuFxO0/hqdefault.jpg" },
    { t: "Borka Everyday – Premium Borka Set Collections", cat: "Clothing & Fashion Ads", biz: "ফ্যাশন", url: "https://youtu.be/UbgXWiZy9wY", vertical: false, image: "https://img.youtube.com/vi/UbgXWiZy9wY/hqdefault.jpg" },
    { t: "Daraz Fashion Zone – Premium Skin Care Products", cat: "Clothing & Fashion Ads", biz: "স্কিন কেয়ার", url: "https://youtu.be/hQ8wMqXFJV8", vertical: false, image: "https://img.youtube.com/vi/hQ8wMqXFJV8/hqdefault.jpg" },

    { t: "Shifayah – Organic Wellness & Energy Booster", cat: "Organic & Herbal Solutions", biz: "ওয়েলনেস", url: "https://youtu.be/q6K0d-8Dfo4", vertical: false, image: "https://img.youtube.com/vi/q6K0d-8Dfo4/hqdefault.jpg" },
    { t: "Jamaican Black Castor Oil – Pure Herbal Hair Care", cat: "Organic & Herbal Solutions", biz: "হেয়ার কেয়ার", url: "https://youtu.be/fu720ICsaQc", vertical: false, image: "https://img.youtube.com/vi/fu720ICsaQc/hqdefault.jpg" },

    { t: "Dream 15 Dolonchapa – Modern Residential Living Spaces", cat: "Real Estate & Property Ads", biz: "রিয়েল এস্টেট", url: "https://youtu.be/wk5kA4Lzpng", vertical: false, image: "https://img.youtube.com/vi/wk5kA4Lzpng/hqdefault.jpg" },
    { t: "Dream 15 Dolonchapa – Luxury Apartment Tour & Flat Booking", cat: "Real Estate & Property Ads", biz: "রিয়েল এস্টেট", url: "https://youtu.be/PsF615meeVM", vertical: false, image: "https://img.youtube.com/vi/PsF615meeVM/hqdefault.jpg" },

    { t: "TeacherLagbe Noakhali - Home Tutor Service", cat: "Business & Service Ads", biz: "সার্ভিস", url: "https://youtube.com/shorts/pdrVlok5dAA", vertical: true, image: "https://img.youtube.com/vi/pdrVlok5dAA/hqdefault.jpg" },
    { t: "Sr Entreprise - Pickup Rent Service", cat: "Business & Service Ads", biz: "সার্ভিস", url: "https://youtube.com/shorts/ZSeefAHiaJc", vertical: true, image: "https://img.youtube.com/vi/ZSeefAHiaJc/hqdefault.jpg" },
    { t: "Ghotok Apu – Trusted Matrimony & Matchmaking Service", cat: "Business & Service Ads", biz: "সার্ভিস", url: "https://youtu.be/a2Pg42ZCFk0", vertical: false, image: "https://img.youtube.com/vi/a2Pg42ZCFk0/hqdefault.jpg" },
    { t: "Kotha Bondhu – Mental Health Counseling Video", cat: "Business & Service Ads", biz: "কাউন্সেলিং", url: "https://youtu.be/y0KCcPFjduE", vertical: false, image: "https://img.youtube.com/vi/y0KCcPFjduE/hqdefault.jpg" },
  ],
};

export const caseStudy = {
  eyebrow: "কেস স্টাডি",
  title: "ফলাফলই কথা বলে",
  sub: "একটি ফোকাসড অ্যাপ্রোচ কীভাবে খেজুরের গুড়ের একটা দোকানকে সেলস মেশিনে রূপ দিল।",
  clientLabel: "ক্লায়েন্ট",
  client: "NishchintoBazar",
  projectType: "E-commerce Website + Product Video (খেজুরের গুড়)",
  metrics: [
    { value: "+180%", label: "অনলাইন সেলস" },
    { value: "2.4x", label: "কনভার্সন রেট" },
    { value: "-45%", label: "বাউন্স রেট" },
  ],
  blocks: [
    {
      head: "চ্যালেঞ্জ",
      body: "খেজুরের গুড়ের মতো সিজনাল প্রোডাক্টের পুরনো একটা স্টোর — ধীর লোডিং আর কম আস্থার কারণে চেকআউটের আগেই মোবাইল ক্রেতা হারিয়ে যাচ্ছিল।",
    },
    {
      head: "সমাধান",
      body: "পরিষ্কার product flow, খাঁটি গুড়ের trust signal আর অ্যাডের জন্য একটা পলিশড promo video সহ নতুন করে বানানো WooCommerce স্টোর।",
    },
    {
      head: "ফলাফল",
      body: "দ্রুত পেজ, বেশি আস্থা আর প্রথম দুই মাসেই সম্পূর্ণ অর্ডারে স্পষ্ট বৃদ্ধি।",
    },
  ],
  techLabel: "ব্যবহৃত টেকনোলজি",
  tech: ["WordPress", "WooCommerce", "Elementor Pro", "CapCut", "Performance Tuning"],
};

// ট্র্যাকিং — Facebook Pixel ID এখানে বসান (খালি রাখলে পিক্সেল লোড হবে না)
export const analytics = {
  facebookPixelId: "838209114985225",
};

export const pricing = {
  eyebrow: "প্রাইসিং",
  title: "প্রয়োজন অনুযায়ী প্যাকেজ বেছে নিন।",
  // প্রাইসিং পেজের টগল বাটন (নিচের groups-এর সাথে মিলিয়ে, একই ক্রমে)
  toggles: [
    { key: "web", label: "ওয়েবসাইট প্রাইসিং", icon: "globe" },
    { key: "video", label: "ভিডিও প্রাইসিং", icon: "video" },
  ],
  groups: [
    {
      label: "ওয়েবসাইট ডিজাইন",
      priceNote: "ডিজাইন ফি (ডোমেইন, হোস্টিং ছাড়া)",
      plans: [
        { name: "Starter", price: "৳3,000", feats: ["conversion-focused কাস্টম ডিজাইন", "মোবাইল রেসপন্সিভ", "বেসিক SEO", "কুরিয়ার ইন্টিগ্রেশন", "3 দিনে ডেলিভারি", "শর্ত সাপেক্ষে ফ্রি ডোমেইন, হোস্টিং নেওয়ার সুজোগ", "3 দিনের ফ্রি সাপোর্ট"] },
        { name: "Growth", price: "৳6,000", featured: true, feats: ["কাস্টম ডিজাইন", "SEO", "স্পিড অপটিমাইজেশন", "কুরিয়ার ইন্টিগ্রেশন", "ফেক অর্ডার ব্লক", "5টি প্রোডাক্ট অ্যাড", "7 দিনের ফ্রি সাপোর্ট"] },
        { name: "Scale", price: "৳10,000", feats: ["কমপ্লিট WooCommerce স্টোর", "কাস্টম ডিজাইন", "পেমেন্ট গেটওয়ে সেটাপ", "ইনভয়েস সেটাপ", "10টি প্রোডাক্ট অ্যাড", "1টি ফ্রি ল্যান্ডিং পেজ", "15 দিনের ফ্রি সাপোর্ট"] },
      ],
    },
    {
      label: "ভিডিও এডিটিং",
      priceNote: "ফি",
      plans: [
        { name: "বেসিক Promotional Video", price: "৳800", feats: ["30 সেকেন্ড পর্যন্ত", "মিউজিক ও ক্যাপশন", "1 রিভিশন", "HD এক্সপোর্ট", "ডেলিভারি টাইম 1 দিন"] },
        { name: "বিজনেস Advertisement", price: "৳1,500", featured: true, feats: ["60 সেকেন্ড পর্যন্ত", "মোশন গ্রাফিক্স", "2 রিভিশন", "Ad-ready ফরম্যাট", "ডেলিভারি টাইম 3 দিন"] },
        { name: "প্রিমিয়াম Brand Video", price: "৳3,500", feats: ["ফুল ব্র্যান্ড স্টোরি", "অ্যাডভান্সড এডিটিং", "3 রিভিশন", "মাল্টি-প্ল্যাটফর্ম এক্সপোর্ট", "ডেলিভারি টাইম 7 দিন"] },
      ],
    },
  ],
  reassurance: ["এক্সট্র ফিচার বা কাজ অনুযায়ী ফি আপডেট হতে পারে", "মাইলস্টোন-ভিত্তিক পেমেন্ট", "আগে ফ্রি কনসালটেশন"],
  customNote: "কাস্টম কিছু দরকার?",
  customLinkLabel: "যোগাযোগ করুন →",
};

export const about = {
  eyebrow: "পরিচিতি",
  title: "ডিজাইন ও স্টোরির মাধ্যমে আস্থা তৈরি",
  body:
    "আমি সাব্বির, Sabbir Web Solutions-এর ফাউন্ডার। আধুনিক Website আর ক্রিয়েটিভ Video-র মাধ্যমে ব্যবসাগুলোকে প্রফেশনাল অনলাইন উপস্থিতি গড়ে তুলতে সাহায্য করি।",
  image: "/images/sabbir_hossain.webp",
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

export const clients = {
  eyebrow: "আমাদের ক্লায়েন্ট",
  title: "যাদের সাথে কাজ করেছি",
  sub: "ছোট ব্যবসা থেকে ই-কমার্স ব্র্যান্ড — বিভিন্ন সেক্টরের ক্লায়েন্ট।",
  // প্রতিটি লোগো: name = ব্যবসার নাম, url = ফেসবুক পেজ, image = ছবির path
  // image: "/images/clients/borka-everyday.jpg"  ← এভাবে দিন
  // image: null দিলে নামের আদ্যক্ষর দেখাবে (ডেমো)
  items: [
    { name: "Demo Client 01", url: "https://facebook.com", image: null },
    { name: "Demo Client 02", url: "https://facebook.com", image: null },
    { name: "Demo Client 03", url: "https://facebook.com", image: null },
    { name: "Demo Client 04", url: "https://facebook.com", image: null },
    { name: "Demo Client 05", url: "https://facebook.com", image: null },
    { name: "Demo Client 06", url: "https://facebook.com", image: null },
    { name: "Demo Client 07", url: "https://facebook.com", image: null },
    { name: "Demo Client 08", url: "https://facebook.com", image: null },
    { name: "Demo Client 09", url: "https://facebook.com", image: null },
    { name: "Demo Client 10", url: "https://facebook.com", image: null },
    { name: "Demo Client 11", url: "https://facebook.com", image: null },
    { name: "Demo Client 12", url: "https://facebook.com", image: null },
    { name: "Demo Client 13", url: "https://facebook.com", image: null },
    { name: "Demo Client 14", url: "https://facebook.com", image: null },
    { name: "Demo Client 15", url: "https://facebook.com", image: null },
    { name: "Demo Client 16", url: "https://facebook.com", image: null },
    { name: "Demo Client 17", url: "https://facebook.com", image: null },
    { name: "Demo Client 18", url: "https://facebook.com", image: null },
    { name: "Demo Client 19", url: "https://facebook.com", image: null },
    { name: "Demo Client 20", url: "https://facebook.com", image: null },
    { name: "Demo Client 21", url: "https://facebook.com", image: null },
    { name: "Demo Client 22", url: "https://facebook.com", image: null },
    { name: "Demo Client 23", url: "https://facebook.com", image: null },
    { name: "Demo Client 24", url: "https://facebook.com", image: null },
    { name: "Demo Client 25", url: "https://facebook.com", image: null },
    { name: "Demo Client 26", url: "https://facebook.com", image: null },
    { name: "Demo Client 27", url: "https://facebook.com", image: null },
    { name: "Demo Client 28", url: "https://facebook.com", image: null },
    { name: "Demo Client 29", url: "https://facebook.com", image: null },
    { name: "Demo Client 30", url: "https://facebook.com", image: null },
    { name: "Demo Client 31", url: "https://facebook.com", image: null },
    { name: "Demo Client 32", url: "https://facebook.com", image: null },
    { name: "Demo Client 33", url: "https://facebook.com", image: null },
    { name: "Demo Client 34", url: "https://facebook.com", image: null },
    { name: "Demo Client 35", url: "https://facebook.com", image: null },
    { name: "Demo Client 36", url: "https://facebook.com", image: null },
    { name: "Demo Client 37", url: "https://facebook.com", image: null },
    { name: "Demo Client 38", url: "https://facebook.com", image: null },
    { name: "Demo Client 39", url: "https://facebook.com", image: null },
    { name: "Demo Client 40", url: "https://facebook.com", image: null },
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
  // ডান পাশের অ্যাকশন বাটন — লিংক/লেবেল এখান থেকেই বদলানো যাবে
  messengerUrl: "https://m.me/sabbirwebsolutions",
  messengerLabel: "Messenger-এ মেসেজ দিন",
  phoneNumber: "+8801610034234",
  callLabel: "সরাসরি কল করুন",
  actionsNote: "যেকোনো একটায় নক করুন · 24 ঘণ্টার মধ্যে উত্তর",
  services: ["ওয়েবসাইট ডিজাইন", "ভিডিও এডিটিং", "দুটোই"],
  privacyNote: "আপনার তথ্য গোপন থাকবে · কোনো স্প্যাম নয়",
  submitLabel: "মেসেজ পাঠান",
};

export const footer = {
  copyright: "Sabbir Web Solutions. সর্বস্বত্ব সংরক্ষিত।",
};

export const seo = {
  title: "Sabbir Web Solutions — প্রফেশনাল ওয়েব ডিজাইন & ক্রিয়েটিভ Video মেকিং সার্ভিস",
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
