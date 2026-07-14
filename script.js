/**
 * BharatVideo – Main JavaScript
 * Shared across all pages
 */

'use strict';

/* =================================================
   DEMO DATA
   ================================================= */

/* ─── Copyright-free sample video pool (Google GTv CDN – public domain / CC-licensed) ─── */
const _V = [
  'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
  'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4',
  'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4',
  'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4',
  'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4',
  'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4',
  'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4',
  'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/SubaruOutbackOnStreetAndDirt.mp4',
  'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4',
  'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/VolkswagenGTIReview.mp4',
  'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/WeAreGoingOnBullrun.mp4',
  'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/WhatCarCanYouGetForAGrand.mp4',
];
/** Deterministically pick a sample video URL by cycling through the pool */
const _vid = i => _V[i % _V.length];

const BV = {

  videos: [
    // ── Existing library (ids 1-20) ── //
    { id:  1, title: "Complete DSA Course in Hindi | Arrays, Trees, Graphs & More",       channel: "CodeWithArjun",  initials: "CA", avatarColor: "#1565C0", verified: true,  views: "4.2M",  time: "2 weeks ago",  duration: "1:24:18", thumb: "linear-gradient(135deg,#1565C0 0%,#0D47A1 60%,#1A237E 100%)",    category: "Education",       subs: "3.2M",  likes: "1.4M", language: "Hindi",          video: _vid(0)  },
    { id:  2, title: "Authentic Hyderabadi Biryani at Home | Dum Style | Step by Step",   channel: "KhaanaShaana",   initials: "KS", avatarColor: "#E65100", verified: true,  views: "8.7M",  time: "5 days ago",   duration: "18:45",   thumb: "linear-gradient(135deg,#FF6F00 0%,#E65100 100%)",                category: "Food",            subs: "9.1M",  likes: "842K", language: "Hindi",          video: _vid(1)  },
    { id:  3, title: "IPL 2026 Final Highlights | MI vs CSK Epic Last Over Thriller",     channel: "CricketBharat",  initials: "CB", avatarColor: "#1B5E20", verified: true,  views: "22.1M", time: "3 days ago",   duration: "28:12",   thumb: "linear-gradient(135deg,#1B5E20 0%,#2E7D32 50%,#43A047 100%)",  category: "Sports",          subs: "12.4M", likes: "3.2M", language: "Hindi",          video: _vid(2)  },
    { id:  4, title: "Kesariya Acoustic Cover | Guitar Version | Hindi Bollywood",         channel: "RaagaDhun",      initials: "RD", avatarColor: "#6A1B9A", verified: false, views: "1.3M",  time: "1 week ago",   duration: "5:23",    thumb: "linear-gradient(135deg,#4A148C 0%,#7B1FA2 100%)",              category: "Music",           subs: "780K",  likes: "198K", language: "Hindi",          video: _vid(3)  },
    { id:  5, title: "20-Minute Morning Yoga for Beginners in Hindi | Full Routine",      channel: "YogaWithPriya",  initials: "YP", avatarColor: "#00695C", verified: true,  views: "956K",  time: "4 days ago",   duration: "20:01",   thumb: "linear-gradient(135deg,#004D40 0%,#00897B 100%)",              category: "Health",          subs: "1.8M",  likes: "124K", language: "Hindi",          video: _vid(4)  },
    { id:  6, title: "Share Market for Beginners 2026 | How to Start Investing in India", channel: "NiveshGuru",     initials: "NG", avatarColor: "#1B5E20", verified: true,  views: "3.4M",  time: "6 days ago",   duration: "45:30",   thumb: "linear-gradient(135deg,#1B5E20 0%,#388E3C 100%)",              category: "Finance",         subs: "2.6M",  likes: "312K", language: "Hindi",          video: _vid(5)  },
    { id:  7, title: "Rajasthan Vlog 2026 | Jaipur, Jodhpur & Jaisalmer in 5 Days",      channel: "BharatYatri",    initials: "BY", avatarColor: "#BF360C", verified: false, views: "678K",  time: "2 days ago",   duration: "32:17",   thumb: "linear-gradient(135deg,#BF360C 0%,#FF7043 100%)",              category: "Travel",          subs: "440K",  likes: "78K",  language: "Hindi",          video: _vid(6)  },
    { id:  8, title: "GTA 6 India Mod Full Gameplay | Mumbai Open World | Hindi",          channel: "GamerzAdi",      initials: "GA", avatarColor: "#1A237E", verified: true,  views: "5.9M",  time: "1 day ago",    duration: "1:02:44", thumb: "linear-gradient(135deg,#0D47A1 0%,#311B92 100%)",              category: "Gaming",          subs: "7.3M",  likes: "920K", language: "Hindi",          video: _vid(7)  },
    { id:  9, title: "Samsung Galaxy S26 Unboxing & Full Review in Hindi | Worth Buying?", channel: "TechTalkHindi", initials: "TT", avatarColor: "#0277BD", verified: true,  views: "2.1M",  time: "8 hours ago",  duration: "14:56",   thumb: "linear-gradient(135deg,#0277BD 0%,#01579B 100%)",              category: "Tech",            subs: "4.5M",  likes: "218K", language: "Hindi",          video: _vid(8)  },
    { id: 10, title: "Desi Jugaad Comedy | Desi School Life Season 3 | Funny Video",      channel: "DesiLaughs",     initials: "DL", avatarColor: "#F57F17", verified: true,  views: "11.2M", time: "3 hours ago",  duration: "12:34",   thumb: "linear-gradient(135deg,#F57F17 0%,#FBC02D 100%)",              category: "Comedy",          subs: "18.6M", likes: "2.1M", language: "Hindi",          video: _vid(9)  },
    { id: 11, title: "How I Built a ₹1 Crore Startup at Age 22 | My Honest Story",       channel: "StartupIndia",   initials: "SI", avatarColor: "#263238", verified: true,  views: "3.8M",  time: "5 hours ago",  duration: "22:08",   thumb: "linear-gradient(135deg,#263238 0%,#455A64 100%)",              category: "Business",        subs: "2.9M",  likes: "445K", language: "Hindi",          video: _vid(10) },
    { id: 12, title: "Ganesh Chaturthi DIY Decoration Ideas 2026 | Easy Home Decor",      channel: "RangDecor",      initials: "RC", avatarColor: "#E65100", verified: false, views: "428K",  time: "Just now",     duration: "8:45",    thumb: "linear-gradient(135deg,#E65100 0%,#FF8F00 100%)",              category: "Culture",         subs: "310K",  likes: "52K",  language: "Hindi",          video: _vid(11) },
    { id: 13, title: "BGMI Pro Tips & Tricks 2026 | Rank Push to Conqueror | Hindi",     channel: "GamerzAdi",      initials: "GA", avatarColor: "#1A237E", verified: true,  views: "6.4M",  time: "4 days ago",   duration: "38:19",   thumb: "linear-gradient(135deg,#311B92 0%,#1A237E 60%,#283593 100%)",  category: "Gaming",          subs: "7.3M",  likes: "1.1M", language: "Hindi",          video: _vid(0)  },
    { id: 14, title: "Learn Python in 1 Hour | Beginner Tutorial in Hindi",               channel: "CodeWithArjun",  initials: "CA", avatarColor: "#1565C0", verified: true,  views: "9.2M",  time: "3 weeks ago",  duration: "58:34",   thumb: "linear-gradient(135deg,#283593 0%,#1565C0 100%)",              category: "Education",       subs: "3.2M",  likes: "1.8M", language: "Hindi",          video: _vid(1)  },
    { id: 15, title: "Mumbaikars Try Food From Different States | Blind Taste Test",       channel: "KhaanaShaana",   initials: "KS", avatarColor: "#E65100", verified: true,  views: "14.7M", time: "1 week ago",   duration: "22:10",   thumb: "linear-gradient(135deg,#D84315 0%,#FF7043 100%)",              category: "Food",            subs: "9.1M",  likes: "1.9M", language: "Hindi",          video: _vid(2)  },
    { id: 16, title: "Coldplay Concert India 2026 Vlog | Behind The Scenes",              channel: "BharatYatri",    initials: "BY", avatarColor: "#BF360C", verified: false, views: "2.3M",  time: "9 hours ago",  duration: "28:45",   thumb: "linear-gradient(135deg,#880E4F 0%,#AD1457 60%,#C2185B 100%)",  category: "Music",           subs: "440K",  likes: "287K", language: "Hindi",          video: _vid(3)  },
    { id: 17, title: "AI vs Human Debate 2026 | Will AI Replace Indian Engineers?",       channel: "TechTalkHindi",  initials: "TT", avatarColor: "#0277BD", verified: true,  views: "7.1M",  time: "2 days ago",   duration: "44:12",   thumb: "linear-gradient(135deg,#006064 0%,#00838F 60%,#00ACC1 100%)",  category: "Tech",            subs: "4.5M",  likes: "892K", language: "Hindi",          video: _vid(4)  },
    { id: 18, title: "Road Trip: Mumbai to Goa on Royal Enfield | Complete Vlog",         channel: "BharatYatri",    initials: "BY", avatarColor: "#BF360C", verified: false, views: "4.4M",  time: "5 days ago",   duration: "1:12:33", thumb: "linear-gradient(135deg,#4527A0 0%,#7B1FA2 100%)",              category: "Travel",          subs: "440K",  likes: "410K", language: "Hindi",          video: _vid(5)  },
    { id: 19, title: "Stand Up Comedy: Life in Bangalore Traffic | Hindi",                channel: "DesiLaughs",     initials: "DL", avatarColor: "#F57F17", verified: true,  views: "18.3M", time: "6 hours ago",  duration: "48:02",   thumb: "linear-gradient(135deg,#E65100 0%,#FF6D00 50%,#FF9100 100%)",  category: "Comedy",          subs: "18.6M", likes: "3.6M", language: "Hindi",          video: _vid(6)  },
    { id: 20, title: "NiveshGuru Annual Review 2026 | Best Stocks to Buy in India",       channel: "NiveshGuru",     initials: "NG", avatarColor: "#1B5E20", verified: true,  views: "5.8M",  time: "3 weeks ago",  duration: "1:08:44", thumb: "linear-gradient(135deg,#1B5E20 0%,#2E7D32 50%,#00C853 100%)",  category: "Finance",         subs: "2.6M",  likes: "688K", language: "Hindi",          video: _vid(7)  },

    // ── New Indian creator content (ids 21-32) ── //
    { id: 21, title: "Java Full Course for Beginners 2026 | OOP, Collections, Spring Boot", channel: "Code India",       initials: "CI", avatarColor: "#1565C0", verified: true,  views: "5.1M",  time: "1 week ago",   duration: "2:14:30", thumb: "linear-gradient(135deg,#1565C0 0%,#0D47A1 50%,#283593 100%)",  category: "Programming",     subs: "4.1M",  likes: "1.2M", language: "Hindi",          video: _vid(8)  },
    { id: 22, title: "Python Data Science & Machine Learning – Zero to Hero | Hindi",      channel: "AI Academy India", initials: "AI", avatarColor: "#4A148C", verified: true,  views: "3.8M",  time: "4 days ago",   duration: "1:48:22", thumb: "linear-gradient(135deg,#4A148C 0%,#6A1B9A 50%,#7B1FA2 100%)",  category: "Python",          subs: "2.8M",  likes: "876K", language: "Hindi + English", video: _vid(9)  },
    { id: 23, title: "Web Development Roadmap 2026 | HTML CSS JS React Node – Complete",   channel: "Coding Guru",      initials: "CG", avatarColor: "#0277BD", verified: true,  views: "6.7M",  time: "3 days ago",   duration: "1:05:18", thumb: "linear-gradient(135deg,#0277BD 0%,#0288D1 50%,#039BE5 100%)",  category: "Web Development", subs: "5.3M",  likes: "1.5M", language: "Hindi",          video: _vid(10) },
    { id: 24, title: "Machine Learning A–Z in Hindi | Regression to Deep Learning 2026",   channel: "AI Academy India", initials: "AI", avatarColor: "#4A148C", verified: true,  views: "4.4M",  time: "6 days ago",   duration: "3:12:05", thumb: "linear-gradient(135deg,#311B92 0%,#4527A0 50%,#512DA8 100%)",  category: "AI",              subs: "2.8M",  likes: "1.1M", language: "Hindi + English", video: _vid(11) },
    { id: 25, title: "Generative AI & ChatGPT Masterclass | Build Real Projects",          channel: "Bharat Tech",      initials: "BT", avatarColor: "#BF360C", verified: true,  views: "8.2M",  time: "2 days ago",   duration: "58:44",   thumb: "linear-gradient(135deg,#BF360C 0%,#D84315 50%,#E64A19 100%)",  category: "AI",              subs: "6.8M",  likes: "2.3M", language: "English",        video: _vid(0)  },
    { id: 26, title: "React.js + Next.js Full Stack Course 2026 | From Scratch",           channel: "Dev Academy",      initials: "DA", avatarColor: "#006064", verified: true,  views: "3.2M",  time: "5 days ago",   duration: "2:30:10", thumb: "linear-gradient(135deg,#004D40 0%,#006064 50%,#00838F 100%)",  category: "Web Development", subs: "2.1M",  likes: "698K", language: "Hindi + English", video: _vid(1)  },
    { id: 27, title: "Complete C++ Programming Course | STL, Pointers, OOP | Hindi",       channel: "Code India",       initials: "CI", avatarColor: "#1565C0", verified: true,  views: "2.9M",  time: "2 weeks ago",  duration: "1:55:33", thumb: "linear-gradient(135deg,#1A237E 0%,#283593 50%,#303F9F 100%)",  category: "Programming",     subs: "4.1M",  likes: "742K", language: "Hindi",          video: _vid(2)  },
    { id: 28, title: "Android Development with Kotlin 2026 | Complete Beginner to Pro",    channel: "Digital India",    initials: "DI", avatarColor: "#00695C", verified: true,  views: "1.8M",  time: "1 week ago",   duration: "2:08:17", thumb: "linear-gradient(135deg,#004D40 0%,#00695C 50%,#00796B 100%)",  category: "Programming",     subs: "1.4M",  likes: "389K", language: "Hindi",          video: _vid(3)  },
    { id: 29, title: "Git & GitHub Complete Course | Version Control for Beginners | Hindi", channel: "Study Point",     initials: "SP", avatarColor: "#37474F", verified: false, views: "1.1M",  time: "3 weeks ago",  duration: "42:55",   thumb: "linear-gradient(135deg,#263238 0%,#37474F 50%,#455A64 100%)",  category: "Programming",     subs: "890K",  likes: "212K", language: "Hindi",          video: _vid(4)  },
    { id: 30, title: "Cloud Computing with AWS 2026 | EC2, S3, Lambda – Hindi Tutorial",   channel: "Bharat Tech",      initials: "BT", avatarColor: "#BF360C", verified: true,  views: "2.6M",  time: "4 days ago",   duration: "1:22:48", thumb: "linear-gradient(135deg,#B71C1C 0%,#C62828 50%,#D32F2F 100%)",  category: "Technology",      subs: "6.8M",  likes: "582K", language: "Hindi + English", video: _vid(5)  },
    { id: 31, title: "Cybersecurity for Beginners 2026 | Ethical Hacking Basics in Hindi",  channel: "Tech Bharat",     initials: "TB", avatarColor: "#880E4F", verified: true,  views: "3.4M",  time: "1 week ago",   duration: "1:10:22", thumb: "linear-gradient(135deg,#880E4F 0%,#AD1457 50%,#C2185B 100%)",  category: "Technology",      subs: "3.7M",  likes: "812K", language: "Hindi",          video: _vid(6)  },
    { id: 32, title: "Kerala God's Own Country – 7-Day Tour Vlog | Hidden Gems",           channel: "Bharat Explorer",  initials: "BE", avatarColor: "#33691E", verified: false, views: "892K",  time: "5 days ago",   duration: "45:12",   thumb: "linear-gradient(135deg,#1B5E20 0%,#2E7D32 40%,#388E3C 100%)",  category: "Travel",          subs: "620K",  likes: "134K", language: "Hindi",          video: _vid(7)  },
  ],

  shorts: [
    { id: "s1",  title: "5-Second Cheat Code in Free Fire 🔥",   channel: "GamerzAdi",      views: "42M",  thumb: "linear-gradient(170deg,#0D47A1 0%,#311B92 100%)" },
    { id: "s2",  title: "Butter Chicken in 10 Minutes 😍",        channel: "KhaanaShaana",   views: "28M",  thumb: "linear-gradient(170deg,#BF360C 0%,#FF7043 100%)" },
    { id: "s3",  title: "How to Code a Habit App in 60s",         channel: "Code India",      views: "15M",  thumb: "linear-gradient(170deg,#1565C0 0%,#283593 100%)" },
    { id: "s4",  title: "Mumbai vs Delhi Food 🍛 Which Wins?",     channel: "KhaanaShaana",   views: "31M",  thumb: "linear-gradient(170deg,#E65100 0%,#FF8F00 100%)" },
    { id: "s5",  title: "Cricket Amazing Catch Compilation",       channel: "CricketBharat",  views: "67M",  thumb: "linear-gradient(170deg,#1B5E20 0%,#43A047 100%)" },
    { id: "s6",  title: "Indian Dad Reacts to Gen Z Slang 😂",     channel: "DesiLaughs",     views: "88M",  thumb: "linear-gradient(170deg,#F57F17 0%,#FBC02D 100%)" },
    { id: "s7",  title: "Taj Mahal Sunrise | Drone View",          channel: "BharatYatri",    views: "19M",  thumb: "linear-gradient(170deg,#880E4F 0%,#C2185B 100%)" },
    { id: "s8",  title: "₹1000 vs ₹1 Lakh Hotel in India",        channel: "BharatYatri",    views: "54M",  thumb: "linear-gradient(170deg,#4527A0 0%,#6A1B9A 100%)" },
    { id: "s9",  title: "Easy 1-Min Yoga for Neck Pain 🧘",        channel: "YogaWithPriya",  views: "23M",  thumb: "linear-gradient(170deg,#004D40 0%,#00897B 100%)" },
    { id: "s10", title: "SIP vs FD in 2026 | Best Option?",        channel: "NiveshGuru",     views: "12M",  thumb: "linear-gradient(170deg,#1B5E20 0%,#388E3C 100%)" },
    { id: "s11", title: "OnePlus 13 vs iPhone 17 Drop Test",        channel: "TechTalkHindi",  views: "36M",  thumb: "linear-gradient(170deg,#0277BD 0%,#01579B 100%)" },
    { id: "s12", title: "Auto-Tune Desi Village Songs 🎵 😂",       channel: "DesiLaughs",     views: "102M", thumb: "linear-gradient(170deg,#795548 0%,#4E342E 100%)" },
    { id: "s13", title: "Python One-Liner Magic ✨",                 channel: "Coding Guru",    views: "9.3M", thumb: "linear-gradient(170deg,#4A148C 0%,#7B1FA2 100%)" },
    { id: "s14", title: "React Hook in 60 Seconds ⚡",              channel: "Dev Academy",    views: "7.1M", thumb: "linear-gradient(170deg,#006064 0%,#00838F 100%)" },
    { id: "s15", title: "ChatGPT Prompt That 10x'd My Work",        channel: "Bharat Tech",    views: "22M",  thumb: "linear-gradient(170deg,#BF360C 0%,#E64A19 100%)" },
  ],

  featured: [
    { id: "f1", badge: "🔥 Trending",  title: "IPL 2026 Season Highlights – The Most Epic Moments",                   channel: "CricketBharat", views: "22.1M", time: "3 days ago",  duration: "28:12",   thumb: "linear-gradient(135deg,#1B5E20 0%,#2E7D32 40%,#1A237E 100%)" },
    { id: "f2", badge: "🎓 Featured",  title: "Java Full Course 2026 – From Zero to Spring Boot | Code India",      channel: "Code India",    views: "5.1M",  time: "1 week ago",  duration: "2:14:30", thumb: "linear-gradient(135deg,#0D47A1 0%,#1565C0 50%,#283593 100%)" }
  ],

  creators: [
    { name: "Code India",      subs: "4.1M",  initials: "CI", color: "#1565C0", handle: "@codeindia" },
    { name: "Tech Bharat",     subs: "3.7M",  initials: "TB", color: "#880E4F", handle: "@techbharat" },
    { name: "AI Academy India",subs: "2.8M",  initials: "AI", color: "#4A148C", handle: "@aiacademyindia" },
    { name: "Coding Guru",     subs: "5.3M",  initials: "CG", color: "#0277BD", handle: "@codingguru" },
    { name: "Study Point",     subs: "890K",  initials: "SP", color: "#37474F", handle: "@studypoint" },
    { name: "Bharat Tech",     subs: "6.8M",  initials: "BT", color: "#BF360C", handle: "@bharattech" },
    { name: "Digital India",   subs: "1.4M",  initials: "DI", color: "#00695C", handle: "@digitalindia" },
    { name: "Future Coders",   subs: "2.2M",  initials: "FC", color: "#880E4F", handle: "@futurecoders" },
    { name: "Dev Academy",     subs: "2.1M",  initials: "DA", color: "#006064", handle: "@devacademy" },
    { name: "Learn Hindi",     subs: "1.6M",  initials: "LH", color: "#E65100", handle: "@learnhindi" },
  ],

  categories: [
    "All", "Trending", "Programming", "Web Development", "AI",
    "Python", "Education", "Tech", "Gaming", "Music",
    "Food", "Travel", "Health", "Finance", "Business",
    "Sports", "Comedy", "Technology", "Culture",
  ],

  suggestions: [
    { text: "Java full course Hindi",             trending: true  },
    { text: "Python machine learning tutorial",   trending: true  },
    { text: "Web development roadmap 2026",        trending: true  },
    { text: "React Next.js full stack",            trending: false },
    { text: "ChatGPT generative AI masterclass",   trending: true  },
    { text: "DSA course in Hindi",                 trending: false },
    { text: "Android app development Kotlin",      trending: false },
    { text: "cloud computing AWS Hindi",           trending: false },
    { text: "cybersecurity ethical hacking",       trending: false },
    { text: "IPL 2026 highlights",                 trending: true  },
    { text: "biryani recipe at home",              trending: false },
    { text: "Samsung Galaxy S26 review",           trending: false },
    { text: "GTA 6 India mod gameplay",            trending: true  },
    { text: "Rajasthan road trip vlog",            trending: false },
    { text: "BGMI pro tips conqueror",             trending: true  },
  ],

  comments: [
    { author: "Rahul Sharma",     initials: "RS", color: "#1565C0", time: "3 hours ago",  text: "Bhai is video ne meri life change kar di! Bohot zyada helpful content. Keep it up! 🔥",                                       likes: 2341 },
    { author: "Priya Kapoor",     initials: "PK", color: "#880E4F", time: "5 hours ago",  text: "Itna accha explanation aur itna clear language – first time samajh aaya ye topic. Thank you so much!",                         likes: 1876 },
    { author: "Arjun Mehta",      initials: "AM", color: "#1B5E20", time: "8 hours ago",  text: "Bhai competition mein koi nahi hai tera. Seriously, best content on BharatVideo. Subscribed + bell on ✅",                      likes: 1423 },
    { author: "Sneha Patel",      initials: "SP", color: "#E65100", time: "1 day ago",    text: "Main yeh video teen baar dekh chuki hoon. Har baar kuch naya milta hai. Amazing work! 👏",                                    likes: 987  },
    { author: "Vikram Singh",     initials: "VS", color: "#4A148C", time: "1 day ago",    text: "2026 ka best video! Bhai sach mein kaam aaya yeh. Mere friends ko bhi share kiya.",                                           likes: 756  },
    { author: "Ananya Krishnan",  initials: "AK", color: "#006064", time: "2 days ago",   text: "Quality, consistency aur passion – yahi cheez alag karti hai isko baaki content se. Superb! 🙌",                              likes: 634  },
    { author: "Rohan Gupta",      initials: "RG", color: "#263238", time: "3 days ago",   text: "Pehli video dekhi channel ki aur seedha subscribe kiya. Such a gem of a channel!",                                            likes: 512  },
    { author: "Meera Nair",       initials: "MN", color: "#BF360C", time: "4 days ago",   text: "Kitni research ki hai bhai! Clearly dikhta hai. Yeh level ka content free mein mil raha hai – incredible! 🙏",                 likes: 398  },
    { author: "Karan Malhotra",   initials: "KM", color: "#0277BD", time: "5 days ago",   text: "Sir aapki teaching style bahut unique hai. Complex topics ko bahut easy way mein explain karte ho. Keep growing! 💪",          likes: 312  },
    { author: "Divya Tiwari",     initials: "DT", color: "#00695C", time: "6 days ago",   text: "Ekdum mast video! Clear, concise aur bilkul to the point. Thank you for making free education available for everyone. 🙏🇮🇳", likes: 274  },
  ],

  dialogs: {
    like:       { title: "Like this video?",       text: "Sign in to like videos, leave comments, and interact with the BharatVideo community." },
    subscribe:  { title: "Subscribe to creator?",  text: "Sign in to subscribe and get notified whenever your favourite creators upload new videos." },
    comment:    { title: "Join the conversation",  text: "Sign in to comment, reply, and engage with millions of viewers across India." },
    upload:     { title: "Upload your video",      text: "Sign in to upload videos, create playlists, and reach millions of viewers on BharatVideo." },
    watchlater: { title: "Save for later?",        text: "Sign in to save videos to Watch Later and access them from any device." },
    history:    { title: "View your history",      text: "Sign in to see your watch history and continue where you left off." },
    playlist:   { title: "Create a playlist",      text: "Sign in to organise your favourite videos into custom playlists." },
    notif:      { title: "Notification settings", text: "Sign in to manage notifications and never miss a video from your subscriptions." },
    default:    { title: "Sign in to continue",    text: "Create a free BharatVideo account to access all features." }
  },

  descriptions: {
    1:  "Welcome to this comprehensive DSA course in Hindi! In this video, I cover everything from Arrays to Advanced Graph algorithms.\n\n📚 Topics covered:\n• Arrays & Strings\n• Linked Lists\n• Stacks & Queues\n• Trees (BST, AVL, Red-Black)\n• Graphs (BFS, DFS, Dijkstra)\n• Dynamic Programming\n\n💻 Code available on GitHub: github.com/codearjun\n\nLike & Subscribe for more placement-focused content! 🚀",
    2:  "Aaj main aapko sikhaunga Hyderabadi Biryani ki original Dum recipe! Yeh recipe mere Hyderabadi dost ki family se hai.\n\n🥘 Ingredients:\n• 1kg Basmati rice  • 500g mutton  • Whole spices\n• Fried onions  • Saffron milk\n\nStep by step follow karo – ekdum restaurant jaisi biryani ghar pe ban jayegi!",
    3:  "IPL 2026 ka sabse epic final! MI vs CSK match cricket history mein hamesha yaad rahega.\n\n🏏 Key moments:\n• Super over thriller  • Hat-trick in 18th over  • Record 6 sixes last over\n\nLike karo agar aapko cricket pasand hai!",
    21: "Java 2026 ka sabse complete course! Is video mein aap seekhenge:\n\n☕ Topics:\n• Java Basics & OOP  • Collections Framework  • Exception Handling\n• Multithreading  • JDBC & MySQL  • Spring Boot REST API\n\n💻 GitHub: github.com/codeindia\n\n🔔 Subscribe karein – weekly new videos!",
    22: "Python Data Science aur Machine Learning ka complete roadmap!\n\n🐍 Topics covered:\n• NumPy & Pandas  • Data Visualization (Matplotlib, Seaborn)\n• Scikit-Learn ML Models  • Deep Learning with TensorFlow\n• Real Indian dataset projects\n\n📊 Kaggle notebooks included. Subscribe for more AI content!",
    23: "2026 mein Web Developer banana chahte ho? Yeh complete roadmap follow karo!\n\n🌐 Topics:\n• HTML5 & CSS3  • JavaScript ES2026  • React.js & Next.js\n• Node.js & Express  • MongoDB  • Deployment on Vercel\n\n🎯 Portfolio projects included. Hindi mein samjhaya gaya hai.",
    24: "Machine Learning A-Z in Hindi – sabse comprehensive ML course!\n\n🤖 Topics:\n• Linear & Logistic Regression  • Decision Trees & Random Forest\n• SVM & KNN  • Neural Networks  • Deep Learning  • NLP Basics\n\n📁 All datasets & notebooks on GitHub. 3+ hours of content!",
    25: "Generative AI aur ChatGPT ke saath real-world projects build karo!\n\n🚀 What you'll learn:\n• Prompt Engineering Mastery  • LangChain Framework\n• Build a Chatbot  • RAG (Retrieval-Augmented Generation)\n• Deploy AI apps on cloud\n\nNo coding experience needed – beginner friendly!",
    26: "React.js aur Next.js se full-stack web application banana seekho!\n\n⚛️ Topics:\n• React Hooks & Context API  • Next.js App Router\n• Server Actions  • Prisma ORM  • NextAuth.js\n• Deploy on Vercel\n\n🛒 Build a complete e-commerce app step by step!",
  }

};


