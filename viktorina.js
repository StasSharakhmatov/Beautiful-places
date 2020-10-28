var questionsAnswers = [
["Каспийское море - это:", "Море", "Океан", "Залив", "Озеро", 4],
["Самая длинная река в мире?", "Амазонка", "Дунай", "Нил", "Днепр", 1],
["Какое самое мелкое море в мире?", "Японское", "Азовское", "Мраморное", "Мертвое", 2],
["В Мексиканском заливе развита добыча:", "Золота", "Газа", "Нефти", "Алмазов", 3],
["Сколько человек за всю истории переплыло пролив Ла-Манш?", "1", "100", "Около 1000", "Около 10000", 3],
["Страна с найбольшим количеством лесов?", "Бразилия", "Китай", "Канада", "Россия", 4],
["Самая высокая вершина на Земле:", "Джомолунгма", "Килиманджаро", "Эльбрус", "Монблан", 1],
["Степи распространены на всех континентах, за исключением:", "Евразии", "Антарктиды", "Северной Америки", "Африки", 2],
["Каких пустынь не существует?", "Глинистых", "Каменистых", "Морских", "Арктических", 3],
["Гренландия - это:", "Континент", "Остров", "Архипелаг", "Перешеек", 2],
["Сколько планет в Солнечной системе?", "7", "8", "9", "10", 2],
["Какая по счету от Солнца планета Земля?", "1", "2", "3", "4", 3],
["Свет доходит от Солнца до Земли за:", "5 минут", "8 минут", "20 минут", "23 минуты", 2],
["Сутки на Меркурии длятся:", "1 день", "220 дней", "356 дней", "176 дней", 4],
["Самая крупная планета в Солнечной системе?", "Юпитер", "Сатурн", "Земля", "Уран", 1],
];

var rightAnswers = 0;
var numberOfQuestion = 0;
var calculateAnswers = questionsAnswers.length;

function viktorina(play) {

	if (play == 0) {
		document.getElementById("variant1").style.display="block";
		document.getElementById("variant2").style.display="block";
		document.getElementById("variant3").style.display="block";
		document.getElementById("variant4").style.display="block";
		document.getElementById("question").style.display="block";

		document.getElementById("variant1").innerHTML=questionsAnswers[numberOfQuestion][1];
		document.getElementById("variant2").innerHTML=questionsAnswers[numberOfQuestion][2];
		document.getElementById("variant3").innerHTML=questionsAnswers[numberOfQuestion][3];
		document.getElementById("variant4").innerHTML=questionsAnswers[numberOfQuestion][4];
		document.getElementById("question").innerHTML=questionsAnswers[numberOfQuestion][0];

		document.getElementById("vopros").style.display="none";
		document.getElementById("start").style.display="none";
		document.getElementById("end").style.display="inline";

	} else {

		if (play == questionsAnswers[numberOfQuestion][5]) {
			rightAnswers++;
			document.getElementById("result").innerHTML="Правильно!";

		} else {
			document.getElementById("result").innerHTML="Не верно! Правильный ответ: " + questionsAnswers[numberOfQuestion][questionsAnswers[numberOfQuestion][5]];
		}

		numberOfQuestion++;
		if (numberOfQuestion < calculateAnswers) {
			document.getElementById("variant1").innerHTML=questionsAnswers[numberOfQuestion][1];
			document.getElementById("variant2").innerHTML=questionsAnswers[numberOfQuestion][2];
			document.getElementById("variant3").innerHTML=questionsAnswers[numberOfQuestion][3];
			document.getElementById("variant4").innerHTML=questionsAnswers[numberOfQuestion][4];
			document.getElementById("question").innerHTML=questionsAnswers[numberOfQuestion][0];

		} else {
			document.getElementById("variant1").style.display="none";
			document.getElementById("variant2").style.display="none";
			document.getElementById("variant3").style.display="none";
			document.getElementById("variant4").style.display="none";
			document.getElementById("question").style.display="none";
			document.getElementById("end").style.display="inline";

			var percentRightAnswers = Math.round(rightAnswers/calculateAnswers*100);
			var rez = "Плохо";
			if(percentRightAnswers > 70) rez = "Хорошо!";
			if(percentRightAnswers == 100) rez = "Отлично!";

			document.getElementById("result").innerHTML="Правильных ответов: " + rightAnswers + " из " + calculateAnswers + " (" + 
			+ percentRightAnswers + "%)<br>" + rez;

		}

	}

}