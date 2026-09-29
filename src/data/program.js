/**
 * Brocamp structure, principles, FAQs — facts from brototype.com/brocamp.
 * Copy is rewritten; durations, fees and conditions are unchanged.
 */

export const phases = [
  {
    no: '01',
    name: 'Foundation',
    code: ["$ whoami", "> beginner", "$ echo \"hello, world\"", "> hello, world"],
    duration: '10 days',
    months: 0.33,
    verb: 'Begin',
    text: 'Learn the basics of programming, sharpen your problem-solving, and build personal and communication skills in a dedicated workshop.',
    out: 'You can think like a programmer.',
  },
  {
    no: '02',
    name: 'Onboarding',
    code: ["$ git init", "$ code .", "$ npm install", "> ready."],
    duration: '2 months',
    months: 2,
    verb: 'Equip',
    text: 'Understand the fundamentals of your chosen domain, explore its tools, and learn the way professionals actually work in it.',
    out: 'You know your tools.',
  },
  {
    no: '03',
    name: 'Hands-On Application',
    code: ["$ mkdir project-one", "$ git commit -m \"it works\"", "$ deploy --prod", "> live ✓"],
    duration: '1.5 months',
    months: 1.5,
    verb: 'Build',
    text: 'Create your first project — applying what you know to build a functional, practical application from a blank folder.',
    out: 'Project one, shipped.',
  },
  {
    no: '04',
    name: 'Diving Deep',
    code: ["function search(tree, x) {", "  // O(log n), not O(n)", "}", "> 52 tests passed"],
    duration: '2.5 months',
    months: 2.5,
    verb: 'Master',
    text: 'Master the important data structures, algorithms and advanced techniques you need to handle genuinely hard problems.',
    out: 'Hard problems stop being scary.',
  },
  {
    no: '05',
    name: 'Creativity & Teamwork',
    code: ["$ git checkout -b my-idea", "$ git merge team/feature", "> 0 conflicts", "> (eventually)"],
    duration: '4 months',
    months: 4,
    verb: 'Collaborate',
    text: 'Build your second project from your own idea, then join a team project and learn to ship software together.',
    out: 'Project two, plus a team build.',
  },
  {
    no: '06',
    name: 'Takeoff',
    code: ["$ interview --mock", "> technical ✓  hr ✓", "> communication ✓", "$ offer --accept"],
    duration: '1 month',
    months: 1,
    verb: 'Launch',
    text: 'Practise interviews, build a strong resume, and learn exactly how to walk into an interview and succeed.',
    out: 'You are interview-ready.',
  },
];

export const principles = [
  {
    no: '01',
    title: 'Win like an army',
    text: 'We work as a team, because we win only when you win. Nobody at Brocamp is left to figure it out alone.',
  },
  {
    no: '02',
    title: 'You are the student and the teacher',
    text: 'We learnt from others. You will learn from us. And someone else will learn from you. That is how the knowledge keeps moving.',
  },
  {
    no: '03',
    title: 'No one-size-fits-all classes',
    text: 'Freely explore the different areas of programming. Find what you are passionate about. Then get after it.',
  },
];

export const pillars = [
  {
    name: 'Open Material Education',
    text: 'The material is open. What you are here for is the structure, the reviews and the people beside you.',
  },
  {
    name: 'The BRO Learning Method',
    text: 'Self-learning with accountability: you do the work, and every week someone checks that it holds up.',
  },
  {
    name: 'Peer-to-Peer Learning',
    text: 'You learn a thing properly the day you explain it to someone else. So you will — constantly.',
  },
];

export const requirements = [
  { k: 'Prior coding experience', v: 'None needed' },
  { k: 'Degree', v: 'Not required' },
  { k: 'English', v: 'Read and write' },
  { k: 'Maths', v: 'Basic arithmetic' },
  { k: 'Laptop', v: '8 GB RAM · 128 GB SSD · 1.6 GHz' },
  { k: 'Attitude', v: 'Ready to work hard' },
];

