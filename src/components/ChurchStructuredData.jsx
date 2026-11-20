
import { Helmet } from "react-helmet-async";
import { church, pastor, socials } from "../data/site.js";

const churchSchema = {
  "@context": "https://schema.org",
  "@type": "Church",
  name: church.name,
  alternateName: church.short,
  url: "https://cacfresh.org/",
  description:
    "CAC Fresh Apostolic Power Ministry is a Christian church in Baruwa, Lagos, Nigeria, committed to worship, prayer, biblical teaching and spiritual growth.",
  foundingDate: "2011",

  address: {
    "@type": "PostalAddress",
    streetAddress:
      "4, Senboye Oladunni Street, off Baba Awori Crescent, Revelation, Baruwa",
    addressLocality: "Lagos",
    addressRegion: "Lagos State",
    addressCountry: "NG",
  },

  telephone: church.phone,
  email: church.email,

  geo: {
    "@type": "GeoCoordinates",
    latitude: 6.5898662,
    longitude: 3.2545919,
  },

  founder: {
    "@type": "Person",
    name: "Prophet Gbolahan Bello Moses",
    jobTitle: "Founder and Head Pastor",
  },

  sameAs: [
    socials.tiktok,
    socials.youtube,
  ],
};

export default function ChurchStructuredData() {
  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(churchSchema)}
      </script>
    </Helmet>
  );
}
