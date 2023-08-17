const seconds = 600;

// ✅ get hh:mm:ss string
const result = new Date(seconds * 1000).toISOString().slice(11, 19);
console.log(result); // 👉️ "00:10:00" (hh:mm:ss)

// ✅ if seconds are less than 1 hour and you only need mm:ss
const result2 = new Date(seconds * 1000).toISOString().slice(14, 19);
console.log(result2); // 👉️ "10:00" (mm:ss)

// Funzione per aggiungere un preferito
function addFavorite(cityName, latitude, longitude) {
  // Controlla se i preferiti sono già presenti nel localStorage
  let favorites = JSON.parse(localStorage.getItem("weatherFavorites")) || [];

  // Aggiungi il nuovo preferito
  favorites.push({ cityName, latitude, longitude });
console.log({ cityName, latitude, longitude })
  // Salva nell'localStorage
  localStorage.setItem("weatherFavorites", JSON.stringify(favorites));
}

// Funzione per ottenere la lista dei preferiti
function getFavorites() {
  return JSON.parse(localStorage.getItem("weatherFavorites")) || [];
}

// Esempio di utilizzo
addFavorite("New York", 40.7128, -74.006);
addFavorite("Los Angeles", 34.0522, -118.2437);
addFavorite("London", 51.5074, -0.1278);

// Ottieni la lista dei preferiti
const favoritesList = getFavorites();
console.log(favoritesList);
