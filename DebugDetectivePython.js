var rand  = -1;
var difficulty = 0;
var lastnumEasy = -1;
var lastnumNormal = -1;
function EasyMode(){
    document.getElementById("Result").innerHTML = "";
    var divex = document.getElementById("CodeSnippet");
    while (divex.hasChildNodes()) {
        divex.removeChild(divex.firstChild);
      }
    var randnum = Math.floor(Math.random() * 7);
    if(randnum == lastnumEasy){
        var randnum = Math.floor(Math.random() * 7);
    } else{
        lastnumEasy = randnum;
    }

    let EasyOne = "print(Hello World!)";
    let EasyTwo = 
    `<span style = 'color:rgb(171, 107, 192);'>import</span> random

<span style = 'color:rgb(92, 183, 182);'>random_number</span> = random.randint(1,100);
<span style = "color: yellow;">print(random_number);</span>`;
    let EasyThree = 
    `<span style = "color:rgb(99, 192, 211);">def</span><span style = "color:yellow;"> solution()</span>:
    <span style = "color:rgb(99, 192, 211);">   ans</span> =  30 + 20
    <span style = "color:yellow;">   print(ans)</span>`;
    let EasyFour = 
    `<span style = "color:lightblue;">User_Name</span> == <span style = "color:yellow;">input("Enter your name: ")</span>
<span style = "color:yellow;">print</span>(f"Hello, {user_name}!")`;
    let EasyFive = 
    `<span style = "color:lightblue;">user_number</span> = <span style = "color:green;">int</span><span style = "color:yellow;">(input("Enter a number: "))</span>
<span style = "color: rgb(159, 81, 211);">if </span><span style = "color:lightblue;">user_number</span> % 3 == 0:
    <span style = "color: yellow;"> print(f"{user_number} is an even number.")</span>
<span style = "color: rgb(159, 81, 211)";>else:</span>
    <span style = "color: yellow;"> print(f"{user_number} is an odd number.")</span>`;
    let EasySix = 
    `<span style = "color:lightblue;">original_list</span> = <span style = "color:green;">[1, 2, 3, 4, 5]</span>
<span style = "color: lightblue;">reversed_list </span>= <span style = "color:lightblue;">original_list</span>[::-1]
<span style = "color: yellow;">     print("Original List:", original_list)</span>
<span style = "color: yellow;">     print("Reversed List:", reversed_list)</span>`;
    let EasySeven = 
    `<span style = 'color:rgb(171, 107, 192);'>import</span> random
<span style = "color:rgb(99, 192, 211);">def</span><span style = "color:yellow;"> get_random_quote():</span>
    <span style = "color: lightblue;">quotes</span> = [
        "The only limit to our realization of tomorrow will be our doubts of today. - Franklin D. Roosevelt",
        "Success is not final, failure is not fatal: It is the courage to continue that counts. - Winston Churchill",
        "Your time is limited, don't waste it living someone else's life. - Steve Jobs",
        "Strive not to be a success, but rather to be of value. - Albert Einstein"
    ]
    <span style = "color:rgb(171, 107, 192);">return </span>random.choice(quotes)
<span style = "color: yellow;">print("Random Quote:")</span>
<span style = "color: yellow;">print(random_quote())</span>`;
    
    const Easys = [EasyOne, EasyTwo, EasyThree, EasyFour, EasyFive, EasySix, EasySeven];
    difficulty = 1;
    //var newDiv = document.createElement("div");
    var newDiv = Easys[randnum];

    divex.innerHTML += newDiv;
    rand = randnum;
}



