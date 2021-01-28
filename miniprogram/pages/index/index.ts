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
    async getSwiperList() {
        const res: any = await request({
            url: "/home/swiperdata"
        });
        this.setData({
            swiperList: res
        });
    },
    async getCateList() {
        const res: any = await request({
            url: "/home/catitems"
        });
        this.setData({
            cateList: res
        });
    },
    async getFloorList() {
        const res: any = await request({
            url: "/home/floordata"
        });
        this.setData({
            floorList: res
        });
    }
});
