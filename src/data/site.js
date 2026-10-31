// ─────────────────────────────────────────────────────────────
//  EDIT THIS FILE to change the church's details.
//  Everything on the website reads from here.
// ─────────────────────────────────────────────────────────────

export const church = {
  name: "CAC FRESH APOSTOLIC POWER DISRICT HQTS",
  short: "CAC FRESH",
  tagline: "A family of faith, rooted in the Word",
  verse: "“Taste and see that the Lord is good.”",
  verseRef: "Psalm 34:8",
  address: "4, Senboye Oladunni street, off baba Awori Creasent Revelation, Bauwa, Lagos State, Nigeria.",
  phone: "+234 235 452 75",
  email: "fapmitry3@gmail.com",
  mapEmbed: "", // paste a Google Maps "Embed a map" src URL here (optional)
};

export const socials = {
  instagram: "https://www.youtube.com/redirect?event=channel_description&redir_token=QUlxb01IWm9GZy1oSUs4a2hHXzBYQlJxWGdabHxBSTVJdTVzWXJvaHpPdDZQV0VPNjY4cFY2OGd3ek13Sk9rYjVQNEd0YnBHMFhndFRLRnRHTFRLNEV5OWlHbDMwM3JPc0FVSVZ0RHNJbW90OExwV2ZHWFhqZUxJNU5hUkVKVXlp&q=https%3A%2F%2Fwww.instagram.com%2Ffreshapostolicpowerministry%2F",
  facebook: "https://www.youtube.com/redirect?event=channel_description&redir_token=QUlxb01IWTNwaVdFOFRuMUJ0ZEcwNEtTZTV2NHxBSTVJdTVzR3IxUU5IT0lyam1TaWpBOGdDOU1FS202eEhmLVBVS0Z0SkFhWXBHNjRGMTM0V2FxMkVhZWRMU0lDNVVHYnFLYk12VGl1TG9tWjFhVWczd3V2VU9xeWZ0OWRFOWZ6&q=https%3A%2F%2Fweb.facebook.com%2FApostolicfreshfire",
  tiktok: "https://tiktok.com/@yourchurch",
  youtube: "https://youtube.com/@yourchurch",
};

export const pastor = {
  name: "Prophet [Gbolahan Bello Moses]",
  title: "Head Pastor & Founder",
  photo: "/Pastor.jpg", // e.g. "/pastor.jpg" (put the file inside the /public folder)
  quote:
    "Our desire is simple: that every person who walks through these doors meets Jesus and leaves changed.",
  bio: [
    "Write a short introduction of the Head Pastor here — his or her calling, years of ministry, and the vision God placed on his or her heart for this church.",
    "A second paragraph can speak about family, education, and the heart behind the ministry. Edit these lines in src/data/site.js.",
  ],
  milestones: [
    { year: "1998", text: "Called into ministry" },
    { year: "1999", text: "Ordained as a pastor" },
    { year: "2011", text: "Founded the church" },
    { year: "Today", text: "Shepherding a growing family of faith" },
  ],
};

export const services = [
  {
    day: "Sunday",
    name: "Sunday Worship Service",
    time: "6:00 AM",
    text: "Spirit-filled praise, powerful preaching, and fellowship for the whole family.",
    featured: true,
  },
 
  {
    day: "Monday",
    name: "Monday Bible Study",
    time: "6:00 PM",
    text: "Go deeper into Scripture with teaching and open discussion.",
  },
  {
    day: "Friday",
    name: "Hour of Deliverance",
    time: "5:00 PM",
    text: "Come and stand with us in prayer for our families, nation, and world.",
  },
  {
    day: "First Saturday",
    name: "Good Women Fellowship",
    time: "7:00 AM",
    text: "Faith, friendship and purpose for the next generation.",
  },
  {
    day: "Monthly",
    name: "CROSS OVER SERVICE",
    time: "Last day of every month, 11:00 PM",
    text: "An extended night of worship, testimony and encounter.",
  },
];

export const values = [
  { title: "The Word", text: "We hold the Bible as the living, final authority for faith and life." },
  { title: "Worship", text: "We gather to honour God with hearts and voices lifted in praise." },
  { title: "Family", text: "No one walks alone here. We are brothers and sisters in Christ." },
  { title: "Service", text: "We love our community through practical, generous action." },
];

// Gallery: add photos to /public/gallery and list them here, e.g.
//   { src: "/gallery/baptism.jpg", caption: "Baptism Sunday", tag: "Events" }
// Items without "src" show a decorative placeholder tile.
export const gallery = [
  { src: "/gallery/worship1.jpg", caption: "Sunday Worship", tag: "Worship", tone: 0 },
  { src: "/gallery/worship2.jpg", caption: "Sunday Worship", tag: "Events", tone: 1 },
  { src: "/gallery/children.jpg", caption: "Children's Church", tag: "Family", tone: 2 },
  { src: "/gallery/choir.jpg", caption: "Choir Ministration", tag: "Worship", tone: 1 },
  { src: "/gallery/children (2).jpg", caption: "Children's MInistration", tag: "Outreach", tone: 0 },
  { src: "/gallery/family4.jpg", caption: "Youth Fellowship", tag: "Family", tone: 2 },
    { src: "/gallery/family1.jpg", caption: "Youth Fellowship", tag: "Family", tone: 2 },
  { src: "/gallery/family2.jpg", caption: "Youth Fellowship", tag: "Family", tone: 2 },
  { src: "/gallery/family3.jpg", caption: "Youth Fellowship", tag: "Family", tone: 2 },
    { src: "/gallery/family5.jpg", caption: "Youth Fellowship", tag: "Family", tone: 2 },
  { src: "/gallery/family6.jpg", caption: "Youth Fellowship", tag: "Family", tone: 2 },


  { src: "/gallery/thanksgiving.jpg", caption: "Thanksgiving Service", tag: "Events", tone: 0 },
  { src: "/gallery/prayer1.jpg", caption: "Prayers", tag: "Worship", tone: 2 },
  { src: "/gallery/prayer2.jpg", caption: "Prayers", tag: "Events", tone: 1 },
];

// YouTube: paste the video ID (the part after "v=" in the link).
// e.g. https://www.youtube.com/watch?v=dQw4w9WgXcQ  →  id: "dQw4w9WgXcQ"
// Videos with an empty id show a poster that links to your channel.
export const videos = [
  { title: "Sunday Service — Latest Message", id: "yTXU757xy3UqHoXV", date: "Latest" },
  { title: "Worship Medley", id: "jTkqmAMUBvzcjz7a", date: "Worship" },
  { title: "Prophetic Songs", id: "xJ-J_gCCpBM8KbHj", date: "Teaching" },
  { title: "Prophetic Prayers", id: "70GgsGPiP4ZK9BFu", date: "Highlights" },
];
