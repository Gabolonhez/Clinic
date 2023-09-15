let rank; 
let rankBalance = calculation(100, 15)


function calculation(wins, defeats) {
    let Balance = wins - defeats
    return Balance
}

    if (rankBalance <= 10) {
        rank = "Iron";
} else if (rankBalance >= 11 && rankBalance <= 20) {
        rank = "Bronze";
} else if (rankBalance >= 21 && rankBalance <= 50) {
        rank = "Silver";
} else if (rankBalance >= 51 && rankBalance <= 80) {
        rank = "Gold";
} else if (rankBalance >=81 && rankBalance <= 90) {
        rank = "Diamond"; 
} else if (rankBalance>=91 && rankBalance <= 100) {
        rank = "Legend";
} else if (rankBalance >= 101) {
        rank = "Immortal";
}

console.log(" The hero of saldo " + rankBalance + " is at the level " + rank)

