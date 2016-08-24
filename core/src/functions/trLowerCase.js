function (s) {
    return s.replace(/Ğ/g, 'ğ')
        .replace(/Ü/g, 'ü')
        .replace(/Ş/g, 'ş')
        .replace(/I/g, 'ı')
        .replace(/İ/g, 'i')
        .replace(/Ö/g, 'ö')
        .replace(/Ç/g, 'ç')
        .toLowerCase();
};