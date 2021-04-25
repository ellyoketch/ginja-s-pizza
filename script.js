// user details input
$(document).ready(function(){
    $("#input-form").submit(function(event){
      let name = $("input#name").val();
      let email = $("input#number").val();
      let comment = $("input#location").val();
      if ($("input#name").val() && $("input#number").val() && $("input#location").val()){
        alert (name + ",You have successsfuly placed your order, kindly check on delivery status and prepare ksh, 150 for delivery.");
      }
      else if ($("input#name").val() && $("input#number").val()){
        alert (name + ",kindly fill your location details.");
      }
      else {
        alert("Please enter your correct correct details!");
      }
    
    });

  });
// pizza price calculator function
$(function () {
    $('.summary').hide();
    $('.cdata-overlay').hide();

    $("#checkout").click(function () {
        let size = $("#size option:selected").val();
        let crust = $("#crust option:selected").val();
        let topping = $("#toppings option:selected").val();
        console.log(size);

        
        let order = (s, c, t, total) => {
            return {s, c, t, total};
        };

        let price, totalPrice;
    switch (toppings) {
            case toppings = "pepperoni":
                switch (size) {
                    case size = "small":
                        price = 800;
                        if (crust === "stuffed") {
                            totalPrice = (price) + 200;
                        } else if (crust === "thick") {
                            totalPrice = (price) + 250;
                        } else if (crust === "cripsy") {
                            totalPrice = (price) + 180;
                        } else {
                            totalPrice = (price) + 180;
                        }
                        break;
                    case size = "medium":
                        price = 1500;
                        if (crust === "stuffed") {
                            totalPrice = (price) + 200;
                        } else if (crust === "thick") {
                            totalPrice = (price) + 250;
                        } else if (crust === "cripsy") {
                            totalPrice = (price) + 180;
                        } else {
                            totalPrice = (price) + 180;
                        }
                        break;
                    case size = "large":
                        price = 2000;
                        if (crust === "stuffed") {
                            totalPrice = (price) + 200;
                        } else if (crust === "thick") {
                            totalPrice = (price) + 250;
                        } else if (crust === "cripsy") {
                            totalPrice = (price) + 180;
                        } else {
                            totalPrice = (price ) + 180;
                        }
                        break;
                }
                break;
                case toppings = "sausage":
                switch (size) {
                    case size = "small":
                        price = 800;
                        if (crust === "stuffed") {
                            totalPrice = (price) + 200;
                        } else if (crust === "thick") {
                            totalPrice = (price) + 250;
                        } else if (crust === "cripsy") {
                            totalPrice = (price) + 180;
                        } else {
                            totalPrice = (price) + 180;
                        }
                        break;
                    case size = "medium":
                        price = 1500;
                        if (crust === "stuffed") {
                            totalPrice = (price) + 200;
                        } else if (crust === "thick") {
                            totalPrice = (price) + 250;
                        } else if (crust === "cripsy") {
                            totalPrice = (price) + 180;
                        } else {
                            totalPrice = (price) + 180;
                        }
                        break;
                    case size = "large":
                        price = 2000;
                        if (crust === "stuffed") {
                            totalPrice = (price) + 200;
                        } else if (crust === "thick") {
                            totalPrice = (price) + 250;
                        } else if (crust === "cripsy") {
                            totalPrice = (price) + 180;
                        } else {
                            totalPrice = (price ) + 180;
                        }
                        break;
                }
                break;
            
            
                case toppings = "bacon":
                switch (size) {
                    case size = "small":
                        price = 800;
                        if (crust === "stuffed") {
                            totalPrice = (price) + 200;
                        } else if (crust === "thick") {
                            totalPrice = (price) + 250;
                        } else if (crust === "cripsy") {
                            totalPrice = (price) + 180;
                        } else {
                            totalPrice = (price) + 180;
                        }
                        break;
                    case size = "medium":
                        price = 1500;
                        if (crust === "stuffed") {
                            totalPrice = (price) + 200;
                        } else if (crust === "thick") {
                            totalPrice = (price) + 250;
                        } else if (crust === "cripsy") {
                            totalPrice = (price) + 180;
                        } else {
                            totalPrice = (price) + 180;
                        }
                        break;
                    case size = "large":
                        price = 2000;
                        if (crust === "stuffed") {
                            totalPrice = (price) + 200;
                        } else if (crust === "thick") {
                            totalPrice = (price) + 250;
                        } else if (crust === "cripsy") {
                            totalPrice = (price) + 180;
                        } else {
                            totalPrice = (price ) + 180;
                        }
                        break;
                }
                break;
            
            case toppings = "mushrooms":
                switch (size) {
                    case size = "small":
                        price = 800;
                        if (crust === "stuffed") {
                            totalPrice = (price) + 200;
                        } else if (crust === "thick") {
                            totalPrice = (price) + 250;
                        } else if (crust === "cripsy") {
                            totalPrice = (price) + 180;
                        } else {
                            totalPrice = (price) + 180;
                        }
                        break;
                    case size = "medium":
                        price = 1500;
                        if (crust === "stuffed") {
                            totalPrice = (price) + 200;
                        } else if (crust === "thick") {
                            totalPrice = (price) + 250;
                        } else if (crust === "cripsy") {
                            totalPrice = (price) + 180;
                        } else {
                            totalPrice = (price) + 180;
                        }
                        break;
                    case size = "large":
                        price = 2000;
                        if (crust === "stuffed") {
                            totalPrice = (price) + 200;
                        } else if (crust === "thick") {
                            totalPrice = (price) + 250;
                        } else if (crust === "cripsy") {
                            totalPrice = (price) + 180;
                        } else {
                            totalPrice = (price ) + 180;
                        }
                        break;
                }
                break;
            case toppings = "chicken":
                switch (size) {
                    case size = "small":
                        price = 800;
                        if (crust === "stuffed") {
                            totalPrice = (price) + 200;
                        } else if (crust === "thick") {
                            totalPrice = (price) + 250;
                        } else if (crust === "cripsy") {
                            totalPrice = (price) + 180;
                        } else {
                            totalPrice = (price) + 180;
                        }
                        break;
                    case size = "medium":
                        price = 1500;
                        if (crust === "thick") {
                            totalPrice = (price) + 150;
                        } else if (crust === "thick"){
                            totalPrice = (price) + 200;
                        } else {
                            totalPrice = (price) + 280;
                        }
                        break;
                    case size = "large":
                        price = 2000;
                        if (crust === "thick") {
                            totalPrice = (price) + 150;
                        } 
                        else {
                            totalPrice = (price) + 280;
                        }
                        break;
                }
                break;
            
        }
        switch (topping) {
            case topping = "pepperoni":
                totalPrice = totalPrice + 250;
                break;
            case topping = "sausage":
                totalPrice = totalPrice + 230;
                break;
            case topping = "bacon":
                totalPrice = totalPrice + 180;
                break;
            case topping = "mushrooms":
                totalPrice = totalPrice + 150;
                break;
            case topping = "chicken":
                totalPrice = totalPrice + 200;
                break;

        }


        let newOrder = order(size, crust, topping, totalPrice);
        console.log(newOrder)
        $('.summary').slideDown(2000);
        $('.cdata-overlay').slideUp();
        $('#list').slideDown();
        $('.deliver').show(1000);
        $('.delivernot').show(1000);

        $('#list').text(" ");
        $("#list").append("<br>" + "Toppings :   "+ newOrder.t + "<br>" + "Sizes :   "
            + newOrder.s + "<br>" + "Crust :     "
            + newOrder.c + "<br>" + "Toppings :     "
            + newOrder.t + "<br>" + "Total Price :"
            + newOrder.total +  "<br><br>").css('font-family', 'dancing-script').css('font-size', '24px');
    });
    $(".deliver").click(function () {
        $('.summary').slideUp();
        $('#list').slideUp();
        $('.summary').text("kindly fill in your location details").slideDown();
        $('.deliver').hide(1000);
        $('.delivernot').hide(1000);
        $('.cdata-overlay').slideDown();
    });
    $(".delivernot").click(function () {

    });
    $(function () {
        $.scrollify.move('#sum-order');
    });
});