// Take the start code for the Shopping Cart Project
// Debug through it//complete
// Then complete the shopping cart by adding REMOVE buttons that performs the opposite to the Add Button//complete
// Please remember if you remove - to prevent from going into negative quantities//complete
// Also add a Checkout Button that calculates the total price of items in the Shopping cart and places the total on the page (make a new function for this ).//complete
// You are done


var nums = [1, 2, 3, 4];
var items = ["Coke", "Kit Kat", "Bar One", "Fanta"];
var prices = [7.5, 9.5, 8.5, 7.5];
var quantities = [0, 0, 0, 0];
var totals = [0.0, 0.0, 0.0, 0.0];
var totalOrderAmt = 0;



//=====Add Function=============================================================================

function add_selection(x) {
    console.log(x);
    quantities[x] = quantities[x] + 1;
    totals[x] = prices[x] * quantities[x];
    totalOrderAmt += prices[x];

    display_all();
}
//=====Remove Function===========================================================================


function remove_selection(x) {
    console.log(x);
    if (quantities[x] > 0) {
        quantities[x] = quantities[x] - 1;
        totals[x] = prices[x] * quantities[x];
        // totals[x] = prices[x] * quantities[x];
        totalOrderAmt -= prices[x];
        display_all();
    }
    // } else {
    //     document. getElementById("remove[i]"). disabled = true;
    // }
    
}

//======Checkout Function=============================================================================

function calcCheckout() {
    alert("Thanks for shopping " + totalOrderAmt);
}

//======display body Function==========================================================================

function display_all() {



    var myTable = "<table><th style='width: 100px; color: red; text-align: right;'>Num</th>";
    myTable += "<th style='width: 100px; color: red; text-align: right;'>Item</th>";
    myTable += "<th style='width: 100px; color: red; text-align: right;'>Price</th>";
    myTable += "<th style='width: 100px; color: red; text-align: right;'>Quantity</th>";
    myTable += "<th style='width: 100px; color: red; text-align: right;'>Total</th>";
    myTable += "<th style='width: 100px; color: red; text-align: right;'>Add</th>";
    myTable += "<th style='width: 100px; color: red; text-align: right;'>Remove</th>";

    for (i = 0; i < items.length; i++) {
        myTable += "<tr><td style='width: 100px; text-align: right;'>" + nums[i] + "</td>";
        myTable += "<td style='width: 100px; text-align: right;'>" + items[i] + "</td><";
        myTable += "<td style='width: 100px; text-align: right;'>" + prices[i] + "</td>";
        myTable += "<td style='width: 100px; text-align: right;'>" + quantities[i] + "</td>";
        myTable += "<td style='width: 100px; text-align: right;'>" + totals[i] + "</td>";
        myTable += "<td><button onclick='add_selection(" + i + ")'>Add</button></td>";
        myTable += "<td><button id = 'remove[i]' onclick='remove_selection(" + i + ")'>Remove</button></td>";
        
    }
    document.getElementById("total").innerHTML = "<p>Total: R" + totalOrderAmt.toFixed(2) + ".</p>";

    //call checkout function
    document.getElementById("checkout").addEventListener("click", calcCheckout);

    myTable += "</table>";
    // myTable += "<br/><br/><p>Total: " + totalOrderAmt + "</p>";



    // document.write(myTable);
    document.getElementById("demo").innerHTML = myTable;



}

//======window onload Function==========================================================================

window.onload = function() {
    display_all();
}

