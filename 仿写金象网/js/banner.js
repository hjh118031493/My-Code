function banner(id) {
    //获取父元素节点与图片数组
    var list = document.getElementById(id);
    var li = list.querySelectorAll('li');
    //获取按钮节点
    var prevBtn = list.getElementsByClassName('prev')[0];
    var nextBtn = list.getElementsByClassName('next')[0];
    //设置left移动值与下标初始值
    var move = li[0].offsetWidth;
    var sub = 0;
    //获取焦点父元素以及渲染焦点元素与图片在右侧显示
    var flv = list.getElementsByClassName('flv')[0];
    for (var i = 0; i < li.length; i++) {
        flv.innerHTML += '<p></p>';
        li[i].style.left = move + 'px';
    }
    //获取焦点元素数组
    var focus = flv.querySelectorAll('p');
    console.log(focus.length);
    //设置第一个焦点className值
    focus[0].className = 'back';
    //设置第一张图片在可视窗口显示
    li[0].style.left = 0 + 'px';
    //设置定时器实现向左轮播
    clearInterval(timer);
    var timer = setInterval(next, 3000);
    //设置定时器向左函数
    function next() {
        //第1张图片移到左侧
        startMove(li[sub], { 'left': -move });
        ++sub;//图片下标 + 1
        if (sub >= li.length) {
            sub = 0;
        }
        //上面if满足条件时将所有已经移到左侧的图片起始left值变成move值
        li[sub].style.left = move + 'px';
        //第二张图片移到可视窗口
        startMove(li[sub], { 'left': 0 });
        //焦点className值跟随下标值变化
        focusSub();
    }

    function prev() {
        //第1张图片移到右侧
        startMove(li[sub], { 'left': move });
        --sub;//图片下标 - 1
        if (sub < 0) {
            sub = li.length - 1;
        }
        //上面if满足条件时将所有已经移到右侧的图片起始left值变成move值
        li[sub].style.left = -move + 'px';
        //第二张图片移到可视窗口
        startMove(li[sub], { 'left': 0 });
        //焦点className值跟随下标值变化
        focusSub();
    }
    //清楚焦点，并以当前sub值给予className值
    function focusSub() {
        for (var j = 0; j < focus.length; j++) {
            focus[j].className = '';
        }
        focus[sub].className = 'back';
    }

    prevBtn.onclick = function () {
        //上一张
        prev();
    }

    nextBtn.onclick = function () {
        //下一张
        next();
    }

    list.onmouseenter = function () {
        //鼠标移入按钮显示
        prevBtn.style.display = 'block';
        nextBtn.style.display = 'block';
        clearInterval(timer); //鼠标经过清除定时器
    }

    list.onmouseleave = function () {
        //鼠标移出按钮消失
        prevBtn.style.display = 'none';
        nextBtn.style.display = 'none';
        clearInterval(timer); //放在定时器叠加
        timer = setInterval(next, 2000);
    }

    for (let j = 0; j < focus.length; j++) {
        focus[j].onclick = function () {
            //判断方向移动
            if (j > sub) {
                startMove(li[sub], { 'left': -move });
                //前一张向左移动后一张进入可视窗口
                li[j].style.left = move + 'px';
                startMove(li[j], { 'left': 0 });
                sub = j;
                focusSub();
            }
            if (j < sub) {
                startMove(li[sub], { 'left': move });
                //后一张向右移动前一张进入可视窗口
                li[j].style.left = -move + 'px';
                startMove(li[j], { 'left': 0 });
                sub = j;
                focusSub();
            }
        }
    }
}
