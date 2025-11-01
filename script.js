/* ==================== CONFIG ==================== */
const POOL_KEY = 'js_quiz_used_questions_v1'; // localStorage key
const PICK_COUNT = 30;
const TIME_PER_QUESTION = 15; // seconds

/* ==================== QUESTION POOL (use your provided pool) ====================
   I use the textual question as the unique id; it's okay if identical questions appear —
   but ideally each question text is unique in the pool.
   (The pool below contains all your previously provided questions — truncated may break uniqueness)
=================================================*/
const questionPool = [
	{
		q: 'JavaScriptda o‘zgaruvchi e’lon qilish uchun qaysi kalit so‘z ishlatiladi?',
		options: ['var', 'int', 'define', 'set'],
		answer: 0,
	},
	{
		q: 'let bilan e’lon qilingan o‘zgaruvchi qayerda amal qiladi?',
		options: ['Block scope', 'Global scope', 'Function scope', 'None'],
		answer: 0,
	},
	{
		q: 'const o‘zgaruvchiga qayta qiymat berish mumkinmi?',
		options: ['Yo‘q', 'Ha', 'Faqat string', 'Faqat number'],
		answer: 0,
	},
	{ q: 'typeof 42 natijasi nima?', options: ['"number"', '"string"', '"object"', '"undefined"'], answer: 0 },
	{ q: 'typeof "hello" natijasi nima?', options: ['"string"', 'text', 'char', 'object'], answer: 0 },
	{ q: 'JavaScriptda true qiymat turi qanday?', options: ['Boolean', 'String', 'Object', 'Number'], answer: 0 },
	{
		q: 'null ning turi typeof orqali aniqlanganda nima chiqadi?',
		options: ['"object"', '"null"', '"undefined"', '"boolean"'],
		answer: 0,
	},
	{
		q: 'undefined qiymati nimani bildiradi?',
		options: ['Qiymat belgilanmagan', '0', 'Bo‘sh satr', 'False'],
		answer: 0,
	},
	{
		q: 'NaN so‘zi nimani anglatadi?',
		options: ['Not a Number', 'Null and None', 'Negative number', 'No available number'],
		answer: 0,
	},
	{ q: 'Quyidagi kod natijasi: 5 + "5"', options: ['"55"', '10', '55', 'Error'], answer: 0 },
	{ q: 'parseInt("12.5") natijasi nima?', options: ['12', '12.5', '"12.5"', 'Error'], answer: 0 },
	{ q: 'parseFloat("7.9px") natijasi nima?', options: ['7.9', '"7.9"', 'Error', '0'], answer: 0 },
	{ q: '"10" - 2 natijasi nima?', options: ['8', '"102"', 'Error', 'NaN'], answer: 0 },
	{ q: '"5" * "2" natijasi nima?', options: ['10', '"10"', '"52"', 'Error'], answer: 0 },
	{ q: '"5" + 2 + 3 natijasi nima?', options: ['"523"', '10', '"10"', 523], answer: 0 },
	{ q: '2 + 3 + "5" natijasi nima?', options: ['"55"', '"235"', 55, 'Error'], answer: 0 },
	{
		q: 'JavaScriptda == va === farqi nimada?',
		options: ['Tipni ham solishtiradi', 'Farqi yo‘q', '== tezroq', '=== har doim false'],
		answer: 0,
	},
	{ q: 'Boolean("") natijasi nima?', options: ['false', 'true', 'null', '0'], answer: 0 },
	{ q: 'Boolean("0") natijasi nima?', options: ['true', 'false', 'NaN', 'Error'], answer: 0 },
	{ q: 'Boolean(0) natijasi nima?', options: ['false', 'true', 'null', 'undefined'], answer: 0 },
	{ q: 'if (5 > 3) sharti bajariladimi?', options: ['Ha', 'Yo‘q', 'Error', 'NaN'], answer: 0 },
	{ q: 'if ("5" == 5) natijasi nima?', options: ['true', 'false', 'error', 'undefined'], answer: 0 },
	{ q: 'if ("5" === 5) natijasi nima?', options: ['false', 'true', 'error', 'undefined'], answer: 0 },
	{ q: 'null == undefined qiymati qanday?', options: ['true', 'false', 'NaN', 'Error'], answer: 0 },
	{ q: 'null === undefined qiymati qanday?', options: ['false', 'true', 'NaN', 'Error'], answer: 0 },
	{ q: 'isNaN("text") natijasi nima?', options: ['true', 'false', 'NaN', 'Error'], answer: 0 },
	{ q: 'isNaN(5) natijasi nima?', options: ['false', 'true', 'NaN', 'Error'], answer: 0 },
	{ q: '5 % 2 natijasi nima?', options: ['1', '2', '0', '2.5'], answer: 0 },
	{ q: 'Math.floor(4.9) natijasi nima?', options: ['4', '5', '4.9', 'Error'], answer: 0 },
	{ q: 'Math.ceil(4.1) natijasi nima?', options: ['5', '4', '4.1', 'Error'], answer: 0 },
	{ q: 'Math.round(4.5) natijasi nima?', options: ['5', '4', '4.5', 'Error'], answer: 0 },
	{ q: 'Math.max(2,5,1) natijasi nima?', options: ['5', '2', '1', 'Error'], answer: 0 },
	{ q: 'Math.min(2,5,1) natijasi nima?', options: ['1', '5', '2', 'Error'], answer: 0 },
	{ q: 'Math.pow(2,3) natijasi nima?', options: ['8', '6', '9', 'Error'], answer: 0 },
	{ q: 'Math.sqrt(9) natijasi nima?', options: ['3', '9', '81', 'Error'], answer: 0 },
	{ q: 'if (false\n\n\ntrue) natijasi nima?', options: ['true', 'false'], answer: 1 },
	{ q: 'if (false && true) natijasi nima?', options: ['false', 'true', 'undefined', 'null'], answer: 0 },
	{ q: '!true natijasi nima?', options: ['false', 'true', 'NaN', 'null'], answer: 0 },
	{ q: '!false natijasi nima?', options: ['true', 'false', '0', 'undefined'], answer: 0 },
	{ q: '5 > 3 && 2 < 4 natijasi nima?', options: ['true', 'false', 'NaN', 'null'], answer: 0 },
	{
		q: 'for (let i=0; i<3; i++) console.log(i); nechta chiqadi?',
		options: ['3 ta', '2 ta', '4 ta', '1 ta'],
		answer: 0,
	},
	{
		q: 'while (i < 5) sikli nechta shartni tekshiradi?',
		options: ['Har aylanishda', 'Faqat bir marta', 'Hech qachon', 'Oxirida'],
		answer: 0,
	},
	{
		q: 'break operatori nima qiladi?',
		options: ['Sikldan chiqadi', 'Keyingi aylanishga o‘tadi', 'Kodni qayta bajaradi', 'Faqat if da ishlaydi'],
		answer: 0,
	},
	{
		q: 'continue operatori nima qiladi?',
		options: ['Keyingi aylanishga o‘tadi', 'Siklni to‘xtatadi', 'Kodni tugatadi', 'Hech narsa'],
		answer: 0,
	},
	{
		q: 'for..of nima uchun ishlatiladi?',
		options: ['Massiv elementlarini o‘qish uchun', 'Obyekt kalitlarini o‘qish uchun', 'DOM uchun', 'Funktsiya uchun'],
		answer: 0,
	},
	{
		q: 'for..in nima uchun ishlatiladi?',
		options: ['Obyekt kalitlarini o‘qish uchun', 'Massiv qiymatlari uchun', 'Stringni kesish uchun', 'DOM uchun'],
		answer: 0,
	},
	{
		q: 'Funksiya yaratish sintaksisi qaysi?',
		options: ['function myFunc() {}', 'func myFunc()', 'def myFunc()', 'method myFunc()'],
		answer: 0,
	},
	{
		q: 'Funksiya chaqirish qanday bo‘ladi?',
		options: ['myFunc()', 'call myFunc', 'function myFunc', 'run myFunc'],
		answer: 0,
	},
	{
		q: 'Funksiya qiymat qaytarmasa qanday so‘z ishlatiladi?',
		options: ['return ishlatilmaydi', 'return false', 'break', 'output'],
		answer: 0,
	},
	{
		q: 'return operatori nimani bildiradi?',
		options: ['Qiymatni qaytaradi', 'Konsolga chiqaradi', 'Siklni tugatadi', 'O‘zgaruvchi yaratadi'],
		answer: 0,
	},
	{
		q: 'function add(a,b){return a+b} da add(2,3) natijasi?',
		options: ['5', '23', 'Error', 'undefined'],
		answer: 0,
	},
	{ q: 'function test(x=5){return x} da test() natijasi?', options: ['5', 'undefined', '0', 'Error'], answer: 0 },
	{
		q: 'Arrow funksiyada => belgisi nimani bildiradi?',
		options: ['Qisqa yozuv', 'Operator', 'Shart', 'Ob’yekt'],
		answer: 0,
	},
	{ q: 'const f = (a,b) => a*b da f(2,3) natijasi?', options: ['6', '5', '23', 'Error'], answer: 0 },
	{ q: 'JavaScriptda massiv qanday belgilanadi?', options: ['[]', '{}', '()', '<>'], answer: 0 },
	{ q: 'const arr=[1,2,3]; arr[1] qiymati nima?', options: ['2', '1', '3', 'undefined'], answer: 0 },
	{
		q: 'arr.length nima qaytaradi?',
		options: ['Elementlar sonini', 'Oxirgi elementni', 'Indeksni', 'Error'],
		answer: 0,
	},
	{
		q: 'arr.push(4) nima qiladi?',
		options: ['Oxiriga element qo‘shadi', 'Boshiga qo‘shadi', 'O‘chiradi', 'Saralaydi'],
		answer: 0,
	},
	{
		q: 'arr.pop() nima qiladi?',
		options: ['Oxirgi elementni o‘chiradi', 'Boshini o‘chiradi', '0 elementini o‘chiradi', 'Hammasini o‘chiradi'],
		answer: 0,
	},
	{
		q: 'arr.shift() nima qiladi?',
		options: ['Boshidagi elementni o‘chiradi', 'Oxiriga qo‘shadi', 'Massivni tozalaydi', 'Error'],
		answer: 0,
	},
	{
		q: 'for (let i=0; i<=2; i++) sikl necha marta aylanadi?',
		options: ['3 marta', '2 marta', '4 marta', 'Cheksiz'],
		answer: 0,
	},
	{
		q: 'do...while sikli nechta marta bajarilishi kafolatlanadi?',
		options: ['Kamida 1 marta', 'Hech marta', '2 marta', 'Cheksiz'],
		answer: 0,
	},
	{ q: 'while(false) sikli bajariladimi?', options: ['Yo‘q', 'Ha', 'Bir marta', 'Cheksiz'], answer: 0 },
	{ q: 'for (let i=1;i<5;i+=2) da i qiymatlari?', options: ['1,3', '1,2,3,4', '2,4', '0,2,4'], answer: 0 },
	{
		q: 'for siklida i++ nimani bildiradi?',
		options: ['Qiymatni 1 ga oshiradi', 'Qiymatni kamaytiradi', '2 ga oshiradi', 'Qiymatni nolga tenglaydi'],
		answer: 0,
	},
	{
		q: 'for (let i=5; i>0; i--) qanday ishlaydi?',
		options: ['5 dan 1 gacha kamayadi', '1 dan 5 gacha oshadi', 'Cheksiz', 'Faqat 1 marta'],
		answer: 0,
	},
	{
		q: 'break siklni qayerda to‘xtatadi?',
		options: ['To‘g‘ri shart topilganda', 'Hech qachon', 'Avvalida', 'Har 2 aylanishda'],
		answer: 0,
	},
	{
		q: 'continue operatori nimani bildiradi?',
		options: ['Joriy aylanishni o‘tkazadi', 'Siklni to‘xtatadi', 'Shartni o‘zgartiradi', 'Qiymat qaytaradi'],
		answer: 0,
	},
	{ q: 'for (let x of "JS") console.log(x) chiqishi?', options: ['J S', 'JS', '1 2', 'Error'], answer: 0 },
	{ q: 'for (let i in {a:1,b:2}) da i qiymatlari?', options: ['a, b', '1,2', 'a1,b2', 'error'], answer: 0 },
	{
		q: 'Funksiya parametrlari qanday ajratiladi?',
		options: ['Vergul bilan', 'Nuqta bilan', 'Qavs bilan', 'Tayoqcha bilan'],
		answer: 0,
	},
	{
		q: 'return operatori yo‘q bo‘lsa, funksiya nima qaytaradi?',
		options: ['undefined', 'null', '0', 'false'],
		answer: 0,
	},
	{
		q: 'function add(a,b){console.log(a+b)} natija nima?',
		options: ['Natija konsolda chiqadi', 'Qiymat qaytadi', 'Error', 'undefined'],
		answer: 0,
	},
	{ q: 'function x(){return 2*3} da x()?', options: ['6', '5', '23', 'undefined'], answer: 0 },
	{
		q: 'function f(){} bu qanday funksiya?',
		options: ['Bo‘sh funksiya', 'Arrow funksiya', 'Global', 'Anonim'],
		answer: 0,
	},
	{
		q: 'Anonim funksiya nima?',
		options: ['Nomi yo‘q funksiya', 'O‘zgaruvchi', 'Klass', 'DOM elementi'],
		answer: 0,
	},
	{
		q: 'const f = function(a,b){return a+b} – bu nima?',
		options: ['Funksiya ifodasi', 'Klass', 'Obyekt', 'Hodisa'],
		answer: 0,
	},
	{
		q: 'setTimeout() nimaga xizmat qiladi?',
		options: ['Kodni kechiktirib bajarish', 'Kodni to‘xtatish', 'DOMni o‘chirish', 'Massivni o‘zgartirish'],
		answer: 0,
	},
	{
		q: 'setInterval() nima qiladi?',
		options: ['Belgilangan oraliqda takrorlaydi', 'Faqat bir marta bajaradi', 'DOM qo‘shadi', 'To‘xtaydi'],
		answer: 0,
	},
	{
		q: 'clearInterval() nima qiladi?',
		options: ['Takrorlashni to‘xtatadi', 'Yangi interval yaratadi', 'Funksiyani ishga tushiradi', 'DOMni yangilaydi'],
		answer: 0,
	},
	{ q: 'const arr = [10,20,30]; arr[0] qiymati?', options: ['10', '20', '30', 'undefined'], answer: 0 },
	{
		q: 'arr[2] = 99 nima qiladi?',
		options: ['3-elementni o‘zgartiradi', 'Yangi massiv yaratadi', 'O‘chiradi', 'Error beradi'],
		answer: 0,
	},
	{ q: 'arr.includes(20) natijasi nima?', options: ['true', 'false', '0', 'Error'], answer: 0 },
	{ q: 'arr.indexOf(30) nima qaytaradi?', options: ['2', '1', '3', '-1'], answer: 0 },
	{
		q: 'arr.concat([4,5]) nima beradi?',
		options: ['Yangi massiv', 'Eski massivni o‘zgartiradi', 'Hech narsa', 'Error'],
		answer: 0,
	},
	{
		q: 'arr.slice(1,3) nima qiladi?',
		options: ['Kesma qaytaradi', 'Element o‘chiradi', 'Qo‘shadi', 'Null'],
		answer: 0,
	},
	{
		q: 'arr.splice(1,1) nima qiladi?',
		options: ['Element o‘chiradi', 'Qo‘shadi', 'Saralaydi', 'Tozalaydi'],
		answer: 0,
	},
	{
		q: 'arr.reverse() nima qiladi?',
		options: ['Tartibni teskari qiladi', 'Saralaydi', 'Qo‘shadi', 'Tozalaydi'],
		answer: 0,
	},
	{ q: 'arr.sort() nima qiladi?', options: ['Saralaydi', 'Teskari qiladi', 'O‘chiradi', 'Qo‘shadi'], answer: 0 },
	{
		q: 'arr.join("-") natijasi nima?',
		options: ['Elementlarni "-" bilan birlashtiradi', 'Qo‘shadi', 'O‘chiradi', 'Bo‘shatadi'],
		answer: 0,
	},
	{ q: 'const obj = {a:1,b:2} da obj.a qiymati?', options: ['1', 'a', '2', 'undefined'], answer: 0 },
	{ q: 'obj["b"] qiymati?', options: ['2', 'b', 'undefined', 'NaN'], answer: 0 },
	{
		q: 'delete obj.a nima qiladi?',
		options: ['a ni o‘chiradi', 'Hammasini o‘chiradi', 'Error', '0 qiladi'],
		answer: 0,
	},
	{ q: 'Object.keys(obj) nima beradi?', options: ['["a","b"]', '[1,2]', '["1","2"]', 'undefined'], answer: 0 },
	{ q: 'Object.values(obj) nima beradi?', options: ['[1,2]', '["a","b"]', '[a,b]', 'undefined'], answer: 0 },
	{
		q: 'Object.entries(obj) natijasi?',
		options: ['[["a",1],["b",2]]', '[1,2]', '["a,b"]', 'undefined'],
		answer: 0,
	},
	{
		q: 'obj.c = 3 nima qiladi?',
		options: ['Yangi property qo‘shadi', 'O‘chiradi', 'Error', 'Null qiladi'],
		answer: 0,
	},
	{
		q: 'in operatori nima uchun ishlatiladi?',
		options: ['Property mavjudligini tekshirish', 'Qiymatni olish', 'Massiv yaratish', 'DOM qo‘shish'],
		answer: 0,
	},
	{
		q: 'JSON.stringify(obj) nima qiladi?',
		options: ['JSON satrga o‘giradi', 'JSONni o‘qiydi', 'DOM yaratadi', 'Funksiya chaqiradi'],
		answer: 0,
	},
	{ q: 'JSON.parse(\'{"a":1}\') natijasi?', options: ['Obyekt', 'String', 'Array', 'NaN'], answer: 0 },
	{
		q: 'localStorage.setItem("ism","Ali") nima qiladi?',
		options: ['Ma’lumotni saqlaydi', 'O‘chiradi', 'JSON yaratadi', 'Hech narsa'],
		answer: 0,
	},
	{
		q: 'localStorage.getItem("ism") nima qiladi?',
		options: ['Ma’lumotni o‘qiydi', 'O‘chiradi', 'JSON parse qiladi', 'Error'],
		answer: 0,
	},
	{
		q: 'localStorage.removeItem("ism") nima qiladi?',
		options: ['O‘chiradi', 'Saqlaydi', 'Qo‘shadi', 'Teskari qiladi'],
		answer: 0,
	},
	{
		q: 'localStorage.clear() nima qiladi?',
		options: ['Hammasini o‘chiradi', 'Faqat bitta element', 'Faqat kalitlarni', 'Error'],
		answer: 0,
	},
	{
		q: 'document.getElementById("demo") nima qaytaradi?',
		options: ['Element', 'String', 'Array', 'Null'],
		answer: 0,
	},
	{
		q: 'document.querySelector(".class") nima qaytaradi?',
		options: ['Birinchi mos element', 'Hammasini', 'Null', 'JSON'],
		answer: 0,
	},
	{
		q: 'document.querySelectorAll("p") nima qaytaradi?',
		options: ['NodeList', 'Array', 'Obyekt', 'String'],
		answer: 0,
	},
	{
		q: 'element.textContent nima qiladi?',
		options: ['Matnni oladi yoki o‘rnatadi', 'Rasmni o‘chiradi', 'DOMni tozalaydi', 'JSONga o‘giradi'],
		answer: 0,
	},
	{
		q: 'element.innerHTML nima qiladi?',
		options: ['HTML ichki kodini oladi', 'Faqat textni oladi', 'DOMni o‘chiradi', 'Classni o‘zgartiradi'],
		answer: 0,
	},
	{
		q: 'document.createElement("div") nima qiladi?',
		options: ['Yangi element yaratadi', 'DOMni o‘chiradi', 'JSON yaratadi', 'Hech narsa'],
		answer: 0,
	},
	{
		q: 'parent.appendChild(child) nima qiladi?',
		options: ['Elementni DOMga qo‘shadi', 'O‘chiradi', 'O‘zgartiradi', 'JSON qo‘shadi'],
		answer: 0,
	},
	{
		q: 'element.remove() nima qiladi?',
		options: ['Elementni o‘chiradi', 'Qo‘shadi', 'Yashiradi', 'Saralaydi'],
		answer: 0,
	},
	{
		q: 'element.classList.add("red") nima qiladi?',
		options: ['Klass qo‘shadi', 'Klassni o‘chiradi', 'Textni o‘zgartiradi', 'JSON yaratadi'],
		answer: 0,
	},
	{
		q: 'element.classList.remove("red") nima qiladi?',
		options: ['Klassni o‘chiradi', 'Qo‘shadi', 'Textni o‘zgartiradi', 'DOM tozalaydi'],
		answer: 0,
	},
	{
		q: 'element.style.color = "blue" nima qiladi?',
		options: ['Rangni o‘zgartiradi', 'Fontni o‘zgartiradi', 'DOMni o‘chiradi', 'Class qo‘shadi'],
		answer: 0,
	},
	{
		q: 'addEventListener("click", fn) nima qiladi?',
		options: ['Hodisani kuzatadi', 'Funksiyani chaqiradi', 'DOMni o‘chiradi', 'JSON yaratadi'],
		answer: 0,
	},
	{
		q: 'removeEventListener("click", fn) nima qiladi?',
		options: ['Hodisani olib tashlaydi', 'Qo‘shadi', 'DOMni yangilaydi', 'Textni o‘chiradi'],
		answer: 0,
	},
	{
		q: 'event.preventDefault() nima qiladi?',
		options: ['Standart xatti-harakatni to‘xtatadi', 'DOMni o‘chiradi', 'Rasmni yashiradi', 'Error beradi'],
		answer: 0,
	},
	{
		q: 'event.target nima bildiradi?',
		options: ['Hodisani chaqirgan element', 'Butun sahifa', 'DOM ildizi', 'Null'],
		answer: 0,
	},
	{
		q: 'document.forms[0] nima qaytaradi?',
		options: ['Birinchi formani', 'Barcha formalar', 'Form elementlari', 'Null'],
		answer: 0,
	},
	{ q: 'input.value nima beradi?', options: ['Kiritilgan qiymatni', 'Labelni', 'IDni', 'Classni'], answer: 0 },
	{
		q: 'input.placeholder nimani bildiradi?',
		options: ['Namuna matn', 'Kiritilgan qiymat', 'Type', 'Style'],
		answer: 0,
	},
	{
		q: 'input.disabled = true nima qiladi?',
		options: ['Inputni bloklaydi', 'O‘chiradi', 'Tozalaydi', 'JSON qiladi'],
		answer: 0,
	},
	{
		q: 'input.checked qaysi turdagi inputlar uchun?',
		options: ['Checkbox / radio', 'Text', 'Password', 'File'],
		answer: 0,
	},
	{
		q: 'form.submit() nima qiladi?',
		options: ['Formani yuboradi', 'Formani o‘chiradi', 'DOMni yangilaydi', 'JSONni yaratadi'],
		answer: 0,
	},
	{
		q: 'alert("Salom") nima qiladi?',
		options: ['Xabar oynasini ko‘rsatadi', 'DOMni o‘zgartiradi', 'Console chiqadi', 'Error beradi'],
		answer: 0,
	},
	{ q: 'confirm("Aniqmi?") nima qaytaradi?', options: ['true yoki false', 'String', 'Null', 'Error'], answer: 0 },
	{
		q: 'prompt("Ismingiz?") nima qiladi?',
		options: ['Foydalanuvchidan matn so‘raydi', 'Xabar chiqaradi', 'DOM yaratadi', 'Funksiya chaqiradi'],
		answer: 0,
	},
	{
		q: 'window.location.href nima?',
		options: ['Joriy URL', 'Foydalanuvchi ismi', 'DOM ildizi', 'IP manzil'],
		answer: 0,
	},
	{
		q: 'window.location.reload() nima qiladi?',
		options: ['Sahifani yangilaydi', 'O‘chiradi', 'DOM yaratadi', 'JSONga o‘giradi'],
		answer: 0,
	},
	{
		q: 'window.open() nima qiladi?',
		options: ['Yangi oynani ochadi', 'Brauzerni yopadi', 'DOMni o‘zgartiradi', 'Alert chiqaradi'],
		answer: 0,
	},
	{
		q: 'navigator.userAgent nimani beradi?',
		options: ['Brauzer haqida ma’lumot', 'IP manzil', 'DOM', 'OS versiyasi'],
		answer: 0,
	},
	{
		q: 'screen.width nimani bildiradi?',
		options: ['Ekran kengligini', 'Brauzer nomini', 'DOMni', 'Ruxsatni'],
		answer: 0,
	},
	{
		q: 'setTimeout(()=>alert("Hi"),2000) nima qiladi?',
		options: ['2 soniyadan keyin alert chiqaradi', 'Darhol chiqaradi', '2 marta chiqaradi', 'Error beradi'],
		answer: 0,
	},
	{
		q: 'setInterval(()=>console.log("OK"),1000) nima qiladi?',
		options: ['Har 1 soniyada yozadi', 'Faqat bir marta', 'To‘xtaydi', 'DOM yaratadi'],
		answer: 0,
	},
	{
		q: 'clearTimeout(id) nima qiladi?',
		options: ['Taymerni bekor qiladi', 'Intervalni to‘xtatadi', 'DOMni o‘chiradi', 'JSON yaratadi'],
		answer: 0,
	},
	{ q: 'Date.now() nima beradi?', options: ['Millisekunddagi vaqt', 'Sana obyekti', 'String', 'Yil'], answer: 0 },
	{ q: 'new Date().getFullYear() nima beradi?', options: ['Joriy yil', 'Oy', 'Sana', 'Soat'], answer: 0 },
	{
		q: 'new Date().getMonth() natijasi qanday?',
		options: ['0–11 oralig‘ida', '1–12 oralig‘ida', '1–31', 'String'],
		answer: 0,
	},
	{ q: 'new Date().getDay() nima qaytaradi?', options: ['Haftaning kuni', 'Oy', 'Yil', 'Sana'], answer: 0 },
	{
		q: 'Math.random() nima qaytaradi?',
		options: ['0–1 oralig‘ida tasodifiy son', 'To‘liq son', 'Manfiy son', 'String'],
		answer: 0,
	},
	{ q: 'Math.abs(-5) natijasi?', options: ['5', '-5', '0', 'Error'], answer: 0 },
	{ q: 'Math.round(2.4) natijasi?', options: ['2', '3', '2.4', '2.5'], answer: 0 },
	{
		q: '"JavaScript".toUpperCase() natijasi?',
		options: ['JAVASCRIPT', 'javascript', 'JavaScript', 'Error'],
		answer: 0,
	},
	{ q: '"HELLO".toLowerCase() natijasi?', options: ['hello', 'HELLO', 'Hello', 'error'], answer: 0 },
	{ q: '"abc".includes("b") natijasi?', options: ['true', 'false', 'null', 'undefined'], answer: 0 },
	{ q: '"abc".indexOf("c") natijasi?', options: ['2', '1', '3', '-1'], answer: 0 },
	{ q: '"abc".replace("a","x") natijasi?', options: ['xbc', 'abc', 'axc', 'error'], answer: 0 },
	{ q: '" hi ".trim() natijasi?', options: ['"hi"', '" hi "', '" hi"', '"hi "'], answer: 0 },
	{ q: 'Number("5") natijasi?', options: ['5', '"5"', 'NaN', 'Error'], answer: 0 },
	{ q: 'String(5) natijasi?', options: ['"5"', 5, 'NaN', 'null'], answer: 0 },
	{ q: 'Boolean(1) natijasi?', options: ['true', 'false', 'null', 'undefined'], answer: 0 },
	{ q: 'Boolean(0) natijasi?', options: ['false', 'true', 'NaN', 'error'], answer: 0 },
	{ q: 'isFinite(10/0) natijasi?', options: ['false', 'true', 'NaN', '0'], answer: 0 },
	{ q: 'isNaN("abc") natijasi?', options: ['true', 'false', 'NaN', '0'], answer: 0 },
	{ q: 'Array.isArray([]) natijasi?', options: ['true', 'false', 'null', 'NaN'], answer: 0 },
	{ q: 'Array.isArray({}) natijasi?', options: ['false', 'true', 'NaN', 'Error'], answer: 0 },
	{
		q: 'Promise.resolve(5) nima qaytaradi?',
		options: ['Bajarilgan promise', 'Kutayotgan promise', 'Error', 'Null'],
		answer: 0,
	},
	{
		q: 'Promise.reject("xato") nima qiladi?',
		options: ['Rad etilgan promise yaratadi', 'To‘xtaydi', 'Error beradi', 'Null'],
		answer: 0,
	},
	{
		q: 'then() metodi nima uchun?',
		options: ['Promise natijasini olish', 'DOM yaratish', 'Xato chiqarish', 'JSON qilish'],
		answer: 0,
	},
	{
		q: 'catch() metodi nima qiladi?',
		options: ['Xatoni ushlaydi', 'Promise yaratadi', 'DOMni o‘chiradi', 'Massivni tozalaydi'],
		answer: 0,
	},
	{
		q: 'finally() metodi nima qiladi?',
		options: ['Har doim ishlaydi', 'Faqat error bo‘lsa', 'Hech narsa', 'DOM qo‘shadi'],
		answer: 0,
	},
	{ q: 'async function test(){return 5} nima qaytaradi?', options: ['Promise', '5', 'Error', 'Null'], answer: 0 },
	{
		q: 'await qayerda ishlatiladi?',
		options: ['Faqat async funksiya ichida', 'Har joyda', 'DOMda', 'For siklda'],
		answer: 0,
	},
	{
		q: 'fetch() funksiyasi nima qiladi?',
		options: ['Serverdan ma’lumot oladi', 'JSON yaratadi', 'DOM o‘zgartiradi', 'Timer qo‘shadi'],
		answer: 0,
	},
	{
		q: 'fetch(url).then(r=>r.json()) nima qaytaradi?',
		options: ['JSON ma’lumot', 'String', 'Error', 'HTML'],
		answer: 0,
	},
	{
		q: 'try...catch nimaga xizmat qiladi?',
		options: ['Xatolarni ushlash', 'Shart yozish', 'DOM o‘chirish', 'Funksiya yaratish'],
		answer: 0,
	},
	{
		q: 'throw "error" nima qiladi?',
		options: ['Xatolik tashlaydi', 'Xatoni tuzatadi', 'DOMni o‘chiradi', 'Return qiladi'],
		answer: 0,
	},
	{ q: 'typeof [] natijasi?', options: ['"object"', '"array"', '"list"', '"undefined"'], answer: 0 },
	{ q: 'typeof {} natijasi?', options: ['"object"', '"array"', '"string"', '"null"'], answer: 0 },
	{
		q: 'typeof function(){} natijasi?',
		options: ['"function"', '"object"', '"method"', '"undefined"'],
		answer: 0,
	},
	{ q: 'let a; console.log(a) natijasi?', options: ['undefined', 'null', '0', '""'], answer: 0 },
	{
		q: 'const x = null; typeof x natijasi?',
		options: ['"object"', '"null"', '"undefined"', '"string"'],
		answer: 0,
	},
	{ q: 'isNaN("10") natijasi?', options: ['false', 'true', 'NaN', 10], answer: 0 },
	{ q: 'Infinity > 1000000 natijasi?', options: ['true', 'false', 'NaN', 'Error'], answer: 0 },
	{ q: '0 == false natijasi?', options: ['true', 'false', 'NaN', 'null'], answer: 0 },
	{ q: '[] == false natijasi?', options: ['true', 'false', 'null', 'undefined'], answer: 0 },
	{ q: '{} == false natijasi?', options: ['false', 'true', 'null', 'NaN'], answer: 0 },
	{ q: '"" == 0 natijasi?', options: ['true', 'false', 'NaN', 'undefined'], answer: 0 },
	{ q: 'localStorage qayerda saqlanadi?', options: ['Brauzerda', 'Serverda', 'RAMda', 'Cloudda'], answer: 0 },
	{
		q: 'sessionStorage farqi nimada?',
		options: ['Faqat sessiya davomida saqlaydi', 'Hech qachon o‘chmaydi', 'Doimiy saqlaydi', 'JSONda saqlaydi'],
		answer: 0,
	},
	{ q: 'JSON.stringify([1,2]) natijasi?', options: ['"[1,2]"', '[1,2]', '"1,2"', 'undefined'], answer: 0 },
	{ q: "JSON.parse('[1,2]') natijasi?", options: ['[1,2]', '"[1,2]"', '1,2', 'NaN'], answer: 0 },
	{ q: 'JSON.parse(\'{"a":1}\') natijasi?', options: ['{a:1}', '["a",1]', '"{a:1}"', 'error'], answer: 0 },
	{
		q: 'console.log() nima qiladi?',
		options: ['Konsolga chiqaradi', 'DOMni o‘zgartiradi', 'JSON yaratadi', 'None'],
		answer: 0,
	},
	{ q: 'typeof NaN natijasi?', options: ['"number"', '"NaN"', '"undefined"', '"object"'], answer: 0 },
	{ q: 'Number("abc") natijasi?', options: ['NaN', '0', '"abc"', 'undefined'], answer: 0 },
	{ q: '"5" + 1 natijasi?', options: ['"51"', 6, 'Error', 'NaN'], answer: 0 },
	{ q: '"5" - 1 natijasi?', options: [4, '"51"', 'NaN', 'undefined'], answer: 0 },
	{ q: '"5" * 2 natijasi?', options: [10, '"52"', 'NaN', 'Error'], answer: 0 },
	{ q: '"5" / "2" natijasi?', options: [2.5, '"2.5"', 'NaN', 'Error'], answer: 0 },
	{
		q: 'const a=[1,2]; const b=a; b.push(3); da a nima bo‘ladi?',
		options: ['[1,2,3]', '[1,2]', '[3]', 'undefined'],
		answer: 0,
	},
	{
		q: 'const a=[1,2,3]; const b=[...a]; b.push(4); da a nima?',
		options: ['[1,2,3]', '[1,2,3,4]', '[]', 'Error'],
		answer: 0,
	},
	{
		q: 'Object.assign({}, {x:1,y:2}) nima beradi?',
		options: ['Nusxa obyekt', 'Asl obyekt', 'Array', 'Null'],
		answer: 0,
	},
	{
		q: 'delete obj.key nima qiladi?',
		options: ['Propertyni o‘chiradi', 'Hammasini o‘chiradi', 'Qo‘shadi', 'Null qiladi'],
		answer: 0,
	},
	{
		q: 'Object.freeze(obj) nima qiladi?',
		options: ['Obyektni o‘zgarmas qiladi', 'Muzlatadi', 'JSON qiladi', 'Error beradi'],
		answer: 0,
	},
	{
		q: 'Object.seal(obj) farqi nimada?',
		options: ['Yangi property qo‘sha olmaydi', 'Hammasini o‘chiradi', 'Freeze bilan bir xil', 'DOMni muzlatadi'],
		answer: 0,
	},
	{
		q: 'Object.hasOwn(obj,"key") nima qiladi?',
		options: ['Kalit mavjudligini tekshiradi', 'Qo‘shadi', 'O‘chiradi', 'Null qiladi'],
		answer: 0,
	},
	{
		q: 'JavaScriptda this nimani bildiradi?',
		options: ['Joriy kontekst', 'Global obyekt', 'Window', 'Hech narsa'],
		answer: 0,
	},
];
/* ================ App state ================= */
let usedQuestions = JSON.parse(localStorage.getItem(POOL_KEY) || '[]'); // array of question q-text used in previous finished tests
let currentSet = []; // selected 30 questions for the current test (objects from questionPool)
let prepared = []; // each = { q, shuffledOptions:[{text,isCorrect}], userAnswerIndex: number|null, timedOut: bool }
let currentIndex = 0;
let timerId = null;
let timeLeft = TIME_PER_QUESTION;

