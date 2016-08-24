function (s) {
    return s.replace(/ğ/g, 'Ğ')
        .replace(/ü/g, 'Ü')
        .replace(/ş/g, 'Ş')
        .replace(/ı/g, 'I')
        .replace(/i/g, 'İ')
        .replace(/ö/g, 'Ö')
        .replace(/ç/g, 'Ç')
        .toUpperCase();
};