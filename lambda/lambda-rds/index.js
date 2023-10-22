const pg = require("pg");
exports.handler = async (event) => {

  try {
    const dbConfig = {
      host: process.env.DB_HOST,
      port: parseInt(process.env.DB_PORT || '5432'),
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      ssl: true,
    };

    console.log("new client start");

    const client = new pg.Client(dbConfig);

    console.log("new client end");

    await client.connect();

    console.log("connect end");

    const res = await client.query("SELECT now(), version();");

    console.log("query end");

    await client.end();

    return {
      statusCode: 200,
      body: JSON.stringify(res.rows[0]),
    };

  } catch (err) {
    console.log(err);
    return {
      statusCode: 500,
      body: JSON.stringify({
        message: 'some error happened',
      }),
    };
  }
};
