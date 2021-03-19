$(".slide_group").slick({
    autoplay: true, // 자동재생
    autoplaySpeed: 5000, // 간격시간
    dots: true, // 동그라미버튼
    speed: 600, // 바뀌는시간(생략가능)
    slidesToShow: 1, // 보여질슬라이드수(생략가능)
    slidesToScroll: 1, // 이동슬라이드수(생략가능)
    pauseOnHover: true, // 마우스오버시 멈춤여부(생략가능)
    pauseOnDotsHover: true, // 동그라미번호버튼에 호버시 멈춤여부(생략가능)
    pauseOnFocus: false, // 동그라미번호버튼 클릭시 자동실행 멈춤여부
    cssEase: 'linear', // 속도함수(생략가능)
    draggable: true, // 마우스드래그시 슬라이드 교체가능여부(생략가능)
    fade: false, // 슬라이드가 수평으로 이동하지 않고, 제자리에서 사라지고 나타남(생략가능)
    arrows: true, // 좌우화살표 사용여부(생략가능)
    prevArrow: '<button class="prev"><i class="fas fa-angle-left"></i></button>',
    nextArrow: '<button class="next"><i class="fas fa-angle-right"></i></button>',
})

// 네비게이션 li 클릭 시 불들어오게 제어
$('.nav .depth1 > li').on('click', function () {
    $(this)
        .addClass('on')
        .siblings().removeClass('on')
})

// 네비게이션 눌렀을때 부드럽게 해당 위치로 이동시키기(해당위치는 패딩으로 헤더만큼 여유를 만들어 놓기)
var aboutNear = $('#articleLucky').offset().top + 600
var skillNear = $('#article2').offset().top + 350
var portNear = $('#article3').offset().top + 400
var contNear = $('#article4').offset().top + 450
var wh = $(window).height()
$('.nav .depth1 > li').on('click', function (e) {
    e.preventDefault()
    $(this).addClass('on').siblings().removeClass('on')
    var num = $(this).index()
    if (num === 0) {
        $('html').stop().animate({
            scrollTop: aboutNear
        }, 2000)
    } else if (num === 1) {
        $('html').stop().animate({
            scrollTop: skillNear
        }, 2000)
    } else if (num === 2) {
        $('html').stop().animate({
            scrollTop: portNear
        }, 2000)
    } else {
        $('html').stop().animate({
            scrollTop: contNear
        }, 2000)
    }
})

// 스크롤 시 특정구역에 애니메이션 발생시키기 + 리셋기능
var aboutNear1 = $('#article1').offset().top - (wh - 700)
var aboutNear2 = $('#article1').offset().top - (wh - 1000)
var skillNear1 = $('#article2').offset().top - (wh)

$(window).on('scroll', function () {
    var sct = $(this).scrollTop()

    // About me 상단(내용생성)
    if (sct >= aboutNear1 && !$('#article1').hasClass('on')) {
        $('#article1').addClass('on')
    } else if (sct === 0) {
        $('#article1').removeClass('on')
    }

    // About me 상단(배경생성,제거)
    if (sct >= aboutNear1 && !$('#article1').hasClass('on2')) {
        $('#article1').addClass('on2')
        $('#article1').removeClass('on3')
    } else if (sct === 0 && !$('#article1').hasClass('on3')) {
        $('#article1').addClass('on3')
        $('#article1').removeClass('on2')
    }

    // About me 상단(내용제거)
    if (sct === 0) {
        $('#article1').addClass('on4')
    } else if (sct >= aboutNear1 && $('#article1').hasClass('on4')) {
        $('#article1').removeClass('on4')
    }

    // About me 상단(얼굴이미지)
    if (sct >= aboutNear1 && !$('#article1').hasClass('on5')) {
        $('#article1').addClass('on5')
        $('#article1').removeClass('on6')
    } else if (sct === 0 && !$('#article1').hasClass('on6')) {
        $('#article1').addClass('on6')
        $('#article1').removeClass('on5')
    }

    // About me 상단(라이트)
    if (sct >= aboutNear1 && !$('#article1').hasClass('on7')) {
        $('#article1').addClass('on7')
        $('#article1').removeClass('on8')
    } else if (sct === 0 && !$('#article1').hasClass('on8')) {
        $('#article1').addClass('on8')
        $('#article1').removeClass('on7')
    }

    // About me 하단
    if (sct >= aboutNear2 && !$('#articleAdd').hasClass('on')) {
        $('#articleAdd').addClass('on')
    } else if (sct === 0) {
        $('#articleAdd').removeClass('on')
    }

    // Skills 상단 스크롤 시 on 제거 이벤트
    if (sct <= skillNear1 && $('#article2').hasClass('on')) {
        $('#article2').removeClass('on')
    }
})

