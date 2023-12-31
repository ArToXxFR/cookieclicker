import {User, PortalGun, Jerry, Beth, Summer, Morty, Rick, Event} from "./logical.js";   

window.onload = () => {
    const user = new User("Alfred");
    const portalGun = new PortalGun("Pisto-Portail", "portalgun", 5, 1, false);
    const jerry = new Jerry("Jerry Smith", "jerry", 30, 2, true);  
    const beth = new Beth("Beth Smith", "beth", 150, 8, true);  
    const summer = new Summer("Summer Smith", "summer", 1000, 15, true);  
    const morty = new Morty("Morty Smith", "morty",5000, 30, true);  
    const rick = new Rick("Rick Sanchez", "rick",25000, 80, true);

    const heroes = [
        portalGun,
        jerry,
        beth,
        summer,
        morty,
        rick
    ];

    for (const hero of heroes) {
        let divclicker = document.createElement('div');
        divclicker.className = "color clicker";

        let divitems = document.createElement("div");
        divitems.className = "div-items";

        let divitems_first_part = document.createElement("div");
        divitems_first_part.className = "divitems-first-part";

        let divitems_second_part = document.createElement("div");
        divitems_second_part.className = "divitems-second-part";

        let name = document.createElement("span");
        name.innerHTML = hero.name;
        name.className = "items-name";

        let level = document.createElement("span");
        level.id = hero+"level";
        level.className = "level"

        let price = document.createElement("span");
        price.id = hero+"price";

        let earn = document.createElement("span");
        earn.id = hero+"earn";
        earn.className = "earn currency"

        let button = document.createElement("button");
        button.id = hero;
        button.innerHTML = "Améliorer ↑";
        button.className = "button"


        let tooltip1 = document.createElement("div");
        tooltip1.className = "tooltip";

        let tooltip2 = document.createElement("div");
        tooltip2.className = "tooltip";

        let tooltip3 = document.createElement("div");
        tooltip3.className = "tooltip";

        let bonuses = document.createElement("div");
        bonuses.className = "bonus-box"

        let firstBonus = document.createElement("span");
        firstBonus.innerHTML = "<div class='inside-bonus'>1</div>"
        firstBonus.className = "bonus"
        firstBonus.id = hero + "firstbonus";
        let firstBonusPrice = document.createElement("div");
        firstBonusPrice.className = "bonus-price currency";
        firstBonusPrice.innerHTML = hero.first_bonus_array.price;
        tooltip1.appendChild(firstBonusPrice);

        let firstBonusDesc = document.createElement("span");
        firstBonusDesc.className = "bonus-description";
        firstBonusDesc.innerHTML = hero.first_bonus_array.description;
        tooltip1.appendChild(firstBonusDesc);

        let secondBonus = document.createElement("span");
        secondBonus.innerHTML = "<div class='inside-bonus'>2</div>";
        secondBonus.className = "bonus";
        secondBonus.id = hero + "secondbonus";

        secondBonus.appendChild(tooltip2);

        let secondBonusPrice = document.createElement("div");
        secondBonusPrice.className = "bonus-price currency";
        secondBonusPrice.innerHTML = hero.second_bonus_array.price;
        tooltip2.appendChild(secondBonusPrice);

        let secondBonusDesc = document.createElement("span");
        secondBonusDesc.className = "bonus-description";
        secondBonusDesc.innerHTML = hero.second_bonus_array.description;
        tooltip2.appendChild(secondBonusDesc);

        let thirdBonus = document.createElement("span");
        thirdBonus.innerHTML = "<div class='inside-bonus'>3</div>"
        thirdBonus.className = "bonus"
        thirdBonus.id = hero + "thirdbonus"

        thirdBonus.appendChild(tooltip3);

        let thirdBonusPrice = document.createElement("div");
        thirdBonusPrice.className = "bonus-price currency";
        thirdBonusPrice.innerHTML = hero.third_bonus_array.price;
        tooltip3.appendChild(thirdBonusPrice);

        let thirdBonusDesc = document.createElement("span");
        thirdBonusDesc.className = "bonus-description";
        thirdBonusDesc.innerHTML = hero.third_bonus_array.description;
        tooltip3.appendChild(thirdBonusDesc);



        let divimage = document.createElement("div");
        divimage.className = "size-item-image";
        let image = document.createElement("img");
        image.src = hero.image;
        image.className = "items-img";

        bonuses.appendChild(firstBonus);
        bonuses.appendChild(secondBonus);
        bonuses.appendChild(thirdBonus);

        divimage.appendChild(image);

        divitems_first_part.appendChild(name);
        divitems_first_part.appendChild(bonuses);
        divitems_first_part.appendChild(earn);

        divitems_second_part.appendChild(level);
        button.appendChild(price);
        divitems_second_part.appendChild(button);

        divitems.appendChild(divitems_first_part);
        divitems.appendChild(divitems_second_part);

        divclicker.appendChild(divimage);
        divclicker.appendChild(divitems);

        $("#box-clicker").append(divclicker);
    }

    setInterval(() => {

        // Actualiser l'argent
        $("#money").html(user.getMoney);

        for (const hero of heroes) {
            $("#"+ hero +"level").html("Niveau : " + Math.round(hero.level));
            $("#" + hero + "price").html(Math.round(hero.price));
            $("#" + hero + "earn").html("Revenus : " + Math.round(hero.earnings / (hero.timing_autoclick / 1000)));
        }

        $("#totalmoney").html(user.getTotalMoney);
        $("#totalclicks").html(user.getClick);
        $("#totalevents").html(user.getEvent);
        $("#totaleventsclicked").html(user.getEventClicked);
        $("#multiplier").html(user.getMultiplier);

    }, 10);

    $("#clickEvent").click(() => { portalGun.click(user); user.addClick(); });

    $("#portalgun").click(() => portalGun.increaseLevel(user));
    $("#jerry").click(() => { jerry.increaseLevel(user); jerry.startAutoclick(user); });
    $("#beth").click(() => { beth.increaseLevel(user); beth.startAutoclick(user); });
    $("#summer").click(() => { summer.increaseLevel(user); summer.startAutoclick(user); });
    $("#morty").click(() => { morty.increaseLevel(user); morty.startAutoclick(user); });
    $("#rick").click(() => { rick.increaseLevel(user); rick.startAutoclick(user); });

    // Bonus PortalGun
    $("#portalgunfirstbonus").click(() => { portalGun.first_bonus(user) });
    $("#portalgunsecondbonus").click(() => { portalGun.second_bonus(user) });
    $("#portalgunthirdbonus").click(() => { portalGun.third_bonus(user) });

    // Bonus Jerry
    $("#jerryfirstbonus").click(() => { jerry.first_bonus(user) });
    $("#jerrysecondbonus").click(() => { jerry.second_bonus(user) });
    $("#jerrythirdbonus").click(() => { jerry.third_bonus(user) });

    // Bonus Beth
    $("#bethfirstbonus").click(() => { beth.first_bonus(user) });
    $("#bethsecondbonus").click(() => { beth.second_bonus(user) });
    $("#beththirdbonus").click(() => { beth.third_bonus(user) });

    // Bonus Summer
    $("#summerfirstbonus").click(() => { summer.first_bonus(user) });
    $("#summerecondbonus").click(() => { summer.second_bonus(user) });
    $("#summerthirdbonus").click(() => { summer.third_bonus(user) });

    // Bonus Morty
    $("#mortyfirstbonus").click(() => { morty.first_bonus(user) });
    $("#mortysecondbonus").click(() => { morty.second_bonus(user) });
    $("#mortythirdbonus").click(() => { morty.third_bonus(user) });

    // Bonus Rick
    $("#rickfirstbonus").click(() => { rick.first_bonus(user) });
    $("#ricksecondbonus").click(() => { rick.second_bonus(user) });
    $("#rickthirdbonus").click(() => { rick.third_bonus(user) });


    setInterval(() => {
        const random = Math.floor(Math.random() * 50);
        switch(random) {
            case 1:
                Event.mr_larbin(user);
                break;
            case 2:
                Event.wayne(user);
                break;
        }
    }, 20000);

    let exportObject = {};

    for (const hero of heroes) {
        const jsonhero = hero.exportJSON();
        exportObject[hero] = jsonhero;
    }

    const jsonuser = user.exportJSON();
    exportObject["user"] = jsonuser;

    const fileJSON = JSON.stringify(exportObject);

    const file = new Blob([fileJSON], { type: "application/json"});

    let downloadJSON = URL.createObjectURL(file);

    $("#exportJSON").attr('href', downloadJSON);
    $("#exportJSON").attr('download', "rick-and-morty-clicker-save");

    $("#importJSON").click(() => {
        $("#importForm").css("display", "flex");
    });

    $("#closeButton").click(() => {
        $("#importForm").css("display", "none");
    });

    $("#importButton").click(() => {
        const content = $("#importTextarea").val();
        const importObject = JSON.parse(content);
        for (let hero of heroes) {
            const JSONparsed = JSON.parse(importObject[hero]);
            hero.importJSON(JSONparsed);
        }
        user.importJSON(JSON.parse(importObject["user"]));
        $("#importForm").css("display", "none");
    });
}