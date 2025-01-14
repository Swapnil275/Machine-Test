const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const mysql = require("mysql");

const app = express();
app.use(cors());
app.use(express.json()); // for parsing application/json
app.use(express.urlencoded({ extended: true })); 
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "machine_test_db",
});

app.get("/", (req, res) => {
  return res.json("backend");
});


// CRUD Operations for Categories
app.get("/categories",(req,res)=>{
  const sql = 'SELECT * FROM categories';
  db.query(sql,(err,data)=>{
      if(err) return res.json(err);
      return res.json(data) 
  })
})

app.post('/categories', (req, res) => {
  const { CategoryName } = req.body;
  db.query('SELECT COUNT(*) AS count FROM categories', (err, countResult) => {
    if (err) return res.status(500).send(err);
    const newCategoryId = countResult[0].count + 1;
    db.query(
      'INSERT INTO categories (CategoryId, CategoryName) VALUES (?, ?)',
      [newCategoryId, CategoryName],
      (err, result) => {
        if (err) return res.status(500).send(err);
        res.send({ CategoryId: newCategoryId, CategoryName });
      }
    );
  });
});


app.put('/categories/:id', (req, res) => {
  const { id } = req.params;
  const { CategoryName } = req.body;
  db.query('UPDATE categories SET CategoryName = ? WHERE CategoryId = ?', [CategoryName, id], (err) => {
    if (err) return res.status(500).send(err);
    res.send({CategoryId: id, CategoryName });
  });
});

app.delete('/categories/:id', (req, res) => {
  const { id } = req.params;
  db.query('DELETE FROM categories WHERE CategoryId = ?', [id], (err) => {
    if (err) return res.status(500).send(err);
    res.send({ message: 'Category deleted' });
  });
});

// CRUD Operation for Products

// app.get("/products",(req,res)=>{
//   const sql = 'SELECT * FROM products';
//   db.query(sql,(err,data)=>{
//       if(err) return res.json(err);
//       return res.json(data) 
//   })
// })

app.get('/products', (req, res) => {
  // Extract page and pageSize from query parameters, set defaults
  const page = parseInt(req.query.page) || 1; // Default to page 1
  const pageSize = parseInt(req.query.pageSize) || 10; // Default to 10 records per page

  // Calculate the starting record (offset)
  const offset = (page - 1) * pageSize;

  // SQL query to fetch the total number of products for pagination metadata
  const countSql = 'SELECT COUNT(*) AS total FROM products';

  // SQL query to fetch paginated records
  const paginatedSql = `SELECT * FROM products LIMIT ? OFFSET ?`;

  // First, fetch the total number of products
  db.query(countSql, (err, countResult) => {
    if (err) return res.status(500).json(err);

    const totalProducts = countResult[0].total; // Total number of products
    const totalPages = Math.ceil(totalProducts / pageSize); // Calculate total pages

    // Then, fetch the paginated records
    db.query(paginatedSql, [pageSize, offset], (err, products) => {
      if (err) return res.status(500).json(err);

      // Return the paginated data and metadata
      return res.json({
        products,       // Array of products for the current page
        totalProducts,  // Total number of products
        totalPages,     // Total number of pages
        currentPage: page, // Current page number
        pageSize,       // Number of products per page
      });
    });
  });
});




app.post('/products', (req, res) => {
  const { ProductName,ProductCategory } = req.body;
  db.query('SELECT COUNT(*) AS count FROM products', (err, countResult) => {
    if (err) return res.status(500).send(err);
    const newProductId = countResult[0].count + 1;
    db.query(
      'INSERT INTO products (ProductId, ProductName,ProductCategory) VALUES (?, ?, ?)',
      [newProductId, ProductName,ProductCategory],
      (err, result) => {
        if (err) return res.status(500).send(err);
        res.send({ ProductId: newProductId, ProductName,ProductCategory });
      }
    );
  });
});


app.put('/products/:id', (req, res) => {
  const { id } = req.params;
  const { ProductName,ProductCategory } = req.body;
  db.query('UPDATE products SET ProductName = ? WHERE ProductId = ?', [ProductName, id], (err) => {
    if (err) return res.status(500).send(err);
    res.send({ProductId: id, ProductName ,ProductCategory });
  });
});

app.delete('/products/:id', (req, res) => {
  const { id } = req.params;
  db.query('DELETE FROM products WHERE ProductId = ?', [id], (err) => {
    if (err) return res.status(500).send(err);
    res.send({ message: 'Category deleted' });
  });
});

app.listen(8081, () => {
  console.log("listening");
});
