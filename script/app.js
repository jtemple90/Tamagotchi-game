console.log('You Got This!');
///////////////  ------USER STORIES/GAME LOGIC///////////////////////
/* 
1. User Should be able to choose a pokemon from choices and start a NEW GAME with the selected pokemon.
2. The Hunger , Sleepiness, and Boredom will increase i a random fashion and if any gets to of them get to 10 the pet faints. And Game is Over
3. User should be able to press the corresponding button. The pokemon will evolve iat certain levels if the criteria are met.
4. If time runs out of the attribute levels get over ten then game over.






*/
///////---------------------Min Requirements-----------------/////////

// Create a Class (JS Class, look at your notes if your forget) for your tomagotchi.............. DONE
// Instatiate your Tomagotchi.....................................................................DONE
// Display a character of your choice on the screen to represent your pet...Display img based on choice
// Display the following metrics for your pet:....................................................DONE
// Hunger (1-10 scale)..................................DONE
// Sleepiness (1-10 scale)..............................DONE
// Boredom (1-10 scale).................................DONE
// Age-level--------------------------..................DONE
// Add buttons to the screen to feed your pet, turn off the lights, and play with your pet........DONE
// Add the ability to name your pet.........?Does a choice of character count?....................DONE
// Style the page.................................................................................DONE
// Increase your pet's age every x minutes........................................................DONE
// Increase your pet's Hunger, Sleepiness, and Bored metrics on an interval of your choosing......DONE
// You pet should die if Hunger, Boredom, or Sleepiness hits 10...Alert! Button to start again ...DONE
// Morph your pet at certain ages........Evolve...................................................DONE
// Animate your pet across the screen while it's alive............................................DONE

// ===================== GLOBAL VARIABLES ==========================

const startLevel = 5;
let currentLevel = startLevel;
const timerStart = 120;
let time = timerStart;

// ===================== CLASSES====================

// ---------Parent Class
class Pokemon {
    constructor(name, type) {
        this.level = startLevel;
        this.hunger = 1;
        this.tired = 1;
        this.bored = 1;
        this.name = name;
        this.type = type;
     }  
}

// ------Bulbasaur Class---------------------
class Bulbasaur extends Pokemon {

    constructor(name, type) {
        super(name, type);
        this.name = 'Bulbasaur';
        this.type = 'Grass';

    }

    pokeLevel() {

        if (this.level === 40) {
            clearInterval(level);
            alert(`Congratulations you're Blastiose has reached MAX level!`);
        } else

        if (this.level >= 32 && this.bored < 6 && this.tired < 6 && this.hunger < 6) {
            $('#avatar').attr("src", './css/grass/venussaur-gif.gif');
            $('#poke-name').text("Venussaur");
            
        } else 

        if (this.level >= 16 && this.bored < 4 && this.tired < 4 && this.hunger < 4) {
        $('#avatar').attr("src", './css/grass/ivysaur-gif.gif');
        $('#poke-name').text("IvySaur");

        }

        this.level++;
        $('#level').text(`Level: ${this.level}`);

    }
}


// -----------Squirtle Class------------------
class Squirtle extends Pokemon {

    constructor(name, type) {
        super(name, type);
        this.name = 'Squirtle';
        this.type = 'Water';

    }

    pokeLevel() {

        if (this.level === 40) {
            clearInterval(level);
            alert(`Congratulations you're Blastiose has reached MAX level!`);

        } else

        if (this.level >= 32 && this.bored < 6 && this.tired < 6 && this.hunger < 6) {
            $('#avatar').attr("src", './css/water/blastiose-gif.gif');
            $('#poke-name').text('Blastiose');

        } else 

        if (this.level >= 16 && this.bored < 4 && this.tired < 4 && this.hunger < 4) {
            $('#avatar').attr("src", './css/water/wortortle-gif.gif');
            $('#poke-name').text('Wortortle');

        }

        this.level++;
        $('#level').text(`Level: ${this.level}`);

    }
}

// -----------Charmander Class----------------
class Charmander extends Pokemon {

    constructor(name, type) {
        super(name, type);
        this.name = 'Charmander';
        this.type = 'Fire';

    }

    pokeLevel() {

            if (this.level === 40) {
                alert(`Congratulations you're Charzird has reached MAX level!`);
                clearInterval(level);
            } else

            if (this.level >= 32 && this.bored < 6 && this.tired < 6 && this.hunger < 6) {
                $('#avatar').attr("src", './css/fire/charizard-gif.gif');
                $('#poke-name').text('Charizard');

            } else 

            if (this.level >= 16 && this.bored < 4 && this.tired < 4 && this.hunger < 4) {
                $('#avatar').attr("src", './css/fire/charmeleon-gif.gif');
                $('#poke-name').text('Charmeleon');
        
        }

        this.level++;
        $('#level').text(`Level: ${this.level}`);

    }

}

