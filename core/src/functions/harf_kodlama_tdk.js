function(kelime){
	var AYRIK = trUpperCase(kelime).split('');

	var SONUC = "";

	AYRIK.forEach(function(char){
		switch(char){
			case 'A':
				SONUC+="ADANA ";
				break;
			case 'B':
				SONUC+="BOLU ";
				break;	
			case 'C':
				SONUC+="CEYHAN ";
				break;	
			case 'Ç':
				SONUC+="ÇANAKKALE ";
				break;	
			case 'D':
				SONUC+="DENİZLİ ";
				break;	
			case 'E':
				SONUC+="EDİRNE ";
				break;	
			case 'F':
				SONUC+="FATSA ";
				break;	
			case 'G':
				SONUC+="GİRESUN ";
				break;	
			case 'Ğ':
				SONUC+="YUMUŞAK-Ğ ";
				break;	
			case 'H':
				SONUC+="HATAY ";
				break;	
			case 'I':
				SONUC+="ISPARTA ";
				break;	
			case 'İ':
				SONUC+="İZMİR ";
				break;	
			case 'J':
				SONUC+="JANDARMA ";
				break;	
			case 'K':
				SONUC+="KARS ";
				break;	
			case 'L':
				SONUC+="LÜLEBURGAZ ";
				break;	
			case 'M':
				SONUC+="MUŞ ";
				break;	
			case 'N':
				SONUC+="NİĞDE ";
				break;	
			case 'O':
				SONUC+="ORDU ";
				break;	
			case 'Ö':
				SONUC+="ÖDEMİŞ ";
				break;	
			case 'P':
				SONUC+="POLATLI ";
				break;		
			case 'Q':
				SONUC+="KÖMÜR ";
				break;		
			case 'R':
				SONUC+="RİZE ";
				break;		
			case 'S':
				SONUC+="SİNOP ";
				break;		
			case 'Ş':
				SONUC+="ŞIRNAK ";
				break;		
			case 'T':
				SONUC+="TOKAT ";
				break;		
			case 'U':
				SONUC+="UŞAK ";
				break;		
			case 'Ü':
				SONUC+="ÜNYE ";
				break;		
			case 'V':
				SONUC+="VAN ";
				break;		
			case 'W':
				SONUC+="İKİ-VE ";
				break;		
			case 'X':
				SONUC+="İKiZ ";
				break;		
			case 'Y':
				SONUC+="YOZGAT ";
				break;		
			case 'Z':
				SONUC+="ZONGULDAK ";
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