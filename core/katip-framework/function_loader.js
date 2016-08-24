
var _files = fs.readdirSync("src/functions");


var _file;
for(key in _files){
	_file = _files[key].split(".").shift()
	eval(_file+" = "+readCode("src/functions/"+_files[key]));
	Framework.loader.functions.push(_file);
}