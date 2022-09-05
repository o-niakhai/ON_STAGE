// Load application styles

// ================================
// START YOUR APP HERE
// ================================

var now = new Date();
var monthArr = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
var dayArr = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
var yearNow = now.getFullYear();
var monNow = now.getMonth();
var dateNow = now.getDate();
const $dateDisplay = document.getElementById('date-display');
const $dayDisplay = document.getElementById('day-display');
var time;
const $dayCols = document.querySelectorAll('#day-number-box .day');
const DATA = [];
var clickedTime = new Date();

/*btn*/
var $totalBtns = document.querySelectorAll('.additional-btn');
var $todoListWindow = document.getElementById('todo-list-window');
var $todoWindowBtns = document.querySelectorAll('.todo-window-btn');
var $calandarBtn = document.getElementById('calandar-btn');

var $monthYearDisplay = document.getElementById('month-year-display');
$monthYearDisplay.textContent = `${monthArr[now.getMonth()]} ${now.getFullYear()}`;

window.onload = function() {
    $dateDisplay.textContent = `${now.getDate()}`;
    $dayDisplay.textContent = `${dayArr[now.getDay()].toUpperCase()}`;
    resetAll();
    $calandarBtn.classList.add('btn-click-color');
};

spreadDate(0, 0);

var day;
function spreadDate(left, right){
    var keepGoing = 1;
    time = new Date(yearNow, monNow + left + right, 1);
    $monthYearDisplay.textContent = `${monthArr[time.getMonth()]} ${time.getFullYear()}`;

    var lastDate = new Date(yearNow, monNow + 1 + left + right, 0);
    day = time.getDay() + 1;
     
    $dayCols.forEach(function($el){
        var $p = $el.querySelector('p');
        $p.textContent = '';
        $el.dataset.id = '';
        $el.classList.remove('blur');
    });
    
    for(var i = 1; keepGoing; day++, i++){
        var $dayCol = document.querySelector(`#day-number-box .day:nth-of-type(${day})`);
        $dayCol.querySelector('p').textContent = `${i}`;
        $dayCol.dataset.id = `cal-${time.getFullYear()}-${time.getMonth() + 1}-${i}`;
        if(i >= lastDate.getDate()){
            keepGoing = 0;
        };
    };

    /* Today's date is red-highlited */

    var $todayCol = document.querySelector(`[data-id="cal-${now.getFullYear()}-${now.getMonth() + 1}-${now.getDate()}"]`);
    if(yearNow === time.getFullYear() && monNow === time.getMonth()){
        $todayCol.querySelector('p').classList.add('mark');
    }else{
        $dayCols.forEach(function($dayCol){
            $dayCol.querySelector('p').classList.remove('mark');
        });
    };

    /* Reset showing-dot settting */
    if(0 !== DATA.filter(a => a.yearMonth === `${time.getFullYear()}-${time.getMonth() + 1}`).length){  
        var theDataArr = DATA.filter(a => a.yearMonth === `${time.getFullYear()}-${time.getMonth() + 1}`);
        for(var q = 0; q < theDataArr.length; q++){
            var $theDays = document.querySelectorAll(`[data-id="cal-${theDataArr[q].date}"]`);
            $theDays.forEach(function($theDay){
                $dot = $theDay.children[1];
                $dot.src = 'https://img.auctiva.com/imgdata/2/0/3/3/6/7/8/webimg/1030895688_o.png'
            });
        };
    }else{
        var $dots = document.querySelectorAll('#day-number-box #dot');
        $dots.forEach(function($dot){
            $dot.src = '';
        });
    };
}


/* Calender Arrow */

const $leftArrow = document.getElementById('left-arrow');
const $rightArrow = document.getElementById('right-arrow');
var minus = 0;
var plus = 0
$leftArrow.addEventListener('click', () => {
        minus -= 1;
        spreadDate(minus, plus);
    }
);
$rightArrow.addEventListener('click', () => {
        plus += 1;
        spreadDate(minus, plus);
    }
);


/* Connecting Calender with Todo */

var $input;
var $lastLi = document.getElementById('lastLi');
var $ul = document.querySelector('#todo-box ul');
var todoContext;
var dateIndex;
var $recreateLi;
var dayAll = document.querySelectorAll('#day-number-box .day');

