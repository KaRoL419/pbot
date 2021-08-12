
var skins10 = [
    "AK-47 | Frontside Misty",
    "AK-47 | Redline",
    "AK-47 | Phantom Disruptor",
    "AK-47 | Orbit Mk01",
    "AK-47 | Point Disarray",
    "AK-47 | Asiimov",
    "AK-47 | Vulcan",
    "AK-47 | Fuel Injector",
    "AK-47 | The Empress",
    "AK-47 | Neon Revolution",
    "AK-47 | Neon Rider",
    "AK-47 | Bloodsport",
    "AK-47 | Aquamarine Revenge",
    "AK-47 | Legion of Anubis",
    "AK-47 | Wasteland Rebel",
    "AK-47 | Jaguar",
    "Glock-18 | Bullet Queen",
    "SSG 08 | Blood in the Water",
    "AWP | Wildfire",
    "AWP | Containment Breach",
    "AWP | Neo-Noir",
    "AWP | Asiimov",
    "AWP | Hyper Beast",
    "AWP | Redline",
    "AWP | Electric Hive",
    "M4A4 | Asiimov",
    "M4A4 | Hellfire",
    "M4A4 | Neo-Noir",
    "M4A4 | Buzz Kill",
    "M4A4 | The Emperor",
    "M4A4 | (Dragon King)",
    "M4A4 | Desolate Space",,
    "M4A1-S | Cyrex",
    "M4A1-S | Mecha Industries",
    "M4A1-S | Chanticos Fire",
    "M4A1-S | Hyper Beast",
    "M4A1-S | Master Piece",
    "USP-S | Kill Confirmed",
    "USP-S | Orion",
    "USP-S | Neo-Noir",
    "(Holo) | 2020 RMR",
    "(Foil) | 2020 RMR"
];

var knives = [
    "Knife",
    "Shadow Daggers",
    "Karambit",
    "Bayonet",
    "Gloves",
    "Hand Wraps",
    "Natus Vincere (Gold) | 2020 RMR",
    "TYLOO (Gold) | 2020 RMR",
    "FaZe (Gold) | 2020 RMR"
];

var stickers = [
    "2020 RMR"
];

var skins2 = [
    {name: "Fracture Case", price: 250},
    {name: "Clutch Case", price: 270},
//    {name: "Spectrum Case", price: 300},
    {name: "Gamma 2 Case", price: 240},
    {name: "Gamma Case", price: 350},
    {name: "Spectrum 2 Case", price: 300},
    {name: "Chroma 2 Case", price: 170},
    {name: "CS20 Case", price: 110},
    {name: "Sticker Capsule 2", price: 10000},
    {name: "Sticker Capsule 1", price: 2700},
    {name: "Snakebite Case", price: 1000}
];

var skinsexception = [
    "Sealed Graffiti",
    "Navaja Knife | Tiger Tooth (Minimal Wear)",
    "Stiletto Knife | Boreal Forest (Field-Tested)",
    "Gut Knife | Doppler",
    "Gut Knife | Lore",
    "Gut Knife | Gamma Doppler",
    "Gut Knife | Slaughter (Factory New)",
    "Bowie Knife | Scorched (Field-Tested)",
    "2020 RMR Contenders",
    "2020 RMR Challengers",
    "2020 RMR Legends"
];


var botlng = [];
var polygonskins = [];
var steamskins = [];
var buyhistory = [];
var buyhistorytemp = [];
var activebuttons = [];
var buyprices = [];
var skinsstatus = false;
var histstatus = false;
var activetrade = false;
var activebot = false;
var withdrawskins = false;
var withdrawskins100 = false;
var withdrawknifes = false;
var withdrawstickers = false;
var goodskinsvalue = 0;
var timerId;
var timerId3;
var nickname;
var link = 'withdraw';
var loginerror = false;
var audio = {};
audio["coin"] = new Audio();
audio["coin"].src = "https://www.soundjay.com/misc/sounds/coins-to-table-2.mp3";
audio["connection-lost"] = new Audio();
audio["connection-lost"].src = "https://www.myinstants.com/media/sounds/connectlost-ts.mp3";
audio["coin2"] = new Audio();
audio["coin2"].src = "https://www.fesliyanstudios.com/play-mp3/6292";
audio["notification"] = new Audio();
audio["notification"].src = "https://zvukogram.com/mp3/895/zvuk-uvedomleniya-o-podklyuchenii-8680.mp3";
audio["alert"] = new Audio();
audio["alert"].src = "https://www.zapsplat.com/wp-content/uploads/2015/sound-effects-41945/zapsplat_emergency_bell_alarm_fire_or_burglar_ring_001_44041.mp3";
audio["knife"] = new Audio();
audio["knife"].src = "https://www.zapsplat.com/wp-content/uploads/2015/sound-effects-55112/zapsplat_warfare_knifes_medium_x2_scrape_blades_together_010_61241.mp3";
//var bal = 0;