/* ====== UI refs ====== */
const questionText = document.getElementById('questionText');
const qSub = document.getElementById('qSub');
const optionsEl = document.getElementById('options');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const restartBtn = document.getElementById('restartBtn');
const progressBar = document.getElementById('progressBar');
const timerEl = document.getElementById('timer');
const progressText = document.getElementById('progressText');
const meta = document.getElementById('meta');
const availableCountEl = document.getElementById('availableCount');
const resultArea = document.getElementById('resultArea');
const resultsBox = document.getElementById('resultsBox');
const soundCorrect = document.getElementById('soundCorrect');
const soundWrong = document.getElementById('soundWrong');

/* ===== Helpers ===== */
function shuffleInPlace(arr) {
	for (let i = arr.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1));
		[arr[i], arr[j]] = [arr[j], arr[i]];
	}
	return arr;
}
function pickNewSet() {
	// build available pool (exclude usedQuestions)
	let available = questionPool.filter(q => !usedQuestions.includes(q.q));
	// update available count
	availableCountEl.textContent = available.length;
	// if available less than PICK_COUNT, reset usedQuestions (start new cycle)
	if (available.length < PICK_COUNT) {
		// if none available, clear and refill
		if (available.length === 0) {
			usedQuestions = [];
			localStorage.removeItem(POOL_KEY);
			available = questionPool.slice();
		} else {
			// If some left but < PICK_COUNT, we can reset usedQuestions to allow fresh pick
			// (choice: either take remaining + previously used to fill, or reset - we'll reset to ensure full randomness)
			usedQuestions = [];
			localStorage.removeItem(POOL_KEY);
			available = questionPool.slice();
		}
		availableCountEl.textContent = available.length;
	}
	// shuffle and pick first PICK_COUNT
	const pick = shuffleInPlace(available.slice()).slice(0, Math.min(PICK_COUNT, available.length));
	return pick;
}
function prepareQuestions(set) {
	prepared = set.map(q => {
		const opts = q.options.map((t, i) => ({ text: String(t), isCorrect: i === q.answer }));
		shuffleInPlace(opts);
		return { q: q.q, shuffledOptions: opts, userAnswerIndex: undefined, timedOut: false, original: q };
	});
}

