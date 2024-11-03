"use strict";
//operator and distr.......
const friend1 = ["nam", "jam", "kam"];
const friend2 = ["nam", "jam", "kam"];
friend2.push(...friend1);
const list = Object.assign(Object.assign({}, friend1), friend2);
const fr = (...friends) => {
    friends.forEach((fri) => console.log(fri));
};
fr("rahjim", "fasf");
