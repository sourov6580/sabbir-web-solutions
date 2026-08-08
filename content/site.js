/* =============================================================================
   SABBIR WEB SOLUTIONS — SITE CONTENT
   -----------------------------------------------------------------------------
   This is the ONLY file you need to edit to update the website text, projects,
   pricing, testimonials and contact details. No need to touch any component.

   • Change any text between the quotes.
   • Add/remove items inside the [ ... ] arrays.
   • To use a real image, drop the file into /public/images and set the matching
     `image` field to e.g. "/images/my-photo.jpg". Leave it as null to keep the
     built-in placeholder graphic.
   • Icon fields accept one of: "globe" | "video" | "message" | "layout" |
     "sparkles" | "check" | "zap"
============================================================================= */

export const brand = {
  name: "Sabbir Web Solutions",
  logoLine1: "Sabbir Web",
  logoLine2: "Solutions",
  logoImage: null, // e.g. "/images/logo.png" — null shows the built-in mark
  founderName: "Sabbir Hossain",
  founderRole: "Founder & Lead Designer",
  founderInitials: "SH",
  domainLabel: "sabbirwebsolutions.site",
  tagline: "Websites & Creative Videos",
};

export const nav = ["Home", "Services", "Portfolio", "Pricing", "About", "Contact"];

export const startProjectLabel = "Start Your Project";

export const hero = {
  badge: "Founder-led studio · Sabbir Web Solutions",
  titleLead: "Websites & Videos That Turn Visitors Into ",
  titleAccent: "Paying Customers",
  subtitle:
    "I design high-converting websites and scroll-stopping promotional videos for small businesses, e-commerce brands, and startups — built to earn trust and drive real sales.",
  primaryCta: { label: "Start Your Project", href: "#contact" },
  secondaryCta: { label: "View Portfolio", href: "#portfolio" },
  microcopy: "Free project consultation · Reply within 24 hours",
  trust: [
    { icon: "zap", text: "Fast, on-time delivery" },
    { icon: "message", text: "Direct founder communication" },
    { icon: "sparkles", text: "Revisions until you're happy" },
  ],
};

