/* eslint-disable */ 
//全局方法
import Vue from 'vue'

Vue.prototype.toRepeat = function (arr) {
    let newArr = [];
    if(arr.length > 0) {
        arr.forEach(item => {
            if(newArr.indexOf(item) == -1) {
                newArr.push(item)
            }
        })
        return newArr;
    } else {
        return newArr;
    }
} 