/* ====== Lifecycle: start a fresh test set ====== */
function startNewTest() {
	// pick 30 new questions not in usedQuestions
	currentSet = pickNewSet();
	prepareQuestions(currentSet);
	currentIndex = 0;
	resultArea.style.display = 'none';
	// UI meta
	meta.textContent = `Yangi test — ${prepared.length} ta savol. (Har bir savol ${TIME_PER_QUESTION}s)`;
	updateProgressUI();
	renderCurrent();
}

/* ====== Rendering ====== */
function renderCurrent() {
	stopTimer();
	if (!prepared || prepared.length === 0) return;
	const item = prepared[currentIndex];
	questionText.textContent = `${currentIndex + 1}. ${item.q}`;
	qSub.textContent = '';
	optionsEl.innerHTML = '';
	item.shuffledOptions.forEach((opt, idx) => {
		const btn = document.createElement('button');
		btn.className = 'option';
		btn.dataset.idx = idx;
		btn.innerHTML = `<strong style="margin-right:8px">${String.fromCharCode(65 + idx)}.</strong> ${opt.text}`;
		// if already answered or timed out, show correct/wrong
		if (typeof item.userAnswerIndex !== 'undefined') {
			btn.disabled = true;
			if (opt.isCorrect) btn.classList.add('correct');
			if (item.userAnswerIndex === idx && !opt.isCorrect) btn.classList.add('wrong');
		} else {
			btn.addEventListener('click', () => selectAnswer(idx, btn));
		}
		optionsEl.appendChild(btn);
	});
	prevBtn.disabled = currentIndex === 0;
	nextBtn.disabled = !(typeof item.userAnswerIndex !== 'undefined' || item.timedOut);
	updateProgressUI();
	// start timer if not answered yet
	if (typeof item.userAnswerIndex === 'undefined' && !item.timedOut) {
		startTimer();
	} else {
		timerEl.textContent = item.timedOut ? `--` : `--`;
	}
	// focus first active button
	const first = optionsEl.querySelector('.option:not([disabled])');
	if (first) first.focus();
}

