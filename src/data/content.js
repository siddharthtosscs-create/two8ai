import DeepKaur from '../assets/images/DeepKaur.webp';
import MollikaAnand from '../assets/images/MollikaAnand.webp';
import PrabhjotAnand from '../assets/images/PrabhjotAnand.webp';
import VikasPanwar from '../assets/images/VikasPanwar.webp';

export const companyData = {
    name: "TWO8AI",
    productName: "TOAI",
    email: "two8ai@gmail.com",
    website: "www.two8ai.com",
    copyright: "© 2026 TWO8AI — All Rights Reserved"
};

// ... existing code ...

export const leadership = [
    { name: "Mollika Anand", image: MollikaAnand, role: "Co-Founder", bio: "Driving vision and strategy." },
    { name: "Prabhjot Anand", image: PrabhjotAnand, role: "Director", bio: "Leading operational excellence." },
    { name: "Deep Kaur", image: DeepKaur, role: "Co-Founder", bio: "Spearheading innovation." },
    { name: "Vikas Panwar", image: VikasPanwar, role: "Director", bio: "Managing growth and partnerships." }
];

export const navLinks = {
    left: [
        { title: "Product", path: "/product" },
        { title: "Solutions", path: "/solutions" },
        { title: "Services", path: "/services" },
        { title: "Industries", path: "/industries" },
        // { title: "Pricing", path: "/pricing" }
    ],
    right: [
        { title: "About", path: "/about" },
        { title: "Login", path: "/login" }, // Placeholder mainly, but requested
        { title: "Request Demo", path: "/contact", isCta: true }
    ]
};

export const heroContent = {
    headline: "TOAI — The Enterprise AI Operating System",
    subheadline: "An AI foundation layer that connects structured and unstructured data across your organization to automate workflows, enhance decision-making, and unify intelligence.",
    ctaPrimary: "Request Demo",
    ctaSecondary: "Explore TOAI"
};

export const trustedBrands = [
    "Flipkart",
    "PhonePe",
    "Defined Crowd",
    "Shaip AI",
    "Tellus International"
];

export const whatIsToai = {
    title: "What is TOAI?",
    description: "TOAI is not a chatbot. It is an enterprise AI foundation layer that connects to ERP, CRM, emails, chats, databases, PDFs, cloud, on-premise systems, and legacy software. It acts as a central intelligence system across departments."
};

export const howToaiWorks = {
    steps: ["Connect", "Normalize", "Understand", "Deliver Contextual Intelligence"],
    details: [
        "Data ingestion",
        "Knowledge unification",
        "AI agents",
        "Workflow execution",
        "Enterprise insights"
    ]
};

export const coreFeatures = [
    {
        title: "Adaptive Conversation Engine",
        link: "/features",
        category: "Intelligence",
        desc: "A cognitive interface that understands intent across 100+ languages, enabling complex multi-modal interactions with sub-second latency.",
        color: "blue",
        icon: "MessageSquare",
        highlights: ["LLM Agnostic", "Context Persistent", "Multi-lingual"],
        image: "https://images.unsplash.com/photo-1587560699334-cc4ff634909a?q=80&w=2070&auto=format&fit=crop"
    },
    {
        title: "Autonomous Agent Swarms",
        link: "/features",
        category: "Intelligence",
        desc: "Deploy self-learning digital workers capable of executing complex multi-step reasoning and cross-system operations without human intervention.",
        color: "indigo",
        icon: "UserPlus",
        highlights: ["Auto-Reasoning", "Task Delegation", "Self-Correcting"],
        image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=2070&auto=format&fit=crop"
    },
    {
        title: "Universal Workflow Fabric",
        link: "/features",
        category: "Intelligence",
        desc: "The neural bridge between legacy mainframes and modern SaaS, automating high-frequency transactions with 99.9% semantic accuracy.",
        color: "amber",
        icon: "Zap",
        highlights: ["Legacy Connect", "Hyper-automation", "Zero-Latency"],
        image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc51?q=80&w=2070&auto=format&fit=crop"
    },
    {
        title: "Unstructured Data Unification",
        link: "/features",
        category: "Foundation",
        desc: "Ingest and vectorize multi-petabyte datasets, converting emails, voice, and visual assets into a unified high-dimensional knowledge graph.",
        color: "purple",
        icon: "Database",
        highlights: ["Vector Search", "Knowledge Graphs", "Peta-scale"],
        image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop"
    },
    {
        title: "Cognitive Document Intel",
        link: "/features",
        category: "Foundation",
        desc: "Beyond OCR: A vision-based system that extracts complex tabular data, sentiments, and legal nuances from fragmented physical archives.",
        color: "rose",
        icon: "FileText",
        highlights: ["Vision Transformers", "Legal Entrapment", "Entity Linkage"],
        image: "https://images.unsplash.com/photo-1620712943543-bcc4628c675c?q=80&w=2070&auto=format&fit=crop"
    },
    {
        title: "Enterprise Identity Guardian",
        link: "/features",
        category: "Insights",
        desc: "The ultimate governance layer ensuring PII redaction, encryption-at-rest, and real-time compliance monitoring across all AI interactions.",
        color: "slate",
        icon: "ShieldCheck",
        highlights: ["Biometric Sync", "PII Redaction", "GDPR Native"],
        image: "https://images.unsplash.com/photo-1639322537228-f710d846310a?q=80&w=2070&auto=format&fit=crop"
    },
    {
        title: "Neural Supply Chain",
        link: "/features",
        category: "Solutions",
        desc: "Predictive procurement agents that analyze global market shifts to optimize inventory turns and automate vendor negotiations.",
        color: "emerald",
        icon: "ShoppingCart",
        highlights: ["Market Pulse", "Auto-Negotiate", "JIT Delivery"],
        image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2070&auto=format&fit=crop"
    },
    {
        title: "Contextual Support Core",
        link: "/features",
        category: "Solutions",
        desc: "Deliver 'Concierge-level' support with agents who possess full historical knowledge of every user interaction across every channel.",
        color: "orange",
        icon: "Headphones",
        highlights: ["Omni-channel", "Sentiment Aware", "Instant Resolve"],
        image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=2070&auto=format&fit=crop"
    }
];

