export class Temp {
  function1() {
    console.log("function1");
  }

  function2(text = "Předvyplněný text") {
    console.log(text);
  }
}

new Temp().function2();
new Temp().function2("Text při volání funkce");
