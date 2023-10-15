class User {
    constructor(name) {
        this._money = 0;
        this._name = name;
        this._global_multiplier = 1;
    }

    set earnMoney(setMoney) {
        this._money += setMoney*this._global_multiplier;
    }

    set loseMoney(setMoney) {
        this._money -= setMoney;
    }

    get getMoney() {
        return Math.round(this._money);
    }
}

class Clicker {
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
        }
    }

    get level() {
        return this._level;
    }

    get price() {
        return this._price;
    }

    get earnings() {
        return this._earnings * this._multiplier;
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

class PortalGun extends Clicker {
    constructor(name, uid, price, earnings, isAutoclicker) {
        super(name, uid, price, earnings, isAutoclicker);
        this._path_image = "src/images/portal_gun.png";
        this.first_bonus_array = {
            "name" : "Trusted Helmet",
            "description" : "...",
            "price": 100,
        };
        this.second_bonus_array = {
            "name" : "Magnetic Umbrella",
            "description" : "...",
            "price" : 300
        };
        this.third_bonus_array = {
            "name" : "Lucky Manual",
            "description" : "...",
            "price" : 800
        };
    }

    // Increase the trust of Jerry
    first_bonus(userInstance) {
        if (this.first_bonus_array.price <= userInstance.getMoney){
            this._timing_autoclick -= 20;
            userInstance.loseMoney = this.first_bonus_array.price;
        }
    }

    // Jerry attracts all good things to him
    second_bonus(userInstance) {
        if (this.second_bonus_array.price <= userInstance.getMoney){
            this._earnings += 0.25;
            userInstance.loseMoney = this.first_bonus_array.price;
        }
    }

    // Increase the global earning by 5%
    third_bonus(userInstance) {
        if (this.third_bonus_array.price <= userInstance.getMoney){
            userInstance._global_multiplier += 0.05;
            userInstance.loseMoney = this.first_bonus_array.price;
        }
    }
}

class Jerry extends Clicker {
    constructor(name, uid, price, earnings, isAutoclicker) {
        super(name, uid, price, earnings, isAutoclicker);
        this._path_image = "src/images/jerry.png";
        this.first_bonus_array = {
            "name" : "Trusted Helmet",
            "description" : "...",
            "price": 100,
        };
        this.second_bonus_array = {
            "name" : "Magnetic Umbrella",
            "description" : "...",
            "price" : 300
        };
        this.third_bonus_array = {
            "name" : "Lucky Manual",
            "description" : "...",
            "price" : 800
        };
    }

    // Increase the trust of Jerry
    first_bonus(userInstance) {
        if (this.first_bonus_array.price <= userInstance.getMoney){
            this._timing_autoclick -= 20;
            userInstance.loseMoney = this.first_bonus_array.price;
        }
    }

    // Jerry attracts all good things to him
    second_bonus(userInstance) {
        if (this.second_bonus_array.price <= userInstance.getMoney){
            this._earnings += 0.25;
            userInstance.loseMoney = this.first_bonus_array.price;
        }
    }

    // Increase the global earning by 5%
    third_bonus(userInstance) {
        if (this.third_bonus_array.price <= userInstance.getMoney){
            userInstance._global_multiplier += 0.05;
            userInstance.loseMoney = this.first_bonus_array.price;
        }
    }
}

class Beth extends Clicker {
    constructor(name, uid, price, earnings, isAutoclicker) {
        super(name, uid, price, earnings, isAutoclicker);
        this._path_image = "src/images/beth.png";
        this.first_bonus_array = {
            "name" : "Intergalatic Gloves",
            "description" : "...",
            "price" : 1000
    };
        this.second_bonus_array = {
            "name" : "Microverse Battery",
            "description" : "...",
            "price" : 1000
        };
        this.third_bonus_array = {
            "name" : "Communication Ring",
            "description" : "...",
            "price" : 1000
    };
    }

    // Beth is more precise on each shot 
    first_bonus(userInstance) {
        if (this.first_bonus_array.price <= userInstance.getMoney){
            this._timing_autoclick -= 40;
            userInstance.loseMoney = this.first_bonus_array.price;
        }
    }

    // Beth contains a universe in a universe in one box
    second_bonus(userInstance) {
        if (this.second_bonus_array.price <= userInstance.getMoney){
            this._earnings += 0.25;
            userInstance.loseMoney = this.first_bonus_array.price;
        }
    }

    // Beth is able keep contact with everyone
    third_bonus(userInstance) {
        if (this.third_bonus_array.price <= userInstance.getMoney){
            userInstance._global_multiplier += 0.05;
            userInstance.loseMoney = this.first_bonus_array.price;
        }
    }
}

class Summer extends Clicker {
    constructor(name, uid, price, earnings, isAutoclicker) {
        super(name, uid, price, earnings, isAutoclicker);
        this._path_image = "src/images/summer.webp";
        this.first_bonus_array = {
            "name" : "Trusted Helmet",
            "description" : "...",
            "price": 100,
        };
        this.second_bonus_array = {
            "name" : "Magnetic Umbrella",
            "description" : "...",
            "price" : 300
        };
        this.third_bonus_array = {
            "name" : "Lucky Manual",
            "description" : "...",
            "price" : 800
        };
    }

   // Increase the trust of Jerry
   first_bonus(userInstance) {
        if (this.first_bonus_array.price <= userInstance.getMoney){
            this._timing_autoclick -= 20;
            userInstance.loseMoney = this.first_bonus_array.price;
        }
    }

    // Jerry attracts all good things to him
    second_bonus(userInstance) {
        if (this.second_bonus_array.price <= userInstance.getMoney){
            this._earnings += 0.25;
            userInstance.loseMoney = this.first_bonus_array.price;
        }
    }

    // Increase the global earning by 5%
    third_bonus(userInstance) {
        if (this.third_bonus_array.price <= userInstance.getMoney){
            userInstance._global_multiplier += 0.05;
            userInstance.loseMoney = this.first_bonus_array.price;
        }
    }
}

class Morty extends Clicker {
    constructor(name, uid, price, earnings, isAutoclicker) {
        super(name, uid, price, earnings, isAutoclicker);
        this._path_image = "src/images/morty.png";
        this.first_bonus_array = {
            "name" : "Trusted Helmet",
            "description" : "...",
            "price": 100,
        };
        this.second_bonus_array = {
            "name" : "Magnetic Umbrella",
            "description" : "...",
            "price" : 300
        };
        this.third_bonus_array = {
            "name" : "Lucky Manual",
            "description" : "...",
            "price" : 800
        };
    }

    // Increase the trust of Jerry
    first_bonus(userInstance) {
        if (this.first_bonus_array.price <= userInstance.getMoney){
            this._timing_autoclick -= 20;
            userInstance.loseMoney = this.first_bonus_array.price;
        }
    }

    // Jerry attracts all good things to him
    second_bonus(userInstance) {
        if (this.second_bonus_array.price <= userInstance.getMoney){
            this._earnings += 0.25;
            userInstance.loseMoney = this.first_bonus_array.price;
        }
    }

    // Increase the global earning by 5%
    third_bonus(userInstance) {
        if (this.third_bonus_array.price <= userInstance.getMoney){
            userInstance._global_multiplier += 0.05;
            userInstance.loseMoney = this.first_bonus_array.price;
        }
    }
}

class Rick extends Clicker {
    constructor(name, uid, price, earnings, isAutoclicker) {
        super(name, uid, price, earnings, isAutoclicker);
        this._path_image = "src/images/rick.png";
        this.first_bonus_array = {
            "name" : "Trusted Helmet",
            "description" : "...",
            "price": 100,
        };
        this.second_bonus_array = {
            "name" : "Magnetic Umbrella",
            "description" : "...",
            "price" : 300
        };
        this.third_bonus_array = {
            "name" : "Lucky Manual",
            "description" : "...",
            "price" : 800
        };
    }

    // Increase the trust of Jerry
    first_bonus(userInstance) {
        if (this.first_bonus_array.price <= userInstance.getMoney){
            this._timing_autoclick -= 20;
            userInstance.loseMoney = this.first_bonus_array.price;
        }
    }

    // Jerry attracts all good things to him
    second_bonus(userInstance) {
        if (this.second_bonus_array.price <= userInstance.getMoney){
            this._earnings += 0.25;
            userInstance.loseMoney = this.first_bonus_array.price;
        }
    }

    // Increase the global earning by 5%
    third_bonus(userInstance) {
        if (this.third_bonus_array.price <= userInstance.getMoney){
            userInstance._global_multiplier += 0.05;
            userInstance.loseMoney = this.first_bonus_array.price;
        }
    }
}

class Event {
    static mr_larbin(userInstance) {
        const body = document.body;
        
        let nb_images = 0;
        let interval = 1000;
        const max_images = 30;
        let id = 0;

        let isClicked = false;

        const image = document.createElement("img");
        image.src = "src/images/mr_larbin.png";
        image.className = "mr-larbin";
        image.id = "event"+id;
        image.addEventListener("mouseenter", () => {
            image.style.cursor = "pointer";
        });
        id++;
        
        image.style.left = Math.random() * window.outerWidth + "px";
        image.style.top = Math.random() * window.outerHeight + "px";
        
        document.querySelector("#event").appendChild(image);

        const createImage = (nb_images) => {
            if (nb_images <= max_images) {
                const image = document.createElement("img");
                image.src = "src/images/mr_larbin.png";
                image.className = "mr-larbin";
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
        });
        setInterval(() => {
            if(isClicked == false) {
                $("#event0").remove();
            }
        }, 30000);
    }
}