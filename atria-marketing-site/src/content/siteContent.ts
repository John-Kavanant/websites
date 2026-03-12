export type Program = {
  slug: "rpm" | "rtm" | "ccm" | "cardiac";
  name: string;
  summary: string;
  definition: string;
  idealFor: string[];
  dataCaptured: string[];
  patientJourney: string[];
  providerWorkflow: string[];
  atriaResponsibilities: string[];
  cptTable: {
    code: string;
    description: string;
    frequency: string;
    useCase: string;
  }[];
  subStudies?: {
    name: string;
    description: string;
    cptReferences: {
      code: string;
      description: string;
      billingContext: string;
    }[];
  }[];
  complianceNotes: string[];
  faq: {
    question: string;
    answer: string;
  }[];
  outcomes: string[];
  workflow: string[];
  reimbursementNote: string;
};

export const audienceSegments = [
  "Multi-specialty clinics",
  "Cardiology practices",
  "Hospitals and health systems",
  "Independent physicians",
];

export const heroContent = {
  title: "End-to-End Remote Monitoring Built for Clinical Growth",
  subtitle:
    "Atria helps practices launch and scale RPM, RTM, CCM, and cardiac monitoring with complete operational support, compliant workflows, and measurable revenue potential.",
  ctaPrimary: "Book a Demo",
  ctaSecondary: "Explore Programs",
};

export const positioningPillars = [
  {
    title: "Clinical Outcomes",
    description:
      "Improve adherence, identify risk earlier, and keep patients engaged between visits.",
  },
  {
    title: "Operational Relief",
    description:
      "Our team handles care coordination, logistics, and technical support so your staff can focus on care.",
  },
  {
    title: "Revenue Enablement",
    description:
      "Support for compliant billing and documentation to unlock reimbursable monitoring services.",
  },
  {
    title: "Trust and Compliance",
    description:
      "Structured workflows and reporting designed for quality, transparency, and audit readiness.",
  },
];

export const endToEndOffering = [
  "Platform and program workflows",
  "Connected devices and activation",
  "Device logistics and replacements",
  "Care coordination operations",
  "24/7 patient and technical support",
  "Complete revenue cycle management",
];

export const executionLevers = [
  {
    title: "Enrollment Throughput",
    detail: "Move eligible patients from identification to activation with less operational delay.",
  },
  {
    title: "Adherence and Reading Days",
    detail: "Increase monitoring consistency with proactive engagement and support.",
  },
  {
    title: "Clinical Escalation Quality",
    detail: "Route concerning readings quickly and document interventions clearly.",
  },
  {
    title: "Billing Documentation Integrity",
    detail: "Align time, interaction, and activity evidence with reimbursement requirements.",
  },
];

export const competitorComparison = [
  { category: "Monitoring platform", typicalVendor: true, atria: true },
  { category: "Device provisioning", typicalVendor: "Limited", atria: true },
  { category: "Logistics and replacements", typicalVendor: "Partial", atria: true },
  { category: "Care coordination support", typicalVendor: false, atria: true },
  { category: "24/7 patient and technical support", typicalVendor: "Limited", atria: true },
  { category: "Revenue cycle management", typicalVendor: false, atria: true },
  { category: "Certified cardiac technicians", typicalVendor: false, atria: true },
  { category: "Staff onboarding and training", typicalVendor: "Basic", atria: true },
];