/* ====== Answer handling ====== */
function selectAnswer(idx, btn) {
	stopTimer();
	const item = prepared[currentIndex];
	if (typeof item.userAnswerIndex !== 'undefined') return;
	item.userAnswerIndex = idx;
	// disable all and reveal
	const allBtns = optionsEl.querySelectorAll('.option');
	allBtns.forEach(b => {
		b.disabled = true;
		const i = Number(b.dataset.idx);
		if (item.shuffledOptions[i].isCorrect) b.classList.add('correct');
		if (i === idx && !item.shuffledOptions[i].isCorrect) b.classList.add('wrong');
	});
	// sound
	if (item.shuffledOptions[idx].isCorrect) {
		soundCorrect.currentTime = 0;
		soundCorrect.play().catch(() => {});
	} else {
		soundWrong.currentTime = 0;
		soundWrong.play().catch(() => {});
	}
	nextBtn.disabled = false;
	updateProgressUI();
}

/* ====== Timer ====== */
function startTimer() {
	stopTimer();
	timeLeft = TIME_PER_QUESTION;
	timerEl.textContent = `${timeLeft}s`;
	timerId = setInterval(() => {
		timeLeft--;
		timerEl.textContent = `${timeLeft}s`;
		if (timeLeft <= 0) {
			clearInterval(timerId);
			timerId = null;
			handleTimeout();
		}
	}, 1000);
}
function stopTimer() {
	if (timerId) {
		clearInterval(timerId);
		timerId = null;
	}
}