function checkitems(data) {
    //var newskins = [false, false, false, false];
    var exception = false;
    goodskinsvalue = 0;
    for (var i = data.items.length - 1; i >= 0; i--) {
        /*
        skins.forEach(function(item) {
            if (data.items[i].name.includes(item)) {
                //newskins[i] = true;
                console.log('..............success '+data.items[i].name);
                setTimeout(border, 300, data.id, i, "#D4594C");
                audio["coin"].play();
                goodskinsvalue += data.items[i].price;
                //if (data.items.length == 1 || data.items[i].name == "Berlin 2019 Legends (Holo-Foil)" || data.items[i].name == "AUG | Death by Puppy (Field-Tested)" || data.items[i].name == "AUG | Death by Puppy (Minimal Wear)" || data.items[i].name == "AUG | Death by Puppy (Factory New)" || data.items[i].name == "Death Sentence Pin") {withdraw(data.id);}
            }
        });
        */
        
        if (withdrawskins) {
            skinsexception.forEach(function(item) {
                if (data.items[i].name.includes(item)) {
                    exception = true;
                    //newskins[i] = true;
                    //if (data.items.length == 1) {withdraw(data.id);}
                }
            });
            skins10.forEach(function(item) {
                if (data.items[i].name.includes(item)) {
                    if (!exception && data.items[i].price > 50000 && data.items[i].price < 100000 && data.items[i].add_price == "0") {
                        console.log('**************success '+data.items[i].name);
                        setTimeout(border, 300, data.id, i, "#5EB76E");
                        audio["notification"].play();
                        goodskinsvalue += data.items[i].price;
                    }
                }
            });
        }
        if (withdrawknifes) {
            knives.forEach(function(item) {
                if (data.items[i].name.includes(item)) {
                    if (!exception && data.items[i].price < 200000 && data.items[i].add_price == "0") {
                        console.log('**************success '+data.items[i].name);
                        setTimeout(border, 300, data.id, i, "#5EB76E");
                        audio["knife"].play();
                        goodskinsvalue += data.items[i].price;
                    }
                }
            });
        }
        if (withdrawskins100) {
            skins2.forEach(function(item) {
                if (data.items[i].name == item.name && data.items[i].price <= item.price && data.items[i].add_price == "0") {
                    console.log('..............success '+data.items[i].name);
                    setTimeout(border, 300, data.id, i, "#D4594C");
                    //audio["coin"].play();
                    goodskinsvalue += data.items[i].price;
                }
            });
        }
        if (withdrawstickers) {
            stickers.forEach(function(item) {
                if (data.items[i].name.includes(item)) {
                    if (!exception && data.items[i].price > 200 && data.items[i].add_price == "0") {
                        console.log('**************success '+data.items[i].name);
                        setTimeout(border, 300, data.id, i, "#D4594C");
                        goodskinsvalue += data.items[i].price;
                    }
                }
            });
        }
        //if (data.items[i].price > 2000 && data.items[i].price < 100000 && data.items[i].add_price == "0") {}
        console.log(data.items[i].name+' '+data.items[i].price);
        //addskin(data.items[i].name.replace(/  /g,' '), data.items[i].price, data.id, i);
        var j = i + 1;
        var image;
        $("#tr"+data.id+" .item_"+ j +' .checkprice').remove();
        image = $("#tr"+data.id+" .item_"+ j +' .inventory_item_pic img').attr('src');
        $("#tr"+data.id+" .item_"+ j +' span').first().after( '<div class="checkprice" onclick="checkprice(\''+data.items[i].name+'\', \''+image+'\')"><i class="fas fa-info-circle"></i></div>');
    }
    $('#tr'+data.id+' .bank_item_button').attr('onclick', 'withdraw('+data.id+');');
    if (data.amount - goodskinsvalue < goodskinsvalue / 5) {withdraw(data.id);};
    //if (data.items.length == 2 && newskins[0] && newskins[1]) {withdraw(data.id);};
    //if (data.items.length == 3 && newskins[0] && newskins[1] && newskins[2]) {withdraw(data.id);};
    //if (data.items.length == 4 && newskins[0] && newskins[1] && newskins[2] && newskins[3]) {withdraw(data.id);};
};