export const programs: Program[] = [
  {
    slug: "rpm",
    name: "Remote Patient Monitoring (RPM)",
    summary:
      "Track physiologic data such as blood pressure, glucose, and weight for chronic condition management.",
    definition:
      "RPM uses connected medical devices to collect physiologic readings from patients outside the clinic and transmit them to the care team for review and intervention.",
    idealFor: [
      "Patients with hypertension, diabetes, CHF, COPD, or other chronic conditions",
      "Practices needing continuous visibility between office visits",
      "Care teams focused on reducing avoidable exacerbations",
    ],
    dataCaptured: [
      "Blood pressure",
      "Blood glucose",
      "Weight",
      "Pulse and oxygen saturation (as program-configured)",
      "Reading consistency and trend signals",
    ],
    patientJourney: [
      "Patient is enrolled and receives pre-configured device(s)",
      "Patient takes readings at home with minimal technical steps",
      "Readings transmit automatically to platform",
      "Patient receives reminders and support when readings are missed",
    ],
    providerWorkflow: [
      "Care team monitors daily incoming readings and trends",
      "Abnormal values are triaged through escalation workflows",
      "Patient communication and intervention are documented",
      "Time and activity are captured for billing readiness",
    ],
    atriaResponsibilities: [
      "Enrollment support and patient onboarding",
      "Device logistics, replacement, and activation support",
      "24/7 patient and technical support",
      "Care coordination operations and documentation guidance",
      "Revenue cycle workflow support",
    ],
    cptTable: [
      {
        code: "99453",
        description: "Initial setup and patient education on device use",
        frequency: "Once per episode/patient setup",
        useCase: "Program start and onboarding",
      },
      {
        code: "99454",
        description: "Device supply and transmission period support",
        frequency: "Typically monthly (per payer criteria)",
        useCase: "Ongoing connected monitoring cycle",
      },
      {
        code: "99457",
        description: "First 20 minutes of remote monitoring management time",
        frequency: "Typically monthly",
        useCase: "Clinical staff review and interactive care management",
      },
      {
        code: "99458",
        description: "Additional 20-minute increment of monitoring management",
        frequency: "Typically monthly when criteria are met",
        useCase: "Extended review and management time",
      },
    ],
    complianceNotes: [
      "Patient consent and eligibility documentation should be completed before billing.",
      "Many payers require minimum monitoring-day thresholds for monthly supply codes.",
      "Interactive communication and documented management time are critical for service codes.",
      "Code usage varies by payer policy and local contractor guidance.",
    ],
    faq: [
      {
        question: "Do patients need to pair devices to a phone?",
        answer:
          "No. Atria supports pre-configured workflows where patients can take readings without complex pairing steps.",
      },
      {
        question: "Can we monitor more than one chronic condition?",
        answer:
          "Yes. RPM workflows support multi-condition monitoring as clinically appropriate.",
      },
    ],
    outcomes: [
      "Improved chronic disease control",
      "Early intervention based on vital trends",
      "Higher patient participation with reminders",
    ],
    workflow: [
      "Patient onboarding and consent",
      "Device shipment and activation",
      "Daily reading transmission and review",
      "Escalation for abnormal readings",
    ],
    reimbursementNote:
      "Supports Medicare-reimbursable RPM workflows when eligibility and documentation criteria are met.",
  },
  {
    slug: "rtm",
    name: "Remote Therapeutic Monitoring (RTM)",
    summary:
      "Monitor non-physiologic data including therapy adherence, symptoms, and patient-reported outcomes.",
    definition:
      "RTM tracks non-physiologic therapeutic data such as adherence, symptoms, and patient-reported outcomes to improve treatment response and continuity.",
    idealFor: [
      "Respiratory and musculoskeletal programs",
      "Behavioral or therapy-led care pathways",
      "Teams monitoring treatment adherence and symptom burden",
    ],
    dataCaptured: [
      "Therapy adherence signals",
      "Patient-reported outcomes",
      "Symptom severity trends",
      "Medication and treatment response indicators",
      "Program-specific questionnaires",
    ],
    patientJourney: [
      "Patient is enrolled into a therapy-focused monitoring pathway",
      "Patient submits outcomes and adherence data through configured workflow",
      "Care team reviews trends and flags intervention points",
      "Program engagement is reinforced through reminders and outreach",
    ],
    providerWorkflow: [
      "Monitor non-physiologic data and adherence patterns",
      "Review symptom changes and therapy response",
      "Conduct follow-up communication and document interventions",
      "Capture monitoring time and activity for reimbursement workflows",
    ],
    atriaResponsibilities: [
      "Program setup for specialty-specific RTM workflows",
      "Questionnaire and engagement orchestration",
      "Patient support and adherence follow-up",
      "Documentation and billing workflow support",
      "Operational analytics for care teams",
    ],
    cptTable: [
      {
        code: "98975",
        description: "Initial setup and patient education for RTM episode",
        frequency: "Once per setup episode",
        useCase: "RTM initiation and orientation",
      },
      {
        code: "98976/98977",
        description: "Device supply and data collection period (modality-dependent)",
        frequency: "Typically monthly (per payer rules)",
        useCase: "Ongoing RTM data collection cycle",
      },
      {
        code: "98980",
        description: "First 20 minutes of RTM treatment management",
        frequency: "Typically monthly",
        useCase: "Care-team monitoring and management activities",
      },
      {
        code: "98981",
        description: "Additional 20-minute increment of RTM management",
        frequency: "Typically monthly when criteria are met",
        useCase: "Extended monitoring and follow-up time",
      },
    ],
    complianceNotes: [
      "Document patient consent, care interactions, and treatment management time.",
      "Data-collection thresholds and frequency rules vary by payer.",
      "Program design should align with specialty-specific therapeutic goals.",
      "Billing logic should be validated with current payer and coding guidance.",
    ],
    faq: [
      {
        question: "How is RTM different from RPM?",
        answer:
          "RTM focuses on non-physiologic therapeutic data such as adherence and patient-reported outcomes, while RPM focuses on physiologic vitals.",
      },
      {
        question: "Can RTM support specialty pathways?",
        answer:
          "Yes. Atria workflows can be configured for respiratory, musculoskeletal, and other therapy-driven programs.",
      },
    ],
    outcomes: [
      "Better therapy adherence",
      "Visibility into response to treatment",
      "Stronger continuity for respiratory and musculoskeletal pathways",
    ],
    workflow: [
      "Program enrollment and baseline assessment",
      "Digital check-ins and symptom capture",
      "Care team follow-up and intervention",
      "Monthly monitoring and documentation",
    ],
    reimbursementNote:
      "RTM services can be billed when time, communication, and device requirements are satisfied.",
  },
  {
    slug: "ccm",
    name: "Chronic Care Management (CCM)",
    summary:
      "Coordinate longitudinal care for patients with multiple chronic conditions through structured monthly outreach.",
    definition:
      "CCM provides structured monthly care management for patients with multiple chronic conditions, supporting longitudinal planning, coordination, and intervention.",
    idealFor: [
      "Patients with multiple chronic conditions requiring ongoing coordination",
      "Practices building proactive between-visit care programs",
      "Teams standardizing care-plan documentation and outreach",
    ],
    dataCaptured: [
      "Care-plan activities and progress updates",
      "Monthly patient touchpoints and communication records",
      "Medication and problem-list management context",
      "Time spent on non-face-to-face care coordination",
      "Escalation or intervention documentation",
    ],
    patientJourney: [
      "Patient is consented and enrolled into CCM pathway",
      "Care plan is established and reviewed with the patient",
      "Monthly outreach and support are delivered",
      "Care plan updates and interventions are documented continuously",
    ],
    providerWorkflow: [
      "Maintain and update longitudinal care plan",
      "Coordinate monthly patient communication and support tasks",
      "Track and document management activities",
      "Prepare compliant records for billing and quality review",
    ],
    atriaResponsibilities: [
      "CCM workflow setup and operational design",
      "Care coordination process support",
      "Patient outreach and engagement operations",
      "Documentation integrity and time-capture support",
      "Program reporting for performance oversight",
    ],
    cptTable: [
      {
        code: "99490",
        description: "First 20 minutes of clinical staff CCM services",
        frequency: "Typically monthly",
        useCase: "Core non-face-to-face care management",
      },
      {
        code: "99439",
        description: "Each additional 20 minutes of CCM clinical staff time",
        frequency: "Typically monthly when criteria are met",
        useCase: "Extended CCM management activities",
      },
      {
        code: "99487",
        description: "Complex CCM, first 60 minutes",
        frequency: "Typically monthly when complexity criteria are met",
        useCase: "Higher-complexity chronic care coordination",
      },
      {
        code: "99489",
        description: "Each additional 30 minutes for complex CCM",
        frequency: "Typically monthly when criteria are met",
        useCase: "Extended complex CCM management",
      },
    ],
    complianceNotes: [
      "Document comprehensive care-plan elements and monthly care activities.",
      "Consent and continuity of management documentation are essential.",
      "Complex CCM codes require additional complexity and time criteria.",
      "Final billing decisions should be confirmed with payer and coding guidance.",
    ],
    faq: [
      {
        question: "Can CCM run alongside other monitoring programs?",
        answer:
          "It can, depending on payer policy and clinical appropriateness. Atria helps structure workflows to reduce overlap risk.",
      },
      {
        question: "What is the biggest CCM success factor?",
        answer:
          "Consistent monthly outreach with strong documentation quality and care-plan discipline.",
      },
    ],
    outcomes: [
      "Lower care fragmentation",
      "Improved care plan adherence",
      "Stronger continuity for high-risk patients",
    ],
    workflow: [
      "Eligibility validation and consent",
      "Comprehensive care plan setup",
      "Monthly outreach and care coordination",
      "Time capture and compliant documentation",
    ],
    reimbursementNote:
      "CCM documentation and monthly time capture are aligned to reimbursable care management services.",
  },
  {
    slug: "cardiac",
    name: "Cardiac Monitoring",
    summary:
      "Deliver MCT, Holter, and event monitoring with certified cardiac technicians and rapid report delivery.",
    definition:
      "Cardiac monitoring programs provide rhythm surveillance and event capture with specialist review workflows for timely interpretation and intervention.",
    idealFor: [
      "Patients requiring arrhythmia evaluation or rhythm surveillance",
      "Practices expanding cardiac diagnostics without new in-house staffing",
      "Teams needing faster turnaround for actionable findings",
    ],
    dataCaptured: [
      "Continuous or episodic rhythm data",
      "Triggered event recordings",
      "Symptom-correlated event markers",
      "Clinically reviewed rhythm summaries and reports",
      "Escalation and intervention logs",
    ],
    patientJourney: [
      "Patient receives monitoring device and usage guidance",
      "Rhythm data is captured according to monitoring modality",
      "Events and abnormalities are reviewed through technician workflows",
      "Results are delivered to provider with escalation where needed",
    ],
    providerWorkflow: [
      "Place order based on clinical indication",
      "Review incoming alerts and summary reports",
      "Act on urgent findings through escalation pathways",
      "Document interpretation and management decisions",
    ],
    atriaResponsibilities: [
      "Cardiac monitoring operations and technician support",
      "Device logistics and patient instruction coordination",
      "24/7 support workflows for urgent rhythm pathways",
      "Report delivery and documentation support",
      "Operational readiness for billing workflows",
    ],
    cptTable: [
      {
        code: "93224-93227",
        description: "Holter ECG recording, scanning, analysis, and physician interpretation family",
        frequency: "Per monitoring study episode",
        useCase: "Ambulatory rhythm evaluation by Holter pathway",
      },
      {
        code: "93228-93229",
        description: "Mobile cardiovascular telemetry recording, connection, and interpretation family",
        frequency: "Per telemetry episode and payer criteria",
        useCase: "Continuous near-real-time rhythm surveillance",
      },
      {
        code: "93268-93272",
        description: "External patient-activated event monitor recording and interpretation family",
        frequency: "Per event monitoring episode",
        useCase: "Intermittent symptom-correlated rhythm capture",
      },
      {
        code: "93797-93798",
        description: "Physician-supervised cardiac rehabilitation service family",
        frequency: "Per rehab session/program design",
        useCase: "Cardiac rehabilitation pathway services",
      },
    ],
    subStudies: [
      {
        name: "Holter Monitoring",
        description:
          "Continuous ambulatory ECG monitoring over a defined period to detect intermittent arrhythmias and correlate symptoms with rhythm findings.",
        cptReferences: [
          {
            code: "93224",
            description: "Holter service global pathway (recording + analysis + interpretation family)",
            billingContext: "Commonly used when global Holter components are billed together",
          },
          {
            code: "93225-93227",
            description: "Holter technical/professional component split family",
            billingContext: "Used when technical and interpretation components are billed separately",
          },
        ],
      },
      {
        name: "Mobile Cardiac Telemetry (MCT)",
        description:
          "Continuous telemetry-based rhythm monitoring with near-real-time data review and alert pathways for clinically significant arrhythmias.",
        cptReferences: [
          {
            code: "93228",
            description: "Telemetry interpretation/report component family reference",
            billingContext: "Used for professional review and reporting components by payer policy",
          },
          {
            code: "93229",
            description: "Telemetry technical connection and transmission component reference",
            billingContext: "Used for technical service pathway per payer requirements",
          },
        ],
      },
      {
        name: "Event Monitoring",
        description:
          "Patient-activated or auto-triggered event capture model for intermittent symptoms that may not appear during short office-based ECG windows.",
        cptReferences: [
          {
            code: "93268-93272",
            description: "External event monitoring recording/connection/interpretation family",
            billingContext: "Applied according to modality, component split, and payer rules",
          },
        ],
      },
      {
        name: "Cardiac Rehabilitation",
        description:
          "Structured, physician-supervised rehabilitation pathway after qualifying cardiac events to improve recovery, conditioning, and long-term outcomes.",
        cptReferences: [
          {
            code: "93797",
            description: "Physician-supervised cardiac rehab service without continuous ECG monitoring",
            billingContext: "Session-based pathway where ECG monitoring may not be continuously required",
          },
          {
            code: "93798",
            description: "Physician-supervised cardiac rehab service with continuous ECG monitoring",
            billingContext: "Session-based pathway with continuous ECG monitoring requirements",
          },
          {
            code: "G0422/G0423",
            description: "Intensive cardiac rehabilitation HCPCS references (when applicable)",
            billingContext: "Used in specific intensive rehab pathway scenarios per payer criteria",
          },
        ],
      },
    ],
    complianceNotes: [
      "Code selection depends on modality, episode duration, and documented medical necessity.",
      "Provider interpretation and report standards must match service requirements.",
      "Urgent findings should follow clear escalation and documentation pathways.",
      "Billing references should be validated with payer-specific rules.",
    ],
    faq: [
      {
        question: "Do you support MCT, Holter, and event workflows?",
        answer:
          "Yes. Atria supports multi-modality cardiac workflows with technician-backed operational processes.",
      },
      {
        question: "How quickly can care teams receive findings?",
        answer:
          "Workflows are designed for rapid review and timely report delivery, including urgent escalation when appropriate.",
      },
    ],
    outcomes: [
      "Faster arrhythmia detection",
      "Improved specialist-grade reporting",
      "Reliable cardiac support without expanding in-house staffing",
    ],
    workflow: [
      "Order review and indication validation",
      "Device setup and patient education",
      "24/7 rhythm monitoring by certified technicians",
      "Escalation and report turnaround to ordering provider",
    ],
    reimbursementNote:
      "Cardiac monitoring workflows support medically necessary documentation and coding readiness.",
  },
];

