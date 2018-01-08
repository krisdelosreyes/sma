/**
 * Created by esuyat on 8/23/16.
 */
(function(){

    var canvas = $('#canvas');
    var context = canvas[0].getContext('2d');
    var canvasHeight = canvas.height();
    var canvasWidth = canvas.width();
    var isExpanded = false;
    var imagesLoaded = 0;
    var itemIndex = 1;
    var images = ['/content/dam/commercial-au/specialty/sma/caregiver/en_au/images/home/marquee/1.png', '/content/dam/commercial-au/specialty/sma/caregiver/en_au/images/home/marquee/2.png', '/content/dam/commercial-au/specialty/sma/caregiver/en_au/images/home/marquee/3.png', '/content/dam/commercial-au/specialty/sma/caregiver/en_au/images/home/marquee/4.png',
    '/content/dam/commercial-au/specialty/sma/caregiver/en_au/images/home/marquee/5.png'];


    var imagePaths = [
        [
            {x:0,y:0},
            {x:0,y:canvasHeight},
            {x:300,y:canvasHeight},
            {x:155,y:0}
        ],

        [
            {x:155,y:0},
            {x:300,y:canvasHeight},
            {x:445,y:canvasHeight},
            {x:395,y:0}
        ],

        [
            {x:395,y:0},
            {x:445,y:canvasHeight},
            {x:586,y:canvasHeight},
            {x:632,y:0}
        ],

        [
            {x:632,y:0},
            {x:586,y:canvasHeight},
            {x:726,y:canvasHeight},
            {x:868,y:0}
        ],


        [
            {x:868,y:0},
            {x:726,y:canvasHeight},
            {x:canvasWidth,y:canvasHeight},
            {x:canvasWidth,y:0}
        ]

    ];


    canvas.css('width', '100%');

    for(var i = 0; i < images.length; i++) {

        var imageObj = new Image();
        imageObj.src = images[i];

        imageObj.onload = function () {
            imagesLoaded++;
            if(imagesLoaded == images.length) {
                drawImages();
            }

        };

    }

    function drawImages() {

        for (var i=0; i<images.length; i++) {
            var path = imagePaths[i];
            var imageObj = new Image();
            imageObj.src = images[i];

            context.save();
            // create mask

            var mask = new window.smnrxs.Mask(canvas, path)

            context.clip();

            context.drawImage(imageObj, 0, 0, canvasWidth, canvasHeight)

            context.restore();
        }
    }


    $(window).resize( resizehandler)
    function resizehandler() {
        context.clearRect(0, 0, canvasWidth, canvasHeight);
        drawImages();
    }

    function moveSelectedImageAtTheEnd(index) {
        images.push(images.splice(index, 1)[0]);
        imagePaths.push(imagePaths.splice(index, 1)[0]);
    }


    moveSelectedImageAtTheEnd(itemIndex);

    var lastObj =  {
        mx: imagePaths[imagePaths.length-1][0].x,
        my:0,
        l1x:imagePaths[imagePaths.length-1][1].x,
        l1y:canvasHeight,
        l2x:imagePaths[imagePaths.length-1][2].x,
        l2y:imagePaths[imagePaths.length-1][2].y,
        l3x:imagePaths[imagePaths.length-1][3].x,
        l3y:imagePaths[imagePaths.length-1][3].y
    };

    var destObj =  {
            mx: 0,
            my: 0,
            l1x:0,
            l1y:canvasHeight,
            l2x:canvasWidth,
            l2y:canvasHeight,
            l3x:canvasWidth,
            l3y:0
    }

    canvas.on('click touchstart', clickHandler);

    function clickHandler() {


        if(!isExpanded) {
            TweenLite.to(lastObj,1,
                {
                    mx: 0,
                    my: 0,
                    l1x:0,
                    l1y:canvasHeight,
                    l2x:canvasWidth,
                    l2y:canvasHeight,
                    l3x:canvasWidth,
                    l3y:0,
                    ease:Power4.easeOut,
                    onStart: start,
                    onUpdate: update,
                    onComplete: complete
                });
        }else {

            TweenLite.to(lastObj,1,
                {
                    mx: imagePaths[imagePaths.length-1][0].x,
                    my:0,
                    l1x:imagePaths[imagePaths.length-1][1].x,
                    l1y:canvasHeight,
                    l2x:imagePaths[imagePaths.length-1][2].x,
                    l2y:imagePaths[imagePaths.length-1][2].y,
                    l3x:imagePaths[imagePaths.length-1][3].x,
                    l3y:imagePaths[imagePaths.length-1][3].y,
                    ease:Power4.easeOut,
                    onStart: start,
                    onUpdate: update,
                    onComplete: complete
                });
        }

    }
    function start() {
        canvas.off('click touchstart', clickHandler);
    }

    function update() {
        context.clearRect(0, 0, canvasWidth, canvasHeight);

        for (var i=0; i<images.length; i++) {

            var path = imagePaths[i];
            var imageObj = new Image();
            imageObj.src = images[i];

            context.save();
            // create mask

            context.beginPath();

            if(i === (images.length-1)) {
                context.moveTo(lastObj.mx, lastObj.my);
                context.lineTo(lastObj.l1x, lastObj.l1y);
                context.lineTo(lastObj.l2x, lastObj.l2y);
                context.lineTo(lastObj.l3x, lastObj.l3y);
            }else {
                context.moveTo(path[0].x, path[0].y);
                context.lineTo(path[1].x, path[1].y);
                context.lineTo(path[2].x, path[2].y);
                context.lineTo(path[3].x, path[3].y);
            }

            context.closePath();

            context.clip();

            context.drawImage(imageObj, 0, 0, canvasWidth, canvasHeight)

            context.restore();
        }

    }

    function complete() {
        isExpanded = !isExpanded;
        canvas.on('click touchstart', clickHandler);

    }


})();

// MARQUEE CLASS DEFINITION
// ======================
(function (window) {
    'use strict';

    function Marquee() {

    }

    window.smnrxs = window.smnrxs || {};
    window.smnrxs.Marquee = Marquee;
})(window);

// MARQUEE CLASS DEFINITION
// ======================
(function (window) {
    'use strict';

    function Mask(canvas, path) {

        var context = canvas[0].getContext('2d');

        context.beginPath();
        context.moveTo(path[0].x, path[0].y);
        context.lineTo(path[1].x, path[1].y);
        context.lineTo(path[2].x, path[2].y);
        context.lineTo(path[3].x, path[3].y);
        context.closePath();

      //  this.clicked = callback;
    }

    Mask.prototype.rect = {};


    window.smnrxs = window.smnrxs || {};
    window.smnrxs.Mask = Mask;
})(window);



//http://stackoverflow.com/questions/29300280/update-html5-canvas-rectangle-on-hover
