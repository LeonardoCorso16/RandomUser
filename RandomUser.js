const express = require('express');
const faker = require('faker');
const app = express();
const port = 2500;
faker.locale = 'pt_BR';
                                                                                         


app.get('/', (req, res) => {
  res.send(
    {
      primeiro_nome: faker.name.firstName(),
      ultimo_nome: faker.name.lastName(),
      genero: faker.name.gender(),
      data_de_aniversario: faker.date.past(50,2005).toLocaleDateString(),
      email:faker.internet.email(),
      senha:faker.internet.password(),
    }
  );
});

app.listen(port, () => { 
  console.log(`Acesse : http://localhost:${port}`)
});