export const enterpriseSecurity = [
    "Hybrid SaaS + On-Prem Deployment",
    "Role-Based Access Control",
    "Multi-Tenant Architecture",
    "Audit Logs",
    "Compliance Monitoring"
];

export const productPageContent = {
    differentiators: [
        { title: "Enterprise Intelligence Layer", desc: "Converts all organizational data into one unified searchable knowledge engine." },
        { title: "Cross-System Integration", desc: "Connects seamlessly with existing enterprise software." },
        { title: "Hybrid Deployment", desc: "Secure and scalable options for cloud or on-premise." }
    ],
    dataCompatibility: {
        structured: ["SAP", "Oracle", "Salesforce", "SQL/NoSQL", "Excel", "HRMS", "Inventory"],
        unstructured: ["PDFs", "Scanned Files", "Emails", "WhatsApp", "OCR Images", "Videos"]
    },
    impact: [
        "Removes silos",
        "Reduces manual effort",
        "Accelerates decision-making"
    ]
};

export const services = [
    { title: "AI/ML Annotation & Model Training", benefits: ["High accuracy", "Scalable workforce"] },
    { title: "E-commerce Support", benefits: ["Catalog management", "Customer support automation"] },
    { title: "IT & Custom Development", benefits: ["Tailored solutions", "Integration expertise"] },
    { title: "Workforce & Payroll", benefits: ["Streamlined operations", "Compliance management"] },
    { title: "Training & Development", benefits: ["Upskilling teams", "AI literacy"] },
    { title: "Consulting & Strategy", benefits: ["Digital transformation", "AI roadmap"] }
];

export const industries = [
    "E-commerce & Retail",
    "AI Companies / Tech Firms",
    "Government Bodies",
    "Enterprises"
];

export const clients = [
    "Flipkart",
    "PhonePe",
    "Defined Crowd",
    "Shaip AI",
    "Uplara",
    "Tellus International",
    "Ensurekar"
];

export const clientResults = [
    "98%+ accuracy",
    "Reduced processing time",
    "Improved AI performance",
    "Market intelligence enhancement"
];

export const aboutContent = {
    story: "The TWO8 Story",
    philosophy: "Total Openness in Striving for Success",
    stats: [
        { label: "Data Points Processed", value: "500M+" },
        { label: "In-house Professionals", value: "150+" },
        { label: "On-time Delivery", value: "97%+" },
        { label: "Project Accuracy", value: "100%" }
    ],
    mission: "Deliver intelligent, impact-driven solutions that harness AI and human expertise.",
    vision: "Shape the future in an AI-first world."
};



export const advisoryBoard = [
    { name: "Gaurav Dadhich", role: "Board of Directors", bio: "Seasoned SaaS & Fintech product leader." }
];

export const pricingTiers = [
    { name: "Starter", features: ["Basic AI Agents", "Standard Support", "Cloud Hosting"] },
    { name: "Growth", features: ["Advanced Workflows", "Priority Support", "Custom Integrations"] },
    { name: "Enterprise", features: ["Full On-Prem Deployment", "Dedicated Account Manager", "Unlimited Access"] }
];
