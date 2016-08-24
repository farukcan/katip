 var fs = require("fs");

var validator = require("validator");
var request = require("request");
var cheerio = require('cheerio');

eval(fs.readFileSync("katip-framework/loader.js").toString());


//console.log(harf_kodlama_kara("qw=ertyuıopğüasdfghjklşizxcvbnmöç!#.,'+-?*/\\1234567890"));


request(encodeURI('http://www.es-anlam.com/kelime/şirin'), function (error, response, body) {
  if (!error && response.statusCode == 200) {
    var $ = cheerio.load(body);

    var esanlamlar = kelimetespit(unescape($('#esanlamlar strong').text())) ;

    console.log(esanlamlar);
  }
});

request(encodeURI('http://www.es-anlam.com/zit-anlam/kelime/şirin'), function (error, response, body) {
  if (!error && response.statusCode == 200) {
    var $ = cheerio.load(body);

    var esanlamlar = kelimetespit(unescape($('#esanlamlar strong').text())) ;

    console.log(esanlamlar);
  }
})

request(encodeURI('http://sozluk.bilgiportal.com/nedir/şirin'), function (error, response, body) {
  if (!error && response.statusCode == 200) {
    var $ = cheerio.load(body);

    var esanlamlar = kelimetespit($($(".list .item")[1]).text());
    console.log(esanlamlar);

  }
});

/* test


var text = fs.readFileSync("kelimesay-kelimeler.txt").toString();

console.log(kelimetespit(text).toString());*/