export const services = [
  {
    title: "Care Coordination",
    detail:
      "Patient enrollment, education, and ongoing clinical coordination to keep programs running smoothly.",
  },
  {
    title: "24/7 Patient Support",
    detail:
      "Round-the-clock support to resolve patient issues quickly and keep reading compliance high.",
  },
  {
    title: "Technical Support",
    detail:
      "Dedicated support for your staff and platform operations to reduce downtime and friction.",
  },
  {
    title: "Certified Cardiac Technicians",
    detail:
      "Specialized cardiac professionals monitor rhythms and escalate critical findings promptly.",
  },
  {
    title: "Device Logistics",
    detail:
      "End-to-end management of inventory, shipping, replacements, and device lifecycle operations.",
  },
  {
    title: "End-to-End Billing Services",
    detail:
      "Compliant billing workflows, documentation guidance, and reimbursement-focused support.",
  },
  {
    title: "Staff Training",
    detail:
      "Hands-on training and playbooks to speed implementation and improve team confidence.",
  },
  {
    title: "Patient Engagement",
    detail:
      "Proactive reminders and outreach to re-engage non-compliant patients and improve participation.",
  },
];

export const serviceComparisonRows = [
  { category: "Monitoring platform", typicalVendor: true, atria: true },
  { category: "Device logistics and replacements", typicalVendor: "Partial", atria: true },
  { category: "Care coordination support", typicalVendor: "Limited", atria: true },
  { category: "24/7 patient support", typicalVendor: "Limited", atria: true },
  { category: "24/7 technical support", typicalVendor: "Limited", atria: true },
  { category: "Certified cardiac technician coverage", typicalVendor: false, atria: true },
  { category: "End-to-end billing services", typicalVendor: false, atria: true },
  { category: "Staff training and onboarding", typicalVendor: "Basic", atria: true },
  { category: "Patient engagement operations", typicalVendor: "Basic", atria: true },
];

