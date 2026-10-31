// ──────────────────────────────────────────────────────────────
//  Edit this file to change the church's details, no other code needs touching.
//  Everything below is placeholder content: replace with your real info.
// ──────────────────────────────────────────────────────────────

export const SITE = {
  name: "Grace Emerald Chapel",
  short: "Grace Emerald",
  tagline: "A family of faith, hope and love",
  address: "12 Chapel Avenue, Ikeja, Lagos",
  phone: "+234 800 000 0000",
  email: "hello@graceemerald.org",
  mapQuery: "Ikeja, Lagos, Nigeria",
  social: {
    instagram: "https://instagram.com/yourchurch",
    facebook: "https://facebook.com/yourchurch",
    tiktok: "https://tiktok.com/@yourchurch",
    youtube: "https://youtube.com/@yourchurch",
  },
};

export const PASTOR = {
  name: "Rev. Daniel Adebayo",
  title: "Head Pastor & Founder",
  photo: "", // e.g. "/pastor.jpg" (put the file in the /public folder)
  quote: "The Word is a lamp, and this house is where we keep it burning.",
  bio: [
    "Pastor Daniel has served the body of Christ for over twenty years, shepherding families through every season with patience, humour and an unshakable love for the Scriptures.",
    "He founded Grace Emerald Chapel with a simple vision: a home where every person, from the first-time visitor to the lifelong believer, is known by name and nourished by the Word.",
    "Alongside his wife and children, he leads the church in teaching, prayer and outreach, and is a sought-after voice at conferences and family gatherings across the nation.",
  ],
  facts: [
    ["20+", "Years in ministry"],
    ["3", "Weekly gatherings"],
    ["1", "Growing family"],
  ],
};

export const SERVICES = [
  {
    key: "sunday",
    name: "Sunday Celebration",
    day: "Sundays",
    time: "8:00 AM & 10:30 AM",
    icon: "flame",
    blurb: "Our main gathering: vibrant worship, a living Word and a warm welcome for the whole family. Children's church runs alongside.",
  },
  {
    key: "midweek",
    name: "Midweek Bible Study",
    day: "Wednesdays",
    time: "6:00 PM",
    icon: "book",
    blurb: "Open the Scriptures with us, verse by verse. A relaxed, practical evening for questions, teaching and growth.",
  },
  {
    key: "prayer",
    name: "Prayer & Fasting",
    day: "Fridays",
    time: "5:30 AM",
    icon: "hands",
    blurb: "Start the day at the altar. A quiet, powerful hour of intercession for our families, city and nation.",
  },
  {
    key: "youth",
    name: "Youth & Young Adults",
    day: "Saturdays",
    time: "4:00 PM",
    icon: "spark",
    blurb: "Faith that fits real life. Music, mentoring and honest conversation for ages 13 to 30.",
  },
];

// Gallery: add real photos by dropping them in /public/gallery and
// setting src: "/gallery/your-photo.jpg". Without src, an artwork tile shows.
export const GALLERY = [
  { title: "Sunday worship", tag: "Worship", tone: 0, tall: true },
  { title: "Children's church", tag: "Family", tone: 1 },
  { title: "Baptism day", tag: "Events", tone: 2 },
  { title: "Choir ministry", tag: "Worship", tone: 1, tall: true },
  { title: "Community outreach", tag: "Outreach", tone: 0 },
  { title: "Youth retreat", tag: "Events", tone: 2 },
  { title: "Thanksgiving service", tag: "Worship", tone: 0 },
  { title: "Women's fellowship", tag: "Family", tone: 1, tall: true },
  { title: "Harvest celebration", tag: "Events", tone: 2 },
  { title: "Feeding programme", tag: "Outreach", tone: 1 },
  { title: "Wedding blessing", tag: "Family", tone: 0 },
  { title: "Easter sunrise", tag: "Events", tone: 2 },
].map((g, i) => ({ id: i, src: "", ...g }));

// Videos: paste the YouTube video ID (the part after "v=" in the link).
// e.g. https://www.youtube.com/watch?v=dQw4w9WgXcQ  →  id: "dQw4w9WgXcQ"
export const VIDEOS = [
  { id: "", title: "Sunday Sermon: Walking in Grace", date: "Latest message", length: "48:12" },
  { id: "", title: "Faith That Moves Mountains", date: "Last week", length: "41:05" },
  { id: "", title: "Worship Night Highlights", date: "Two weeks ago", length: "22:30" },
  { id: "", title: "The Power of Prayer", date: "Three weeks ago", length: "39:48" },
  { id: "", title: "Family Sunday Testimonies", date: "Last month", length: "27:16" },
];

export const NAV = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/pastor", label: "Head Pastor" },
  { to: "/services", label: "Services" },
  { to: "/gallery", label: "Gallery" },
  { to: "/videos", label: "Videos" },
  { to: "/contact", label: "Contact" },
];
