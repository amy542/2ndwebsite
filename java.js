function runQuiz() {

    // We assign score to 0 to start with
    score = 0

    // First we mark question 1
    var Q1ans1 = document.getElementById("toys");
    var Q1ans2 = document.getElementById("food");
    var Q1ans3 = document.getElementById("space");
    var Q1ans4 = document.getElementById("explore");

    function checkAns(VAR) {
        if (VAR.checked == true) {
            score = score + 1
            console.log("Next item has been checked and score is " + score)
        }
        else {
            console.log("Next item has been checked and score is " + score)
        }
    }
    checkAns(Q1ans1)
    checkAns(Q1ans2)
    checkAns(Q1ans3)
    checkAns(Q1ans4)

    // Then we mark question 2
    var Q2ans1 = document.getElementById("always");
    var Q2ans2 = document.getElementById("Occasionally");
    var Q2ans3 = document.getElementById("No");
    var Q2ans4 = document.getElementById("Never");

    function checkAnsQ2(VAR) {
            if (VAR.checked == true) {
                if (VAR == Q2ans1) {
                    score = score + 2
                    console.log("Next item has been checked and score is " + score)
                }
                else if (VAR == Q2ans2) {
                    score = score + 3
                    console.log("Next item has been checked and score is " + score)
                }
                else if (VAR == Q2ans3) {
                    score = score + 4
                    console.log("Next item has been checked and score is " + score)
                }
                else {
                    score = score + 1
                    console.log("Next item has been checked and score is " + score)
                }
            }
            else {
                console.log("Next item has been checked and score is " + score)
            }
        }

    checkAnsQ2(Q2ans1)
    checkAnsQ2(Q2ans2)
    checkAnsQ2(Q2ans3)
    checkAnsQ2(Q2ans4)

    // Finally we mark question 3
    let Q3ans = Number(document.getElementById("nocats").value); // because .value makes a string
    console.log("Q3 value is " + Q3ans)
    function markQ3() {
        if (Q3ans == NaN || Q3ans == 0) {
            console.log("1Next item has been checked and score is " + score)
        }
        else if (Q3ans == 1) {
            score = score + 4
            console.log("2Next item has been checked and score is " + score)
        }
        else if (Q3ans = 2) {
            score = score + 3
            console.log("3Next item has been checked and score is " + score)
        }
        else if (Q3ans == 3) {
            score = score + 2
            console.log("4Next item has been checked and score is " + score)
        }
        else if (Q3ans >= 4) {
            score = score + 1
            console.log("5Next item has been checked and score is " + score)
        }
        else {
            console.log("6Next item has been checked and score is " + score)
        }
    }

    markQ3()

    console.log("Final score is: " + score)

    // Now we output result to user

    if (score > 10 && Q2ans4.checked == true) {
        alert("Its nice that u care about the birds but I can't believe ur cat has NEVER been outside!?!")
    }
    else if (score > 10) {
        alert("You are a great cat owner & protect the birds!")
    }
    else if (score > 6) {
        alert("You are a good cat owner but should make your cat(s) liv(e/es) more interesting cos they probably bored but also don't let ur cat outside")
    }
    else {
        alert("Your cat may turn on you. Think fast!")
    }
}