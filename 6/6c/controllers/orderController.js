let Order = require('../queries/Order');

let resJson = (data, res, msg) => {
	res.header("Access-Control-Allow-Origin","*");
	res.header("Access-Control-Allow-Credentials",true);
  return res.status(200).json({
    status : 200,
    data : data,
    message : msg
  });
};

exports.index = async (req, res, next) => {
  try {
    let data = await Order.getAll();
    return resJson(data, res, 'data retrieved');
  }
  catch(e){
	console.log(e);
    return res.status(400);
  }
};

exports.read = async (req, res, next) => {
  try {
	const id = req.params.id;
    let data = await Order.get(id);
    return resJson(data, res, 'read success');
  }
  catch (e) {
	console.log(e);
    return res.status(400);
  };
};

exports.create = async (req, res, next) => {
  try {
	const newOrder = req.body;
    let data = await Order.create(newOrder);
    return resJson(data, res, 'create success');
  }
  catch(e) {
	console.log(e);
    return res.status(400);
  };
};

exports.update = async (req, res, next) => {
  try {
		let id = req.params.id
		let data = req.body;
    data = await Order.update(id, data);
    return resJson(data, res, 'update success');
  }
  catch(e) {
	console.log(e);
    return res.status(400);
  };
};

exports.delete = async (req, res, next) => {
  try {
	let id = req.params.id;
	let data = await Order.delete(id);
    return resJson(data, res, 'delete success');
  }
  catch(e) {
    console.log(e);
    return res.status(400);
  };
};