export const serviceImpactPoints = [
  {
    title: "Less staffing pressure",
    detail:
      "Your internal team avoids manual coordination overload because Atria handles daily operational tasks.",
  },
  {
    title: "Faster program launch",
    detail:
      "Structured implementation, training, and logistics support reduce setup time and go-live delays.",
  },
  {
    title: "Higher patient participation",
    detail:
      "Continuous engagement and support improve adherence and reduce drop-off in monitoring programs.",
  },
  {
    title: "Cleaner reimbursement execution",
    detail:
      "Integrated documentation and billing workflows reduce leakage and strengthen revenue consistency.",
  },
];

export const serviceModelSummary = [
  "One partner accountable across platform, devices, operations, and billing.",
  "A practical service model designed for clinics, hospitals, and physician groups.",
  "Built to reduce friction for staff while improving patient and financial outcomes.",
];

export const serviceKpis = [
  {
    value: "24/7",
    label: "Patient and technical support coverage",
    detail: "Always-on response model to reduce patient drop-off and unresolved issues.",
  },
  {
    value: "8",
    label: "Integrated service lines in one model",
    detail: "Clinical, operational, and reimbursement workflows managed in one structure.",
  },
  {
    value: "2-4 weeks",
    label: "Typical implementation readiness",
    detail: "Structured onboarding cadence helps teams launch without long ramp cycles.",
  },
  {
    value: "End-to-end",
    label: "Revenue cycle and documentation support",
    detail: "From enrollment workflows to billing-ready documentation and submission guidance.",
  },
] as const;

