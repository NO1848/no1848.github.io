// // 输入框
// prompt('qkuuslkdjfk')
//     // 警示框
// alert('sodiowe')
//     // 控制台输出
// console.log('随便')

// // 声明变量
// var age;
// // 赋值
// age = 1996;
// // 打印
// console.log(age);

// 变量的初始化
// var myname = 'yimk';
// console.log(myname);

// 小示例
// var myname = prompt('请输入你的名字');
// alert(myname);

// 更新变量
// var myname = 'yimk';
// // console.log(myname);
// // 声明多个变量
// var myname = 'yi',
//     age = 19,
//     gs = lk;
// console.log(myname);

// var age = '14';
// console.log(age);

// prompt('wode')

// 临时变量， temp， 交换数值
// var temp;
// var apple1 = 'q';
// var apple2 = 'h';
// temp = apple1;
// apple1 = apple2;
// apple2 = temp;
// console.log(apple1);
// console.log(apple2);

// console.log(-Number.MAX_VALUE * 2);
// console.log(Number.MIN_VALUE);

// console.log(isNaN('kjs' / 19));

// alert('酷热，送来肯教 \b owie。\n 的：“收破\'ui\'烂了”。\t slkdfjweo. 。。、、\\')


// var wodi = 'dfssdfwef'
// var wodi = 163546
// console.log('wo' + wodi + 'jkk');

// var age = prompt('年龄');
// alert('您今年' + age + '岁')
// console.log(typeof age);

// var diyi = prompt();
// var dier = prompt();
// var result = Number(diyi) + Number(dier)
// alert('jpgo:' + result);

// console.log(135 % 9);

// 前后置自增运算符
// var e = 10;
// var f = e++ + ++e;
// console.log(f);

// 逻辑运算符
// console.log(3 > 5 && 3 > 1);
// console.log(3 > 5 || 3 > 1);
// console.log(!true);

// 逻辑中断、短路运算
// var nmb = 0;
// console.log(123 || nmb++);
// console.log(nmb);

// // if(else)语句
// var age = prompt('nmlk');
// if (age >= 18) {
//     alert('whba')
// } else {
//     alert('hvjx')
// }

// 闰年案例
// var year = prompt('年');
// if (year % 400 == 0 || year % 4 == 0 && year % 100 != 0) {
//     alert('闰年')
// } else {
//     alert(year + '不是闰年')
// }

// 成绩分数评定输出
// var score = prompt('输入分数');
// if (score >= 90) {
//     alert('A')
// } else if (score >= 80 ) {
//     alert('B')
// } else if (score >= 70 ) {
//     alert('C')
// } else if (score >= 60 ) {
//     alert('D')
// } else {
//     alert('E')
// }

// var nmb = 5;
// var result = nmb > 3 ? 'ui' : 'buui';
// console.log(result);

// 数据补0—— 三元表达式
// var nmb = prompt('uuzi');
// var result = nmb < 10 ? nmb = '0' + nmb : nmb;
// alert(nmb);

// // switch语句
// switch (1) {
//     case 1:
//         console.log(1);
//         break;
//     case 2:
//         console.log(2);
//         break;
//     case 3:
//         console.log(3);
//         break;
//     default:
//         console.log(bupipw);
// }

// var fruit = prompt('fruit');
// switch (fruit) {
//     case 'lqlm':
//         alert('30kk');
//         break;
//     case 'pkgo':
//         alert('1kk');
//         break;
//     case 'xigx':
//         alert('5mc');
//         break;
//     default:
//         alert('buvidc');
//         break;
// }

// // for循环
// for (var i = 1; i <= 100; i++) {
//     console.log('hihi' + i + 'hihi');
// }

// // 累加1-100,算平均值
// var sum = 0;
// var average = 0;
// for (i = 1; i <= 100; i++) {
//     sum += i;
// }
// average = sum / 100;
// alert(average);

// // 100内奇数、偶数和
// var even = 0;
// var odd = 0;
// for (i = 1; i <= 100; i++) {
//     if (i % 2 == 0) {
//         even += i;
//     } else {
//         odd += i;
//     }
//     // i % 2 == 0 ? even += i : odd += i;
// }
// console.log(odd);
// console.log(even);

// 求学生成绩
// var nmb = prompt('rfuu');
// var ffuu = 0;
// var score = 0;
// for (i = 1; i <= nmb; i++) {
//     ffuu = prompt('ffuu');
//     score = score + parseFloat(ffuu);
// }
// alert('ffuu' + score / nmb);

// // 追加字符串
// var nub=prompt('xkxk');
// var str = '';
// for (i = 1; i <= nmb; i++) {
//     str = str + '(●\'◡\'●)';
// }
// alert(str);
// // console.log(str);

// // var nub = prompt('xkxk');
// var str = '💕💕💕💕💕\n';
// var result = '';
// for (i = 1; i <= 5; i++) {
//     result = result + str;
// }
// alert(result);

// var str = '';
// for (i = 1; i <= 5; i++) {
//     for (j = 1; j <= 5; j++) {
//         str = str + '💕';
//     }
//     str += '\n';
// }
// alert(str);

// //打印星星倒三角
// var str = '';
// var ranks = prompt('ranks');
// for (i = 1; i <= ranks; i++) {
//     for (j = i; j <= ranks; j++) {
//         str = str + '💕';
//     }
//     str = str + '\n'
//         // ranks--;
// }
// alert(str);

