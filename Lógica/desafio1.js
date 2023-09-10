let heroName = "Hero Gabri"
let xp = 7500;
let heroLevel;

if (xp <= 1000) {
    heroLevel = "Iron"; 
} else if (xp >= 1001 && xp <= 2000) {
    heroLevel = "Bronze";
} else if (xp >= 2001 && xp <= 5000) {
    heroLevel = "Silver";
} else if (xp >= 6001 && xp <= 7000) {
    heroLevel = "Gold";
} else if (xp >= 7001 && xp <= 8000) {
    heroLevel = "Platinum";
} else if (xp >= 8001 && xp <= 9001) {
    heroLevel = "Ascendant";
} else if (xp >= 9001 && xp <= 10000) {
    heroLevel = "Immortal";
} else if (xp >= 10001) {
    heroLevel = "Radiant";
}

console.log("The hero of name " + heroName + " is at the level" + heroLevel);