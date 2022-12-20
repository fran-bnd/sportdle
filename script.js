

      let ccdisplay = document.querySelector('.crrDisplay');
      let incdisplay = document.querySelector('.incDisplay');
      let guess = document.querySelector('#character');
      let textForm = document.querySelector('.textForm');

      var commonWords = ["skier","edges","wedge","poles","helmet","slope","alpine","angle","boots","bowls","bumps","cross","glade","gloves","liftie","hills","jumps","mogul","nordic","piste","powder","resort","rider","slalom","steep","winter"];
      var definitions = ["Skier is a person who skis.","Edges are a metal strip on the bottom sides of skis used for skiing.","Wedge is the way you position skis in a wedge-shape.","Ski-Poles are lightweight poles held by a skier to assist in balance or propulsion.","Ski-Helmet consist of a hard plastic/resin shell with inner padding.","Slope is a sloping surface which you can ski down.","Alpine is related to high mountains.","Angle refers to the angle of the skie edge to give the skis more grip on the snow surface","Ski-Boot is a rigid padded shoe that extends just above the ankle, is secured to the foot, and is locked into position in a ski binding.","Bowls is a wide mountain basin whose slopes look as if they were carved from the side of a cereal bowl.","Bumps (or moguls) are formed on a piste when skiers push snow into mounds as they do sharp turns.","Ski-Cross is a downhill skiing contest for four to six competitors on a winding, undulating course that includes jumps and is part of the Winter Olympics games.","Glade-skiing is alpine skiing through trees off-trail or on a defined woods trail.","Ski-Gloves:include a waterproof, breathable barrier to prevent moisture from snow and rain from getting in while allowing water vapor from sweat to escape.","Liftie is the short for lift operator. Originally used at US ski resorts.","Hills are naturally raised area of land, not as high or craggy as a mountain.","Jumps are leaps made by a skier to jump and get some air.",
      "Moguls are formed on a piste when skiers push snow into mounds as they do sharp turns.","Nordic skiing, the original version of skiing, includes any form of skiing where the toe is attached to the ski but the heel is not.","A piste is a a ski run of compacted snow.","Powder is freshly fallen, uncompacted snow, especially enjoyable for skiing","Ski Resort is a town in winter sport areas, offering support services for skiing and snowboarding","Rider is a skier thet can ride a whole mountain, usualy refered to freestyle.","Slalom is a zigzag or wavy course between upright obstacles. Slalom race if an Olympic discipline.","A slope between 30° and 40° can be defined as 'steep'. Slopes above 40° are termed 'very steep'.","Winter is the coldest season of the year."];
      var commonWordsSurf = ["barrel","break","beach","board","carve","crest","goofy","spots","leash","waves","ocean","rocker","reefs","kooks","quiver"];
      var commonWordsTennis = ["tennis","balls","break","court","deuce","double","fault","grass","racket","return","serve","server","single","umpire","point"]
      var commonWordsAll = commonWords;

      var chosenWord = "sports";

     // Function Selecting the Sport
     function SportChoosen(sport){
      document.getElementById("form1").reset();
      var select = document.getElementById(sport);
      if (select.value === "Skiing")
        {
        //alert("You choose: Skiing");  
        chosenWord = commonWords[Math.floor(Math.random() * commonWords.length)];
      }
      else{if (select.value === "Surf")
        {
        //alert("You choose: Surf");  
        chosenWord = commonWordsSurf[Math.floor(Math.random() * commonWordsSurf.length)];
      }
      else{if (select.value === "Tennis")
        {
        //alert("You choose: Tennis");  
        chosenWord = commonWordsTennis[Math.floor(Math.random() * commonWordsTennis.length)];
      }
      else{
        //alert("You choose: All");  
        chosenWord = commonWordsAll[Math.floor(Math.random() * commonWordsAll.length)];
      }
      }
      }
      return chosenWord;
      }


      // Function Grabbing Random Word (depending on the Select Sport)
      var chooseRandomWord = function(array) {
        return array[Math.floor(Math.random() * array.length)];
      }

      // Function that submits the Correct values
      function CorrectValues(Input_Id) {

      var maxlenght = 6;
      var triedCharacters = [];
      var correctCharacters = [];

      guess = document.getElementById(Input_Id).value.toLowerCase();  

      for (i = 0; i < maxlenght; i++) {
          // chosenWord[i]
          // for (z = 0; z < guess.length; z++) {
              if (chosenWord[i] === guess[i]) {
                  correctCharacters.push(guess[i])
              } 
              else {triedCharacters.push(guess[i])}
          // };
        }    
      if (guess === chosenWord) {alert("Congratulations, you guessed the right word!");}
      return correctCharacters;
      } 

      // Function that submits the Wrong values
      function WrongValues(Input_Id) {

          var maxlenght = 6;
          var wrongCharacters = [];

          guess = document.getElementById(Input_Id).value.toLowerCase();  

          for (i = 0; i < maxlenght; i++) {
            //if (guess[i] != chosenWord[i]) {
              j=0;
              for (z = 0; z < maxlenght; z++) {
                if (guess[i] === chosenWord[z]) {
                  j++;
                }    
                }
                 if (j===0) {
                  wrongCharacters.push(guess[i]);
                 }
                //}
            }    
            return wrongCharacters;
          } 

      // Function that submits the Missplaced values
      function MissplacedValues(Input_Id) {

          var maxlenght = 6;
          var missplacedCharacters = [];

          guess = document.getElementById(Input_Id).value.toLowerCase();  

          for (i = 0; i < maxlenght; i++) {
              chosenWord[i]
              for (z = 0; z < maxlenght; z++) {
                  if(guess[i] === chosenWord[z]) {
                    if (guess[i] != chosenWord[i]){
                      if(i != z){
                      missplacedCharacters.push(guess[i])
                      }
                    }
                  };
              };
            }    
          return missplacedCharacters;
          } 

       // Funcion que muestra la palabra secreta
       function ShowResult(Input_Id) {
          var My_Message = document.getElementById(Input_Id).value;
          for (i = 0; i < commonWords.length; i++) {
                if (commonWords[i] === chosenWord) {
                   var j = i;
                }   
              }
          alert('- Secret Word: '+chosenWord+'\n\n- Definition: '+definitions[j]);
        }

        // Funcion que muestra las reglas (+)
       function ShowRules() {
          alert('Rules: \n\nChoose a sport and guess the secret sport-word of 5 or 6 letters.'+'\n\nColor results:\nLetter in GREEN -> Right letter & right spot. \nLetter in YELLOW -> Right letter & wrong spot. \nLetter in RED -> Wrong letter & wrong spot.');
        }

        // When the user clicks on <div>, open the popup
        function popupFunction() {
        var popup = document.getElementById("myPopup");
        popup.classList.toggle("show");
        }