// ============================EVENT LISTENERS ========================

// --------Start Game---------------

$('#start-button').on('click', function() {

    startTimer();
    boredLvl();
    tiredLvl();
    hungerLvl();
    selectName();
    $(this).attr('disabled', true);
    
});

//============================ACTION BUTTONS=============================

// ---------Feed Button--------------------

$('#feed-button').on('click', function() {

    if (selectedPokemon.hunger > 0) {
        selectedPokemon.hunger--;

    }
});

//----------Sleep Button-------------------

$('#sleep-button').on('click', function() {
    
    selectedPokemon.tired = selectedPokemon.tired-selectedPokemon.tired;
    nightLight();
});

function nightLight() { 
('.screen').css('background', '#0000');
}
//----------Train Button-------------------

$('#train-button').on('click', function() {

    if (selectedPokemon.bored > 0) {
    selectedPokemon.bored--;
    
    }

});

//------------------Reset Button------------

// function refreshPage() {
//     window.Location.reload();
// }   
//=============================FUNCTIONS==============================

let selectedPokemon = null;

//-----------------------------------------------------------User Character Select

const selectName = function() {

    const selectedName = document.getElementById('select-name').value;
        $('#poke-name').text(selectedName);

//--------------------------------------------------------------Bulbasaur

    const bulba= document.getElementById('bulbasaur').value;

        if (selectedName === bulba) {
            selectedPokemon = new Bulbasaur();
            // selectedPokemon.pokeLevel();
            $('#avatar').attr("src", './css/grass/bulbasaur-gif.gif');

        }

//--------------------------------------------------------------Squirtle

    const squir = document.getElementById('squirtle').value;

        if (selectedName === squir) {
            selectedPokemon = new Squirtle();
            $('#avatar').attr("src", './css/water/squirtle-gif.gif');

        }

//--------------------------------------------------------------Charmander

    const charma = document.getElementById('charmander').value;

    if (selectedName === charma) {
        selectedPokemon = new Charmander();
        $('#avatar').attr("src", './css/fire/charmander-gif.gif');

    }
    
}; 

//============================GLOBAL FUNCTION LOOPS==============================


//--------------------------------HUNGER INTERVAL-----------------------------

const hungerLvl = function() {

    const hunger = setInterval(function() {

        if (selectedPokemon.hunger > 9) {
            clearInterval(hunger);
            alert(`Sorry your Pokemon had died from starvation. Press REFRESH to play again.`);

        }

        selectedPokemon.hunger++;
        $('#hunger').text(`Hp: ${selectedPokemon.hunger}`);
    }, 2200);

};

//--------------------------------TIRED INTERVAL-------------------------------

const tiredLvl = function() {

    const tired = setInterval(function() {

        if (selectedPokemon.tired === 10) {
            clearInterval(tired);
            alert(`Sorry your Pokemon had died from lack of sleep. Press REFRESH to play again.`);

        }

        selectedPokemon.tired++;
        $('#sleep').text(`Sl: ${selectedPokemon.tired}`);
    }, 1900);

};

//--------------------------------BORED INTERVAL-------------------------------

const boredLvl = function() {

    const bored = setInterval(function() {

        if (selectedPokemon.bored === 10) {

            clearInterval(bored);
            alert(`Sorry your Pokemon had died of boredom. Press REFRESH to play again.`);

        } 
        selectedPokemon.bored++;
        
        $('#bored').text(`Bd: ${selectedPokemon.bored}`);
    }, 2500);

};

//--------------------------------TIMER INTERVAL------------------------------

const startTimer = function () {

    const timer = setInterval(function() {
        selectedPokemon.pokeLevel();
        if (time === 1) {
            clearInterval(timer);
            alert(`You have ran out of time. Play Again?`);

        }

        time--; //Stop Counting
        $('#timer').text(`Time Remaining: ${time}`);
    }, 1500);
};

  //=============================ANIMATIONS=====================================

  //---------------------------Move-left--------------------------------

const moveLeftButton = document.getElementById('move-left');
const moveUpButton = document.getElementById('move-up');
const moveRightButton = document.getElementById('move-right');


// moveLeftButton.addEventListener('click', function(event) {
//     let id = setInterval(frame, 5);
//     function frame(){
//         if
//     }
// });