/* =================================================
   UTILITIES
   ================================================= */

const $ = (sel, ctx = document) => ctx.querySelector(sel);
const $$ = (sel, ctx = document) => [...ctx.querySelectorAll(sel)];
const on = (el, ev, fn) => el && el.addEventListener(ev, fn);

function getParam(key) {
  return new URLSearchParams(window.location.search).get(key);
}

function svgVerified() {
  return `<svg class="v-verified" viewBox="0 0 24 24" fill="currentColor" aria-label="Verified creator">
    <path d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-.879 3.226 3.745 3.745 0 01-3.226.879 3.745 3.745 0 01-3.068 1.593c-1.268 0-2.39-.63-3.068-1.593a3.745 3.745 0 01-3.226-.879 3.745 3.745 0 01-.879-3.226A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 01.879-3.226 3.745 3.745 0 013.226-.879A3.745 3.745 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.745 3.745 0 013.226.879 3.745 3.745 0 01.879 3.226A3.745 3.745 0 0121 12z"/>
  </svg>`;
}

function svgEye(show = true) {
  return show
    ? `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>`
    : `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17.94 17.94A10.07 10.07 0 0112 20c-7 0-11-8-11-8a18.45 18.45 0 015.06-5.94M9.9 4.24A9.12 9.12 0 0112 4c7 0 11 8 11 8a18.5 18.5 0 01-2.16 3.19m-6.72-1.07a3 3 0 11-4.24-4.24"/><line x1="1" y1="1" x2="23" y2="23"/></svg>`;
}


