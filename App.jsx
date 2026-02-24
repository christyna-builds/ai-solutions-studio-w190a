import React, { useState } from 'react';
import { Search, Filter, X, ExternalLink, Bot, Sparkles, BookOpen, HeartPulse, BrainCircuit, Users, Compass, ShieldCheck, GraduationCap, Target, Clock, Zap, BookMarked, MessageCircle } from 'lucide-react';

const botData = [
  // Ecosystem: STEM Engagement
  {
    id: 1,
    name: "STEM Stimulation",
    category: "STEM Engagement",
    ecosystem: "Student Changemaker Chatbots",
    url: "",
    icon: "Sparkles",
    tags: ["Lesson Planning", "Relevance", "Engagement"],
    description: "Assists educators by creating more engaging lesson plans that promote interest in STEM fields.",
    problem: "Insufficient guidance and support, and lack of relevance in traditional STEM classes.",
    impact: "Tailors lesson plans, making lessons tangible through hands-on learning, and fosters classroom dialogue.",
    useCase: "Creating a lesson plan for high school algebra to teach a system of equations using creative outlets like social media showdowns."
  },
  {
    id: 2,
    name: "Science Sparkler",
    category: "STEM Engagement",
    ecosystem: "Student Changemaker Chatbots",
    url: "https://www.playlab.ai/project/cmiz3w4tu0w1jk20u617qhb7c",
    icon: "Zap",
    tags: ["Curiosity", "Humor", "Classroom Support"],
    description: "Uses humor, fun facts, and interactive prompts to increase curiosity and participation among students.",
    problem: "Growing disengagement and loss of curiosity in STEM classrooms where science is perceived as rigid.",
    impact: "Reframes STEM as approachable and enjoyable, helping students reconnect with curiosity.",
    useCase: "A bored biology student triggers the bot for a fun science fact or joke, engaging them and sparking participation."
  },
  {
    id: 3,
    name: "Seeing Strategies w/ STEM",
    category: "STEM Engagement",
    ecosystem: "Student Changemaker Chatbots",
    url: "https://www.playlab.ai/project/cmiytd1nz5hvomf0unmu4tbov",
    icon: "BrainCircuit",
    tags: ["Concept Simplification", "Alternative Instruction"],
    description: "Brainstorms easier alternative ways of instructing and explaining STEM concepts.",
    problem: "Current curriculum provides unsupportive or confusing instruction, making STEM seem rigorous and tedious.",
    impact: "Helps students practice and master STEM concepts through new and interesting conceptual approaches.",
    useCase: "A student struggling with multiplying positive and negative integers uses the bot to learn a 'friends and enemies' analogy."
  },
  {
    id: 4,
    name: "Science Savvy",
    category: "STEM Engagement",
    ecosystem: "Student Changemaker Chatbots",
    url: "https://www.playlab.ai/project/cmis9am9403zrn50u8jhdfhhe",
    icon: "Compass",
    tags: ["Hands-on Projects", "Real-world Application"],
    description: "Helps users find and participate in science projects and facilitates them step-by-step.",
    problem: "Reduced curiosity and lack of relevance due to lack of hands-on and problem-posing opportunities.",
    impact: "Provides resources for hands-on experience, helping students better visualize and comprehend topics.",
    useCase: "A chemistry student wants to try a lab at home. The bot determines constraints, guides hypothesis creation, and provides instructions."
  },

  // Ecosystem: Education: Public vs Private Good
  {
    id: 5,
    name: "Study Buddy",
    category: "Public vs Private Good",
    ecosystem: "Educommons AI Collection",
    url: "https://www.playlab.ai/project/cmj9pqf3m0opkjx0ve8sb8jdy",
    icon: "Users",
    tags: ["Collaboration", "Peer Support"],
    description: "Supports collaborative learning by helping students move away from isolated, competitive study habits.",
    problem: "Academic isolation and the pressure to perform independently in competitive environments.",
    impact: "Normalizes collaboration as a valid and powerful learning strategy, transforming study into a shared practice.",
    useCase: "An overwhelmed student preparing for a midterm engages the bot to structure a group study session."
  },
  {
    id: 6,
    name: "The Curriculum Translator",
    category: "Public vs Private Good",
    ecosystem: "Educommons AI Collection",
    url: "https://www.playlab.ai/project/cmj9p5k6c0qudn30up5a30h2m",
    icon: "BookMarked",
    tags: ["Hidden Curriculum", "Demystification"],
    description: "Demystifies academic norms by translating jargon and unwritten rules into clear, actionable guidance.",
    problem: "Hidden curriculum in higher education creates barriers for first-generation and under-resourced students.",
    impact: "Reduces confusion and hesitation, enabling confident engagement with instructors and support systems.",
    useCase: "A first-gen student receives a syllabus note to 'reach out if struggling' and uses the bot to understand expectations and draft an email."
  },
  {
    id: 7,
    name: "The Meaning Maker",
    category: "Public vs Private Good",
    ecosystem: "Educommons AI Collection",
    url: "https://www.playlab.ai/project/cmj9pmz8v0s6on30uj6skgy0b",
    icon: "Target",
    tags: ["Purpose", "Reflection", "Motivation"],
    description: "Helps students reconnect coursework with real-world social impact and public purpose.",
    problem: "Performative achievement where learning becomes transactional and disconnected from collective benefit.",
    impact: "Shifts motivation from extrinsic rewards to intrinsic value, rediscovering curiosity and purpose.",
    useCase: "A burned-out student uses the bot after a 'pointless' assignment to connect the topic to broader societal issues."
  },
  {
    id: 8,
    name: "The Resource Sharer",
    category: "Public vs Private Good",
    ecosystem: "Educommons AI Collection",
    url: "https://www.playlab.ai/project/cmj9pyos00tckn30uxjzq5aii",
    icon: "Share2",
    tags: ["Opportunity Access", "Community Sharing"],
    description: "Aggregates academic and professional opportunities and actively prompts users to share them with peers.",
    problem: "Information asymmetry and opportunity hoarding shaped by informal networks.",
    impact: "Transforms information from a private advantage into a shared community resource.",
    useCase: "A student finds a scholarship list and the bot prompts them to share it with peers to expand access."
  },
  {
    id: 9,
    name: "The Wellness Collective",
    category: "Public vs Private Good",
    ecosystem: "Educommons AI Collection",
    url: "https://www.playlab.ai/project/cmj9q8jh30ue2n30uy36p8g1a",
    icon: "HeartPulse",
    tags: ["Wellbeing", "Burnout", "Systemic Struggle"],
    description: "Reframes academic struggle as a systemic experience rather than individual failure.",
    problem: "The toxic belief that exhaustion is a prerequisite for success and students must suffer in isolation.",
    impact: "Shifts mindset from self-blame to understanding struggles as part of a wider system, protecting health.",
    useCase: "An overwhelmed student during finals feels they aren't working hard enough; the bot validates their feelings and encourages rest."
  },

  // Ecosystem: Executive Function
  {
    id: 10,
    name: "The Planner",
    category: "Executive Function",
    ecosystem: "Executive Function & Time Management",
    url: "https://www.playlab.ai/project/cmiw3r94t1nbgks0vcrkm9n31",
    icon: "Clock",
    tags: ["Organization", "Planning", "Workload"],
    description: "A productivity and lifestyle-balancing bot that breaks down workload into smaller, manageable pieces.",
    problem: "Overwhelm and procrastination when deadlines are forgotten or work becomes fragmented.",
    impact: "Provides foundational organization, creating a clear, realistic daily plan prioritizing tasks.",
    useCase: "A college student juggling classes and work uploads assignments, and the bot creates a balanced day-by-day plan."
  },
  {
    id: 11,
    name: "Prioritizer",
    category: "Executive Function",
    ecosystem: "Executive Function & Time Management",
    url: "https://www.playlab.ai/project/cmjai269k141moc0udtgu57y1",
    icon: "Target",
    tags: ["Task Triage", "Decision Paralysis"],
    description: "A strategic planning tool designed to solve 'decision paralysis' by ranking tasks by urgency and importance.",
    problem: "Feeling overwhelmed by a long list of tasks and not knowing where to start.",
    impact: "Transforms a flat list of assignments into a clear, ranked hierarchy.",
    useCase: "A student has a 30% final, a group report, and an extra credit assignment; the bot identifies quick wins and high-stakes tasks."
  },
  {
    id: 12,
    name: "EstimateRight",
    category: "Executive Function",
    ecosystem: "Executive Function & Time Management",
    url: "https://www.playlab.ai/project/cmj51ptuj67dpl40uciy3ywhi",
    icon: "Clock",
    tags: ["Time Estimation", "Planning"],
    description: "Helps students estimate how long academic tasks will realistically take by breaking work into smaller steps.",
    problem: "Students underestimate task duration, leading to broken schedules and last-minute panic.",
    impact: "Reduces underestimation, supports better planning, and decreases last-minute stress.",
    useCase: "Alex assumes a 10-page paper will take 'a few hours.' EstimateRight breaks it down to reveal the true time commitment."
  },
  {
    id: 13,
    name: "PlanED",
    category: "Executive Function",
    ecosystem: "Executive Function & Time Management",
    url: "https://www.playlab.ai/project/cmj98odc307fyqu0ucvfp821p",
    icon: "Clock",
    tags: ["Scheduling", "Workflow"],
    description: "Transforms a list of tasks with estimated time requirements into balanced, conflict-free weekly schedules.",
    problem: "Students struggle with how to distribute their time effectively across the week.",
    impact: "Reduces decision fatigue and supports consistent progress toward academic goals.",
    useCase: "A student enters tasks, time estimates, and fixed commitments; PlanED generates a clear weekly roadmap."
  },
  {
    id: 14,
    name: "Focus & Execution Coach",
    category: "Executive Function",
    ecosystem: "Executive Function & Time Management",
    url: "https://www.playlab.ai/project/cmiyy4jp13op0mv0urgy7jsub",
    icon: "BrainCircuit",
    tags: ["Task Initiation", "Focus"],
    description: "Supports students in starting tasks, staying focused, managing distractions, and regulating stress.",
    problem: "Students fail at the execution stage due to anxiety, overwhelm, or difficulty initiating tasks.",
    impact: "Normalizes struggles with focus and offers low-effort guidance to make starting achievable.",
    useCase: "A student is anxious to start a problem set; the bot helps them prepare their environment and sets up a short focus session."
  },
  {
    id: 15,
    name: "Reflection & Adjustment (Weekly Reset)",
    category: "Executive Function",
    ecosystem: "Executive Function & Time Management",
    url: "https://www.playlab.ai/project/cmgymcyqf2m99m00u33ux1v34",
    icon: "Sparkles",
    tags: ["Metacognition", "Review", "Adaptation"],
    description: "Guides students through a brief weekly review to identify wins, breakdowns, and recurring patterns.",
    problem: "Students repeat the same scheduling mistakes and interpret repeated struggles as personal weakness.",
    impact: "Teaches students how to improve their process and provides 2-3 targeted adjustments for the upcoming week.",
    useCase: "A student misses deadlines; the bot helps identify an overpacked schedule and adjusts the next week's approach."
  },

  // Ecosystem: Financial Barriers & Opportunity Gaps
  {
    id: 16,
    name: "BridgeBuilder",
    category: "Financial & Opportunity Gaps",
    ecosystem: "Bridging Barriers",
    url: "https://www.playlab.ai/project/cmixihxk800i6n30ut2hgrhq9",
    icon: "Compass",
    tags: ["Resource Navigation", "Institutional Systems"],
    description: "Assists students in understanding and accessing campus resources by translating complex systems into clear steps.",
    problem: "Hard-to-navigate institutional systems create stress and delay help-seeking.",
    impact: "Clarifies orientation and directs students to the appropriate specialized support.",
    useCase: "A first-gen student facing unexpected financial strain uses the bot to identify relevant resources and draft emails."
  },
  {
    id: 17,
    name: "Harbor Guide",
    category: "Financial & Opportunity Gaps",
    ecosystem: "Bridging Barriers",
    url: "https://www.playlab.ai/project/cmiv3o7o50l31m40ua6pa2pci",
    icon: "ShieldCheck",
    tags: ["Crisis Support", "Basic Needs"],
    description: "Guides students to immediate support when essential needs (housing, food) aren't met.",
    problem: "Basic needs insecurity risks academic and social instability.",
    impact: "Connects students to immediate support resources safely and without shame.",
    useCase: "A student skipping meals due to delayed paychecks uses the bot to find campus food pantries and plan short-term support."
  },
  {
    id: 18,
    name: "Material Map",
    category: "Financial & Opportunity Gaps",
    ecosystem: "Bridging Barriers",
    url: "https://www.playlab.ai/project/cmixzk8to08pzmf0uf2oq4g71",
    icon: "BookOpen",
    tags: ["Affordable Materials", "Textbooks"],
    description: "Helps students find free or low-cost alternatives to expensive textbooks, lab materials, and access codes.",
    problem: "High material costs force students to choose between academics and basic needs.",
    impact: "Increases visibility of low-cost options and promotes equitable access to academic resources.",
    useCase: "A student sees a $280 textbook requirement; the bot surfaces ethical alternatives like library reserves."
  },
  {
    id: 19,
    name: "Time Compass",
    category: "Financial & Opportunity Gaps",
    ecosystem: "Bridging Barriers",
    url: "https://www.playlab.ai/project/cmirzohha32hxpp0u9gw12fmc",
    icon: "Clock",
    tags: ["Time Scarcity", "Balance"],
    description: "Helps students build sustainable routines balancing work, school, commuting, and personal responsibilities.",
    problem: "Long work hours and heavy course loads create missed deadlines and burnout for marginalized students.",
    impact: "Helps students visualize schedules, identify overload patterns, and realistically adjust commitments.",
    useCase: "A full-time student working two jobs misses deadlines; the bot maps the schedule and prioritizes sustainability."
  },
  {
    id: 20,
    name: "Opportunity Pathfinder",
    category: "Financial & Opportunity Gaps",
    ecosystem: "Bridging Barriers",
    url: "https://www.playlab.ai/project/cmixsiehy3he3me0u0pgucwby",
    icon: "Target",
    tags: ["Career Access", "Internships"],
    description: "Helps students turn academic goals into financially accessible opportunities like paid internships.",
    problem: "Opportunities favor students with resources; many assume they are unpaid or require connections.",
    impact: "Expands equitable access to experiences by centering paid, inclusive pathways.",
    useCase: "A student wanting research experience uses the bot to find paid fellowships aligned with her interests."
  },
  {
    id: 21,
    name: "Aid Ally",
    category: "Financial & Opportunity Gaps",
    ecosystem: "Bridging Barriers",
    url: "https://www.playlab.ai/project/cmivik9rj01cwl40uocte15es",
    icon: "ShieldCheck",
    tags: ["Financial Aid", "FAFSA"],
    description: "Guides students through the confusing financial aid application process and self-advocacy.",
    problem: "Financial barriers and complex aid processes exclude students.",
    impact: "Empowers students to navigate the financial aid system and self-advocate.",
    useCase: "A student has a $5,000 aid gap; the bot identifies grants and helps draft a financial aid appeal letter."
  },

  // Ecosystem: Guidance & Access to Support
  {
    id: 22,
    name: "Resource Hub",
    category: "Career Guidance",
    ecosystem: "Guidance & Access",
    url: "https://www.playlab.ai/project/cmixvef2q2cn5mg0uh54l6lkt",
    icon: "Compass",
    tags: ["Resource Navigation", "Career Center"],
    description: "Centralized access to campus career resources acting as an entry point for students.",
    problem: "Non-traditional students struggle to locate and utilize campus career resources.",
    impact: "Informs students about resources and directs them to specialized support.",
    useCase: "A transfer student unsure where to start uses the bot to find internships on Handshake and student orgs."
  },
  {
    id: 23,
    name: "SkillForge",
    category: "Career Guidance",
    ecosystem: "Guidance & Access",
    url: "https://www.playlab.ai/project/cmiy454uq0shcmf0u13gthgcq",
    icon: "Zap",
    tags: ["Skill Building", "Resume"],
    description: "Helps students build tangible skills and experiences to strengthen their resumes.",
    problem: "Students feel unqualified and lack understanding of what experiences are valued.",
    impact: "Demystifies experience-building and increases student confidence.",
    useCase: "A first-year CS student with no experience finds realistic projects and clubs to join."
  },
  {
    id: 24,
    name: "Easy Apply",
    category: "Career Guidance",
    ecosystem: "Guidance & Access",
    url: "https://www.playlab.ai/project/cmizdcjzs5nzpmv0uzx8xdjy8",
    icon: "BookMarked",
    tags: ["Application Support", "Cover Letters"],
    description: "Helps students structure resumes and cover letters and understand recruiting timelines.",
    problem: "Application knowledge is scattered and often learned too late.",
    impact: "Helps students apply earlier and more effectively, reducing anxiety.",
    useCase: "A transfer student stressed about 'early recruiting' gets a timeline and structures their resume."
  },
  {
    id: 25,
    name: "Interview Insider",
    category: "Career Guidance",
    ecosystem: "Guidance & Access",
    url: "https://www.playlab.ai/project/cmj08h6535uc3l70upz7lc19g",
    icon: "MessageCircle",
    tags: ["Interview Prep", "STAR Method"],
    description: "Answers interview questions, generates mock questions, and provides feedback using methods like STAR.",
    problem: "Interviews cause high anxiety, especially for non-traditional students unaware of expectations.",
    impact: "Builds confidence so students feel prepared for interviews.",
    useCase: "A student lands an interview and uses the bot to practice mock questions with feedback."
  },
  {
    id: 26,
    name: "RoleReady Companion",
    category: "Career Guidance",
    ecosystem: "Guidance & Access",
    url: "https://www.playlab.ai/project/cmj0hh01l35nom50uwnqdkfrn",
    icon: "Users",
    tags: ["Post-Offer", "Negotiation"],
    description: "Supports students after receiving a job offer with evaluation, negotiation, and onboarding prep.",
    problem: "Lack of support during the transition from candidate to employee.",
    impact: "Empowers users to make informed decisions and start roles with confidence.",
    useCase: "A senior gets an offer and uses the bot to prepare negotiation questions and understand expectations."
  },

  // Ecosystem: Inequity & Resource Disparity
  {
    id: 27,
    name: "EDU Guide",
    category: "Inequity & Resources",
    ecosystem: "Inequity & Resource Disparity",
    url: "https://www.playlab.ai/project/cmiwwst5p0031mq0vssred774",
    icon: "Compass",
    tags: ["Resource Locator", "Local Opportunities"],
    description: "A resource locator that helps students and families find educational opportunities near them.",
    problem: "Information gap in under-resourced schools.",
    impact: "Locates programs and community resources to advance academic careers.",
    useCase: "A student wants extra math support and finds local tutoring and a community college program."
  },
  {
    id: 28,
    name: "Book Buddy",
    category: "Inequity & Resources",
    ecosystem: "Inequity & Resource Disparity",
    url: "https://www.playlab.ai/project/cmitdd82o0w03p80ufeqnn20n",
    icon: "BookOpen",
    tags: ["Classroom Materials", "Donations"],
    description: "Helps educators create class wishlists and connects them with local donors for free resources.",
    problem: "Resource disparity and out-of-pocket spending by teachers in underfunded schools.",
    impact: "Closes the resource gap by providing physical items needed in classrooms.",
    useCase: "A 5th-grade teacher creates a wishlist for reading circle books and connects with local donors."
  },
  {
    id: 29,
    name: "MaterialMind",
    category: "Inequity & Resources",
    ecosystem: "Inequity & Resource Disparity",
    url: "https://www.playlab.ai/project/cmj0qrgl70br5m50uioza5x42",
    icon: "BrainCircuit",
    tags: ["Structural Analysis", "Equity"],
    description: "An equity-focused analyst that identifies gaps in access to resources and generates strategies to bridge them.",
    problem: "Unequal access to resources driven by structural and economic disparities.",
    impact: "Increases awareness of systemic conditions and connects users to free/low-cost resources.",
    useCase: "A student feels behind and uses the bot to locate free tutoring and understand funding disparities."
  },
  {
    id: 30,
    name: "Resource Bridge",
    category: "Inequity & Resources",
    ecosystem: "Inequity & Resource Disparity",
    url: "https://www.playlab.ai/project/cmimjyusf4cvqii0vfoh1iwmc",
    icon: "ShieldCheck",
    tags: ["Navigation Support", "Immigrant Families"],
    description: "Helps students and families take concrete steps to access educational and community resources.",
    problem: "Support services exist but are confusing, fragmented, or inaccessible.",
    impact: "Reduces informational barriers and supports family agency in navigating systems.",
    useCase: "A parent uses the bot to figure out how to contact the school for tutoring support."
  },
  {
    id: 31,
    name: "InclusiveEDU",
    category: "Inequity & Resources",
    ecosystem: "Inequity & Resource Disparity",
    url: "https://www.playlab.ai/project/cmj9p0mrb0mgsoh0uxqa6old9",
    icon: "Users",
    tags: ["Educator Support", "Culturally Responsive"],
    description: "Supports K-12 educators with culturally responsive, equity-centered guidance for classroom practices.",
    problem: "Inequity is sustained through school practices that don't reflect students' cultural contexts.",
    impact: "Builds confidence in culturally responsive teaching and reduces unintentional harm.",
    useCase: "A teacher bans Spanish in class, then uses the bot to understand why it's harmful and how to embrace multilingualism."
  },

  // Ecosystem: Personalized Learning
  {
    id: 32,
    name: "The Director",
    category: "Personalized Learning",
    ecosystem: "Learning Made For You",
    url: "https://www.playlab.ai/project/cmiwi29i70mhxlf0uv8dsjjxp",
    icon: "Compass",
    tags: ["Learning Diagnosis", "Navigation"],
    description: "Diagnoses the user's specific learning problem and directs them to the correct specialist chatbot.",
    problem: "Students struggle to identify why they are struggling.",
    impact: "Lowers the barrier to entry and empowers learners to overcome struggles without confusion.",
    useCase: "An overwhelmed first-gen student is welcomed by The Director, which identifies their bottleneck and routes them to Prism."
  },
  {
    id: 33,
    name: "Divide & Conquer Coach",
    category: "Personalized Learning",
    ecosystem: "Learning Made For You",
    url: "https://www.playlab.ai/project/cmj0nzu6w05bglo0uivni2td7",
    icon: "Target",
    tags: ["Task Structure", "Prerequisites"],
    description: "Breaks down complex assignments by identifying prerequisite knowledge gaps and creating personalized plans.",
    problem: "Students have vastly different academic backgrounds and struggle with the scale of assignments.",
    impact: "Reduces overwhelm and exposes prerequisite gaps without stigma.",
    useCase: "A student stuck on an optimization homework is guided to review eigenvalue decomposition first."
  },
  {
    id: 34,
    name: "Prism",
    category: "Personalized Learning",
    ecosystem: "Learning Made For You",
    url: "https://www.playlab.ai/project/cmj18fmii1m4cl70ujdzv9drs",
    icon: "Sparkles",
    tags: ["Multi-Modal", "Accessibility"],
    description: "A Multi-Modal Translator that refracts dense academic content into formats that resonate with a user's specific learning style.",
    problem: "The 'One-Size-Fits-All' instructional model creates accessibility barriers.",
    impact: "Reduces cognitive load and gives students agency to choose how they consume information.",
    useCase: "A student overwhelmed by a dense PDF on Quantum Superposition uses Prism to translate it into a visual chart."
  },
  {
    id: 35,
    name: "Socratic Tutor",
    category: "Personalized Learning",
    ecosystem: "Learning Made For You",
    url: "https://www.playlab.ai/project/cmj0sq98200kxlo0uhzhv9sxo",
    icon: "BrainCircuit",
    tags: ["Interactive Practice", "Active Recall"],
    description: "An interactive learning assistant for real-time practice that guides students using Socratic questioning.",
    problem: "Students lack access to guided practice that mirrors how experts think.",
    impact: "Improves conceptual understanding through guided questioning.",
    useCase: "A student uploads biology slides. The bot generates practice questions and responds with targeted follow-up prompts."
  },
  {
    id: 36,
    name: "Real-World Matter",
    category: "Personalized Learning",
    ecosystem: "Learning Made For You",
    url: "https://www.playlab.ai/project/cmj0m3sae7ww7l70um617gary",
    icon: "Target",
    tags: ["Motivation", "Relevance"],
    description: "Connects abstract academic concepts to real-world applications like careers and current events.",
    problem: "The motivation gap when students cannot see the utility of what they are learning.",
    impact: "Increases engagement and helps learners form stronger mental models.",
    useCase: "A physics student bored by angular momentum learns how it applies to figure skating and drone racing."
  },
  {
    id: 37,
    name: "STEM in Context",
    category: "Personalized Learning",
    ecosystem: "Learning Made For You",
    url: "https://www.playlab.ai/project/cmjaeekgr0v8zoh0uyekhpypc",
    icon: "BrainCircuit",
    tags: ["Interdisciplinary", "Big Picture"],
    description: "Helps students situate learning within the broader scientific and interdisciplinary landscape.",
    problem: "Students fail to see how ideas transfer across domains.",
    impact: "Promotes transfer of learning and constructs a broader understanding.",
    useCase: "An engineering student learns how differential equations apply across physics and numerical methods."
  },

  // Ecosystem: Mental Health & Stress
  {
    id: 38,
    name: "MellowMind",
    category: "Mental Health",
    ecosystem: "Student Mental Health",
    url: "https://www.playlab.ai/project/cmhmu5oay00hdpr0urh7rh5mb",
    icon: "HeartPulse",
    tags: ["Emotional Triage", "Grounding"],
    description: "Provides emotional triage and grounding strategies when students feel overwhelmed by academic stress.",
    problem: "Burnout is often mischaracterized as a personal failure rather than a systemic consequence.",
    impact: "Offers emotional validation and directs attention to calming strategies to prevent stress from escalating.",
    useCase: "A student feels panicked about workload. MellowMind provides a venting space and breathing exercises."
  },
  {
    id: 39,
    name: "MindTrace",
    category: "Mental Health",
    ecosystem: "Student Mental Health",
    url: "https://www.playlab.ai/project/cmjanlufy1ftnoc0uszq0an01",
    icon: "BrainCircuit",
    tags: ["Reflection", "Trigger Identification"],
    description: "Helps students identify recurring triggers, habits, and systemic pressures driving their burnout.",
    problem: "Students often don't understand why stress cycles repeat, blaming themselves.",
    impact: "Empowers students with insight to support healthier boundary-setting.",
    useCase: "MindTrace guides a quick check-in, identifying a pattern of overcommitting early in the week due to comparison."
  },
  {
    id: 40,
    name: "Clarity",
    category: "Mental Health",
    ecosystem: "Student Mental Health",
    url: "https://www.playlab.ai/project/cmj9lchyj0fayoh0u1sbdjdmt",
    icon: "Target",
    tags: ["Task Organization", "Prioritization"],
    description: "Helps students organize overwhelming academic tasks into clear, actionable plans to restore control.",
    problem: "Task ambiguity leading to procrastination, avoidance, and self-blame.",
    impact: "Reduces overwhelm, increases agency, and decreases paralysis.",
    useCase: "A student with multiple midterms uses Clarity to identify urgent deadlines and pick a realistic starting action."
  },
  {
    id: 41,
    name: "CampusCompass",
    category: "Mental Health",
    ecosystem: "Student Mental Health",
    url: "https://www.playlab.ai/project/cmj9j08y80ao9jx0vsk85zjlk",
    icon: "Compass",
    tags: ["Resource Navigation", "Support Access"],
    description: "Helps students navigate campus support systems when feeling overwhelmed or burned out.",
    problem: "Support systems are fragmented and difficult to navigate, causing delayed help-seeking.",
    impact: "Lowers the barrier to early help-seeking and reduces confusion.",
    useCase: "A burned-out student uses the bot to find the most relevant campus resource and gets an email template to reach out."
  },

  // Ecosystem: Vulnerable Students (College Access)
  {
    id: 42,
    name: "Next Steps AI",
    category: "College Access",
    ecosystem: "Support for Vulnerable Students",
    url: "https://www.playlab.ai/project/cmj7lddrb1p9yl80uig54is2y",
    icon: "Compass",
    tags: ["Goal Setting", "Post-High School"],
    description: "Helps first-generation students figure out their post-high school path, choosing between college or trades.",
    problem: "First-gen students lack guidance and face a knowledge gap about their options.",
    impact: "Bridges the knowledge gap and breaks the first barrier of entry to higher education.",
    useCase: "A high school senior unsure about her future explores options without pressure."
  },
  {
    id: 43,
    name: "BoundForSuccess",
    category: "College Access",
    ecosystem: "Support for Vulnerable Students",
    url: "https://www.playlab.ai/project/cmivbvmqc31byje0uc2pxjvun",
    icon: "Clock",
    tags: ["Application Planning", "Timeline"],
    description: "A personalized organizer bot that creates a timeline and checklist for college applications.",
    problem: "First-gen students experience confusion during the application process.",
    impact: "Provides clear, structured guidance to reduce stress.",
    useCase: "A junior overwhelmed by college requirements gets a personalized checklist and timeline."
  },
  {
    id: 44,
    name: "College Recommendation Chatbot",
    category: "College Access",
    ecosystem: "Support for Vulnerable Students",
    url: "https://www.playlab.ai/project/cmja222xm0wnyls0uygs2pi4b",
    icon: "GraduationCap",
    tags: ["College Search", "Financial Fit"],
    description: "A supportive counselor that finds the top three schools aligning with a student's academic, financial, and personal profile.",
    problem: "Students choose schools based on prestige, ignoring financial health and cultural belonging.",
    impact: "Mitigates financial risk, reduces transfer shock, and streamlines decision-making.",
    useCase: "A student paralyzed by college choices filters for affordable nursing programs with a small-town vibe."
  },
  {
    id: 45,
    name: "Piqi Bot",
    category: "College Access",
    ecosystem: "Support for Vulnerable Students",
    url: "https://www.playlab.ai/project/cmiyc8pmo1hhqmv0ueun5yp7g",
    icon: "BookOpen",
    tags: ["Essay Support", "PIQs"],
    description: "An expert writing tutor for college application essays (PIQs) for first-gen/ESL students.",
    problem: "Marginalized students lack access to writing tutors and counselors.",
    impact: "Strengthens writing skills and encourages self-reflection on identities.",
    useCase: "A student stuck on their PIQs gets immediate assistance without waiting for an overworked school counselor."
  },
  {
    id: 46,
    name: "navigAID",
    category: "College Access",
    ecosystem: "Support for Vulnerable Students",
    url: "https://www.playlab.ai/project/cmj7n9vfs055gln0v5dh1145d",
    icon: "ShieldCheck",
    tags: ["Financial Aid", "FAFSA"],
    description: "Helps students and parents navigate the FAFSA and financial aid process.",
    problem: "FAFSA is notoriously difficult, assuming students have guidance at home.",
    impact: "Demystifies FAFSA, increasing user confidence and agency.",
    useCase: "A student and single parent use the bot to break down FAFSA into clear, manageable steps."
  },
  {
    id: 47,
    name: "College Para Todos",
    category: "College Access",
    ecosystem: "Support for Vulnerable Students",
    url: "https://www.playlab.ai/project/cmitqnrxp03rgkt0u852tojct",
    icon: "GraduationCap",
    tags: ["Bilingual Support", "Family Access"],
    description: "A bilingual chatbot that supports first-generation students and Spanish-speaking families with college access.",
    problem: "Language-based exclusion leaves multilingual families unable to fully engage.",
    impact: "Reduces language barriers and strengthens family involvement.",
    useCase: "Carmen opens the bot with her parents to receive clear, bilingual explanations of FAFSA steps."
  },

  // Ecosystem: Teacher Burnout
  {
    id: 48,
    name: "Lighthouse",
    category: "Teacher Support",
    ecosystem: "Teacher Burnout",
    url: "https://www.playlab.ai/project/cmj8uvva43y3zpy0ufd9ft21s",
    icon: "HeartPulse",
    tags: ["Emotional Triage", "Venting"],
    description: "An emotional triage system for teachers to process 'invisible labor' and name their state of mind.",
    problem: "The hidden curriculum of teaching demands educators handle emotional strain privately.",
    impact: "Reduces compassion fatigue, provides emotional clarity, and routes teachers to support.",
    useCase: "After a draining parent-teacher conference, a teacher records a voice note to validate the emotional toll."
  },
  {
    id: 49,
    name: "The Circle",
    category: "Teacher Support",
    ecosystem: "Teacher Burnout",
    url: "https://www.playlab.ai/project/cmj94m27s54wipy0unckcz6vt",
    icon: "Users",
    tags: ["Peer Support", "Communal Wisdom"],
    description: "A communal connection agent that links individual struggles to peer-tested strategies and collective expertise.",
    problem: "Teachers manage dynamics in isolation, reinforcing the idea that asking for help is incompetence.",
    impact: "Validates struggles as systemic and fosters psychological safety.",
    useCase: "A teacher receives an accusatory parent email and uses Circle to find peer-vetted email templates."
  },
  {
    id: 50,
    name: "Classroom Grove",
    category: "Teacher Support",
    ecosystem: "Teacher Burnout",
    url: "https://www.playlab.ai/project/cmizj9b5r673pmv0uwdrf6ttv",
    icon: "Zap",
    tags: ["Prep Relief", "Automation"],
    description: "Provides immediate 'prep relief' by automating lesson plans, rubrics, and administrative busy work.",
    problem: "Teachers face immense time scarcity and unpaid invisible labor.",
    impact: "Recovers cognitive bandwidth by automating manual prep, allowing teachers to rest.",
    useCase: "A drained teacher uses Grove to instantly generate a structured activity, reclaiming prep time to breathe."
  },
  {
    id: 51,
    name: "Horizon",
    category: "Teacher Support",
    ecosystem: "Teacher Burnout",
    url: "https://www.playlab.ai/project/cmjaq8ojt0857oh0ukk1ishe1",
    icon: "Target",
    tags: ["Boundary Setting", "Long-term Planning"],
    description: "A macro-level advisor that helps teachers audit workloads and build systems to prevent future burnout.",
    problem: "Interventions are reactive; teachers return to unsustainable routines after crises.",
    impact: "Establishes boundaries and redistributes workloads across the year.",
    useCase: "After a grueling grading period, Horizon helps a teacher adjust the syllabus to include low-prep weeks."
  },

  // Ecosystem: Breaking Banking Bots
  {
    id: 52,
    name: "Praxis Bot",
    category: "Banking Education",
    ecosystem: "Breaking Banking Bots",
    url: "https://www.playlab.ai/project/cmjavbcnb03dgng0uusvy72ul",
    icon: "BrainCircuit",
    tags: ["Leadership Reflection", "Systemic Change"],
    description: "Helps educational leaders critically reflect on how school policies shape power dynamics.",
    problem: "Banking education persists in top-down decision-making and tracking systems.",
    impact: "Disrupts inequitable systems and urges critical reflection towards equity.",
    useCase: "A superintendent uses the bot to examine policies causing lower college enrollment for students of color."
  },
  {
    id: 53,
    name: "Questioning Creation",
    category: "Banking Education",
    ecosystem: "Breaking Banking Bots",
    url: "https://www.playlab.ai/project/cmj66bw3c0b0qi50ulmfvy7mr",
    icon: "ShieldCheck",
    tags: ["Media Literacy", "Critical Thinking"],
    description: "Facilitates deep critical thinking about educational materials and media sources to identify bias.",
    problem: "Students passively accept content as unquestionable truth.",
    impact: "Ensures materials are critiqued, fostering active inquiry and media literacy.",
    useCase: "A teacher reviewing a new textbook uses the bot to identify biases and adjust lesson plans."
  },
  {
    id: 54,
    name: "Voice Unlocked",
    category: "Banking Education",
    ecosystem: "Breaking Banking Bots",
    url: "",
    icon: "Sparkles",
    tags: ["Student Voice", "Authentic Expression"],
    description: "Helps students express what they've learned in their own authentic voice, moving away from rote memorization.",
    problem: "Traditional schooling positions students as passive recipients struggling to articulate personal understanding.",
    impact: "Shifts students from passive absorption to active creation, developing ownership over ideas.",
    useCase: "A student understands a lecture but struggles to explain it. The bot prompts a personal lens to express the concept authentically."
  },

  // Ecosystem: Midterm Time Management
  {
    id: 55,
    name: "Pulse AI",
    category: "Exam Prep",
    ecosystem: "Midterm Time Management",
    url: "https://www.playlab.ai/project/cmfot5qay01gtmt0us2trtfle",
    icon: "HeartPulse",
    tags: ["Survival Tasks", "Logistics"],
    description: "Manages a student's daily survival tasks (hydration, meals, schedules) during high-stress exam periods.",
    problem: "Students sacrifice self-care to prioritize studying, leading to physical burnout.",
    impact: "Maintains a baseline of health and organization so students can focus on academics.",
    useCase: "A sick, stressed student uses the bot to get a quick 5-minute snack recipe and cancel non-essential plans."
  },
  {
    id: 56,
    name: "Calmo",
    category: "Exam Prep",
    ecosystem: "Midterm Time Management",
    url: "https://www.playlab.ai/project/cmiztry3c0cj8k90uty3wou62",
    icon: "HeartPulse",
    tags: ["Emotional Regulation", "Grounding"],
    description: "Guides students through brief regulation techniques when they feel anxious or stuck.",
    problem: "Emotional overload and stress-induced paralysis during midterms/finals.",
    impact: "Restores a regulated mental state, allowing students to re-engage with tasks.",
    useCase: "A student spiraling about failing uses Calmo for a 2-minute grounding exercise before returning to study."
  }
];

