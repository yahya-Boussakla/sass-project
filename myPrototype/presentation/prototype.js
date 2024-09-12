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
  const letter = await askQuestion("Enter the letter (a, d, r, s, m): ");
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
    let client = new Client();
    console.log(client.deleteClient(id));
  } 
  
  
  else if (letter == "r") {
    let client = new Client();
    console.log(client.viewClients());
  }

  else if(letter == "s"){
    searchBy = await askQuestion("search by name or by id enter (id , name) : ");
    let client = new Client();

    if (searchBy == "id") {
      id = await askQuestion("Enter the id: ");
      let resultArr = client.findClient(Number(id));
      resultArr.forEach(result => {
        console.log(result);
        
      });
    }
    else if(searchBy == "name") {
      Name = await askQuestion("enter the name : ");
      let resultArr = client.findClient(Name);
      resultArr.forEach(result => {
        console.log(result);
        
      });
    }
    
    // id = await askQuestion("Enter the id: ");
  }
  else if (letter == "m") {
    let client = new Client();
      id = await askQuestion("enter a id : ");
      let clientInformation = client.findClient(Number(id));
      modifyProperty = await askQuestion("enter the information do you want to modify (firstname, lastname, email, password, phone) : ");
      switch (modifyProperty) {
        case "firstname":
          oldFirstname = await askQuestion(`modify the old first name "${clientInformation[0].firstName}"`);
          client.modifyInfo(id,oldFirstname);
          break;
      
        default:
          break;
      }
  }


  rl.close();
};

names_list();
