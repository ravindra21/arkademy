let db = require('../db.js');
var selectAll = 'SELECT * FROM orders';
var select = 'SELECT * FROM orders where id = ?';
var searchQuery = 'SELECT * FROM orders WHERE product LIKE ? OR category LIKE ? OR cashier LIKE ? OR price LIKE ?';
var cashier =[
	'INSERT IGNORE INTO cashier set name=?',
	'SELECT id from cashier where name = ?'];
var category = [
	'INSERT IGNORE INTO category set name=?',
	'SELECT id from category where name = ?'];

var insertProduct = "INSERT INTO product set name = ?, price = ?, id_category = ("+category[1]+"), id_cashier = ("+cashier[1]+")";

var updateProduct = 'UPDATE product SET name = ?, price = ?, id_category  = ('+category[1]+'), id_cashier = ('+cashier[1]+') WHERE id = ?';

var deleteProduct = 'DELETE FROM product WHERE id = ?';

exports.getAll = () => {
  return new Promise(resolve => {
    db.query(selectAll, (e, rows) => {
      if (e) throw e;
      return resolve(rows);
    });
  });
};

exports.get = (q) => {
  return new Promise(resolve => {
		q = '%'+q+'%';
    db.query(searchQuery, [q,q,q,q], (e, row) => {
      if (e) throw e;
      return resolve(row);
    });
  });
};

exports.create = (data) => {
  return new Promise(resolve => {
    db.query(cashier[0], [data.cashier], (e, result) => {
   	  if (e) throw e;
			db.query(category[0], [data.category], (e, result) => {
				if (e) throw e;
				db.query(insertProduct, [data.product, data.price, data.category, data.cashier], (e, result) => {
					if (e) throw e;
					console.log(result.insertId);
      		return resolve(result.insertId);
				});
			});
    });
  });
};

exports.update = (id, data) => {
  return new Promise(resolve => {
		db.query(cashier[0], [data.cashier], (e, result) => {
      if (e) throw e;
			db.query(category[0], [data.category], (e, result) => {
				if (e) throw e;
				db.query(updateProduct, [data.product, data.price, data.category, data.cashier, id], (e, result) => {
        	if (e) throw e;
					return resolve(result);
      	});
			});
    });
  });
};

exports.delete = (id) => {
  return new Promise(resolve => {
		console.log(id);
    db.query(deleteProduct, [id], (e, result) => {
      if (e) throw e;
      return resolve(result);
    });
  });
};

