import { NumbersCollection } from "./NumbersCollection";
import { CharactersColletion } from "./CharactersColletion";
import { LinkedList } from "./LinkedList";

const numbersCollection = new NumbersCollection([10, 660, 9]);
const charactersColletion = new CharactersColletion("cba");
const linkedList = new LinkedList();
linkedList.add(400);
linkedList.add(-10);
linkedList.add(4);
linkedList.sort();
numbersCollection.sort();
charactersColletion.sort();

console.log(linkedList.print());
console.log(numbersCollection.data);
console.log(charactersColletion.data);
