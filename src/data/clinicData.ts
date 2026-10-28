export interface FAQItem {
  question: string;
  answer: string;
}

export interface ServiceDetail {
  slug: string;
  title: string;
  shortDesc: string; // approximately 10-18 words
  iconName: string;
  heroSnippet: string;
  overview: string[];
  steps: { title: string; description: string }[];
  suitability: { suitableFor: string[]; notSuitableFor: string[] };
  aftercare: string[];
  faqs: [FAQItem, FAQItem, FAQItem]; // Exactly 3 FAQs required
  image: string;
}

export interface ClinicConfig {
  name: string;
  tagline: string;
  phone: string;
  phoneDisplay: string;
  whatsapp: string;
  whatsappDisplay: string;
  email: string;
  address: {
    area: string;
    city: string;
    state: string;
    country: string;
    landmarkNote: string;
    pinCodeNote: string;
  };
  hours: {
    weekdays: string;
    saturday: string;
    sunday: string;
  };
  doctor: {
    name: string;
    credentials: string;
    designation: string;
    registrationNotice: string;
    bioParagraphs: string[];
  };
}

export const clinicConfig: ClinicConfig = {
  name: "Dental Clinic",
  tagline: "Comprehensive dental care with gentle hands in Bhandup West",
  phone: "+911234567890",
  phoneDisplay: "+91 12345 67890",
  whatsapp: "911234567890",
  whatsappDisplay: "+91 12345 67890",
  email: "info@dentalclinic.com",
  address: {
    area: "Bhandup West",
    city: "Mumbai",
    state: "Maharashtra",
    country: "India",
    landmarkNote: "Centrally accessible in Bhandup West, close to railway and transit routes.",
    pinCodeNote: "Exact clinic premises and postal code verified upon confirmed appointment request.",
  },
  hours: {
    weekdays: "10:00 AM – 1:30 PM & 5:00 PM – 9:00 PM",
    saturday: "10:00 AM – 1:30 PM & 5:00 PM – 9:00 PM",
    sunday: "Prior Appointment Only",
  },
  doctor: {
    name: "Dr. A. Sharma",
    credentials: "BDS, Dental Surgeon",
    designation: "Consulting Dental Surgeon",
    registrationNotice: "State Dental Council Registration details verified upon in-person clinic consultation.",
    bioParagraphs: [
      "Welcome to our practice. Our clinical philosophy focuses on gentle, conservative dentistry that prioritizes natural tooth preservation and patient comfort.",
      "Every treatment plan is explained clearly before beginning any procedure, ensuring transparent discussions regarding options, expected visit counts, and preventive home care.",
      "The clinic adheres strictly to multi-stage sterilization protocols, disposable barriers, and modern diagnostic standards to deliver dependable healthcare to families across Bhandup West.",
    ],
  },
};

// Exactly 6 FAQs for the Homepage as strictly required by prompt
export const homepageFaqs: FAQItem[] = [
  {
    question: "How do I book an appointment at the clinic?",
    answer: "You can submit an appointment request through our website booking form, call our front desk directly at +91 12345 67890, or message us on WhatsApp. Our reception team will get in touch to confirm your convenient date and time slot.",
  },
  {
    question: "What are the consultation charges?",
    answer: "A standard clinical consultation involves an in-depth oral examination, evaluation of your dental concerns, and a transparent discussion of recommended treatment plans. Current consultation fees are shared transparently prior to your appointment confirmation.",
  },
  {
    question: "What dental treatments are offered at the clinic?",
    answer: "We provide comprehensive general and specialized dental services, including root canal therapy, dental implants, teeth cleaning and scaling, braces and clear aligners, teeth whitening, crowns and bridges, gum therapy, tooth extractions, and pediatric dentistry.",
  },
  {
    question: "What are your clinic opening hours?",
    answer: "We are open Monday through Saturday from 10:00 AM to 1:30 PM for morning sessions and from 5:00 PM to 9:00 PM for evening sessions. Sunday consultations are scheduled strictly by prior appointment.",
  },
  {
    question: "Do you provide dental care for young children?",
    answer: "Yes, we offer gentle pediatric dental care including routine check-ups, cavity prevention, fluoride applications, pit and fissure sealants, and habitual guidance in a patient, welcoming environment designed to keep young patients at ease.",
  },
  {
    question: "Where is the clinic located in Bhandup West?",
    answer: "Our clinic is located in Bhandup West, Mumbai, conveniently accessible from the Bhandup railway station and LBS Marg. Detailed directions and nearby transit landmarks are sent to patients alongside their appointment confirmation.",
  },
];

