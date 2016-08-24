function(kelime){
	var AYRIK = trUpperCase(kelime).split('');

	var SONUC = "";

	AYRIK.forEach(function(char){
		switch(char){
			case 'A':
				SONUC+="ALFA ";
				break;
			case 'B':
				SONUC+="BRAVO ";
				break;	
			case 'C':
				SONUC+="CHARLIE ";
				break;	
			case 'D':
				SONUC+="DELTA ";
				break;	
			case 'E':
				SONUC+="ECHO ";
				break;	
			case 'F':
				SONUC+="FOXTROT ";
				break;	
			case 'G':
				SONUC+="GOLF ";
				break;	
			case 'H':
				SONUC+="HOTEL ";
				break;	
			case 'I':
				SONUC+="INDIA ";
				break;	
			case 'İ':
				SONUC+="INDIA ";
				break;	
			case 'J':
				SONUC+="JULIET ";
				break;	
			case 'K':
				SONUC+="KILO ";
				break;	
			case 'L':
				SONUC+="LIMA ";
				break;	
			case 'M':
				SONUC+="MIKE ";
				break;	
			case 'N':
				SONUC+="NOVEMBER ";
				break;	
			case 'O':
				SONUC+="OSCAR ";
				break;	
			case 'P':
				SONUC+="PAPA ";
				break;		
			case 'Q':
				SONUC+="QUEBEC ";
				break;		
			case 'R':
				SONUC+="ROMEO ";
				break;		
			case 'S':
				SONUC+="SIERRA ";
				break;		
			case 'T':
				SONUC+="TANGO ";
				break;		
			case 'U':
				SONUC+="UNIFORM ";
				break;		
			case 'V':
				SONUC+="VICTOR ";
				break;		
			case 'W':
				SONUC+="WHISKEY ";
				break;		
			case 'X':
				SONUC+="X-RAY ";
				break;		
			case 'Y':
				SONUC+="YANKEE ";
				break;		
			case 'Z':
				SONUC+="ZULU ";
				break;				
			case "1":
				SONUC+="ONE ";
				break;
			case "2":
				SONUC+="TWO ";
				break;
			case "3":
				SONUC+="THREE ";
				break;
			case "4":
				SONUC+="FOUR ";
				break;
			case "5":
				SONUC+="FIVE ";
				break;
			case "6":
				SONUC+="SIX ";
				break;
			case "7":
				SONUC+="SEVEN ";
				break;
			case "8":
				SONUC+="EIGHT ";
				break;
			case "9":
				SONUC+="NINE ";
				break;
			case "0":
				SONUC+="ZERO ";
				break;
			default:
				SONUC+="' "+char+" ' ";
		}
	});


	return SONUC;
}