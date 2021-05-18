/**
 * テンプレート文字列
 */
// const name = "じゃけぇ";
// const age = 28;

// const message = `私の名前は${name}です。年齢は${age}です。`;
// console.log(message);

/**
 * アロー関数
 */

const func = (str) => {
  return str;
};

console.log(func("funcです"));

/**
 * 分割代入
 */
const myProfile = {
  name: "nao",
  age: "28"
};

// const message1 = `myname is ${myProfile.name}.And my age is ${myProfile.age}`;
// console.log(message1);

const { name, age } = myProfile;
const message2 = `myname is ${name}.And my age is ${age}`;
console.log(message2);

const myInfo = ["nao", 28];

const message3 = `myname is ${myInfo[0]}.And my age is ${myInfo[1]}`;
console.log(message3);

const sayHello = (name = "nao") => console.log(`Hello!${name}!!`);
sayHello();

/**
 * スプレッド構文
 */

// 配列の展開
const arr1 = [1, 2];

console.log(arr1);
console.log(...arr1);

const sumFunc = (num1, num2) => console.log(num1 + num2);
sumFunc(...arr1);

const arr2 = [1, 2, 3, 4, 5];
const [num1, num2, ...num3] = arr2;

console.log(num1);
console.log(num2);
console.log(num3);

//配列のコピーや結合
const arr3 = [10, 20];
const arr4 = [30, 40];

const arr6 = [...arr3];
console.log(arr6);

/**
 * mapやfilter
 */

const nameArr = ["H", "K", "T"];

// const nameArr2 = nameArr.map((name) => {
//   return name;
// });
// console.log(nameArr2);

nameArr.map((name) => console.log(name));

const numArr = [1, 2, 3, 4, 5];

const newNumArr = numArr.filter((num) => {
  return num % 2 === 1;
});
console.log(newNumArr);

/**
 * 三項演算子
 */
// ある条件 ? 条件がtrueの時 : 条件がfalseの時

const val1 = 1 < 0 ? "true" : "false";
console.log(val1);

const num = "a";
// console.log(num.toLocaleString());

const formattedNum =
  typeof num === "number" ? num.toLocaleString() : "数値を入力してください";
console.log(formattedNum);

const checkSum = (num1, num2) => {
  return num1 + num2 > 100 ? "100を超えています" : "許容範囲ないです";
};

console.log(checkSum(500, 100));
