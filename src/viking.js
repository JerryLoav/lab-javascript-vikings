// Soldier
class Soldier {
    constructor(health, strength){
        this.health=health
        this.strength=strength
    }
    attack(){
        return this.strength
    }
    receiveDamage(damage){
        this.health-=damage
    }
}

// Viking
class Viking extends Soldier{
    constructor(name, health,strength){
    super( health,strength)
    this.name=name
}
receiveDamage(damage){
    this.health-=damage
    
    if(this.health<=0){
        return (`${this.name} has died in act of combat`)
    }
    return (`${this.name} has received ${damage} points of damage`)
}  
battleCry(){
    return (`Odin Owns You All!`)
} 
}

// Saxon
class Saxon extends Soldier {
    constructor(health,strength){
        super(health,strength)
    }
    receiveDamage(damage){
        this.health-=damage
        
        if(this.health<=0){
            return (`A Saxon has died in combat`)
        }
        return (`A Saxon has received ${damage} points of damage`)
    }  
}

// War
class War {
    constructor(){
        this.vikingArmy=[]
        this.saxonArmy=[]
    }
    addViking(viking){
        this.vikingArmy.push(viking)
    }
    addSaxon(saxon){
        this.saxonArmy.push(saxon)
    }
    vikingAttack(){
        let randomSaxonVikingAttack = Math.floor(Math.random()*this.saxonArmy.length)
        let randomVikingVikingAttack = Math.floor(Math.random()*this.vikingArmy.length)
        let ataqueViking = (this.saxonArmy[randomSaxonVikingAttack].receiveDamage(this.vikingArmy[randomVikingVikingAttack].strength))
        if (this.saxonArmy[randomSaxonVikingAttack].health<=0){
            this.saxonArmy.splice(randomSaxonVikingAttack,1)
        }
        return ataqueViking
    }

    saxonAttack(){
        let randomSaxonSaxonAttack = Math.floor(Math.random()*this.saxonArmy.length)
        let randomVikingSaxonAttack = Math.floor(Math.random()*this.vikingArmy.length)
        let ataqueSaxon = (this.vikingArmy[randomVikingSaxonAttack].receiveDamage(this.saxonArmy[randomSaxonSaxonAttack].strength))
        if (this.vikingArmy[randomVikingSaxonAttack].health<=0){
            this.vikingArmy.splice(randomVikingSaxonAttack,1)
        }
        return ataqueSaxon
    }

}
