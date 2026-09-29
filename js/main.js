/**
 * KAMALPUR ABHIJAAN SANGHA — JAVASCRIPT LOGIC
 * Apple-inspired Fluid Interactions, 3D Perspective Tilt,
 * Dynamic Spotlight, Pinned Storytelling Scroll Scrub & Full Bilingual i18n
 */

// ══════════════════════════════════════════════════════
// 1. BILINGUAL DICTIONARY (BENGALI & ENGLISH)
// ══════════════════════════════════════════════════════
const translations = {
  bn: {
    doc_title: "কামালপুর অভিযান সংঘ | শারদীয় দুর্গোৎসব ২০২৭ & ক্লাব কার্যক্রম",
    intro_tagline: "কামালপুর অভিযান সংঘ &nbsp;·&nbsp; Estd. 1952",
    intro_year: "শারদীয় দুর্গোৎসব ২০২৭ ও ৭৫ বছরের ঐতিহ্য ও সমাজসেবা",
    intro_skip: "সরাসরি প্রবেশ করুন ➔",
    announce_bar: "<strong>কামালপুর অভিযান সংঘ</strong> শারদীয় দুর্গোৎসব ২০২৭ — ৭৫তম বর্ষের মহোৎসব! &nbsp;·&nbsp; <a href=\"#events\">পূজা নির্ঘণ্ট ও সাংস্কৃতিক অনুষ্ঠান দেখুন →</a>",
    nav_est: "Estd. 1952 · উত্তর ব্যারাকপুর",
    nav_home: "Home",
    nav_about: "আমাদের কথা",
    nav_puja: "দুর্গোৎসব ২০২৭",
    nav_events: "কর্মসূচি",
    nav_president: "সভাপতির বার্তা",
    nav_heritage: "ঐতিহ্য",
    nav_sponsors: "পৃষ্ঠপোষক",
    nav_donate: "অনুদানের আবেদন",
    nav_login: "সদস্য লগইন",
    nav_join: "নতুন সদস্য আবেদন",
    hero_eyebrow: "উত্তর ব্যারাকপুরের গৌরবময় শারদীয় দুর্গোৎসব ২০২৭",
    hero_h1: "শুধু একটি ক্লাব নয় —<br><em>একটি পরিবার</em>",
    hero_sub: "ঐতিহ্যবাহী শারদীয় দুর্গোৎসব থেকে রক্তদান শিবির, বার্ষিক ফুটবল টুর্নামেন্ট থেকে সাংস্কৃতিক জলসা — কামালপুর অভিযান সংঘ উত্তর ব্যারাকপুরের প্রাণের মিলনমেলা।",
    hero_btn_puja: "দুর্গোৎসব ২০২৭ বিবরণী →",
    hero_btn_about: "আমাদের ইতিহাস",
    hstat_lbl_1: "বছরের ঐতিহ্য",
    hstat_lbl_2: "প্রতিষ্ঠা বর্ষ",
    hstat_lbl_3: "সদস্য পরিবার",
    hstat_lbl_4: "সেরা পূজার সম্মাননা",
    scroll_hint: "Scroll",
    apple_scrub_kicker: "শারদীয় দুর্গোৎসব ২০২৭ · ৭৫তম বর্ষ মহোৎসব",
    apple_p1: "সাত দশকের গৌরবময় ঐতিহ্য।",
    apple_p2: "হৃদয়ের অটুট ভ্রাতৃত্ববোধ।",
    apple_p3: "শারদীয় দুর্গোৎসব ২০২৭ — এক নতুন রূপ।",
    apple_card1_title: "নান্দনিক থিম ও আলোকসজ্জা",
    apple_card1_desc: "বাংলার শ্রেষ্ঠ শিল্পীদের দ্বারা রচিত অপরূপ মণ্ডপ ও চন্দননগরের ঐতিহ্যবাহী আলোকসজ্জা।",
    apple_card2_title: "মহাপ্রসাদ ও সার্বজনীন অঞ্জলি",
    apple_card2_desc: "পাঁচ দিনব্যাপী সহস্রাধিক ভক্তের মাঝে মহাভোগ বিতরণ ও সুশৃঙ্খল পুণ্য অঞ্জলি।",
    apple_card3_title: "প্রখ্যাত শিল্পীদের সান্ধ্য জলসা",
    apple_card3_desc: "লগ্নজিতা, ইমন চক্রবর্তী, লোপামুদ্রা মিত্র ও দোহারের মনমাতানো সঙ্গীতানুষ্ঠান।",
    ds_kicker: "আসন্ন মহোৎসব · শারদীয় দুর্গোৎসব ২০২৭",
    ds_title: "Durga Puja 2027 <em>কামালপুর অভিযান সংঘ</em>",
    ds_copy: "মহাষষ্ঠী থেকে শুভ বিজয়া দশমী — পাঁচ দিনব্যাপী সাড়ম্বর দেবীবন্দনা, নান্দনিক থিম মণ্ডপ, অপরূপ আলোকসজ্জা, ভোগ বিতরণ এবং বাংলার প্রখ্যাত শিল্পীদের নিয়ে জমকালো সাংস্কৃতিক জলসা।",
    ds_date: "৬–১০ অক্টোবর ২০২৭",
    ds_venue: "অভিযান সংঘ প্রাঙ্গণ · উত্তর ব্যারাকপুর",
    ds_tag: "৭৫তম বর্ষ শারদ মহোৎসব",
    ds_burst: "পূজা স্মরণিকা বিজ্ঞাপন ও শুভকামনা বার্তা বুকিং চলছে →",
    ds_softtag: "মণ্ডপ শিল্প · দেবী বন্দনা · মহাপ্রসাদ · সাংস্কৃতিক সন্ধ্যা",
    ds_btn_1: "পূজা নির্ঘণ্ট দেখুন",
    ds_btn_2: "ভোগ কুপন ও অনুদান",
    ds_btn_3: "বিজ্ঞাপন ও স্টল বুকিং",
    ds_btn_4: "আমন্ত্রিত শিল্পী তালিকা",
    art1_name: "লগ্নজিতা চক্রবর্তী",
    art1_day: "মহাসপ্তমী সঙ্গীত সন্ধ্যা",
    art2_name: "ইমন চক্রবর্তী ও দল",
    art2_day: "মহাঅষ্টমী বিশেষ জলসা",
    art3_name: "লোপামুদ্রা মিত্র",
    art3_day: "মহানবমী রাগপ্রধান ও আধুনিক",
    art4_name: "দোহার (লোকগান)",
    art4_day: "বিজয়া দশমী লোকসঙ্গীত",
    art5_name: "অভিযান নাট্য গোষ্ঠী",
    art5_day: "মহাষষ্ঠী উদ্বোধনী নাটক",
    mq_1: "শারদীয় দুর্গোৎসব ২০২৭",
    mq_2: "বিজয়া সম্মিলনী",
    mq_3: "বার্ষিক রক্তদান শিবির",
    mq_4: "নকআউট ফুটবল প্রতিযোগিতা",
    mq_5: "রবীন্দ্র-নজরুল সন্ধ্যা",
    mq_6: "বিনামূল্যে স্বাস্থ্য ও চক্ষু পরীক্ষা",
    mq_7: "শ্রী শ্রী সরস্বতী পূজা",
    mq_8: "দুঃস্থদের শীতবস্ত্র বিতরণ",
    mq_9: "ক্রিকেট টুর্নামেন্ট",
    mq_10: "শিশু অঙ্কন ও আবৃত্তি প্রতিযোগিতা",
    mq_11: "নেতাজী সুভাষ পাঠাগার",
    mq_12: "বর্ষবরণ উৎসব",
    about_eyebrow: "আমাদের কথা · Who We Are",
    about_h2: "শুধু একটি ক্লাব নয় —<br>একটি <em>পরিবার</em> ১৯৫২ থেকে",
    about_body: "কামালপুর অভিযান সংঘ ১৯৫২ সালে স্থানীয় একদল উদ্যমী তরুণ ও সমাজসেবীদের হাত ধরে প্রতিষ্ঠিত হয় (রেজিস্ট্রেশন নং: S/54028)। আজ সাত দশকেরও বেশি সময় ধরে আমরা শুধু একটি পূজো কমিটি নই, উত্তর ব্যারাকপুর ও পার্শ্ববর্তী অঞ্চলের প্রতিটি মানুষের সুখ-দুঃখের বিশ্বস্ত সহমর্মী।<br><br>বাংলার আবহমান দুর্গাপূজার ঐতিহ্য রক্ষা, নিঃস্বার্থ সমাজসেবা, ক্রীড়া বিকাশ এবং সাংস্কৃতিক চেতনায় আমরা একতাবদ্ধ। জাত-ধর্ম-বর্ণ নির্বিশেষে প্রতিটি মানুষ এখানে এক সূত্রে বাঁধা।",
    pillar1_title: "সংস্কৃতি ও ঐতিহ্য",
    pillar1_desc: "সঙ্গীত, নাটক, নৃত্য, সাহিত্য আলোচনা ও শারদ স্মরণিকা প্রকাশনার মধ্য দিয়ে ঐতিহ্য সংরক্ষণ",
    pillar2_title: "নিঃস্বার্থ সমাজসেবা",
    pillar2_desc: "বার্ষিক মেগা রক্তদান শিবির, বিনামূল্যে চিকিৎসা সহায়তা, দুঃস্থদের বস্ত্র বিতরণ ও আপদকালীন সাহায্য",
    pillar3_title: "ক্রীড়া ও শরীরচর্চা",
    pillar3_desc: "বার্ষিক ফুটবল প্রতিযোগিতা, আন্তঃক্লাব ক্রিকেট টুর্নামেন্ট, ক্যারাম ও তরুণদের ক্রীড়া প্রশিক্ষণ",
    pillar4_title: "যুব বিকাশ ও পাঠাগার",
    pillar4_desc: "নেতাজী সুভাষ পাঠাগার, শিক্ষাবৃত্তি, বসে আঁকো প্রতিযোগিতা ও যুব সমাজের নেতৃত্ব গঠন",
    badge_lbl: "বছরের ঐতিহ্য",
    events_eyebrow: "আমাদের বর্ষপঞ্জী · Our Calendar",
    events_h2: "Two sides of <em>Abhijaan</em>",
    events_sub: "শারদ উৎসব ও বিনোদনের পাশাপাশি বছরভর সমাজকল্যাণ ও খেলাধুলার বিস্তারিত কর্মসূচি।",
    tab_c: "🎭 &nbsp;সাংস্কৃতিক ও শারদ উৎসব",
    tab_s: "🤝 &nbsp;সমাজসেবা ও খেলাধুলা",
    ev_c1_label: "মহালয়া উৎসব · ২০২৭",
    ev_c1_cat: "দেবী আবাহন",
    ev_c1_name: "মহালয়া প্রভাতী বন্দনা ও চক্ষুদান",
    ev_c1_desc: "ভোরের আলোয় বীরেন্দ্রকৃষ্ণ ভদ্রের চণ্ডীপাঠ ও ক্লাব প্রাঙ্গণে শঙ্খধ্বনি সহযোগে দেবী প্রতিমার চক্ষুদান ও পূজার শুভারম্ভ।",
    ev_c2_label: "প্রধান শারদ মহোৎসব",
    ev_c2_cat: "শারদীয় দুর্গোৎসব",
    ev_c2_name: "শারদীয় দুর্গোৎসব ২০২৭ (৭৫তম বর্ষ)",
    ev_c2_desc: "মহাষষ্ঠী থেকে মহানবমী — কুমারী পূজা, আরতি প্রতিযোগিতা, অষ্টমী ভোগ প্রসাদ বিতরণ এবং প্রখ্যাত শিল্পীদের সান্ধ্য জলসা।",
    ev_c3_label: "দশমী উৎসব",
    ev_c3_cat: "বিজয়া ও বিসর্জন",
    ev_c3_name: "বিজয়া দশমী ও সিঁদুর খেলা",
    ev_c3_desc: "দেবী বরণ, ঐতিহ্যবাহী সিঁদুর খেলা, গঙ্গার ঘাটে সুশৃঙ্খল প্রতিমা বিসর্জন এবং সন্ধ্যায় ক্লাব প্রাঙ্গণে বিজয়ার মিষ্টিমুখ ও শুভেচ্ছা বিনিময়।",
    ev_c4_label: "ঐতিহ্যবাহী পূজা",
    ev_c4_cat: "কোজাগরী আরাধনা",
    ev_c4_name: "শ্রী শ্রী কোজাগরী লক্ষ্মী পূজা",
    ev_c4_desc: "কামালপুর অভিযান সংঘ প্রাঙ্গণে ধনধান্যের দেবী মা লক্ষ্মীর সার্বজনীন আরাধনা, পঞ্চপ্রদীপ আরতি ও খিচুড়ি ভোগ বিতরণ।",
    ev_c5_label: "আলোর উৎসব",
    ev_c5_cat: "দীপাবলি",
    ev_c5_name: "শ্রী শ্রী শ্যামা পূজা ও দীপাবলি",
    ev_c5_desc: "দীপাবলিতে সহস্র মাটির প্রদীপে মণ্ডপ প্রাঙ্গণ সজ্জা, নিশাপূজা এবং আতশবাজির বর্ণাঢ্য উৎসব।",
    ev_s1_label: "জীবনদায়ী উদ্যোগ",
    ev_s1_cat: "সমাজকল্যাণ",
    ev_s1_name: "বার্ষিক মেগা রক্তদান শিবির",
    ev_s1_desc: "সরকারি ব্লাড ব্যাংকের সহযোগিতায় প্রতি বছর দুই শতাধিক সাধারণ মানুষের অংশগ্রহণে স্বেচ্ছায় রক্তদান শিবির পরিচালনা।",
    ev_s2_label: "স্বাস্থ্য সেবা",
    ev_s2_cat: "চিকিৎসা পরিষেবা",
    ev_s2_name: "বিনামূল্যে স্বাস্থ্য ও চক্ষু পরীক্ষা শিবির",
    ev_s2_desc: "অভিজ্ঞ বিশেষজ্ঞ চিকিৎসকদের উপস্থিতিতে এলাকার প্রবীণ ও দুঃস্থ মানুষদের বিনামূল্যে ইসিজি, রক্ত পরীক্ষা ও চশমা বিতরণ।",
    ev_s3_label: "শিক্ষা ও সাহিত্য",
    ev_s3_cat: "জ্ঞান চর্চা",
    ev_s3_name: "নেতাজী সুভাষ পাঠাগার ও পাঠচক্র",
    ev_s3_desc: "আড়াই হাজারেরও বেশি গ্রন্থের সমৃদ্ধ ভাণ্ডার, দৈনিক সংবাদপত্র ও নিয়মিত মাসিক সাহিত্য পাঠচক্রের আসর।",
    ev_s4_label: "ক্রীড়া প্রতিযোগিতা",
    ev_s4_cat: "ফুটবল টুর্নামেন্ট",
    ev_s4_name: "অভিযান নকআউট ফুটবল শিল্ড",
    ev_s4_desc: "উত্তর ২৪ পরগনার শীর্ষ ১৬টি ক্লাব দলের অংশগ্রহণে ঐতিহ্যবাহী নকআউট ফুটবল টুর্নামেন্ট ও ট্রফি বিতরণ।",
    ev_s5_label: "মানবসেবা",
    ev_s5_cat: "সমাজসেবা",
    ev_s5_name: "দুঃস্থদের শীতবস্ত্র ও কম্বল বিতরণ",
    ev_s5_desc: "প্রতি বছর পৌষ মাসে ব্যারাকপুর অঞ্চলের দুঃস্থ, অসহায় ও প্রবীণ মানুষদের মাঝে শীতবস্ত্র ও কম্বল প্রদান কর্মসূচি।",
    tab_footer_c: "সকল উৎসব ও অনুষ্ঠানের তালিকা দেখুন →",
    tab_footer_s: "সকল সমাজসেবামূলক কাজের বিবরণ →",
    pres_eyebrow: "সভাপতির বার্তা · President's Desk",
    pres_h2: "আমাদের <em>সভাপতির</em><br>আন্তরিক বার্তা",
    pres_quote: "&quot;ঐতিহ্য, সম্প্রীতি ও নিঃস্বার্থ সমাজসেবা — এই তিনে মিলেই আমাদের কামালপুর অভিযান সংঘ। নতুন প্রজন্মকে সঙ্গে নিয়ে আমাদের ঐতিহ্যবাহী দুর্গাপূজাকে সার্বজনীন মহামিলন ক্ষেত্রে পরিণত করাই আমাদের ব্রত।&quot;",
    pres_body: "কামালপুর অভিযান সংঘের সকল সদস্য, শুভানুধ্যায়ী, পূজা কমিটির কর্মীবৃন্দ এবং সমগ্র উত্তর ব্যারাকপুরবাসীকে আমার সশ্রদ্ধ শারদ শুভেচ্ছা। ১৯৫২ সালে প্রতিষ্ঠিত এই সংঘ আজ ৭৫ বছরের মহিমায় উদ্ভাসিত। ক্লাবের প্রবীণ পথপ্রদর্শক, বর্তমান কার্যকরী কমিটি এবং আমাদের পৃষ্ঠপোষকদের নিরলস পরিশ্রমে আমাদের দুর্গোৎসব ২০২৭ এক অনন্য রূপ পেতে চলেছে। আসুন, সকলে মিলে এই শারদোৎসবকে আনন্দময় ও সর্বাঙ্গীণ সুন্দর করে তুলি।",
    pres_link: "পূর্ণাঙ্গ কার্যকরী কমিটি ও পূজা কর্মকর্তাদের পরিচিতি →",
    pres_name: "সুব্রত ভট্টাচার্য (Subrata Bhattacharya)",
    pres_role: "সভাপতি · কামালপুর অভিযান সংঘ (President · 2025–2027)",
    heritage_eyebrow: "আমাদের গৌরবগাথা · Heritage Timeline",
    heritage_h2: "সাত দশকের<br>গৌরবময় <em>ইতিহাস</em>",
    heritage_body: "১৯৫২ সালের একটি ছোট দুর্গোৎসব থেকে আজ উত্তর ব্যারাকপুরের অন্যতম শীর্ষ সামাজিক ও সাংস্কৃতিক প্রতিষ্ঠান হিসেবে আত্মপ্রকাশের গৌরবগাথা।",
    tl1_year: "১৯৫২ — শুভ প্রতিষ্ঠা",
    tl1_text: "কামালপুরের একদল সংস্কৃতিপ্রেমী যুবকের উদ্যোগে প্রথম দুর্গোৎসব ও ক্লাবের ভিত্তিপ্রস্তর স্থাপন।",
    tl2_year: "১৯৬৮ — পাঠাগার ও নাট্যমঞ্চ",
    tl2_text: "নেতাজী সুভাষ পাঠাগার প্রতিষ্ঠা ও নিয়মিত বার্ষিক যাত্রানুষ্ঠান ও নাটক মঞ্চস্থের ঐতিহ্য শুরু।",
    tl3_year: "১৯৯৫ — সমাজসেবার বিস্তার",
    tl3_text: "নিয়মিত রক্তদান শিবির, দুঃস্থ চিকিৎসা তহবিল ও বার্ষিক ফুটবল প্রতিযোগিতার আনুষ্ঠানিক সূচনা।",
    tl4_year: "২০২৭ — প্ল্যাটিনাম জুবিলি ও দুর্গোৎসব",
    tl4_text: "৭৫ বছরের গৌরবময় যাত্রায় আধুনিক থিম মণ্ডপ, সামাজিক সেবা ও মেগা শারদীয় দুর্গোৎসব ২০২৭ উদযাপিত।",
    hnum_eyebrow: "পরিসংখ্যানে সাফল্য · By The Numbers",
    hnum_h2: "সংখ্যায় আমাদের<br>ঐতিহ্যের <em>স্মারক</em>",
    hnum_link: "আমাদের পূর্ণাঙ্গ ইতিহাস ও দলিল দর্শন →",
    sponsors_kicker: "শারদীয় দুর্গোৎসব ২০২৭",
    sponsors_title: "আমাদের বিজ্ঞাপনী <em>পৃষ্ঠপোষক ও পার্টনার</em>",
    sponsors_sub: "যাঁদের ঐকান্তিক সহযোগিতায় কামালপুর অভিযান সংঘের শারদীয় দুর্গোৎসব ও সমাজসেবামূলক কর্মযজ্ঞ সাফল্যমণ্ডিত হয়।",
    donate_eyebrow: "দান ও শুভকামনা · Support Abhijaan",
    donate_h2: "আপনার সহযোগিতায়<br>সচল থাকুক <em>সমাজকল্যাণ</em><br>&amp; দুর্গোৎসব ২০২৭",
    donate_body: "দীর্ঘ ৭৫ বছর ধরে কামালপুর অভিযান সংঘের প্রতিটি উদ্যোগ গড়ে উঠেছে সহৃদয় সদস্য, স্থানীয় অধিবাসী ও প্রবাসী বাঙালিদের ভালোবাসায়। আপনার সামান্য অনুদান দুর্গাপূজার মণ্ডপসজ্জা, ভোগ বিতরণ, রক্তদান শিবির ও দুঃস্থদের চিকিৎসার তহবিলে সরাসরি ব্যবহৃত হয়।",
    impact_1: "শারদীয় দুর্গোৎসব ও শিল্পীদের সাংস্কৃতিক অনুষ্ঠান আয়োজন",
    impact_2: "বার্ষিক রক্তদান শিবির ও জরুরি অ্যাম্বুলেন্স সেবা পরিচালনা",
    impact_3: "দুঃস্থ ছাত্রছাত্রীদের বিনামূল্যে বই, খাতা ও শিক্ষাবৃত্তি প্রদান",
    impact_4: "ফুটবল ও ক্রিকেট একাডেমি এবং পাঠাগার রক্ষণাবেক্ষণ",
    donate_card_title: "অনুদানের পরিমাণ বেছে নিন",
    donate_card_sub: "কামালপুর অভিযান সংঘের উন্নয়নে আপনার সুবিধাজনক অর্থরাশি নির্বাচন করুন",
    custom_placeholder: "অন্যান্য পরিমাণ (টাকা)",
    freq_once: "এককালীন অনুদান",
    freq_monthly: "মাসিক সহযোগী",
    donate_btn: "অনুদানের রসিদ সংগ্রহ করুন →",
    donate_note: "কামালপুর অভিযান সংঘ পশ্চিমবঙ্গ সমিতি নিবন্ধন আইনের অধীনে একটি নথিভুক্ত অলাভজনক প্রতিষ্ঠান (Reg: S/54028)। সমস্ত অনুদানের জন্য পাকা রসিদ প্রদান করা হয়।",
    join_eyebrow: "সদস্যপদ গ্রহণ · Join The Family",
    join_h2: "অভিযান পরিবারের<br><em>অংশীদার</em> হোন",
    join_copy: "১৯৫২ সাল থেকে কামালপুর অভিযান সংঘ একটি পরিবার হিসেবে প্রতিটি বাঙালি হৃদয়ে জায়গা করে নিয়েছে। আপনি স্থানীয় বাসিন্দা হোন বা কর্মসূত্রে ভিনরাজ্যে কিংবা বিদেশে বসবাসকারী প্রবাসী — আমাদের ক্লাবের সদস্যপদ আপনাকে দুর্গাপূজা ও সমস্ত সামাজিক উদ্যোগে সরাসরি যুক্ত রাখবে।",
    b_title_1: "শারদীয় দুর্গোৎসবে বিশেষ সুবিধা",
    b_desc_1: "ভোগ কুপন, বিশেষ অঞ্জলি স্লট ও পারিবারিক সান্ধ্য সাংস্কৃতিক আসন সংরক্ষণ",
    b_title_2: "৫০০+ সদস্য পরিবারের আত্মিক যোগাযোগ",
    b_desc_2: "সুখে-দুঃখে একে অপরের পাশে দাঁড়ানো এবং ভ্রাতৃত্ববোধের অটুট বন্ধন",
    b_title_3: "পাঠাগার ও ক্রীড়া প্রশিক্ষণ সুবিধা",
    b_desc_3: "নেতাজী সুভাষ পাঠাগার ব্যবহার এবং ক্লাব মাঠ ও ফুটবল প্রশিক্ষণ সুবিধা",
    form_title: "সদস্যপদের আবেদনপত্র",
    form_sub: "আপনার বিশদ বিবরণ পূরণ করুন — আমাদের কার্যকরী কমিটি ৪৮ ঘণ্টার মধ্যে যোগাযোগ করবে।",
    lbl_fname: "নামের প্রথমাংশ *",
    lbl_lname: "পদবি *",
    lbl_email: "ইমেইল ঠিকানা *",
    lbl_phone: "মোবাইল নম্বর (হোয়াটসঅ্যাপ) *",
    lbl_address: "এলাকা / রাস্তা / পাড়া *",
    lbl_state: "রাজ্য / জেলা *",
    lbl_tier: "সদস্যপদ বিভাগ",
    lbl_message: "কোনো বিশেষ বার্তা বা জিজ্ঞাসা?",
    form_submit: "আবেদনপত্র জমা দিন →",
    form_note: "আপনার আবেদন সরাসরি কামালপুর অভিযান সংঘের সদস্যপদ উপকমিটির কাছে পাঠানো হবে।",
    success_title: "আবেদনপত্র গৃহীত হয়েছে!",
    success_desc: "কামালপুর অভিযান সংঘ পরিবারে যুক্ত হওয়ার আগ্রহ প্রকাশের জন্য ধন্যবাদ。<br>আমাদের কার্যকরী কমিটি খুব শীঘ্রই আপনার সঙ্গে যোগাযোগ করবে।",
    footer_tagline: "উত্তর ব্যারাকপুরের ঐতিহ্যবাহী সামাজিক, সাংস্কৃতিক ও ক্রীড়া সংস্থা। শারদীয় দুর্গোৎসব ২০২৭।",
    footer_addr: "কামালপুর রোড (আনন্দময়ী কালীবাড়ি মোড়), উত্তর ব্যারাকপুর, উত্তর ২৪ পরগনা, পশ্চিমবঙ্গ - ৭০০১২০",
    footer_pres: "সুব্রত ভট্টাচার্য (সভাপতি): +৯১ ৯৮৩০০ ২৪৮৯১",
    footer_sec: "সৌমেন মুখোপাধ্যায় (সম্পাদক): +৯১ ৯৮৩১২ ৭৭৪১০",
    footer_copy: "© ২০২৭ কামালপুর অভিযান সংঘ (Kamalpur Abhijaan Sangha)। সর্বস্বত্ব সংরক্ষিত।"
  },
  en: {
    doc_title: "Kamalpur Abhijaan Sangha | Durga Puja 2027 & Club Activities",
    intro_tagline: "Kamalpur Abhijaan Sangha &nbsp;·&nbsp; Estd. 1952",
    intro_year: "Durga Puja 2027 · 75 Years of Heritage & Social Devotion",
    intro_skip: "Enter Directly ➔",
    announce_bar: "<strong>Kamalpur Abhijaan Sangha</strong> Durga Puja 2027 — 75th Year Platinum Celebration! &nbsp;·&nbsp; <a href=\"#events\">View Puja Schedule & Cultural Galas →</a>",
    nav_est: "Estd. 1952 · North Barrackpore",
    nav_home: "Home",
    nav_about: "About Us",
    nav_puja: "Durga Puja 2027",
    nav_events: "Calendar & Events",
    nav_president: "President's Desk",
    nav_heritage: "Heritage",
    nav_sponsors: "Sponsors",
    nav_donate: "Support & Donate",
    nav_login: "Member Login",
    nav_join: "Join as Member",
    hero_eyebrow: "North Barrackpore's Glorious Durga Puja 2027",
    hero_h1: "More than a Club —<br><em>A United Family</em>",
    hero_sub: "From our historic Durga Puja celebrations to voluntary blood donation camps, annual football tournaments to musical evenings — Kamalpur Abhijaan Sangha is the living heartbeat of North Barrackpore.",
    hero_btn_puja: "Explore Durga Puja 2027 →",
    hero_btn_about: "Our 75-Year Heritage",
    hstat_lbl_1: "Years of Heritage",
    hstat_lbl_2: "Foundation Year",
    hstat_lbl_3: "Member Families",
    hstat_lbl_4: "Premier Puja Awards",
    scroll_hint: "Scroll Down",
    apple_scrub_kicker: "DURGA PUJA 2027 · 75TH PLATINUM YEAR",
    apple_p1: "Seven Decades of Glorious Heritage.",
    apple_p2: "An Unbreakable Community Bond.",
    apple_p3: "Durga Puja 2027 — Reimagined.",
    apple_card1_title: "Architectural Theme & Illumination",
    apple_card1_desc: "Spectacular eco-conscious pandal crafted by master artisans with Chandannagar's famed lightcraft.",
    apple_card2_title: "Sacred Prasad & Grand Bhog",
    apple_card2_desc: "Five days of divine community Bhog distribution for thousands with serene Anjali rituals.",
    apple_card3_title: "Star-Studded Cultural Evenings",
    apple_card3_desc: "Unforgettable musical evenings with Lagnajita, Iman Chakraborty, Lopamudra Mitra, and Dohar.",
    ds_kicker: "Upcoming Grand Festival · Durga Puja 2027",
    ds_title: "Durga Puja 2027 <em>Kamalpur Abhijaan Sangha</em>",
    ds_copy: "From Maha Sasthi to Subho Bijoya Dashami — five days of grand deity worship, artistic theme pandal, breathtaking illumination, community bhog distribution, and stellar cultural evenings featuring Bengal's renowned artists.",
    ds_date: "October 6–10, 2027",
    ds_venue: "Abhijaan Sangha Grounds · North Barrackpore",
    ds_tag: "75th Year Platinum Celebration",
    ds_burst: "Souvenir Advertisements & Greetings Booking Open →",
    ds_softtag: "Pandal Art · Divine Worship · Maha Prasad · Cultural Nights",
    ds_btn_1: "View Puja Schedule",
    ds_btn_2: "Bhog Coupons & Donate",
    ds_btn_3: "Ad & Stall Booking",
    ds_btn_4: "Featured Artists List",
    art1_name: "Lagnajita Chakraborty",
    art1_day: "Maha Saptami Musical Evening",
    art2_name: "Iman Chakraborty & Ensemble",
    art2_day: "Maha Ashtami Special Gala",
    art3_name: "Lopamudra Mitra",
    art3_day: "Maha Navami Classical & Modern",
    art4_name: "Dohar (Folk Music)",
    art4_day: "Bijoya Dashami Folk Music",
    art5_name: "Abhijaan Theatre Group",
    art5_day: "Maha Sasthi Inaugural Play",
    mq_1: "Durga Puja 2027",
    mq_2: "Bijoya Sammilani",
    mq_3: "Annual Mega Blood Donation",
    mq_4: "Knockout Football Shield",
    mq_5: "Rabindra-Nazrul Gala",
    mq_6: "Free Health & Eye Checkup Camp",
    mq_7: "Sri Sri Saraswati Puja",
    mq_8: "Winter Blanket Distribution",
    mq_9: "Inter-Club Cricket Tournament",
    mq_10: "Children's Art & Recitation Contest",
    mq_11: "Netaji Subhash Public Library",
    mq_12: "Bengali New Year Celebration",
    about_eyebrow: "Who We Are · About Our Legacy",
    about_h2: "Not Just a Club —<br>A <em>Family</em> Since 1952",
    about_body: "Kamalpur Abhijaan Sangha was established in 1952 by a group of dedicated local youth and philanthropists (Registration No: S/54028). For more than seven decades, we have been more than a puja committee; we are the steadfast companion to every family in North Barrackpore.<br><br>Uniting timeless Durga Puja traditions with humanitarian service, athletics, and cultural consciousness, people from all walks of life find belonging under one banner.",
    pillar1_title: "Culture & Heritage",
    pillar1_desc: "Preserving heritage through music, theatre, classical dance, literary symposiums, and our annual Sharad souvenir.",
    pillar2_title: "Selfless Social Service",
    pillar2_desc: "Annual mega blood donation camps, free medical clinics, winter blanket drives, and emergency relief.",
    pillar3_title: "Sports & Athletics",
    pillar3_desc: "Annual football tournament, inter-club cricket, carrom championships, and youth coaching programs.",
    pillar4_title: "Youth & Netaji Library",
    pillar4_desc: "Netaji Subhash Public Library, academic scholarships, art competitions, and leadership mentorship.",
    badge_lbl: "Years of Heritage",
    events_eyebrow: "Our Calendar · Year-Round Events",
    events_h2: "Two sides of <em>Abhijaan</em>",
    events_sub: "A harmonious balance of festive exuberance and year-round humanitarian action.",
    tab_c: "🎭 &nbsp;Cultural & Festive Celebrations",
    tab_s: "🤝 &nbsp;Community Service & Athletics",
    ev_c1_label: "Mahalaya Festival · 2027",
    ev_c1_cat: "Divine Invocation",
    ev_c1_name: "Mahalaya Morning Chandi Path & Invocation",
    ev_c1_desc: "At dawn, Birendra Krishna Bhadra's immortal Chandi Path, conch resonance, eye-painting of the idol, and the sacred start of Durga Puja.",
    ev_c2_label: "Main Sharad Celebration",
    ev_c2_cat: "Sharodotsav",
    ev_c2_name: "Durga Puja 2027 (75th Platinum Year)",
    ev_c2_desc: "Maha Sasthi to Maha Navami — Kumari Puja, Dhunuchi Arati contests, community Ashtami Bhog, and stellar musical concerts.",
    ev_c3_label: "Dashami Celebration",
    ev_c3_cat: "Bijoya & Immersion",
    ev_c3_name: "Bijoya Dashami & Sindoor Khela",
    ev_c3_desc: "Devi Baran, vermilion play, disciplined immersion procession on the Ganges, and festive sweet exchange at our club premises.",
    ev_c4_label: "Traditional Puja",
    ev_c4_cat: "Kojagari Worship",
    ev_c4_name: "Sri Sri Kojagari Lakshmi Puja",
    ev_c4_desc: "Universal worship of Goddess Lakshmi on the full moon night, divine Panchapradip Arati, and Khichuri Bhog distribution.",
    ev_c5_label: "Festival of Lights",
    ev_c5_cat: "Deepavali",
    ev_c5_name: "Sri Sri Shyama Puja & Diwali",
    ev_c5_desc: "Illuminating the entire grounds with thousands of earthen lamps, sacred midnight rituals, and colorful fireworks.",
    ev_s1_label: "Life-Saving Mission",
    ev_s1_cat: "Healthcare Welfare",
    ev_s1_name: "Annual Mega Blood Donation Camp",
    ev_s1_desc: "Organized in association with government blood banks, gathering over 200 voluntary donors every single year.",
    ev_s2_label: "Health Camps",
    ev_s2_cat: "Medical Outreach",
    ev_s2_name: "Free Health & Eye Checkup Clinic",
    ev_s2_desc: "Leading specialists provide free ECGs, blood tests, and corrective spectacles for elderly and needy residents.",
    ev_s3_label: "Education & Literature",
    ev_s3_cat: "Knowledge Sharing",
    ev_s3_name: "Netaji Subhash Library & Reading Circle",
    ev_s3_desc: "A rich repository of over 2,500 volumes, leading daily periodicals, and monthly literary discussion circles.",
    ev_s4_label: "Sports Championship",
    ev_s4_cat: "Football Tournament",
    ev_s4_name: "Abhijaan Knockout Football Shield",
    ev_s4_desc: "Prestigious tournament featuring top 16 club teams from North 24 Parganas battling for the coveted shield.",
    ev_s5_label: "Humanitarian Care",
    ev_s5_cat: "Community Relief",
    ev_s5_name: "Winter Warmth & Blanket Drive",
    ev_s5_desc: "Distributing quality blankets and warm clothing to underprivileged elders across the Barrackpore subdivision.",
    tab_footer_c: "View Complete Cultural & Festival Schedule →",
    tab_footer_s: "Explore All Community & Sports Projects →",
    pres_eyebrow: "President's Desk · Official Message",
    pres_h2: "A Warm Message from our <em>President</em>",
    pres_quote: "&quot;Heritage, harmony, and selfless social service — these three pillars define Kamalpur Abhijaan Sangha. Together with the younger generation, our solemn mission is to make Durga Puja 2027 a universal haven of fraternity and joy.&quot;",
    pres_body: "My heartfelt Sharad greetings to every member, well-wisher, festival worker, and resident of North Barrackpore. Founded in 1952, our institution now shines in the glory of 75 historic years. With the wisdom of our elders, the vigor of our executive committee, and the trust of our benefactors, Durga Puja 2027 is set to scale majestic new heights. Let us unite to celebrate this milestone together.",
    pres_link: "Meet the Executive Committee & Festival Officials →",
    pres_name: "Subrata Bhattacharya",
    pres_role: "President · Kamalpur Abhijaan Sangha (2025–2027)",
    heritage_eyebrow: "Our Odyssey · Heritage Timeline",
    heritage_h2: "Seven Decades of<br>Glorious <em>History</em>",
    heritage_body: "From a modest local Durga Puja in 1952 to one of North Barrackpore's foremost socio-cultural institutions.",
    tl1_year: "1952 — Foundation Stone",
    tl1_text: "A passionate group of cultural youth established the club and inaugurated the first community Durga Puja.",
    tl2_year: "1968 — Library & Theatre",
    tl2_text: "Inauguration of the Netaji Subhash Library and regular seasonal stage drama and cultural productions.",
    tl3_year: "1995 — Social Expansion",
    tl3_text: "Launch of annual blood donation camps, emergency medical relief funds, and our football shield.",
    tl4_year: "2027 — Platinum Jubilee",
    tl4_text: "Celebrating 75 illustrious years with architectural pandal art, humanitarian welfare, and a landmark festival.",
    hnum_eyebrow: "Impact & Legacy · By The Numbers",
    hnum_h2: "Hallmarks of Our<br>Legacy in <em>Numbers</em>",
    hnum_link: "Explore Our Full Archival History & Documents →",
    sponsors_kicker: "Durga Puja 2027",
    sponsors_title: "Our Generous <em>Sponsors & Brand Partners</em>",
    sponsors_sub: "Whose generous support empowers our grand Durga Puja and year-round humanitarian programs.",
    donate_eyebrow: "Devotion & Philanthropy · Support Abhijaan",
    donate_h2: "With Your Support,<br>Empower Our <em>Community Service</em><br>&amp; Durga Puja 2027",
    donate_body: "For 75 years, every triumph of Kamalpur Abhijaan Sangha has been built upon the generosity of members, residents, and the global Bengali diaspora. Your contribution directly funds sacred puja arrangements, bhog distribution, life-saving blood donation drives, and medical aid for the underprivileged.",
    impact_1: "Organizing grand Durga Puja celebrations & cultural concerts",
    impact_2: "Running annual mega blood donation drives & emergency ambulance services",
    impact_3: "Providing scholarships, books, and educational supplies to underprivileged students",
    impact_4: "Maintaining the public library, sports academy, and youth mentoring",
    donate_card_title: "Select Donation Amount",
    donate_card_sub: "Choose your preferred contribution to support our festivities & humanitarian work",
    custom_placeholder: "Custom Amount (₹)",
    freq_once: "One-Time Donation",
    freq_monthly: "Monthly Supporter",
    donate_btn: "Proceed to Donate & Get Receipt →",
    donate_note: "Kamalpur Abhijaan Sangha is a registered non-profit under the West Bengal Societies Registration Act (Reg: S/54028). Official digital receipts are issued for all contributions.",
    join_eyebrow: "Membership Enrollment · Join The Family",
    join_h2: "Become a Cherished<br><em>Member</em> of Abhijaan",
    join_copy: "Since 1952, Kamalpur Abhijaan Sangha has united generations as one warm family. Whether you reside locally in North Barrackpore, interstate, or abroad as an NRI, membership keeps you intimately connected to Durga Puja and our community causes.",
    b_title_1: "Exclusive Durga Puja Privileges",
    b_desc_1: "Dedicated Bhog coupons, priority Anjali slots, and VIP evening cultural seating",
    b_title_2: "Lifelong Community Bonds",
    b_desc_2: "Stand shoulder-to-shoulder with over 500 member families in fraternity and joy",
    b_title_3: "Access to Library & Sports Facilities",
    b_desc_3: "Full access to Netaji Subhash Library, club ground, and cricket/football academies",
    form_title: "Membership Application Form",
    form_sub: "Submit your details — our executive committee will connect with you within 48 hours.",
    lbl_fname: "First Name *",
    lbl_lname: "Last Name *",
    lbl_email: "Email Address *",
    lbl_phone: "Mobile Number (WhatsApp) *",
    lbl_address: "Area / Street / Locality *",
    lbl_state: "State / Country *",
    lbl_tier: "Membership Tier",
    lbl_message: "Any message or area of interest?",
    form_submit: "Submit Membership Application →",
    form_note: "Your application is directly forwarded to our executive membership committee.",
    success_title: "Application Received!",
    success_desc: "Thank you for wishing to join the Kamalpur Abhijaan Sangha family.<br>Our executive committee will contact you shortly.",
    footer_tagline: "Historic socio-cultural & athletic institution of North Barrackpore. Durga Puja 2027.",
    footer_addr: "Kamalpur Road (Anandamoyee Kalibari Crossing), North Barrackpore, North 24 Parganas, West Bengal - 700120",
    footer_pres: "Subrata Bhattacharya (President): +91 98300 24891",
    footer_sec: "Soumen Mukhopadhyay (Secretary): +91 98312 77410",
    footer_copy: "© 2027 Kamalpur Abhijaan Sangha. All rights reserved."
  }
};

