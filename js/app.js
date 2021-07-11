"use strict";

let seattle = {
    min: 23,
    max: 65,
    avgcookie: 6.3,
    randomcustomer: [],
    randomcookie: [],
    hourslist: ['6am','7am','8am','9am','10am','11am','12am','1pm','2pm','3pm','4pm','5pm','6pm','7pm'],
    randomnum: function () {
        for (let i = 0; i < 14; i++) {
            function random(min, max) {
                return Math.floor(Math.random() * (max - min + 1)) + min;

            }

            this.randomcustomer.push(random(this.min, this.max));
            this.randomcookie.push(Math.round(this.avgcookie * this.randomcustomer[i]));
        }
        

        let parent = document.getElementById('salmon');
        let h2element = document.createElement('h2');
        let divelement = document.createElement('div');
        let ulelement = document.createElement('ul');
        parent.appendChild(h2element);
        parent.appendChild(divelement);
        
        divelement.appendChild(ulelement);
        h2element.textContent='Seattle';
        for (let i = 0; i < 14; i++) {

            let lielement = document.createElement('li')
            lielement.textContent = `${this.hourslist[i]} ${this.randomcookie[i]}`
            ulelement.appendChild(lielement)
        }

      
        
    }

}



seattle.randomnum()


let Tokyo = {
    min: 3,
    max: 24,
    avgcookie: 1.2,
    randomcustomer: [],
    randomcookie: [],
    hourslist: ['6am','7am','8am','9am','10am','11am','12am','1pm','2pm','3pm','4pm','5pm','6pm','7pm'],
    randomnum: function () {
        for (let i = 0; i < 14; i++) {
            function random(min, max) {
                return Math.floor(Math.random() * (max - min + 1)) + min;

            }

            this.randomcustomer.push(random(this.min, this.max));
            this.randomcookie.push(Math.round(this.avgcookie * this.randomcustomer[i]));
        }


        
        
        let parent = document.getElementById('salmon');
        let h2element = document.createElement('h2');
        let divelement = document.createElement('div');
        let ulelement = document.createElement('ul');
        parent.appendChild(h2element);
        parent.appendChild(divelement);
        
        divelement.appendChild(ulelement);
        h2element.textContent='Tokyo';
        for (let i = 0; i < 14; i++) {

            let lielement = document.createElement('li')
            lielement.textContent = `${this.hourslist[i]} ${this.randomcookie[i]}`
            ulelement.appendChild(lielement)
        }

      
        
    }

}

Tokyo.randomnum()




let Dubai = {
    min: 11,
    max: 38,
    avgcookie: 3.7,
    randomcustomer: [],
    randomcookie: [],
    hourslist: ['6am','7am','8am','9am','10am','11am','12am','1pm','2pm','3pm','4pm','5pm','6pm','7pm'],
    randomnum: function () {
        for (let i = 0; i < 14; i++) {
            function random(min, max) {
                return Math.floor(Math.random() * (max - min + 1)) + min;

            }

            this.randomcustomer.push(random(this.min, this.max));
            this.randomcookie.push(Math.round(this.avgcookie * this.randomcustomer[i]));
        }


        
        
        let parent = document.getElementById('salmon');
        let h2element = document.createElement('h2');
        let divelement = document.createElement('div');
        let ulelement = document.createElement('ul');
        parent.appendChild(h2element);
        parent.appendChild(divelement);
        
        divelement.appendChild(ulelement);
        h2element.textContent='Dubai';
        for (let i = 0; i < 14; i++) {

            let lielement = document.createElement('li')
            lielement.textContent = `${this.hourslist[i]} ${this.randomcookie[i]}`
            ulelement.appendChild(lielement)
        }

      
        
    }

}

Dubai.randomnum()


let Paris = {
    min: 20,
    max: 38,
    avgcookie: 2.3,
    randomcustomer: [],
    randomcookie: [],
    hourslist: ['6am','7am','8am','9am','10am','11am','12am','1pm','2pm','3pm','4pm','5pm','6pm','7pm'],
    randomnum: function () {
        for (let i = 0; i < 14; i++) {
            function random(min, max) {
                return Math.floor(Math.random() * (max - min + 1)) + min;

            }

            this.randomcustomer.push(random(this.min, this.max));
            this.randomcookie.push(Math.round(this.avgcookie * this.randomcustomer[i]));
        }


        
        console.log(this.randomcustomer);
        console.log(this.randomcookie);
        let parent = document.getElementById('salmon');
        let h2element = document.createElement('h2');
        let divelement = document.createElement('div');
        let ulelement = document.createElement('ul');
        parent.appendChild(h2element);
        parent.appendChild(divelement);
        
        divelement.appendChild(ulelement);
        h2element.textContent='Paris';
        for (let i = 0; i < 14; i++) {

            let lielement = document.createElement('li')
            lielement.textContent = `${this.hourslist[i]} ${this.randomcookie[i]}`
            ulelement.appendChild(lielement)
        }

      
        
    }

}

Paris.randomnum()


let Lima = {
    min: 20,
    max: 38,
    avgcookie: 2.3,
    randomcustomer: [],
    randomcookie: [],
    hourslist: ['6am','7am','8am','9am','10am','11am','12am','1pm','2pm','3pm','4pm','5pm','6pm','7pm'],
    randomnum: function () {
        for (let i = 0; i < 14; i++) {
            function random(min, max) {
                return Math.floor(Math.random() * (max - min + 1)) + min;

            }

            this.randomcustomer.push(random(this.min, this.max));
            this.randomcookie.push(Math.round(this.avgcookie * this.randomcustomer[i]));
        }


        
        console.log(this.randomcustomer);
        console.log(this.randomcookie);
        let parent = document.getElementById('salmon');
        let h2element = document.createElement('h2');
        let divelement = document.createElement('div');
        let ulelement = document.createElement('ul');
        parent.appendChild(h2element);
        parent.appendChild(divelement);
        
        divelement.appendChild(ulelement);

        h2element.textContent='Lima';
        
        for (let i = 0; i < 14; i++) {

            let lielement = document.createElement('li')
            lielement.textContent = `${this.hourslist[i]} ${this.randomcookie[i]}`
            ulelement.appendChild(lielement)
        }

      
        
    }

}

Lima.randomnum()



