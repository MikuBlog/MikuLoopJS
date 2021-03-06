window.addEventListener('load', function () {

    var imgList = document.querySelectorAll('img')

    var loopBox = document.querySelector('.loop-box')

    var Loop = document.querySelector('.loop')

    var imgWidth = parseInt(window.getComputedStyle(imgList[0]).width)

    var length = imgList.length

    var buttonList

    var buttonListLength

    var number = 1

    var timer

    loopBox.style.left = 0

    //判断图片数量
    if(length>5||length<2) {

        throw Error("图片数量不能多于五张及低于两张")

    }

    //获取前一个索引与后一个索引的距离
    function getPosition(index) {

        var pre = number

        var now = index

        return index-number

    }

    //轮播函数
    function loop() {

        timer = setInterval(function () {

            if (number % length == 0) {

                loopBox.style.left = 0

                number = 1

                removeColor()

                changeColor()

                return

            }

            loopBox.style.left = parseInt(loopBox.style.left) - imgWidth + "px"

            number++

            removeColor()

            changeColor()

        }, 5000)

    }

    //停止轮播
    function stopLoop() {

        clearInterval(timer)

    }

    //生成按钮
    function getButton() {

        var box = document.createElement("div")

        var list = []

        box.className = "button-box"

        Loop.appendChild(box)

        imgList.forEach(function(value,index) {

            var button = document.createElement('div')

            button.className = "button"

            box.appendChild(button)

            list.push(button)

        })

        buttonList = list

        buttonListLength = list.length

        buttonList.forEach(function(value,index) {

            value.addEventListener('click',getPic(index+1))

        })

    }

    //改变按钮的颜色
    function changeColor() {

        switch(number) {
            case 1:
                buttonList[0].classList.add('button-color');
                break;
            case 2:
                buttonList[1].classList.add('button-color');
                break;
            case 3:
                buttonList[2].classList.add('button-color');
                break;
            case 4:
                buttonList[3].classList.add('button-color');
                break;
            case 5:
                buttonList[4].classList.add('button-color');
                break;
        }

    }

    //恢复按钮的颜色
    function removeColor() {

        buttonList.forEach(function(value) {

            value.classList.remove('button-color')

        })

    }

    //点击按钮切换图片
    function getPic(index) {

        return function() {

            stopLoop()

            switch(index) {

                case 1: 
                    loopBox.style.left = 0;
                    number = 1;
                    removeColor();
                    changeColor();
                    loop();
                    break;
                case 2:
                    loopBox.style.left = parseInt(loopBox.style.left) - getPosition(2)*imgWidth + "px";
                    number = 2;
                    removeColor();
                    changeColor();
                    loop();
                    break;
                case 3:
                    loopBox.style.left = parseInt(loopBox.style.left) - getPosition(3)*imgWidth + "px";
                    number = 3;
                    removeColor();
                    changeColor();
                    loop();
                    break;
                case 4:
                    loopBox.style.left = parseInt(loopBox.style.left) - getPosition(4)*imgWidth + "px";
                    number = 4;
                    removeColor();
                    changeColor();
                    loop();
                    break;
                case 5: 
                    loopBox.style.left = parseInt(loopBox.style.left) - getPosition(5)*imgWidth + "px";
                    number = 5;
                    removeColor();
                    changeColor();
                    loop();
                    break;

            }

        }

    }

    //执行接口
    function letGo() {

        getButton()

        changeColor()
    
        loop()

    }

    letGo()

})