let currentLang = 'bn';

// ══════════════════════════════════════════════════════
// 2. LANGUAGE SWITCHER FUNCTION
// ══════════════════════════════════════════════════════
window.setLanguage = function(lang) {
  if (!translations[lang]) return;
  currentLang = lang;
  try {
    localStorage.setItem('kamalpur_lang', lang);
  } catch (e) {}

  document.documentElement.lang = lang;
  if (translations[lang].doc_title) {
    document.title = translations[lang].doc_title;
  }

  // Update language toggle buttons
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.getAttribute('data-lang') === lang);
  });

  // Update text content
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (translations[lang][key] !== undefined) {
      el.textContent = translations[lang][key];
    }
  });

  // Update HTML content
  document.querySelectorAll('[data-i18n-html]').forEach(el => {
    const key = el.getAttribute('data-i18n-html');
    if (translations[lang][key] !== undefined) {
      el.innerHTML = translations[lang][key];
    }
  });

  // Update placeholders
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.getAttribute('data-i18n-placeholder');
    if (translations[lang][key] !== undefined) {
      el.setAttribute('placeholder', translations[lang][key]);
    }
  });

  // Update custom amount placeholder if present
  const customInput = document.getElementById('custom-donation-input');
  if (customInput && translations[lang].custom_placeholder) {
    customInput.placeholder = translations[lang].custom_placeholder;
  }
};