/* =================================================
   TOAST
   ================================================= */

function showToast(msg) {
  let stack = $('#toast-stack');
  if (!stack) {
    stack = document.createElement('div');
    stack.id = 'toast-stack';
    stack.className = 'toast-stack';
    document.body.appendChild(stack);
  }
  const t = document.createElement('div');
  t.className = 'toast-msg';
  t.textContent = msg;
  stack.appendChild(t);
  setTimeout(() => t.remove(), 3100);
}


/* =================================================
   RENDER – VIDEO CARD (link to watch page)
   ================================================= */

function makeVideoCard(v) {
  const card = document.createElement('a');
  card.href  = `watch.html?v=${v.id}`;
  card.className = 'v-card';
  card.setAttribute('aria-label', `${v.title} by ${v.channel}`);
  card.innerHTML = `
    <div class="v-thumb">
      <div class="v-thumb-bg" style="background:${v.thumb}" role="img" aria-label="${v.title} thumbnail"></div>
      <span class="v-duration">${v.duration}</span>
    </div>
    <div class="v-body">
      <a href="channel.html?c=${encodeURIComponent(v.channel)}" class="v-avatar" style="background:${v.avatarColor}" aria-hidden="true" tabindex="-1">${v.initials}</a>
      <div class="v-info">
        <h3 class="v-title">${v.title}</h3>
        <div class="v-channel">
          <a href="channel.html?c=${encodeURIComponent(v.channel)}" class="v-ch-link">${v.channel}</a>
          ${v.verified ? svgVerified() : ''}
        </div>
        <div class="v-meta">${v.views} views · ${v.time}${v.language ? `<span class="v-lang">${v.language}</span>` : ''}</div>
      </div>
    </div>`;
  return card;
}


