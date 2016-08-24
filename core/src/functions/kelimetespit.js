function(string){
	// bir dizgideki kelimeleri ayıklar

	var dizge = string.split("");

	var kelimeler = [];
	var mevcut = "";
	dizge.forEach(function(char,i){
		if(kelimelik_char(char)){
			mevcut+=char;
		}else{
			if(mevcut.length>0){
				kelimeler.push(mevcut.toLowerCase());
				mevcut = "";
			}
		}
	});

	// fix : en son kelimeyide al
	if(mevcut.length>0){
		kelimeler.push(mevcut.toLowerCase());
		mevcut = "";
	}

	return kelimeler;
}