/* Mark and Blur After a click */
$dayCols.forEach(function($el){
    $el.addEventListener('click', (event) => {
        document.getElementById('calendar-left-box').classList.remove('display-none');
        document.getElementById('todo-list-window').classList.remove('display-block');
        $totalBtns.forEach(($totalBtn) => {$totalBtn.classList.remove('btn-click-color')});
        $calandarBtn.classList.add('btn-click-color');

        dayAll.forEach(($day)=>{
            $day.classList.remove('blur');
        });
        event.currentTarget.classList.add('blur');
        dateIndex = Number($el.querySelector('p').innerHTML);
        $dateDisplay.textContent = dateIndex;
        
        clickedTime = new Date(time.getFullYear(), time.getMonth(), dateIndex);
        $dayDisplay.textContent = dayArr[clickedTime.getDay()].toUpperCase();
        if(!dateIndex){
            $dayDisplay.textContent = '';
        };
        if(clickedTime.getFullYear() === yearNow && clickedTime.getMonth() === monNow && clickedTime.getDate() === dateNow){
            listNum;
        }else{
            listNum = 0;
        };

        resetAll();
        $lastLi = document.getElementById('lastLi')
        var findArr = DATA.filter(a => a.date === `${clickedTime.getFullYear()}-${clickedTime.getMonth() + 1}-${clickedTime.getDate()}`);
        
        if(!!findArr.length){
            for(var j = 0; j < findArr.length; j++){
                $recreateLi = $lastLi.cloneNode(true);
                $ul.insertBefore($recreateLi, $lastLi);
                $recreateLi.classList.add('list-show');
                $recreateLi.children[1].textContent = findArr[j].content;
                btnReset($recreateLi);
            };
        };
    });
});

var $newLi;
var $checkCircle;
var $deleteBtn;
var $newLiText;
var todoListData;
var listNum = 0;
var listTarget;
var $dot;

function MakeDatalist(){
    this.date = `${clickedTime.getFullYear()}-${clickedTime.getMonth() + 1}-${clickedTime.getDate()}`
    this.yearMonth = `${clickedTime.getFullYear()}-${clickedTime.getMonth() + 1}`;
    this.id = '',
    this.content = '',
    this.status = 'unfinished'
}

function resetAll(){
    $ul.innerHTML = '<li id="li1"><img src="" alt=""><input type="text" placeholder="What needs to be done?" autofocus/><img src="" alt=""></li><li id="lastLi"><img id="checkbox-circle" src="https://img.auctiva.com/imgdata/2/0/3/3/6/7/8/webimg/1030895684_o.png" alt=""><p></p><img id="delBtn" src="https://img.auctiva.com/imgdata/2/0/3/3/6/7/8/webimg/1030895686_o.png" alt=""></li>';
    $input= document.querySelector('#li1 input');
    $lastLi = document.getElementById('lastLi');
    $input.addEventListener('keypress', function(event){
        if(event.key === 'Enter'){
            $newLi = $lastLi.cloneNode(true);
            $ul.insertBefore($newLi, $lastLi);
            $newLi.classList.add('list-show');
            todoContext = $input.value;

            $newLiText = $newLi.children[1];
            $newLiText.textContent = todoContext;
            $input.value = '';
            $checkCircle = $newLi.children[0];
            $deleteBtn = $newLi.children[2];

            btnReset($newLi);

            todoListData = new MakeDatalist();
            todoListData.id = `${clickedTime.getFullYear()}-${clickedTime.getMonth() + 1}-${clickedTime.getDate()}-${listNum}`;
            todoListData.content = todoContext;
            DATA.push(todoListData);
            $newLi.dataset.id = todoListData.id;
            $newLi.dataset.date = todoListData.date;
    
            listNum += 1;
        
            if(!!DATA.filter(a => a.date === `${clickedTime.getFullYear()}-${clickedTime.getMonth() + 1}-${clickedTime.getDate()}`).length){
                var $theDays = document.querySelectorAll(`[data-id="cal-${clickedTime.getFullYear()}-${clickedTime.getMonth() + 1}-${clickedTime.getDate()}"]`);
                $theDays.forEach(function($theDay){
                    var $dot = $theDay.children[1];
                    $dot.src = 'https://img.auctiva.com/imgdata/2/0/3/3/6/7/8/webimg/1030895688_o.png';
                });
            };
        };
    });   
}

function btnReset(newListTitle){

    $checkCircle = newListTitle.children[0];
    $deleteBtn = newListTitle.children[2];

    $checkCircle.addEventListener('click', function(event){
        if(event.target.src === 'https://img.auctiva.com/imgdata/2/0/3/3/6/7/8/webimg/1030895684_o.png'){
            event.target.src = 'https://img.auctiva.com/imgdata/2/0/3/3/6/7/8/webimg/1030895683_o.png'
            event.target.parentElement.children[1].classList.add('finishedlist');
            listTarget = DATA.filter(a => a.id === event.target.parentElement.dataset.id)[0];
            listTarget.status = 'finished';
            
        }else{
            listTarget = DATA.filter(d => d.id === event.target.parentElement.dataset.id)[0];
            listTarget.status = 'unfinished';
            

            event.target.src = 'https://img.auctiva.com/imgdata/2/0/3/3/6/7/8/webimg/1030895684_o.png'
            event.target.parentElement.children[1].classList.remove('finishedlist');
        };
    });

    $deleteBtn.addEventListener('click', function(event){
        listTarget = DATA.filter(a => a.id === event.target.parentElement.dataset.id)[0];
        DATA.splice(DATA.indexOf(listTarget), 1);
        event.target.parentElement.remove();
        
        var listSameDateArr = DATA.filter(a => a.date === event.target.parentElement.dataset.date);
        if(listSameDateArr.length === 0){
            var $lis = document.querySelectorAll(`[data-id="cal-${clickedTime.getFullYear()}-${clickedTime.getMonth() + 1}-${clickedTime.getDate()}"]`);
            $lis.forEach(function($li){
                $li.querySelector('#dot').src = '';
            });
        };
    });
}

