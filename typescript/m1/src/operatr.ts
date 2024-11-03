//operator and distr.......
const friend1: string[] = ["nam", "jam", "kam"];
const friend2: string[] = ["nam", "jam", "kam"];
friend2.push(...friend1);
const list = {
   ...friend1,
   ...friend2,
}
const fr = (...friends: string[]) => {
   friends.forEach((fri: string) => console.log(fri))


}
fr("rahjim", "fasf");