/**
 * Alumni exactly as published on brototype.com/alumni.
 * `kind` — 'placed' = salary at placement, 'current' = current salary.
 * `lpa: null` — salary not disclosed on the public page.
 */
export const alumni = [
  { name: 'Arun P S', stack: 'MERN Stack', track: 'Web', company: 'Georg Rugamer GmbH', lpa: 35, kind: 'placed' },
  { name: 'Zameer Ahamed', stack: 'MERN Stack', track: 'Web', company: 'eMinds (Etisalat)', lpa: 32, kind: 'placed' },
  { name: 'Anoop Sukumaran Nair', stack: 'MERN Stack', track: 'Web', company: 'Cromwell Tools', lpa: 32, kind: 'current' },
  { name: 'Faizal', stack: 'MERN Stack', track: 'Web', company: 'Reach Employment Services (Etisalat)', lpa: 31.2, kind: 'placed' },
  { name: 'Muhammed Elham P N', stack: 'Java Spring Boot + React', track: 'Web', company: 'Etisalat Telecommunication Corp', lpa: 26.85, kind: 'placed' },
  { name: 'Jafin Jahfar', stack: 'MERN Stack', track: 'Web', company: 'Sellscript', lpa: 20, kind: 'current' },
  { name: 'Aleena Alphons Roy', stack: 'MERN Stack', track: 'Web', company: 'Orion Innovation', lpa: 18, kind: 'placed' },
  { name: 'Rinas Usman N K T', stack: 'MERN Stack', track: 'Web', company: 'Sam Corporate', lpa: 18, kind: 'current' },
  { name: 'Alan Biju Varghese', stack: 'MERN Stack', track: 'Web', company: 'ELT Global Pvt. Ltd.', lpa: 15, kind: 'current' },
  { name: 'Dheeraj S', stack: 'MEAN Stack', track: 'Web', company: 'Atmecs', lpa: 15, kind: 'current' },
  { name: 'Aflah Backer A K', stack: 'MERN Stack', track: 'Web', company: 'Loti AI', lpa: 15, kind: 'current' },
  { name: 'Salman NS', stack: 'Flutter', track: 'Mobile', company: 'RAK Properties PJSC', lpa: 15, kind: 'current' },
  { name: 'Vyshak Kannan', stack: 'Python Django', track: 'Web', company: 'TigressXyber Technology', lpa: 15, kind: 'current' },
  { name: 'Ahsan Zakir', stack: 'Python Django', track: 'Web', company: 'SmartNet', lpa: 15, kind: 'current' },
  { name: 'Asif Azad PT', stack: 'MERN Stack', track: 'Web', company: 'Cartrack', lpa: 14, kind: 'current' },
  { name: 'Abilash', stack: 'Python Django', track: 'Web', company: 'Cloudium', lpa: 14, kind: 'current' },
  { name: 'Fahad Thondiyil Thazhe', stack: 'Flutter', track: 'Mobile', company: 'Alletre Ecommerce', lpa: 13.5, kind: 'placed' },
  { name: 'Mohammed Basim', stack: 'Android Kotlin', track: 'Mobile', company: 'Locus', lpa: 13, kind: 'current' },
  { name: 'Saneen Mohamed', stack: 'Python Django + React', track: 'Web', company: 'The Data Duck', lpa: 13, kind: 'placed' },
  { name: 'Muhammed Shahabaz K C', stack: 'MERN Stack', track: 'Web', company: 'Embify', lpa: 13, kind: 'current' },
  { name: 'Arshad Sanin P V', stack: 'Flutter', track: 'Mobile', company: 'Smart Tester', lpa: 12.2, kind: 'current' },
  { name: 'Niketh Dileep Kumar', stack: 'Python Django + React', track: 'Web', company: 'Persistent', lpa: null, kind: 'placed' },
  { name: 'Aravind Sanjeev', stack: 'MERN Stack', track: 'Web', company: 'Uxbert Labs', lpa: null, kind: 'placed' },
  { name: 'Kamarudheen M V', stack: 'MERN Stack', track: 'Web', company: 'Alle Tre E-commerce Complex', lpa: null, kind: 'placed' },
  { name: 'Mohammed Khabil', stack: '.NET', track: 'Web', company: 'Aiotron', lpa: null, kind: 'placed' },
  { name: 'Divine Sam', stack: 'Data Engineering', track: 'Data', company: 'NxtWave Disruptive Technologies', lpa: null, kind: 'placed' },
  { name: 'Reshma R B', stack: 'Data Science', track: 'Data', company: 'IQVIA', lpa: null, kind: 'placed' },
  { name: 'Krishnadas S', stack: 'MERN Stack', track: 'Web', company: 'HME Solutions', lpa: null, kind: 'placed' },
  { name: 'Vishnu N Raj', stack: 'MERN Stack', track: 'Web', company: 'Fleapo Co.', lpa: null, kind: 'placed' },
  { name: 'Raazi Muhammed K', stack: 'MERN Stack', track: 'Web', company: 'Fleapo Co.', lpa: null, kind: 'placed' },
];

