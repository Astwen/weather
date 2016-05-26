

$(function (){


 $('.button').click(function(){

$.when(
   $.getJSON('http://opendata-download-metfcst.smhi.se/api/category/pmp1.5g/version/1/geopoint/lat/59.329323/lon/18.068581/data.json'),
   $.getJSON('http://opendata-download-metfcst.smhi.se/api/category/pmp1.5g/version/1/geopoint/lat/57.708870/lon/11.974560/data.json'),
   $.getJSON('http://opendata-download-metfcst.smhi.se/api/category/pmp1.5g/version/1/geopoint/lat/65.584819/lon/22.156703/data.json')
 ).done(function(res1, res2, res3) {

     var str = res1[0].timeseries[10].validTime;
     var res = str.substring(11, 16);
     var rest = str.substring(5, 10);
       console.log('success',(res1));
       console.log('success',(res2));
       console.log('success',(res3));

       $('#div').html('');
       $('#div').append('STOCKHOLM, ' + rest + " " + res + '<br/>');
       $('#nr1').append(res1[0].timeseries[10].t + " °C ");
       $('#div2').html('');
       $('#div2').append('GÖTEBORG, ' + rest + " " + res + '<br/>');
       $('#nr2').append(res2[0].timeseries[10].t + " °C ");
       $('#div3').html('');
       $('#div3').append('LULEÅ, ' + rest + " " + res +'<br/>');
       $('#nr3').append(res3[0].timeseries[10].t + " °C ");

       if (res1[0].timeseries[10].pcat == 0 && res1[0].timeseries[10].tcc >= 5) {
         $('#sun').append('<img src="cloud.png">');
       }
       else if (res1[0].timeseries[10].tcc <= 5) {
         $('#sun').append('<img src="sunn.png">');
       }
       else if (res1[0].timeseries[10].pcat == 3) {
         $('#sun').append('<img src="rain.png">');
       }


       if (res2[0].timeseries[10].pcat == 0 && res2[0].timeseries[10].tcc >= 5){
         $('#sun1').append('<img src="cloud.png">');
       }
       else if (res2[0].timeseries[10].tcc <= 5) {
         $('#sun1').append('<img src="sunn.png">');
       }
       else if (res2[0].timeseries[10].pcat == 3) {
         $('#sun1').append('<img src="rain.png">');
       }


       if (res3[0].timeseries[10].pcat == 0 && res3[0].timeseries[10].tcc >= 5){
         $('#sun2').append('<img src="cloud.png">');
       }
       else if (res3[0].timeseries[10].tcc <= 5) {
         $('#sun2').append('<img src="sunn.png">');
       }
       else if (res3[0].timeseries[10].pcat == 3) {
         $('#sun2').append('<img src="rain.png">');
       }


     })
   })

 });
