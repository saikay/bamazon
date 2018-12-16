var mysql = require("mysql");
var inquirer = require("inquirer");
require('dotenv').config();

var bamazon = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: process.env.DBUSER,
    password: process.env.DBPASSWORD,
    database: "bamazon"
});

//once connect to database, run the logics
bamazon.connect(function(err){
    if(err){console.log(err);}
    console.log("connected to database.");
    showAllItems();
    
});

function showAllItems(){
    bamazon.query("select * from products",function(err,res){
        if(err) console.log(err);
        let items = {}
        for(var i =0; i < res.length;i++){
            console.log(`id: ${res[i].item_id}, name: ${res[i].product_name}, price: ${res[i].price}`)
            //assign each array into object literal.
            items[res[i].item_id] = res[i];
        }
        
        showQuestions(items);
    });
}

function showQuestions(items){
    inquirer.prompt([{
        name: "item_id",
        type: "input",
        message:"Which item would you like to buy?(type in item's id)"
    },
    {
        name: "quantity",
        type: "input",
        message:"How many units of the product would you like to buy?"
    }]).then(function(answers){
        var quantity = items[answers["item_id"]].stock_quantity;
        request_quantity = answers["quantity"];
        var remain_stock = quantity - request_quantity;

        if(quantity > request_quantity){
            var price = items[answers["item_id"]].price * request_quantity;
            bamazon.query(`update products set stock_quantity = ? where item_id = ?`,[remain_stock,answers["item_id"]]
                 ,function(err,res){
                if(err) console.log(err); 
            });
            console.log(`Order ${request_quantity} ${items[answers["item_id"]].product_name} for ${price}`);
        }else{
            console.log("Insufficient quantity!");
        }
        console.log("---------------------------");
        console.log("---------------------------");
        console.log("---------------------------");
        showAllItems();
    });
}