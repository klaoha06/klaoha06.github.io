// This is a solo challenge

// Your mission description:
// You are on trail for terrible crime you didn't do! The townsmen are cursing you for being a King Slayer! Your house was betrayed. Your wife was murdered. Your children are thrown to rot in the dungeon. 
// And just like Game of Thrones, you fate will be decided
// by God's will, or in other words: trail by combat!!! YEAH!! (noooo!) In order to live on and perhaps get your sweet sweet revenge back, you must find a way!! 
// So your mission is simple: choose the right Champion to fight with Sir Gregor Clegane a.k.a the Mountain! Will you survive this horrible fate to redeem what's yours? Or will
// you forever be cursed and shamed under the Seven Gods? You decide!
// 
// 

// Pseudocode

// Click to start
// Fillout information about yourself
// Tell Story
// Picking Champion
// Use the picked champion to fight
// Generate battlelog
// Show result
// Play again

// Initial Code

// var start = '<h4>Welcome!</h4><br><p>Before you enter the Seven Kingdoms, please show some IDs and swear by the Old Gods and New that you will completely and truthfully fill out your fake information below.</p><br>'
// start += '<form name="userInfo"><label>Your name:</label><input type="text" name="uname" value="x"/><br><label>Your House name:</label><input type="text" name="house" value="x" /><br><label>Who do you think is the hottest woman in Westeros?</label><input type="text" name="woman" value="x" /><br><label>The name of your worst nemesis</label><input type="text" name="wn" value="x" /><br><label>One quality of your worst nemesis</label><input type="text" name="wnn" value="x"/><br><input type="button" value="Done! Let\'s Get Started" onClick="initStory()"/></form>'

// document.getElementById("story").innerHTML = start;

// function initStory() {

// var username = document.userInfo.uname.value;
// var house = document.userInfo.house.value;
// var gf = document.userInfo.woman.value;
// var vn = document.userInfo.wn.value;
// var vnn = document.userInfo.wnn.value;

// if (username === "" || house === "" || gf === "" || vn === "" || vnn === "") { window.alert("We can't let you pass south of The Wall into Westeros. So please fill out ALL of the information."); return}

// var user = function(inputusername, inputhouse, inputgf, inputsc, inputonsc) {
// 	this.username = inputusername;
// 	this.house = inputhouse;
// 	this.gf = inputgf;
// 	this.sc = inputsc;
// 	this.onsc = inputonsc;
// }

// user1 = new user(username, house, gf, vn, vnn);

// story = ["So.....You are on trail for terrible crime you didn't do!", "The townsmen are furious and demand your death for being a King Slayer!", "Your house, " + user1.house + ", was betrayed.", "Your wife, " + user1.gf + ", was raped and murdered. Your children are thrown to rot in the dungeon.", "And just like Game of Thrones, your fate will be decided by God's will, or in other words: TRIAL BY COMBAT!!! YEAH!! (noooo!)", "In order to live on and perhaps get your sweet sweet revenge, you must find a way!! So your mission is simple: choose the right Champion to fight with " + user1.sc + ", a.k.a the " + user1.onsc + "! Will you survive this horrible fate to redeem what's yours? Or will you forever be cursed and shamed under the Seven Gods? You decide!"   ];
// imgs = ['img/accused.jpg', 'img/angrymob.jpg', 'img/gotyourback.gif', 'img/dungeon.jpg', 'img/tbc.png', 'img/kc.png']
// imgsource = ['nandabezerra-namibia.blogspot.com', 'http://phandroid.com/', 'thesoulstepford.com'];

// document.getElementById("image").innerHTML = '<img src="' + imgs[0] + '">';
// document.getElementById("imagesource").innerHTML = '<a href="' + imgsource[0] + '">' + imgsource[0] + '';
// document.getElementById("story").innerHTML = story[0] + '<input type="button" value="Next" onClick="nextStory()">';

// }

