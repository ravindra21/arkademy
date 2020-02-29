// GLOBAL VARIABLE ============================

var state = [];
var url = '/api/';

// FUNCTIONS ===================================
function deleteModal() {
	var id = $(this).attr('id');
	var index = $(this).attr('index');
	$('#deleteForm').attr('action', url+id);
	$('#deleteForm').attr('index', index);
};

function editModal() {
	var index = $(this).attr('index');
	var order = state[index];
	
	$('#editForm').attr({
		'action' : url+order.id_product,
		'index' : index
	});

	$('#editForm input[name=cashier]').val(order.cashier);
	$('#editForm input[name=category]').val(order.category);
	$('#editForm input[name=product]').val(order.product);
  $('#editForm input[name=price]').val(order.price);
};

function showTable() {
	$('#tableOrders > tbody').html('');
	$.each(state, function(i, el){
		var editBtn = $("<button class = 'btn-edit btn btn-primary' data-toggle = 'modal' data-target = '#editModal'>Edit</button>");

  	var deleteBtn = $("<button class='btn-delete btn btn-danger' data-toggle = 'modal' data-target = '#deleteModal'> Delete </button>");

		editBtn.attr({'id' : el.id_product, 'index' : i});
		deleteBtn.attr({'id' : el.id_product, 'index' : i});

		$('#tableOrders > tbody').append(
			$('<tr>').append(
        $("<td class='align-middle'>").text(i+1),
				$("<td class='align-middle'>").text(el.cashier),
				$("<td class='align-middle'>").text(el.product),
				$("<td class='align-middle'>").text(el.category),
        $("<td class='align-middle'>").text(el.price),
				$("<td class='align-middle'>").append(editBtn.click(editModal), deleteBtn.click(deleteModal))
			)
		);
	});
};

function editOrders(e) {
	e.preventDefault();

	var index = $(this).attr('index');
	var data = {
		cashier : $('#editForm input[name=cashier]').val(),
		product : $('#editForm input[name=product]').val(),
		category : $('#editForm input[name=category]').val(),
		price : $('#editForm input[name=price]').val(),
	};

	$.ajax({
		url : $(this).attr('action'),
		data : data,
		dataType : 'json',
		type : 'Patch'
	}).done(function(d){
		state[index].cashier = data.cashier;
		state[index].product = data.product;
		state[index].category = data.category;
		state[index].price = data.price;

		showTable();
		$('#editModal').modal('hide');
	});
};

function deleteOrders(e){
	e.preventDefault();
	var index = $(this).attr('index');

	$.ajax({
		url : $(this).attr('action'),
		dataType : 'json',
		type: 'Delete'
	}).done(function(data){
		$('#deleteModal').modal('hide');
		state.splice(index, 1);
		showTable();
	});
};

function createOrders(e){
	e.preventDefault();
	var data = {};
	$(this).find('input').each(function(){
		data[$(this).attr('name')] = $(this).val();
	});
	
	$.ajax({
		url : '/api',
		dataType : 'json',
		type : 'Post',
		data : data
	}).done(function(d){
		data.id = d.data;
		state.push(data);
		showTable();
		$('#createModal').modal('hide');
		$('#createForm :input').val('');
	});
};

function searchOrders(e){
	e.preventDefault();
	var q = $(this).find('input[name=search]').val();
	$.ajax({
		url :'/api/'+q,
		dataType :'json',
		type	:'Get',
	}).done(function(d){
		state = d.data;
		showTable();
	});
};

// JQUERY ======================================

$.ajax({
	url : url,
	dataType : 'json'
}).done(function(data){
	state = data.data;
	showTable();
});

$('#editForm').submit(editOrders);
$('#deleteForm').submit(deleteOrders);
$('#createForm').submit(createOrders);
$('#searchForm').submit(searchOrders);
