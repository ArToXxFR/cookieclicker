export class User {
    constructor(name) {
        this._money = 0;
        this._name = name;
        this._global_multiplier = 1;
        this._total_click = 0;
        this._total_events = 0;
        this._total_events_clicked = 0;
        this._total_money = 0;
    }

    exportJSON() {

        const json = JSON.stringify({
            money: this._money,
            name: this._name,
            global_multiplier: this._global_multiplier,
            total_click: this._total_click,
            total_events: this._total_events,
            total_events_clicked: this._total_events_clicked,
            total_money: this._total_money,
        });
        return json;
        
    }

    importJSON(dataJSON) {
        this._money = dataJSON.money;
        this._name = dataJSON.name;
        this._global_multiplier = dataJSON.global_multiplier;
        this._total_click = dataJSON.total_click;
        this._total_events = dataJSON.total_events;
        this._total_events_clicked = dataJSON.total_events_clicked;
        this._total_money = dataJSON.total_money;
    }

    set earnMoney(setMoney) {
        this._money += setMoney*this._global_multiplier;
        this._total_money += setMoney*this._global_multiplier;
    }

    set loseMoney(setMoney) {
        this._money -= setMoney;
    }

    set addGlobalMultiplier(nb) {
        this._global_multiplier += nb;
    }

    set loseGlobalMultiplier(nb) {
        this._global_multiplier -= nb;
    }

    addClick() {
        this._total_click += 1;
    }

    addEvent() {
        this._total_events += 1;
    }

    addEventClicked() {
        this._total_events_clicked += 1;
    }

    get getClick() {
        return this._total_click;
    }

    get getMultiplier() {
        return this._global_multiplier;
    }

    get getEventClicked() {
        return this._total_events_clicked;
    }

    get getEvent() {
        return this._total_events;
    }

    get getTotalMoney() {
        return Math.round(this._total_money);
    }

    get getMoney() {
        return Math.round(this._money);
    }
}

export class Clicker {
    constructor(name, uid, price, earnings, isAutoclicker) {
        this._name = name;
        this._multiplier = 1;
        this._price = price;
        this._earnings = earnings;
        this._isAutoclicker = isAutoclicker;
        this._level = 0;
        this._timing_autoclick = 1000;
        this._uid = uid;
    }

    toString() {
        return this._uid.toString();
    }

    exportJSON() {
        const json = JSON.stringify({
            name: this._name,
            multiplier: this._multiplier,
            price: this._price,
            earnings: this._earnings,
            level: this._level,
            timing_autoclick: this._timing_autoclick,
        });
        return json;
    }

    importJSON(dataJSON) {
        console.log(dataJSON)
        this._name = dataJSON.name;
        this._name = dataJSON.multiplier;
        this._price = dataJSON.price;
        this._earnings = dataJSON.earnings;
        this._level = dataJSON.level;
        this._timing_autoclick = dataJSON.timing_autoclick;
    }

    increaseLevel(userInstance) {
        if (this._price <= userInstance.getMoney){
            this._multiplier *= 1.5;
            userInstance.loseMoney = this._price;
            this._price *= 1.75;
            this._level += 1;
        }
    }

    click(userInstance) {
        userInstance.earnMoney = this._earnings * this._multiplier;
    }

    startAutoclick(userInstance) {
        if(this._isAutoclicker && this._level == 1){
            setInterval(() => {
                this.click(userInstance);
            }, this._timing_autoclick);
    }}  


    get earnings() {
        return this._earnings * this._multiplier;
    }

    get level() {
        return this._level;
    }

    get price() {
        return this._price;
    }

    get name() {
        return this._name;
    }

    get image(){
        return this._path_image;
    }

    get timing_autoclick() {
        return this._timing_autoclick;
    }
}

export class PortalGun extends Clicker {
    constructor(name, uid, price, earnings, isAutoclicker) {
        super(name, uid, price, earnings, isAutoclicker);
        this._path_image = "src/images/portal_gun.png";
        this.first_bonus_array = {
            "description" : "Réduction du temps entre chaque clicks.",
            "price": 100,
        };
        this.second_bonus_array = {
            "description" : "Amélioration des gains de 25% sur ce personnage.",
            "price" : 300
        };
        this.third_bonus_array = {
            "description" : "Permet de multiplier ses gains totaux de 5%",
            "price" : 800
        };
    }

    first_bonus(userInstance) {
        if (this.first_bonus_array.price <= userInstance.getMoney){
            this._timing_autoclick -= 20;
            userInstance.loseMoney = this.first_bonus_array.price;
        }
    }

    second_bonus(userInstance) {
        if (this.second_bonus_array.price <= userInstance.getMoney){
            this._earnings += 0.25;
            userInstance.loseMoney = this.second_bonus_array.price;
        }
    }