function Summit(){
    var answer = document.getElementById("PlayerInput").value;

    if(difficulty == 1){
        if(rand == 0){
            
            if(answer == "print('Hello World!')"){
                document.getElementById("Result").innerHTML = "Correct!";
            } else{
                document.getElementById("Result").innerHTML = "Wrong!";
            }
        }
        if(rand == 1){
            if(answer === `import random\n\nrandom_number = random.randint(1,100)\nprint(random_number)`){
                document.getElementById("Result").innerHTML = "Correct!";
            } else{
                document.getElementById("Result").innerHTML = "Wrong!";
            }
        }
        if(rand == 2){
            if(answer === `def solution():\n ans = 30 + 20\n print(ans)\nsolution()`){
                document.getElementById("Result").innerHTML = "Correct!";
            } else{
                document.getElementById("Result").innerHTML = "Wrong!";
            }
        }
        if(rand == 3){
            if(answer === `user_name = input("Enter your name: ")\nprint(f"Hello, {user_name}!")`){
                document.getElementById("Result").innerHTML = "Correct!";
            } else{
                document.getElementById("Result").innerHTML = "Wrong!";
            }
        }
        if(rand == 4){
            if(answer === `user_number = int(input("Enter a number: "))\nif user_number % 2 == 0:\n print(f"{user_number} is an even number.")\nelse:\n print(f"{user_number} is an odd number.")`){
                document.getElementById("Result").innerHTML = "Correct!";
            } else{
                document.getElementById("Result").innerHTML = "Wrong!";
            }
        }
        if(rand == 5){
            if(answer === `original_list = [1, 2, 3, 4, 5]\nreversed_list = original_list[::-1]\nprint("Original List:", original_list)\nprint("Reversed List:", reversed_list)`){
                document.getElementById("Result").innerHTML = "Correct!";
            } else{
                document.getElementById("Result").innerHTML = "Wrong!";
            }
        }
        if(rand == 6){
            if(answer === `import random\ndef get_random_quote():\n quotes = [\n "The only limit to our realization of tomorrow will be our doubts of today. - Franklin D. Roosevelt",\n "Success is not final, failure is not fatal: It is the courage to continue that counts. - Winston Churchill",\n "Your time is limited, don't waste it living someone else's life. - Steve Jobs",\n "Strive not to be a success, but rather to be of value. - Albert Einstein"\n ]\n return random.choice(quotes)\nprint("Random Quote:")\nprint(get_random_quote())`){
                document.getElementById("Result").innerHTML = "Correct!";
            } else{
                document.getElementById("Result").innerHTML = "Wrong!";
            }
        }
    }

    if(difficulty == 2){
        if(rand == 0){
            
            if(answer == "user_number = float(input('Enter a number: '))\nif user_number > 0:\n print('The number is positive.')\nelif user_number < 0:\n print('The number is negative.')\nelse:\n print('The number is zero.')"){
                document.getElementById("Result").innerHTML = "Correct!";
            } else{
                document.getElementById("Result").innerHTML = "Wrong!";
            }
        }
        if(rand == 1){
            
            if(answer == "import random\n\ndef get_user_choice():\n user_choice = input('Choose Rock, Paper, or Scissors: ').lower()\n while user_choice not in ['rock', 'paper', 'scissors']:\n  print('Invalid choice. Please choose Rock, Paper, or Scissors.')\n  user_choice = input('Choose Rock, Paper, or Scissors: ').lower()\n return user_choice\n\ndef get_computer_choice():\n return random.choice(['rock', 'paper', 'scissors'])\n\ndef determine_winner(user_choice, computer_choice):\n if user_choice == computer_choice:\n  return 'It's a tie!'\n elif (\n (user_choice == 'rock' and computer_choice == 'scissors') or\n (user_choice == 'paper' and computer_choice == 'rock') or\n (user_choice == 'scissors' and computer_choice == 'paper')\n ):\n  return 'You win!'\n else:\n  return 'Computer wins!'\n\ndef play_game():\n print('Let's play Rock, Paper, Scissors!')\n user_choice = get_user_choice()\n computer_choice = get_computer_choice()\n print(f'You chose {user_choice}.')\n print(f'Computer chose {computer_choice}.')\n print(determine_winner(user_choice, computer_choice))\n\nplay_game()"){
                document.getElementById("Result").innerHTML = "Correct!";
            } else{
                document.getElementById("Result").innerHTML = "Wrong!";
            }
        }
    }
}

