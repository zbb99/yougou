// pages/category/index.ts

import {request} from '../../request/index';

Page({

    /**
     * 页面的初始数据
     */
    data: {

        // 左侧菜单数据
        leftMenuList: [],
        // 右侧商品数据
        rightContent: [],
        currentIndex: 0,
        scrollTop: 0
    },
    cateList: [],
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function () {
        /*获取本地数据*/
        const cates = wx.getStorageSync('cates');
        if (!cates) {
            this.getCateList();
        } else {
            if (Date.now() - cates.time > 1000 * 10 ) {
                this.getCateList();
            } else {
                this.cateList = cates.data;
                this.menuListInit();
            }
        }
    },
    handleItemTap(e: any) {
        const index = e.currentTarget.dataset.index;
        const {children: rightContent} = this.cateList[index];
        this.setData({
            currentIndex: index,
            rightContent: rightContent,
            scrollTop: 0
        });
    },

    async getCateList() {
        this.cateList = <any>await request({
            url: "/categories"
        });
        // 放入存储中
        wx.setStorageSync("cates", {time: Date.now(), data: this.cateList});
        this.menuListInit();

    },
    menuListInit() {
        let leftMenuList: any = this.cateList.map((item: any) => item.cat_name);
        const {children: rightContent} = this.cateList[0];
        this.setData({
            leftMenuList,
            rightContent: rightContent
        });
    }
});
