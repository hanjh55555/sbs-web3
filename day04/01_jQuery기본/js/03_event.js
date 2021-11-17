
//문서가 준비 되었을 때, 실행되는 함수
$(function() {

    // $('#item1').on('이벤트 타입', '콜백함수');
    // $('#item1').on('click', function()  {
    $('#item1').on('click', () => {
        $('#item1').css('color', 'hotpink');
    });

    $('#item2').on('click', function() {
        $(this).css('color', 'hotpink');
    });

    $('#item3').on('mouseover', function() {
        $(this).css('color', 'hotpink')
        $(this).css('background-color', 'royalblue')
    });

    $('#item3').on('mouseout', function() {
        $(this).css('color', 'white')
        $(this).css('background-color', '#3498db')
    });

    $('#item4')
    .on('mouseover', function() {
        $(this).css('color', 'hotpink')
        $(this).css('background-color', 'royalblue')
    })
    .on('mouseout', function() {
        $(this).css('color', 'white')
        $(this).css('background-color', '#3498db')
    });

    $('#item5')
    .on('mouseover', function() {
        $(this).css('color', 'hotpink')
        $(this).css('background-color', 'royalblue')
    })
    .on('mouseout', function() {
        $(this).css('color', 'white')
        $(this).css('background-color', '#3498db')
    })
    .on('click', function() {
        $(this).css('color', 'purple')
        $(this).css('background-color', 'cornflowerblue')
    })
    .on('dblclick', function() {
        $(this).css('color', 'red')
        $(this).css('background-color', 'black')
    });

});