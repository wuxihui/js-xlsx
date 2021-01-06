<template>
<!-- eslint-disable -->
    <div class="login">
         <div class="viedo-main">
            <nav id="wrapper">
                <ul>
                    <li><a href="">山楂</a></li>
                    <li><a href="">梨子</a></li>
                    <li><a href="">菠萝</a></li>
                    <li><a href="">香蕉</a></li>
                    <li><a href="">芒果</a></li>
                    <li><a href="">猕猴桃</a></li>
                    <li><a href="">西柚</a></li>
                    <li><a href="">火龙果</a></li>
                    <li><a href="">橙子</a></li>
                </ul>
            </nav>
        </div>


        <h1 @click="handleFooter">底部弹起弹框</h1>
        <van-popup v-model="show" position="bottom" round :style="{ height: '30%' }" />
        <van-button type="primary" @click="handleToRepeat">主要按钮</van-button>
        <van-icon name="chat-o" />
        <van-image width="100" height="100" src="https://img.yzcdn.cn/vant/cat.jpeg" />
        <van-empty description="描述文字" />

        <ve-histogram :data="chartData" :events="chartEvents"></ve-histogram>
        <!-- <input type="text" v-model="wrd"> -->
        <HelloWord :word.sync="wrd" />

        <button @click="exportData">导出</button>
        <button @click="exportRs">导出Excel报表</button>

        <span class="element"></span> 
        <!-- <ul>
            <li class="reveal-top">
                <img src="http://g.hiphotos.baidu.com/image/pic/item/37d3d539b6003af37401eb21392ac65c1038b633.jpg" class="img">
            </li>
            <li class="reveal-top">
                <img src="http://g.hiphotos.baidu.com/image/pic/item/37d3d539b6003af37401eb21392ac65c1038b633.jpg" class="img">
            </li>
        </ul> -->
    </div>
</template>

