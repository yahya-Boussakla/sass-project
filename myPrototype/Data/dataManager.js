const fs = require("fs");
const path = require("path");


class ClientModel{

    dataPath = path.resolve(__dirname,"../DB/db.json");
    constructor(){
        
    }

    // get all clients from json file
    getAllClients(){

        const clients = fs.readFileSync(this.dataPath,"utf8");
        return JSON.parse(clients) || [];
    }

    // push clients data in json file
    addClientData(ClientData){
        const updatedData = JSON.stringify(ClientData, null, 2);
        fs.writeFileSync(this.dataPath, updatedData);
        console.log("Data has been added successfully.");
    }

    

}

module.exports = { ClientModel };