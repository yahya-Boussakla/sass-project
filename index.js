const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Entrez votre nom : ', (nom) => {
    rl.question('Entrez votre prénom : ', (prenom) => {

        console.log(`bonjour ${nom} ${prenom}`);
        rl.close();

    });
});