export const serviceJourneySteps = [
  {
    key: "enroll",
    title: "Enroll and activate eligible patients",
    owner: "Atria + Practice",
    description:
      "Atria supports eligibility checks, onboarding, and patient education so activation starts quickly without overloading your internal team.",
    outcome: "Faster time-to-first-reading and cleaner program starts.",
  },
  {
    key: "support",
    title: "Support patients and keep adherence high",
    owner: "Atria-led",
    description:
      "24/7 patient support and engagement outreach address setup issues, missed readings, and non-compliance before it impacts outcomes.",
    outcome: "Higher participation and better continuity of monitoring data.",
  },
  {
    key: "escalate",
    title: "Escalate clinically relevant events",
    owner: "Atria + Clinical team",
    description:
      "Operational and clinical escalation protocols route meaningful events to your team with context for efficient follow-up.",
    outcome: "Safer workflows with clearer prioritization for staff.",
  },
  {
    key: "bill",
    title: "Prepare documentation and billing workflows",
    owner: "Atria + Billing team",
    description:
      "Atria aligns monthly activity, documentation signals, and coding readiness to support compliant claims execution.",
    outcome: "Reduced reimbursement leakage and stronger monthly revenue consistency.",
  },
  {
    key: "optimize",
    title: "Optimize programs month over month",
    owner: "Atria-led with practice governance",
    description:
      "Performance reviews identify enrollment bottlenecks, adherence risk, and workflow opportunities for ongoing optimization.",
    outcome: "Sustained operational quality and scalable growth.",
  },
] as const;

