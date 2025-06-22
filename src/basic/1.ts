const age: number = 50;
const username: string = "Max";
const toggle: boolean = true;
const empty: null = null;
const callback = (a: unknown): number => {
  if (typeof a === "number") {
    return 100 + a;
  }
  console.log(" Аргумент не є числом!");
  return 0;
};
