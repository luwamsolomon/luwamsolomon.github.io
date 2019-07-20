$(function () {


    $('.button3').click(openForm);

    function openForm() {

        $(".addProduct").toggle();
    }


    $('#btn_add').click(addProduct);


    // sending product
    function addProduct() {

        var productName = $('#product_name').val();
        var productDescription = $('#product_description').val();
        var productStock = $('#product_stock').val();
        var productSupplier = $('#product_supplier').val();
        var productPrice = $('#product_price').val();


        // creating javascript object
        var product = {
            name: productName,
            description: productDescription,
            stock: productStock,
            supplier: productSupplier,
            price: productPrice
        };

        // AJax call  by changing the java script object to JSON object

        $.post('admin', {product: JSON.stringify(product)}, processData, "json")

    }

// recieving product
    function processData(data) {
        //data = JSON.parse(data);
        var tdCount = $('<td>');
        var td0 = $('<td>').text(data.id);
        var td1 = $('<td>').text(data.name);
        var td2 = $('<td>').text(data.description);
        var td3 = $('<td>').text(data.stock);
        var td4 = $('<td>').text(data.supplier);
        var td5 = $('<td>').text(data.price);
        alert("recieving product")
        var tr = $('<tr>').append(tdCount).append(td0).append(td1).append(td2).append(td3).append(td4).append(td5);
        $('#tbl_products>tbody').append(tr);
    }






    $('.del').click(deleteProduct);

    // deleting product
    function deleteProduct(event) {
        //event .target is ...id
        $.post('productDelete', {productID: $(event.target).val()}, processData, "json")
        $(event.target).parent().closest('tr').remove();

    }







    var map = new Object()

    function get(k) {
        return map.get(k);
    }

    $(".button-hover-addcart").onclick(shoppingCart)

    function shoppingCart(event) {
        if (get($(event.target).val())) {
            var counter = counter + 1;
            $("#counter").text(counter);
        } else {
            var counter = counter + 1;
            $("#counter").text(counter);
        }
    }


})