// var str = '';
// var ranks = prompt('');
// for (i = 1; i <= ranks; i++) {
//     // for (j = 1; j <= i; j++) {
//     for (j = ranks - i + 1; j <= ranks; j++) {
//         str += '💕';
//     }
//     str += '\n'
// }
// alert(str);

// //九九乘法表
// var nmb = '';
// for (i = 1; i <= 9; i++) {
//     for (j = 1; j <= i; j++) {
//         nmb += j + '×' + i + '=' + i * j + '\t';
//     }
//     nmb = nmb + '\n';
// }
// console.log(nmb);

// while
// var str = '';
// var num = 1;
// while (num <= 100) {
//     str += 'hi' + num + '\n';
//     num++;

// }
// console.log(str);

// var num = 0;
// var mun = 0;
// while (num <= 100) {
//     num++;
//     mun = mun + num;
// }
// alert(mun);

// var str = prompt('wo');
// while (str != wo) {
//     str = prompt('wo');
// }
// typeof(str)

// do while
// var num = 1;
// do {
//     console.log('woykjk' + num + 'svle');
//     num++;
// } while (num <= 100);

// var num = 0;
// var mun = 0;
// do {
//     num++;
//     mun += num;
// } while (num <= 100);
// alert(mun);

// do {
//     var xnxi = prompt('1');
// } while (xnxi != 1)

// 复习九九乘法表
// var num = '';
// var nmb = prompt('')
// for (var i = 1; i <= nmb; i++) {
//     for (var j = 1; j <= i; j++) {
//         num = num + j + '×' + i + '=' + j * i + '\t';
//     }
//     num += '\n';
// }
// alert(num);

// // 数组
// var array = [1, 2, 3, 4, 5, 6, 7];
// alert(array[6]);

// var array = [1, 2, 3, 4, 5, 6, 7];
// // console.log(array.length);
// for (i = 0; i < array.length; i++) {
//     console.log(array[i]);
// }

// var sum = 0;
// var arr = [2, 5, 1, 7, 4];
// for (i = 0; i < arr.length; i++) {
//     sum = sum + arr[i];
// }
// alert(sum);
// alert(sum / arr.length);

// 数组最大值
// var arr = [3, 6, 21, 9, 78, 216, 44, 71, 62, 45, 123, 25, 69, 198];
// var x = 0;
// for (var i = 1; i + 1 < arr.length; i++) {
//     if (arr[x] > arr[i]) {
//         x = x;
//     } else {
//         x = i;
//     }
// }
// alert(arr[x]);

// var arr = ['1.', '2.', '3.', '4.', '5.'];
// var str = '';
// var sep = '\n';
// for (i = 0; i < arr.length; i++) {
//     str += arr[i] + sep;
//     // str = (i + 1) + '.' + str;
// }
// console.log(str);

// var arr = [];
// // arr[2] = 3;
// for (var i = 0; i < 1000; i++) {
//     arr[i] = i + 1;
// }
// alert(arr);

// // 查找大于100的值
// var arr = [103, 6, 21, 9, 78, 216, 44, 71, 62, 45, 123, 25, 69, 198];
// var arr1 = [];
// var x = 0;
// for (var i = 0; i < arr.length; i++) {
//     if (arr[i] > 100) {
//         arr1[x] = arr[i];
//         x++;
//     }
// }
// alert(arr1);

/* var arr = [103, 6, 21, 9, 78, 216, 44, 71, 62, 45, 123, 25, 69, 198];
var arr1 = [];
for (var i = 0; i < arr.length; i++) {
    if (arr[i] > 100) {
        arr1[arr1.length] = arr[i];
    }
}
alert(arr1); */

/* var arr = [3, 6, 21, 9, 0, 78, 216, 0, 44, 71, 62, 0, 45, 123, 25, 69, 198];
var newArr = [];
for (var i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
            // if (arr[i] != 0) {
        newArr[newArr.length] = arr[i];
    }
}
alert(newArr); */

/* var arr = [3, 6, 21, 9, 78, 216, 44, 71, 62, 45, 123, 25, 69, 198];
var newArr = [];
for (let i = arr.length - 1; i >= 0; i--) {
    newArr[newArr.length] = arr[i]
}
// for (let i = 0; i < arr.length; i++) {
//     newArr[newArr.length] = arr[arr.length - i - 1]
// }
alert(newArr); */

/* function getSum() {
    var sum = 0;
    for (var i = 0; i <= 100; i++) {
        sum += i;
    }
    alert(sum);
}
getSum(); */

/* function look(dwe) {
    alert(dwe);
}
look('sd'); */

/* // var star = prompt();
// var en = prompt();
function getSum(start, end) {
    var sum = 0;
    for (var i = start; i <= end; i++) {
        sum += i;
    }
    return sum;
}
alert(getSum(1, 100))
    // alert(getSum(star, en)); */

/* // 冒泡排序
var arr = [49, 3, 139, 6, 255, 36, 21, 9, 166, 78, 216, 84, 71, 62, 10, 123, 25, 69, 198];
for (i = 0; i <= arr.length - 1; i++) {
    for (var j = 0; j <= arr.length - i - 1; j++) {
        if (arr[j] < arr[j + 1]) {
            var temp = arr[j];
            arr[j] = arr[j + 1];
            arr[j + 1] = temp;
        }
    }
}
console.log(arr); */

function getMax() {
    var max = arguments[0];
    for (i = 0; i < arguments.length; i++) {
        if (arguments[i] > max)
            max = arguments[i];
    }
    return max;
}
alert(getMax(49, 3, 139, 6, 255, 36, 21, 9, 166, 78, 216, 84, 71, 62, 10, 123, 25, 69, 198));