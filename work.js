let arr = [["Сергеев", "Иван", "Петров", "приехал(а)", "команда 1", "605 корпус 0", "ключа нет", "89665544332", "бив909", "id2394342", "serry"],
    ["Сергеев", "Петр", "Маркович", "не приехал(а)", "команда 1", "605 корпус 1", "ключ есть", "89998887766", "бив919", "serper", "htoya"],
    ["Иванович", "Иван", "Иванов", "приехал(а)", "команда 0", "615 корпус 0", "ключа нет", "89765544332", "бпм909", "id8566324", "i3"]];
let arr2 = arr.slice();
let widthArr = 11;

let iw = 0;
let is = 0;

//$('.first').click(function () {
function clickWas(id_elem) {
    //let a = [];
    //let id_elem = $(this).attr('id');
    let wassort = 1;
    //alert("Start");
    for(let j = 0; j < arr2.length && wassort === 1; j++){
        wassort = 0;
        for(let i = 0; i < arr2.length - 1; i++){
            if(arr2[i][id_elem] > arr2[i+1][id_elem]){
                //arr2[i] = arr.splice()
                //correctArr(arr2, i, (i+1));
                //alert("Элементы " + i + " и " + (i+1) + " меняем");
                let a = arr2[i];
                arr2[i] = arr2[i+1];
                arr2[i+1] = a;
                wassort = 1;
            }
        }


    }
    //a[id_elem].sort();
    //arr2 = a.reverse();

    /*for (let i =0; i < arr2.length; i++) {
        num = arr2[i];
        a
    }

     */

    reWright();

    //alert("Столбец " + id_elem + " отсортирован");



}
//);

function reWright() {
    $('#xi').html(function () {
        let newcontent = "";
        for(let j =0; j < arr2.length; j++) {
            newcontent+="<tr>";
            let num = arr2[j];
            for (let i = 0; i < widthArr; i++) {
                if(i === (widthArr-1)){
                    newcontent += "<td class=\"second\">" + "<a onclick=\"openWindow(" + j + ")\" href=\"#dialog\" id=\"more\">подробнее</a>" + "</td>";
                }else{
                    if(i===0){
                        newcontent += "<td class=\"second\">" + (j+1) + ")" + "</td>";
                    }else{
                        if(i===4){
                            newcontent += "<td class=\"second\">" + "<a onclick=\"openWindow1(" + j + ")\" href=\"#dialog\" id=\"status\">" + num[i-1] + "</a>" + "</td>";
                        }else{
                            newcontent += "<td class=\"second\">" + num[i-1] + "</td>";
                        }
                    }
                }
            }
            newcontent+="</tr>";
        }
        return newcontent;
    });
}

function openWindow(i){
    //let id_elem = $(this).attr('href');
    //let winH = $(window).height();
    //let winW = $(window).width();
    //let i = $(this).attr('id');
    //i -= 100;
    //alert(i);
    iw = i;
    $('#dialog').css('top',  100);
    $('#dialog').css('left', 100);
    $('#dialog').fadeIn(400);

    $('#links').html(function () {
        let text1 = "";
        text1 += "<p>" + "ссылка vk: " + "<a href=\"https://vk.com/" + arr2[iw][9] + "\">" + arr2[iw][9] + "</a>" + "</p>";
        text1 += "<p>" + "никнейм телеги: " + arr2[iw][10] + "</p>";
        return text1;
    });

}

function openWindow1(i){
    //let id_elem = $(this).attr('href');
    //let winH = $(window).height();
    //let winW = $(window).width();
    //let i = $(this).attr('id');
    //i -= 100;
    //alert(i);
    is = i;
    $('#dialog1').css('top',  100);
    $('#dialog1').css('left', 100);
    $('#dialog1').fadeIn(400);

    changeNow();

}

function changeNow() {
    $('#now').html(function () {
        return arr2[is][3];
    });
}

function clickOut() {
    arr2[is][3] = "не приехал(а)";
    changeNow();
}

function clickIn() {
    arr2[is][3] = "приехал(а)";
    changeNow();
}

 /*

$('#links').html(function () {
        let text1 = "";
        text1 += "<p>" + "ссылка vk: " + "<a href=\"https://vk.com/" + arr2[i][9] + "\">" + arr2[i][9] + "</a>" + "</p>";
        text1 += "<p>" + "никнейм телеги: " + arr2[i][10] + "</p>";
        return text1;
    });

$('#more').click(function(e) {
    e.preventDefault();
    let id = $(this).attr('href');
    //var maskHeight = $(document).height();
    //var maskWidth = $(window).width();
    //$('#mask').css({'width':maskWidth,'height':maskHeight});
    //$('#mask').fadeIn(1000);
    //$('#mask').fadeTo("slow",0.8);
    let winH = $(window).height();
    let winW = $(window).width();
    $(id).css('top',  winH/2-$(id).height()/2);
    $(id).css('left', winW/2-$(id).width()/2);
    $(id).fadeIn(2000);
});

  */
function closeWindow(){
    $('.window').hide();
}
function closeWindow1(){
    $('.window').hide();
    reWright();
}

/*
$('.window .close').click(function (e) {
    e.preventDefault();
    $('#mask, #wmore').hide();
});
$('#mask').click(function () {
    $(this).hide();
    $('#wmore').hide();
});

 */



function correctArr(_arr, _n1, _n2){
    /*
        коррекция  элементов массива по паре индекса
        *    _arr -- массив требующий коррекции
        *   n1,n2 -- индексы массива для взаимной  перестановки
    */
    _arr[_n1] = _arr.splice(_n2,1, _arr[_n1])[0]
}
//correctArr(arr, [1,0])
//console.log(arr.toString())
$('#but').click(function () {
    searchIt();
});

function searchIt() {
    let slovo = $('#texthere').val();
    arr2 = arr.slice();
    for(let j =0; j < arr2.length;) {
        let num = arr2[j];
        let is = 0;
        for (let i = 0; i < num.length; i++) {
            if(slovo.toLowerCase().indexOf(num[i].toLowerCase()) !== -1){
                is = 1;
                break;
            }
        }
        if(is === 0){
            arr2.splice(j, 1);
        }else{
            j++;
        }
    }
    reWright();
}

function comeBack() {
    arr2 = arr.slice();
    reWright();
}

reWright();
/*
let content = "";
//arr2.reverse();
for(let j =0; j < arr2.length; j++) {
    content+="<tr>";
    let num = arr2[j];
    for (let i = 0; i < widthArr; i++) {
        if(i == (widthArr-1)){
            content += "<td>" + "<a onclick=\"openWindow(" + j + ")\" href=\"#dialog\" id=\"more\">подробнее</a>" + "</td>";
        }else{
            if(i==0){
                content += "<td>" + (j+1) + ")" + "</td>";
            }else{
                if(i==4){
                    content += "<td>" + "<a onclick=\"openWindow1(" + j + ")\" href=\"#dialog\" id=\"status\">" + num[i-1] + "</a>" + "</td>";
                }else{
                    content += "<td>" + num[i-1] + "</td>";
                }
            }
        }
    }
    content+="</tr>";
}

$('#xi').append(content);
$('td').addClass("second");

 */