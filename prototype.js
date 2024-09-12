const readline = require("readline");
const fs = require('fs');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const askQuestion = (query) => {
  return new Promise((resolve) => rl.question(query, resolve));
};

const getData = () => {
   const data = fs.readFileSync('monTableau.json', 'utf8')
   return JSON.parse(data);
}

const addClient = async (first_name, last_name) => {

    const client =  {first_name,last_name};
    let data = await getData()
    
    data.push(client);
    console.log(data);
    data = JSON.stringify(data);

    fs.writeFile('monTableau.json', data, (err) => {
        if (err) {
            console.error(err);
        }
        else{
            console.log('added sucsses');
        }
    });
}


const showClients = () => {
    fs.readFile('monTableau.json', 'utf8', (err, data) => {
        if (err) {
            console.error(err);
        } else {
            clients = JSON.parse(data);
            clients.forEach(client => {
                console.log(client);
            });
        }
    });
}


const gestion_clients = async () => {
  let first_name;
  let last_name;
  const letter = await askQuestion("Enter the letter (a, r): ");
  if (letter == "a") {
    first_name = await askQuestion("Enter the first_name: ");
    last_name = await askQuestion("Enter the last_name: ");
    addClient(first_name, last_name);
  }

  else if (letter == "r") {
    showClients();
  }

  rl.close();
};

gestion_clients();