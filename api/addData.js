import { PSDB } from 'planetscale-node';

export default async function handler(req, res) {
  // this is making wide sweeping assumptions of the data accuracy
  const { tries, result } = req.query;
  var woordle2 = {
    tries: tries,
    result: result ? 1 : 0,
  };
  // this option helps establish a more secure connection object
  const conn = new PSDB('main', {namedPlaceholders: true});
  // INSERT the values that came across into the users table
  const [dbResult] = await conn.execute(
    `INSERT INTO woordle2 (tries, result) VALUES(:tries, :result)`,
    woordle2
  );
  // take the id that comes back and then apply to the user object
  woordle2.id = dbResult.insertId
  const [metrics] = await conn.query('select * from woordle2');
  const [wincount] = await conn.query('select * from woordle2 where result = 1');
  const [triescount] = await conn.query('select AVG(tries) from woordle2');
  const data = {
      players: metrics.length,
      wins: wincount.length,
      tries: triescount[0]["AVG(tries)"]
  }
  res.json(data);

}