export const initials = (name) => {
  const parts = name.trim().split(/\s+/);
  return (parts.length > 1 ? parts[0][0] + parts[1][0] : name.slice(0, 2)).toUpperCase();
};

/** Transformation stories — official Brototype videos on YouTube. */
export const stories = [
  { id: 'Suk8FX2OIhg', from: '₹5,500 a month', to: 'Software engineer', title: 'From a ₹5,500 monthly salary job to a software engineer' },
  { id: 'yK7_jx_D_w8', from: 'Plus Two, age 18', to: '₹15 lakh a year', title: '18-year-old earns 15 lakh as a developer after +2' },
  { id: 'mepWc1QBNO4', from: 'Aeronautical', to: 'Engineer in 7 months', title: 'Aeronautical to software engineer in 7 months' },
  { id: 'y9FJpKGP9QY', from: 'Plus Two student', to: '₹10 lakh+ salary', title: '+2 student becomes a developer with a 10 lakh+ salary' },
  { id: 'QchI27k9bZo', from: 'Plus Two student', to: '11.5 LPA job', title: 'How a +2 student landed an 11.5 LPA job' },
  { id: 'XHOxwTGl2bA', from: 'An accident', to: '₹11 lakh in IT', title: 'How an accident pushed him to an 11 lakh salary in IT' },
];

export const explainers = [
  { id: '3YNspKWK_5A', title: 'What is Brocamp?' },
  { id: '8BJJcAnSuRU', title: 'How Brocamp works' },
];

/** Qualifications of placed alumni — from the /alumni qualification filter. */
export const qualifications = [
  'SSLC', 'Plus Two', 'ITI', 'Diploma', 'BA', 'BCom', 'BBA', 'BSc', 'BCA', 'B.Tech', 'BE', 'B.Arch',
  'B.Ed', 'B.Voc', 'BHM', 'BPT', 'BPharm', 'Pharm.D', 'MA', 'MCom', 'MBA', 'MSc', 'MCA', 'MSW', 'M.Tech', 'ME',
];

/**
 * Where alumni were placed — a selection from the /alumni location filter,
 * with coordinates for the globe. Kochi is the origin of every arc.
 */
export const origin = { name: 'Kochi', lat: 9.97, lon: 76.28 };