function activewithdraw() {
    activetrade = false;
}

//setTimeout(activewithdraw, 660000);

function border(id, i, color) {
    i++;
    $("#tr"+id+" .item_"+i).css( "box-shadow", "inset 0px 0px 0px 5px "+color );
}

function checkprice(name, image) {
    name = name.replace('StatTrak', 'StatTrak™');
    name = name.replace(' Phase 1', '').replace(' Phase 2', '').replace(' Phase 3', '').replace(' Phase 4', '');
    $.get("https://steamcommunity.com/market/priceoverview/?currency=1&country=us&appid=730&market_hash_name="+name+"&format=json", 
    function(data) 
    {
        Swal.fire({
          imageUrl: image,
          imageHeight: 200,
          title: '<span>' + name + ' <a href="https://steamcommunity.com/market/listings/730/'+name+'" target="_blak"><i class="fab fa-steam"></i></a></span>',
          html: '<span>Lowest price: '+data.lowest_price+'</span><br><span>Volume: '+data.volume+'</span><br><span>Median price: '+data.median_price+'</span>'
        })
    })
    .fail(function(data) {
        Swal.fire({
          imageUrl: image,
          imageHeight: 200,
          title: '<span>' + name + ' <a href="https://steamcommunity.com/market/listings/730/'+name+'" target="_blak"><i class="fab fa-steam"></i></a></span>',
          html: '<span>'+data.statusText+'</span>'
        })
    })
}

function P2Psettings() {
    $("#P2Psettings").toggle(1000);
    $("#settbtn").toggleClass("active");
}

function P2Pskins() {
    if (!skinsstatus) {
        P2Ploadskins(polygonskins);
        skinsstatus = true;
    }
    $(".skins#P2Pskins-wrapper").toggle(1000);
    $("#skinbtn").toggleClass("active");
    skinsstatus = false;
}

function P2Ploadskins(arr) {
    $('.skins #P2Pskins-tbody').html('');
    var i=0;
    arr.forEach(function(item) {$('.skins #P2Pskins-tbody').append('<tr><td>'+i+'</td><td>'+item.name+'</td><td>'+item.price+'</td><td>'+item.steamprice+'</td><td>'+item.percent+'</td><td>'+item.date+'</td>'); i++});
    $(".loading").toggle();
}

function sortskins() {
    var sortedskins = polygonskins.slice();
    function sortbypercent(arr) {
      arr.sort((a, b) => a.percent > b.percent ? 1 : -1);
    }
    sortbypercent(sortedskins);
    P2Ploadskins(sortedskins);
}

function P2Phistory() {
    if (!histstatus) {
        P2Ploadhistory(buyhistory);
        histstatus = true;
    }
    $(".history#P2Pskins-wrapper").toggle(1000);
    $("#histbtn").toggleClass("active");
    histstatus = false;
}

    var dateh;
    var totalh = 0;
