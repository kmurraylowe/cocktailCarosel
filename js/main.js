// https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=11007


function getDrink(){
	
	
	fetch('https://www.thecocktaildb.com/api/json/v1/1/random.php')
	.then(res => res.json())
	.then(data =>{
		console.log(data)
		let drinkName = data.drinks[0]
		document.querySelector('h2').innerText = drinkName.strDrink
		document.querySelector('img').src = drinkName.strDrinkThumb
		document.querySelector('h3').innerText = drinkName.strInstructions

	})

}


function startCarosel(){
	setInterval(getDrink, 5000)
}

startCarosel()