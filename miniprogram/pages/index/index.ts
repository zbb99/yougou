import {request} from "../../request/index";

Page({
    data: {
        swiperList: [],
        cateList: [],
        floorList: []
    },
    //options(Object)
    // 页面开始加载时
    onLoad: function () {
        this.getSwiperList();
        this.getCateList();
        this.getFloorList();
    },
    getSwiperList() {
        request({
            url: "https://api-hmugo-web.itheima.net/api/public/v1/home/swiperdata"
        }).then((res: any) => {
            this.setData({
                swiperList: res.data.message
            });
        });
    },
    getCateList() {
        request({
            url: "https://api-hmugo-web.itheima.net/api/public/v1/home/catitems"
        }).then((res: any) => {
            this.setData({
                cateList: res.data.message
            });
        });
    },
    getFloorList() {
        request({
            url: "https://api-hmugo-web.itheima.net/api/public/v1/home/floordata"
        }).then((res: any) => {
            this.setData({
                floorList: res.data.message
            });
        });
    }
});
