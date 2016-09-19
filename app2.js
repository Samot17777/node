
function createProgrammer () {
    var language = [];
    return {
        learnNewLanguage: function (languagee) {
            language.push(languagee);
        },
        isPragmatic: function () {
            return language.length >= 3; 
        }
    };
}

var programmer = createProgrammer();
var languages = ['a','b','c'];
languages.forEach(programmer.learnNewLanguage);
console.log(programmer.isPragmatic());