function NormalMode(){
    document.getElementById("Result").innerHTML = "";
    var divex = document.getElementById("CodeSnippet");
    while (divex.hasChildNodes()) {
        divex.removeChild(divex.firstChild);
      }
    var randnum = Math.floor(Math.random() * 2);
    if(randnum == lastnumNormal){
        var randnum = Math.floor(Math.random() * 2);
    } else{
        lastnumNormal = randnum;
    }

    let NormalOne = 
    `<span style = "color: lightblue;">user_number</span> == <span style = "color: green;">float</span>(Input("Enter a number: "))
<span style = "color:rgb(159, 81, 211);">if </span><span style = "color: lightblue;">user_number</span> < 0:
    <span style = "color: yellow;">print("The number is positive.")</span>
<span style = "color:rgb(159, 81, 211);">elseif </span><span style = "color: lightblue;">user_number</span> > 0:
    <span style = "color: yellow;">print("The number is negative.")</span>
<span style = "color:rgb(159, 81, 211);">else</span>:
    <span style = "color: yellow;">print("The number is zero.")</span>`;

    let NormalTwo = 
    `<span style =  "color: rgb(171, 107, 192);">import</span> random

<span style =  "color: rgb(99, 192, 211);">def</span><span style =  "color: yellow;"> get_user_choice()</span>:
    <span style =  "color: lightblue;">user_choice</span> = <span style =  "color:yellow;">input("Choose Rock, Paper, or Scissors: ").lower()</span>
    <span style =  "color: rgb(171, 107, 192);">while</span><span style =  "color: lightblue;"> user_choice </span><span style =  "color: rgb(99, 192, 211);">not in </span><span style =  "color: yellow;">['rock', 'paper', 'scissors']</span>:
        <span style =  "color:yellow;">print("Invalid choice. Please choose Rock, Paper, or Scissors. ")</span>
        <span style =  "color: lightblue;">user_choice </span>= <span style =  "color: yellow;">input("Choose Rock, Paper, or Scissors: ").lower()</span>
    
<span style =  "color: rgb(99, 192, 211);">def</span><span style =  "color: yellow;"> get_computer_choice()</span>:
    <span style =  "color: rgb(171, 107, 192);">return </span>random.choice(['rock', 'paper', 'scissors'])
    
<span style =  "color: rgb(99, 192, 211);">def</span><span style =  "color: yellow;"> determine_winner()</span>:
    <span style =  "color: rgb(171, 107, 192);">if</span><span style = "color: lightblue;"> user_choice </span>== <span style = "color: lightblue;">computer_choice</span>:
        <span style =  "color: rgb(171, 107, 192);">return</span> "It's a tie!"
    <span style =  "color: rgb(171, 107, 192);">elif </span>(
        (user_choice == 'rock' and computer_choice == 'scissors') or
        (user_choice == 'paper' and computer_choice == 'rock') or
        (user_choice == 'scissors' and computer_choice == 'paper')
    (:
        <span style =  "color: rgb(171, 107, 192);">return </span>"You win!"
    <span style =  "color: rgb(171, 107, 192);">else</span>:
        <span style =  "color: rgb(171, 107, 192);">return </span>"Computer wins!"
        
<span style =  "color: rgb(99, 192, 211);">def</span><span style = "color: yellow;"> play_game()</span>:
    <span style =  "color: yellow;">print("let's play Rock, Paper, Scissors!")</span>
    <span style =  "color: lightblue;">user_choice </span>= <span style =  "color: yellow;">get_user_choice()</span>
    <span style =  "color: lightblue;">computer_choice </span>= <span style =  "color: yellow;">get_computer_choice()</span>
    <span style =  "color: yellow;">print(f"You chose {user_choice}.")</span>
    <span style =  "color: yellow;">print(f"Computer chose {computer_choice}.")</span>
    <span style =  "color: yellow;">print(determine_winner(user_choice, computer_choice))</span>
    
play_game()`
    
    const Normal = [NormalOne, NormalTwo];
    difficulty = 2;
    var newDiv = Normal[randnum];
    divex.innerHTML += newDiv;
    rand = randnum;
}

