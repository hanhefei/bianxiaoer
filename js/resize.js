$(function () {

    $(window).load(function () {

        setTimeout(() => {
            let isIphonex;

            if (typeof window !== 'undefined' && window) {
                if(/iphone/gi.test(window.navigator.userAgent) && window.screen.height >= 812) {
                    isIphonex = true;
                } else {
                    isIphonex = false;
                }
            } else {
                isIphonex = false;
            }

            localStorage.setItem('isIphonex', isIphonex);

            var width = 375;

            var fontSize = 16;

            var clientWidth = $(this).width();

            var setFontSize = clientWidth * fontSize  / width;  

            $('html').css('font-size', setFontSize + 'px');

            $(window).resize(() => {
                var changeClientWidth = $(this).width();

                var changeSetFontSize = changeClientWidth * fontSize  / width;

                $('html').css('font-size', changeSetFontSize + 'px');
            })
        }, 0)

    })

})