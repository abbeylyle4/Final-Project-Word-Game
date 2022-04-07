import fetch from 'node-fetch';
 
export default async function handler(request, res) {
 const { word } = request.query;
 const url = `https://random-word-api.herokuapp.com/word?number=1`;
 const currentWord = await fetch(url).then(res => res.json());
 //res.setHeader('Cache-Control', 'max-age=0, s-maxage=1800');
// res.setHeader("Access-Control-Allow-Credentials", "true");
 //res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET,OPTIONS,PATCH,DELETE,POST,PUT");
 res.setHeader("Access-Control-Allow-Headers", "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version");
 res.json(await currentWord);
}
