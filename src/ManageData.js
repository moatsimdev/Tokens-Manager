const fs = require('fs')

const tokens = "./src/tokens.json";


function rJson() {
    const str = fs.readFileSync(tokens, "utf8");
    return JSON.parse(str);
}
function wJson(data) {
    fs.writeFileSync(tokens, JSON.stringify(data));
}



module.exports = {
    addToken: async (token) => { 
        const db = rJson();
        db.push(token);
        wJson(db);
    },
    getTokens: async () => {
   return rJson();
    }
}