const appConfig = {
    screen: {
        width: 1920,
        height: 1080,
        scale: 20
    }
}

let init = () => {
    console.log(window.innerHeight + "," + window.innerWidth);
    let _el = document.body

    let hScale = window.innerHeight / appConfig.screen.height;
    let wScale = window.innerWidth / appConfig.screen.width;
    let pageH = window.innerHeight;
    let pageW = window.innerWidth;

    let isWider = (window.innerWidth / window.innerHeight) >= (appConfig.screen.width / appConfig.screen.height);
    console.log(isWider);
    if (isWider) {
        _el.style.height = window.innerHeight+'px';// '100%';
        _el.style.width = pageH * appConfig.screen.width / appConfig.screen.height + 'px';
        _el.style.top='0px';
        _el.style.left=(window.innerWidth -pageH * appConfig.screen.width / appConfig.screen.height)*0.5+'px';
        console.log(_el.style.width + "," + _el.style.height)
    }
    else {
        _el.style.width = window.innerWidth+'px';// '100%';
        _el.style.height = pageW * appConfig.screen.height / appConfig.screen.width + 'px';
        _el.style.top= 0.5*(window.innerHeight-pageW * appConfig.screen.height / appConfig.screen.width)+'px';
        _el.style.left='0px';
        console.log(_el.style.height);
        console.log(_el.style.top);
    }
    document.documentElement.style.fontSize =  (_el.clientWidth / appConfig.screen.scale) + 'px';


}
var resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize';
window.addEventListener(resizeEvt, init, false);
document.documentElement.addEventListener('DOMContentLoaded', init, false);
init()