$todoWindowBtns.forEach(function($todoWindowBtn){
    $todoWindowBtn.addEventListener('click', function(event){
        $totalBtns.forEach(($totalBtn) => {$totalBtn.classList.remove('btn-click-color')});
        document.getElementById('calendar-left-box').classList.add('display-none');
        document.getElementById('todo-list-window').classList.add('display-block');
        event.target.classList.add('btn-click-color');

        var dateArr = [];

        $todoListWindow.innerHTML = '<div class="window-lists" id="window-list-box"><h3 id="window-date">2019년&nbsp&nbsp7월&nbsp&nbsp7일</h3><ul><li class="window-todo-list" id="window-li-clone"><img id="checkbox-circle" src="https://img.auctiva.com/imgdata/2/0/3/3/6/7/8/webimg/1030895684_o.png" alt=""><p>codingcoding</p><img id="delBtn" src="https://img.auctiva.com/imgdata/2/0/3/3/6/7/8/webimg/1030895686_o.png" alt=""></li></ul></div>';
        var $windowDivUl = document.getElementById('window-list-box');
        var j = 1;
        for(var i = 0; i < DATA.length; i++){
            if(dateArr.length === 0 || dateArr.indexOf(DATA[i].date) === -1){
                dateArr.push(DATA[i].date);
                var $windowDivUlClone = $windowDivUl.cloneNode(true);
                $windowDivUlClone.classList.add('display-block');
                $windowDivUl.parentElement.insertBefore($windowDivUlClone, $windowDivUl);
                document.querySelector(`#todo-list-window div:nth-of-type(${j}) h3`).textContent = dateArr[j - 1];
                document.querySelector(`#todo-list-window div:nth-of-type(${j}) ul`).dataset.id = `ul-${dateArr[j - 1]}`
                j += 1;
            }
        }
        
        for(var i = 0; i < dateArr.length; i++){
            var sameDateDATA = DATA.filter(a => a.date === dateArr[i]);
            for(var j = 0; j < sameDateDATA.length; j++){
                var $ulSameDate = document.querySelector(`[data-id="ul-${dateArr[i]}"]`);
                var $windowLi = $ulSameDate.querySelector('#window-li-clone');
                var $windowLiClone = $windowLi.cloneNode(true);
                $windowLiClone.classList.add('list-show');
                $windowLiClone.dataset.id = `${dateArr[i]}-${j}`;
                
                if(event.target.textContent === 'All'){ 
                    if(sameDateDATA[j].status === 'finished'){
                        $ulSameDate.querySelector('img').src = 'https://img.auctiva.com/imgdata/2/0/3/3/6/7/8/webimg/1030895683_o.png';
                    };
                    $ulSameDate.insertBefore($windowLiClone, $windowLi);
                    $ulSameDate.querySelector('p').textContent = sameDateDATA[j].content;
                    $ulSameDate.querySelector('#delBtn').src = '';
                    
                }else if(event.target.textContent === 'Active'){
                    if(sameDateDATA[j].status === 'unfinished'){
                        $ulSameDate.insertBefore($windowLiClone, $windowLi);
                        $ulSameDate.querySelector('p').textContent = sameDateDATA[j].content;
                        $ulSameDate.querySelector('#delBtn').src = '';
                    };
                }else if(event.target.textContent === 'Completed'){
                    if(sameDateDATA[j].status === 'finished'){
                        $ulSameDate.insertBefore($windowLiClone, $windowLi);
                        $ulSameDate.querySelector('p').textContent = sameDateDATA[j].content;
                        $ulSameDate.querySelector('img').src = 'https://img.auctiva.com/imgdata/2/0/3/3/6/7/8/webimg/1030895683_o.png';
                        $ulSameDate.querySelector('#delBtn').src = '';
                    };
                }
                
            };   
        };
    });
});

$calandarBtn.addEventListener('click', function(){
    $totalBtns.forEach(($totalBtn) => {$totalBtn.classList.remove('btn-click-color')});
    document.getElementById('calendar-left-box').classList.remove('display-none');
    document.getElementById('todo-list-window').classList.remove('display-block');
    event.target.classList.add('btn-click-color');
});
