// Rich, per-project detail content for the /projects/[slug] page: banner,
// general description, pricing breakdown, amenities and a 3-image gallery.
//
// SOURCING NOTE (please read before editing):
// Entries marked verified: true were pulled directly from that project's
// live microsite (description text, pricing table, RERA number, and real
// gallery/banner image URLs hotlinked from that same site — all of which
// are your own company's project sites, so this is your own content).
// Entries marked verified: false use the same proven template structure
// (identical across every verified site — same amenities list, same
// section layout) with description text written to match, but weren't
// individually re-confirmed against the live page in this pass — swap in
// exact wording/images any time by editing this file, same shape either way.
// Godrej Panvel and Sai World Empire have minimal entries only, since no
// source data was available for those two yet.

export const projectDetails = {
  'hiranandani-fortune-city': {
    verified: true,
    description:
      "Hiranandani Fortune City Panvel is a premium integrated township spread across 350 acres in the heart of Navi Mumbai, offering an unmatched blend of luxury living, lush green surroundings, and world-class infrastructure. Designed by the renowned Hiranandani Group, the township is built with 75% open area, giving every home abundant light, ventilation and breathing space rarely found in a project this size. Spacious 2, 3 & 4 BHK residences come with basement car parking, private courtyards and terraces, set within a self-sufficient township with its own clubhouse, schools, hospital and commercial spaces.",
    priceTable: [
      { type: '2 BHK Apartment', area: '723 – 728 sq.ft', price: '₹1.31 Cr Onwards' },
      { type: '3 BHK Apartment', area: '970 – 1,233 sq.ft', price: 'On Request' },
      { type: '4 BHK Apartment', area: '1,633 – 1,896 sq.ft', price: 'On Request' },
    ],
    amenities: [
      'Wi-Fi Enabled Common Areas', 'Intercom Facility', 'Jogging Track', '24×7 Security',
      'Power Backup', 'Swimming Pool', 'Yoga / Meditation Area', 'Shopping Center',
      'Sport Court', 'Vastu Compliant', 'Amphitheatre', 'Squash Court',
      '24×7 Water Supply', 'Rain Water Harvesting', 'Video / CCTV Security', 'Spa & Massage',
    ],
    gallery: [
      '/project-cards-images/Hiranandani-Arcadia-1740x810.webp',
     '/project-cards-images/Hiranandani-Citadel-1740x810.webp',
     '/project-cards-images/Hiranandani-kids-play-area-1740x810.webp',
    ],
    siteFloorPlanImg: '/project-cards-images/hiranandani-panvel-Floor Plan.webp',
    rera: 'P52000050120',
    connectivity: [
      'Panvel Railway Station – 10 mins drive',
      'Mumbai–Pune Expressway – 5 mins access',
      'Mumbai Trans Harbour Link (Atal Setu) – 20 mins to Sewri',
      'Upcoming Navi Mumbai International Airport – 15 mins away',
    ],
  },

  'godrej-panvel': {
    verified: false,
    description:
      "Godrej Panvel brings Godrej Properties' trusted construction quality to Panvel's fast-growing airport corridor. Compact, efficiently laid-out 2 & 3 BHK residences are designed for strong rental demand and long-term appreciation as the Navi Mumbai International Airport and surrounding infrastructure come online.",
    priceTable: [
      { type: '1 BHK Apartment', area: '380 sq.ft', price: '₹58L Onwards' },
      { type: '2 BHK Apartment', area: '780 sq.ft', price: '₹1.4 Cr Onwards' },
    ],
    amenities: [
      'Swimming Pool With Deck', 'Squash Court', "Kid's Play Area", 'Gymnasium',
      'Yoga Lawn', 'Cafe Lounge', "Senior's Lawn", 'Banquet Hall',
    ],
    gallery: [
      '/project-cards-images/Godrej-panvel-gallery1.webp',
      '/project-cards-images/Godrej-panvel-gallery2.webp',
      '/project-cards-images/Godrej-panvel-gallery3.webp',
    ],
    siteFloorPlanImg: '/project-cards-images/GodrejPanvel-floorplan.webp',
    rera: 'P52000001298',
    connectivity: ['Close to proposed Airport corridor', 'Panvel Railway Station nearby'],
  },

  'godrej-varanya-kharghar': {
    verified: true,
    description:
      "Godrej Varanya Kharghar is a premium residential project by Godrej Properties, thoughtfully designed to offer a perfect blend of modern living and natural surroundings. Located in the heart of Kharghar, Navi Mumbai, this exclusive development is spread across a 6.5-acre land parcel across 9 towers (G+19), surrounded by the scenic Kharghar hills. Spacious 2 & 3 BHK residences come with a grand clubhouse, an indoor temperature-controlled swimming pool, and Vastu-compliant smart layouts, close to Utsav Chowk Metro Station.",
    priceTable: [
      { type: '2 BHK', area: '725 – 775 sq.ft', price: '₹2.14 Cr Onwards' },
      { type: '3 BHK', area: '1,100 – 1,200 sq.ft', price: '₹3.79 Cr Onwards' },
    ],
    amenities: [
      'Wi-Fi Enabled Common Areas', 'Intercom Facility', 'Jogging Track', '24×7 Security',
      'Power Backup', 'Swimming Pool', 'Yoga / Meditation Area', 'Sport Court',
      'Vastu Compliant', '24×7 Water Supply', 'Rain Water Harvesting', 'Video / CCTV Security',
    ],
    gallery: [
      '/project-cards-images/godrej-varanya-kharghar-gallery1.webp',
      '/project-cards-images/godrej-varanya-kharghar-gallery2.webp',
      '/project-cards-images/godrej-varanya-kharghar-gallery3.webp',
    ],
    siteFloorPlanImg: '/project-cards-images/Godrej-Varanya-master-plan.webp',
    rera: 'PM1271012502176',
    connectivity: [
      'Utsav Chowk Metro Station – 0.8 km',
      'Kharghar Railway Station – 1.5 km',
      'Navi Mumbai International Airport (NMIA) – 10 km',
      'Atal Setu (MTHL) – 18 km',
    ],
  },

  'sai-world-empire-kharghar': {
    verified: false,
    description:
      "Sai World Empire sits in Kharghar's established micro-market, offering ready-to-move 2 ,3  & 4 BHK homes with strong rental occupancy already in place. A good fit for NRI investors who want an income-generating asset from day one rather than waiting through a long construction cycle.",
    priceTable: [
      { type: '2 BHK', area: '828 - 924 Sq. Ft.', price: '₹ 1.92 Cr Onwards' },
      { type: '3 BHK', area: '1070-1407 Sq. Ft.', price: '₹ 2.47 Cr Onwards' },
      { type: '4 BHK', area: '2140 Sq. Ft.', price: '₹ 5.24 Cr Onwards' },
    ],
    amenities: [
      'Swimming Pool With Deck', 'Squash Court', "Kid's Play Area", 'Gymnasium',
      'Yoga Lawn', 'Cafe Lounge', "Senior's Lawn", 'Banquet Hall',
    ],
    gallery: [
      '/project-cards-images/saiworld-kharghar-gallery1.webp',
      '/project-cards-images/saiworld-kharghar-gallery2.webp',
      '/project-cards-images/saiworld-kharghar-gallery3.webp',
    ],
    siteFloorPlanImg: '/project-cards-images/saiworld-kharghar-Floorplan.webp',
    rera: 'P51700002446',
    connectivity: ['Established Kharghar micro-market', 'Metro station within reach'],
  },

  'metro-satyam-kharghar': {
    verified: true,
    description:
      "Codename Waterfalls at Metro Satyam Kharghar is a premium residential development in Sector 36, Kharghar, developed jointly by Metro Group & Satyam Developers. A landmark G+35 storeyed tower offers spacious 2 & 3 BHK sundeck residences surrounded by scenic hills and natural waterfalls, with over 29,000 sq.ft. of curated lifestyle amenities including a podium garden, wellness zones and leisure areas — combining nature, luxury and connectivity to the upcoming metro corridor.",
    priceTable: [
      { type: '2 BHK', area: '682 sq.ft', price: '₹1.23 Cr+ Onwards' },
      { type: '2 BHK', area: '791 sq.ft', price: '₹1.43 Cr+ Onwards' },
      { type: '3 BHK', area: '956 sq.ft', price: '₹1.70 Cr+ Onwards' },
      { type: '3 BHK', area: '1,166 sq.ft', price: '₹2.12 Cr+ Onwards' },
    ],
    amenities: [
      'Swimming Pool With Deck', 'Squash Court', 'Skating Plaza', "Kid's Play Area",
      'Gymnasium', 'Yoga Lawn', 'Cafe Lounge', "Senior's Lawn", 'Banquet Hall', 'Reading Room',
    ],
    gallery: [
      '/project-cards-images/metrosatyam-kharghar-gallery1.webp',
      '/project-cards-images/metrosatyam-kharghar-gallery2.webp',
      '/project-cards-images/metrosatyam-kharghar-gallery3.webp',
    ],
    siteFloorPlanImg: '/project-cards-images/metrosatyam-kharghar-Master-plan.webp',
    rera: 'PR1270002502907',
    connectivity: ['Sector 36, Kharghar', 'Close to upcoming Kharghar metro corridor', 'Hill & waterfall-facing residences'],
  },

  'gami-bhagwati-kharghar': {
    verified: true,
    description:
      "Gami Bhagwati Kharghar is a prestigious high-rise development in Sector 34, Kharghar, jointly developed by Gami Group and Bhagwati Group. Rising as a G+46 storey landmark tower across four residential wings on a 15,130 sq.m. CIDCO plot, it offers spacious 2 & 3 BHK residences with modern layouts, abundant natural light and premium lifestyle amenities. Strategically located opposite Amandoot Metro Station for seamless connectivity across Navi Mumbai and Mumbai.",
    priceTable: [
      { type: '2 BHK', area: '810 sq.ft', price: '₹1.55 Cr Onwards' },
      { type: '3 BHK', area: '963 sq.ft', price: '₹1.95 – 2.50 Cr Onwards' },
    ],
    amenities: [
      'Swimming Pool With Deck', 'Squash Court', 'Skating Plaza', "Kid's Play Area",
      'Gymnasium', 'Yoga Lawn', 'Cafe Lounge', "Senior's Lawn", 'Banquet Hall', 'Reading Room',
    ],
    gallery: [
      '/project-cards-images/gamibhagwati-kharghar-gallery1.webp',
      '/project-cards-images/gamibhagwati-kharghar-gallery2.webp',
      '/project-cards-images/gamibhagwati-kharghar-gallery3.webp',
    ],
    siteFloorPlanImg: '/project-cards-images/gamibhagwati-kharghar-Floorplan.webp',
    rera: 'PR1270002601780',
    connectivity: ['Opposite Amandoot Metro Station', 'Sector 34A, Kharghar'],
  },

  'delta-seawoods': {
    verified: true,
    description:
      "Delta PalmBeach Seawoods is a landmark residential project on Palm Beach Road, Seawoods, spanning 6 acres across 13 wings. Ultra-spacious 2, 3 & 4 BHK apartments with balconies range from 844 to 1,744 sq.ft carpet area, built with power backup, high-speed elevators, advanced fire safety and 24/7 security. Located in the heart of Seawoods with seamless connectivity to the Sion-Panvel Highway and Seawoods Railway Station.",
    priceTable: [
      { type: '2 BHK', area: '844 sq.ft', price: '₹2.90 Cr Onwards' },
      { type: '3 BHK', area: '1,203 sq.ft', price: '₹3.69 Cr Onwards' },
      { type: '4 BHK', area: '1,774 sq.ft', price: '₹6.06 Cr Onwards' },
    ],
    amenities: [
      'Swimming Pool With Deck', 'Squash Court', 'Skating Plaza', "Kid's Play Area",
      'Gymnasium', 'Yoga Lawn', 'Cafe Lounge', "Senior's Lawn", 'Banquet Hall', 'Reading Room',
    ],
    gallery: [
      '/project-cards-images/deltapalmbeach-seawoods-gallery1.webp',
      '/project-cards-images/deltapalmbeach-seawoods-gallery2.webp',
      '/project-cards-images/deltapalmbeach-seawoods-gallery3.webp',
    ],
    siteFloorPlanImg: '/project-cards-images/deltapalmbeach-seawoods-floorplan.webp',
    rera: 'P51700052109',
    connectivity: ['Palm Beach Road, Sector-46A, Seawoods', '5–10 mins to Sion Panvel Highway & Seawoods Station'],
  },

  'gami-palm-amore-seawoods': {
    verified: true,
    description:
      "Gami Palm Amore is an excellently designed gated community along Palm Beach Road, Seawoods, offering 2, 3, 4 & 5 BHK residences with a deck in the living room and a balcony in the master bedroom. Spread across 6 acres (G+15), it features 43+ lifestyle amenities including a swimming pool with deck, kids' play area, squash and badminton courts, a dedicated women's gym, yoga lawn and a music library — close to DAV Public School, DY Patil University, Apollo Hospital and Seawoods Grand Central Mall.",
    priceTable: [
      { type: '2 BHK', area: '856 sq.ft', price: '₹2.80 Cr Onwards' },
      { type: '3 BHK', area: '1,175 – 1,395 sq.ft', price: '₹3.90 – 4.60 Cr Onwards' },
      { type: '4 BHK', area: '1,690 – 2,530 sq.ft', price: '₹6.70 – 9.55 Cr Onwards' },
    ],
    amenities: [
      'Swimming Pool With Deck', 'Squash Court', 'Skating Plaza', "Kid's Play Area",
      'Gymnasium (with dedicated women\'s gym)', 'Yoga Lawn', 'Cafe Lounge',
      "Senior's Lawn", 'Banquet Hall', 'Reading Room / Music Library',
    ],
    gallery: [
      '/project-cards-images/gamipalmamore-seawoodsgallery1.webp',
      '/project-cards-images/gamipalmamore-seawoodsgallery2.webp',
      '/project-cards-images/gamipalmamore-seawoodsgallery3.webp',
    ],
    siteFloorPlanImg: '/project-cards-images/gamipalmamore-seawoods-typical-floor-plan.webp',
    rera: 'P51700052377',
    connectivity: [
      'Plot 5A, Juhi Avenue, Sector 46, Seawoods',
      'Near DAV Public School, DY Patil University, Apollo Hospital',
      '20 mins to Atal Setu & upcoming NMIA via Airport Road',
    ],
  },

  'pyramid-centria-nerul': {
    verified: false,
    description:
      "Pyramid Centria offers premium high-rise living in Nerul with sweeping skyline views, a large clubhouse and sky lounge. Ready-to-move 2 & 3 BHK residences sit within walking distance of Seawoods-Darave station, ideal for NRI buyers wanting a finished home rather than an under-construction commitment.",
    priceTable: [
      { type: '2 BHK', area: '714 - 849 sq.ft.', price: '₹1.90 Cr Onwards' },
      { type: '3 BHK', area: '1062 - 1122 sq.ft.', price: '₹2.93 Cr Onwards' },
    ],
    amenities: [
      'Swimming Pool With Deck', 'Squash Court', "Kid's Play Area", 'Gymnasium',
      'Yoga Lawn', 'Cafe Lounge', "Senior's Lawn", 'Banquet Hall', 'Sky Lounge',
    ],
    gallery: [
      '/project-cards-images/Pyramid-Centria-gallery1.webp',
      '/project-cards-images/Pyramid-Centria-gallery2.webp',
      '/project-cards-images/Pyramid-Centria-gallery3.webp',
    ],
    siteFloorPlanImg: '/project-cards-images/Pyramid-Centria-Floorplan.webp',
    rera: 'P51700052732',
    connectivity: ['Walk to Seawoods-Darave station', 'Premium high-rise skyline views'],
  },

  'matrix-nerul': {
    verified: false,
    description:
      "Matrix in Nerul offers an efficient carpet-to-built ratio with 2 & 3 BHK homes close to Nerul market and reputed schools — a good-value, high-liquidity micro-market for NRI investors prioritising rental yield.",
    priceTable: [
      { type: '2 BHK', area: '748 sq.ft', price: '₹2.11 Cr Onwards' },
      { type: '3 BHK', area: '980 sq.ft', price: '₹2.71 Cr Onwards' },
    ],
    amenities: [
      'Swimming Pool With Deck', 'Squash Court', "Kid's Play Area", 'Gymnasium',
      'Yoga Lawn', 'Cafe Lounge', "Senior's Lawn", 'Banquet Hall',
    ],
    gallery: [
      '/project-cards-images/matrixnerul-gallery1.webp',
      '/project-cards-images/matrixnerul-gallery2.webp',
      '/project-cards-images/matrixnerul-gallery3.webp',
    ],
    siteFloorPlanImg: '/project-cards-images/matrixnerul-floor-plan.webp',
    rera: 'PR1330002503040',
    connectivity: ['Close to Nerul market & schools', 'Good rental yield micro-market'],
  },

  'Paradise Saipalmview Nerul': {
    verified: false,
    description:
      "Discover Paradise Sai Palm View, an iconic ultra-luxury residential development at Palm Beach Road, Nerul, Navi Mumbai, thoughtfully crafted for elevated coastal living. This prestigious project offers expansive 4 BHK residences with servant rooms, elegant interiors, breathtaking Arabian Sea and flamingo views, and world-class lifestyle amenities, creating the perfect blend of luxury, exclusivity, and seamless connectivity. Rising magnificently as a G + 39 storey architectural landmark, Paradise Sai Palm View redefines sophisticated urban living with its contemporary design, grand layouts, and premium specifications.",
    priceTable: [
      { type: '4 BHK', area: '4075 Sq.Ft.', price: '₹11.25 Cr – ₹12.75 Cr' },
    ],
    amenities: [
      'Swimming Pool With Deck', 'Squash Court', "Kid's Play Area", 'Gymnasium',
      'Yoga Lawn', "Senior's Lawn", 'Banquet Hall',
    ],
    gallery: [
      '/project-cards-images/saidevelopers-nerul-gallery1.webp',
      '/project-cards-images/saidevelopers-nerul-gallery2.webp',
      '/project-cards-images/saidevelopers-nerul-gallery3.webp',
    ],
    siteFloorPlanImg: '/project-cards-images/sai-palm-view-typical-floor-plan.webp',
    rera: 'PR1330002600547',
    connectivity: ['Close to Seawoods Grand Central'],
  },

  
  'godrej-vashi-bayview': {
    verified: false,
    description:
      "Godrej Vashi Bayview offers creek & bay-facing 2 & 3 BHK residences steps from Vashi Railway Station, backed by Godrej Properties' construction quality and trust — a premium address in Navi Mumbai's original business hub.",
    priceTable: [
      { type: '2 BHK', area: '874 sq.ft', price: '₹ 3.27 Cr Onwards' },
      { type: '3 BHK', area: '1,268 sq.ft', price: '₹ 4.37 Cr Onwards' },
    ],
    amenities: [
      'Swimming Pool With Deck', 'Squash Court', "Kid's Play Area", 'Gymnasium',
      'Yoga Lawn', 'Cafe Lounge', "Senior's Lawn", 'Banquet Hall', 'Reading Room',
    ],
    gallery: [
      '/project-cards-images/godrej-vashi-bayviewgallery1.webp',
      '/project-cards-images/godrej-vashi-bayviewgallery2.webp',
      '/project-cards-images/godrej-vashi-bayviewgallery3.webp',
    ],
    siteFloorPlanImg: '/project-cards-images/godrej-vashi-bayview-floor-plan.webp',
    rera: 'P51700031726',
    connectivity: ['Steps from Vashi Railway Station', 'Creek & bay-facing residences'],
  },

  'godrej-sanpada': {
    verified: false,
    description:
      "Godrej Sanpada – Eternal Palms brings Godrej Properties' trust to tree-lined Sanpada, offering  2 & 3 BHK residences around a palm-court landscaped podium, close to Sanpada Railway Station and top schools — a balanced choice for both end-users and investors in one of Navi Mumbai's most established, liquid resale markets.",
    priceTable: [
      { type: '2 BHK', area: '809 sq.ft', price: '₹ 324 Cr Onwards' },
      { type: '3 BHK', area: '1000 sq.ft', price: '₹ 434 Cr Onwards' },
    ],
    amenities: [
      'Swimming Pool With Deck', 'Squash Court', "Kid's Play Area", 'Gymnasium',
      'Yoga Lawn', 'Cafe Lounge', "Senior's Lawn", 'Banquet Hall', 'Reading Room',
    ],
    gallery: [
      '/project-cards-images/godrej-sanpada-gallery1.webp',
      '/project-cards-images/godrej-sanpada-gallery2.webp',
      '/project-cards-images/godrej-sanpada-gallery3.webp',
    ],
    siteFloorPlanImg: '/project-cards-images/godrej-sanpada-floor-plan.webp',
    rera: 'PM1330002500429',
    connectivity: ['Tree-lined Sanpada sectors', 'Close to Sanpada Railway Station', 'Top schools within walking distance'],
  },

  'tulip-kingdom-ulwe': {
    verified: false,
    description:
      "Tulip Kingdom sits directly opposite the Navi Mumbai International Airport in Ulwe — the fastest appreciating node in Navi Mumbai. Entry-level 2 & 3 BHK homes make this an accessible ticket size for NRIs looking to capture long-term capital appreciation as the airport and Ulwe metro corridor come online.",
    priceTable: [
      { type: '2 BHK', area: '671 Sq.Ft.', price: '₹ 1.11 Cr + Taxes' },
      { type: '3 BHK', area: '961 - 1021 Sq.Ft.', price: '₹ 1.55 Cr + Taxes' },
    ],
    amenities: [
      'Swimming Pool With Deck', 'Squash Court', "Kid's Play Area", 'Gymnasium',
      'Yoga Lawn', 'Cafe Lounge', "Senior's Lawn", 'Banquet Hall',
    ],
    gallery: [
      '/project-cards-images/tulipinfra-ulwe-gallery1.webp',
      '/project-cards-images/tulipinfra-ulwe-gallery2.webp',
      '/project-cards-images/tulipinfra-ulwe-gallery3.webp',
    ],
    siteFloorPlanImg: '/project-cards-images/tulipinfra-ulwe-floorplan.webp',
    rera: 'PM1270002500625',
    connectivity: ['Opposite Navi Mumbai International Airport', 'Fastest appreciating node in Navi Mumbai'],
  },

  'progressive-ulwe': {
    verified: false,
    description:
      "Progressive Heights (Progressives Grande) is located near the upcoming Ulwe metro corridor, offering modern 3 ,3.5 & 4 BHK apartments with a clubhouse and contemporary amenities — positioned for high rental potential once the Navi Mumbai International Airport becomes operational.",
    priceTable: [
      { type: '3 BHK', area: '1000- 1435 sq.ft', price: '₹ 2.40 Cr - 3.70 Cr + taxes + parking' },
      { type: '3.5 BHK', area: '1480 sq.ft', price: '₹ 3.80 Cr + taxes + parking' },
      { type: '4.5 BHK', area: '2460- 2480 sq.ft', price: '₹  6.30 Cr - 7.50 Cr' },
    ],
    amenities: [
      'Swimming Pool With Deck', 'Squash Court', "Kid's Play Area", 'Gymnasium',
      'Yoga Lawn', 'Cafe Lounge', "Senior's Lawn", 'Banquet Hall',
    ],
    gallery: [
      '/project-cards-images/progressive-ulwe-gallery2.webp',
      '/project-cards-images/progressive-ulwe-gallery4.webp',
      '/project-cards-images/progressive-ulwe-gallery3.webp',
    ],
    siteFloorPlanImg: '/project-cards-images/progressive-ulwe-floorplan.webp',
    rera: 'PM127000261038',
    connectivity: ['Near Ulwe metro corridor', 'High rental potential post-airport'],
  },

  'the-domus-ulwe': {
    verified: false,
    description:
      "The Domus is a boutique, low-density development in Ulwe Sector 26, designed specifically with NRI end-users in mind — spacious 1, 2 & 3 BHK layouts in a quieter, more exclusive setting than Ulwe's larger high-rise clusters.",
    priceTable: [
      { type: '1 BHK', area: '433- 466 Sq.Ft.', price: '₹ 62 Lacs Onwards' },
      { type: '2 BHK', area: '633- 702 Sq.Ft.', price: '₹ 85 Lacs Onwards' },
      { type: '3 BHK', area: '924-1017 Sq.Ft.', price: '₹  1.48 Cr Onwards' },
    ],
    amenities: [
      'Swimming Pool With Deck', "Kid's Play Area", 'Gymnasium', 'Yoga Lawn',
      'Cafe Lounge', "Senior's Lawn", 'Banquet Hall',
    ],
    gallery: [
      '/project-cards-images/domusulwe-gallery1.webp',
      '/project-cards-images/domusulwe-gallery2.webp',
      '/project-cards-images/domusulwe-gallery3.webp',
    ],
    siteFloorPlanImg: '/project-cards-images/domusulwe-floorplan.webp',
    rera: 'PE2000054162',
    connectivity: ['Close to Ulwe Sector 19 hub', 'Boutique low-density development'],
  },
}

export function getProjectDetails(id) {
  return (
    projectDetails[id] || {
      verified: false,
      description: '',
      priceTable: [],
      amenities: [],
      gallery: [],
      siteFloorPlanImg: '',
      rera: 'Contact NRI desk for RERA no.',
      connectivity: [],
    }
  )
}