const categories = ["All", "STEM Engagement", "Public vs Private Good", "Executive Function", "Financial & Opportunity Gaps", "Career Guidance", "Inequity & Resources", "Personalized Learning", "Mental Health", "College Access", "Teacher Support", "Banking Education", "Exam Prep"];

const getIcon = (iconName) => {
  switch (iconName) {
    case 'Sparkles': return <Sparkles className="w-6 h-6" />;
    case 'Users': return <Users className="w-6 h-6" />;
    case 'BrainCircuit': return <BrainCircuit className="w-6 h-6" />;
    case 'BookOpen': return <BookOpen className="w-6 h-6" />;
    case 'GraduationCap': return <GraduationCap className="w-6 h-6" />;
    case 'Compass': return <Compass className="w-6 h-6" />;
    case 'ShieldCheck': return <ShieldCheck className="w-6 h-6" />;
    case 'HeartPulse': return <HeartPulse className="w-6 h-6" />;
    case 'Target': return <Target className="w-6 h-6" />;
    case 'Clock': return <Clock className="w-6 h-6" />;
    case 'Zap': return <Zap className="w-6 h-6" />;
    case 'BookMarked': return <BookMarked className="w-6 h-6" />;
    case 'MessageCircle': return <MessageCircle className="w-6 h-6" />;
    default: return <Bot className="w-6 h-6" />;
  }
};

