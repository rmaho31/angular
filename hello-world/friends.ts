class Friends {
    name: string;
    age: number;
    email: string;
    bestFriend: boolean;

    constructor(name: string, age: number, email: string, bestFriend: boolean) {
        this.name = name;
        this.age = age;
        this.email = email;
        this.bestFriend = bestFriend;
    }

    about(): string {
        return `name: ${this.name}, age: ${this.age}, email: ${this.email}, bestFriend: ${this.bestFriend}.`;
    }
}

let g: Friends[] = [new Friends("Jerry", 23, "jisslow@SpeechGrammarList.com", false),
                    new Friends("Angela", 24, "angela@SpeechGrammarList.com", false), 
                    new Friends("Bliss", 25, "bliss@SpeechGrammarList.com", false),
                    new Friends("Ted", 26, "ted@SpeechGrammarList.com", true),
                    new Friends("Fred", 27, "fred@SpeechGrammarList.com", false)];

for(let f of g){
    console.log(f.about());
}