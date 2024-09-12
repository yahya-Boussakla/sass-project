const { ClientModel } = require('../Data/dataManager');
 class Client {

    #client;

    constructor(client) {
      this.#client = client;
      this.ClientMode = new ClientModel();
    }

    addClient(){
        let clients = this.ClientMode.getAllClients();
        let maxId = clients .reduce((max, client) => Math.max(max, client.id),0)
        maxId += 1;
        this.#client.id = maxId;
        console.log(this.#client);
        clients.push(this.#client);
        this.ClientMode.addClintData(clients);
    }

    viewClients(){
      return this.ClientMode.getAllClients();
    }

    deleteClient(){
      
    }
  }

  
module.exports = Client;