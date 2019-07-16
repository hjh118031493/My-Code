window.onload = function () {
    // -------------------渲染数据部分---------------------
    // 显示隐藏函数
    function showHide(father, son) {
        father.onmouseenter = function () {
            son.style.display = 'block';
        }
        father.onmouseleave = function () {
            son.style.display = 'none';
        }
    }
    //渲染数据函数(缺点：只能渲染同样单条数据)
    function render(id, arr, dataleft, dataright, data2, addLeft, addRight) {
        var item = '';
        for (var i = 0; i < arr.length; i++) {
            item += dataleft + arr[i] + dataright;
            if (data2 && i < arr.length - 1) {
                item += data2;
            }
        }
        if (addLeft && addRight) {
            id.innerHTML += addLeft + item + addRight;
        } else {
            id.innerHTML += item;
        }
    }
    //用户信息框
    var slide = document.getElementsByClassName('slide')[0];
    var userInfo = document.getElementsByClassName('userInfo')[0];
    slide.onmouseenter = function () {
        userInfo.style.display = 'block';
        slide.style.display = 'none';
    }
    userInfo.onmouseleave = function () {
        slide.style.display = 'block';
        userInfo.style.display = 'none';
    }

    //寻找节点及创建数据数组
    //头部节点与数据渲染
    var siteRight = document.getElementsByClassName('siteRight')[0];
    var siteRightList = [['购物车', '我的订单', '个人中心', '关注金象网', '客户服务'], ['我的优惠券', '我的收藏夹', '我的评论', '会员说明'],
    ['在线客服', '帮助中心', '售后服务', '常见问题', '投诉与建议']]
    render(siteRight, siteRightList[0], '<li class="fl clear"><a href="javascript:void(0)">', '</a></li>', '<span class="link fl"></span>');
    var siteRightLiA = siteRight.querySelectorAll('a');
    var siteRightLi = siteRight.querySelectorAll('li');
    // 购物车图标与数字显示
    siteRightLiA[0].innerHTML += `<i class="block"></i><span class="priceNum">0</span>`;
    for (var n = 0; n < siteRightLiA.length; n++) {
        if (n >= 2) {
            // 其他栏后三角图标
            siteRightLiA[n].innerHTML += `<i class="block"></i>`;
            if (n != 3) {
                // 定义一致类名
                siteRightLi[n].classList.add("showItem");
                var j = n / 2;
                // 渲染服务项目列表
                render(siteRightLi[n], siteRightList[j], '<li class="fl clear"><a href="javascript:void(0)">', '</a></li>', false, '<ul class="headSer">', '</ul>');
            } else {
                // 简单渲染二维码框
                siteRightLi[n].classList.add("showQRCode");
                siteRightLi[n].innerHTML += `<dl class="QRCode"><dt></dt><dd>关注金象网</dd><dd>微信公众号</dd></div>`;
            }
        }
    }
    // 服务框目显示隐藏控制
    var showItem = siteRight.querySelectorAll('.showItem');
    var showQRCode = siteRight.getElementsByClassName('showQRCode')[0];
    var headSer = siteRight.querySelectorAll('.headSer');
    var QRCode = showQRCode.getElementsByClassName('QRCode')[0];
    for (let k = 0; k < showItem.length; k++) {
        showHide(showItem[k], headSer[k]);
    }
    showHide(showQRCode, QRCode);

    //搜索框热销商品节点数据渲染
    var topSearch = document.getElementsByClassName('topSearch')[0];
    var topSearchList = ['希爱力', '六味地黄丸', '万艾可', '便秘-杜密克', '保法止', '三七粉', '福牌阿娇', '云南白药牙膏', '奥泰灵', '法斯通'];
    render(topSearch, topSearchList, '<li class="fl"><a href="javascript:void(0)">', '</a></li>');

    //搜索框快捷节点与数据
    var headerCentList = document.getElementsByClassName('headerCentList')[0];
    var headerCentListCont = ['口罩', '希爱力', '阿胶', '万艾可', '安宫牛黄丸', '定坤丹', '龟龄集', '保法止', '奥泰灵'];
    render(headerCentList, headerCentListCont, '<a href="javascript:void(0)" class="fl block">', '</a>');

    //导航菜单栏二级菜单节点与数据
    var menuNav = document.getElementsByClassName('menuNav')[0];
    var menuNavList = ['家中常备', '中西药品', '男士专区', '女士专区', '妈妈宝宝', '医疗器械', '成人用品', '滋补保健', '美妆/百货'];
    render(menuNav, menuNavList, '<li><a href="javascript:void(0)" class="block"><i class="block fl"></i>', '</a></li>');
    //三级菜单
    var lable = document.querySelectorAll('.lable');
    var none = document.querySelectorAll('.none');
    function rep(arr, string, arrt) {
        for (let e = 0; e < arr.length; e++) {
            if (arrt == 'color') {
                arr[e].style.color = string;
            } else {
                arr[e].style.borderRight = string;
            }
        }
    }
    rep(lable, '#4998eb', 'color');
    rep(none, 'none', 'borderRight');
    var menuLi = menuNav.querySelectorAll('li');
    var menuA = menuNav.querySelectorAll('a');
    var menuI = menuNav.querySelectorAll('i');
    var menuBox = document.getElementsByClassName('menuBox')[0];
    var secMenuNav = document.getElementsByClassName('secMenuNav')[0];
    var threeNavcol = secMenuNav.querySelectorAll('.threeNavcol');
    menuBox.onmouseenter = function () {
        secMenuNav.style.display = 'block';
    }
    function glide(id1, id2, id3, num) {
        if (num) {
            id1.style.color = '#4496ee';
            id1.style.background = 'white';
            id1.style.borderLeft = '1px solid #4496ee';
            id2.style.backgroundPositionX = '-94px';
            id3.style.display = 'block';
        } else {
            id1.style.color = 'white';
            id1.style.background = '#4496ee';
            id1.style.borderRight = '';
            id2.style.backgroundPositionX = '';
            id3.style.display = 'none';
        }
    }
    function menuShowHide(id1, id2) {
        for (let i = 0; i < id1.length; i++) {
            id1[i].onmouseenter = function () {
                glide(menuA[i], menuI[i], id2[i], true);
            }
            id1[i].onmouseleave = function () {
                glide(menuA[i], menuI[i], id2[i], false);
                secMenuNav.onmouseenter = function () {
                    glide(menuA[i], menuI[i], id2[i], true);
                }
                secMenuNav.onmouseleave = function () {
                    glide(menuA[i], menuI[i], id2[i], false);
                }
            }
        }
    }
    showHide(menuBox, secMenuNav);
    menuShowHide(menuLi, threeNavcol);
    //导航栏节点与数据
    var navL = document.getElementsByClassName('navL')[0];
    var navLList = ['首页', '快速找药', '健康百科', '健康大讲堂', '专业药师', '北京协和维芙雅'];
    render(navL, navLList, '<a href="javascript:void(0)" class="fl">', '</a>', '<span class="fl">|</span>');

    // 轮播图图片
    var bannerBack = document.getElementsByClassName('bannerBack')[0];
    var bannerPic = document.getElementsByClassName('bannerPic')[0];
    var bannerImg = document.getElementsByClassName('bannerImg')[0];
    var bannerBtn = document.getElementsByClassName('bannerBtn')[0];
    var bannerPicList = [{ url: './images/头部/xJcJywbz_L.jpg' }, { url: './images/头部/86vAJm99_L.jpg' }, { url: './images/头部/TByXvpz8_L.jpg' },
    { url: './images/头部/a6EfLKDy_L.jpg' }, { url: './images/头部/XfHE8yxs_L.jpg' }, { url: './images/头部/I9UL5sOu_L.jpg' }];
    function bannerpicdata(id, arr) {
        id.innerHTML += arr.map(function (item) {
            return `<img src="${item.url}" alt="">`;
        }).join('');
    }
    bannerpicdata(bannerImg, bannerPicList);
    //下标按钮渲染
    function bannBtn(id, arr) {
        for (let i = 0; i < arr.length; i++) {
            id.innerHTML += '<a href="javascript:void(0)" class="fl block"></a>';
        }
    }
    bannBtn(bannerBtn, bannerPicList);
    function bannBa(id, arr) {
        for (let i = 0; i < arr.length; i++) {
            id.innerHTML += '<li></li>';
        }
    }
    bannBa(bannerBack, bannerPicList);
    // 图片随时间变化而改变下标
    var bannBack = bannerBack.querySelectorAll('li');
    var bannImg = bannerImg.querySelectorAll('img');
    var bannerPrev = document.getElementsByClassName('leftBtn')[0];
    var bannerNext = document.getElementsByClassName('rightBtn')[0];
    var bannerSubA = bannerBtn.querySelectorAll('a');
    function imgSub(id, left, right, subBtn, idBox, back) {
        // 图片层级清零
        for (let i = 0; i < id.length; i++) {
            id[i].style.opacity = '0';
        }
        // 初始下标,初始图片,初始焦点
        var sub = 0;
        console.log(sub);
        id[0].style.opacity = '1';
        subBtn[0].style.background = 'orangered';
        back[0].style.opacity = '1';
        clearInterval(timer);
        // 定时器
        var timer = setInterval(() => { next() }, 3000);
        // 编写下一张和上一张的函数
        function next() {
            startMove(id[sub], { 'opacity': 0 });
            startMove(back[sub], { 'opacity': 0 });
            sub++;
            if (sub >= id.length) {
                sub = 0;
            }
            startMove(back[sub], { 'opacity': 100 });
            startMove(id[sub], { 'opacity': 100 });
            subcolor();
        }
        function prev() {
            startMove(back[sub], { 'opacity': 0 });
            startMove(id[sub], { 'opacity': 0 });
            sub--;
            if (sub < 0) {
                sub = id.length - 1;
            }
            startMove(back[sub], { 'opacity': 100 });
            startMove(id[sub], { 'opacity': 100 });
            subcolor();
        }
        // 点击左右按钮时实现图片轮换效果
        left.onclick = () => {
            next();
        }
        right.onclick = () => {
            prev();
        }
        // 指针按钮随图片变换而变换颜色
        function subcolor() {
            for (let i = 0; i < subBtn.length; i++) {
                subBtn[i].style.background = 'white';
            }
            subBtn[sub].style.background = 'orangered';
        }
        // 指针按钮鼠标滑过后切换指定图片
        for (let j = 0; j < subBtn.length; j++) {
            subBtn[j].onmouseenter = () => {
                if (j > sub) {
                    startMove(id[sub], { 'opacity': 0 });
                    startMove(back[sub], { 'opacity': 0 });
                    startMove(back[j], { 'opacity': 100 });
                    startMove(id[j], { 'opacity': 100 });
                    sub = j;
                    subcolor();
                } else if (j < sub) {
                    startMove(id[sub], { 'opacity': 0 });
                    startMove(back[sub], { 'opacity': 0 });
                    startMove(back[j], { 'opacity': 100 });
                    startMove(id[j], { 'opacity': 100 });
                    sub = j;
                    subcolor();
                }
            }
        }
        // 图片盒子鼠标移入移出
        idBox.onmouseenter = () => {
            startMove(left, { 'opacity': 30 });
            startMove(right, { 'opacity': 30 });
            clearInterval(timer);
        }
        idBox.onmouseleave = () => {
            startMove(left, { 'opacity': 0 });
            startMove(right, { 'opacity': 0 });
            clearInterval(timer);
            timer = setInterval(() => { next() }, 3000);
        }
    }
    imgSub(bannImg, bannerNext, bannerPrev, bannerSubA, bannerPic, bannBack);

    //轮播图右侧快讯节点与数据
    var message = document.getElementsByClassName('message')[0];
    var messageList = ['[通知]故障通告', '[通知]关于边远地区等发货问题', '[通知]金象积分调整公告'];
    render(message, messageList, '<li><a href="javascript:void(0)">', '</a></li>');

    //轮播图右侧节点与数据
    var sevice = document.getElementsByClassName('sevice')[0];
    var seviceList = ['货到付款', '满100包邮', '隐私包装'];
    render(sevice, seviceList, '<a href="javascript:void(0)"><i></i><p>', '</p></a>');

    //楼层跳跃
    var floorJump = document.getElementsByClassName('floorJump')[0];
    var floorJumpList = [{ data1: '中西药品', data2: '1F' }, { data1: '中西药品', data2: '2F' },
    { data1: '中西药品', data2: '3F' }, { data1: '中西药品', data2: '4F' }, { data1: '中西药品', data2: '5F' }, { data1: '中西药品', data2: '6F' }];
    function floorJumpData(id, arr) {
        id.innerHTML = arr.map(function (item) {
            return `<li><p class="txt">${item.data1}</p><p class="num">${item.data2}</p></li>`
        }).join('');
    }
    floorJumpData(floorJump, floorJumpList);
    //点击移动特定楼层
    var jumpLi = floorJump.querySelectorAll('li');
    var jumptxt = floorJump.querySelectorAll('.txt');
    var jumpLiTopList = [1943, 2538, 3133, 3728, 4323, 4918];
    // 特定高度显示样式
    function txtnumshow(id, arr, scrollTop) {

        for (let i = 0; i < arr.length; i++) {
            jumpLi[i].onmouseenter = function () {
                id[i].style.background = 'white';
                id[i].style.color = '#4496ee';
                id[i].style.display = 'block';
            }
            jumpLi[i].onmouseleave = function () {
                id[i].style.display = 'none';
            }
            function styleOrLeave() {
                id[i].style.background = '#e5a871';
                id[i].style.color = 'white';
                id[i].style.display = 'block';
                jumpLi[i].onmouseleave = function () {
                    id[i].style.background = '#e5a871';
                    id[i].style.color = 'white';
                    id[i].style.display = 'block';
                }
            }
            if (i == 0 && scrollTop < arr[i + 1]) {
                styleOrLeave();
            } else if (i == 5 && scrollTop >= arr[i]) {
                styleOrLeave();
            } else if (scrollTop >= arr[i] && scrollTop < arr[i + 1]) {
                styleOrLeave();
            } else {
                id[i].style.display = 'none';
            }
        }
    }
    // 网页一定高度时显示
    window.onscroll = function () {
        var scrollTop = window.scrollY;
        txtnumshow(jumptxt, jumpLiTopList, scrollTop);
        if (scrollTop >= 972) {
            startMove(floorJump, { 'opacity': 100 });
            // floorJump.style.display = 'block';
        } else {
            startMove(floorJump, { 'opacity': 0 });
            // floorJump.style.display = 'none';
        }
    }
    function jumpLiTop(id, arr) {
        for (let i = 0; i < id.length; i++) {
            id[i].onclick = function () {
                window.scrollTo(0, arr[i]);
            }
        }
    }
    jumpLiTop(jumpLi, jumpLiTopList);

    // 楼层轮播图
    var floorBanner = document.querySelectorAll('.floorBanner');
    var floorImg = document.querySelectorAll('.floorImg');
    var floorBannerBtn = document.querySelectorAll('.floorBannerBtn');
    floorImgList = [{ url: './images/内容/楼层1：中西药品/i9DIXNrU_O.jpg' }, { url: './images/内容/楼层1：中西药品/fSU0gKbf_O.jpg' },
    { url: './images/内容/楼层1：中西药品/rw3BqvnZ_O.jpg' }];
    // 渲染图片
    function floorImgData(id, arr) {
        for (let i = 0; i < id.length; i++) {
            id[i].innerHTML = arr.map(function (item) {
                return ` <img src="${item.url}" alt="">`;
            }).join('');
        }
    }
    floorImgData(floorImg, floorImgList);
    // 渲染下标按钮
    function floorBtnData(id, arr) {
        for (let i = 0; i < id.length; i++) {
            id[i].innerHTML = arr.map(function () {
                return `<li></li>`;
            }).join('');
        }
    }
    floorBtnData(floorBannerBtn, floorImgList);
    // 轮播效果
    function floorSub(id, subBtn, idBox) {
        for (let i = 0; i < id.length; i++) {
            var img = id[i].querySelectorAll('img');
            console.log();
            var btn = subBtn[i].querySelectorAll('li');
            ImgSub(img, btn, idBox[i]);
        }
        function ImgSub(id, subBtn, idBox) {
            // 初始化
            var iw = id[0].offsetWidth;
            for (let i = 0; i < id.length; i++) {
                id[i].style.left = iw + 'px';
            }
            // 初始下标,初始图片,初始焦点
            var sub = 0;
            id[0].style.left = 0 + 'px';
            subBtn[0].style.background = '#e5a871';
            clearInterval(timer);
            // 定时器
            var timer = setInterval(() => { next() }, 3000);
            // 编写下一张和上一张的函数
            function next() {
                startMove(id[sub], { 'left': -iw });
                sub++;
                if (sub >= id.length) {
                    sub = 0;
                }
                id[sub].style.left = iw + 'px';
                startMove(id[sub], { 'left': 0 });
                subcolor();
            }
            // 指针按钮随图片变换而变换颜色
            function subcolor() {
                for (let i = 0; i < subBtn.length; i++) {
                    subBtn[i].style.background = 'white';
                }
                subBtn[sub].style.background = '#e5a871';
            }
            // 指针按钮鼠标滑过后切换指定图片
            for (let j = 0; j < subBtn.length; j++) {
                subBtn[j].onclick = () => {
                    if (j > sub) {
                        startMove(id[sub], { 'left': -iw });
                        id[j].style.left = iw + 'px';
                        startMove(id[j], { 'left': 0 });
                        sub = j;
                        subcolor();
                    } else if (j < sub) {
                        startMove(id[sub], { 'left': iw });
                        id[j].style.left = -iw + 'px';
                        startMove(id[j], { 'left': 0 });
                        sub = j;
                        subcolor();
                    }
                }
            }
            // 图片盒子鼠标移入移出
            idBox.onmouseenter = () => {
                clearInterval(timer);
            }
            idBox.onmouseleave = () => {
                clearInterval(timer);
                timer = setInterval(() => { next() }, 3000);
            }
        }
    }
    floorSub(floorImg, floorBannerBtn, floorBanner);

    //楼层疾病分类节点与数据
    var illnessClassifyLeft = document.querySelectorAll('.illnessClassifyLeft');
    var illnessClassifyRight = document.querySelectorAll('.illnessClassifyRight');
    var illnessClassifyList = [['高血压', '糖尿病', '精神疾病', '感冒发烧', '皮肤疾病', '五官疾病'],
    ['眼科疾病', '乙肝', '骨科疾病', '支气管炎', '心脑血管', '补气益血']];
    function illnessClassify(id1, id2, arr) {
        for (let i = 0; i < id1.length; i++) {
            render(id1[i], arr[0], '<a href="javascript:void(0)">', '</a>');
            render(id2[i], arr[1], '<a href="javascript:void(0)">', '</a>');
        }
    }
    illnessClassify(illnessClassifyLeft, illnessClassifyRight, illnessClassifyList);

    //楼层疾病制药企业节点与数据
    var illnessDrugmakerLeft = document.querySelectorAll('.illnessDrugmakerLeft');
    var illnessDrugmakerRight = document.querySelectorAll('.illnessDrugmakerRight');
    var illnessDrugmakerList = [1, 2, 3, 4, 5, 6];
    function illnessDrugmaker(id1, id2, arr) {
        for (let i = 0; i < id1.length; i++) {
            render(id1[i], arr, '<a href="javascript:void(0)">', '</a>');
            render(id2[i], arr, '<a href="javascript:void(0)">', '</a>');
        }
    }
    illnessDrugmaker(illnessDrugmakerLeft, illnessDrugmakerRight, illnessDrugmakerList);

    //楼层选项节点与数据
    var floorTaps = document.querySelectorAll('.floorTaps');
    var floorTapList = ['中西药品', '妇科用药', '感冒用药', '骨科用药', '皮肤用药', '肠胃用药', '五官用药', '眼科用药'];
    function floorTap(id, arr) {
        for (let i = 0; i < id.length; i++) {
            render(id[i], arr, '<li><a href="javascript:void(0)">', '</a></li>');
        }
    }
    floorTap(floorTaps, floorTapList);
    //  滑动选项
    var floorTapsLi = floorTaps[0].querySelectorAll('li');
    var floorTapsLi1 = floorTaps[1].querySelectorAll('li');
    var floorTapsLi2 = floorTaps[2].querySelectorAll('li');
    var floorTapsLi3 = floorTaps[3].querySelectorAll('li');
    var floorTapsLi4 = floorTaps[4].querySelectorAll('li');
    var floorTapsLi5 = floorTaps[5].querySelectorAll('li');
    function slideTas(id) {
        for (let i = 0; i < id.length; i++) {
            id[i].onmouseenter = function () {
                for (let j = 0; j < id.length; j++) {
                    id[j].style.background = 'none';
                    id[j].style.border = 'none';
                }
                this.style.background = 'white';
                this.style.border = '2px solid #e5a871';
                this.style.borderBottom = 'none';
            }
        }
    }
    slideTas(floorTapsLi);
    slideTas(floorTapsLi1);
    slideTas(floorTapsLi2);
    slideTas(floorTapsLi3);
    slideTas(floorTapsLi4);
    slideTas(floorTapsLi5);

    //尾部友情链接节点数据
    var cooperator = document.getElementsByClassName('cooperator')[0];
    var cooperatorList = ['互联网医院', '快易捷', '疾病库', '中药材天地网', '健康网',
        '医学百科', '药通网', '中成药', '药品查询', '网上药房', '藏药', '百济新特药房网',
        '恒牛药品网', '八百方', '广誉远', '健康龙江平台', '药品库'];
    render(cooperator, cooperatorList, '<a href="javascript:void(0)">', '</a>');

    //尾部导航节点数据
    var BottomNav = document.getElementsByClassName('BottomNav')[0];
    var BottomNavList = ['关于我们', '联系我们', '资质许可', '在线客服', '健康大讲堂', '全部商品', '全部分类', '健康百科', '快速找药', '网站地图'];
    render(BottomNav, BottomNavList, '<li><a href="javascript:void(0)">', '</a></li>', '<span>|</span>');

    //map渲染 寻找节点及创建数据对象
    //限时购商品栏节点及数据
    var com = document.getElementsByClassName('commodity')[0];
    var comList = [{ data1: '抑制黑色素 祛斑美白', data2: '北京协和 维芙雅净白祛斑精', price1: '￥278', price2: '￥361.4' },
    { data1: '活动款 联系客服 包邮', data2: '北京协和 维芙雅维生素E乳', price1: '￥29.9', price2: '￥59' }];
    //限时购商品map数据渲染
    function commodity(id, arr) {
        var item = arr.map(function (item) {
            return `<a href="javascript:void(0)"><i class="move"></i>
            <div><p>${item.data1}</p><p>${item.data2}</p>
            <p><span>${item.price1}</span><span>${item.price2}</span></p>
            </div></a>`
        }).join('');
        id.innerHTML = item;
    }
    commodity(com, comList);
    //推广商品栏节点及数据
    var readySale1 = document.getElementsByClassName('readySale')[0];
    var readySale2 = document.getElementsByClassName('readySale')[1];
    var readySaleList = [[{ data1: '健康抢购', data2: '汤臣倍健 蛋白粉 450g/罐' }], [{ data1: '北京协和 维芙雅面膜', data2: '调养干燥粗糙肤质', data3: '北京协和 维芙雅面膜', data4: '调养干燥粗糙肤质' },
    { data1: '北京协和 维芙雅面膜', data2: '调养干燥粗糙肤质', data3: '北京协和 维芙雅面膜', data4: '调养干燥粗糙肤质' },
    { data1: '北京协和 维芙雅面膜', data2: '调养干燥粗糙肤质', data3: '北京协和 维芙雅面膜', data4: '调养干燥粗糙肤质' }]];
    //热销抢购map数据渲染
    function mixtrue(id, arr) {
        var res = arr[0].map(function (item) {
            return `<dt class="saleHead">
            <p class="size2">${item.data1}</p>
            <p class="size3">${item.data2}</p>
            <b></b></dt>`
        }).join('');
        var timp = arr[1].map(function (item) {
            return `<dd>
            <div class="clear">
            <i class="move1"></i>
            <p class="size2">${item.data1}</p>
            <p class="size3">${item.data2}</p>
            </div>
            <div class="clear">
            <i class="move1"></i>
            <p class="size2">${item.data3}</p>
                <p class="size3">${item.data4}</p>
                </div></dd>`
        }).join('');
        id.innerHTML = res + timp;
    }
    mixtrue(readySale1, readySaleList);
    mixtrue(readySale2, readySaleList);
    //楼层选项卡内容数据
    var Tapscontent = document.querySelectorAll('.Tapscontent');
    var TapscontentList = [{ name: '金嗓子喉片', price: '￥12.5', price2: '￥15.00' }, { name: '金嗓子喉片', price: '￥12.5', price2: '￥15.00' }, { name: '金嗓子喉片', price: '￥12.5', price2: '￥15.00' },
    { name: '金嗓子喉片', price: '￥12.5', price2: '￥15.00' }, { name: '金嗓子喉片', price: '￥12.5', price2: '￥15.00' }, { name: '金嗓子喉片', price: '￥12.5', price2: '￥15.00' },
    { name: '金嗓子喉片', price: '￥12.5', price2: '￥15.00' }, { name: '金嗓子喉片', price: '￥12.5', price2: '￥15.00' }];
    //楼层选项卡内容map渲染
    function floorRender(id, arr) {
        var timp = arr.map(function (item) {
            return `<dl class="clear"><dt></dt>
            <dd>${item.name}</dd><dd>
            <span>${item.price}</span>
            <span>${item.price2}</span>
            </dd></dl>`
        }).join('');
        id.innerHTML = timp
    }
    function tapdata(id, arr) {
        for (var i = 0; i < id.length; i++) {
            floorRender(id[i], arr);
        }
    }
    tapdata(Tapscontent, TapscontentList);
    //标语节点与内容
    var slogen = document.getElementsByClassName('slogen')[0];
    var slogenList = [{ main: '正品保障', content: '正品保障 放心购买' }, { main: '满百包邮', content: '全场满79包邮' },
    { main: '隐私包装', content: '保证您的隐私' }, { main: '准时送达', content: '收货时间由你做主' }];
    //标语内容map渲染
    function slog(id, arr) {
        var timp = arr.map(function (item) {
            return `<dl>
            <dt class="fl">
            </dt><dd class="fl">
            <p>${item.main}</p>
            <p>${item.content}</p>
            </dd></dl>`
        }).join('');
        id.innerHTML = timp
    }
    slog(slogen, slogenList);
    //指南内容
    var quideContent = document.getElementsByClassName('quideContent')[0];
    var quideContentList = [['新手入门', '购物指南', '配送服务', '支付方式', '售后保障'],
    [['新会员注册', '会员登录', '找回密码', '常见问题'], ['购物流程', '订单查询', '隐私保护', '服务协议'],
    ['配送说明', '验收与签收', '包装流程', '签约快递'], ['货到付款', '网上支付', '银行汇款', '优惠卷使用', '购物卡使用'],
    ['退换货政策', '退换货流程', '退款说明', '投诉及建议', '联系客服']]];
    //指南内容渲染
    function render2(id, arr, head, dataleft, dataright, data2left, data2right, footer) {
        var item = '';
        for (var i = 0; i < arr[0].length; i++) {
            item += head;
            item += dataleft + arr[0][i] + dataright;
            for (var j = 0; j < arr[1][i].length; j++) {
                item += data2left + arr[1][i][j] + data2right;
            }
            item += footer;
        }
        id.innerHTML = item;
    }
    render2(quideContent, quideContentList, '<dl>', '<dt>', '</dt>', '<dd><a href="javascript:void(0)">', '</a></dd>', '</dl>');

    // --------------------功能实现部分--------------------
    // 显示历史记录框
    var searchBox = document.getElementsByClassName('searchBox')[0];
    var textBox = searchBox.getElementsByClassName('textBox')[0];
    var shortcut = searchBox.getElementsByClassName('shortcut')[0];
    textBox.onfocus = function () {
        shortcut.style.display = 'block';
    }
    textBox.onblur = function () {
        // 不完善
        showHide(shortcut, shortcut);
        shortcut.style.display = 'none';
    }

    // 返回顶部
    var backTop = document.getElementsByClassName('backTop')[0];
    backTop.onclick = function () {
        window.scrollTo(0, 0);
    }

    //选项卡
    var mes = document.getElementsByClassName('mes')[0];
    var sev = document.getElementsByClassName('sev')[0];
    sevice.style.display = 'none';
    mes.style.borderBottom = '2px solid #4998eb'
    mes.onmouseover = function () {
        mes.style.borderBottom = '2px solid #4998eb'
        message.style.display = 'block';
        sevice.style.display = 'none';
        sev.style.borderBottom = 'none';
    }
    sev.onmouseover = function () {
        sev.style.borderBottom = '2px solid #4998eb'
        sevice.style.display = 'block';
        message.style.display = 'none';
        mes.style.borderBottom = 'none';
    }

}
