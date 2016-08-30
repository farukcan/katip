// src kod değişimleri algılayan bir sistemdir.

/* Aşağıdakiler değişirse , projeyi tamamen yeniden başlatır.

* const.js
* /classes
* /functions
* /includes


*/

fs.watch('src/const.js',restart);
fs.watch('src/classes',{recursive :true},restart);
fs.watch('src/functions',{recursive :true},restart);
fs.watch('src/includes',{recursive :true},restart);