export const destinations = [
  { name: 'Bengaluru', lat: 12.97, lon: 77.59, region: 'India' },
  { name: 'Chennai', lat: 13.08, lon: 80.27, region: 'India' },
  { name: 'Hyderabad', lat: 17.39, lon: 78.49, region: 'India' },
  { name: 'Mumbai', lat: 19.08, lon: 72.88, region: 'India' },
  { name: 'Pune', lat: 18.52, lon: 73.86, region: 'India' },
  { name: 'Delhi', lat: 28.61, lon: 77.21, region: 'India' },
  { name: 'Kolkata', lat: 22.57, lon: 88.36, region: 'India' },
  { name: 'Ahmedabad', lat: 23.02, lon: 72.57, region: 'India' },
  { name: 'Dubai', lat: 25.2, lon: 55.27, region: 'Middle East' },
  { name: 'Abu Dhabi', lat: 24.45, lon: 54.38, region: 'Middle East' },
  { name: 'Doha', lat: 25.29, lon: 51.53, region: 'Middle East' },
  { name: 'Bahrain', lat: 26.23, lon: 50.59, region: 'Middle East' },
  { name: 'Singapore', lat: 1.35, lon: 103.82, region: 'Asia Pacific' },
  { name: 'Metro Manila', lat: 14.6, lon: 120.98, region: 'Asia Pacific' },
  { name: 'Melbourne', lat: -37.81, lon: 144.96, region: 'Asia Pacific' },
  { name: 'Perth', lat: -31.95, lon: 115.86, region: 'Asia Pacific' },
  { name: 'Parramatta', lat: -33.81, lon: 151.0, region: 'Asia Pacific' },
  { name: 'London', lat: 51.51, lon: -0.13, region: 'Europe' },
  { name: 'Dublin', lat: 53.35, lon: -6.26, region: 'Europe' },
  { name: 'Luxembourg', lat: 49.61, lon: 6.13, region: 'Europe' },
  { name: 'Gilching', lat: 48.11, lon: 11.3, region: 'Europe' },
  { name: 'Scotland', lat: 55.95, lon: -3.19, region: 'Europe' },
  { name: 'Toronto', lat: 43.65, lon: -79.38, region: 'Americas' },
  { name: 'San Francisco', lat: 37.77, lon: -122.42, region: 'Americas' },
  { name: 'Los Angeles', lat: 34.05, lon: -118.24, region: 'Americas' },
  { name: 'Tampa', lat: 27.95, lon: -82.46, region: 'Americas' },
  { name: 'Hermanus', lat: -34.42, lon: 19.23, region: 'Africa' },
];

export const placeNames = [
  'Kochi', 'Bengaluru', 'Chennai', 'Hyderabad', 'Mumbai', 'Pune', 'Delhi', 'Kolkata', 'Coimbatore', 'Thiruvananthapuram',
  'Kozhikode', 'Thrissur', 'Dubai', 'Abu Dhabi', 'Sharjah', 'Doha', 'Bahrain', 'Singapore', 'Metro Manila', 'Melbourne',
  'Perth', 'London', 'Cambridge', 'Dublin', 'Luxembourg', 'Germany', 'Scotland', 'Toronto', 'San Francisco', 'Menlo Park',
  'Sunnyvale', 'Los Angeles', 'Tampa', 'Remote',
];

/** Places alumni work in, grouped — all taken from the /alumni location filter. */
export const regions = [
  {
    name: 'India',
    lon: 78,
    lat: 16,
    places: ['Kochi', 'Bengaluru', 'Chennai', 'Hyderabad', 'Mumbai', 'Pune', 'Delhi', 'Noida', 'Gurugram', 'Kolkata', 'Ahmedabad', 'Jaipur', 'Indore', 'Chandigarh', 'Coimbatore', 'Thiruvananthapuram', 'Kozhikode', 'Thrissur', 'Mangalore', 'Mysore', 'Goa', 'Visakhapatnam'],
  },
  {
    name: 'Middle East',
    lon: 52,
    lat: 22,
    places: ['Dubai', 'Abu Dhabi', 'Sharjah', 'Ajman', 'Fujairah', 'Ras Al-Khaimah', 'Doha', 'Bahrain'],
  },
  {
    name: 'Europe',
    lon: 4,
    lat: 40,
    places: ['London', 'Cambridge', 'Berkshire', 'Bolton', 'Scotland', 'Dublin', 'Luxembourg', 'Gilching'],
  },
  {
    name: 'Americas',
    lon: -100,
    lat: 30,
    places: ['San Francisco', 'San Jose', 'San Mateo', 'Menlo Park', 'Sunnyvale', 'Los Angeles', 'Tampa', 'McKinney', 'Toronto', 'Tortola'],
  },
  {
    name: 'Asia Pacific',
    lon: 128,
    lat: -8,
    places: ['Singapore', 'Metro Manila', 'Melbourne', 'Glen Waverley', 'Perth', 'Parramatta'],
  },
  {
    name: 'Africa',
    lon: 20,
    lat: -12,
    places: ['Hermanus'],
  },
];

/** Cities that get a label on the globe (indices into `destinations`). */
export const labelled = ['Dubai', 'London', 'Singapore', 'Melbourne', 'San Francisco', 'Toronto', 'Bengaluru', 'Delhi'];
