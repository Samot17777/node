function Programmer () {
    this.language = [];
}

Programmer.prototype.learnNewLanguage = function (language) {
   this.language.push(language);
};

Programmer.prototype.isPragmatic = function () {
   return this.language.length >= 3 ? true : false;
};

var programmer  = new Programmer() ; 
var languages = ['jQUeyr','angular','node'];
languages.forEach(function (el) {
    programmer.learnNewLanguage(el);
});
console.log(programmer.language);