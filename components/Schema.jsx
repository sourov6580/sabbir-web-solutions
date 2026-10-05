import { seo } from "@/content/site";

/* Organization + Person schema — গুগলকে জানায় সাইটটি কার, কী সার্ভিস দেয় */
export default function Schema() {
  const data = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "ProfessionalService",
        "@id": `${seo.siteUrl}/#organization`,
        name: "Sabbir Web Solutions",
        alternateName: "সাব্বির ওয়েব সলিউশনস",
        url: seo.siteUrl,
        logo: {
          "@type": "ImageObject",
          url: `${seo.siteUrl}/images/sws-site-icon.png`,
          width: 96,
          height: 96,
        },
        image: `${seo.siteUrl}/images/sws-site-icon.png`,
        description:
          "ছোট ব্যবসা, ই-কমার্স ব্র্যান্ড আর স্টার্টআপের জন্য ওয়েবসাইট ডিজাইন, ল্যান্ডিং পেজ ও প্রমোশনাল ভিডিও সার্ভিস।",
        founder: { "@id": `${seo.siteUrl}/#person` },
        address: {
          "@type": "PostalAddress",
          addressLocality: "Natore",
          addressRegion: "Rajshahi",
          addressCountry: "BD",
        },
        areaServed: { "@type": "Country", name: "Bangladesh" },
        priceRange: "৳৳",
        telephone: "+8801610034234",
        sameAs: [
          "https://www.facebook.com/sabbirwebsolutions",
          "https://www.youtube.com/@sabbirwebsolutions",
          "https://www.instagram.com/sabbirwebsolutions",
        ],
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Services",
          itemListElement: [
            {
              "@type": "Offer",
              itemOffered: { "@type": "Service", name: "Website Design & Development" },
            },
            {
              "@type": "Offer",
              itemOffered: { "@type": "Service", name: "Landing Page Design" },
            },
            {
              "@type": "Offer",
              itemOffered: { "@type": "Service", name: "E-commerce Website Development" },
            },
            {
              "@type": "Offer",
              itemOffered: { "@type": "Service", name: "Promotional Video & Video Ads" },
            },
          ],
        },
      },
      {
        "@type": "Person",
        "@id": `${seo.siteUrl}/#person`,
        name: "Md Sabbir Hossain",
        alternateName: ["Sabbir Hossain", "মোঃ সাব্বির হোসেন"],
        jobTitle: "Web Designer & Video Editor",
        url: seo.siteUrl,
        worksFor: { "@id": `${seo.siteUrl}/#organization` },
        knowsAbout: [
          "WordPress Development",
          "Elementor",
          "WooCommerce",
          "Landing Page Design",
          "Next.js",
          "Video Editing",
        ],
        address: {
          "@type": "PostalAddress",
          addressLocality: "Natore",
          addressRegion: "Rajshahi",
          addressCountry: "BD",
        },
        sameAs: [
          "https://www.facebook.com/sabbirwebsolutions",
          "https://www.youtube.com/@sabbirwebsolutions",
          "https://www.instagram.com/sabbirwebsolutions",
        ],
      },
      {
        "@type": "WebSite",
        "@id": `${seo.siteUrl}/#website`,
        url: seo.siteUrl,
        name: "Sabbir Web Solutions",
        inLanguage: "bn-BD",
        publisher: { "@id": `${seo.siteUrl}/#organization` },
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