function handleTimeout() {
	const item = prepared[currentIndex];
	item.timedOut = true;
	// mark as answered with undefined selection but reveal correct
	const allBtns = optionsEl.querySelectorAll('.option');
	allBtns.forEach(b => {
		b.disabled = true;
		const i = Number(b.dataset.idx);
		if (item.shuffledOptions[i].isCorrect) b.classList.add('correct');
	});
	// play wrong sound
	soundWrong.currentTime = 0;
	soundWrong.play().catch(() => {});
	nextBtn.disabled = false;
	updateProgressUI();
}

/* ====== Navigation ====== */
prevBtn.addEventListener('click', () => {
	stopTimer();
	if (currentIndex > 0) {
		currentIndex--;
		renderCurrent();
	}
});
nextBtn.addEventListener('click', () => {
	stopTimer();
	if (currentIndex < prepared.length - 1) {
		currentIndex++;
		renderCurrent();
	} else {
		// finish test
		finishTest();
	}
});
restartBtn.addEventListener('click', () => {
	// When user clicks restart, we will mark current 30 as used only when finishTest() is called.
	// But restart here is "start new selection immediately" — we'll treat it as abandoning current attempt
	// and start a fresh set that excludes already finished sets (usedQuestions).
	if (confirm('Testni qayta boshlash — yangi 30 ta savol tanlanadi (hozirgi savollar saqlanmaydi). Davom etilsinmi?')) {
		startNewTest();
	}
});

