/*
*   Tipos de parâmetros
*   Query params: Parâmetros nomeados enviados na rota após "?" (Filtros, paginação)
*   Route Params: Parâmetros utilizados para identificar recursos
*   Request Boby: Corpo da requisição, utilizado para criar/alterar recursos
*/

/* NoSQL: MongoDB, CouchDB, etc */

/* DRIVER do BD: SELECT * FROM USERS */
/* QUERY BUILDER: table('users').select('*').where() */


const express = require('express');
const routes = require('./routes');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);
app.listen(3333);