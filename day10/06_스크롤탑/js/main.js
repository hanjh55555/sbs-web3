$(function() {
    $('.back-to-top').each(function() {


        // html, body 스크롤 가능한 요소를 감지
        let $el = $(scrollableElement('html', 'body'))

        // 투탑 버튼 클릭 이벤트
        $(this).on('click', function(event) {
            // 기본 동작 취소
            event.preventDefault()
            $el.animate({ scollTop : 0}, 1000)
        })

    })
})

// scollTop 을 사용할 수 있는 요소를 감지하는 함수
function scrollableElement(elements) {
    var i, len, el, $el, scrollable;

    // 전달된 매개변수(elements)를 Array(배열)의 형태로 구성된 객체 
    for(i = 0, len = arguments.length; i < len; i++) {
        el = arguments[i],
        $el = $(el);

        //스크롤 가능한 요소
        if( $el.scrollTop() > 0 ) {
            return el;
        } else {
            // scrollTop을 1로 지정했을 때,
            // 적용되면 그 요소는 scrollTop 이 가능한 요소로 판단
            $el.scrollTop(1);
            scrollable = $el.scrollTop() > 0;
            $el.scrollTop(0);
            if( scrollable ) {
                return el;
        }
    }
    
    }
    
    return [];
}