import {tab} from './tab.js'
import {marquee} from './marquee.js'
import './styles/index.css'
import './styles/marquee.less'
tab()
marquee()

const fn=()=>{
    console.log('你好');
}

console.log(fn);

// 引入图片-使用
import gifSrc from './assets/1.gif'
const gif = document.createElement("img")
gif.src = gifSrc
document.body.appendChild(gif)

// 引入字体图标文件
import './assets/fonts/iconfont.css'

import App from './app.vue'