document.addEventListener('DOMContentLoaded', () => {
  // Initialize saved language or default to Bengali
  let savedLang = 'bn';
  try {
    savedLang = localStorage.getItem('kamalpur_lang') || 'bn';
  } catch (e) {}
  setLanguage(savedLang);

  // ── 3. Apple-style Scroll Progress Bar ──
  const progressBar = document.getElementById('scroll-progress');
  function updateScrollProgress() {
    if (!progressBar) return;
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    const docHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
    progressBar.style.width = `${scrolled}%`;
  }
  window.addEventListener('scroll', updateScrollProgress, { passive: true });

  // ── 4. Apple Keynote Intro Overlay ──
  const introOverlay = document.getElementById('intro-overlay');
  const skipBtn = document.getElementById('intro-skip-btn');

  function dismissIntro() {
    if (introOverlay && !introOverlay.classList.contains('hidden')) {
      introOverlay.style.opacity = '0';
      setTimeout(() => {
        introOverlay.classList.add('hidden');
      }, 700);
    }
  }

  if (introOverlay) {
    setTimeout(dismissIntro, 3200);
    if (skipBtn) {
      skipBtn.addEventListener('click', dismissIntro);
    }
  }

  // Floating ambient particles for intro
  const introParticles = document.getElementById('intro-particles');
  if (introParticles) {
    for (let i = 0; i < 35; i++) {
      const p = document.createElement('div');
      p.className = 'intro-particle';
      const size = Math.random() * 5 + 2;
      p.style.width = `${size}px`;
      p.style.height = `${size}px`;
      p.style.left = `${Math.random() * 100}%`;
      p.style.bottom = `${Math.random() * 20}%`;
      p.style.background = Math.random() > 0.4 ? 'rgba(212, 149, 106, 0.7)' : 'rgba(255, 255, 255, 0.6)';
      p.style.animationDuration = `${Math.random() * 3 + 2.5}s`;
      p.style.animationDelay = `${Math.random() * 2}s`;
      introParticles.appendChild(p);
    }
  }

  // ── 5. Apple Frosted Glass Sticky Nav ──
  const nav = document.getElementById('nav');
  window.addEventListener('scroll', () => {
    if (nav) {
      nav.classList.toggle('elevated', window.scrollY > 20);
    }
  }, { passive: true });

  // ── 6. Apple Smooth RAF Physics (Parallax & Pinned Storytelling) ──
  const heroParallax = document.getElementById('hero-parallax');
  const heroContent = document.querySelector('.hero-content');
  const appleSection = document.getElementById('apple-experience');
  const scrubP1 = document.getElementById('scrub-p1');
  const scrubP2 = document.getElementById('scrub-p2');
  const scrubP3 = document.getElementById('scrub-p3');
  const feat1 = document.getElementById('apple-feat-1');
  const feat2 = document.getElementById('apple-feat-2');
  const feat3 = document.getElementById('apple-feat-3');

  let currentScrollY = window.scrollY;
  let targetScrollY = window.scrollY;
  let isTicking = false;

  window.addEventListener('scroll', () => {
    targetScrollY = window.scrollY;
    if (!isTicking) {
      requestAnimationFrame(smoothScrollLoop);
      isTicking = true;
    }
  }, { passive: true });

  function smoothScrollLoop() {
    // Damped lerp interpolation for silky Apple physics
    currentScrollY += (targetScrollY - currentScrollY) * 0.14;

    // 1. Hero Parallax Layer
    if (heroParallax && currentScrollY < 900) {
      heroParallax.style.transform = `translate3d(0, ${currentScrollY * 0.22}px, 0)`;
    }
    if (heroContent && currentScrollY < 800) {
      heroContent.style.transform = `translate3d(0, ${currentScrollY * 0.1}px, 0)`;
      heroContent.style.opacity = `${Math.max(0, 1 - currentScrollY / 650)}`;
    }

    // 2. Apple Pinned Text Scrub & Card Reveal
    if (appleSection) {
      const rect = appleSection.getBoundingClientRect();
      const scrollableDist = appleSection.offsetHeight - window.innerHeight;
      if (scrollableDist > 0) {
        const progress = Math.max(0, Math.min(1, -rect.top / scrollableDist));

        // Text illumination stages
        if (scrubP1) scrubP1.classList.toggle('lit', progress >= 0.04);
        if (scrubP2) scrubP2.classList.toggle('lit', progress >= 0.22);
        if (scrubP3) scrubP3.classList.toggle('lit', progress >= 0.40);

        // Feature cards reveal stages
        if (feat1) feat1.classList.toggle('active', progress >= 0.55);
        if (feat2) feat2.classList.toggle('active', progress >= 0.68);
        if (feat3) feat3.classList.toggle('active', progress >= 0.82);
      }
    }

    if (Math.abs(targetScrollY - currentScrollY) > 0.5) {
      requestAnimationFrame(smoothScrollLoop);
    } else {
      isTicking = false;
    }
  }

  // Trigger initial frame
  requestAnimationFrame(smoothScrollLoop);

  // ── 7. Mobile Menu Toggle ──
  const menuBtn = document.getElementById('menuBtn');
  const navLinks = document.getElementById('navLinks');
  if (menuBtn && navLinks) {
    menuBtn.addEventListener('click', () => {
      const isOpen = navLinks.classList.toggle('open');
      menuBtn.setAttribute('aria-expanded', isOpen);
      menuBtn.innerHTML = isOpen ? '✕' : '☰';
    });

    navLinks.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('open');
        menuBtn.setAttribute('aria-expanded', 'false');
        menuBtn.innerHTML = '☰';
      });
    });
  }

  // ── 8. Scrollspy for Active Navigation Link ──
  const sections = document.querySelectorAll('section[id]');
  const allNavLinks = document.querySelectorAll('.nav-link');
  window.addEventListener('scroll', () => {
    let currentId = '';
    const scrollPos = window.scrollY + 140;

    sections.forEach(sec => {
      if (scrollPos >= sec.offsetTop && scrollPos < sec.offsetTop + sec.offsetHeight) {
        currentId = sec.getAttribute('id');
      }
    });

    allNavLinks.forEach(link => {
      const href = link.getAttribute('href');
      link.classList.toggle('active', href === `#${currentId}`);
    });
  }, { passive: true });

  // ── 9. Apple Spring Scroll Reveals via IntersectionObserver ──
  const revealElements = document.querySelectorAll('.reveal');
  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  revealElements.forEach(el => revealObserver.observe(el));

  // ── 10. Apple VisionOS / Apple TV 3D Tilt & Specular Spotlight on Cards ──
  const tiltCardSelectors = '.ev-card, .pillar, .vendor-card, .hnum-card, .ds-flyer-card, .pres-img-frame, .apple-feat-card';
  const tiltCards = document.querySelectorAll(tiltCardSelectors);

  tiltCards.forEach(card => {
    card.classList.add('apple-card');

    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      card.style.setProperty('--mouse-x', `${x}px`);
      card.style.setProperty('--mouse-y', `${y}px`);

      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      const rotateX = ((y - centerY) / centerY) * -6;
      const rotateY = ((x - centerX) / centerX) * 6;

      card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-4px) scale3d(1.02, 1.02, 1.02)`;
    });

    card.addEventListener('mouseleave', () => {
      card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0) scale3d(1, 1, 1)';
    });
  });

  // ── 11. Dual Tab Event Switcher ──
  window.switchTab = function(type) {
    const panelC = document.getElementById('panel-c');
    const panelS = document.getElementById('panel-s');
    const tabC = document.getElementById('tab-c');
    const tabS = document.getElementById('tab-s');

    if (panelC && panelS && tabC && tabS) {
      if (type === 'c') {
        panelC.classList.add('show');
        panelS.classList.remove('show');
        tabC.className = 'etab active-c';
        tabS.className = 'etab';
      } else {
        panelC.classList.remove('show');
        panelS.classList.add('show');
        tabC.className = 'etab';
        tabS.className = 'etab active-s';

        panelS.querySelectorAll('.reveal:not(.visible)').forEach(el => {
          setTimeout(() => el.classList.add('visible'), 50);
        });
      }
      initCarousel(type === 'c' ? 'cc' : 'sc', type === 's');
    }
  };

  // ── 12. Multi-Slide Responsive Carousel ──
  const carousels = {};

  function getVisibleCount() {
    if (window.innerWidth <= 768) return 1;
    if (window.innerWidth <= 1024) return 2;
    return 3;
  }

  function initCarousel(id, isGold) {
    const track = document.getElementById(id);
    if (!track) return;

    const slides = track.querySelectorAll('.carousel-slide');
    const total = slides.length;
    const visible = getVisibleCount();
    const maxIndex = Math.max(0, total - visible);

    carousels[id] = { index: 0, total, visible, maxIndex, isGold };
    buildDots(`${id}-dots`, maxIndex + 1, isGold, id);
    goToSlide(id, 0);
  }

  function buildDots(dotsId, count, isGold, carouselId) {
    const dotsEl = document.getElementById(dotsId);
    if (!dotsEl) return;
    dotsEl.innerHTML = '';
    for (let i = 0; i < count; i++) {
      const dot = document.createElement('div');
      dot.className = 'c-dot' + (i === 0 ? (isGold ? ' active active-gold' : ' active') : '');
      dot.addEventListener('click', () => goToSlide(carouselId, i));
      dotsEl.appendChild(dot);
    }
  }

  function updateDots(dotsId, index, isGold) {
    const dots = document.querySelectorAll(`#${dotsId} .c-dot`);
    dots.forEach((dot, i) => {
      dot.className = 'c-dot' + (i === index ? (isGold ? ' active active-gold' : ' active') : '');
    });
  }

  function goToSlide(id, index) {
    const c = carousels[id];
    const track = document.getElementById(id);
    if (!c || !track) return;

    c.index = Math.max(0, Math.min(index, c.maxIndex));
    const firstSlide = track.querySelector('.carousel-slide');
    if (!firstSlide) return;

    const slideWidth = firstSlide.offsetWidth + 24;
    track.style.transform = `translateX(-${c.index * slideWidth}px)`;
    updateDots(`${id}-dots`, c.index, c.isGold);
  }

  window.moveCarousel = function(id, dir) {
    const c = carousels[id];
    if (!c) return;
    goToSlide(id, c.index + dir);
  };

  initCarousel('cc', false);
  initCarousel('sc', true);

  window.addEventListener('resize', () => {
    initCarousel('cc', false);
    initCarousel('sc', true);
  }, { passive: true });

  // ── 13. Donation Card Interaction & Apple Modal ──
  const amtButtons = document.querySelectorAll('.amt-btn');
  const customInput = document.getElementById('custom-donation-input');
  const freqButtons = document.querySelectorAll('.freq-btn');
  const donateModal = document.getElementById('donation-modal');
  const modalAmtDisplay = document.getElementById('modal-donation-amount');

  let selectedAmount = '1000';
  let selectedFrequency = 'one-time';

  amtButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      amtButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      selectedAmount = btn.dataset.amount || '1000';
      if (customInput) customInput.value = '';
    });
  });

  if (customInput) {
    customInput.addEventListener('input', (e) => {
      amtButtons.forEach(b => b.classList.remove('active'));
      selectedAmount = e.target.value || '0';
    });
  }

  freqButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      freqButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      selectedFrequency = btn.dataset.freq || 'one-time';
    });
  });

  window.openDonationForm = function() {
    if (donateModal) {
      if (modalAmtDisplay) {
        const freqText = selectedFrequency === 'monthly'
          ? (currentLang === 'en' ? 'Monthly' : 'মাসিক অনুদান')
          : (currentLang === 'en' ? 'One-time' : 'এককালীন অনুদান');
        modalAmtDisplay.textContent = `₹${selectedAmount || '1000'} · ${freqText}`;
      }
      donateModal.classList.add('open');
      document.body.style.overflow = 'hidden';
    }
  };

  window.closeDonationForm = function() {
    if (donateModal) {
      donateModal.classList.remove('open');
      document.body.style.overflow = '';
    }
  };

  if (donateModal) {
    donateModal.addEventListener('click', (e) => {
      if (e.target === donateModal) {
        window.closeDonationForm();
      }
    });
  }

  // ── 14. Membership Application Form Submission ──
  const joinForm = document.getElementById('join-form');
  const joinSuccess = document.getElementById('join-success');

  if (joinForm && joinSuccess) {
    joinForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const submitBtn = joinForm.querySelector('.form-submit');
      if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.innerHTML = currentLang === 'en' ? 'Submitting Application...' : 'আবেদন জমা দেওয়া হচ্ছে...';
      }

      setTimeout(() => {
        joinForm.style.display = 'none';
        joinSuccess.style.display = 'block';
      }, 900);
    });
  }
});