// var counter = 0;
// var nextStory = function(){ 
// 	counter += 1;
// 		if (counter >= 6) {
// 		cc();
// 		return;
// 	}
// 	else {
// 	document.getElementById("image").innerHTML = '<img src="' + imgs[counter] +'">';
// 	if (typeof imgsource[counter] === 'undefined') {
// 		document.getElementById("imagesource").innerHTML = '';
// 	}
// 	else {
// 				document.getElementById("imagesource").innerHTML = '<a href="' + imgsource[counter] + '">' + imgsource[counter] + '';

// 	}
// 	document.getElementById("story").innerHTML = story[counter] + '<input type="button" value="Next" onClick="nextStory()">';
// 	}



// }

// var champion = function(inputname, inputquote, inputdescription, inputhp, inputattack, inputdodge, inputchampimg) {
// 	this.name = inputname;
// 	this.quote = inputquote;
// 	this.description = inputdescription;
// 	this.hp = inputhp;
// 	this.attack = inputattack;
// 	this.dodge = inputdodge;
// 	this.champimg = inputchampimg;
// }



// var cc = function() {
// document.getElementById("story").innerHTML = '<form name="cp"><input type="radio" name="championpick" value="psy" onClick="c1()">Champion number 1<br><input type="radio" name="championpick" value="chuck" onClick="c2()">Champion number 2<br><input type="radio" name="championpick" value="harry" onClick="c3()">Champion number 3<br><input type="button" value="Ok, I pick this champion." onClick="pickedChamp()"/></form>';
// }
// var psy = new champion('PSY', 'Oppa Gangnam Style!', 'PSY can not cast spell or is very strong. Nevertheless, he can dance. And he can very well dance his way out of the worst battlefields. He moves like no other. And often time, PSY will left his enemy dazzled and distracted by his dance moves to the point that MC Hammer will have to say "Can\'t touch this".', 40, 10, 6, 'img/psy1.jpg');

// var chuck = new champion("Chuck Norris", "When Chuck Norris does a push up, he isn't lifting himself up, he's pushing the Earth down.", "Chuck Norris has count to infinity--twice, and he knows the last digit of pi. For Chuck, he doesn't need magic; because he knows he is THE magic. Chuck personally refuses to dodge his opponent's attack in this duel. For him, to dodge is a disgrace and is against his code of conduct. So even though he is quite tough, he could very well die from his greatness.", 60, 18, 2, "img/cn.jpg" );

// var harry = new champion("Harry Potter", "Expecto Patronum!", "Harry Potter is neither strong or dodgeful. However, he is a very powerful magic user. And with great power comes great unpredictability; he has a chance to cast spells which could kill his enemy (or himself) in one hit.", 40, 80, 2, "img/harry.jpeg" );

// var c1 = function() {
// document.getElementById("image").innerHTML = '<img src="' + psy.champimg +'">';
// document.getElementById("cname").innerHTML = 'Name:' + psy.name +' ';
// document.getElementById("cquote").innerHTML = 'Quote:' + psy.quote;
// document.getElementById("cdes").innerHTML = psy.description;
// }
// var c2 = function() {
// document.getElementById("image").innerHTML = '<img src="' + chuck.champimg +'">';
// document.getElementById("cname").innerHTML = 'Name:' + chuck.name +' ';
// document.getElementById("cquote").innerHTML = 'Quote:' + chuck.quote;
// document.getElementById("cdes").innerHTML = chuck.description;
// }
// var c3 = function() {
// document.getElementById("image").innerHTML = '<img src="' + harry.champimg +'">';
// document.getElementById("cname").innerHTML = 'Name:' + harry.name +' ';
// document.getElementById("cquote").innerHTML = 'Quote:' + harry.quote;
// document.getElementById("cdes").innerHTML = harry.description;
// }


