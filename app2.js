
function createProgrammer () {
    return {
        language: [],
        learnNewLanguage: function (language) {
            this.language.push(language);
        },
        isPragmatic: function () {
            return this.language.length >= 3; 
        }
    };
}

var programmer = createProgrammer();
var languages = ['a','b','c'];
languages.forEach(programmer.learnNewLanguage,programmer);
console.log(programmer.isPragmatic());