/* =================================================
   RENDER – SHORT CARD (shorts grid page)
   ================================================= */

function makeShortCard(s) {
  const card = document.createElement('a');
  card.href  = `shorts.html`;
  card.className = 'short-card';
  card.setAttribute('aria-label', `${s.title} by ${s.channel}`);
  card.innerHTML = `
    <div class="short-bg" style="background:${s.thumb}" role="img" aria-label="${s.title}"></div>
    <div class="short-overlay">
      <p class="short-title">${s.title}</p>
      <p class="short-ch">${s.channel}</p>
      <p class="short-v">${s.views} views</p>
    </div>
    <div class="short-play" aria-hidden="true">
      <svg viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>
    </div>`;
  return card;
}


/* =================================================
   RENDER – SHORT PREVIEW CARD (homepage strip)
   ================================================= */

function makeShortPreviewCard(s) {
  const card = document.createElement('a');
  card.href  = 'shorts.html';
  card.className = 'sprev-card';
  card.setAttribute('aria-label', `Short: ${s.title}`);
  card.innerHTML = `
    <div class="sprev-bg" style="background:${s.thumb}" role="img" aria-label="${s.title}"></div>
    <div class="sprev-overlay">
      <p class="sprev-title">${s.title}</p>
      <p class="sprev-views">${s.views} views</p>
    </div>`;
  return card;
}


/* =================================================
   RENDER – FEATURED CARD
   ================================================= */

