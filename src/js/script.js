class User {
    constructor(name) {
        this._money = 0;
        this._name = name;
        this._global_multiplier = 1;
    }

    set earnMoney(setMoney) {
        this._money += setMoney*this._global_multiplier;
    }

    set _loseMoney(setMoney) {
        this._money -= setMoney;
    }

    get _getMoney() {
        return Math.round(this._money);
    }
}

class Clicker {
    constructor(name, price, earnings, isAutoclicker) {
        this._name = name;
        this._multiplier = 1;
        this._price = price;
        this._earnings = earnings;
        this._isAutoclicker = isAutoclicker;
        this._level = 0;
        this._timing_autoclick = 1000;
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
}

class Jerry extends Clicker {
    constructor(name, price, earnings, isAutoclicker) {
        super(name, price, earnings, isAutoclicker);
    }

    // Increase the trust of Jerry
    trusted_helmet() {
        this._timing_autoclick -= 20;
    }

    // Jerry attracts all good things to him
    magnetic_umbrella() {
        this._earnings += 0.25;
    }

    // Increase the global earning by 5%
    lucky_manual(userInstance) {
        userInstance._global_multiplier += 0.05;
    }
}

class Beth extends Clicker {
    constructor(name, price, earnings, isAutoclicker) {
        super(name, price, earnings, isAutoclicker);
    }

    // Beth is more precise on each shot 
    intergalatic_gloves() {
        this._timing_autoclick -= 40;
    }

    // Beth contains a universe in a universe in one box
    microverse_battery() {
        this._earnings += 0.25;
    }

    // Beth is able keep contact with everyone
    communication_ring() {
        userInstance._global_multiplier += 0.05;
    }
}

class Events {
    constructor() {
        this._moment = 0;
        this._name = "";
    }
}

