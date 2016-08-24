function(kelime){
	var AYRIK = trUpperCase(kelime).split('');

	var SONUC = "";

	AYRIK.forEach(function(char){
		switch(char){
			case 'A':
				SONUC+="AYDIN ";
				break;
			case 'B':
				SONUC+="BURAK ";
				break;	
			case 'C':
				SONUC+="CEMAL ";
				break;	
			case 'Ç':
				SONUC+="ÇETİN ";
				break;	
			case 'D':
				SONUC+="DENİZ ";
				break;	
			case 'E':
				SONUC+="ENGİN ";
				break;	
			case 'F':
				SONUC+="FELENK ";
				break;	
			case 'G':
				SONUC+="GABYA ";
				break;	
			case 'Ğ':
				SONUC+="YUMUŞAK-Ğ ";
				break;	
			case 'H':
				SONUC+="HALAT ";
				break;	
			case 'I':
				SONUC+="IRMAK ";
				break;	
			case 'İ':
				SONUC+="İSTİF ";
				break;	
			case 'J':
				SONUC+="JALE ";
				break;	
			case 'K':
				SONUC+="KALYON ";
				break;	
			case 'L':
				SONUC+="LEVENT ";
				break;	
			case 'M':
				SONUC+="MERİH ";
				break;	
			case 'N':
				SONUC+="NEPTÜN ";
				break;	
			case 'O':
				SONUC+="ORUÇ ";
				break;	
			case 'Ö':
				SONUC+="ÖMER ";
				break;	
			case 'P':
				SONUC+="POYRAZ ";
				break;		
			case 'Q':
				SONUC+="KÖMÜR ";
				break;		
			case 'R':
				SONUC+="REİS ";
				break;		
			case 'S':
				SONUC+="SEYDİ ";
				break;		
			case 'Ş':
				SONUC+="ŞABAN ";
				break;		
			case 'T':
				SONUC+="TURGUT ";
				break;		
			case 'U':
				SONUC+="UMMAN ";
				break;		
			case 'Ü':
				SONUC+="ÜMİT ";
				break;		
			case 'V':
				SONUC+="VATAN ";
				break;		
			case 'W':
				SONUC+="İKİ-VE ";
				break;		
			case 'X':
				SONUC+="İKiZ ";
				break;		
			case 'Y':
				SONUC+="YILMAZ ";
				break;		
			case 'Z':
				SONUC+="ZUHAL ";
				break;				
			case '.':
				SONUC+="NOKTA ";
				break;				
			case ',':
				SONUC+="VİRGÜL ";
				break;		
			case "'":
				SONUC+="TIRNAK ";
				break;		
			case "+":
				SONUC+="ARTI ";
				break;		
			case "-":
				SONUC+="TİRE ";
				break;
			case "/":
				SONUC+="SLAŞ ";
				break;
			case "\\":
				SONUC+="SLAŞ ";
				break;
			case "*":
				SONUC+="YILDIZ ";
				break;
			case "?":
				SONUC+="SORU-İŞARETİ ";
				break;
			case "!":
				SONUC+="ÜNLEM ";
				break;
			case "#":
				SONUC+="KARE ";
				break;
			case "1":
				SONUC+="BİR ";
				break;
			case "2":
				SONUC+="İKİ ";
				break;
			case "3":
				SONUC+="ÜÇ ";
				break;
			case "4":
				SONUC+="DÖRT ";
				break;
			case "5":
				SONUC+="BEŞ ";
				break;
			case "6":
				SONUC+="ALTI ";
				break;
			case "7":
				SONUC+="YEDİ ";
				break;
			case "8":
				SONUC+="SEKİZ ";
				break;
			case "9":
				SONUC+="DOKUZ ";
				break;
			case "0":
				SONUC+="SIFIR ";
				break;
			default:
				SONUC+="' "+char+" ' ";
		}
	});


	return SONUC;
}