    third_bonus(userInstance) {
        if (this.third_bonus_array.price <= userInstance.getMoney){
            userInstance.addGlobalMultiplier = 0.05;
            userInstance.loseMoney = this.third_bonus_array.price;
        }
    }
}

export class Jerry extends Clicker {
    constructor(name, uid, price, earnings, isAutoclicker) {
        super(name, uid, price, earnings, isAutoclicker);
        this._path_image = "src/images/jerry.png";
        this.first_bonus_array = {
            "description" : "Amélioration des gains de 15% sur ce personnage.",
            "price": 500,
        };
        this.second_bonus_array = {
            "description" : "Réduction du temps entre chaque clique.",
            "price" : 800
        };
        this.third_bonus_array = {
            "description" : "Permet de multiplier ses gains totaux de 4%",
            "price" : 1200
        };
    }

    first_bonus(userInstance) {
        if (this.first_bonus_array.price <= userInstance.getMoney){
            this._earnings += 0.25;
            userInstance.loseMoney = this.first_bonus_array.price;
        }
    }

    second_bonus(userInstance) {
        if (this.second_bonus_array.price <= userInstance.getMoney){
            this._timing_autoclick -= 20;
            userInstance.loseMoney = this.second_bonus_array.price;
        }
    }

    third_bonus(userInstance) {
        if (this.third_bonus_array.price <= userInstance.getMoney){
            userInstance.addGlobalMultiplier = 0.04;
            userInstance.loseMoney = this.third_bonus_array.price;
        }
    }
}

export class Beth extends Clicker {
    constructor(name, uid, price, earnings, isAutoclicker) {
        super(name, uid, price, earnings, isAutoclicker);
        this._path_image = "src/images/beth.png";
        this.first_bonus_array = {
            "description" : "Permet de multiplier ses gains totaux de 6%",
            "price" : 1000
    };
        this.second_bonus_array = {
            "description" : "Amélioration des gains de 20% sur ce personnage.",
            "price" : 1000
        };
        this.third_bonus_array = {
            "description" : "Réduction du temps entre chaque clique.",
            "price" : 1000
    };
    }

    first_bonus(userInstance) {
        if (this.first_bonus_array.price <= userInstance.getMoney){
            userInstance.addGlobalMultiplier = 0.05;
            userInstance.loseMoney = this.first_bonus_array.price;
        }
    }

    second_bonus(userInstance) {
        if (this.second_bonus_array.price <= userInstance.getMoney){
            this._earnings += 0.20;
            userInstance.loseMoney = this.second_bonus_array.price;
        }
    }

    third_bonus(userInstance) {
        if (this.third_bonus_array.price <= userInstance.getMoney){
            this._timing_autoclick -= 40;
            userInstance.loseMoney = this.third_bonus_array.price;
        }
    }
}

export class Summer extends Clicker {
    constructor(name, uid, price, earnings, isAutoclicker) {
        super(name, uid, price, earnings, isAutoclicker);
        this._path_image = "src/images/summer.webp";
        this.first_bonus_array = {
            "description" : "Réduction du temps entre chaque clique.",
            "price": 1000,
        };
        this.second_bonus_array = {
            "description" : "Amélioration des gains de 20% sur ce personnage.",
            "price" : 1600
        };
        this.third_bonus_array = {
            "description" : "Permet de multiplier ses gains totaux de 5%",
            "price" : 2400
        };
    }

   first_bonus(userInstance) {
        if (this.first_bonus_array.price <= userInstance.getMoney){
            this._timing_autoclick -= 20;
            userInstance.loseMoney = this.first_bonus_array.price;
        }
    }

    second_bonus(userInstance) {
        if (this.second_bonus_array.price <= userInstance.getMoney){
            this._earnings += 0.20;
            userInstance.loseMoney = this.second_bonus_array.price;
        }
    }

    third_bonus(userInstance) {
        if (this.third_bonus_array.price <= userInstance.getMoney){
            userInstance._global_multiplier += 0.05;
            userInstance.loseMoney = this.third_bonus_array.price;
        }
    }
}

export class Morty extends Clicker {
    constructor(name, uid, price, earnings, isAutoclicker) {
        super(name, uid, price, earnings, isAutoclicker);
        this._path_image = "src/images/morty.png";
        this.first_bonus_array = {
            "description" : "Permet de multiplier ses gains totaux de 5%",
            "price": 8000,
        };
        this.second_bonus_array = {
            "description" : "Amélioration des gains de 25% sur ce personnage.",
            "price" : 12000
        };
        this.third_bonus_array = {
            "description" : "Réduction du temps entre chaque clique.",
            "price" : 16000
        };
    }