// var pickedChamp = function() {
// pickedC = document.cp.championpick.value;
// if (pickedC === "") {
// 	window.alert("We have meticulously hand picked these champions from across all of Westeros and beyond; so look no further and choose one champion from this list.")
// }
// else {
// 	if (confirm('Are you sure you want to risk your life with ' + pickedC + '?')) {
// 		document.getElementById("story").innerHTML = '';
// 		initFight(pickedC);
// 	} else {
//     return;
// }
// }
// }

// var initFight = function(pickedC) {
// 	fighterName = eval(pickedC + '.name');
// 	fighterHp = eval(pickedC + '.hp');
// 	fighterAtk = eval(pickedC + '.attack');
// 	fighterD = eval(pickedC + '.dodge')

// var enemyH = 80;
// var youD = Math.floor(Math.random() * fighterD);
// var damageC = Math.floor(Math.random() * fighterAtk + 4);
// var damageE = Math.floor(Math.random() * 10 + 4);
// var totalDamageC = 0;
// var totalDamageE = 0;

// while (enemyH > 0 && fighterHp > 0) {
//     document.getElementById("battlelog").innerHTML += "<ul>" + user1.sc + " attacks your champion!</ul>";
//     if (youD) {
//     	document.getElementById("battlelog").innerHTML += "<ul>Your champion dodged " + user1.sc + "'s attack!</ul>";
//         document.getElementById("battlelog").innerHTML += "<ul>Now, your champion attacks " + user1.sc + "!</ul>";
//         totalDamageE += damageC
//         document.getElementById("battlelog").innerHTML += "<ul>Your champion dealt: " + damageC + " damage.</ul>";
//         enemyH -= totalDamageE;
//         var damageC = Math.floor(Math.random() * fighterAtk + 4);
//         if (enemyH <= 0) {
//             document.getElementById("battlelog").innerHTML += "<ul>and your champion killed " + user1.sc + "!</ul>";
//             document.getElementById("result").innerHTML += "<h4>Congratulation on living! The Gods want you to live! YEAH!!</h4>";
//             enemyH = false;
//         }
//         else {
//         	document.getElementById("battlelog").innerHTML += "<ul>" + user1.sc + " has " + enemyH + " health left.</ul>";
//             youD = Math.floor(Math.random() * fighterD);
//         }
//     }
//     else {
//         totalDamageC += damageE;
//         document.getElementById("battlelog").innerHTML += "<ul>Your champion took " + damageE + " damage.</ul>";
//         fighterHp -= totalDamageC;
//         var damageE = Math.floor(Math.random() * 10 + 4);
//         if (fighterHp <= 0) {
//         document.getElementById("battlelog").innerHTML += "<ul>" + user1.sc + " killed your champion!</ul>";
//         document.getElementById("result").innerHTML += "<h4>Congratulation! The Gods have decided that you shall.. die! Your head will be chopped off and feed to the pigs tomorrow morning!</h4>";
//         fighterHp = false;
//         } 
//         else {
//         	document.getElementById("battlelog").innerHTML += "<ul>" + fighterName + " has " + fighterHp + " health left.</ul>";
//             youD = Math.floor(Math.random() * fighterD);
//         }
//     }
// }
// }

// Refactored Code

