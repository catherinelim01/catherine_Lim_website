$(document).ready(function () {
    function workSlider() {

        $('.slider--prev, .slider--next').click(function () {

            var $this = $(this),
                curLeft = $('.slider').find('.slider--item-left'),
                curLeftPos = $('.slider').children().index(curLeft),
                curCenter = $('.slider').find('.slider--item-center'),
                curCenterPos = $('.slider').children().index(curCenter),
                curRight = $('.slider').find('.slider--item-right'),
                curRightPos = $('.slider').children().index(curRight),
                totalWorks = $('.slider').children().length,
                $left = $('.slider--item-left'),
                $center = $('.slider--item-center'),
                $right = $('.slider--item-right'),
                $item = $('.slider--item');

            $('.slider').animate({ opacity: 0 }, 400);

            setTimeout(function () {

                if ($this.hasClass('slider--next')) {
                    if (curLeftPos < totalWorks - 1 && curCenterPos < totalWorks - 1 && curRightPos < totalWorks - 1) {
                        $left.removeClass('slider--item-left').next().addClass('slider--item-left');
                        $center.removeClass('slider--item-center').next().addClass('slider--item-center');
                        $right.removeClass('slider--item-right').next().addClass('slider--item-right');
                    }
                    else {
                        if (curLeftPos === totalWorks - 1) {
                            $item.removeClass('slider--item-left').first().addClass('slider--item-left');
                            $center.removeClass('slider--item-center').next().addClass('slider--item-center');
                            $right.removeClass('slider--item-right').next().addClass('slider--item-right');
                        }
                        else if (curCenterPos === totalWorks - 1) {
                            $left.removeClass('slider--item-left').next().addClass('slider--item-left');
                            $item.removeClass('slider--item-center').first().addClass('slider--item-center');
                            $right.removeClass('slider--item-right').next().addClass('slider--item-right');
                        }
                        else {
                            $left.removeClass('slider--item-left').next().addClass('slider--item-left');
                            $center.removeClass('slider--item-center').next().addClass('slider--item-center');
                            $item.removeClass('slider--item-right').first().addClass('slider--item-right');
                        }
                    }
                }
                else {
                    if (curLeftPos !== 0 && curCenterPos !== 0 && curRightPos !== 0) {
                        $left.removeClass('slider--item-left').prev().addClass('slider--item-left');
                        $center.removeClass('slider--item-center').prev().addClass('slider--item-center');
                        $right.removeClass('slider--item-right').prev().addClass('slider--item-right');
                    }
                    else {
                        if (curLeftPos === 0) {
                            $item.removeClass('slider--item-left').last().addClass('slider--item-left');
                            $center.removeClass('slider--item-center').prev().addClass('slider--item-center');
                            $right.removeClass('slider--item-right').prev().addClass('slider--item-right');
                        }
                        else if (curCenterPos === 0) {
                            $left.removeClass('slider--item-left').prev().addClass('slider--item-left');
                            $item.removeClass('slider--item-center').last().addClass('slider--item-center');
                            $right.removeClass('slider--item-right').prev().addClass('slider--item-right');
                        }
                        else {
                            $left.removeClass('slider--item-left').prev().addClass('slider--item-left');
                            $center.removeClass('slider--item-center').prev().addClass('slider--item-center');
                            $item.removeClass('slider--item-right').last().addClass('slider--item-right');
                        }
                    }
                }

            }, 400);

            $('.slider').animate({ opacity: 1 }, 400);

        });

    }

    function transitionLabels() {

        $('.work-request--information input').focusout(function () {

            var textVal = $(this).val();

            if (textVal === "") {
                $(this).removeClass('has-value');
            }
            else {
                $(this).addClass('has-value');
            }

            // correct mobile device window position
            window.scrollTo(0, 0);

        });

    }

    workSlider();
    transitionLabels();
});