function printOrder1()
{
    var vegqty = document.getElementById("vh").value;
    var frtqty = document.getElementById("fh").value;
    var fcqty = document.getElementById("fc").value;
    var porkqty = document.getElementById("pork").value;
    
    // print the customer information
    document.getElementById("printcustomerinfo").innerHTML="<hr><br>" + (document.getElementById("name").value) + "<br>" + (document.getElementById("addr").value) + "<br>" + (document.getElementById("pickup").value) + "<br>";
    

    //print order details
    var orderprint ="Order Summary:" + "<br>";
    
    if(vegqty == 1)//vegetable hamper
    {
        orderprint += vegqty + " Vegetable Hamper" + "<br>"
    }
    if(vegqty > 1)//vegetable hamper plural
    {
        orderprint += vegqty + " Vegetable Hampers" + "<br>"
    }
    
    if(frtqty == 1)//Fruit Hamper
    {
        orderprint += frtqty + " Fruit Hamper" + "<br>"
    }
    if(frtqty > 1)//Fruit Hamper plural
    {
        orderprint += frtqty + " Fruit Hampers" + "<br>"
    }
    
    if(fcqty == 1)//Fresh Chicken
    {
        orderprint += fcqty + " Fresh Chicken" + "<br>"
    }
    if(fcqty > 1)//Fresh Chicken plural
    {
        orderprint += fcqty + " Fresh Chickens" + "<br>"
    }
    
    if(porkqty > 0)//Pork, doesnt need plural
    {
        orderprint += porkqty + " Pork" + "<br>"
    }
    
    document.getElementById("printorderinfo").innerHTML= orderprint;
    
    //print order Total
    var ordersum = parseFloat((vegqty*30) + (frtqty*20) + (fcqty*7) + (porkqty*5));

    if (ordersum > 0)
    {
        document.getElementById("printordersum").innerHTML= "Total Order: $" + ordersum.toFixed(2);
    }
    else{
        document.getElementById("printordersum").innerHTML= "Error! Please Select Order Items and Resubmit"
    }
}