function makeFeaturedCard(f) {
  // Map featured IDs to the real video IDs so clicking opens the watch page
  const featuredVideoMap = { f1: 3, f2: 21 };
  const vidId = featuredVideoMap[f.id] || 1;
  const card = document.createElement('a');
  card.href      = `watch.html?v=${vidId}`;
  card.className = 'f-card fade-up';
  card.setAttribute('aria-label', `Featured: ${f.title}`);
  card.innerHTML = `
    <div class="f-bg" style="background:${f.thumb}" role="img" aria-label="${f.title} thumbnail"></div>
    <span class="f-duration">${f.duration}</span>
    <div class="f-overlay">
      <span class="f-badge">${f.badge}</span>
      <p class="f-title">${f.title}</p>
      <div class="f-meta">
        <span>${f.channel}</span>
        <span>${f.views} views</span>
        <span>${f.time}</span>
      </div>
    </div>`;
  return card;
}


/* =================================================
   RENDER – CREATOR CARD (links to channel)
   ================================================= */

function makeCreatorCard(c) {
  const card = document.createElement('a');
  card.href  = `channel.html?c=${encodeURIComponent(c.name)}`;
  card.className = 'cr-card';
  card.setAttribute('aria-label', `${c.name} – ${c.subs} subscribers`);
  card.innerHTML = `
    <div class="cr-avatar" style="background:${c.color}" aria-hidden="true">${c.initials}</div>
    <span class="cr-name">${c.name}</span>
    <span class="cr-subs">${c.subs}</span>`;
  return card;
}


/* =================================================
   RENDER – SUGGESTED VIDEO CARD (watch page)
   ================================================= */

function makeSugCard(v) {
  const card = document.createElement('a');
  card.href  = `watch.html?v=${v.id}`;
  card.className = 'sug-card';
  card.setAttribute('aria-label', `${v.title}`);
  card.innerHTML = `
    <div class="sug-thumb-wrap">
      <div class="sug-thumb-bg" style="background:${v.thumb}" role="img" aria-label="${v.title}"></div>
      <span class="sug-dur">${v.duration}</span>
    </div>
    <div class="sug-info">
      <p class="sug-title">${v.title}</p>
      <p class="sug-channel">${v.channel}</p>
      <p class="sug-meta">${v.views} views · ${v.time}</p>
    </div>`;
  return card;
}


/* =================================================
   RENDER – CATEGORY CHIPS
   ================================================= */

function initChips() {
  const bar = $('#chips-bar');
  if (!bar) return;

  BV.categories.forEach((cat, i) => {
    const btn = document.createElement('button');
    btn.className = 'chip' + (i === 0 ? ' active' : '');
    btn.textContent = cat;
    btn.setAttribute('aria-pressed', String(i === 0));
    on(btn, 'click', () => {
      $$('.chip', bar).forEach(c => { c.classList.remove('active'); c.setAttribute('aria-pressed', 'false'); });
      btn.classList.add('active');
      btn.setAttribute('aria-pressed', 'true');
      const grid     = $('#main-video-grid');
      const filtered = cat === 'All' ? BV.videos : BV.videos.filter(v => v.category === cat);
      renderGrid(grid, filtered, cat === 'All' ? '' : cat);
    });
    bar.appendChild(btn);
  });
}


/* =================================================
   RENDER – GRIDS
   ================================================= */

function renderGrid(container, videos, categoryLabel) {
  if (!container) return;
  container.innerHTML = '';
  if (!videos || videos.length === 0) {
    container.innerHTML = `
      <div class="empty-state">
        <div class="empty-icon">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
            <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
          </svg>
        </div>
        <p class="empty-title">No videos found${categoryLabel ? ` in &ldquo;${categoryLabel}&rdquo;` : ''}</p>
        <p class="empty-sub">Try a different category or search for what you're looking for.</p>
        <button class="empty-action" onclick="document.querySelector('.chip').click()">View All Videos</button>
      </div>`;
    return;
  }
  container.classList.add('stagger');
  videos.forEach(v => container.appendChild(makeVideoCard(v)));
}

function renderFeatured(container, items) {
  if (!container) return;
  container.innerHTML = '';
  items.forEach(f => container.appendChild(makeFeaturedCard(f)));
}

function renderCreators(container, creators) {
  if (!container) return;
  container.innerHTML = '';
  creators.forEach(c => container.appendChild(makeCreatorCard(c)));
}

function renderShortsPreview(container, shorts) {
  if (!container) return;
  container.innerHTML = '';
  shorts.forEach(s => container.appendChild(makeShortPreviewCard(s)));
}


/* =================================================
   SIDEBAR
   ================================================= */

function initSidebar() {
  const hamburger = $('#hamburger');
  const sidebar   = $('#sidebar');
  const overlay   = $('#sidebar-overlay');
  if (!hamburger || !sidebar) return;

  const isMobile = () => window.innerWidth < 1024;
  const isLarge  = () => window.innerWidth >= 1280;
  const isWatch  = () => document.body.dataset.page === 'watch';

  function open() {
    document.body.classList.add('sb-open');
    if (isMobile() && overlay) {
      overlay.style.display = 'block';
      // Trigger reflow so transition fires
      overlay.offsetHeight; // eslint-disable-line
      overlay.classList.add('visible');
    }
    hamburger.setAttribute('aria-expanded', 'true');
  }
  function close() {
    document.body.classList.remove('sb-open');
    if (overlay) {
      overlay.classList.remove('visible');
      // Wait for fade-out transition before hiding
      const dur = parseFloat(getComputedStyle(overlay).transitionDuration) * 1000 || 350;
      setTimeout(() => { if (!overlay.classList.contains('visible')) overlay.style.display = 'none'; }, dur);
    }
    hamburger.setAttribute('aria-expanded', 'false');
  }
  function toggle() {
    document.body.classList.contains('sb-open') ? close() : open();
  }

  // Default open on large screens unless it's the watch page
  if (isLarge() && !isWatch()) open();

  on(hamburger, 'click', toggle);
  on(overlay,   'click', close);
  // ESC closes on every viewport (not just mobile)
  on(document,  'keydown', e => { if (e.key === 'Escape') close(); });

  window.addEventListener('resize', () => {
    if (isLarge() && !isWatch()) {
      open();
      if (overlay) { overlay.classList.remove('visible'); overlay.style.display = 'none'; }
    } else if (!isMobile() && overlay) {
      overlay.classList.remove('visible');
      overlay.style.display = 'none';
    }
  }, { passive: true });
}


/* =================================================
   NAVBAR SCROLL SHADOW
   ================================================= */

function initNavbar() {
  const navbar = $('#navbar');
  if (!navbar) return;
  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 8);
  }, { passive: true });
}


/* =================================================
   MOBILE SEARCH EXPAND
   ================================================= */

function initMobileSearch() {
  const openBtn  = $('#mobile-search-btn');
  const closeBtn = $('.search-close');
  const navbar   = $('#navbar');
  const input    = $('.search-input', navbar || document);
  if (!openBtn || !navbar) return;

  on(openBtn, 'click', () => {
    navbar.classList.add('search-mode');
    setTimeout(() => input && input.focus(), 80);
  });
  on(closeBtn, 'click', () => navbar.classList.remove('search-mode'));
  on(document,  'keydown', e => {
    if (e.key === 'Escape' && navbar.classList.contains('search-mode'))
      navbar.classList.remove('search-mode');
  });
}


/* =================================================
   SEARCH SUGGESTIONS
   ================================================= */

