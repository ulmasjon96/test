/*************************************************************************
 * Quiz app
 * - Pool embedded below (from your uploaded docx / sample)
 * - Each question: options array + 'answer' index (which option is correct in original options)
 * - When starting a quiz we:
 *    * choose 20 random questions from pool
 *    * for each chosen question create shuffledOptions (each option carries isCorrect flag)
 *    * userAnswers store selected option index in shuffledOptions
 *************************************************************************/

// ---------- QUESTION POOL (taken from your document).
// Note: 'answer' field = index (0-based) of the correct option in the original options array.
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

// ----- App state -----
let pool = []; // current question pool (can be imported)
let quiz = []; // selected 20 questions (with shuffled options)
let currentIndex = 0;
let userAnswers = {}; // index -> chosen option index (refers to shuffledOptions index)
let showKey = false;

// UI elements
const startBtn = document.getElementById('startBtn');
const startFromImported = document.getElementById('startFromImported');
const qCounter = document.getElementById('qCounter');
const qText = document.getElementById('qText');
const optionsList = document.getElementById('optionsList');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const finishBtn = document.getElementById('finishBtn');
const quizArea = document.getElementById('quizArea');
const progressText = document.getElementById('progressText');
const status = document.getElementById('status');
const importBox = document.getElementById('importBox');
const importBtn = document.getElementById('importBtn');
const importStatus = document.getElementById('importStatus');
const clearImport = document.getElementById('clearImport');
const showKeyToggle = document.getElementById('showKeyToggle');

const resultPanel = document.getElementById('resultPanel');
const correctCountEl = document.getElementById('correctCount');
const wrongCountEl = document.getElementById('wrongCount');
const percentEl = document.getElementById('percent');
const gradeEl = document.getElementById('grade');
const reviewBtn = document.getElementById('reviewBtn');
const answersList = document.getElementById('answersList');
const restartBtn = document.getElementById('restartBtn');

// shuffle utility
function shuffle(arr) {
	for (let i = arr.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1));
		[arr[i], arr[j]] = [arr[j], arr[i]];
	}
	return arr;
}

// prepare quiz: pick up to 20 questions, and for each question shuffle options and mark correct index
function prepareQuizFromPool(srcPool) {
	const copy = srcPool.slice();
	shuffle(copy);
	const chosen = copy.slice(0, Math.min(20, copy.length));
	// For each chosen question create shuffledOptions: [{text, isCorrect}]
	const prepared = chosen.map(item => {
		const opts = item.options.map((text, idx) => ({ text: String(text), isCorrect: idx === item.answer }));
		shuffle(opts);
		const correctIndex = opts.findIndex(o => o.isCorrect);
		return {
			q: item.q,
			shuffledOptions: opts, // array of {text,isCorrect}
			correctIndex: correctIndex,
		};
	});
	return prepared;
}

// render question at index
function renderQuestion(idx) {
	const item = quiz[idx];
	qCounter.textContent = idx + 1 + ' / ' + quiz.length;
	qText.textContent = item.q;
	optionsList.innerHTML = '';
	item.shuffledOptions.forEach((opt, i) => {
		const div = document.createElement('div');
		div.className = 'option';
		div.tabIndex = 0;
		div.dataset.idx = i;
		div.innerHTML = `<span>${String.fromCharCode(65 + i)}. </span><span>${opt.text}</span>`;
		// selected styling
		if (userAnswers[idx] === i) div.classList.add('selected');
		// if results shown & showKey true, mark correct/wrong
		if (resultPanel.classList.contains('hidden') === false) {
			if (opt.isCorrect) {
				div.style.borderColor = 'rgba(30,154,74,0.2)';
			}
			if (userAnswers[idx] === i && !opt.isCorrect) {
				div.style.background = '#fff0f0';
			}
		}
		div.addEventListener('click', () => {
			userAnswers[idx] = i;
			[...optionsList.children].forEach(ch => ch.classList.remove('selected'));
			div.classList.add('selected');
			updateProgressText();
		});
		optionsList.appendChild(div);
	});
	// focus first option
	const first = optionsList.querySelector('.option');
	if (first) first.focus();
	updateProgressText();
	status.textContent = `Pool: ${pool.length || questionPool.length} — Active quiz: ${quiz.length}`;
}

function updateProgressText() {
	const answered = Object.keys(userAnswers).length;
	progressText.textContent = `${answered} javob / ${quiz.length}`;
}

function startWithPool(customPool) {
	pool = customPool.slice();
	if (pool.length < 1) {
		alert('Savollar mavjud emas. Iltimos import qiling yoki sample dan boshlang.');
		return;
	}
	quiz = prepareQuizFromPool(pool);
	currentIndex = 0;
	userAnswers = {};
	quizArea.classList.remove('hidden');
	resultPanel.classList.add('hidden');
	renderQuestion(currentIndex);
}

startBtn.addEventListener('click', () => {
	// use embedded questionPool by default
	startWithPool(questionPool);
});

prevBtn.addEventListener('click', () => {
	if (currentIndex > 0) {
		currentIndex--;
		renderQuestion(currentIndex);
	}
});
nextBtn.addEventListener('click', () => {
	if (currentIndex < quiz.length - 1) {
		currentIndex++;
		renderQuestion(currentIndex);
	}
});