    first_bonus(userInstance) {
        if (this.first_bonus_array.price <= userInstance.getMoney){
            userInstance.addGlobalMultiplier = 0.05;
            userInstance.loseMoney = this.first_bonus_array.price;
        }
    }

    second_bonus(userInstance) {
        if (this.second_bonus_array.price <= userInstance.getMoney){
            this._earnings += 0.25;
            userInstance.loseMoney = this.second_bonus_array.price;
        }
    }

    third_bonus(userInstance) {
        if (this.third_bonus_array.price <= userInstance.getMoney){
            this._timing_autoclick -= 20;
            userInstance.loseMoney = this.third_bthis._timing_autoclick -= 20;onus_array.price;
        }
    }
}

export class Rick extends Clicker {
    constructor(name, uid, price, earnings, isAutoclicker) {
        super(name, uid, price, earnings, isAutoclicker);
        this._path_image = "src/images/rick.png";
        this.first_bonus_array = {
            "description" : "Réduction du temps entre chaque clique.",
            "price": 30000,
        };
        this.second_bonus_array = {
            "description" : "Amélioration des gains de 25% sur ce personnage.",
            "price" : 40000
        };
        this.third_bonus_array = {
            "description" : "Permet de multiplier ses gains totaux de 3%",
            "price" : 55000
        };
    }

    first_bonus(userInstance) {
        if (this.first_bonus_array.price <= userInstance.getMoney){
            this._timing_autoclick -= 20;
            userInstance.loseMoney = this.first_bonus_array.price;
        }
    }

    second_bonus(userInstance) {
        if (this.second_bonus_array.price <= userInstance.getMoney){
            this._earnings += 0.25;
            userInstance.loseMoney = this.second_bonus_array.price;
        }
    }

    third_bonus(userInstance) {
        if (this.third_bonus_array.price <= userInstance.getMoney){
            userInstance.addGlobalMultiplier = 0.3;
            userInstance.loseMoney = this.third_bonus_array.price;
        }
    }
    
}

export class Event {
    static mr_larbin(userInstance){
        userInstance.addEvent();

        const body = document.body;
        
        let nb_images = 0;
        let interval = 1000;
        const max_images = 30;
        let id = 0;

        let isClicked = false;

        const image = document.createElement("img");
        image.src = "src/images/mr_larbin.png";
        image.className = "event";
        image.id = "event"+id;
        image.addEventListener("mouseenter", () => {
            image.style.cursor = "pointer";
        });
        id++;
        
        image.style.left = Math.random() * window.outerWidth + "px";
        image.style.top = Math.random() * window.outerHeight + "px";
        
        document.querySelector("#event").appendChild(image);

        const createImage = (nb_images) => {
            if (nb_images <= max_images) {this._timing_autoclick -= 20;
                const image = document.createElement("img");
                image.src = "src/images/mr_larbin.png";
                image.className = "event";
                image.id = "event"+id;
                
                image.style.left = Math.random() * window.outerWidth + "px";
                image.style.top = Math.random() * window.outerHeight + "px";
                
                document.querySelector("#event").appendChild(image);

                const audio = new Audio('src/audio/mr_larbin.mp3');

                userInstance.earnMoney = userInstance._money * 0.04;
                
                audio.play();

                interval -= 30;
                id++;

                setTimeout(() => {
                    createImage(nb_images+1);
                }, interval);
            } else {
                for(let i = 0; i <= max_images; i++){
                    let image = document.querySelector("#event"+i);
                    image.remove();
                    body.style.backgroundImage = 'url("src/images/fond.jpg")';
                }
            }
        }

        $("#event0").click(() => {
            body.style.backgroundImage = 'url("src/images/dimension_35C.webp")';
            createImage(nb_images);
            isClicked = true;
            userInstance.addEventClicked();
        });
        setInterval(() => {
            if(isClicked == false) {
                $("#event0").remove();
            }
        }, 30000);this._timing_autoclick -= 20;
    }

    static wayne(userInstance) {
        const id = 0;
        userInstance.addEvent();

        let isClicked = false;

        const image = document.createElement("img");
        image.src = "src/images/mr_boite_a_caca.png";
        image.className = "event";
        image.id = "eventwayne";
        
        image.style.left = Math.random() * window.outerWidth + "px";
        image.style.top = Math.random() * window.outerHeight + "px";
        
        document.querySelector("#event").appendChild(image);

        $("#eventwayne").click(() => {
            isClicked = true;
            userInstance.addEventClicked();
            userInstance.addGlobalMultiplier = 3;this._timing_autoclick -= 20;
            setTimeout  (() => {
                userInstance.loseGlobalMultiplier = 3;
                $("#eventwayne").remove();
            }, 30000);
        });

        setTimeout  (() => {
            if(isClicked == false) {
                $("#eventwayne").remove();
            }
        }, 30000);
    }
}