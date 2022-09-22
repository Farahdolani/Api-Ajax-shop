
var product = document.getElementById("product");

var http = new XMLHttpRequest ;



http.open('GET','https://fakestoreapi.com/products' );
http.send ();
var data;

http.addEventListener('readystatechange', function(){
    if ( http.readyState==4 && http.status==200 )
    {
        data = JSON.parse(http.response);
       // console.log(data) ;  
    }

        display();

} )
 function display (){
    var res=``;
    
    for (var i =0;i< data.length;i++)
    {

res +=`
<div class = "col-md-3 mt-2 item ">
<div class="card " >
  <img src="${data[i].image}" class="card-img-top " alt="..."  style="height: 13rem; ">
  
 <a href="#" class="btn  btn-primary cat position-absolute"> ${data[i].category}</a>
  <a href="#" class="btn view btn-dark "> QUICK VIEW</a>

  </div>
<div class="des">
<div class="d-flex justify-content-between align-items-center"> 
<h6 >${data[i].title}</h6>
<span><i class="fa-regular fa-heart"></i></span> 
</div>
<span>${data[i].price} $</span>

</div>
 </div>
`

    }
product.innerHTML=res;

 }
 