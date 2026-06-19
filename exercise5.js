// STOCK DATA


let stock = [

{
product:"AquaPure Bottle",
quantity:100
},


{
product:"AquaPure RO",
quantity:20
}

];




// ORDER DATA

let orders=[];





// ADD STOCK


function addStock()
{


document.getElementById("content").innerHTML=`


<h2>Add Stock</h2>


<label>Product Name</label>

<input 
class="form-control"
id="productName">



<label>Quantity</label>

<input 
type="number"
class="form-control"
id="stockQty">



<br>


<button 
class="btn btn-primary"
onclick="submitStock()">

Submit

</button>


`;

}





function submitStock()
{


let name =
document.getElementById("productName").value;



let qty =
Number(document.getElementById("stockQty").value);





if(name=="" || qty<=0)
{

alert("Enter valid details");

return;

}




let item =
stock.find(
x=>x.product==name
);




if(item)
{

item.quantity += qty;

}

else
{

stock.push({

product:name,

quantity:qty

});

}




alert("Stock Added Successfully");


}





// CHECK STOCK


function checkStock()
{


let output=`


<h2>Current Stock</h2>


<table class="table table-bordered">


<tr>

<th>Product</th>

<th>Quantity</th>

<th>Status</th>

</tr>


`;




stock.forEach(item=>{


let status =
item.quantity>20
?"Available"
:"Low Stock";



output+=`


<tr>

<td>${item.product}</td>

<td>${item.quantity}</td>

<td>${status}</td>


</tr>


`;



});




output+=`</table>`;



document.getElementById("content").innerHTML=output;


}









// PLACE ORDER


function placeOrder()
{


let options="";



stock.forEach(item=>{


options+=`

<option>

${item.product}

</option>


`;

});





document.getElementById("content").innerHTML=`


<h2>Place Order</h2>



<label>Customer Name</label>

<input 
class="form-control"
id="customer">



<label>Select Product</label>


<select 
class="form-control"
id="orderProduct">


${options}


</select>




<label>Quantity</label>

<input 
type="number"
class="form-control"
id="orderQty">


<br>


<button 
class="btn btn-danger"
onclick="confirmOrder()">

Confirm Order

</button>



`;

}








function confirmOrder()
{


let customer =
document.getElementById("customer").value;



let product =
document.getElementById("orderProduct").value;



let qty =
Number(document.getElementById("orderQty").value);




let item =
stock.find(
x=>x.product==product
);





if(customer=="" || qty<=0)
{

alert("Enter details");

return;

}





if(item.quantity < qty)
{

alert("Not enough stock");

return;

}





// reduce stock

item.quantity -= qty;





// add order


orders.push({

customer:customer,

product:product,

quantity:qty


});




alert("Order Placed Successfully");


}









// ORDERS TABLE


function showOrders()
{


let output=`


<h2>Customer Orders</h2>


<table class="table table-striped">


<tr>

<th>Customer</th>

<th>Product</th>

<th>Quantity</th>

</tr>


`;




orders.forEach(order=>{


output+=`


<tr>

<td>${order.customer}</td>

<td>${order.product}</td>

<td>${order.quantity}</td>


</tr>


`;



});



output+=`</table>`;


document.getElementById("content").innerHTML=output;


}