"use strict";

$(function () {
  var swiper = new Swiper('.swiper-container', {
    slidesPerView: 'auto',
    spaceBetween: 12,
    direction: 'vertical',
    breakpoints: {
      768: {
        slidesPerView: 3,
        spaceBetween: 30,
        direction: 'horizontal'
      }
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true
    },
    navigation: {
      nextEl: '.swiper-button-next'
    }
  });
  $('.datepicker').daterangepicker({
    singleDatePicker: true,
    locale: {
      format: 'YYYY-MM-DD',
      applyLabel: '確認',
      cancelLabel: '取消',
      daysOfWeek: ["日", "一", "二", "三", "四", "五", "六"],
      monthNames: ["一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月"]
    }
  });
  $('.switch-inner a').click(function (e) {
    $('.switch-active').attr('src', $(this).attr('href'));
    return false;
  });

  function reserveInit() {
    $('#reservationModal .container-fluid').hide();
    $('#reservationModal .container-fluid:nth-child(1)').show();
  }

  function reserveStep(type) {
    var index = $('#reservationModal .container-fluid:visible').index();
    $('#reservationModal .container-fluid').eq(index).hide();

    if (type === "next") {
      $('#reservationModal .container-fluid').eq(index + 1).show();
    } else {
      $('#reservationModal .container-fluid').eq(index - 1).show();
    }
  }

  reserveInit();
  $('.reserveBtn').click(function (e) {
    reserveInit();
  });
  $('.nextBtn').click(function (e) {
    reserveStep('next');
  });
  $('.backBtn').click(function (e) {
    reserveStep('back');
  });
});
//# sourceMappingURL=all.js.map
