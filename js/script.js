//Class 1:
        // Fork and clone the repo and set up your project workspace and link files
        // Write HTML for your project
//Class 2:  
        // Declare four global variables for intial state of the list of choices, the computer choice, the user choice, and the winner.  
        // Practice using console.log() and debugger to debug your code
        // Create your document ready function. 
        // Create a click hander for when the "Shoot!" button is clicked, takes in the user choice from the input field, 
        // Display the user choice to the output screen
//Class 3:  
        // Randomly choose among 'rock', 'paper', or 'scissors' from the list of choices 
        // Display the computer choice to the output screen
        // Compare the user choice and the computer choice to determine who won. 
        // Display the user winner to the output screen 
        // Clear the input box for the next choice

// *************************** YOUR CODE BELOW *******************************
//******************TEST EARLY AND OFTEN USING console.log() ******************
//****************** SERIOUSLY TEST USING console.log()!!! ******************

//GLOBAL VARIABLES



//FUNCTIONS



// DOCUMENT READY FUNCTION
$(document).ready(function(){
        var computerChoice = "";
        var winner = "";
        var choices = ["rock","paper","scissor"];
        
        $("input").keyup(function(event) {
                if (event.keyCode === 13) {
                        $("button").click();
                }
        });
        
        $("button").click(function(){
                var userChoice = $("input").val();
                if(userChoice === choices[0]){
                        $("#pchoice").html('<img src="https://previews.123rf.com/images/julinzy/julinzy1310/julinzy131000173/23262897-hand-sign-of-rock-paper-scissors-game-isolated-vector-on-white--Stock-Photo.jpg"/>');
                }else if(userChoice === choices[1]){
                        $("#pchoice").html('<img src="https://previews.123rf.com/images/julinzy/julinzy1310/julinzy131000180/23262904-hand-sign-of-rock-paper-scissors-game-isolated-vector-on-white-background-Stock-Vector.jpg"/>');
                }else if(userChoice === choices[2]){
                        $("#pchoice").html('<img src="https://previews.123rf.com/images/julinzy/julinzy1310/julinzy131000181/23262905-hand-sign-of-rock-paper-scissors-game-isolated-vector-on-white-background-Stock-Vector.jpg"/>');
                }else{
                        $("#pchoice").html("Please enter rock, paper, or scissor.")
                }
                $("input").val("");
        });
});
