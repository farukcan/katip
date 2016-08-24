/* Gereksinimler */

gerekli_mod("fs");

/* --- */

var readCode = readFile;

Framework.loader = {
	functions : [],
	classes : [],
	includes : []
};

// const yükleyici
eval(readCode("src/const.js"));

// Fonksiyon yükleyicisi
eval(readCode("katip-framework/function_loader.js"));

// Class yükleyici
eval(readCode("katip-framework/class_loader.js"));

// Include yükleyicisi
eval(readCode("katip-framework/include_loader.js"));