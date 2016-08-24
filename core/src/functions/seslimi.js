function(char){
	var s = get_sesliler();
	for(c in s){
		if(s[c]==char)
			return true;
	}
	return false;
}