function generateReport(){


let name =
document.getElementById("name").value;


let password =
document.getElementById("password").value;


let email =
document.getElementById("email").value;


let date =
document.getElementById("date").value;


let model =
document.getElementById("model").value;


let address =
document.getElementById("address").value;



let type =
document.querySelector('input[name="type"]:checked');



if(name=="")
{
alert("Enter Customer Name");
return;
}



// Password Validation

let capital =
/[A-Z]/.test(password);


let special =
/[@]/.test(password);



if(password.length < 6)
{

alert("Password must contain minimum 6 characters");

return;

}



if(!capital)
{

alert("Password must contain at least one capital letter");

return;

}



if(!special)
{

alert("Password must contain @ symbol");

return;

}



if(!email.includes("@"))
{
alert("Enter valid Email");
return;
}



if(model=="")
{
alert("Select Model");
return;
}



if(type==null)
{
alert("Select Water Type");
return;
}



let features=[];


let check =
document.querySelectorAll(".feature");


check.forEach(function(item){

if(item.checked)
{
features.push(item.value);
}

});



let table =
document.getElementById("report");



table.innerHTML = `

<tr>
<th>Field</th>
<th>Details</th>
</tr>

<tr>
<td>Name</td>
<td>${name}</td>
</tr>

<tr>
<td>Email</td>
<td>${email}</td>
</tr>

<tr>
<td>Model</td>
<td>${model}</td>
</tr>


<tr>
<td>Water Type</td>
<td>${type.value}</td>
</tr>


<tr>
<td>Features</td>
<td>${features.join(", ")}</td>
</tr>


<tr>
<td>Purchase Date</td>
<td>${date}</td>
</tr>


<tr>
<td>Address</td>
<td>${address}</td>
</tr>

`;



alert("AquaPure Registration Completed!");

}