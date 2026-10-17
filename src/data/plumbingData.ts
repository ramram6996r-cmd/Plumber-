import { PlumberConfig, PlumbingService, Testimonial, FAQItem, ServiceArea, Coupon, BeforeAfterJob } from '../types';

export const DEFAULT_PLUMBER_CONFIG: PlumberConfig = {
  businessName: 'EasyFix Plumbing Services',
  ownerName: 'Hemanth',
  phone: '+91 74110 28467',
  phoneFormatted: '+91 74110 28467',
  whatsappNumber: '917411028467', // WhatsApp clean format: 917411028467
  whatsappFormatted: '+91 74110 28467',
  licenseNumber: '',
  city: 'Local Area & Neighborhoods',
  state: 'Statewide',
  email: 'hemanth@easyfixplumbing.com',
  address: 'EasyFix Plumbing Hub',
  workingHours: '24/7/365 Emergency Dispatch'
};

export const SERVICES_LIST: PlumbingService[] = [
  {
    id: 'emergency-leak',
    title: '24/7 Emergency Burst Pipe & Leak Repair',
    category: 'emergency',
    shortDesc: 'Rapid 45-60 minute on-site dispatch for burst pipes, flooding, and ceiling leaks.',
    fullDesc: 'A burst pipe can cause thousands in water damage within minutes. EasyFix technicians arrive with commercial water extraction equipment, acoustic leak detection gear, and full pipe restoration supplies to isolate the leak immediately and restore safe water pressure.',
    priceEstimate: 'Free On-Site Quote',
    duration: '1 - 3 hours',
    popular: true,
    emergency24_7: true,
    features: [
      'Acoustic & infrared non-destructive leak detection',
      'Immediate main line shutoff & pressure stabilization',
      'Copper, PEX, and PVC pipe segment replacement',
      'Dry-out moisture assessment and insurance documentation'
    ],
    symptoms: [
      'Water pouring from ceiling or baseboards',
      'Sudden drop in entire home water pressure',
      'Hissing sounds inside walls when taps are off',
      'Spinning water meter with all faucets closed'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'drain-cleaning',
    title: 'Hydro-Jetting & Drain Snaking',
    category: 'drain',
    shortDesc: 'Clear stubborn grease, tree roots, and hair clogs with heavy-duty augers & hydro-jetting.',
    fullDesc: 'Store-bought chemical drain cleaners ruin your pipes and only punch small holes in clogs. Our motorized steel snakes and 4,000 PSI hydro-jetting scour pipes completely clean down to the bare inner wall, preventing recurring backups for years.',
    priceEstimate: 'Upfront Flat Rate',
    duration: '45 - 90 mins',
    popular: true,
    features: [
      'Heavy-duty electric motorized drain augers',
      '4,000 PSI high-pressure hydro-jetting scrub',
      'High-definition fiber-optic sewer camera verification',
      'Safe on PVC, cast iron, and ABS plumbing'
    ],
    symptoms: [
      'Kitchen or shower drain bubbling or gurgling',
      'Water pooling around your ankles in the shower',
      'Foul sewage odor rising from kitchen sinks',
      'Multiple fixtures backing up simultaneously'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1581244277943-fe4a9c777189?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'water-heater',
    title: 'Water Heater Repair & Tankless Replacement',
    category: 'heaters',
    shortDesc: 'Same-day hot water restoration, gas & electric tank repairs, and high-efficiency tankless upgrades.',
    fullDesc: 'Whether your pilot light went out, your heating element burned up, or you are ready for an endless hot water tankless system, EasyFix carries top reliable equipment for immediate installation.',
    priceEstimate: 'Free Inspection & Quote',
    duration: '2 - 4 hours',
    popular: true,
    emergency24_7: true,
    features: [
      'Diagnostic of thermocouples, valves & heating elements',
      'Same-day replacement of standard tank systems',
      'Energy-saving continuous tankless endless hot water upgrades',
      'Safe haul-away and eco-disposal of your old unit'
    ],
    symptoms: [
      'Water turns lukewarm or icy within 3 minutes',
      'Rusty, brown, or metallic-smelling hot water',
      'Puddles forming beneath the water heater jacket',
      'Popping, rumbling kettle noises coming from tank'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'toilet-repair',
    title: 'Toilet Repair & Clog Removal',
    category: 'fixtures',
    shortDesc: 'Stop running toilets, fix weak flushes, repair floor wax ring leaks, or install modern dual-flush units.',
    fullDesc: 'A running toilet wastes hundreds of liters of water every day. We carry all standard flappers, fill valves, fill seals, and heavy wax rings to fix noisy, loose, or overflowing toilets in a single quick visit.',
    priceEstimate: 'Fixed Flat Rate',
    duration: '30 - 60 mins',
    features: [
      'Flapper, fill valve, and flush tower rebuilds',
      'Subfloor leak detection & new reinforced wax ring install',
      'Heavy toilet bowl extraction and deep snake auger',
      'Comfort-height and water-saving toilet installations'
    ],
    symptoms: [
      'Toilet runs continuously through the night',
      'Water seeping onto the floor tiles around base',
      'Weak sluggish flush that requires multiple attempts',
      'Rocking or wobbly toilet bowl on bathroom floor'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1585675100414-add2e465a136?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'sewer-camera',
    title: 'HD Video Sewer Camera Inspection',
    category: 'drain',
    shortDesc: 'See exactly what is inside your underground line with color real-time monitor inspection.',
    fullDesc: 'Never dig up your property blindly. Our self-leveling HD pipe camera travels up to 200 feet through your main line, revealing tree root intrusion, bellied pipes, cracked cast iron, or offset joints with pinpoint precision.',
    priceEstimate: 'Complimentary with Clearing',
    duration: '45 - 60 mins',
    features: [
      'Full HD color video with digital footage recording',
      'Sonar depth tracking to pinpoint exact ground spot',
      'Clear evaluation for homeowners and buyers',
      'Detailed recommendations with upfront flat options'
    ],
    symptoms: [
      'Yard has wet, sunken patches or sewage odor',
      'Frequent toilet backups every couple of weeks',
      'Older home built with clay or cast iron pipes',
      'Preparing to purchase or renovate a property'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'faucets-fixtures',
    title: 'Faucets, Sinks & Shower Valve Upgrades',
    category: 'fixtures',
    shortDesc: 'Fix annoying faucet drips, low shower pressure, or install designer kitchen and bath fixtures.',
    fullDesc: 'From dripping cartridges to designer kitchen pull-down sprayers and thermostatic luxury shower valves, we ensure your fixtures operate smoothly with zero leaks and optimal water pressure.',
    priceEstimate: 'Upfront Flat Rate',
    duration: '1 - 2 hours',
    features: [
      'Ceramic disc cartridge & O-ring replacements',
      'Garbage disposal installation and jamming release',
      'Undermount kitchen sink plumbing & basket strainers',
      'Pressure balancing valves to prevent scalding showers'
    ],
    symptoms: [
      'Continuous drip from kitchen or bathroom spout',
      'Low water volume specifically at one fixture',
      'Water temperature fluctuates wildly when toilet flushes',
      'Disposal hums loudly or leaks under the cabinet'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1584622781564-1d987f7333c1?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'whole-home-repipe',
    title: 'Whole-Home PEX & Modern Repiping',
    category: 'pipes',
    shortDesc: 'Replace corroded, low-pressure pipes with modern flexible PEX-a with comprehensive warranty.',
    fullDesc: 'Old iron pipes corrode from the inside out, choking water pressure and leaving rust in your bath. EasyFix performs seamless, clean repiping with minimal wall disruption and a comprehensive piping guarantee.',
    priceEstimate: 'Custom Written Quote',
    duration: '1 - 3 days',
    features: [
      'High-grade expansion piping or premium copper',
      'Individual manifold home shutoff zoning',
      'Clean wall cuts with complete patch repair',
      'City permits pulled and code compliance passed'
    ],
    symptoms: [
      'Brown or yellowish water in morning showers',
      'Water pressure drops dramatically when two taps run',
      'Repeated pinhole leaks occurring in different rooms',
      'Older property with original rusted plumbing'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1607472586893-edb57bdc0e39?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'commercial-plumbing',
    title: 'Commercial & Facility Plumbing',
    category: 'commercial',
    shortDesc: 'Grease trap clearing, commercial boiler repair, ADA compliant restrooms, and backflow testing.',
    fullDesc: 'Plumbing downtime costs your business money. We provide rapid commercial response for restaurants, retail plazas, offices, and multi-family residential complexes with dedicated account management and certified backflow testing.',
    priceEstimate: 'Commercial On-Site Quote',
    duration: 'Tailored Scope',
    features: [
      'Certified Backflow Preventer testing and tags',
      'Commercial grease interceptor snaking and hydro-flushing',
      'Commercial high-recovery gas water heaters',
      'Emergency after-hours business service with no disruption'
    ],
    symptoms: [
      'Commercial kitchen floor sinks overflowing',
      'Backflow certification renewal notice received',
      'Customer restrooms out of service during peak hours',
      'Low water pressure in multi-story office suites'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1542013936693-884638332954?auto=format&fit=crop&w=800&q=80'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 'rev-1',
    name: 'Marcus Henderson',
    location: 'Oakridge Estates',
    rating: 5,
    date: '3 days ago',
    serviceDone: 'Emergency Burst Pipe Repair (11:30 PM)',
    review: 'Our main line burst at 11:30 PM on a Saturday. Water was gushing through the laundry room wall. I clicked their WhatsApp button and Hemanth replied within 3 minutes with an ETA! The technician arrived quickly, shut off the line, repaired the burst section, and dried up the floor. Saved our home from severe structural damage.',
    avatarUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80',
    verified: true,
    emergencyJob: true
  },
  {
    id: 'rev-2',
    name: 'Sarah & David Lin',
    location: 'Westlake Green',
    rating: 5,
    date: '1 week ago',
    serviceDone: 'Tankless Water Heater Installation',
    review: 'Had other providers give confusing, high estimates. Hemanth gave us an upfront transparent quote over WhatsApp after seeing two photos of our old water heater. They arrived on time, wore clean shoe covers, completed the install in 4 hours, and we now have endless hot water. Outstanding craftsmanship!',
    avatarUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80',
    verified: true
  },
  {
    id: 'rev-3',
    name: 'Robert Miller',
    location: 'Highland Park',
    rating: 5,
    date: '2 weeks ago',
    serviceDone: 'Hydro-Jetting & Sewer Camera Inspection',
    review: 'Kitchen sink and basement drain kept bubbling up dirty water every time the dishwasher ran. EasyFix ran a camera snake through our main line and showed me the screen live—tree roots had broken through an old joint. They hydro-jetted the whole pipe clean and gave us a full 1-year guarantee. Honest, polite, and very reasonable.',
    avatarUrl: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80',
    verified: true
  },
  {
    id: 'rev-4',
    name: 'Elena Rostova',
    location: 'Sunnyvale Commons',
    rating: 5,
    date: '3 weeks ago',
    serviceDone: 'Bathroom Faucet & Toilet Wax Seal Fix',
    review: 'Booked everything directly on WhatsApp with Hemanth while at work. Received a prompt arrival window, technician showed up right on time, fixed our leaking toilet seal that was ruining our grout, and replaced both vanity faucets. Super tidy, left zero mess, and charged exactly what was quoted upfront!',
    avatarUrl: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=150&q=80',
    verified: true
  },
  {
    id: 'rev-5',
    name: 'Captain James Kelly (Ret.)',
    location: 'Bayside Marina Area',
    rating: 5,
    date: '1 month ago',
    serviceDone: 'Whole House Water Filtration System',
    review: 'EasyFix installed an entire whole-house carbon filter and water softener. Noticeable difference in water clarity and taste on day one. They also honored their community discount with no hesitation. Highly recommend Hemanth and his team to any homeowner.',
    avatarUrl: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=150&q=80',
    verified: true
  },
  {
    id: 'rev-6',
    name: 'Amanda & Chris Ward',
    location: 'Canyon Creek',
    rating: 5,
    date: '1 month ago',
    serviceDone: 'Garbage Disposal & P-Trap Rebuild',
    review: 'Our garbage disposal jammed and started leaking dirty water directly into the lower cabinet. Reached out on Sunday morning; Hemanth had a technician out before lunchtime with a brand new replacement on the truck. Done in 45 minutes flat.',
    avatarUrl: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=150&q=80',
    verified: true
  }
];

export const SERVICE_AREAS: ServiceArea[] = [
  { name: 'Downtown & Central Area', zipCodes: ['560001', '560002', '560025'], responseTime: '30-45 mins', availableNow: true },
  { name: 'North Suburbs & Heights', zipCodes: ['560003', '560024', '560032'], responseTime: '35-50 mins', availableNow: true },
  { name: 'Westside & Green Hills', zipCodes: ['560010', '560079', '560086'], responseTime: '40-55 mins', availableNow: true },
  { name: 'East Valley & Tech Zone', zipCodes: ['560037', '560066', '560100'], responseTime: '40-60 mins', availableNow: true },
  { name: 'South District & Parks', zipCodes: ['560041', '560078', '560076'], responseTime: '45-60 mins', availableNow: true },
  { name: 'Creek Colony & Enclave', zipCodes: ['560034', '560095', '560102'], responseTime: '45-65 mins', availableNow: true },
  { name: 'Riverfront & Gardens', zipCodes: ['560047', '560052', '560070'], responseTime: '35-50 mins', availableNow: true },
  { name: 'Highland Ridge Estates', zipCodes: ['560068', '560085', '560097'], responseTime: '40-55 mins', availableNow: true }
];

export const COUPONS: Coupon[] = [
  {
    id: 'coup-1',
    code: 'PRIORITY24',
    title: 'Priority Emergency Dispatch Pass',
    discount: 'PRIORITY PASS',
    details: 'Guaranteed expedited front-of-line arrival for critical plumbing emergencies. Mention on WhatsApp.',
    expiry: 'Active Today',
    tag: 'Most Popular'
  },
  {
    id: 'coup-2',
    code: 'CAMFREE',
    title: 'FREE Video Camera Sewer Inspection',
    discount: '100% FREE',
    details: 'Complimentary high-definition sewer line video inspection included with any main drain clearing service.',
    expiry: 'Limited Time Offer',
    tag: 'Best Value'
  },
  {
    id: 'coup-3',
    code: 'HEALTHCHECK',
    title: 'Complimentary Plumbing Health Check',
    discount: 'FREE INSPECTION',
    details: 'Free multi-point inspection of all shutoff valves, water pressure regulator, and fixture seals with any booking.',
    expiry: 'Special Benefit',
    tag: 'Preventative'
  },
  {
    id: 'coup-4',
    code: 'HONORCARE',
    title: 'Senior Citizen & Defense Community Privilege',
    discount: 'SPECIAL PRIVILEGE',
    details: 'Honoring senior homeowners and defense service members with prioritized service and special terms.',
    expiry: 'Always Honored',
    tag: 'Community First'
  }
];

export const BEFORE_AFTER_JOBS: BeforeAfterJob[] = [
  {
    id: 'job-1',
    title: 'Corroded Leaking Pipes vs Clean Modern PEX Repipe',
    category: 'Repiping',
    description: 'Homeowner suffered from yellow water and low pressure. Hemanth replaced decaying piping with lead-free, high-flow expansion PEX.',
    beforeImg: 'https://images.unsplash.com/photo-1585704032915-c3400ca199e7?auto=format&fit=crop&w=700&q=80',
    afterImg: 'https://images.unsplash.com/photo-1607472586893-edb57bdc0e39?auto=format&fit=crop&w=700&q=80',
    timeSpent: '1.5 Days',
    savingHighlight: 'Zero leaks + 300% water flow increase'
  },
  {
    id: 'job-2',
    title: 'Massive Tree-Root Main Sewer Blockage vs Hydro-Jetted Clean Bore',
    category: 'Drain Cleaning',
    description: 'Toilets backing into bathtub. Fiber camera detected invasive tree roots entering through seams. Cleared with heavy root-cutter blade followed by 4,000 PSI hydro-jetting.',
    beforeImg: 'https://images.unsplash.com/photo-1542013936693-884638332954?auto=format&fit=crop&w=700&q=80',
    afterImg: 'https://images.unsplash.com/photo-1581244277943-fe4a9c777189?auto=format&fit=crop&w=700&q=80',
    timeSpent: '1 Hour 40 Mins',
    savingHighlight: 'Prevented destructive yard trenching excavation'
  },
  {
    id: 'job-3',
    title: 'Leaking Old Tank vs High-Efficiency Tankless Hot Water Unit',
    category: 'Water Heaters',
    description: 'Old tank had ruptured from the base, pooling water. Upgraded to a sleek wall-mounted continuous tankless unit with endless hot showers.',
    beforeImg: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=700&q=80',
    afterImg: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=700&q=80',
    timeSpent: '3.5 Hours',
    savingHighlight: 'Endless hot water & zero risk of tank rust rupture'
  }
];

export const FAQS: FAQItem[] = [
  {
    category: 'emergency',
    question: 'How fast does EasyFix respond to plumbing emergencies?',
    answer: 'Hemanth and his team dispatch fully equipped mobile service vehicles 24 hours a day, 7 days a week, 365 days a year. Our average arrival time for critical emergencies (burst pipes, major sewage backups, heavy leaks) is 30 to 60 minutes anywhere within our local service zones.'
  },
  {
    category: 'emergency',
    question: 'What should I do right now while waiting for the plumber to arrive?',
    answer: 'First, locate your main water shutoff valve (usually where the main pipe enters your home or near the water meter) and turn it completely clockwise until it stops. Second, open an outdoor tap or lowest faucet to relieve remaining pressure. Third, turn off power at the circuit breaker if standing water is anywhere near electrical sockets.'
  },
  {
    category: 'pricing',
    question: 'Do you provide upfront flat quotes before starting the repair?',
    answer: 'Yes, absolutely. EasyFix operates strictly on 100% Upfront Written Quotes. We examine the issue in person, explain the exact problem, and give you a firm, clear quote before starting any repair work. You approve the scope first, so there are never hidden travel charges or surprise billing hours.'
  },
  {
    category: 'general',
    question: 'Why do you use WhatsApp for booking and communication?',
    answer: 'WhatsApp is fast, direct, and connects you straight to Hemanth and our active dispatch team. You can snap a quick photo or video of your leaking pipe or fixture, share your live location or address with 1 tap, and get instant confirmation without waiting on hold with a call center.'
  },
  {
    category: 'general',
    question: 'Are EasyFix technicians vetted, experienced, and insured?',
    answer: 'Yes! Every EasyFix technician is background-checked, highly experienced, and trained to the highest craftsmanship standards. We maintain comprehensive insurance to guarantee complete peace of mind for every homeowner.'
  },
  {
    category: 'maintenance',
    question: 'What is the difference between simple drain snaking and hydro-jetting?',
    answer: 'A mechanical drain snake punches a hole through a blockage to restore basic flow, but often leaves grease and soap residue on pipe walls. Hydro-jetting uses surgical-grade 4,000 PSI spinning water jets to completely scrub the entire circumference of the pipe spotless, eliminating all build-up and preventing clogs from returning.'
  },
  {
    category: 'pricing',
    question: 'What guarantees and warranties do you offer on plumbing repairs?',
    answer: 'All our standard repairs come with a 1-Year 100% Craftsmanship and Parts Warranty. If the repaired fixture or pipe joint leaks again within 365 days, our technician will return and fix it completely free of charge.'
  },
  {
    category: 'maintenance',
    question: 'How do I know if my water heater needs to be repaired or fully replaced?',
    answer: 'If your water heater is relatively new and has a failed heating element, thermostat, or pilot valve, repair is typically the best solution. However, if the tank body itself is leaking from the bottom, water has heavy rust, or the unit is over 8-10 years old, replacing it is safer to prevent catastrophic flooding.'
  }
];

export const ESTIMATOR_ISSUES = [
  { id: 'drain', name: 'Clogged Drain / Sink / Shower', time: '45 mins', complexity: 'Quick Fix', scope: 'Motorized auger snake clearing & flow test' },
  { id: 'toilet', name: 'Toilet Overflow, Running or Clogged', time: '30-60 mins', complexity: 'Standard', scope: 'Flapper, valve, wax seal rebuild or auger unclog' },
  { id: 'burst-leak', name: 'Emergency Active Pipe Leak / Burst', time: '1-2 hrs', complexity: 'Emergency Urgent', scope: 'Pressure isolation, pipe cut, solder/crimp new segment' },
  { id: 'water-heater-rep', name: 'Water Heater Diagnostic & Repair', time: '1-3 hrs', complexity: 'Specialized', scope: 'Thermostat, element, thermocouple or valve service' },
  { id: 'water-heater-new', name: 'New Water Heater Replacement (Tank)', time: '3-4 hrs', complexity: 'Installation', scope: 'Old unit haul away, new tank install & safety relief setup' },
  { id: 'tankless', name: 'Tankless Endless Water Heater Install', time: '4-6 hrs', complexity: 'Advanced', scope: 'High-flow gas/electric supply & continuous hot water mount' },
  { id: 'sewer-main', name: 'Main Sewer Line Backup & Hydro-Jet', time: '1-3 hrs', complexity: 'Heavy Duty', scope: '4,000 PSI jetter scour & full HD video inspection' },
  { id: 'faucet', name: 'Dripping Faucet / Shower Valve Fix', time: '45-90 mins', complexity: 'Standard', scope: 'Ceramic cartridge replacement & water pressure calibration' },
  { id: 'garbage-disp', name: 'Garbage Disposal Repair / Replace', time: '45 mins', complexity: 'Standard', scope: 'Jam clearance, motor replacement or fresh installation' }
];