export const serviceRoleViews = [
  {
    key: "provider",
    label: "Provider",
    title: "More clinical clarity with less operational noise",
    summary:
      "Providers receive better context and streamlined workflows instead of fragmented alerts and manual coordination overhead.",
    bullets: [
      "Structured escalation context for faster decision-making",
      "Reduced administrative burden on provider-facing teams",
      "Clear pathway alignment across RPM, RTM, CCM, and Cardiac",
      "Consistent documentation posture to support compliant care delivery",
    ],
  },
  {
    key: "manager",
    label: "Practice Manager",
    title: "Operational control without staffing overload",
    summary:
      "Practice leaders gain one accountable operating partner across activation, support, logistics, and performance cadence.",
    bullets: [
      "Single service model across multiple programs",
      "Predictable onboarding and workflow implementation",
      "Lower day-to-day coordination burden on in-house teams",
      "Service transparency across support, logistics, and billing operations",
    ],
  },
  {
    key: "billing",
    label: "Billing Team",
    title: "Cleaner handoffs for revenue cycle execution",
    summary:
      "Billing teams work with stronger documentation alignment and clearer operational handoffs for claim readiness.",
    bullets: [
      "Monthly activity workflows aligned with documentation checkpoints",
      "Improved coordination between operations and billing ownership",
      "Fewer manual back-and-forth loops for missing context",
      "More consistent claim preparation cadence across programs",
    ],
  },
  {
    key: "patient-support",
    label: "Patient Support",
    title: "Always-on assistance that improves participation",
    summary:
      "Patients receive responsive support, technical guidance, and proactive reminders that keep them engaged.",
    bullets: [
      "24/7 issue resolution and troubleshooting assistance",
      "Proactive outreach for non-compliant and at-risk patients",
      "Simplified guidance for elderly and non-technical participants",
      "Better continuity between support workflows and care coordination",
    ],
  },
] as const;

export const onboardingSteps = [
  "Implementation and setup",
  "Staff training and workflow alignment",
  "Patient enrollment and device distribution",
  "Ongoing monitoring, billing, and optimization",
];

export const proofStats = [
  { label: "Programs supported", value: "4" },
  { label: "Support availability", value: "24/7" },
  { label: "Service coverage", value: "End-to-end" },
  { label: "Deployment readiness", value: "2-4 weeks" },
];

export const trustSignals = [
  "Structured compliance-aware workflows",
  "Transparent documentation and reporting",
  "Clinical escalation pathways",
  "Dedicated account and operations support",
];