/* ====== Finish logic: mark currentSet as used so they won't repeat ====== */
function finishTest() {
	stopTimer();
	// compute score
	const total = prepared.length;
	const correct = prepared.reduce((acc, p) => {
		if (typeof p.userAnswerIndex === 'number' && p.shuffledOptions[p.userAnswerIndex].isCorrect) return acc + 1;
		return acc;
	}, 0);
	const percent = Math.round((correct / total) * 100);
	let grade = '';
	if (percent >= 80) grade = 'A’lo 🎉';
	else if (percent >= 60) grade = 'Yaxshi 👍';
	else if (percent >= 40) grade = 'Qoniqarli 🙂';
	else grade = 'Yomon 😞';

	// mark currentSet questions as used (by question text)
	const newlyUsed = prepared.map(p => p.q);
	usedQuestions = Array.from(new Set([...usedQuestions, ...newlyUsed]));
	localStorage.setItem(POOL_KEY, JSON.stringify(usedQuestions));
	availableCountEl.textContent = Math.max(0, questionPool.length - usedQuestions.length);

	// build review HTML
	let reviewHtml = '<div class="review">';
	prepared.forEach((p, i) => {
		const ua = p.userAnswerIndex;
		const ci = p.shuffledOptions.findIndex(o => o.isCorrect);
		const ok = typeof ua === 'number' && p.shuffledOptions[ua].isCorrect;
		reviewHtml += `<div style="padding:10px 0;border-bottom:1px solid rgba(255,255,255,0.03)">
      <div style="font-weight:600">${i + 1}. ${escapeHtml(p.q)}</div>
      <div style="margin-top:6px;font-size:14px;color:var(--muted)">
        Javob: ${
					typeof ua === 'number'
						? `<strong>${String.fromCharCode(65 + ua)}. ${escapeHtml(p.shuffledOptions[ua].text)}</strong>`
						: '<em>Belgilanmadi</em>'
				}
        &nbsp; — To‘g‘ri: <strong>${String.fromCharCode(65 + ci)}. ${escapeHtml(p.shuffledOptions[ci].text)}</strong>
        <span style="margin-left:10px">${
					ok ? '<span style="color:var(--good)">✔ To‘g‘ri</span>' : '<span style="color:var(--bad)">✖ Noto‘g‘ri</span>'
				}</span>
      </div>
    </div>`;
	});
	reviewHtml += '</div>';

	// show results
	resultsBox.innerHTML = `
    <div class="big">${correct} / ${total}</div>
    <div class="small">Foiz: <strong>${percent}%</strong></div>
    <div class="small">Baholash: <strong>${grade}</strong></div>
    <div style="margin-top:10px"><button class="btn-primary" id="btnNew">Yangi 30 ta savol (davom etish)</button>
      <button class="btn-ghost" id="btnReview" style="margin-left:8px">Testni ko‘rib chiqish</button>
    </div>
    ${reviewHtml}
  `;
	resultArea.style.display = 'block';
	// attach handlers
	document.getElementById('btnNew').addEventListener('click', () => {
		startNewTest();
		window.scrollTo({ top: 0, behavior: 'smooth' });
	});
	document.getElementById('btnReview').addEventListener('click', () => {
		// scroll to review (already visible)
		resultsBox.scrollIntoView({ behavior: 'smooth' });
	});
	// hide quiz area (we keep it visible; but user sees resultArea)
}

