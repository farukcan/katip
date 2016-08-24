function(kelime){
	var AYRIK = trUpperCase(kelime).split('');

	var SONUC = "";

	AYRIK.forEach(function(char){
		switch(char){
			case 'A':
				SONUC+="AHMET ";
				break;
			case 'B':
				SONUC+="BEHÇET ";
				break;	
			case 'C':
				SONUC+="CEMAL ";
				break;	
			case 'Ç':
				SONUC+="ÇETİN ";
				break;	
			case 'D':
				SONUC+="DAVUT ";
				break;	
			case 'E':
				SONUC+="EKREM ";
				break;	
			case 'F':
				SONUC+="FATİH ";
				break;	
			case 'G':
				SONUC+="GALİP ";
				break;	
			case 'Ğ':
				SONUC+="YUMUŞAK-Ğ ";
				break;	
			case 'H':
				SONUC+="HASAN ";
				break;	
			case 'I':
				SONUC+="IRMAK ";
				break;	
			case 'İ':
				SONUC+="İRFAN ";
				break;	
			case 'J':
				SONUC+="JALE ";
				break;	
			case 'K':
				SONUC+="KADRİ ";
				break;	
			case 'L':
				SONUC+="LOKUM ";
				break;	
			case 'M':
				SONUC+="MEHMET ";
				break;	
			case 'N':
				SONUC+="NİZAM ";
				break;	
			case 'O':
				SONUC+="OSMAN ";
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
				SONUC+="RASİM ";
				break;		
			case 'S':
				SONUC+="SERHAT ";
				break;		
			case 'Ş':
				SONUC+="ŞABAN ";
				break;		
			case 'T':
				SONUC+="TEMEL ";
				break;		
			case 'U':
				SONUC+="UFUK ";
				break;		
			case 'Ü':
				SONUC+="ÜMİT ";
				break;		
			case 'V':
				SONUC+="VEHBİ ";
				break;		
			case 'W':
				SONUC+="İKİ-VE ";
				break;		
			case 'X':
				SONUC+="İKiZ ";
				break;		
			case 'Y':
				SONUC+="YAHYA ";
				break;		
			case 'Z':
				SONUC+="ZÜHTÜ ";
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