

var _cfiles = fs.readdirSync("src/classes");

Framework.loader.classes = _cfiles;
for(key in _cfiles){
	eval(readCode("src/classes/"+_cfiles[key]));
}