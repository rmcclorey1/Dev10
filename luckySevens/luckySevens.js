function playGame() {

	var sBet = Number(document.forms["luckySevens"]["sBet"].value);
	if (sBet <= 0) {
		alert("Error: Starting bet must be greater than 0.");
	}

	var rollHigh = [sBet];
	var totalRolls = 0;
	for (var money = sBet; money >= 1; totalRolls++) {

		dice1 = Math.floor(Math.random() * 6) + 1;
		dice2 = Math.floor(Math.random() * 6) + 1;
		if (Number(dice1 + dice2) === 7) {
			money += 4;
			rollHigh[rollHigh.length] = money;
		} else {
			money -= 1;
			rollHigh[rollHigh.length] = money;
		}
	}

	var highest = 0;
	for (var indexCounter = 0; indexCounter < rollHigh.length; indexCounter++) {
		if (rollHigh[indexCounter] > highest) {
			highest = rollHigh[indexCounter];
		}
	}

	document.getElementById("results").style.display = "block";
	document.getElementById("startBet").innerText = ("$" + sBet.toFixed(2));
	document.getElementById("totalRolls").innerText = totalRolls;
	document.getElementById("highestAmount").innerText = ("$" + highest.toFixed(2));
	document.getElementById("rollCountHighestWon").innerText = rollHigh.indexOf(highest);
	document.getElementById("submitButton").innerText = "Play Again";

	return false;
}
