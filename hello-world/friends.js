var Friends = /** @class */ (function () {
    function Friends(name, age, email, bestFriend) {
        this.name = name;
        this.age = age;
        this.email = email;
        this.bestFriend = bestFriend;
    }
    Friends.prototype.about = function () {
        return "name: " + this.name + ", age: " + this.age + ", email: " + this.email + ", bestFriend: " + this.bestFriend + ".";
    };
    return Friends;
}());
var g = [new Friends("Jerry", 23, "jisslow@SpeechGrammarList.com", false),
    new Friends("Angela", 24, "angela@SpeechGrammarList.com", false),
    new Friends("Bliss", 25, "bliss@SpeechGrammarList.com", false),
    new Friends("Ted", 26, "ted@SpeechGrammarList.com", true),
    new Friends("Fred", 27, "fred@SpeechGrammarList.com", false)];
for (var _i = 0, g_1 = g; _i < g_1.length; _i++) {
    var f = g_1[_i];
    console.log(f.about());
}
