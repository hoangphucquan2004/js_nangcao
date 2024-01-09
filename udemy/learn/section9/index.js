// const arr = [2,3,4];
// const a = arr[0];
// const b = arr[1];
// const c = arr[2];
// const [x,y,z] = arr;
// console.log(x,y,z);
// console.log (arr);


// const restaurant = {
//     name: 'Hoàng Phúc Quân',
//     location : 'Nghệ An',
//     nemu : ['bánh', 'nước ngọt' , 'kẹo']
// };
// let [main, secondary] = restaurant.nemu;
// console.log(main, secondary);
// //bánh, nước ngọt
// const temp = main;
// main = secondary;
// secondary = temp;
// console.log (main, secondary);


// const arr_1 = [1,2,3];
// const arr = [4,5,6];
// const newArr = [1,2, ...arr];
// console.log (newArr);
// console.log (...newArr);
// //join 2 array
// const join_array = [...arr_1, ...arr];
// console.log(join_array);

// const str = "hoangphuc";
// const letter = [...str, '', 'quan']
// console.log(letter);


//prompt nhận dữ liệu người nhập
// const ingredients = [
//     prompt('Nguyên liệu 1:'),
//     prompt('Nguyên liệu 2:'),
//     prompt('Nguyên liệu 3:'),
// ];
// console.log (ingredients);


// const [a,b, ...others] = [1,2,3,4,5];
// console.log (a,b, ...others);

//===============OR==================
// console.log (3 || 'hello');
// console.log (0|| true);
// console.log (undefined || null);
// console.log ('' || 'Quân');
// console.log (undefined || 0 || null || 5);

// const monan = null;
// const soluong = monan ? monan : 10;
// console.log(soluong);

//=============AND========================
// console.log (0 && 'Quân');
// console.log (7 && 'Quân');
// console.log (true && 'Quân' && null && 12);

// const a = {
//     name : 'Hoàng',
//     age : '12'
// };
// const b = {
//     name : 'Phúc',
//     namsinh : '2004'
// };
// a.age = a.age || 10;
// b.age = b.age || 10;
// console.log(a);
// console.log(b);




//===========================Vòng lặp=======================
// const  a = ['QUân','Quý','Phượng','Lĩnh','Thương'];
// for(const b of a)
// console.log (b);
// for(const [i,j] of a.entries())
// console.log (`${i+1} : ${j}`);




//============================================================
const rest = new Map();
rest.set('name', 'Viet Nam');
rest.set(1, 'Nghệ An');
console.log(rest.set(2, 'Trung Quốc'));