var start = '<h4>Welcome</h4><br><p>Before you enter the Seven Kingdoms, please show some IDs and swear by the Old Gods and New that you will completely and truthfully fill out your fake information below.</p><br>'
start += '<form name="userInfo"><label>Your name:</label><input type="text" name="uname" value=""/><br><label>Your House name:</label><input type="text" name="house" value="" /><br><label>Who do you think is the hottest woman in Westeros?</label><input type="text" name="woman" value="" /><br><label>The name of your worst nemesis</label><input type="text" name="wn" value="" /><br><label>One quality of your worst nemesis</label><input type="text" name="wnn" value=""/><br><input type="button" value="Done! Let\'s Get Started" onClick="initStory()"/></form>'
document.getElementById("story").innerHTML = start;
function initStory() {
	var username = document.userInfo.uname.value;
	var house = document.userInfo.house.value;
	var gf = document.userInfo.woman.value;
	var vn = document.userInfo.wn.value;
	var vnn = document.userInfo.wnn.value;
	if (username === "" || house === "" || gf === "" || vn === "" || vnn === "") { window.alert("We can't let you pass south of The Wall into Westeros. So please fill out ALL of the information."); return}
	var user = function(inputusername, inputhouse, inputgf, inputsc, inputonsc) {
		this.username = inputusername;
		this.house = inputhouse;
		this.gf = inputgf;
		this.sc = inputsc;
		this.onsc = inputonsc;
	}
	user1 = new user(username, house, gf, vn, vnn);
	story = ["So.....You are on trail for terrible crime you didn't do!", "The townsmen are furious and demand your death for being a King Slayer!", "Your house, " + user1.house + ", was betrayed.", "Your wife, " + user1.gf + ", was raped and murdered. Your children are thrown to rot in the dungeon.", "And just like Game of Thrones, your fate will be decided by God's will, or in other words: TRIAL BY COMBAT!!! YEAH!! (noooo!)", "In order to live on and perhaps get your sweet sweet revenge, you must find a way!! So your mission is simple: choose the right Champion to fight with " + user1.sc + ", a.k.a the " + user1.onsc + "! Will you survive this horrible fate to redeem what's yours? Or will you forever be cursed and shamed under the Seven Gods? You decide!"   ];
	imgs = ['img/accused.jpg', 'img/angrymob.jpg', 'img/gotyourback.gif', 'img/dungeon.jpg', 'img/tb.jpg', 'img/kc1.png']
	imgsource = ['nandabezerra-namibia.blogspot.com', 'http://phandroid.com/', 'thesoulstepford.com'];
	document.getElementById("image").innerHTML = '<img src="' + imgs[0] + '">';
	document.getElementById("imagesource").innerHTML = '<a href="' + imgsource[0] + '">' + imgsource[0] + '';
	document.getElementById("story").innerHTML = story[0] + '</br><input type="button" value="Next" onClick="nextStory()">';
}

var counter = 0;
var nextStory = function(){ 
	counter += 1;
	if (counter >= 6) {
		cc();
		return;
	}
	else {
		document.getElementById("image").innerHTML = '<img src="' + imgs[counter] +'">';
		if (typeof imgsource[counter] === 'undefined') {
			document.getElementById("imagesource").innerHTML = '';
		}
		else {
			document.getElementById("imagesource").innerHTML = '<a href="' + imgsource[counter] + '">' + imgsource[counter] + '';

		}
		document.getElementById("story").innerHTML = story[counter] + '</br><input type="button" value="Next" onClick="nextStory()">';
	}
}
var champion = function(inputname, inputquote, inputdescription, inputhp, inputattack, inputdodge, inputchampimg) {
	this.name = inputname;
	this.quote = inputquote;
	this.description = inputdescription;
	this.hp = inputhp;
	this.attack = inputattack;
	this.dodge = inputdodge;
	this.champimg = inputchampimg;
}

var cc = function() {
	document.getElementById("story").innerHTML = '<form name="cp"><input type="radio" name="championpick" value="psy" onClick="c1()">Champion number 1<br><input type="radio" name="championpick" value="chuck" onClick="c1()">Champion number 2<br><input type="radio" name="championpick" value="harry" onClick="c1()">Champion number 3<br><input type="button" value="Ok, I pick this champion." onClick="pickedChamp()"/></form>';
}
var psy = new champion('PSY', 'Oppa Gangnam Style!', 'PSY can not cast spell or is very strong. Nevertheless, he can dance. And he can very well dance his way out of the worst battlefields. He moves like no other. And often time, PSY will left his enemy dazzled and distracted by his dance moves to the point that MC Hammer will have to say "Can\'t touch this".', 40, 8, 5, 'img/psy1.jpg');
var chuck = new champion("Chuck Norris", "When Chuck Norris does a push up, he isn't lifting himself up, he's pushing the Earth down.", "Chuck Norris has count to infinity--twice, and he knows the last digit of pi. For Chuck, he doesn't need magic; because he knows he is THE magic. But for some reasons, Chuck doesn't like to dodge incoming attacks. For him, dodging his opponent's attack is a disgrace and is against his code of conduct. He likes to take them like a man. So even though he is quite tough, he could very well die from his greatness.", 60, 22, 2, "img/cn.jpg" );
var harry = new champion("Harry Potter", "Expecto Patronum!", "Harry Potter is neither strong or dodgeful. However, he is a very powerful magic user. And with great power comes great unpredictability; he has a chance to cast spells which could kill his enemy (or himself) in one hit.", 40, 80, 3, "img/harry.jpg" );