function P2Ploadhistory(arr) {
    $('.history #P2Pskins-tbody').html('');
    var i = 0;
    var j = 0;
    var length = arr.length - 1
    dateh = arr[0].date;
    arr.forEach(function(item) {
        if (item.date == dateh) {totalh += item.price}
            else {
                $('.history #P2Pskins-tbody').append('<tr class="accordion"><td></td><td class="viewmore" onclick="$(\'.panel'+j+'\').toggle(300); $(\'.panel'+j+'\').last().next().toggleClass(\'active\');">'+dateh+' ^</td><td>total: '+totalh+'</td><td class="deletehistory" onclick="deletehistory(\''+dateh+'\');">Delete</td>');
                dateh = item.date;
                totalh = item.price;
                j++;
            }
        $('.history #P2Pskins-tbody').append('<tr class="panel panel'+j+'" style="display: none"><td>'+i+'</td><td>'+item.name+'</td><td>'+item.price+'</td><td>'+item.date+'</td>');
        i++;
        if (i == arr.length) {
            $('.history #P2Pskins-tbody').append('<tr class="accordion"><td></td><td class="viewmore" onclick="$(\'.panel'+j+'\').toggle(300); $(\'.panel'+j+'\').last().next().toggleClass(\'active\');">'+dateh+' ^</td><td>total: '+totalh+'</td><td class="deletehistory" onclick="deletehistory();">Delete</td>');
        }
    });
    $(".loading").toggle();
    var lastweek = new Date() -7*60*60*1000 -8*24*60*60*1000;
    lastweek = new Date(lastweek).toJSON().slice(0,10).replace(/-/g,'.');
    $('.accordion td:contains('+lastweek+')').parent().children().css({
      "background-color": "black",
      "color": "white"
    });
}

function deletehistory(date) {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#5EB76E',
      cancelButtonColor: '#D4594C',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Your history has been deleted',
          showConfirmButton: false,
          timer: 1000
        })
        for (var i = 0; i < buyhistory.length; i++) {
            if (buyhistory[i].date == date) {
                buyhistory.splice(i, 1);
                i--;
            }
        }
        $('td:contains('+date+')').parent().remove();
        localStorage.setItem('buyhistory', JSON.stringify(buyhistory));
      }
    })
}


function addskin(sname, sprice, id, i) {
    var today = new Date().toJSON().slice(0,10).replace(/-/g,'.');
    var coincidence = false;
    if(sname[0] == ' ') sname = sname.substring(1, sname.length);
    polygonskins.forEach(function(item) {
        if (item.name == sname) {
            item.price = sprice;
            item.percent = sprice/(item.steamprice * 0.87);
            item.percent = item.percent.toString().substring(0, 4);
            item.percent = +item.percent;
            if (item.percent<0.5) {
                audio["coin2"].play();
                console.log('+++++++++++'+item.name+' '+item.price+' '+item.steamprice);
                setTimeout(border, 200, id, i, "#8e8eea");
            }
            item.date = today;
            i++;
            $("#tr"+id+" .item_"+i+" .inventory_item_cost").after('<span class="inventory_item_cost iic">'+item.steamprice+'</span>');
            localStorage.setItem('polygonskins', JSON.stringify(polygonskins));
            coincidence = true;
            return;
        };
    });
    if (!coincidence) {
        var stprice;
        var spercent;
        steamskins.forEach(function(item2){
            if (item2.name == sname) stprice = item2.price;
            return;
        });
        spercent = sprice/(stprice*0.87);
        spercent = spercent.toString().substring(0, 4);
        spercent = +spercent;
        if (spercent<0.5) {
            audio["coin2"].play();
            console.log('+++++++++++'+sname+' '+sprice+' '+stprice);
            setTimeout(border, 200, id, i, "#8e8eea");
        }
        i++;
        $("#tr"+id+" .item_"+i+" .inventory_item_cost").after('<span class="inventory_item_cost iic">'+stprice+'</span>');
        polygonskins.push({"name":sname,"price":sprice,"steamprice":stprice,"percent":spercent,"date":today});
        localStorage.setItem('polygonskins', JSON.stringify(polygonskins));
    }
};

function opentrade(data) {
    window.open('https://steamcommunity.com/tradeoffer/' + data.offerid);
}

function confirmbuttoncomplete() {
    buyhistorytemp.forEach(function(item) {
        if (item.price > 500) {
            buyhistory.push(item);
            $.ajax({
                  url: "https://polygonbot.herokuapp.com/bought",
                  type: 'post',
                  data: {
                      'msg': item.name,
                      'nick': item.nick,
                      'price': item.price,
                      'date': item.date
                  }
                });
        }
    });
    localStorage.setItem('buyhistory', JSON.stringify(buyhistory));
    buyhistorytemp = [];
    $('#complete_trade .p2p_confirm').click();
    //activetrade = false;
}

function confirmbuttoncanceled() {
    buyhistorytemp = [];
    $('#trade_canceled .p2p_confirm').click();
    //activetrade = false;
}

