const { ClientModel } = require('../Data/dataManager');
 class Client {

    #client;

    constructor(client) {
      this.#client = client;
      this.ClientModel = new ClientModel();
    }

    addClient(){
        let clients = this.ClientModel.getAllClients();
        let maxId = clients .reduce((max, client) => Math.max(max, client.id),0)
        maxId += 1;
        this.#client.id = maxId;
        console.log(this.#client);
        clients.push(this.#client);
        this.ClientModel.addClientData(clients);
    }

    viewClients(){
      return this.ClientModel.getAllClients();
    }

    deleteClient(id){

      let clients = this.ClientModel.getAllClients();
      
      const newArr = clients.filter(client => client.id !== Number(id));
      this.ClientModel.addClientData(newArr);
      return 'deleted sucsesfuly';
    
    }

    findClient(param){
      let clients = this.ClientModel.getAllClients();
      if (typeof(param) == "number") {
        const newArr = clients.filter(client => client.id == param);
        return newArr;
      }
      else{
        const newArr = clients.filter(client => client.firstName == param);
        return newArr;
      }

    }

    modifyInfo(id, info){
      let clients = this.ClientModel.getAllClients();
      const information = clients.filter(client => client.id == Number(id));
      information[0].firstName = info;
      
    } 
  }

  
module.exports = Client;