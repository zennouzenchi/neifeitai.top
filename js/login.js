let flag=true
const mySwitch=()=>{
    if (flag){
        $(`.pre-box`).css("transform","translateX(100%)")
        $(".pre-box").css("background-color","rgb(175,211,185)")
        $("img").attr("src","./img/9545A9A21FFD7729585046672713E6E2.gif")
        $(".pre-box-h1").text("NEW USER")
        $(".pre-box-p").text("JOIN US!")

    }else {
        $('.pre-box').css("transform","translateX(0%)")
        $(".pre-box").css("background-color","rgb(204,218,140)")
        $("img").attr("src","./img/7CD7E34645BA2D97220169016FBD7F9D.gif")
        $(".pre-box-h1").text("WELCOME")
        $(".pre-box-p").text("")
    }
    flag = !flag
}