export const services = {
  eyebrow: "What We Do",
  title: "Services Built to Grow Your Brand",
  sub: "Two focused offerings, delivered with agency-level polish.",
  cards: [
    {
      no: "01",
      icon: "globe",
      tag: "Design & Development",
      title: "Website Design",
      desc: "Conversion-focused websites engineered to build trust and turn visitors into customers.",
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
      tag: "Creative Production",
      title: "Video Editing",
      desc: "Scroll-stopping videos that tell your brand story and drive real engagement.",
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
  eyebrow: "Selected Work",
  title: "Portfolio Showcase",
  sub: "A look at recent projects across web and video.",
  webFilters: [
    "All",
    "Landing Page",
    "Single Page Website",
    "Multi Page Website",
    "E-commerce Website",
  ],
  videoFilters: [
    "All",
    "Product Video",
    "Promotional Video",
    "Facebook Ads",
    "Social Media Video",
  ],
  // image: null keeps the branded gradient thumbnail. Set "/images/xxx.jpg" for a real one.
  web: [
    { t: "Aria Studio", cat: "Landing Page", biz: "Fashion", image: null },
    { t: "GreenLeaf Bistro", cat: "Multi Page Website", biz: "Food", image: null },
    { t: "Lumière Jewels", cat: "E-commerce Website", biz: "Jewellery", image: null },
    { t: "BrightPath Academy", cat: "Multi Page Website", biz: "Education", image: null },
    { t: "CareWell Clinic", cat: "Single Page Website", biz: "Healthcare", image: null },
    { t: "Prime Consult", cat: "Landing Page", biz: "Service Business", image: null },
  ],
  video: [
    { t: "Mango Harvest Reel", cat: "Product Video", biz: "Agriculture", image: null },
    { t: "Summer Fashion Drop", cat: "Promotional Video", biz: "Fashion", image: null },
    { t: "Crispy Bites Ad", cat: "Facebook Ads", biz: "Food", image: null },
    { t: "ShopEasy Launch", cat: "Social Media Video", biz: "E-commerce", image: null },
    { t: "Consult Pro Intro", cat: "Promotional Video", biz: "Service Business", image: null },
    { t: "Fresh Farm Story", cat: "Product Video", biz: "Agriculture", image: null },
  ],
};

export const caseStudy = {
  eyebrow: "Case Study",
  title: "Results That Speak",
  sub: "How a focused approach turned a store into a sales machine.",
  clientLabel: "Client",
  client: "Lumière Jewels",
  projectType: "E-commerce Website + Product Video",
  metrics: [
    { value: "+180%", label: "Online Sales" },
    { value: "2.4x", label: "Conversion Rate" },
    { value: "-45%", label: "Bounce Rate" },
  ],
  blocks: [
    {
      head: "Challenge",
      body: "An outdated store with slow load times and low trust was losing mobile shoppers before checkout.",
    },
    {
      head: "Solution",
      body: "A rebuilt WooCommerce storefront with a clean product flow, trust signals, and a polished promo video for ads.",
    },
    {
      head: "Result",
      body: "Faster pages, higher trust, and a measurable jump in completed orders within the first two months.",
    },
  ],
  techLabel: "Technology Used",
  tech: ["WordPress", "WooCommerce", "Elementor Pro", "CapCut", "Performance Tuning"],
};

export const pricing = {
  eyebrow: "Pricing",
  title: "Transparent, Value-First Packages",
  sub: "Starting-from pricing — final quote tailored to your project.",
  groups: [
    {
      label: "Website Design",
      plans: [
        { name: "Starter Landing Page", price: "$120", feats: ["1 conversion-focused page", "Mobile responsive", "Basic SEO setup", "3-day delivery"] },
        { name: "Business Website", price: "$320", featured: true, feats: ["Up to 6 pages", "Custom design", "On-page SEO", "Speed optimization", "Contact integration"] },
        { name: "E-commerce Website", price: "$650", feats: ["WooCommerce store", "Product setup", "Payment gateway", "Cart & checkout flow", "Launch support"] },
      ],
    },
    {
      label: "Video Editing",
      plans: [
        { name: "Basic Promotional Video", price: "$40", feats: ["Up to 30 seconds", "Music & captions", "1 revision", "HD export"] },
        { name: "Business Advertisement", price: "$90", featured: true, feats: ["Up to 60 seconds", "Motion graphics", "2 revisions", "Ad-ready formats", "Voiceover sync"] },
        { name: "Premium Brand Video", price: "$180", feats: ["Full brand story", "Advanced editing", "3 revisions", "Multi-platform export", "Priority delivery"] },
      ],
    },
  ],
  reassurance: ["No hidden fees", "Milestone-based payments", "Free consultation first"],
  customNote: "Need something custom?",
  customLinkLabel: "Request a tailored quote →",
};

export const about = {
  eyebrow: "About",
  title: "Building trust through design & story",
  body:
    "I am Sabbir, founder of Sabbir Web Solutions. I help businesses build professional online presence through modern websites and creative video solutions.",
  image: null, // e.g. "/images/sabbir.jpg" — null shows the branded placeholder
  imageCaption: "Profile image space",
  highlights: [
    { head: "Design-led", body: "Every project starts with the goal, not a template." },
    { head: "Detail-driven", body: "Speed, trust, and clarity in everything shipped." },
  ],
};

export const process = {
  eyebrow: "How We Work",
  title: "A Clear, Simple Process",
  steps: [
    { icon: "message", head: "Discuss Requirement", body: "We align on your goals, audience, and scope." },
    { icon: "layout", head: "Planning & Strategy", body: "A clear roadmap and structure before we build." },
    { icon: "sparkles", head: "Design & Development", body: "Crafting the site or video with precision." },
    { icon: "check", head: "Review & Delivery", body: "Refine, polish, and hand off ready to launch." },
  ],
};

export const testimonials = {
  eyebrow: "Testimonials",
  title: "What Clients Say",
  sub: "Real feedback from businesses we've partnered with.",
  items: [
    { quote: "The new website completely changed how customers see our brand. Sales followed within weeks.", name: "Rina A.", role: "Fashion Store Owner" },
    { quote: "Fast, professional, and genuinely creative. Our promo video performed better than any ad before.", name: "Tanvir H.", role: "E-commerce Founder" },
    { quote: "Clear communication and premium results. It felt like working with a full agency.", name: "Meherun N.", role: "Service Business" },
  ],
};

export const contact = {
  eyebrow: "Contact",
  heading: "Let's start your project",
  sub: "Tell us what you need and we'll get back with a clear plan and quote.",
  email: "hello@sabbirwebsolutions.site",
  // WhatsApp number in international format, digits only (no + or spaces).
  whatsappNumber: "8801XXXXXXXXX",
  whatsappLabel: "Chat on WhatsApp",
  location: "Natore, Bangladesh",
  services: ["Website Design", "Video Editing", "Both"],
  privacyNote: "Your details stay private · No spam, ever",
  submitLabel: "Send Message",
};

export const footer = {
  copyright: "Sabbir Web Solutions. All rights reserved.",
};

/* Used for SEO <head> metadata (app/layout.jsx). */
export const seo = {
  title: "Sabbir Web Solutions — Websites & Creative Videos That Grow Businesses",
  description:
    "Creative digital agency by Sabbir Hossain. High-converting websites and promotional videos for small businesses, e-commerce brands, and startups.",
  siteUrl: "https://sabbirwebsolutions.site",
  ogImage: "/images/og-image.jpg", // add a 1200x630 image at /public/images/og-image.jpg
  keywords: [
    "web design",
    "website development",
    "video editing",
    "promotional video",
    "WordPress",
    "WooCommerce",
    "landing page",
    "Sabbir Web Solutions",
    "Bangladesh web designer",
  ],
};