export const admission = [
  { no: '01', title: 'Apply online', text: 'Fill in a short form. It takes about a minute.' },
  { no: '02', title: 'Admission assistance', text: 'The admissions team calls you back, answers every question and walks you through the next steps.' },
  { no: '03', title: 'Joining mail', text: 'You receive your joining mail, get allocated to a batch, and start with the 10-day Foundation.' },
];

export const faqs = [
  {
    group: 'The program',
    q: 'What is Brocamp?',
    a: 'Brocamp is a 12-month intensive program, split into two semesters, built to move people into high-paying software engineering careers. It combines hands-on training, industry-relevant projects and a high-performing community.',
  },
  {
    group: 'The program',
    q: 'Do I need prior programming experience?',
    a: 'No. You do not need any prior knowledge or experience in programming. You do need to be ready to learn.',
  },
  {
    group: 'The program',
    q: 'Who is eligible to join?',
    a: 'Anyone passionate about building a career in software engineering, regardless of background. You need basic mathematical skills and the ability to read and write in English.',
  },
  {
    group: 'The program',
    q: 'Can I join as a remote learner?',
    a: 'Yes. Brocamp offers both in-house and remote learning options.',
  },
  {
    group: 'The program',
    q: 'Do I need to bring my own laptop?',
    a: 'Yes — with at least 8 GB RAM, a 128 GB SSD and a 1.6 GHz processor. If you do not have one, a used laptop that meets these minimums is perfectly fine.',
  },
  {
    group: 'Fees',
    q: 'What is the fee structure?',
    a: 'You can choose Pay After Placement, where you pay for the program only after you get placed and start earning. Or you can choose Upfront Payment: ₹1,90,000 per semester, for two semesters.',
  },
  {
    group: 'Fees',
    q: 'Is there financial assistance or EMI?',
    a: 'Yes. The finance team arranges loans and EMI options based on eligibility.',
  },
  {
    group: 'Fees',
    q: 'Are there any additional fees?',
    a: 'No. There are no additional fees during the program. A fee applies only if you need to attend a supplementary exam.',
  },
  {
    group: 'Fees',
    q: 'What if I do not get a job after the program?',
    a: 'Brocamp carries a 100% money-back guarantee. If you complete the program within 12 months and are not placed within the following 12 months, you get your investment back. Terms and conditions apply.',
  },
  {
    group: 'Placement',
    q: 'How does Brocamp get me job-ready?',
    a: 'Completing the 12-month program on time gives you the skills the job actually needs: an industry-relevant curriculum, expert mentorship, weekly reviews and a community-driven approach designed around what software companies ask for.',
  },
  {
    group: 'Placement',
    q: 'What support do I get after the program?',
    a: 'Graduates stay part of the Brocamp community, with ongoing support and mentoring. You also receive QA team support until you secure a job.',
  },
  {
    group: 'Placement',
    q: 'What if I lose my job or want a better package later?',
    a: 'If you have completed the 12-month program, the placement team offers lifetime support to help you land a new job or move to a higher salary package.',
  },
  {
    group: 'Placement',
    q: 'How does the community help?',
    a: 'Over 2,300 Brocamp students have been placed in 1,220+ companies, and many now work as lead developers and in senior roles. Engage with that network well and referrals follow.',
  },
  {
    group: 'Admission',
    q: 'How does admission work?',
    a: 'Apply online, and the admissions team will call you. Once you are enrolled, the Admission Desk allocates you to a batch. Training begins with a 10-day Foundation phase, which is part of the 12-month program.',
  },
  {
    group: 'Admission',
    q: 'I am ready. What do I do?',
    a: 'Hit Apply, fill in your details, and the team will get in touch to guide you through the next steps. All the best — we are excited to have you on this journey.',
  },
];

export const moments = [
  'Vaaranam 1000 — alumni celebrations',
  'New batch kick-offs',
  'Typing championship at Brocamp',
  'Brototype meetup at Hyatt',
  'Hub opening — KINFRA Park, Calicut',
  'Brototype arrives in Bengaluru',
];