// 맨위로 버튼 클릭 시 부드럽게 스크롤시키기
$('.topbutton').on('click', function (e) {
    e.preventDefault()
    var sct = $(window).scrollTop()
    if (sct === 0) {
        return false
    } else {
        $('html').animate({
            scrollTop: 0
        }, 500)
    }

})

// 파워의 온버튼 클릭 시 스킬 작동하게하기
$('.power .on').on('click', function (e) {
    e.preventDefault()
    if (!$('#article2').hasClass('on')) {
        $('#article2').addClass('on')
    }
})

// 로딩애니메이션
var i = 0
var timer = setInterval(add, 25)

function add() {
    i++
    if (i > 100) {
        clearInterval(timer)
        $('.introAni').fadeOut(500)
        return false
    }
    $('.introAni .numBox > p').text(i + '%')
}
$('.introAni').on('click', function () {
    $(this).fadeOut(100)
})

// 폼 데이터유효성 체크
$('#article4 .depth2 form').on('submit', function () {

    // submit을 이용한 보더 리셋
    $('input').css({
        border: '1px solid #ddd'
    })

    // 이름 유효성체크
    var irum = $('#irum').val()
    var check2 = /^[가-힣]+$/
    if (irum.length>=2) {

        // 한글범위인지 유효성체크
        if (!check2.test(irum)) {
            alert('이름은 한글 두글자 이상입니다.')
            $('#irum').css({
                border: '1px solid #f00'
            }).focus().select()
            return false
        }

    // 글자수 유효성 체크
    } else {
        alert('이름은 한글 두글자 이상입니다.')
        $('#irum').css({
            border: '1px solid #f00'
        }).focus().select()
        return false
    }

    // 휴대폰번호 유효성체크 : 중간번호(숫자 3~4개), 끝번호(숫자)
    var hp1 = $('#hp1').val()
    var hp2 = $('#hp2').val()
        // /[0-9]{3,4}]/ = 0~9까지 3개에서 4개만 표기하겠다는 정규표현식
    var check3 = /^[0-9]{3,4}$/ // 또는 /d{3,4}
    var check4 = /^[0-9]{4}$/
    if ( !check3.test(hp1) ) {
        alert('번호 형식이 맞지 않습니다.')
        $('#hp1').css({
            border: '1px solid #f00'
        }).focus().select()
        return false
    } else if (  !check4.test(hp2) ) {
        alert('번호 형식이 맞지 않습니다.')
        $('#hp2').css({
            border: '1px solid #f00'
        }).focus().select()
        return false
    }

    // 이메일 아이디 유효성체크 : 특수문자제외
    var emailid = $('#emailid').val()
    // []안에 내용이 최소 한번은 반복되겠다는 의미로 +를 붙여줌
    var check5 = /^[a-zA-Z0-9]+$/
    if (!check5.test(emailid)) {
        alert('이메일 형식이 맞지 않습니다.')
        $('#emailid').css({
            border: '1px solid #f00'
        }).focus().select()
        return false
    }

    var emaildo = $('#emaildomain').val()
    // []안에 내용이 최소 한번은 반복되겠다는 의미로 +를 붙여줌 그다음에 특수문자.이 나온다는 의미
    // 앞에 있는 내용이[] +는 최소 1번이상 *는 최소 0번이상 반복
    // 따라서 *를 붙이는것은 안나올 수도 있기 때문에라는 의미
    // 회사마다 .com 이던지 .co.kr이던지 다르게 끝날 수 있기 때문에
    var check6 = /^[a-zA-Z0-9]+[\.][a-z]+([\.][a-z]+)*$/
    if (emaildo !== '') {

        // 도메인에 내용이 입력됐을때 check6에 맞지 않는다면
        if (!check6.test(emaildo)) {
            alert('이메일 형식이 맞지 않습니다.')
            $('#emaildomain').css({
                border: '1px solid #f00'
            }).focus().select()
            return false
        }

    } else {
        // 도메인에 내용이 빈칸이라면
        alert('이메일 도메인을 선택해주세요.')
        $('#emaildomain').css({
            border: '1px solid #f00'
        }).focus().select()
        return false
    }

    return false // 테스트 완료 후 삭제해야 서브밋 작동함
})


// option을 선택할때마다 일어나는 change 메소드 활용
$('#domainlist').on('change', function () {
    var doval = $('#domainlist option:selected').val()
    if (doval !== 'noselect' && doval != 'self') {
        $('#emaildomain').val(doval).css({
            background: '#fff'
        })

    } else if (doval === 'noselect') {
        $('#emaildomain').attr({
            disabled: true
        }).val('').css({
            background: '#efefef4d'
        })

    } else {
        $('#emaildomain').attr({
            disabled: false
        }).val('').css({
            background: '#fff'
        })
    }
})