// 10 Main Dental Treatments — each has exactly 3 FAQs and 10-18 words shortDesc
export const servicesData: ServiceDetail[] = [
  {
    slug: "root-canal-treatment",
    title: "Root Canal Treatment",
    shortDesc: "Pain-relieving treatment to save infected or damaged natural teeth through careful cleaning and biocompatible sealing.", // 15 words
    iconName: "ShieldCheck",
    image: "/images/services/root-canal.jpg",
    heroSnippet: "Conservative endodontic therapy designed to eliminate infection and preserve your natural tooth structure.",
    overview: [
      "Root canal treatment (endodontic therapy) is performed when the soft inner pulp tissue of a tooth becomes inflamed or infected due to deep decay, repeated dental procedures, or traumatic cracked tooth injuries.",
      "By removing the infected pulp tissue, disinfecting the internal root canals, and sealing the space hermetically, we relieve dental pain and protect the tooth from future bacterial invasion without necessitating extraction.",
    ],
    steps: [
      {
        title: "Clinical & Radiographic Examination",
        description: "Digital dental X-rays assess the root anatomy, depth of infection, and bone condition surrounding the tooth.",
      },
      {
        title: "Local Anesthesia & Isolation",
        description: "The area is completely numbed for pain-free treatment, and a hygienic rubber dam barrier isolates the working tooth.",
      },
      {
        title: "Canal Cleaning & Shaping",
        description: "Precision rotary endodontic files gently clean infected tissue and disinfect the root canals with antimicrobial solutions.",
      },
      {
        title: "Biocompatible Sealing (Obturation)",
        description: "The shaped canals are filled with gutta-percha and sealer, followed by a durable core filling and subsequent crown placement.",
      },
    ],
    suitability: {
      suitableFor: [
        "Persistent toothache or lingering sensitivity to hot and cold substances",
        "Spontaneous throbbing pain that disturbs sleep",
        "Visible swelling or tenderness in the gum surrounding a specific tooth",
        "Teeth with deep cavities extending into the dental pulp",
      ],
      notSuitableFor: [
        "Teeth with severe vertical root fractures reaching below the bone margin",
        "Teeth with insufficient remaining coronal structure to support a functional restoration",
      ],
    },
    aftercare: [
      "Avoid chewing hard or crunchy foods on the treated tooth until the permanent crown is fully fitted.",
      "Mild tenderness around the tooth ligament for 24–48 hours is normal and managed with prescribed analgesics.",
      "Maintain normal brushing and gentle flossing around the temporary filling area.",
      "Return promptly for the scheduled permanent crown measurement appointment.",
    ],
    faqs: [
      {
        question: "Is root canal treatment painful?",
        answer: "With modern local anesthesia and rotary technology, root canal therapy is generally no more uncomfortable than receiving a routine filling. The procedure aims to eliminate pain caused by pulpal infection.",
      },
      {
        question: "How many clinic visits does a root canal take?",
        answer: "Many uncomplicated cases can be completed in a single 45-to-60-minute visit. If severe periapical infection is present, two visits with an intermediate antiseptic medication may be recommended.",
      },
      {
        question: "Is a dental crown mandatory after a root canal?",
        answer: "For back molar and premolar teeth subjected to heavy chewing pressures, a protective crown is strongly advised to prevent future tooth fracture and ensure long-term clinical success.",
      },
    ],
  },
  {
    slug: "dental-implants",
    title: "Dental Implants",
    shortDesc: "Permanent titanium roots that restore missing teeth with natural-looking crowns for comfortable chewing and speech.", // 15 words
    iconName: "Anchor",
    image: "/images/services/dental-implants.jpg",
    heroSnippet: "Long-lasting, stable tooth replacements that integrate naturally with your jawbone.",
    overview: [
      "Dental implants represent the modern gold standard for replacing single or multiple missing teeth. An implant consists of a medical-grade titanium post placed into the jawbone, functioning as a sturdy artificial root.",
      "Once osseointegration occurs, a custom porcelain or zirconia crown is securely attached, restoring natural bite strength, facial aesthetics, and oral functionality without altering adjacent healthy teeth.",
    ],
    steps: [
      {
        title: "Diagnostic CBCT & Treatment Planning",
        description: "3D radiographic imaging assesses bone density, height, and anatomical landmarks to plan precise implant positioning.",
      },
      {
        title: "Implant Fixture Placement",
        description: "A minor, sterile surgical procedure places the titanium fixture into the prepared site under local anesthesia.",
      },
      {
        title: "Healing & Osseointegration",
        description: "The bone integrates with the titanium surface over 8 to 16 weeks, forming a solid, permanent biological foundation.",
      },
      {
        title: "Abutment & Custom Crown Delivery",
        description: "A customized connecting abutment and natural-looking ceramic crown are securely fixed to complete the restoration.",
      },
    ],
    suitability: {
      suitableFor: [
        "Adults with one or more missing teeth seeking a permanent non-removable solution",
        "Patients wanting to preserve adjacent natural teeth without bridge grinding",
        "Individuals experiencing instability or discomfort with removable dentures",
        "Patients with adequate jawbone density or willingness for bone augmentation",
      ],
      notSuitableFor: [
        "Growing adolescents whose jawbones have not fully developed",
        "Patients with uncontrolled systemic conditions like advanced diabetes or recent radiation therapy without medical clearance",
      ],
    },
    aftercare: [
      "Consume soft, lukewarm foods for the first 48 hours following surgical placement.",
      "Refrain from vigorous spitting or drinking through straws during the initial healing period.",
      "Practice meticulous plaque control using soft brushes, interdental aids, and prescribed chlorhexidine rinses.",
      "Attend scheduled radiographic follow-ups to monitor bone stability and tissue health.",
    ],
    faqs: [
      {
        question: "How long do dental implants typically last?",
        answer: "With thorough daily oral hygiene, regular professional cleanings, and non-smoking habits, dental implants can function reliably for decades or even a lifetime.",
      },
      {
        question: "What if I do not have enough jawbone for an implant?",
        answer: "If bone loss has occurred following tooth loss, minor bone grafting or sinus lift procedures can often reconstruct sufficient bone volume prior to or during implant placement.",
      },
      {
        question: "Is dental implant surgery uncomfortable?",
        answer: "The procedure is performed under gentle local anesthesia, and patients typically report only mild soreness for 2–3 days post-surgery, comparable to a routine tooth extraction.",
      },
    ],
  },
  {
    slug: "teeth-cleaning",
    title: "Teeth Cleaning",
    shortDesc: "Gentle ultrasonic scaling and polishing to remove plaque, tartar, and surface stains for healthier gums.", // 15 words
    iconName: "Sparkles",
    image: "/images/services/teeth-cleaning.jpg",
    heroSnippet: "Professional ultrasonic scaling and polishing to protect your gums and maintain fresh breath.",
    overview: [
      "Even with diligent daily brushing and flossing, mineralized bacterial deposits known as calculus or tartar accumulate in hard-to-reach areas around teeth and beneath the gumline.",
      "Professional dental scaling uses gentle ultrasonic vibrations and water flow to remove stubborn calculus, followed by prophylaxis polishing to smooth tooth surfaces, prevent gingivitis, and eliminate superficial stains.",
    ],
    steps: [
      {
        title: "Periodontal Assessment",
        description: "Visual and periodontal probe examination to evaluate gum firmness, pocket depths, and tartar accumulation.",
      },
      {
        title: "Ultrasonic Scaling",
        description: "Fine ultrasonic tips gently oscillate with cooling water to dislodge hardened calculus from tooth surfaces safely.",
      },
      {
        title: "Subgingival Debridement",
        description: "Careful fine-hand scaling cleans reachable subgingival areas to eliminate bacterial irritants causing gum swelling.",
      },
      {
        title: "Prophylaxis Polishing & Oral Hygiene Advice",
        description: "Specialized polishing paste removes residual stains, followed by personalized brushing and flossing technique guidance.",
      },
    ],
    suitability: {
      suitableFor: [
        "Every adult and adolescent recommended for routine 6-month preventive maintenance",
        "Individuals noticing gum bleeding while brushing or flossing",
        "Patients experiencing persistent bad breath (halitosis) or visible yellow tartar deposits",
        "Individuals with dietary tea, coffee, or tobacco surface stains",
      ],
      notSuitableFor: [
        "Patients requiring advanced surgical periodontics (who will be guided through deep periodontal therapy instead)",
      ],
    },
    aftercare: [
      "Avoid intensely staining foods and beverages (like dark coffee or turmeric-heavy curries) for 2 to 3 hours after polishing.",
      "Mild thermal sensitivity for 24 hours is common and resolves as gums settle.",
      "Continue brushing twice daily with a soft-bristled brush and clean between teeth with dental floss.",
      "Schedule your next routine preventive dental check-up in six months.",
    ],
    faqs: [
      {
        question: "Does professional teeth cleaning weaken or loosen teeth?",
        answer: "No. Professional ultrasonic scaling removes harmful bacterial tartar that erodes supporting bone. It does not scrape away healthy tooth enamel or cause teeth to become loose.",
      },
      {
        question: "How often should I get my teeth professionally cleaned?",
        answer: "Most dental guidelines recommend professional scaling and examination every six months. Patients with chronic gum disease may benefit from 3-to-4-month intervals.",
      },
      {
        question: "Will teeth cleaning make my teeth whiter?",
        answer: "Scaling and polishing remove extrinsic stains from tea, coffee, and food, restoring your natural tooth shade. For deeper intrinsic discoloration, professional teeth whitening is recommended.",
      },
    ],
  },
  {
    slug: "braces-and-aligners",
    title: "Braces & Aligners",
    shortDesc: "Correct crooked teeth, bite alignment, and smile spacing using metal, ceramic, or invisible clear aligners.", // 15 words
    iconName: "Smile",
    image: "/images/services/orthodontics.jpg",
    heroSnippet: "Orthodontic solutions for children, teens, and adults to achieve balanced, healthy dental alignment.",
    overview: [
      "Orthodontic treatment corrects malaligned teeth, crowding, unwanted spacing, and bite irregularities such as overbites or crossbites. Straight teeth are not only aesthetically pleasing but also significantly easier to keep clean and free of gum disease.",
      "We offer both traditional orthodontic appliances (metal and aesthetic ceramic brackets) and modern clear aligner therapy, tailored to your clinical requirements, lifestyle, and aesthetic preferences.",
    ],
    steps: [
      {
        title: "Orthodontic Evaluation & Records",
        description: "Digital photographs, study models, and orthopantomogram (OPG) radiographs analyze jaw alignment and dental angles.",
      },
      {
        title: "Personalized Treatment Plan",
        description: "A comprehensive roadmap outlines expected movement trajectory, appliance choices, and estimated active treatment duration.",
      },
      {
        title: "Appliance Placement or Aligner Fitting",
        description: "Brackets are bonded onto enamel or custom series of transparent aligner trays are handed over with wearing protocols.",
      },
      {
        title: "Periodic Adjustments & Retention Phase",
        description: "Routine 4-to-6 week checks monitor movement. Following active treatment, retainers maintain the newly aligned smile.",
      },
    ],
    suitability: {
      suitableFor: [
        "Children and adolescents aged 11 and above with crowded or misaligned permanent dentition",
        "Adults wishing to correct crowding, gaps, or rotated teeth discreetly",
        "Patients with bite discrepancies causing uneven tooth wear or chewing difficulty",
      ],
      notSuitableFor: [
        "Patients with active, untreated gum disease or rampant decay until oral health is stabilized",
        "Patients unable to commit to wearing removable aligners 20–22 hours every single day",
      ],
    },
    aftercare: [
      "For braces: avoid sticky candies, hard nuts, and biting whole apples directly with front teeth.",
      "Use orthodontic toothbrushes and interdental proxy brushes to clean around brackets thoroughly.",
      "For aligners: remove trays only while eating and drinking hot or colored liquids.",
      "Wear post-treatment retainers diligently as instructed by your dentist to prevent orthodontic relapse.",
    ],
    faqs: [
      {
        question: "Can adults get braces or clear aligners?",
        answer: "Yes. Healthy teeth can be gently moved at virtually any age. Many adult patients choose ceramic brackets or clear aligners for their subtle, discreet appearance.",
      },
      {
        question: "How long does orthodontic treatment take?",
        answer: "Treatment time ranges between 6 to 24 months depending on individual bite complexity, degree of crowding, and patient compliance with appointments and aligner wear.",
      },
      {
        question: "Do braces cause pain?",
        answer: "You may feel mild pressure or soreness for 2 to 4 days after braces are initially placed or adjusted. This is normal and indicates teeth are beginning their gentle physiological movement.",
      },
    ],
  },
  {
    slug: "teeth-whitening",
    title: "Teeth Whitening",
    shortDesc: "Safe, supervised clinical whitening procedures to brighten stained or discolored teeth without harming natural enamel.", // 15 words
    iconName: "Sun",
    image: "/images/services/teeth-whitening.jpg",
    heroSnippet: "Clinically monitored in-office and take-home whitening to refresh dull, discolored tooth shades safely.",
    overview: [
      "Enamel discoloration naturally develops over time due to aging, dietary chromogens (tea, coffee, red sauces, spices), or past medication intake. Over-the-counter abrasive pastes often wear down enamel without producing deep color change.",
      "Our in-clinic professional whitening employs calibrated, dental-grade bleaching agents under gum barrier isolation to oxidize deep-seated organic pigments safely, brightening teeth comfortably without structural damage.",
    ],
    steps: [
      {
        title: "Shade Assessment & Oral Check",
        description: "Current tooth shade is recorded on a standard dental shade guide, ensuring no active cavities or exposed roots are present.",
      },
      {
        title: "Protective Gingival Barrier",
        description: "A light-cured protective barrier is applied along the gum margins to prevent whitening agent contact with delicate soft tissues.",
      },
      {
        title: "Whitening Gel Application",
        description: "Concentrated whitening gel is placed on the enamel surface in controlled 15-to-20-minute cycles.",
      },
      {
        title: "Post-Treatment Conditioning",
        description: "Gels are thoroughly rinsed, barriers removed, and a desensitizing remineralization agent is applied for comfort.",
      },
    ],
    suitability: {
      suitableFor: [
        "Patients with extrinsic and mild intrinsic yellow-brown enamel staining",
        "Individuals preparing for significant personal milestones or weddings",
        "Patients with healthy gums, sound restorations, and realistic cosmetic expectations",
      ],
      notSuitableFor: [
        "Pregnant or lactating mothers",
        "Teeth with existing dental crowns, porcelain veneers, or large front composite fillings (which do not bleach)",
        "Patients with severe untreated dentin hypersensitivity or visible gum recession",
      ],
    },
    aftercare: [
      "Follow the 'White Diet' for 48 hours: avoid dark gravies, turmeric, tea, coffee, colas, and tobacco.",
      "Use desensitizing toothpaste if temporary sensitivity to cold water occurs.",
      "Avoid extremely cold or hot beverages during the first 24 hours.",
      "Maintain consistent twice-daily brushing and routine dental hygiene check-ups to prolong results.",
    ],
    faqs: [
      {
        question: "Does teeth whitening damage tooth enamel?",
        answer: "When carried out under clinical supervision using approved materials, professional whitening safely lifts stains through oxidation without eroding or weakening the mineral structure of enamel.",
      },
      {
        question: "How long do teeth whitening results last?",
        answer: "Results typically last from 6 months to 2 years, depending largely on dietary habits, consumption of staining foods and beverages, and personal oral hygiene maintenance.",
      },
      {
        question: "Will whitening cause permanent tooth sensitivity?",
        answer: "No. Any sensitivity that occurs is temporary and generally resolves within 24 to 48 hours following the procedure, assisted by our desensitizing protocol.",
      },
    ],
  },
  {
    slug: "crowns-and-bridges",
    title: "Crowns & Bridges",
    shortDesc: "Custom ceramic and zirconia restorations to protect fractured teeth or bridge empty gaps between teeth.", // 15 words
    iconName: "Layers",
    image: "/images/services/crowns-bridges.jpg",
    heroSnippet: "High-strength ceramic and zirconia restorations engineered for durability, comfort, and natural aesthetics.",
    overview: [
      "Dental crowns (caps) cover and reinforce compromised teeth weakened by large fillings, extensive decay, or root canal therapy. They replicate natural dental anatomy and withstand full chewing forces.",
      "Dental bridges replace one or more missing teeth by anchoring artificial pontics to adjacent prepared natural teeth or implants, restoring continuous dental arches and preventing adjacent teeth from drifting out of position.",
    ],
    steps: [
      {
        title: "Tooth Preparation & Shaping",
        description: "The tooth is shaped under local anesthesia to create adequate clearance for the restorative ceramic material.",
      },
      {
        title: "Precision Impression & Shade Matching",
        description: "Accurate physical or digital impressions are captured, and a shade match is chosen to blend with adjacent natural teeth.",
      },
      {
        title: "Temporary Crown Placement",
        description: "A comfortable provisional acrylic crown is bonded to protect the prepared tooth while the lab crafts the final piece.",
      },
      {
        title: "Permanent Cementation",
        description: "The completed crown or bridge is checked for bite precision, contact tightness, and aesthetics before permanent bonding.",
      },
    ],
    suitability: {
      suitableFor: [
        "Teeth that have undergone root canal treatment requiring structural reinforcement",
        "Teeth with extensive structural fractures or large failing amalgam restorations",
        "Patients missing a single tooth flanked by healthy, stable supporting teeth",
        "Severely worn down teeth requiring occlusal rehabilitation",
      ],
      notSuitableFor: [
        "Teeth with unstable periodontal support or severe mobility without prior gum stabilization",
      ],
    },
    aftercare: [
      "Avoid eating hard or sticky foods for the first 24 hours while permanent cement fully cures.",
      "Floss regularly, using bridge threaders or interdental brushes under artificial bridge pontics.",
      "Contact the clinic if the bite feels high or uncomfortable when chewing.",
      "Attend annual check-ups to monitor crown margins and gum integrity.",
    ],
    faqs: [
      {
        question: "What is the difference between ceramic and zirconia crowns?",
        answer: "Ceramic crowns provide exceptional translucency ideal for front teeth. Zirconia offers outstanding fracture resistance and strength, making it ideal for back molars that endure heavy chewing loads.",
      },
      {
        question: "How long do dental crowns last?",
        answer: "With good oral hygiene and regular dental check-ups, high-quality crowns typically last between 10 to 15 years or longer.",
      },
      {
        question: "Does getting a crown hurt?",
        answer: "The tooth preparation process is carried out under local anesthesia, ensuring you experience no pain during the procedure. Mild gum tenderness for a day or two is easily managed.",
      },
    ],
  },
  {
    slug: "gum-treatment",
    title: "Gum Treatment",
    shortDesc: "Deep periodontal cleaning and gum therapy to treat bleeding, inflammation, and chronic gum sensitivity effectively.", // 15 words
    iconName: "HeartPulse",
    image: "/images/services/gum-treatment.jpg",
    heroSnippet: "Specialized periodontal care to stop bleeding, manage gum recession, and protect supporting jawbone.",
    overview: [
      "Periodontal disease begins with gingivitis (gum inflammation) caused by bacterial plaque. If left unmanaged, it advances into periodontitis, destroying the bone and ligament fibers that anchor teeth in place.",
      "Our gum treatments include subgingival scaling, root planing, local antimicrobial irrigation, and supportive periodontal therapy aimed at controlling infection, reducing pocket depths, and halting bone loss.",
    ],
    steps: [
      {
        title: "Comprehensive Periodontal Charting",
        description: "Measurement of periodontal pocket depths, bleeding on probing, and tooth mobility to diagnose disease severity.",
      },
      {
        title: "Deep Root Planing (Curettage)",
        description: "Ultrasonic and hand curettes smooth root surfaces, removing toxic bacterial endotoxins and embedded calculus.",
      },
      {
        title: "Antimicrobial Irrigation",
        description: "Deep pocket spaces are irrigated with therapeutic antimicrobial solutions to reduce subgingival bacterial flora.",
      },
      {
        title: "Re-evaluation & Supportive Therapy",
        description: "Gums are reassessed after 4 to 6 weeks to evaluate tissue re-attachment and plan customized ongoing maintenance.",
      },
    ],
    suitability: {
      suitableFor: [
        "Patients with bleeding gums during brushing or spontaneous gum bleeding",
        "Persistent red, tender, or swollen gum margins",
        "Chronic bad breath unresponsive to mouthwashes",
        "Individuals with gum recession or loosening of teeth",
      ],
      notSuitableFor: [
        "Smokers unwilling to reduce tobacco usage (as smoking drastically impairs periodontal tissue healing)",
      ],
    },
    aftercare: [
      "Rinse with warm salt water or prescribed chlorhexidine mouthwash twice daily for one week.",
      "Use ultra-soft periodontal brushes and interdental cleaners gently between teeth.",
      "Expect mild sensitivity to temperature changes for several days as inflammation resolves.",
      "Stick faithfully to recommended 3-to-4-month periodontal maintenance check-ups.",
    ],
    faqs: [
      {
        question: "Can periodontitis and gum disease be cured?",
        answer: "Early gingivitis is completely reversible. Advanced periodontitis cannot restore lost bone naturally, but its progression can be successfully stopped and managed with appropriate periodontal care and maintenance.",
      },
      {
        question: "Why do my gums bleed when I brush?",
        answer: "Bleeding is the primary clinical sign of active gum inflammation caused by bacterial plaque accumulation along the gumline. A professional cleaning and periodontal evaluation is recommended.",
      },
      {
        question: "Is deep gum cleaning painful?",
        answer: "Deep cleaning (root planing) is typically performed under local anesthesia to ensure complete comfort while cleaning beneath the gumline.",
      },
    ],
  },
  {
    slug: "tooth-extraction",
    title: "Tooth Extraction",
    shortDesc: "Gentle, comfortable removal of severely decayed, broken, or unrestorable teeth under local anesthesia.", // 14 words
    iconName: "Activity",
    image: "/images/services/extraction.jpg",
    heroSnippet: "Conservative, gentle extractions carried out with meticulous care when a tooth cannot be saved.",
    overview: [
      "Our primary clinical goal is always tooth preservation. However, when a tooth is damaged beyond repair by catastrophic decay, vertical root fractures, or advanced periodontal bone loss, extraction becomes necessary.",
      "Extractions are performed gently under profound local anesthesia, prioritizing tissue preservation and patient comfort to prepare the site for future tooth replacement options like implants or bridges.",
    ],
    steps: [
      {
        title: "Clinical & Radiographic Assessment",
        description: "X-rays evaluate root curvature, relation to maxillary sinuses or alveolar nerves, and surrounding bone density.",
      },
      {
        title: "Profound Local Anesthesia",
        description: "Targeted anesthetic ensures the entire area is completely numb before any instrument touches the tooth.",
      },
      {
        title: "Atraumatic Tooth Removal",
        description: "Specialized luxators gently expand the socket and elevate the tooth with minimal disturbance to surrounding bone.",
      },
      {
        title: "Socket Management & Gauze Pack",
        description: "The socket is gently curetted, checked for initial hemostasis, and a sterile pressure pack is positioned.",
      },
    ],
    suitability: {
      suitableFor: [
        "Teeth broken below the crestal bone level that cannot be restored with a crown",
        "Severe, unrestorable tooth decay involving the root bifurcation",
        "Extremely loose teeth resulting from terminal periodontal bone loss",
        "Teeth causing recurring severe facial infection where root canal therapy is not viable",
      ],
      notSuitableFor: [
        "Teeth that can be safely treated and restored using conservative endodontic and restorative procedures",
      ],
    },
    aftercare: [
      "Keep firm biting pressure on the sterile gauze pack for 45 to 60 minutes after leaving the clinic.",
      "Do NOT spit, rinse vigorously, drink through a straw, or smoke for 24 hours to protect the vital blood clot.",
      "Apply an external cold pack to the cheek for 10-minute intervals if mild swelling occurs.",
      "Eat soft, cool foods such as curd, dalia, or ice cream, and resume normal gentle brushing away from the socket.",
    ],
    faqs: [
      {
        question: "Does tooth extraction hurt?",
        answer: "No. The procedure is performed under effective local anesthesia. You will feel slight pressure during the procedure, but no sharp pain.",
      },
      {
        question: "What is a dry socket and how can I prevent it?",
        answer: "A dry socket occurs if the protective blood clot is dislodged before the site heals. You can prevent it by avoiding smoking, vigorous spitting, and drinking through a straw for 24 hours.",
      },
      {
        question: "How soon after an extraction can I replace the tooth?",
        answer: "Depending on socket condition and bone density, replacement options like dental implants or bridges can be planned either immediately or after 8 to 12 weeks of bone healing.",
      },
    ],
  },
  {
    slug: "wisdom-tooth-treatment",
    title: "Wisdom Tooth Treatment",
    shortDesc: "Specialized evaluation and surgical care for impacted or painful third molars causing swelling and discomfort.", // 15 words
    iconName: "AlertCircle",
    image: "/images/services/wisdom-tooth.jpg",
    heroSnippet: "Gentle assessment and minor oral surgical care for painful, impacted, or infected third molars.",
    overview: [
      "Wisdom teeth (third molars) typically erupt between the ages of 17 and 25. Because modern jaws often lack sufficient space, these teeth frequently become impacted, erupting partially or at abnormal angles.",
      "Impacted wisdom teeth can cause recurrent pericoronitis (painful gum flap infections), decay in neighboring molar teeth, cyst formation, and jaw stiffness. Timely clinical evaluation determines whether conservative management or gentle surgical removal is required.",
    ],
    steps: [
      {
        title: "Panoramic OPG Radiograph",
        description: "Full-mouth panoramic X-ray maps the wisdom tooth's impaction angle and proximity to the inferior alveolar nerve.",
      },
      {
        title: "Local Anesthesia & Site Access",
        description: "The area is completely numbed, and a small incision gently reflects gum tissue overlying the impacted tooth.",
      },
      {
        title: "Controlled Sectioning & Delivery",
        description: "The tooth is sectioned into smaller fragments using water-cooled surgical instruments, ensuring safe, bone-preserving removal.",
      },
      {
        title: "Sterile Suture Placement",
        description: "Dissolvable or fine sutures close the surgical site cleanly to facilitate comfortable primary healing.",
      },
    ],
    suitability: {
      suitableFor: [
        "Recurring pain, swelling, or foul taste around the back lower or upper jaws",
        "Food impaction causing dental decay between the wisdom tooth and adjacent second molar",
        "Partially erupted wisdom teeth causing difficulty opening the mouth (trismus)",
        "Orthodontic recommendations to prevent crowding or dental shift",
      ],
      notSuitableFor: [
        "Completely erupted, healthy, functional wisdom teeth with healthy surrounding gums and good hygiene access",
      ],
    },
    aftercare: [
      "Keep the sterile gauze pad in place with steady biting pressure for 1 hour.",
      "Apply ice packs externally on the cheek during the first 24 hours to minimize post-operative swelling.",
      "Stick to cool, soft foods and avoid hot, spicy, or crunchy foods for 3 to 4 days.",
      "Take prescribed antibiotic and anti-inflammatory medications strictly as directed.",
    ],
    faqs: [
      {
        question: "Do all wisdom teeth have to be removed?",
        answer: "No. If a wisdom tooth has erupted fully, is properly aligned, functional, free of decay, and can be cleaned effectively, removal is not necessary.",
      },
      {
        question: "How much swelling should I expect after wisdom tooth surgery?",
        answer: "Mild to moderate facial swelling is a normal body response that peaks at 48 hours and gradually subsides over 4 to 5 days, minimized with cold compresses and medication.",
      },
      {
        question: "When can I resume normal activities and work?",
        answer: "Most patients resume light desk work within 24 to 48 hours following wisdom tooth removal, while avoiding strenuous gym workouts or heavy lifting for 3 to 4 days.",
      },
    ],
  },
  {
    slug: "pediatric-dentistry",
    title: "Pediatric Dentistry",
    shortDesc: "Gentle, friendly oral healthcare, cavity prevention, and habit guidance tailored specifically for children and teenagers.", // 15 words
    iconName: "Baby",
    image: "/images/services/pediatric.jpg",
    heroSnippet: "Child-friendly dental visits designed to build positive habits and keep young smiles cavity-free.",
    overview: [
      "Early dental experiences shape a child's relationship with oral healthcare for life. Our pediatric dental approach focuses on creating a calm, positive, and non-threatening atmosphere for children from toddlers to adolescents.",
      "We emphasize preventive dentistry, including routine check-ups, topical fluoride varnish applications, dental sealants for deep molar grooves, habit-breaking appliances, and child-friendly cavity restorations.",
    ],
    steps: [
      {
        title: "Gentle Welcome & Acclimatization",
        description: "The child gets acquainted with the dental chair, instruments, and dental team through positive, playful interaction.",
      },
      {
        title: "Oral Health Examination",
        description: "A gentle check of erupting teeth, bite alignment, enamel strength, and early signs of childhood cavities.",
      },
      {
        title: "Preventive Treatment (Fluoride / Sealants)",
        description: "Application of protective fluoride varnish or painless dental pit and fissure sealants on vulnerable molars.",
      },
      {
        title: "Interactive Parent & Child Education",
        description: "Guidance for parents on diet, nighttime feeding habits, appropriate fluoride toothpaste quantity, and brushing technique.",
      },
    ],
    suitability: {
      suitableFor: [
        "Toddlers visiting the dentist for their first birthday or first tooth check",
        "Children with toothache, brown cavity spots, or sensitivity to sweet foods",
        "Kids needing protective sealants on newly erupted permanent first molars",
        "Children with habits like prolonged thumb sucking, tongue thrusting, or mouth breathing",
      ],
      notSuitableFor: [
        "Cases requiring deep general anesthesia in hospital settings (for which appropriate pediatric hospital referrals are guided)",
      ],
    },
    aftercare: [
      "Avoid eating or drinking for 30 minutes following topical fluoride varnish application.",
      "Encourage children to brush twice daily using a pea-sized amount of age-appropriate toothpaste under supervision.",
      "Limit sticky sugary snacks, candies, and sweetened fruit juices between meal times.",
      "Schedule routine pediatric dental visits every 6 months to track jaw growth and dental eruption.",
    ],
    faqs: [
      {
        question: "At what age should my child first visit the dentist?",
        answer: "Pediatric dental associations recommend bringing your child for their first dental visit around their first birthday or when their very first milk tooth erupts into the mouth.",
      },
      {
        question: "Why should we treat milk teeth if they will fall out anyway?",
        answer: "Milk teeth are crucial for proper chewing, speech development, and facial appearance. Crucially, they act as natural space maintainers guiding permanent teeth into their correct positions.",
      },
      {
        question: "What are dental pit and fissure sealants?",
        answer: "Sealants are painless, protective resin coatings painted onto the deep grooves of back molar teeth, sealing out food particles and bacteria to prevent childhood cavities.",
      },
    ],
  },
];
