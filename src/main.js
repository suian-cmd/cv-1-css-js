// console.log('yarn global add parcel')
// console.log('parcel src/index.html')
// console.log('parcel build src/index.html --public-url .')
// console.log('dist/index.html 发布后的可执行文件')

let html = document.querySelector('#html')
let style = document.querySelector('#style')

let str = `/*你好，我是一名前端新人
*接下来我要加样式啦
*我要加的是div的样式
*/
#div1{
    border: 1px solid red;
    width: 200px;
    height: 200px;
}
/*接下来我把div变成八卦图
*注意看
*/
#div1{
    border-radius: 50%;
    box-shadow: 0 0 3px rgba(0,0,0,0.5);
    border: none;
}
/*八卦是阴阳的
*一黑一白
*/
#div1{
    background: linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 50%, rgba(0,0,0,1) 50%, rgba(0,0,0,1) 100%);
}
/* 加两个阴阳球 */
#div1::before{
    width: 100px;
    height: 100px;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    background: radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 25%, rgba(0,0,0,1) 25%, rgba(0,0,0,1) 100%);
    border-radius:50%;
}
#div1::after{
    width: 100px;
    height: 100px;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    background: radial-gradient(circle, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 25%, rgba(255,255,255,1) 25%, rgba(255,255,255,1) 100%);
    border-radius: 50%;
}
`

let str2 = '';
//console.log(string[0].charCodeAt())   //获取第一个字符的ascii码  看看是不是换行符
//string = string.replace(/\n/g, "<br>")  //replace只匹配第一个字符，使用正则匹配所有
let n = 0;

let step = () => {
    setTimeout(() => {
        if(n < str.length){
            if(str[n] === '\n'){
                str2 = str2 + '<br>'; //因为html内不认识\n换行符，需要改为<br>
            }else if(str[n] === ' '){
                str2 = str2 + '&nbsp;'
            }else{
                str2 = str2 + str[n];
            }

            html.innerHTML = str2;
            style.innerHTML = str.substring(0, n + 1);  //str.substring(indexStart[, indexEnd])
            window.scrollTo(0, 99999);  //确保屏幕一直处在最下方
            html.scrollTo(0, 99999);    //确保屏幕一直处在最下方
            n = n + 1;
            step();
        }
    })
}

step();