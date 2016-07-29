
$(document).on('ready', function() {
  console.log('GO TEAM - Products');
});


$.ajax ({
  url:'http://galvanize-student-apis.herokuapp.com/gcommerce/products',
  method: 'GET'
}).done (function(dataFromSite) {
  buildArticles(dataFromSite)

  $('#select1').change(function(e) {
    var titleSelect1 = parseInt($('#select1').val());

    dataFromSite.forEach(function(el) {

      console.log("TYPE OF EL.ID");
      console.log(typeof(el.id));
      console.log("type of title select");
      console.log(typeof(titleSelect1));

      $('#'+el.id).css('border', '');
      $('#'+el.id).css('border-color', '');
      $('#'+el.id).css('box-shadow', '');

      if (((titleSelect1 === 1) && ( (el.id===2 ) || (el.id===5 )|| (el.id===6)||(el.id===8)||(el.id===11)))) {
           console.log("tank, tank");
          //$('#'+el.id).css('display', 'initial');
           $('#'+el.id).css('border', '2px solid #dadada');
           $('#'+el.id).css('border-color', '#9ecaed');
           $('#'+el.id).css('box-shadow', '0 0 15px #9ecaed');
      }

      if (((titleSelect1 === 2 ) && ( (el.id===9)||(el.id===12)||(el.id===13)||(el.id===14)))) {
          console.log("POND");
          //$('#'+el.id).css('display', 'initial');
          $('#'+el.id).css('border', '2px solid #dadada');
          $('#'+el.id).css('border-color', '#9ecaed');
          $('#'+el.id).css('box-shadow', '0 0 15px #9ecaed');
      }

      if (((titleSelect1 === 3 ) && ( (el.id===3)||(el.id===4)||(el.id===7)||(el.id===10)))) {
          console.log("AQUARIUM");
          //$('#'+el.id).css('display', 'initial');
          $('#'+el.id).css('border', '2px solid #dadada');
          $('#'+el.id).css('border-color', '#9ecaed');
          $('#'+el.id).css('box-shadow', '0 0 15px #9ecaed');
      }
    })
  })
})

  $('#select2').change(function(e) {
    var titleSelect2 = $('#select2').val();

    dataFromSite.forEach(function(el) {
      //reset selector2
      $('#'+el.id).css('border', '');
      $('#'+el.id).css('border-color', '');
      $('#'+el.id).css('box-shadow', '');

      if (parseFloat(Math.round(el.price.replace('$', ''))) < titleSelect2) {
        $('#'+el.id).css('border', '2px solid #dadada');
        $('#'+el.id).css('border-color', '#9ecaed');
        $('#'+el.id).css('box-shadow', '0 0 15px #9ecaed');
      }
    })
  })

var arrProductName = ["x", "Lion Fish", "Turtle", "Shark Fish", "Fish   Bowl Fish", "Silver Fish", "Lobster", "Gold Fish", "Slim Fish",  "Whale", "Clown Fish", "Guppy Fish", "Orange Fish", "Sucker Fish"];

function buildArticles (arr) {
  for (var i=1; i < arr.length; i++) {
    var productWrapper = $('<div class="col-md-4" id="'+[i+1]+'"></div>');
    productWrapper.append('<img src="./src/images/fish' + [i] + '.jpg"  style="width:100%;"/><h3>' + arrProductName[i] + '</h3><h4>Price: '   + arr[i].price + '</h4><p>'+ arr[i].description + '</p>');
    productWrapper.css("margin-bottom", "50px");
    $("#productRow").append(productWrapper);
  }
}
