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
    title: "What Makes TOAI Different?",
    description: "TOAI is not just another AI assistant. It is the Enterprise Intelligence Layer — a centralized system that connects your organization’s data, workflows, and software into one coordinated intelligence network."
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
        title: "Enterprise Intelligence Interface",
        link: "/features",
        category: "Intelligence",
        desc: "A contextual intelligence interface that interprets enterprise queries, cross-system signals, and operational intent in real time.",
        color: "blue",
        icon: "MessageSquare",
        highlights: ["Model Agnostic", "Persistent Context", "Multi-Language"],
        image: "https://images.unsplash.com/photo-1587560699334-cc4ff634909a?q=80&w=2070&auto=format&fit=crop"
    },
    {
        title: "Enterprise Reasoning Agents",
        link: "/features",
        category: "Intelligence",
        desc: "Deploy intelligent agents that execute structured reasoning, cross-functional analysis, and coordinated system actions.",
        color: "indigo",
        icon: "UserPlus",
        highlights: ["Structured Reasoning", "Task Orchestration", "Adaptive Learning"],
        image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=2070&auto=format&fit=crop"
    },
    {
        title: "Cross-System Orchestration",
        link: "/features",
        category: "Intelligence",
        desc: "A coordination layer connecting legacy infrastructure and modern SaaS platforms into unified operational workflows.",
        color: "amber",
        icon: "Zap",
        highlights: ["Legacy Integration", "Workflow Automation", "Real-Time Sync"],
        image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc51?q=80&w=2070&auto=format&fit=crop"
    },
    {
        title: "Enterprise Data Unification",
        link: "/features",
        category: "Foundation",
        desc: "Process structured and unstructured enterprise data into a connected, high-dimensional intelligence graph.",
        color: "purple",
        icon: "Database",
        highlights: ["Semantic Search", "Intelligence Graphs", "Enterprise Scale"],
        image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop"
    },
    {
        title: "Document Intelligence Engine",
        link: "/features",
        category: "Foundation",
        desc: "Extract structured insights, contextual relationships, and compliance signals from complex enterprise documents.",
        color: "rose",
        icon: "FileText",
        highlights: ["Vision Models", "Legal Context Mapping", "Entity Mapping"],
        image: "https://images.unsplash.com/photo-1620712943543-bcc4628c675c?q=80&w=2070&auto=format&fit=crop"
    },
    {
        title: "Governance & Security Layer",
        link: "/features",
        category: "Insights",
        desc: "Built-in governance infrastructure enabling encryption, access control, auditability, and real-time compliance monitoring.",
        color: "slate",
        icon: "ShieldCheck",
        highlights: ["Identity Sync", "PII Protection", "Compliance Ready"],
        image: "https://images.unsplash.com/photo-1639322537228-f710d846310a?q=80&w=2070&auto=format&fit=crop"
    },
    {
        title: "Intelligent Supply Operations",
        link: "/features",
        category: "Solutions",
        desc: "Intelligence-driven supply chain coordination that optimizes inventory, vendor alignment, and cost efficiency.",
        color: "emerald",
        icon: "ShoppingCart",
        highlights: ["Market Signals", "Vendor Automation", "Demand Alignment"],
        image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2070&auto=format&fit=crop"
    },
    {
        title: "Enterprise Support Intelligence",
        link: "/features",
        category: "Solutions",
        desc: "Context-aware support intelligence with unified visibility across customer interactions and operational history.",
        color: "orange",
        icon: "Headphones",
        highlights: ["Omni-Channel", "Sentiment Insight", "Rapid Resolution"],
        image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=2070&auto=format&fit=crop"
    }
];

export const enterpriseSecurity = [
    "Hybrid Cloud + On-Prem Deployment",
    "Role-Based Access Governance",
    "Secure Multi-Tenant Architecture",
    "Enterprise Audit Logs",
    "Continuous Compliance Monitoring"
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
    {
        title: "AI/ML Annotation & Model Training",
        benefits: [
            "High-precision data annotation — Accurate labeling pipelines for large-scale AI model development.",
            "Scalable annotation workforce — Distributed teams supporting enterprise-level datasets."
        ],
        tailoredFor: "enterprise AI development"
    },
    {
        title: "E-commerce Operations Support",
        benefits: [
            "Catalog intelligence management — Structured product data pipelines and catalog optimization.",
            "Automated customer support workflows — AI-assisted ticketing, responses, and order resolution."
        ],
        tailoredFor: "scalable digital commerce"
    },
    {
        title: "IT & Custom Platform Development",
        benefits: [
            "Tailored enterprise solutions — Custom applications aligned with operational workflows.",
            "System integration expertise — Connect legacy systems, APIs, and enterprise infrastructure."
        ],
        tailoredFor: "enterprise scalability"
    },
    {
        title: "Workforce & Payroll Operations",
        benefits: [
            "Streamlined workforce management — Automated HR workflows and employee operations.",
            "Compliance-ready payroll processing — Secure payroll management aligned with regulatory standards."
        ],
        tailoredFor: "operational efficiency"
    },
    {
        title: "Training & Capability Development",
        benefits: [
            "Workforce upskilling programs — Hands-on training for enterprise technology adoption.",
            "Enterprise AI literacy programs — Enable teams to understand and leverage AI systems effectively."
        ],
        tailoredFor: "long-term capability growth"
    },
    {
        title: "Consulting & Strategy",
        benefits: [
            "Digital transformation advisory — Strategic guidance for modernizing enterprise operations.",
            "AI strategy & implementation roadmap — Define clear pathways for deploying enterprise intelligence systems."
        ],
        tailoredFor: "enterprise innovation"
    }
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
    mission: "We build intelligent infrastructure that connects data, systems, and workflows—so organizations can reason, automate, and act with clarity across every part of their operations.",
    vision: "We believe the next generation of organizations will run on systems that don't just store data—but understand, coordinate, and improve how work happens."
};



export const advisoryBoard = [
    { name: "Gaurav Dadhich", role: "Board of Directors", bio: "Seasoned SaaS & Fintech product leader." }
];

export const pricingTiers = [
    { name: "Starter", features: ["Basic AI Agents", "Standard Support", "Cloud Hosting"] },
    { name: "Growth", features: ["Advanced Workflows", "Priority Support", "Custom Integrations"] },
    { name: "Enterprise", features: ["Full On-Prem Deployment", "Dedicated Account Manager", "Unlimited Access"] }
];
