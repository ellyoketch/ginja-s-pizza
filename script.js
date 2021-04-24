$(function () {
    $('.summary').hide();
    $('.cdata-overlay').hide();
    $("#checkout").click(function () {
        let size = $("#size option:selected").val();
        let crust = $("#crust option:selected").val();
        let topping = $("#toppings option:selected").val();
        let number = $("#number").val();
        console.log(size);

        
        let order = (s, c, t, n, total) => {
            return {f, s, c, t, n, total};
        };

        //check price
        let price, totalPrice;
        
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


        let newOrder = order(flavour, size, crust, topping, number, totalPrice);
        console.log(newOrder)
        $('.summary').slideDown(2000);
        $('.cdata-overlay').slideUp();
        $('#list').slideDown();
        $('.deliver').show(1000);
        $('.delivernot').show(1000);

        $('#list').text(" ");
        $("#list").append("<br>" + "Flavour :   " + newOrder.f + "<br>" + "Size :   "
            + newOrder.s + "<br>" + "Crust :     "
            + newOrder.c + "<br>" + "Toppings :     "
            + newOrder.n + "<br>" + "Total Price :  "
            + newOrder.total + "<br><br>").css('font-family', 'system-ui').css('font-size', '24px');
    });

    $(".deliver").click(function () {
        $('.summary').slideUp();
        $('#list').slideUp();
        $('.summary').text("Provide location details").slideDown();
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