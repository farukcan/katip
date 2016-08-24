/* 
	app.js katip-framework başlatıcısı ve 2 temel fonksiyon
*/

// Framework hakkında bilgilere erişmek için : var
var Framework = {
	version : "1.0.0"
};

// Mod gerekliyse yükle,yüklüyse yükleme
var gerekli_mod = function(mod_name){
	if(eval("typeof "+mod_name+" == 'undefined'")){
		eval(mod_name+" = require('"+mod_name+"');");
	}
}

// readFile : dosya okuma fonksiyonu
var readFile = function(file){
	return fs.readFileSync(file).toString();
}

/* FM , fs moduna ihtıyaç duyar */
gerekli_mod("fs");

/*  katip-framework loader */
eval(readFile("katip-framework/loader.js"));

/*  katip-framework watcher */
eval(readFile("katip-framework/watcher.js"));