export const revenueDisclaimer =
  "Revenue values are illustrative potential estimates only. Actual reimbursement varies by payer, geography, eligibility, documentation quality, and patient adherence.";

export const revenueImpactMessage =
  "Revenue improvement is driven by execution quality: enrollment speed, adherence, escalation workflows, and complete billing documentation.";

export const testimonials = [
  {
    quote:
      "Atria helped us launch quickly without increasing our internal workload.",
    author: "Operations Director, Multi-specialty Clinic",
  },
  {
    quote:
      "Their patient support and billing coordination made remote monitoring sustainable for our team.",
    author: "Practice Manager, Cardiology Group",
  },
];

export const faqs = [
  {
    question: "Can we run multiple programs for the same patient population?",
    answer:
      "Yes, depending on clinical appropriateness and billing rules. Atria helps define program design and compliant workflows.",
  },
  {
    question: "How much staff time is required to launch?",
    answer:
      "Most organizations can launch with minimal internal lift using our implementation, training, and support model.",
  },
  {
    question: "Do you support reimbursement readiness?",
    answer:
      "Yes. We provide documentation and workflow support to improve billing quality and operational consistency.",
  },
  {
    question: "How do you handle non-compliant patients?",
    answer:
      "Our patient engagement services include proactive reminders and follow-up outreach to improve participation.",
  },
];

export const caseStudies = [
  {
    title: "Scaling RPM Across Three Clinic Locations",
    outcome: "Improved enrollment throughput and reduced operational burden.",
  },
  {
    title: "Cardiac Monitoring Expansion Without New Headcount",
    outcome: "Faster reporting and stronger escalation with technician coverage.",
  },
  {
    title: "CCM Workflow Standardization",
    outcome: "More consistent documentation and better monthly program execution.",
  },
];

export const resourceDownloads = [
  {
    title: "RPM and CCM launch checklist",
    detail:
      "Operational checklist for clinical, billing, and support readiness before go-live.",
  },
  {
    title: "Cardiac monitoring workflow guide",
    detail:
      "Sample flow for technician monitoring, escalation, and report handoff.",
  },
];

export const platformHighlights = [
  {
    title: "Enrollment to Activation Workflow",
    detail:
      "A structured multi-step enrollment flow covers program configuration, eligibility, consent capture, device testing, and activation.",
    usability:
      "Guided steps reduce handoff errors and keep teams aligned from intake to go-live.",
  },
  {
    title: "Central Monitoring Command Center",
    detail:
      "Operations dashboards organize workload by reading status, questionnaire activity, and no-data scenarios.",
    usability:
      "Bucketed queues and clear counts help teams prioritize work quickly and confidently.",
  },
  {
    title: "Clinical Escalation and Review",
    detail:
      "Abnormal reading workflows support escalation handling, case review, and assignment across care teams.",
    usability:
      "Focused workspaces reduce context switching and speed up clinical response.",
  },
  {
    title: "CCM Care Coordination Workspace",
    detail:
      "Care plans, interventions, medication context, and revision history are managed in one coordinated workflow.",
    usability:
      "Longitudinal patient context is easier to maintain for complex chronic populations.",
  },
  {
    title: "Device Provisioning and Lifecycle Tracking",
    detail:
      "Device assignment, serial validation, and unlinked-device tracking improve logistics and inventory control.",
    usability:
      "Teams can resolve allocation issues faster and maintain cleaner device records.",
  },
  {
    title: "Billing Readiness and Rule Management",
    detail:
      "Monitoring days, time spent, and billing-rule management support cleaner reimbursement execution.",
    usability:
      "Operational metrics make it easier for staff to validate billable readiness.",
  },
  {
    title: "Quality Reporting and Audit Trails",
    detail:
      "Patient summary reports, quality review views, and work-log traceability support oversight and accountability.",
    usability:
      "Decision-makers get fast visibility into outcomes, performance, and process health.",
  },
  {
    title: "Role-Based Security and Governance",
    detail:
      "Role-segmented routes and permission-based access controls support governance across admin and clinical teams.",
    usability:
      "Users see the right actions for their role, improving safety and reducing training overhead.",
  },
];

export const platformUsabilityPillars = [
  "Guided workflows that minimize onboarding friction",
  "Clear queueing and prioritization for daily operations",
  "Purpose-built workspaces for monitoring, support, and billing",
  "Audit-friendly documentation with revision visibility",
  "Role-aware access to improve security and usability",
];

