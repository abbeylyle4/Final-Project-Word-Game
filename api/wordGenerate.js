import fetch from 'node-fetch';
 
export default async function handler(request, res) {
     const words = await fetch(`https://random-word-api.herokuapp.com/word?number=1&length=5`).then((t) => {
       if (t.ok) {
         return t.json();
       }
     }).then((data) => data);
     res.setHeader("Access-Control-Allow-Credentials", "true");
     res.setHeader("Access-Control-Allow-Origin", "*");
     res.setHeader("Access-Control-Allow-Methods", "GET,OPTIONS,PATCH,DELETE,POST,PUT");
     res.setHeader("Access-Control-Allow-Headers", "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version");
     res.json(await words);
 }