var c1 = function() {
	pickedC = document.cp.championpick.value;

	document.getElementById("image").innerHTML = '<img src="' + eval(pickedC + '.champimg') + '">';
	document.getElementById("cdes").innerHTML = '<h3>Champion: ' + eval(pickedC + '.name') + '</h3><br>';
	document.getElementById("cdes").innerHTML += "Quote: " + eval(pickedC + '.quote') +"";
	document.getElementById("cdes").innerHTML += '<ul>Description: ' + eval(pickedC + ".description") + '</ul>';
	document.getElementById("cdes").innerHTML += '<h4>Battle Ability<h4>'
	document.getElementById("cdes").innerHTML += "<ul>Health points " + eval(pickedC + ".hp") + "</ul>";
	document.getElementById("cdes").innerHTML += "<ul>Attack points per round from 4 to  " + eval(pickedC + ".attack") + " damage.";
	document.getElementById("cdes").innerHTML += "<ul>The enemy has a 1 out of " + eval(pickedC + '.dodge') + " chance to attack.";
	document.getElementById("cdes").innerHTML += '<input type="button" value="Ok I picked this champion. Let\'s go." onClick="initFight()"/';
	if (pickedC === 'harry') { document.getElementById("cdes").innerHTML += "<ul>*Harry has a 1 out of 4 chance to attack himself."; };
}

var pickedChamp = function() {
	pickedC = document.cp.championpick.value;
	if (pickedC === "") {
		window.alert("We have meticulously hand picked these champions from across all of Westeros and beyond; so look no further and choose one champion from this list.")
	}
	else {
		if (confirm('Are you sure you want to risk your life with ' + pickedC + '?')) {
			document.getElementById("story").innerHTML = '';
			initFight(pickedC);
		} else {
			return;
		}
	}
}