export default function AISolutionsStudio() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedBot, setSelectedBot] = useState(null);

  const filteredBots = botData.filter(bot => {
    const matchesCategory = activeCategory === "All" || bot.category === activeCategory;
    const matchesSearch = bot.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          bot.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          bot.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-white font-sans text-blue-950 flex flex-col">
      {/* Header */}
      <header className="bg-blue-900 border-b border-blue-950 px-8 py-6 sticky top-0 z-10 shadow-lg">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-amber-400 rounded-lg text-blue-950 shadow-md">
              <Bot className="w-8 h-8" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-white tracking-wide">AI Solutions Studio</h1>
              <p className="text-sm text-blue-200 font-medium tracking-wider uppercase">Ecosystems for Educational Equity</p>
            </div>
          </div>
          
          <div className="relative w-full md:w-96 shadow-md rounded-full">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-blue-400 w-5 h-5" />
            <input 
              type="text" 
              placeholder="Search by bot, problem, or tag..." 
              className="w-full pl-10 pr-4 py-2 bg-blue-800/50 border border-blue-700 text-white placeholder-blue-300 rounded-full focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent transition-all"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow max-w-7xl mx-auto w-full px-4 sm:px-8 py-8">
        
        {/* Categories / Filters */}
        <div className="mb-8">
          <div className="flex items-center gap-2 mb-4">
            <Filter className="w-5 h-5 text-amber-500" />
            <h2 className="text-lg font-bold text-blue-900 uppercase tracking-wide">Filter by Theme</h2>
          </div>
          <div className="flex flex-wrap gap-2">
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-semibold transition-all duration-200 ${
                  activeCategory === category 
                    ? "bg-amber-400 text-blue-950 shadow-md ring-2 ring-amber-400 ring-offset-2" 
                    : "bg-white text-blue-800 border border-blue-200 hover:bg-blue-50 hover:border-blue-300"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredBots.map(bot => (
            <div 
              key={bot.id} 
              className="bg-white rounded-2xl p-6 border-2 border-blue-100 shadow-sm hover:shadow-xl hover:border-amber-400 transition-all duration-300 cursor-pointer flex flex-col h-full group"
              onClick={() => setSelectedBot(bot)}
            >
              <div className="flex justify-between items-start mb-4">
                <div className={`p-3 rounded-xl bg-amber-100 text-blue-900 group-hover:bg-amber-400 group-hover:scale-110 transition-all duration-300 shadow-sm`}>
                  {getIcon(bot.icon)}
                </div>
                <span className="text-xs font-bold px-3 py-1 bg-blue-50 text-blue-800 rounded-full border border-blue-100">
                  {bot.category}
                </span>
              </div>
              
              <h3 className="text-xl font-extrabold text-blue-950 mb-1 group-hover:text-blue-700 transition-colors">
                {bot.name}
              </h3>
              <p className="text-xs font-bold text-blue-500/70 mb-3 uppercase tracking-wider">
                {bot.ecosystem}
              </p>
              
              <p className="text-blue-800 text-sm leading-relaxed mb-4 flex-grow">
                {bot.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-1 mb-5">
                {bot.tags.map((tag, index) => (
                  <span key={index} className="text-[10px] font-bold px-2 py-1 bg-blue-50 text-blue-600 rounded-md border border-blue-100/50 uppercase tracking-wide">
                    {tag}
                  </span>
                ))}
              </div>
              
              <button className="w-full py-2.5 bg-blue-50 hover:bg-blue-900 text-blue-800 hover:text-white text-sm font-bold rounded-lg border border-blue-200 transition-all mt-auto group-hover:shadow-md">
                View Details
              </button>
            </div>
          ))}
        </div>

        {filteredBots.length === 0 && (
          <div className="text-center py-20 bg-blue-50 rounded-2xl border-2 border-dashed border-blue-200 mt-8">
            <div className="inline-flex justify-center items-center w-16 h-16 rounded-full bg-blue-100 mb-4 text-amber-500">
              <Search className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold text-blue-950">No chatbots found</h3>
            <p className="text-blue-700 font-medium mt-2">Try adjusting your search or theme filters.</p>
          </div>
        )}
      </main>

      {/* Modal / Deep Dive */}
      {selectedBot && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
          <div 
            className="absolute inset-0 bg-blue-950/60 backdrop-blur-sm"
            onClick={() => setSelectedBot(null)}
          ></div>
          <div className="bg-white w-full max-w-3xl rounded-2xl shadow-2xl relative z-10 overflow-hidden flex flex-col max-h-[90vh] border border-blue-200">
            
            {/* Modal Header */}
            <div className="p-6 sm:p-8 bg-blue-900 text-white flex justify-between items-start border-b-4 border-amber-400">
              <div className="flex gap-5 items-center">
                <div className="p-4 rounded-xl bg-amber-400 text-blue-950 shadow-lg">
                  {getIcon(selectedBot.icon)}
                </div>
                <div>
                  <h2 className="text-3xl font-black tracking-wide">{selectedBot.name}</h2>
                  <p className="text-sm font-bold text-amber-300 uppercase tracking-widest mt-1">
                    {selectedBot.category} • {selectedBot.ecosystem}
                  </p>
                </div>
              </div>
              <button 
                onClick={() => setSelectedBot(null)}
                className="p-2 bg-blue-800 hover:bg-amber-400 hover:text-blue-950 rounded-full transition-all"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-6 sm:p-8 overflow-y-auto bg-slate-50">
              <div className="space-y-6">
                
                {/* Tags */}
                <div className="flex flex-wrap gap-2 pb-2">
                  {selectedBot.tags.map((tag, idx) => (
                    <span key={idx} className="px-3 py-1 bg-white border border-blue-200 text-blue-800 text-xs font-bold uppercase tracking-wider rounded-md shadow-sm">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="bg-white p-5 rounded-xl border border-blue-100 shadow-sm">
                  <h4 className="text-sm font-black text-amber-500 uppercase tracking-widest mb-2 flex items-center gap-2">
                    <Bot className="w-5 h-5 text-blue-900" /> Core Description
                  </h4>
                  <p className="text-blue-950 font-medium leading-relaxed">
                    {selectedBot.description}
                  </p>
                </div>

                <div className="bg-blue-50 p-5 rounded-xl border border-blue-200 shadow-sm">
                  <h4 className="text-sm font-black text-blue-900 uppercase tracking-widest mb-2 flex items-center gap-2">
                    <BrainCircuit className="w-5 h-5 text-amber-500" /> Problem Addressed
                  </h4>
                  <p className="text-blue-900 leading-relaxed font-medium">
                    {selectedBot.problem}
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="bg-white p-5 rounded-xl border border-blue-100 shadow-sm">
                    <h4 className="text-sm font-black text-amber-500 uppercase tracking-widest mb-2 flex items-center gap-2">
                      <Sparkles className="w-5 h-5 text-blue-900" /> Intended Impact
                    </h4>
                    <p className="text-blue-950 text-sm leading-relaxed font-medium">
                      {selectedBot.impact}
                    </p>
                  </div>
                  <div className="bg-white p-5 rounded-xl border border-blue-100 shadow-sm">
                    <h4 className="text-sm font-black text-amber-500 uppercase tracking-widest mb-2 flex items-center gap-2">
                      <Users className="w-5 h-5 text-blue-900" /> Situational Use Case
                    </h4>
                    <p className="text-blue-900 text-sm leading-relaxed italic border-l-4 border-amber-400 pl-4 py-1">
                      "{selectedBot.useCase}"
                    </p>
                  </div>
                </div>

              </div>
            </div>
            
            {/* Modal Footer */}
            <div className="p-4 sm:px-8 sm:py-5 border-t border-blue-200 bg-white flex justify-between items-center">
              <div>
                {selectedBot.url ? (
                  <a 
                    href={selectedBot.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-2.5 bg-amber-400 hover:bg-amber-500 text-blue-950 font-black tracking-wide rounded-lg shadow-md transition-all hover:-translate-y-0.5"
                  >
                    Remix this Chatbot <ExternalLink className="w-4 h-4" />
                  </a>
                ) : (
                  <span className="text-sm font-bold text-blue-400 italic flex items-center gap-2">
                    <Bot className="w-4 h-4"/> Demo coming soon
                  </span>
                )}
              </div>
              <button 
                onClick={() => setSelectedBot(null)}
                className="px-6 py-2.5 bg-blue-900 text-white font-bold tracking-wide rounded-lg hover:bg-blue-800 transition-colors shadow-md"
              >
                Close Prototype
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