/* ====== Utilities ====== */
function updateProgressUI() {
	const pct = (currentIndex / Math.max(1, prepared.length)) * 100;
	progressBar.style.width = pct + '%';
	progressText.textContent = `${
		prepared.filter(p => typeof p.userAnswerIndex !== 'undefined' || p.timedOut).length
	} / ${prepared.length} javob`;
	// meta and available
	meta.textContent = `Savol ${currentIndex + 1} / ${prepared.length} • Belgilangan: ${
		prepared.filter(p => typeof p.userAnswerIndex !== 'undefined').length
	}`;
	availableCountEl.textContent = Math.max(0, questionPool.length - usedQuestions.length);
}
function escapeHtml(s) {
	if (!s) return '';
	return String(s).replaceAll('&', '&amp;').replaceAll('<', '&lt;').replaceAll('>', '&gt;');
}

/* ===== Keyboard support ===== */
document.addEventListener('keydown', e => {
	if (resultArea.style.display !== 'none') return; // ignore during review
	if (e.key >= '1' && e.key <= '9') {
		const idx = Number(e.key) - 1;
		const btn = optionsEl.querySelector(`.option[data-idx="${idx}"]`);
		if (btn && !btn.disabled) btn.click();
	} else if (e.key === 'ArrowRight' || e.key === 'Enter') {
		if (!nextBtn.disabled) nextBtn.click();
	} else if (e.key === 'ArrowLeft') {
		if (!prevBtn.disabled) prevBtn.click();
	}
});

/* ====== Init ====== */
startNewTest();