finishBtn.addEventListener('click', () => {
	// compute score by checking userAnswers against shuffledOptions isCorrect
	let correct = 0;
	for (let i = 0; i < quiz.length; i++) {
		const ans = userAnswers[i];
		if (typeof ans === 'number' && quiz[i].shuffledOptions[ans] && quiz[i].shuffledOptions[ans].isCorrect) correct++;
	}
	const wrong = quiz.length - correct;
	const perc = Math.round((correct / quiz.length) * 100);
	const grade = Math.round((correct / quiz.length) * 10 * 10) / 10;
	correctCountEl.textContent = correct;
	wrongCountEl.textContent = wrong;
	percentEl.textContent = perc + '%';
	gradeEl.textContent = grade + ' / 10';
	// show result panel
	resultPanel.classList.remove('hidden');
	answersList.classList.add('hidden');
	showKey = showKeyToggle.dataset.on === 'true';
	quizArea.classList.add('hidden');
});

reviewBtn.addEventListener('click', () => {
	answersList.innerHTML = '';
	answersList.classList.remove('hidden');
	answersList.style.display = 'block';
	quiz.forEach((item, idx) => {
		const div = document.createElement('div');
		div.style.padding = '8px';
		div.style.borderBottom = '1px solid #eef2ff';
		const userAns = userAnswers[idx];
		const correctObj = item.shuffledOptions.find(o => o.isCorrect);
		const correctIndex = item.shuffledOptions.findIndex(o => o.isCorrect);
		const ok = typeof userAns === 'number' && userAns === correctIndex;
		div.innerHTML = `
          <div style="font-weight:600">${idx + 1}. ${item.q}</div>
          <div class="small" style="margin-top:6px">
            Your answer: ${
							typeof userAns === 'number'
								? String.fromCharCode(65 + userAns) + '. ' + item.shuffledOptions[userAns].text
								: '<em>Belgilanmadi</em>'
						}
            <br>
            Correct: <strong>${String.fromCharCode(65 + correctIndex)}. ${correctObj.text}</strong>
            <span style="margin-left:10px" class="${ok ? 'result-correct' : 'result-wrong'}">${
			ok ? '✔ To‘g‘ri' : '✖ Noto‘g‘ri'
		}</span>
          </div>
        `;
		answersList.appendChild(div);
	});
	answersList.scrollIntoView({ behavior: 'smooth' });
});

restartBtn.addEventListener('click', () => {
	resultPanel.classList.add('hidden');
	quizArea.classList.remove('hidden');
	// restart new random selection from pool
	startWithPool(pool.length ? pool : questionPool);
});

// ----------------- Import logic (same naive parser) -----------------
function parseTextToQuestions(text) {
	const lines = text
		.split(/\r?\n/)
		.map(l => l.trim())
		.filter(l => l.length > 0);
	const results = [];
	let i = 0;
	while (i < lines.length) {
		const qline = lines[i];
		const options = [];
		let j = i + 1;
		while (j < lines.length && options.length < 6) {
			// stop if next looks like a question (ends with ? and we already have options)
			if (lines[j].includes('?') && options.length >= 1) break;
			const cleaned = lines[j].replace(/^[A-D]\s*[\)\.\-:\s]*/i, '').trim();
			if (cleaned.length > 0) options.push(cleaned);
			j++;
			if (j < lines.length && lines[j].length > 30 && lines[j].endsWith('?') && options.length >= 2) break;
		}
		if (options.length >= 2) {
			const finalOpts = options.slice(0, 4);
			// default answer = 0 (unknown) — user can import with correct answers if available in specific format
			results.push({ q: qline, options: finalOpts, answer: 0 });
			i = j;
		} else {
			i++;
		}
	}
	return results;
}

importBtn.addEventListener('click', () => {
	const text = importBox.value.trim();
	if (!text) {
		alert('Iltimos savollar matnini paste qiling.');
		return;
	}
	const parsed = parseTextToQuestions(text);
	if (parsed.length === 0) {
		alert('Parser savollarni aniqlay olmadi. Iltimos formatni tekshiring (savol + 2-4 variant).');
		return;
	}
	pool = parsed;
	importStatus.textContent = `Imported: ${parsed.length} savol`;
	alert('Import muvaffaqiyatli. Endi "Start from imported" tugmasini bosing.');
});

clearImport.addEventListener('click', () => {
	importBox.value = '';
	importStatus.textContent = 'Imported: 0';
});

startFromImported.addEventListener('click', () => {
	if (!pool || pool.length === 0) {
		alert('Avval import qiling yoki matnni joylashtiring.');
		return;
	}
	startWithPool(pool);
});

showKeyToggle.addEventListener('click', () => {
	const now = showKeyToggle.dataset.on === 'true';
	showKeyToggle.dataset.on = (!now).toString();
	showKeyToggle.textContent = `Ko'rsatkichlar: ${!now ? 'ON' : 'OFF'}`;
});

document.addEventListener('keydown', e => {
	if (quizArea.classList.contains('hidden')) return;
	if (e.key === 'ArrowRight') nextBtn.click();
	if (e.key === 'ArrowLeft') prevBtn.click();
});

// initial status
status.textContent = `Pool: sample (${questionPool.length}) — Active quiz: —`;
importStatus.textContent = 'Imported: 0';
showKeyToggle.dataset.on = 'false';