var initFight = function(pickedC) {
	fighterName = eval(pickedC + '.name');
	fighterHp = eval(pickedC + '.hp');
	fighterAtk = eval(pickedC + '.attack');
	fighterD = eval(pickedC + '.dodge')

	var enemyH = 80;
	var youD = Math.floor(Math.random() * fighterD);
	var damageC = Math.floor(Math.random() * fighterAtk + 4);
	var damageE = Math.floor(Math.random() * 14 + 4);
	var yoM = Math.floor(Math.random() * 3);

	var bLog = '<h3>Battle Log</h3>'
	bLog += '<img src="img/tbc1.jpg">'

	while (enemyH > 0 && fighterHp > 0) {
		bLog += "<ul>" + user1.sc + " attacks " + fighterName +"!</ul>";
		if (youD) {
			bLog += "<ul>" + fighterName +" dodged " + user1.sc + "'s attack!</ul>";
			bLog += "<ul>Now, " + fighterName +" attacks " + user1.sc + "!</ul>";
			if (pickedC === 'harry') {
				if (yoM) {
					bLog += "<ul>Harry Potter casts his spell and dealt: " + damageC + " damage.</ul>";
					enemyH -= damageC;
					var damageC = Math.floor(Math.random() * fighterAtk + 4);
				}
				else {
					bLog += "<ul>Harry is casting his spell and .... KABOOM!</ul><ul>he dealt: " + damageC + " damage to himself.</ul>";
					fighterHp -= damageC;
					var damageC = Math.floor(Math.random() * fighterAtk + 4);
					if (fighterHp <= 0) {
						bLog += "<h4>Harry killed himself!</h4>";
						document.getElementById("result").innerHTML += '<h4>Congratulation! The Gods have decided that you shall.. die! Your head will be chopped off and feed to the pigs tomorrow morning!</h4><br><button onClick="again()">Play Again?</button>';
						fighterHp = false;
					} 
					else {
						bLog += "<ul>" + fighterName + " has " + fighterHp + " health left.</ul>";
						youD = Math.floor(Math.random() * fighterD);
					}
				}
			}
			else {
				bLog += "<ul>" + fighterName + " dealt " + damageC + " damage to " + user1.sc + "!</ul>"; 
				enemyH -= damageC;
				var damageC = Math.floor(Math.random() * fighterAtk + 4);
			}
			if (enemyH <= 0) {
				bLog += "<h4>and " + fighterName +" killed " + user1.sc + "!</h4>";
				document.getElementById("result").innerHTML += '<h4>Congratulation on living! The Gods want you to live! YEAH!!</h4><br><button onClick = "again()">Play Again?</button>';
				enemyH = false;
			}
			else {
				bLog += "<ul>" + user1.sc + " has " + enemyH + " health left.</ul>";
				youD = Math.floor(Math.random() * fighterD);
			}
		}
		else {
			bLog += "<ul>" + fighterName +" took " + damageE + " damage.</ul>";
			fighterHp -= damageE;
			var damageE = Math.floor(Math.random() * 10 + 4);
			if (fighterHp <= 0) {
				bLog += "<h4>" + user1.sc + " killed " + fighterName +"!</h4>";
				document.getElementById("result").innerHTML += '<h4>Congratulation! The Gods have decided that you shall.. die! Your head will be chopped off and feed to the pigs tomorrow morning!</h4><br><button onClick = "again()">Play Again?</button>';
				fighterHp = false;
			}
			else {
				bLog += "<ul>" + fighterName + " has " + fighterHp + " health left.</ul>";
				youD = Math.floor(Math.random() * fighterD);
			}
		}
		bLog += '<hr>';
	}
	document.getElementById("battlelog").innerHTML = bLog;
}

var again = function() {
	location.reload();
}



// Reflection

// Wow! This is the most challenging and best solo challenge I have ever done. I have spent the has four days making this! And I have learned so much! And finally I feel it's done! (thanks god!) 
// There are so many obtacles and challenges into the making of this, so much that I can't even remember all of them. I started by wanting to learn how to integrate my javascript with html and css. So I went online and took a online course on in through codeacademy.
// This definitely gave the necessary knowledge to make this. Second, there are so many integrated parts that has to function one after another to make it works. And I have never, in my life,
// done something like so. I didn't know how to structure my code. I didn't know to make it flow. There were so many I-don't-knows that I have to over and over again I would have to look up google, stackoverflow and w3school. I have never really refactored and/or debugged so hard in my life. There are so many first times
// in this project. All in all, I glad I did this. I have accomplish way beyond the learning competency in this assignment. And I actually enjoy making this really funny game. haha. If you haven't try it you should!

// However, I do not think this would pass as "good" programming. I kind of feel like writing program is like writing an essay. My essay works but there is still redendant, run-on sentences, structural inefficiency which I still yet to
// fix. So this is just a start and I am willing to learn and improve more and more both culturally and technically in this field.

// http://cloudusa.files.wordpress.com/2012/09/psy2-copy.jpg
// http://www.youtube.com/watch?v=efQUSgJTMZc
// http://www.w3schools.com/js/js_strings.asp
// http://www.codecademy.com/courses/html-javascript-css/
// http://www.w3schools.com/tags/att_input_type.asp
// http://www.bellaonline.com/articles/art22573.asp