export const platformWorkflow = [
  "Configure program and enroll patient",
  "Validate eligibility, capture consent, and activate device",
  "Monitor readings and patient-reported data in centralized queues",
  "Escalate and document interventions when clinically necessary",
  "Track time and billing readiness for reimbursement workflows",
  "Review quality metrics and reports for ongoing optimization",
];

export const patientJourneySteps = [
  {
    title: "Take reading out of the box",
    detail:
      "Patients use pre-configured devices with no pairing, setup, or technical onboarding complexity.",
  },
  {
    title: "Data transmits automatically",
    detail:
      "As soon as a reading is taken, data is sent to the platform without manual syncing or app dependency.",
  },
  {
    title: "Provider reviews in real time",
    detail:
      "Care teams can review readings immediately and trigger workflows for intervention when needed.",
  },
];

export const platformDifferentiators = [
  {
    title: "No Bluetooth setup headaches",
    detail:
      "Atria devices are configured for immediate use, reducing friction for elderly and non-technical patients.",
  },
  {
    title: "Expandable metrics architecture",
    detail:
      "Not limited to fixed vital sets. Programs can support condition-specific metrics across specialties.",
  },
  {
    title: "Dynamic questionnaires and workflows",
    detail:
      "Questionnaires and monitoring pathways can be adapted by program, condition, and clinical model.",
  },
  {
    title: "Dynamic patient mobile app",
    detail:
      "The app supports flexible metrics and questionnaires so new programs do not require redesign from scratch.",
  },
];

export const platformComparisonRows = [
  {
    category: "Device onboarding",
    typicalVendor: "Pairing/setup required",
    atria: "Out-of-box, ready to use",
  },
  {
    category: "Data transmission",
    typicalVendor: "Manual sync dependencies",
    atria: "Automatic transmission to platform",
  },
  {
    category: "Vital and metric flexibility",
    typicalVendor: "Limited fixed metric set",
    atria: "Expandable by condition and specialty",
  },
  {
    category: "Questionnaire support",
    typicalVendor: "Limited templates",
    atria: "Dynamic and program-specific",
  },
  {
    category: "Patient app adaptability",
    typicalVendor: "Static experience",
    atria: "Dynamic metric and questionnaire support",
  },
  {
    category: "Operational ownership",
    typicalVendor: "Platform only",
    atria: "Platform + devices + logistics + care + RCM",
  },
];

export const platformExperienceViews = [
  {
    key: "patient",
    label: "Patient Experience",
    title: "Effortless participation without technical barriers",
    summary:
      "Patients use pre-configured workflows with minimal setup so adherence starts quickly and stays consistent.",
    bullets: [
      "Out-of-box device usage with no complex pairing dependency",
      "Automatic reading transmission to reduce missed sync events",
      "Simple engagement flows for non-technical and elderly patients",
    ],
  },
  {
    key: "provider",
    label: "Provider Experience",
    title: "Clear clinical visibility and faster intervention",
    summary:
      "Providers get timely data review pathways, escalation support, and structured documentation.",
    bullets: [
      "Real-time monitoring visibility and prioritization",
      "Escalation pathways for concerning trends",
      "Cleaner documentation context for care decisions",
    ],
  },
  {
    key: "operations",
    label: "Operations Experience",
    title: "Workflow control at scale",
    summary:
      "Operational teams run enrollment, logistics, support, and quality workflows from one connected system.",
    bullets: [
      "Enrollment-to-activation orchestration",
      "Device lifecycle and replacement coordination",
      "Support queueing and productivity-focused workflows",
    ],
  },
  {
    key: "billing",
    label: "Billing Experience",
    title: "Revenue workflows aligned to execution quality",
    summary:
      "Billing readiness is reinforced by time capture, interaction traceability, and compliance-aware process design.",
    bullets: [
      "Tracking of billable workflow activities",
      "Documentation integrity for payer-facing workflows",
      "Operational guardrails for reimbursement consistency",
    ],
  },
] as const;

export const platformKpis = [
  { label: "Monitoring programs supported", value: "4" },
  { label: "Support coverage", value: "24/7" },
  { label: "Workflow model", value: "End-to-end" },
  { label: "Architecture approach", value: "Expandable" },
];

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/platform", label: "Platform" },
  { href: "/programs", label: "Programs" },
  { href: "/services", label: "Services" },
  { href: "/reimbursement-roi", label: "Reimbursement & ROI" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];
