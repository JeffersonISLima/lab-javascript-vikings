// Soldier
class Soldier {
  constructor(health, strength) {
    this.health = health;
    this.strength = strength;
  }
  attack() {
    return this.strength;
  }

  receiveDamage(hit) {
    this.health -= hit;
  }
}

// Viking
class Viking extends Soldier {
  constructor(name, health, strength) {
    super(health, strength);
    this.name = name;
  }
  receiveDamage(hit) {
    this.health -= hit;
    return this.health > 0
      ? `${this.name} has received ${hit} points of damage`
      : `${this.name} has died in act of combat`;
  }

  battleCry() {
    return "Odin Owns You All!";
  }
}

// Saxon
class Saxon extends Soldier {
  constructor(health, strength) {
    super(health, strength);
  }

  receiveDamage(hit) {
    this.health -= hit;
    return this.health > 0
      ? `A Saxon has received ${hit} points of damage`
      : `A Saxon has died in combat`;
  }
}

// War
class War {
  constructor() {
    this.vikingArmy = [];
    this.saxonArmy = [];
  }
  addViking(Viking) {
    this.vikingArmy.push(Viking);
  }
  addSaxon(Saxon) {
    this.saxonArmy.push(Saxon);
  }
  vikingAttack() {
    let viking = this.vikingArmy[Math.floor(Math.random*this.vikingArmy.length)]
    let saxon = this.saxonArmy[Math.floor(Math.random*this.vikingArmy.length)] 

  }
  saxonAttack() {

  }
  showStatus() {

  }
}

// Soldier
function soldier(health, strength) {
  let soldier = new Soldier(150, 50);
  return soldier;
}

/* 
// Viking 
function  Viking () {}

// Saxon 
função  Saxon () {}

// War 
function  War () {} */
