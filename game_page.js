function send()
{
    number1= document.getElementById("number1").value;
    number2= document.getElementById("number2").value;

    actual_anwer = parseInt(number1) * parseInt(number2);


question_number= "<h4>" + number1 + "X" + number2 + "</h4>";

input="<br> Answer :  <input type='text' id='input_box'> ";
    check="<br><br> <button class='btn btn-info' onclick='check()'>Check</button>";
    row = question_number + input + check ;


    document.getElementById("output" ).innerHTML=row;

    document.getElementById("number1").value="";
    document.getElementById("number2").value="";
}

question_turn="player1";
answer_turn="player2";

function check()
{
    get_answer=document.getElementById("input_box").value;
    answer=get_answer.toLowerCase();
    console.log("answer in Lower case is" + answer);

    if (answer ==actual_anwer)
    {
        if (answer_turn == "player1")
        {
            player1_score=player1_score + 1;
            document.getElementById("player1_score").innerHTML=player1_score;

            
        }

        else {
            player2_score=player2_score + 1;
            document.getElementById("player2_score").innerHTML=player2_score;
  
        }
    }



    if (answer_turn == "player1")
    
        {
            answer_turn="player2";
            document.getElementById("player_anwer").innerHTML= "Answer Turn -" + player2_name;

            
        }

        else {
            answer_turn="player1";
            document.getElementById("player_anwer").innerHTML= "Answer Turn -" + player1_name;

  
        }
    







    if (question_turn == "player1")
    
        {
            question_turn="player2";
            document.getElementById("player_question").innerHTML= "Question Turn -" + player2_name;

            
        }

        else {
            qustion_turn="player1";
            document.getElementById("player_question").innerHTML= "Question Turn -" + player1_name;

  
        }
    
}
