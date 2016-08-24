

var _ifiles = fs.readdirSync("src/includes");

Framework.loader.includes = _ifiles;

for(key in _ifiles){
	eval(readCode("src/includes/"+_ifiles[key]));
}