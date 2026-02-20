// Array of names - customize this with your own list
const names =[
"Fairfax", "Fallon", "Felix", "Fenrik", "Fergus", "Ferris", "Fisher", "Fitzgerald", "Fitzroy", "Fletcher", "Forrest", "Forrester", "Foster", "Frankie", "Franklin", "Fraser", "Freddie", "Frederick", "Fuller", "Gabriel", "Gable", "Gaelen", "Gaius", "Galen", "Gallagher", "Galvin", "Gareth", "Garrett", "Garrick", "Gary", "Gavin", "Geoffrey", "Geordie", "Georgie", "Gerald", "Gerard", "Gideon", "Giles", "Gordon", "Grady", "Graham", "Gregory", "Griffin", "Grover", "Guthrie", "Jackson", "Jacob", "Jaden", "Jared", "Jason", "Jaspen", "Jasper", "Jeffrey", "Jeremy", "Jerome", "Jerry", "Jimmy", "Joel", "Joey", "Jonah", "Jordan", "Joseph", "Joshua", "Julian", "Julius", "Justin"
]

// Better seeded random number generator using mulberry32
function getSeededRandom(seed) {
  let t = seed + 0x6D2B79F5;
  t = Math.imul(t ^ (t >>> 15), t | 1);
  t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
  return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
}

// Convert date string to numeric seed
function dateToSeed(dateString) {
  let hash = 0;
  for (let i = 0; i < dateString.length; i++) {
    hash = (hash << 5) - hash + dateString.charCodeAt(i);
    hash = hash & hash; // Convert to 32-bit integer
  }
  return Math.abs(hash);
}

// Get today's name based on current date
function getTodayName() {
  const today = new Date();
  const dateString = today.toISOString().split("T")[0]; // Format: YYYY-MM-DD

  const seed = dateToSeed(dateString);
  const randomValue = getSeededRandom(seed);
  const index = Math.floor(randomValue * names.length);

  return names[index];
}

// Format date for display
function formatDate() {
  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  return new Date().toLocaleDateString("en-US", options);
}

// Initialize the page
document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("todayName").textContent = getTodayName();
  document.getElementById("currentDate").textContent = formatDate();
});
