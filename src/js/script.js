class User {
    constructor(name) {
        this._money = 0;
        this._name = name;
    }

    set earnMoney(setMoney) {
        this._money += setMoney;
    }

    set loseMoney(setMoney) {
        this._money -= setMoney;
    }

    get getMoney() {
        return Math.round(this._money).toLocaleString();
    }
}

class Clicker {
    constructor(name, price, earnings, isAutoclicker) {
        this._name = name;
        this._multiplier = 1;
        this._price = price;
        this._earnings = earnings;
        this._isAutoclicker = isAutoclicker;
        this._level = 1;
    }
 
    increaseLevel(userInstance) {
        if (this._price <= userInstance.getMoney){
            this._multiplier *= 1.5;
            userInstance.loseMoney = this._price;
            console.log(this._price);
            console.log(userInstance.getMoney);
            this._price *= 1.75;
            this._level += 1;
        }
    }

    click(userInstance) {
        userInstance.earnMoney = this._earnings * this._multiplier;
    }

    startAutoclick() {
        if(this._isAutoclicker){
            setInterval(function(){
                this.click();
            }, 1000);
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


