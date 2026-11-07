// ─────────────────────────────────────────────────────────────
//  EDIT THIS FILE to change the church's details.
//  Everything on the website reads from here.
// ─────────────────────────────────────────────────────────────

export const church = {
  name: "CAC FRESH APOSTOLIC POWER DISRICT HQTS",
  short: "CAC FRESH",
  tagline: "Sanctuary of Grace and Mercy.",
  verse: "“Taste and see that the Lord is good.”",
  verseRef: "Psalm 34:8",
  address: "4, Senboye Oladunni street, off baba Awori Crescent Revelation, Baruwa, Lagos State, Nigeria.",
  phone: "+2348023545275",
  email: "fapminitry3@gmail.com",
mapEmbed: "https://www.google.com/maps?q=6.5898662,3.2545919&output=embed",};

export const socials = {
  instagram: "https://www.youtube.com/redirect?event=channel_description&redir_token=QUlxb01IWm9GZy1oSUs4a2hHXzBYQlJxWGdabHxBSTVJdTVzWXJvaHpPdDZQV0VPNjY4cFY2OGd3ek13Sk9rYjVQNEd0YnBHMFhndFRLRnRHTFRLNEV5OWlHbDMwM3JPc0FVSVZ0RHNJbW90OExwV2ZHWFhqZUxJNU5hUkVKVXlp&q=https%3A%2F%2Fwww.instagram.com%2Ffreshapostolicpowerministry%2F",
  facebook: "https://www.youtube.com/redirect?event=channel_description&redir_token=QUlxb01IWTNwaVdFOFRuMUJ0ZEcwNEtTZTV2NHxBSTVJdTVzR3IxUU5IT0lyam1TaWpBOGdDOU1FS202eEhmLVBVS0Z0SkFhWXBHNjRGMTM0V2FxMkVhZWRMU0lDNVVHYnFLYk12VGl1TG9tWjFhVWczd3V2VU9xeWZ0OWRFOWZ6&q=https%3A%2F%2Fweb.facebook.com%2FApostolicfreshfire",
  tiktok: "https://www.tiktok.com/@gbolahanbello206?_r=1&_t=ZS-9B1M3bBrS5p",
  youtube: "https://youtube.com/@freshapostolicpowerministry?si=KDm51nAoO_1tRIM1",
};

export const pastor = {
  name: "Prophet [Gbolahan Bello Moses]",
  title: "Head Pastor & Founder",
  photo: "/Pastor.jpg", // e.g. "/pastor.jpg" (put the file inside the /public folder)
  quote:
    "Our desire is simple: that every person who walks through these doors meets Jesus and leaves changed.",
  bio: [
    "Prophet Gbolahan Bello Moses is the Founder and Head Pastor of CAC Fresh Apostolic Power Ministry. Born into a Muslim family, he encountered Jesus Christ in 1995 and answered God's call into ministry in 1998. Ordained as a Pastor in 1999, he has dedicated his life to preaching the Gospel, winning souls, and transforming lives through the power of God.",
    "With a passion for spiritual growth and ministry development, he founded Fresh Apostolic Power Ministry in 2011, which has since grown into a ministry committed to prayer, sound biblical teaching, healing, and raising believers firmly grounded in Christ. He also studied Mass Communication through distance learning at The Polytechnic, Ibadan.",
    "Prophet Gbolahan is married to Pastor Mrs. Funmilayo Bello, also known as Lady Evangelist Funmilayo Bello, and together they are blessed with two children. His vision is to see lives transformed, people delivered from shame and limitations, and a generation of believers prepared for eternity and the second coming of Jesus Christ."
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
  { src: "/gallery/family4.jpg", caption: "", tag: "Family", tone: 2 },
  { src: "/gallery/family2.jpg", caption: "", tag: "Family", tone: 2 },
  { src: "/gallery/family3.jpg", caption: "", tag: "Family", tone: 2 },
  { src: "/gallery/family5.jpg", caption: "", tag: "Family", tone: 2 },
  { src: "/gallery/family6.jpg", caption: "", tag: "Family", tone: 2 },
  { src: "/gallery/ushers.jpg", caption: "Ushers", tag: "Family", tone: 3},
  { src: "/gallery/media.jpg", caption: "Media Unit", tag: "Family", tone: 3},


  { src: "/gallery/thanksgiving.jpg", caption: "Thanksgiving Service", tag: "Events", tone: 0 },
  { src: "/gallery/prayer1.jpg", caption: "Prayers", tag: "Worship", tone: 2 },
  { src: "/gallery/prayer2.jpg", caption: "Prayers", tag: "Events", tone: 1 },
];

// YouTube: paste the video ID (the part after "v=" in the link).
// e.g. https://www.youtube.com/watch?v=dQw4w9WgXcQ  →  id: "dQw4w9WgXcQ"
// Videos with an empty id show a poster that links to your channel.
export const videos = [
  {
    title: "Sunday Service — Latest Message",
    id: "jW7kuqfA9iY",
    date: "Latest"
  },
  {
    title: "Evergreen Voices",
    id: "Ot7hHSGUXjQ",
    date: "Worship/Paise"
  },
  {
    title: "Prophetic Songs",
    id: "_nj82tDeLKs",
    date: "Prophetic Somgs"
  },
  {
    title: "Prophetic Prayers",
    id: "b5cdS8gc1fg",
    date: "Prayers"
  },
];


