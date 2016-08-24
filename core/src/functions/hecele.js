function(kelime){

	if(kelime.length<2) return kelime;

	var AYRIK = kelime.split("");

	var kod = [];

	AYRIK.forEach(function(a){
		kod.push(seslimi(a));
	});

	var bag = [];

	for(var i=0;i<kod.length-1;i++)
	{
		bag.push((!kod[i] && kod[i+1]));
	}

	bag[0] = !kod[0];

	bag[bag.length-1] = true;

	for(var i=1;i<bag.length-2;i++){
		if( (bag[i-1] && !bag[i+1]))
			bag[i] = true;

	}

	bag[0] = !bag[1] || !kod[0];

	for(var i=1;i<bag.length-1;i+=2){
		if(!bag[i] && ((!kod[i-1] && !kod[i]) || (!kod[i+1] && !kod[i+2] ))){
			bag[i] = true;
		}

	}

	var SONUC = AYRIK[0];

	for(var i=0;i<bag.length;i++){
		if(!bag[i]) SONUC += "-";
		SONUC += AYRIK[i+1]
	}

	return SONUC;
}