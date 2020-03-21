// Функция транслитерации
translate = function(data){
	
	var	symbols = {
		"а": "a",
                "б": "b",
                "в": "v",
                "г": "g",
                "д": "d",
                "е": "e",
                "ё": "yo",
                "ж": "zh",
                "з": "z",
                "и": "i",
                "й": "j",
                "к": "k",
                "л": "l",
                "м": "m",
                "н": "n",
                "о": "o",
                "п": "p",
                "р": "r",
                "с": "s",
                "т": "t",
                "у": "u",
                "ф": "f",
                "х": "x",
                "ц": "c",
                "ч": "ch",
                "ш": "sh",
                "щ": "shh",
                "ъ": "``",
                "ы": "y'",
                "ь": "`",
                "э": "e`",
                "ю": "yu",
                "я": "ya",
        	},
	translitData = [];
	
	data = data.toLowerCase();

	for (var i = 0; i < data.length; i++){
        translitData[i] = symbols[data[i]] ? symbols[data[i]] : data[i];
    
	    if(translitData[i-1] === " " || i === 0){
	        translitData[i] = translitData[i].toUpperCase()
	    };
	    
	};     

	translitData = translitData.join('');
	return translitData;
};
       
//Привязка к кнопке

/* let formButton = document.querySelector('#button');

formButton.onclick = function(){
        let translitInput  = document.querySelector('#input'); // Запись формы ввода
        let translitText = translitInput.value;                // Запись в переменную ввода пользователя
        let result = translate(translitText);                  // Транслитерация и запись в переменную      
        let res = document.querySelector('#result');           // Запись span в переменную
        res.textContent = result;                              // Запись результата в span
}; */


button.addEventListener('click', function(event){
        result_wrapper.style.display = "block";
        let translitText = input.value;
        result.innerHTML = `Результат транслитерации: <br><b>${translate(translitText)}</b>`;
        input.value = "";
});

// Работа над картинкой
let cat    = document.querySelector(".cat");
let catContainer = document.querySelector(".big-cat")
 
        cat.onclick     = () => {
        catContainer.innerHTML = "<img src='cat_300.png'>";
                let catTitle = document.createElement('p');
        catTitle.innerText = cat.alt;
        catContainer.append(catTitle);
        catContainer.classList.toggle('hide');      
}

// Показ формы
let buttonCont  = document.querySelector(".contact-button")
let contForm    = document.querySelector(".form-wrapper")

buttonCont.onclick = () => {
        contForm.classList.toggle('hide-form');  
}
