const seconds = 600;

// ✅ get hh:mm:ss string
const result = new Date(seconds * 1000).toISOString().slice(11, 19);
console.log(result); // 👉️ "00:10:00" (hh:mm:ss)

// ✅ if seconds are less than 1 hour and you only need mm:ss
const result2 = new Date(seconds * 1000).toISOString().slice(14, 19);
console.log(result2); // 👉️ "10:00" (mm:ss)
