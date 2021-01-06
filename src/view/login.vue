<template>
<!-- eslint-disable -->
    <div class="login">
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
    </div>
</template>

<script>
/*eslint-disable*/
import { mapState } from 'vuex'
import HelloWord from '../components/HelloWorld'
import XLSX from 'xlsx'
import FileSaver from 'file-saver'
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
            ]
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

        let myArr = [1,3,4,5,6,3,7,4];
        let newArr = myArr.filter((value,index,arr) => {
            return arr.indexOf(value) == index
        });
        console.log(newArr);
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
</style>