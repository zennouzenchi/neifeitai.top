let flag=true
let loader_animation = false
const mySwitch=()=>{
    if (flag){
        $(`.pre-box`).css("transform","translateX(100%)")
        $(".pre-box").css("background-color","rgb(175,211,185)")
        $("img").attr("src","./img/9FDF669B43371C14A6396D7C0F4A9DD9.gif")
        $(".img-box img").css("width","80%")
        $(".pre-box-h1").text("NEW USER")
        $(".pre-box-p").text("JOIN US!")

    }else {
        $('.pre-box').css("transform","translateX(0%)")
        $(".pre-box").css("background-color","rgb(204,218,140)")
        $("img").attr("src","./img/9545A9A21FFD7729585046672713E6E2.gif")
        $(".pre-box-h1").text("WELCOME")
        $(".img-box img").css("width","100%")
        $(".pre-box-p").text("")
    }
    flag = !flag
}
const login=()=>{
    // if (loader_animation){
    //     $(".loader_box").show()
    // }else {
    //     $(".loader_box").hide()
    // }
    // loader_animation = !loader_animation
}

const regist=()=>{

}