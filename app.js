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
programmer.learnNewLanguage('Clojure');
programmer.learnNewLanguage('Clojure');
programmer.learnNewLanguage('Clojure');
programmer.learnNewLanguage('Clojure');
console.log(programmer.isPragmatic());