function add10() {
    $("#deposit_confrim_window .inventory_item").attr('add-price', 12);
    for (var i = 0; i < $("#deposit_confrim_window .inventory_item .inventory_item_cost").length; i++) {
        var item = $("#deposit_confrim_window .inventory_item .inventory_item_cost")[i];
        var price = +$("#deposit_confrim_window .inventory_item .inventory_item_cost")[i].innerText;
        price = parseInt(price + price / 100 * 12);
        price = price + ' (+12%)';
        $(item).html(price);
    }
    calculate_deposit_price();
    $('.add10').remove();
}

function loadbuyprices() {
    $('.Not.tradable').remove();
    $('.inventory_item_cost.custom').remove();
    var aa = $('.inventory_item');
    for(i=0; i<aa.length; i++) {
        $(aa[i]).append('<span class="inventory_item_cost custom" onclick="setprice(\''+$(aa[i]).attr('item-id')+'\')">$</span>')
    }
    buyprices.forEach(function(item) {
        if (item.itemid != undefined) {
            $('[item-id='+item.itemid+'] .inventory_item_cost.custom').text(item.price);
        }
    });
}

async function setprice(itemids) {
    var { value: stprice } = await Swal.fire({
      title: 'Write the bought price',
      input: 'text',
      showCancelButton: true,
      inputValidator: (value) => {
        if (!value) {
          return 'You need to write something!'
        }
      }
    })

    if (stprice) {
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Your price has been saved',
          showConfirmButton: false,
          timer: 1000
        })
      buyprices.push({itemid:itemids, price:stprice});
      $('[item-id='+itemids+'] .inventory_item_cost.custom').text(stprice);
      localStorage.setItem('buyprices', JSON.stringify(buyprices));
    }
}

function reloadpage() {
    location.reload();
    audio["connection-lost"].play();
}

function remove() {
    $('.bank_item_unit').remove();
}

function unexpected() {
    if($('.opened.window_warning_wide p').text().includes('Unexpected token < in JSON at position 0')) reloadpage();
}

function confirmerror() {
    if ($('.window.window_status.window_error.window_warning_wide.opened button').length > 0) {
        if ($('.opened.window_error.window_warning_wide').text() == "ErrorSession expired. Please log in and try again.OK" && loginerror == false) {
            $('.window.window_status.opened.window_notify.window_warning_wide .cancel').click()
            $.ajax({
                  url: "https://polygonbot.herokuapp.com/message",
                  type: 'post',
                  data: {
                      'nick': localStorage.nickname,
                      'msg': 'Log In'
                  }
                });
            loginerror = true;
        }
        else $('.window.window_status.window_error.window_warning_wide.opened button').click();
        if ($('p:contains("Error connecting to p2p server. Please reload the page")').length > 0) {reloadpage()};
    }
    if ($('button:contains("No, thanks")').length > 0) {$('button:contains("No, thanks")').click()};
    if($('.active_p2p_exchange.opened').length == 1 && window.location.href == "https://csgopolygon.gg/P2PWithdraw.php") $('.active_p2p_exchange.opened .p2p_confirm').click();
}

function togglewithdrawskins() {
    if (withdrawskins) {
        withdrawskins = false;
    }
    else {
        withdrawskins = true;
    }
    $(".payments_category.custom.wskin").toggleClass("activated");
    activebuttons[0] = withdrawskins;
    localStorage.setItem('activebuttons', JSON.stringify(activebuttons));
}

function togglewithdrawskins100() {
    if (withdrawskins100) {
        withdrawskins100 = false;
    }
    else {
        withdrawskins100 = true;
    }
    $(".payments_category.custom.w100").toggleClass("activated");
    activebuttons[1] = withdrawskins100;
    localStorage.setItem('activebuttons', JSON.stringify(activebuttons));
}

function togglewithdrawknifes() {
    if (withdrawknifes) {
        withdrawknifes = false;
    }
    else {
        withdrawknifes = true;
    }
    $(".payments_category.custom.wknifes").toggleClass("activated");
    activebuttons[2] = withdrawknifes;
    localStorage.setItem('activebuttons', JSON.stringify(activebuttons));
}

function togglewithdrawstickers() {
    if (withdrawstickers) {
        withdrawstickers = false;
    }
    else {
        withdrawstickers = true;
    }
    $(".payments_category.custom.wstickers").toggleClass("activated");
    activebuttons[3] = withdrawstickers;
    localStorage.setItem('activebuttons', JSON.stringify(activebuttons));
}

