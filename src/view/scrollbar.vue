<template>
<!-- eslint-disable -->
    <div>
        <!-- <ul>
            <li v-for="item in 100" :key="item" @click="handleDetails(item)">
                {{item}}
            </li>
        </ul> -->

      <div class="container" style="height: 520px">
			<div data-force="30" class="layer block" style="left: 14.5%; top: 0; width: 37%">
				<div class="layer title">List A</div>
				<ul id="foo" class="block__list block__list_words">
					<li>1aaaбегемот测试</li>
					<li>2корм</li>
					<li>3антон</li>
					<li>4сало</li> 
					<li>5железосталь</li>
					<li>6валик</li>
					<li>7кровать</li>
					<li>8краб</li>
				</ul>
			</div>
		</div>
    </div>
</template>
<!-- eslint-disable -->
<script>
import Sortable from 'sortablejs'
export default {
    name: 'scrollbar',
    data() {
        return  {
            list: []
        }
    },
    activated () {
        // html2canvas 一个强大的使用js开发的浏览器网页截图工具
        // dom-to-image 一个可以将任意DOM节点转换为用JavaScript编写的矢量（SVG）或光栅（PNG或JPEG）图像的库
        // pica 一个在浏览器中调整图像大小，而不会出现像素失真，处理速度非常快的图片处理库
        // Lena.js 一个轻量级的可以给你图像加各种滤镜的js库
        // Compressor.js 一个使用本地canvas.toBlob API进行图像有损压缩的js库
        // Fabric.js 一个易于使用的基于HTML5 canvas元素的图片编辑器
        // merge-images 一个将多张图片合并成一张图的js插件
        // cropperjs 一款强大的图片裁切库, 支持灵活的图片裁切方式
        // Grade 一个基于图像中的前2种主要颜色生成互补渐变背景的库
        //Validator.js 一个强大的js表单校验库, github地址: https://github.com/validatorjs/validator.js
        //Validate.js 致力于提供一种验证数据的跨框架和跨语言方式的js库, 已通过100％代码覆盖率的单元测试 github地址: https://github.com/ansman/validate.js
        //x-spreadsheet 一个基于web的简单易用的表格插件 github: https://github.com/myliang/x-spreadsheet
        //numeral  一个用于格式化和处理数字的javascript库

        console.log("activated");
        Sortable.create(document.getElementById('foo'), {
				animation: 150,
				store: {//缓存到localStorage
					get: function(sortable) {
						var order = localStorage.getItem(sortable.options.group);
						return order ? order.split('|') : [];
					},
					set: function(sortable) {
						var order = sortable.toArray();
						localStorage.setItem(sortable.options.group, order.join('|'));
					}
				},
				onAdd: function(evt) {
					console.log('onAdd.foo:', [evt.item, evt.from]);
				},
				onUpdate: function(evt) {
					console.log('onUpdate.foo:', [evt.item, evt.from]);
				},
				onRemove: function(evt) {
					console.log('onRemove.foo:', [evt.item, evt.from]);
				},
				onStart: function(evt) {
					console.log('onStart.foo:', [evt.item, evt.from]);
				},
				onSort: function(evt) {
					console.log('onStart.foo:', [evt.item, evt.from]);
				},
				onEnd: function(evt) {
					console.log('onEnd.foo:', [evt.item, evt.from]);
				}
			});
    },
    deactivated () {
        console.log("deactivated");
    },
    methods: {
        handleDetails (item) {
            this.$router.push({
                path: '/details',
                query: {id: item}
            })
        }
    }
}
</script>


<style scoped>
li {
    width: 150px;
    height: 25px;
    background: green;
    margin: 5px 0;
    line-height: 25px;
}
</style>