function Character (name, profession, gender, age, strength, hitpoints) {

//Initialize with these params and CONSTRUCT objects with this template as iterative 
//rather than recursive 

	this.name = name; 
	this.profession = profession; 
	this.gender  = gender;
	this.age = age;
	this.strength = strength; 
	this.hitpoints = hitpoints; 

	this.printStats = function () {
		console.log("Name: " + this.name + "\nProfession: " + this.profession + 
			"\nGender: " + this.gender + "\nAge: " + this.age + "\nStrength: " + this.strength + 
			"\nHitpoints: " + this.hitpoints); 
			console.log("\n----------\n");
	};

	this.isAlive = function() {
		if (this.hitpoints > 0) { 
			console.log(this.name + " is still alive!");
			console.log("\n----------\n"); 
			//Return gets out of the function 
			return true; 
		} 
			console.log(this.name + " has died!");
			//Return gets out of the function 
    		return false;
	};	//minus equals is  A = A - B;
	this.attack = function (character2) {
		character2.hitpoints -= this.strength; 
	};
	// //this is now ADC because this is the function is being called - ADC belongs to that object
	//  this.defend = function (character2) {
	// 	this.hitpoints -= character2.strength;

	this.levelUp = function () {
		this.age += 1; 
		this.strength += 5; 
		this.hitpoint += 25; 
	}; 		
}


//THE DREAM TEAM - this is me actually using the template
let ADC = new Character ("Sneaky", "C9Gun", "male", "12", "100", "100");
let Support = new Character ("Emmy", "SupportSneakyCarryMe", "female", "12", "100", "100");
let Jungler = new Character ("Contractz", "C9JG", "male", "12", "100", "100");
let Mid = new Character ("Jensen", "C9Mid", "male", "12", "100", "100");
let Top = new Character ("Impact", "C9Tank", "male", "12", "100", "100");
 
//Simple functions that print the stats to the screen
ADC.printStats()
Support.printStats()
Jungler.printStats()
Mid.printStats()
Top.printStats() 

//Pass support into the function of attack that the new OBJ is doing 
ADC.attack(Support);
//Log what happened to the character receiving the attack 
Support.printStats(); 
//Log whether or not this character is still alive 
Support.isAlive()

ADC.levelUp(); 
ADC.printStats(); 

//While loop that continues to run so long as the characters' hitpoints are above zero 

while (ADC.isAlive() === true && Support.isAlive() === true) {
	//Characters deal damage to each other 
	ADC.attack(Support); 
	Support.attack(ADC); 
	//Print stats to show changes 
	ADC.printStats();
	Support.printStats(); 
}
