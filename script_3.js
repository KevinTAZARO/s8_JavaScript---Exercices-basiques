floor = prompt("Salut, bienvenue dans ma super pyramide ! Combien d'étages veux-tu  ?");
sol = "#";
i = 1;
while (i<=floor) {
    let line  = "";
    for (let k = 0; k < (floor+-i); k++) {
        line += " "  
    }
    for (let index = 0; index < i; index++) {
        line = line + sol;
    }
    i++;
    console.log(line);
}