var productArr = [];
$(document).ready(function () {
  $("#btnSubmit").on("click", function () {
    var id =  document.getElementById("product_id").value;
    var name = document.getElementById("product_name").value;
    var price = parseInt(document.getElementById("product_price").value);
    var quantity = parseInt(document.getElementById("product_quantity").value);
    var objproduct = {
      id: id,
      name: name,
      price: price,
      quantity: quantity,
    };
    productArr.push(objproduct);
    add(productArr);
  });
});
function add() {
  var html =
    "<table> <tr> <th> Id</th> </t> <th>   Name</th> </t> <th> Price </th< </t> <th> Quantity </th>  <th> enter quantity below </th> " ;
  for (let i = 0; i < productArr.length; i++) {
    html +=
      "<tr><td>" +
      productArr[i].id +
      "</td><td>" +
      productArr[i].name +
      "</td><td>" +
      "$" +
      productArr[i].price +
      "</td><td>" +
      productArr[i].quantity +
      '</td>  <td> <input type="button" name="add_Quantity" id="btnSubmitIn" onclick= " addQuantity(' + parseInt(productArr[i].quantity) +')"" value="AddQuantity"></td> </tr>';
  }
  html += "</table>";
  document.getElementById("product_list").innerHTML = html;
}
 
 function addQuantity(q){
     var quant = document.getElementById("quantityIn").value;
     qI=parseInt(quant);
     var  tprice = document.getElementById("product_price").value;
     for(let i =0 ; i<productArr.length;i++){
         if (productArr[i].quantity == q){
             productArr[i].quantity += qI ;
             productArr[i].price = productArr[i].quantity*productArr[i].price;
         }
     }
  add(productArr);
    }

