const fs = require("fs")

module.exports = {
    saveUser: (codeBase) =>{
        fs.writeFileSync(
           "./controllers/data/users.json", 
           JSON.stringify(codeBase, null, 3));
     }
}