<script>
/*eslint-disable*/
import { mapState } from 'vuex'
import HelloWord from '../components/HelloWorld'
import XLSX from 'xlsx'
import FileSaver from 'file-saver'
import scrollReveal from 'scrollreveal'
import Iscroll from 'iscroll'
import Typed from 'typed.js'
export default {
    name: 'Login',
    data() {
        let self = this;
        this.chartEvents = {
            click: function (e) {
                self.name = e.name
                console.log(e)
            }
        };
        return {
           wrd: '',
           show: false,
           arr: [1, 2, 4, 5, 3, 4, 5, 6, 2],
           chartData: {
                columns: ['日期', '访问用户', '下单用户', '下单率'],
                rows: [
                    { '日期': '1/1', '访问用户': 1393, '下单用户': 1093, '下单率': 0.32 },
                    { '日期': '1/2', '访问用户': 3530, '下单用户': 3230, '下单率': 0.26 },
                    { '日期': '1/3', '访问用户': 2923, '下单用户': 2623, '下单率': 0.76 },
                    { '日期': '1/4', '访问用户': 1723, '下单用户': 1423, '下单率': 0.49 },
                    { '日期': '1/5', '访问用户': 3792, '下单用户': 3492, '下单率': 0.32 },
                    { '日期': '1/6', '访问用户': 4593, '下单用户': 4293, '下单率': 0.78 }
                ]
            },
            dataArr: [
                { name: '张三', age: 12, sex: '男', department: 'department1' },
                { name: '李四', age: 13, sex: '女', department: 'department2' }
            ],
            scrollReveal: scrollReveal()
        }
    },
    components: {
        HelloWord
    },
    computed: {
        ...mapState('login', ['loginList'])
    },
    mounted() {
        console.log(this.loginList);
        // filter方法数组去重
        let myArr = [1,3,4,5,6,3,7,4];
        let newArr = myArr.filter((value,index,arr) => {
            return arr.indexOf(value) == index
        });
        console.log(newArr);
        //Scroll Reveal js动画效果
        this.scrollReveal.reveal('.reveal-top', {
            // 动画的时长
            duration: 2000,
            // 延迟时间
            delay: 500,
            // 动画开始的位置，'bottom', 'left', 'top', 'right'
            origin: 'top',
            // 回滚的时候是否再次触发动画
            reset: false,
            // 在移动端是否使用动画
            mobile: false,
            // 滚动的距离，单位可以用%，rem等
            distance: '200px',
            // 其他可用的动画效果
            opacity: 0.001,
            easing: 'linear',
            scale: 0.9,
        });

        document.addEventListener("touchmove", function (ev) {
                ev.preventDefault()
            }, { passive: false })
        let iscroll = new Iscroll("#wrapper",{
            scrollX: true, //横轴滚动
            scrollY: false, //纵轴false
            mouseWheel: true, //开启鼠标滚动
            scrollbars: 'custom',//true, //底部显示滚动条  滚动条样式
            momentum: true, //在用户快速触摸屏幕时，你可以开/关势能动画。关闭此功能将大幅度提升性能
            invertWheelDirection: false, //当鼠标滚轮支持激活后，在有些情况下需要反转滚动的方向
            fadeScrollbars: true, //不想使用滚动条淡入淡出方式时，需要设置此属性为false以便节省资源
            shrinkScrollbars: 'scale', //clip是移动指示器到它容器的外面，效果就是滚动条收缩起来，简单的移动到屏幕以外的区域。属性设置为此值后将大大的提升整个iScroll的性能
            snap: 'li',
        })
        //酷炫的打字机效果
        let typed = new Typed('.element', {
            strings: ["纠正一个错误的方法有很多", "而解决一个错误的终极方法，就是不给它发生的机会。"], //输入内容, 支持html标签
            typeSpeed: 100, //打字速度
            backSpeed: 50 //回退速度
        });
    },
    methods: {
       handleFooter() {
           this.show = !this.show;
       },
       handleToRepeat() {
           this.toRepeat(this.arr);
       },
       exportData() {
            let tableData = [
                ['姓名', '年龄', '性别', '部门/小组']
            ] // 表格表头
            this.dataArr.forEach (item => {
                let rowData = []
                rowData = [
                    item.name,
                    item.age,
                    item.sex,
                    item.department,
                ]
                tableData.push(rowData)
            })
            let ws = XLSX.utils.aoa_to_sheet(tableData)
            let wb = XLSX.utils.book_new()
            XLSX.utils.book_append_sheet(wb, ws, '数据') // 工作簿名称
            XLSX.writeFile(wb, '数据.xlsx') // 保存的文件名
       },
       exportRs () {
            // Anime.js 一个JavaScript动画库，可以处理CSS属性，单个CSS转换，SVG或任何DOM属性以及JavaScript对象
            // Velocity 一个高效的 Javascript 动画引擎，与jQuery的 $.animate() 有相同的API, 同时还支持彩色动画、转换、循环、画架、SVG支持和滚动等效果
            // Vivus 一个零依赖的JavaScript动画库，可以让我们用SVG制作动画，使其具有被绘制的外观
            // GreenSock JS 一个JavaScript动画库，用于创建高性能、零依赖、跨浏览器动画，已在超过400万个网站上使用, 并且可以在React、Vue、Angular项目中使用
            // Scroll Reveal 零依赖，为 web 和移动浏览器提供了简单的滚动动画，以动画的方式显示滚动中的内容
            // Kute.js 一个强大高性能且可扩展的原生JavaScript动画引擎，具有跨浏览器动画的基本功能
            // Typed.js 一个轻松实现打字效果的js插件
            // fullPage.js 一个可轻易创建全屏滚动网站的js滚动动画库, 兼容性无可替代
            // iscroll 移动端使用的一款轻量级滚动插件
            //SortableJS 功能强大的JavaScript 拖拽库
            // var param = {}; // 参数
            // let url = '接口地址';
            // axios.post(url, param, {responseType: 'blob'})
            //     .then(function (response) {
            //         var data =  response.data;
            //         var fileName = response.headers.filename;
            //         saveAs(data,decodeURI(fileName));
            //     })
            //     .catch(function (error) {
            //         console.log('导出失败，请稍后重试');
            //     });
            let blob = new Blob(["Hello, world!"], {type: "text/plain;charset=utf-8"});
            FileSaver.saveAs(blob, "helloWorld.txt");
       }
    }
}
</script>

<style scoped>
@import '../styles/login.css';
nav{
    width: 100%;
    height: 2rem;
    line-height: 2rem;   
    background-color: green;
    overflow: auto;
}
nav ul {
    width: 150%;
    display: flex;
    align-items: center;
}
nav ul li {
    flex: 1;
}
/* .typed-cursor{
    opacity: 1;
    -webkit-animation: blink 0.7s infinite;
    -moz-animation: blink 0.7s infinite;
    animation: blink 0.7s infinite;
}
@keyframes blink{
    0% { opacity:1; }
    50% { opacity:0; }
    100% { opacity:1; }
}
@-webkit-keyframes blink{
    0% { opacity:1; }
    50% { opacity:0; }
    100% { opacity:1; }
}
@-moz-keyframes blink{
    0% { opacity:1; }
    50% { opacity:0; }
    100% { opacity:1; }
} */
</style>