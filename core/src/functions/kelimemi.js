function (kelime){
	if(kelime.length<=0) return false;


	// şapkalı harf düzeltici
	kelime = kelime.replace(/â|û|î|Î|Â|Û/g,"a");

	return validator.isAlpha(kelime,"tr-TR");
}