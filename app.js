$(document).ready(function() {
      var api_url = 'https://financialmodelingprep.com/api/v3/quote/%5EDJI?apikey=0b7380f5128299e18db2b192be9d7ebf'
  
      $.ajax({
          url: api_url,
          contentType: "application/json",
          dataType: 'json',
          success: function(result){
            var dow = result[0].price;
             
            $('.today').html( formatNumber(dow) );
            var high = 29568.57;
            var diff = Math.floor(high - dow);
            var percent = Math.floor( (diff / high) * 100) ;
            $( '.precent' ).html( percent + '%' );
            $( '.diff' ).html( diff );
          }
      })
}
);

function formatNumber(num) {
    return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
  }