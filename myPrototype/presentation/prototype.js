const readline = require("readline");
const Client  = require('../Manager/clientsManager');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const askQuestion = (query) => {
  return new Promise((resolve) => rl.question(query, resolve));
};

const names_list = async () => {
  const letter = await askQuestion("Enter the letter (a, d, r): ");
  if (letter == "a") {

    // colect client data
    first_name = await askQuestion("Enter the first name: ");
    last_name = await askQuestion("Enter the last name: ");
    email = await askQuestion("Enter the email: ");
    password = await askQuestion("Enter the password: ");
    phone_number = await askQuestion("Enter the phone number: ");
    

    // instance of client class
    let client = new Client({
      "firstName":first_name
      ,"lastName":last_name
      ,"email":email
      ,"password":password
      ,"phone":phone_number
    });
    
    // add client to database
    client.addClient();

  } 
  
  
  else if (letter == "d") {
    id = await askQuestion("Enter the id: ");
    Delete(id);
  } 
  
  
  else if (letter == "r") {
    let client = new Client();
    console.log(client.viewClients());
  }

  rl.close();
};

names_list();