function turnon() {
    if (!activebot) {
        if($('.active_p2p_exchange.opened').length == 1) $('.active_p2p_exchange.opened .p2p_confirm').click();
        //timerId = setInterval(unexpected, 3000);
        timerId2 = setInterval(confirmerror, 3000);
        timerId3 = setInterval(function() {
            $.ajax({
              url: "https://polygonbot.herokuapp.com/raport",
              type: 'post',
              data: {
                  'nick': nickname,
                  'link': link
              }
            });
        }, 120000 );
        if ($('.user .details a').length > 0) {
            nickname = $('.user .details a').text();
            localStorage.nickname = nickname;
        }
        if(window.location.href == "https://csgopolygon.gg/P2PWithdraw.php" || window.location.href == "https://csgopolygon.gg/P2PWithdraw.php#") {
            SOCKET.on('new_trade', function(data) { checkitems(data) });
            SOCKET.on('trade_sent_receiver', function(data) { opentrade(data) });
            SOCKET.on('trade_complete_receiver', function() { setTimeout(confirmbuttoncomplete, 100) });
            SOCKET.on('trade_canceled_receiver', function() { setTimeout(confirmbuttoncanceled, 100) });
            SOCKET.on('trade_canceled_sender', function() { setTimeout(confirmbuttoncanceled, 100) });
            SOCKET.on('connect_error', function() {reloadpage()});
            SOCKET.on('connect_timeout', function() {reloadpage()});
            SOCKET.on('disconnect', function() {reloadpage()});

            showWithdraw = function(data) {
                var today = new Date() -7*60*60*1000;
                today = new Date(today).toJSON().slice(0,10).replace(/-/g,'.');
                $('#withdraw_sent').find('.total').html(data.amount);
                $('#withdraw_sent').find('.user-img').attr('src', data.data_sender.avatar);
                $('#withdraw_sent').find('.user-name').html(data.name_sender);
                $('#withdraw_sent').find('.user-link').attr('href', 'https://steamcommunity.com/profiles/' + data.data_sender.steamid);
                $('#withdraw_sent').find('.window_edit_items').html('');
                if (data.name_sender == 'GLB' || data.data_sender.steamid == '76561198213972163') {
                    togglewithdrawskins();
                    togglewithdrawskins100();
                    window.open('https://xn--80affa3aj0al.xn--80asehdb/#/im?p=@KaRoLMD&name=GLB!!!!!');
                    //window.open('https://xn--80affa3aj0al.xn--80asehdb/#/im?p=u1243926099_7865724337195838746&name=GLB!!!!!');
                }
                var items = data.items;

                for (var i = 0; i < items.length; i++) {

                    if (items[i] != undefined) {

                        var item = items[i];

                        var img = item_img.format(item.img, 120, 90);
                        var nameData = parseName(item.name);
                        var prefix = nameData.statTrak ? 'StatTrak' : '';
                        var weapon = nameData.weapon;
                        var skin = nameData.skin ? nameData.skin : '';
                        var wear = nameData.wear ? nameData.wear : '';
                        var price = parseInt(item.price + item.price / 100 * item.add_price);
                        if (item.add_price > 0) price = price + ' (+' + item.add_price + '%)';

                        var item_html = item_confirm_tmp.format(price, item.assetid, img, prefix, weapon, skin, wear, '', price);


                        $('#withdraw_sent').find('.window_edit_items').append($(item_html));
                        //alert('sdfsdf');
                        console.log("name: "+prefix + ' ' + weapon + ' ' + skin + ' ' + wear + ' price: ' + price + " date: "+today);
                        console.log(item.name)
                        buyhistorytemp.push({"nick": nickname, "name": item.name, "price": price, "date": today});
                    }

                }

                withdraw_end = data.time;
                var timer = $('#withdraw_sent').find('.timer');
                withdraw_interval = setInterval(function() {
                    updateClock(istatus, withdraw_end, timer, withdraw_interval, 'withdraw')
                }, 1000);

                modal('#withdraw_sent', true);

            }
        }
        if(window.location.href == "https://csgopolygon.gg/P2PDeposit.php" || window.location.href == "https://csgopolygon.gg/P2PDeposit.php#") {
            SOCKET.on('trade_accepted', function(data) {
                if ($('.sound.off').length == 0) audio["alert"].play();
                if ($('.send.ready_to_trade').length != 0) {
                    //window.open('https://xn--80affa3aj0al.xn--80asehdb/#/im?p=@KaRoLMD&name='+data.items[0].name);
                    //window.open('https://xn--80affa3aj0al.xn--80asehdb/#/im?p=u1243926099_7865724337195838746&name='+data.items[0].name)
                    $('.send.ready_to_trade').click();
                    
                    var items = data.items;
                    for (var i = 0; i < items.length; i++) {
                        if (items[i] != undefined) {
                            var item = items[i];
                            var price = parseInt(item.price + item.price / 100 * item.add_price);
                            if (item.add_price > 0) price = price + ' (+' + item.add_price + '%)';
                            $.ajax({
                              url: "https://polygonbot.herokuapp.com/sm",
                              type: 'post',
                              data: {
                                  'msg': item.name,
                                  'nick': nickname,
                                  'price': price
                              }
                            });
                        }
                    }
                    
                    
                }
                
            });
            SOCKET.on('connect_error', function() {reloadpage()});
            SOCKET.on('connect_timeout', function() {reloadpage()});
            SOCKET.on('disconnect', function() {reloadpage()});
            link = 'deposit';
            loadbuyprices();
        }
        if (activebuttons[0]) togglewithdrawskins();
        if (activebuttons[1]) togglewithdrawskins100();
        if (activebuttons[2]) togglewithdrawknifes();
        if (activebuttons[3]) togglewithdrawstickers();
        $('.turnon').remove();
        //$("#settbtn").toggleClass("active");
        activebot = true;

        
    }
}

