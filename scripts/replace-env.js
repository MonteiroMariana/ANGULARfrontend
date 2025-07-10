const fs = require('fs');
const path = require('path');

const apiUrl = process.env.API_URL || 'http://localhost:8080/contatos';

const envProdPath = path.join(__dirname, '../src/environments/environment.prod.ts');

let content = fs.readFileSync(envProdPath, 'utf8');

content = content.replace(/REPLACE_API_URL/g, apiUrl);

fs.writeFileSync(envProdPath, content);

console.log(`API URL set to ${apiUrl} in environment.prod.ts`);
