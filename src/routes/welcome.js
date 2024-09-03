const welcome = (req, res) => {
  return res.send(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Welcome</title>
     <link rel="icon" href="/favicon.png" type="image/png">

      <style>
        body {
          font-family: 'Arial', sans-serif;
          background-color: #f0f2f5;
          color: #333;
          margin: 0;
          padding: 0;
          display: flex;
          justify-content: center;
          align-items: center;
          flex-direction: column;
          height: 100vh;
        }
        .container {
          max-width: 900px;
          width: 100%;
          background: #fff;
          border-radius: 10px;
          box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
          padding: 20px;
          margin: 20px;
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        h1 {
          color: #2c3e50;
          margin-bottom: 20px;
        }
        .section {
          width: 100%;
          margin-bottom: 20px;
        }
        h2 {
          color: #34495e;
          border-bottom: 2px solid #3498db;
          padding-bottom: 5px;
          margin-bottom: 10px;
        }
        p {
          text-align: left;
          line-height: 1.6;
          margin: 0;
        }
        a {
          color: #3498db;
          text-decoration: none;
        }
        a:hover {
          text-decoration: underline;
        }
        @media (max-width: 600px) {
          .container {
            padding: 10px;
          }
        }
      </style>
    </head>
    <body>
      <div class="container">
        <h1>Welcome to Express with Sequelize</h1>
        <div class="section">
          <h2>Node.js</h2>
          <p>
            <strong>Node.js</strong> is a powerful JavaScript runtime built on Chrome's V8 JavaScript engine.
            It allows you to execute JavaScript code server-side, enabling you to build scalable network applications.
          </p>
        </div>
        <div class="section">
          <h2>Express</h2>
          <p>
            <strong>Express</strong> is a minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications.
            It simplifies the development of web servers and APIs, making it a popular choice for building web applications.
          </p>
        </div>
        <div class="section">
          <h2>Sequelize</h2>
          <p>
            <strong>Sequelize</strong> is a promise-based Node.js ORM (Object-Relational Mapper) for SQL databases.
            It provides an easy way to interact with databases using JavaScript, allowing you to define models, perform queries, and handle database migrations.
          </p>
        </div>
        <div class="section">
          <p>
            For more information, check out my GitHub profile: <a href="https://github.com/gabrielmartinezghioma" target="_blank">Gabriel Martinez</a>
          </p>
        </div>
      </div>
    </body>
    </html>
  `)
}

export default welcome