function initSearchSuggestions() {
  const input    = $('#main-search');
  const dropdown = $('#suggest-dropdown');
  const clearBtn = $('#search-clear');
  if (!input || !dropdown) return;

  function buildSuggestions(query) {
    const q = query.trim().toLowerCase();
    const items = q
      ? BV.suggestions.filter(s => s.text.toLowerCase().includes(q))
      : BV.suggestions.slice(0, 6);

    dropdown.innerHTML = '';
    items.forEach(s => {
      const el = document.createElement('div');
      el.className = 'suggest-item';
      el.setAttribute('role', 'option');
      el.innerHTML = `
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
          <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
        </svg>
        <span>${s.text}</span>
        ${s.trending ? '<span class="suggest-trending">Trending</span>' : ''}`;
      on(el, 'mousedown', e => {
        e.preventDefault();
        input.value = s.text;
        dropdown.classList.remove('open');
        updateClearBtn();
      });
      dropdown.appendChild(el);
    });
    dropdown.classList.toggle('open', items.length > 0);
  }

  function updateClearBtn() {
    if (clearBtn) clearBtn.classList.toggle('visible', input.value.length > 0);
  }

  on(input, 'focus', () => buildSuggestions(input.value));
  on(input, 'input', () => { buildSuggestions(input.value); updateClearBtn(); });
  on(input, 'blur',  () => setTimeout(() => dropdown.classList.remove('open'), 180));
  on(input, 'keydown', e => {
    if (e.key === 'Escape') { dropdown.classList.remove('open'); input.blur(); }
    if (e.key === 'Enter' && input.value.trim()) {
      e.preventDefault();
      dropdown.classList.remove('open');
      // Filter videos and scroll to grid
      const q = input.value.trim().toLowerCase();
      const grid = $('#main-video-grid');
      if (grid) {
        const results = BV.videos.filter(v =>
          v.title.toLowerCase().includes(q) ||
          v.channel.toLowerCase().includes(q) ||
          (v.category || '').toLowerCase().includes(q)
        );
        renderGrid(grid, results, input.value.trim());
        grid.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  });

  on(clearBtn, 'click', () => {
    input.value = '';
    updateClearBtn();
    dropdown.classList.remove('open');
    input.focus();
    // Restore full grid
    const grid = $('#main-video-grid');
    if (grid) renderGrid(grid, BV.videos);
  });
}


/* =================================================
   LOGIN DIALOG
   ================================================= */

function initLoginDialog() {
  const overlay  = $('#login-dialog');
  if (!overlay) return;
  const closeBtn = $('#dlg-close');
  const titleEl  = $('#dlg-title');
  const textEl   = $('#dlg-text');

  function openDialog(type) {
    const d = BV.dialogs[type] || BV.dialogs.default;
    if (titleEl) titleEl.textContent = d.title;
    if (textEl)  textEl.textContent  = d.text;
    overlay.classList.add('open');
    document.body.style.overflow = 'hidden';
    setTimeout(() => closeBtn && closeBtn.focus(), 100);
  }
  function closeDialog() {
    overlay.classList.remove('open');
    document.body.style.overflow = '';
  }

  on(closeBtn, 'click', closeDialog);
  on(overlay,  'click', e => { if (e.target === overlay) closeDialog(); });
  on(document, 'keydown', e => { if (e.key === 'Escape') closeDialog(); });

  window.openLoginDialog = openDialog;

  document.addEventListener('click', e => {
    const el = e.target.closest('[data-auth]');
    if (el) { e.preventDefault(); openDialog(el.dataset.auth || 'default'); }
  });
}


/* =================================================
   FORM HELPERS
   ================================================= */

function showErr(input, msg) {
  input.classList.add('is-error');
  input.classList.remove('is-ok');
  const err = input.closest('.form-group')?.querySelector('.field-error');
  if (err) { err.textContent = msg; err.classList.add('show'); }
}
function clearErr(input) {
  input.classList.remove('is-error', 'is-ok');
  const err = input.closest('.form-group')?.querySelector('.field-error');
  if (err) err.classList.remove('show');
}
function markOk(input) {
  input.classList.remove('is-error');
  input.classList.add('is-ok');
  const err = input.closest('.form-group')?.querySelector('.field-error');
  if (err) err.classList.remove('show');
}
const validEmail = e => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e);
const validPw    = p => /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/.test(p);

function setLoading(btn, state) {
  btn.classList.toggle('loading', state);
  btn.disabled = state;
}
async function fakeApi(ms = 1400) { return new Promise(r => setTimeout(r, ms)); }


/* =================================================
   PASSWORD TOGGLES
   ================================================= */

function initPasswordToggles() {
  $$('[data-pw-toggle]').forEach(btn => {
    const input = document.getElementById(btn.dataset.pwToggle);
    if (!input) return;
    btn.innerHTML = svgEye(false);
    on(btn, 'click', () => {
      const isHidden = input.type === 'password';
      input.type = isHidden ? 'text' : 'password';
      btn.innerHTML = svgEye(!isHidden);
      btn.setAttribute('aria-label', isHidden ? 'Hide password' : 'Show password');
    });
  });
}


/* =================================================
   LOGIN FORM
   ================================================= */

function initLoginForm() {
  const form    = $('#loginForm');
  if (!form) return;
  const emailIn = $('#email', form);
  const passIn  = $('#password', form);
  const submit  = form.querySelector('[type="submit"]');

  on(emailIn, 'blur', () => {
    const v = emailIn.value.trim();
    if (!v)              showErr(emailIn, 'Email is required');
    else if (!validEmail(v)) showErr(emailIn, 'Enter a valid email address');
    else markOk(emailIn);
  });
  on(passIn, 'blur', () => { passIn.value ? clearErr(passIn) : showErr(passIn, 'Password is required'); });

  on(form, 'submit', async e => {
    e.preventDefault();
    let ok = true;
    const email = emailIn.value.trim();
    const pw    = passIn.value;
    if (!email || !validEmail(email)) { showErr(emailIn, 'Enter a valid email address'); ok = false; } else markOk(emailIn);
    if (!pw) { showErr(passIn, 'Password is required'); ok = false; }
    if (!ok) return;
    setLoading(submit, true);
    await fakeApi();
    setLoading(submit, false);
    window.location.href = 'index.html';
  });
}


/* =================================================
   SIGNUP FORM
   ================================================= */

function initSignupForm() {
  const form   = $('#signupForm');
  if (!form) return;
  const nameIn  = $('#fullname', form);
  const emailIn = $('#email', form);
  const passIn  = $('#password', form);
  const confIn  = $('#confirm-password', form);
  const typeIn  = $('#accountType', form);
  const submit  = form.querySelector('[type="submit"]');
  const strWrap = $('#pw-strength');
  const bars    = $$('.s-bar', strWrap || document);
  const strText = $('#strength-text');

  function strength(pw) {
    let s = 0;
    if (pw.length >= 8)        s++;
    if (/[A-Z]/.test(pw))      s++;
    if (/\d/.test(pw))         s++;
    if (/[@$!%*#?&]/.test(pw)) s++;
    return s;
  }
  on(passIn, 'input', () => {
    const pw = passIn.value;
    if (!strWrap) return;
    strWrap.classList.toggle('show', !!pw);
    const lvl = strength(pw);
    const map  = ['', 'weak', 'fair', 'good', 'strong'];
    const lbl  = ['', 'Weak', 'Fair', 'Good', 'Strong'];
    bars.forEach((b, i) => { b.className = 's-bar'; if (i < lvl) b.classList.add(map[lvl]); });
    if (strText) strText.textContent = lbl[lvl] || '';
  });

  on(nameIn,  'blur', () => { const v = nameIn.value.trim(); if (!v || v.length < 2) showErr(nameIn, 'Name must be at least 2 characters'); else markOk(nameIn); });
  on(emailIn, 'blur', () => { const v = emailIn.value.trim(); if (!v || !validEmail(v)) showErr(emailIn, 'Enter a valid email address'); else markOk(emailIn); });
  on(passIn,  'blur', () => { const pw = passIn.value; if (!pw) showErr(passIn, 'Password is required'); else if (!validPw(pw)) showErr(passIn, 'Min 8 chars with letter, number & special character'); else markOk(passIn); });
  on(confIn,  'blur', () => { if (!confIn) return; if (!confIn.value) showErr(confIn, 'Please confirm your password'); else if (confIn.value !== passIn.value) showErr(confIn, 'Passwords do not match'); else markOk(confIn); });

  on(form, 'submit', async e => {
    e.preventDefault();
    let ok = true;
    const n = nameIn.value.trim(), em = emailIn.value.trim(), pw = passIn.value;
    if (!n || n.length < 2)     { showErr(nameIn, 'Full name is required'); ok = false; }
    if (!em || !validEmail(em)) { showErr(emailIn, 'Enter a valid email'); ok = false; }
    if (!pw || !validPw(pw))    { showErr(passIn, 'Min 8 chars with letter, number & special character'); ok = false; }
    if (confIn && confIn.value !== pw) { showErr(confIn, 'Passwords do not match'); ok = false; }
    if (typeIn && !typeIn.value){ showErr(typeIn, 'Please select an account type'); ok = false; }
    if (!ok) return;
    setLoading(submit, true);
    await fakeApi();
    setLoading(submit, false);
    window.location.href = 'otp.html';
  });
}


/* =================================================
   FORGOT PASSWORD FORM
   ================================================= */

function initForgotForm() {
  const form    = $('#forgotForm');
  if (!form) return;
  const emailIn = $('#email', form);
  const submit  = form.querySelector('[type="submit"]');

  on(emailIn, 'blur', () => {
    const v = emailIn.value.trim();
    if (!v || !validEmail(v)) showErr(emailIn, 'Enter a valid email address'); else markOk(emailIn);
  });
  on(form, 'submit', async e => {
    e.preventDefault();
    const email = emailIn.value.trim();
    if (!email || !validEmail(email)) { showErr(emailIn, 'Enter a valid email address'); return; }
    markOk(emailIn);
    setLoading(submit, true);
    await fakeApi();
    setLoading(submit, false);
    window.location.href = 'otp.html';
  });
}


/* =================================================
   OTP PAGE
   ================================================= */

function initOTP() {
  const inputs = $$('.otp-digit');
  if (!inputs.length) return;

  setTimeout(() => inputs[0]?.focus(), 250);

  inputs.forEach((inp, idx) => {
    on(inp, 'keydown', e => {
      if (!/^\d$/.test(e.key) && !['Backspace','Delete','Tab','ArrowLeft','ArrowRight'].includes(e.key) && !(e.ctrlKey || e.metaKey)) e.preventDefault();
      if (e.key === 'Backspace') {
        if (!inp.value && idx > 0) { inputs[idx - 1].value = ''; inputs[idx - 1].classList.remove('filled', 'is-error'); inputs[idx - 1].focus(); }
      }
      if (e.key === 'ArrowLeft'  && idx > 0)              inputs[idx - 1].focus();
      if (e.key === 'ArrowRight' && idx < inputs.length - 1) inputs[idx + 1].focus();
    });
    on(inp, 'input', () => {
      inp.value = inp.value.replace(/\D/g, '').slice(-1);
      inp.classList.toggle('filled', !!inp.value);
      inp.classList.remove('is-error');
      if (inp.value && idx < inputs.length - 1) inputs[idx + 1].focus();
      else if (inp.value && idx === inputs.length - 1) checkComplete();
    });
    on(inp, 'paste', e => {
      e.preventDefault();
      const digits = (e.clipboardData || window.clipboardData).getData('text').replace(/\D/g, '').slice(0, inputs.length);
      digits.split('').forEach((d, i) => { if (inputs[i]) { inputs[i].value = d; inputs[i].classList.add('filled'); inputs[i].classList.remove('is-error'); } });
      const last = Math.min(digits.length, inputs.length - 1);
      inputs[last]?.focus();
      if (digits.length === inputs.length) checkComplete();
    });
    on(inp, 'focus', () => inp.select());
  });

  function checkComplete() {
    const code = inputs.map(i => i.value).join('');
    if (code.length === inputs.length) setTimeout(() => { const s = $('#otp-submit'); s && s.click(); }, 180);
  }

  const form   = $('#otpForm');
  const submit = $('#otp-submit');
  on(form, 'submit', async e => {
    e.preventDefault();
    const code = inputs.map(i => i.value).join('');
    if (code.length < inputs.length) { inputs.forEach(i => { if (!i.value) i.classList.add('is-error'); }); return; }
    setLoading(submit, true);
    await fakeApi();
    setLoading(submit, false);
    window.location.href = 'index.html';
  });

  const timerRow  = $('#otp-timer-row');
  const countdown = $('#countdown');
  const resendBtn = $('#resend-btn');

  function startTimer(seconds) {
    if (!countdown) return;
    function tick() {
      const m = Math.floor(seconds / 60), s = seconds % 60;
      countdown.textContent = `${m}:${s.toString().padStart(2, '0')}`;
      if (seconds <= 0) { if (timerRow) timerRow.style.display = 'none'; if (resendBtn) resendBtn.classList.add('show'); return; }
      seconds--;
      setTimeout(tick, 1000);
    }
    tick();
  }
  startTimer(120);

  on(resendBtn, 'click', () => {
    resendBtn.classList.remove('show');
    if (timerRow) timerRow.style.display = '';
    inputs.forEach(i => { i.value = ''; i.classList.remove('filled', 'is-error'); });
    inputs[0]?.focus();
    startTimer(120);
  });
}


/* =================================================
   WATCH PAGE
   ================================================= */

function initWatchPage() {
  const player = $('#player');
  if (!player) return;

  const vid = parseInt(getParam('v') || '1', 10);
  const v   = BV.videos.find(x => x.id === vid) || BV.videos[0];

  // Set page title
  document.title = `${v.title} – BharatVideo`;

  // Wire up real HTML5 video player
  const videoEl = $('#bv-video');
  if (videoEl && v.video) {
    videoEl.src = v.video;
    videoEl.setAttribute('aria-label', v.title);
  }
  // Update player region label
  const playerEl = $('#player');
  if (playerEl) playerEl.setAttribute('aria-label', `Playing: ${v.title}`);

  // Title
  const titleEl = $('#watch-title');
  if (titleEl) titleEl.textContent = v.title;

  // Stats (views + upload time + language)
  const statsEl = $('#watch-stats');
  if (statsEl) {
    const langBadge = v.language ? `<span class="lang-badge">${v.language}</span>` : '';
    statsEl.innerHTML = `${v.views} views &middot; ${v.time}${langBadge ? ' &nbsp;' + langBadge : ''}`;
  }

  // Action pills
  const pillsWrap = $('#watch-pills');
  if (pillsWrap) {
    const pills = [
      { id: 'like-btn',  icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 9V5a3 3 0 00-3-3l-4 9v11h11.28a2 2 0 002-1.7l1.38-9a2 2 0 00-2-2.3H14z"/><path d="M7 22H4a2 2 0 01-2-2v-7a2 2 0 012-2h3"/></svg>', label: `${v.likes || '24K'}`, auth: 'like' },
      { id: 'share-btn', icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><line x1="8.59" y1="13.51" x2="15.42" y2="17.49"/><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"/></svg>', label: 'Share', auth: null },
      { id: 'save-btn',  icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 21l-7-5-7 5V5a2 2 0 012-2h10a2 2 0 012 2z"/></svg>', label: 'Save', auth: 'watchlater' }
    ];
    pills.forEach(p => {
      const btn = document.createElement('button');
      btn.id = p.id;
      btn.className = 'w-pill';
      if (p.auth) btn.dataset.auth = p.auth;
      btn.innerHTML = `${p.icon}<span>${p.label}</span>`;
      if (p.id === 'like-btn') {
        on(btn, 'click', () => {
          if (btn.dataset.auth) return; // handled by dialog
          btn.classList.toggle('active');
          const span = btn.querySelector('span');
          if (span) span.textContent = btn.classList.contains('active') ? '✓ Liked' : `${v.likes || '24K'}`;
        });
      }
      if (p.id === 'share-btn') {
        on(btn, 'click', () => {
          navigator.clipboard?.writeText(window.location.href).catch(() => {});
          showToast('Link copied to clipboard!');
        });
      }
      pillsWrap.appendChild(btn);
    });
  }

  // Channel row
  const chRow = $('#watch-ch-row');
  if (chRow) {
    const chUrl = `channel.html?c=${encodeURIComponent(v.channel)}`;
    chRow.innerHTML = `
      <a href="${chUrl}" class="watch-ch-av" style="background:${v.avatarColor}" aria-label="${v.channel}">${v.initials}</a>
      <div class="watch-ch-meta">
        <a href="${chUrl}" class="watch-ch-name">${v.channel}${v.verified ? svgVerified() : ''}</a>
        <p class="watch-ch-subs">${v.subs || '2.4M'} subscribers</p>
      </div>
      <div class="watch-ch-actions">
        <button class="btn-sub" id="sub-btn" data-auth="subscribe">Subscribe</button>
      </div>`;

    const subBtn = $('#sub-btn');
    on(subBtn, 'click', () => {
      if (subBtn.dataset.auth) return;
      subBtn.classList.toggle('subbed');
      subBtn.textContent = subBtn.classList.contains('subbed') ? 'Subscribed ✓' : 'Subscribe';
    });
  }

  // Description
  const descBox  = $('#watch-desc-box');
  const descText = $('#watch-desc-text');
  const toggle   = $('#desc-toggle');
  if (descBox && descText) {
    const fullDesc = BV.descriptions[v.id] || `Watch "${v.title}" by ${v.channel} on BharatVideo.\n\nSubscribe for more amazing content!`;
    descText.textContent = fullDesc;
    on(descBox, 'click', () => {
      descBox.classList.toggle('open');
      if (toggle) toggle.textContent = descBox.classList.contains('open') ? 'Show less' : 'Show more';
    });
  }

  // Comments
  const cmntWrap = $('#comments-wrap');
  if (cmntWrap) {
    cmntWrap.innerHTML = `
      <p class="comments-count">${BV.comments.length * 12 + Math.floor(Math.random() * 100)} Comments</p>
      <div class="comment-add-row">
        <div class="me-av" aria-hidden="true">BV</div>
        <input type="text" class="comment-field" placeholder="Add a comment… (Sign in to post)" onclick="window.openLoginDialog && window.openLoginDialog('comment')" readonly>
      </div>
      <div id="cmnt-list"></div>`;

    const list = $('#cmnt-list');
    BV.comments.forEach(c => {
      const item = document.createElement('div');
      item.className = 'cmnt-item';
      item.innerHTML = `
        <div class="cmnt-av" style="background:${c.color}" aria-hidden="true">${c.initials}</div>
        <div class="cmnt-body">
          <div class="cmnt-header">
            <span class="cmnt-name">${c.author}</span>
            <span class="cmnt-time">${c.time}</span>
          </div>
          <p class="cmnt-text">${c.text}</p>
          <div class="cmnt-acts">
            <button class="cmnt-btn" data-auth="like" aria-label="Like comment">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 9V5a3 3 0 00-3-3l-4 9v11h11.28a2 2 0 002-1.7l1.38-9a2 2 0 00-2-2.3H14z"/><path d="M7 22H4a2 2 0 01-2-2v-7a2 2 0 012-2h3"/></svg>
              ${c.likes.toLocaleString('en-IN')}
            </button>
            <button class="cmnt-btn" data-auth="comment" aria-label="Reply">Reply</button>
          </div>
        </div>`;
      list.appendChild(item);
    });
  }

  // Suggested videos
  const sugList = $('#suggested-list');
  if (sugList) {
    const others = BV.videos.filter(x => x.id !== v.id);
    const shuffled = [...others].sort(() => Math.random() - 0.5);
    shuffled.forEach(s => sugList.appendChild(makeSugCard(s)));
  }
  // No fake play/pause simulation needed – native HTML5 controls handle playback
}


/* =================================================
   SHORTS PAGE
   ================================================= */

function initShortsPage() {
  const grid = $('#shorts-grid');
  if (!grid) return;

  BV.shorts.forEach(s => grid.appendChild(makeShortCard(s)));
}


/* =================================================
   CHANNEL PAGE
   ================================================= */

function initChannelPage() {
  const page = $('#channel-page');
  if (!page) return;

  const name     = decodeURIComponent(getParam('c') || '');
  const creator  = BV.creators.find(c => c.name === name) || BV.creators[0];
  const chVideos = BV.videos.filter(v => v.channel === creator.name);
  const allVids  = chVideos.length ? chVideos : BV.videos.slice(0, 8);

  // Title
  document.title = `${creator.name} – BharatVideo`;

  // Banner gradient
  const banner = $('#ch-banner');
  if (banner) banner.style.background = `linear-gradient(135deg, ${creator.color} 0%, ${creator.color}aa 50%, ${creator.color}55 100%)`;

  // Avatar
  const av = $('#ch-avatar');
  if (av) { av.style.background = creator.color; av.textContent = creator.initials; }

  // Name & stats
  const nameEl   = $('#ch-name');
  const handleEl = $('#ch-handle');
  const statsEl  = $('#ch-stats');
  if (nameEl)   nameEl.innerHTML   = `${creator.name} ${svgVerified()}`;
  if (handleEl) handleEl.textContent = creator.handle || `@${creator.name.toLowerCase().replace(/\s/g, '')}`;
  if (statsEl)  statsEl.innerHTML   = `<strong>${creator.subs}</strong> subscribers &nbsp;·&nbsp; <strong>${allVids.length * 12}</strong> videos`;

  // Subscribe button
  const subBtn = $('#ch-sub-btn');
  on(subBtn, 'click', () => {
    if (subBtn.dataset.auth) return;
    subBtn.classList.toggle('subbed');
    subBtn.textContent = subBtn.classList.contains('subbed') ? 'Subscribed ✓' : 'Subscribe';
  });

  // Tabs
  const tabs    = $$('.ch-tab');
  const content = $('#ch-content');

  function showTab(idx) {
    tabs.forEach((t, i) => {
      t.classList.toggle('active', i === idx);
      t.setAttribute('aria-selected', String(i === idx));
    });
    renderTabContent(idx);
  }

  function renderTabContent(idx) {
    if (!content) return;
    content.innerHTML = '';
    if (idx === 0) {
      // Videos
      const grid = document.createElement('div');
      grid.className = 'video-grid stagger';
      grid.setAttribute('aria-label', `${creator.name}'s videos`);
      allVids.forEach(v => grid.appendChild(makeVideoCard(v)));
      content.appendChild(grid);
    } else if (idx === 1) {
      // Shorts
      const head = document.createElement('div');
      head.className = 'shorts-page-head';
      head.innerHTML = `<div class="shorts-logo"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg></div><h2 class="shorts-page-title">Shorts</h2>`;
      const grid = document.createElement('div');
      grid.className = 'shorts-grid';
      BV.shorts.slice(0, 8).forEach(s => grid.appendChild(makeShortCard(s)));
      content.appendChild(head);
      content.appendChild(grid);
    } else if (idx === 2) {
      // Playlists placeholder
      const msg = document.createElement('p');
      msg.style.cssText = 'color:var(--tx-2);font-size:15px;margin-top:24px;';
      msg.textContent = 'No public playlists yet.';
      content.appendChild(msg);
    } else if (idx === 3) {
      // About
      const box = document.createElement('div');
      box.className = 'about-box';
      box.innerHTML = `
        <h3>Description</h3>
        <p>Welcome to ${creator.name}'s official BharatVideo channel! We create premium content for millions of viewers across India. Subscribe and hit the bell icon to never miss an update.</p>
        <h3>Stats</h3>
        <p><strong>${creator.subs}</strong> subscribers &nbsp;·&nbsp; Joined BharatVideo in 2020</p>
        <h3>Links</h3>
        <a href="#" class="about-link">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10 13a5 5 0 007.54.54l3-3a5 5 0 00-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 00-7.54-.54l-3 3a5 5 0 007.07 7.07l1.71-1.71"/></svg>
          bharatvideo.in/${creator.handle || creator.name.toLowerCase()}
        </a>`;
      content.appendChild(box);
    }
  }

  tabs.forEach((t, i) => on(t, 'click', () => showTab(i)));
  showTab(0);
}


/* =================================================
   BACK TO TOP
   ================================================= */

function initBackToTop() {
  const btn = $('#btt-btn');
  if (!btn) return;

  window.addEventListener('scroll', () => {
    btn.classList.toggle('visible', window.scrollY > 400);
  }, { passive: true });

  on(btn, 'click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
}


/* =================================================
   KEYBOARD SHORTCUTS
   ================================================= */

function initKeyboardShortcuts() {
  on(document, 'keydown', e => {
    // '/' → focus search (only when not typing in an input/textarea)
    if (e.key === '/' && !['INPUT','TEXTAREA','SELECT'].includes(document.activeElement.tagName)) {
      e.preventDefault();
      const searchInput = $('#main-search');
      if (searchInput) {
        searchInput.focus();
        searchInput.select();
      }
    }
  });
}


/* =================================================
   SCROLL POSITION SAVE / RESTORE
   ================================================= */

function initScrollRestore() {
  // Restore saved scroll on page load
  const key = 'bv_scroll_' + window.location.pathname;
  const saved = sessionStorage.getItem(key);
  if (saved) {
    // Slight delay lets the grid render before scroll
    setTimeout(() => window.scrollTo({ top: parseInt(saved, 10), behavior: 'instant' }), 80);
  }

  // Save scroll position before navigating away
  window.addEventListener('beforeunload', () => {
    sessionStorage.setItem(key, String(window.scrollY));
  });

  // Clear stale scroll when user explicitly navigates via links
  document.addEventListener('click', e => {
    const link = e.target.closest('a[href]');
    if (link && !link.href.includes(window.location.pathname)) {
      // User is leaving this page — let the target page restore its own scroll
      sessionStorage.removeItem(key);
    }
  });
}


/* =================================================
   HOMEPAGE INIT
   ================================================= */

function initHomepage() {
  renderFeatured($('#featured-grid'),      BV.featured);
  renderCreators($('#creators-strip'),     BV.creators);
  renderShortsPreview($('#shorts-preview'), BV.shorts.slice(0, 10));
  renderGrid($('#main-video-grid'),        BV.videos);
  renderGrid($('#more-grid'),              [...BV.videos].sort(() => Math.random() - 0.5).slice(0, 8));
  initChips();
}


/* =================================================
   BOOTSTRAP
   ================================================= */

document.addEventListener('DOMContentLoaded', () => {
  initSidebar();
  initNavbar();
  initMobileSearch();
  initLoginDialog();
  initPasswordToggles();
  initSearchSuggestions();
  initLoginForm();
  initSignupForm();
  initForgotForm();
  initOTP();
  initHomepage();
  initWatchPage();
  initShortsPage();
  initChannelPage();
  initBackToTop();
  initKeyboardShortcuts();
  initScrollRestore();
});
