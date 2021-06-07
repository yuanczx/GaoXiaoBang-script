// ==UserScript==
// @name         高校邦脚本
// @namespace    https://github.com/yuanYue-byte
// @version      0.4
// @description  高校邦刷课脚本
// @author       yuanYue
// @match        *://*.class.gaoxiaobang.com/class/*
// @run-at       document-idle
// @license      MIT
// @icon         https://gimg2.baidu.com/image_search/src=http%3A%2F%2Ftm-image.tianyancha.com%2Ftm%2F503033f1b668b8448e33a2e3b173ddcb.jpg&refer=http%3A%2F%2Ftm-image.tianyancha.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1621915564&t=f9491d7b563377587cc185ec6403467e
// @grant        none
// ==/UserScript==

(function () {
    'use strict';
    setInterval(function () {
        var next = document.getElementsByClassName("chapter-next gxb-cur-point")[0];
        try {
            if (document.getElementsByClassName("quiz-item")[0]) {
                next.click();
            }
            if (document.getElementsByClassName("gxb-icon-teacher")[0]) {
                var a = document.getElementById("ueditor_0").contentWindow;
                //如不需要自动回答请注释或删除(注释)第 25 26 行代码
                var answer = document.getElementsByClassName("reply-content")[0].innerText;
                a.document.getElementsByTagName("p")[0].innerText = answer;
                setTimeout(function () { document.getElementsByClassName("gxb-btn-pri gxb-btn-nav post-submit")[0].click(); }, 3000);//延迟3秒后自动提交
                setTimeout(function () { next.click(); }, 5000);//延迟5秒后自动点击下一章节
            }
        } catch (error) { console.log(error + "此页面为视频页面无需提交答案"); }
        document.getElementsByTagName('video')[0].play();
        var videoPercent = document.getElementsByClassName("video-percent")[0].innerText;
        if (videoPercent == 100) {
            next.click()
        }
    }, 1000)


})();