function addblocksP2P() {
    
    clearInterval(timerId);

    if (LANG_SELECT == 'ru') {
        botlng['settings'] = 'Настройки бота';
        botlng['prices'] = 'База цен';
        botlng['reload'] = 'Обновить';
        botlng['sort'] = 'Сортировать';
        botlng['ord'] = 'Номер';
        botlng['name'] = 'Название';
        botlng['polygonprice'] = 'Цена на polygon';
        botlng['steamprice'] = 'Цена в steam';
        botlng['percent'] = 'Процент';
        botlng['date'] = 'Дата';
        botlng['developing'] = 'В разработке...';
        botlng['turnon'] = 'Включить';
        botlng['remove'] = 'Очистить';
        botlng['withdrawskins'] = 'Вывод скинов';
        botlng['withdrawskins100'] = 'Вывод кейсов';
        botlng['withdrawknifes'] = 'Вывод ножей';
        botlng['withdrawstickers'] = 'Вывод наклеее';
        botlng['history'] = 'История';
    }

    if (LANG_SELECT == 'en') {
        botlng['settings'] = 'Bot settings';
        botlng['prices'] = 'Prices';
        botlng['reload'] = 'Reload';
        botlng['sort'] = 'Sort';
        botlng['ord'] = 'Ord.';
        botlng['name'] = 'Name';
        botlng['polygonprice'] = 'Polygon price';
        botlng['steamprice'] = 'Steam price';
        botlng['percent'] = 'Percent';
        botlng['date'] = 'Date';
        botlng['developing'] = 'In developing...';
        botlng['turnon'] = 'Turn on';
        botlng['remove'] = 'Clean';
        botlng['withdrawskins'] = 'Withdraw skins';
        botlng['withdrawskins100'] = 'Withdraw cases';
        botlng['withdrawknifes'] = 'Withdraw knifes';
        botlng['withdrawstickers'] = 'Withdraw stickers';
        botlng['history'] = 'History';
    }


    $("body").append('<script src="https://cdn.jsdelivr.net/npm/sweetalert2@9"></script>');
    $("head").append('<style>.swal2-popup{font-size: 1.6rem !important;}.onoffswitch {margin-bottom: 8px;} #crash_auto_cashout {border-radius: 6px;} .crash_input {margin-bottom: 10px} .crash-fair .crash-fair-body{height: 75px; width: 65%;} .crash-fair-content {padding-top:10px} .crash-fair-content .crash-fair-info {margin-left: 20px} .histunit{padding:5px 10px;margin:3px;border-radius:5px;display:inline-block;border:1px solid gray;} .green{color:#6af549;} .dgreen{color:#3e900d;} .red{color:#f54949;}</style>');
    $("head").append('<link rel="stylesheet" href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css" integrity="sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p" crossorigin="anonymous"/>');


    $(".payments_top ul").append('<li><a id="settbtn" class="payments_category active" onclick="P2Psettings();">'+botlng['settings']+'</a></li>')
    $('.payments_top ul').append('<li><a id="skinbtn" class="payments_category" onclick="P2Pskins();">'+botlng['prices']+'</a></li>');
    $('.payments_top ul').append('<li><a id="histbtn" class="payments_category" onclick="P2Phistory();">'+botlng['history']+'</a></li>');
    $('.payments_top').after('<div class="P2Ppanel skins" id="P2Pskins-wrapper" style="display:none;"><div class="payments_top"><ul><li><a class="payments_category" onclick="P2Ploadskins(polygonskins);">'+botlng['reload']+'</a></li><li><a class="payments_category" onclick="sortskins();">'+botlng['sort']+'</a></li></ul></div><div id="P2Pskins"><table id="P2Pskins-table"><thead id="P2Pskins-thead"><tr><th>'+botlng['ord']+'</th><th>'+botlng['name']+'</th><th>'+botlng['polygonprice']+'</th><th>'+botlng['steamprice']+'</th><th>'+botlng['percent']+'</th><th>'+botlng['date']+'</th></tr></thead><tbody id="P2Pskins-tbody"></tbody></table></div></div>');
    $('.payments_top').first().after('<div class="P2Ppanel history" id="P2Pskins-wrapper" style="display:none;"><div class="payments_top"><ul><li><a class="payments_category" onclick="P2Ploadhistory(buyhistory);">'+botlng['reload']+'</a></li></ul></div><div id="P2Pskins"><table id="P2Pskins-table"><thead id="P2Pskins-thead"><tr><th>'+botlng['ord']+'</th><th>'+botlng['name']+'</th><th>'+botlng['polygonprice']+'</th><th>'+botlng['date']+'</th></tr></thead><tbody id="P2Pskins-tbody"></tbody></table></div></div>');
    $(".payments_top").first().after('<div class="P2Ppanel" id="P2Psettings"><div class="payments_top"><ul><li class="turnon"><a class="payments_category" onclick="turnon();">'+botlng['turnon']+'</a></li><li><a class="payments_category" onclick="remove();">'+botlng['remove']+'</a></li><li><a class="payments_category custom wskin" onclick="togglewithdrawskins();">'+botlng['withdrawskins']+'</a></li><li><a class="payments_category custom w100" onclick="togglewithdrawskins100();">'+botlng['withdrawskins100']+'</a></li><li><a class="payments_category custom wknifes" onclick="togglewithdrawknifes();">'+botlng['withdrawknifes']+'</a></li><li><a class="payments_category custom wstickers" onclick="togglewithdrawstickers();">'+botlng['withdrawstickers']+'</a></li></ul></div></div>');



    $('#deposit_btn').on('click', function() {
        $('.add10').remove();
        $('#deposit_confrim_window .window_total_coins').after('<a style="cursor:pointer" onclick="add10();" class="window_total_coins add10">+12%</a>');
    })
    
    $('.p2p_refresh_button').after('<button type="button" name="button" class="loadbuyprices" onclick="loadbuyprices();">load prices</button>');


    if (localStorage.polygonskins == undefined||NaN) {
        localStorage.polygonskins = "[]";
    };
    if (localStorage.buyhistory == undefined||NaN) {
        localStorage.buyhistory = "[]";
    };
    if (localStorage.activebuttons == undefined||NaN) {
        localStorage.activebuttons = "[true, true, true, true]";
    };
    if (localStorage.buyprices == undefined||NaN) {
        localStorage.buyprices = "[]";
    };

    polygonskins = JSON.parse(localStorage.getItem('polygonskins'));
    steamskins = JSON.parse(localStorage.getItem('steamskins'));
    buyhistory = JSON.parse(localStorage.getItem('buyhistory'));
    activebuttons = JSON.parse(localStorage.getItem('activebuttons'));
    buyprices = JSON.parse(localStorage.getItem('buyprices'));

    setTimeout(turnon, 15000);

    

};


window.onload = addblocksP2P();
