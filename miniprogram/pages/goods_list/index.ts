// pages/goods_list/index.ts
import {request} from '../../request/index';

Page({

    /**
     * 页面的初始数据
     */
    data: {
        tabs: [
            {
                id: 0,
                value: '综合',
                isActive: true
            },
            {
                id: 1,
                value: '销量',
                isActive: false
            },
            {
                id: 2,
                value: '价格',
                isActive: false
            }
        ],
        goodsList: []
    },

    // 总页数
    totalPages: 1,
    queryParams: {
        query: '',
        cid: '',
        pagenum: 1,
        pagesize: 10
    },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        this.queryParams.cid = <string>options.cid;
        this.getGoodsList();
    },
    // 页面触底事件
    onReachBottom() {
        if (this.queryParams.pagenum >= this.totalPages) {
            // 没有下一页
            wx.showToast({
                title: '暂无更多数据',
                icon: "none"
            });
        } else {
            this.queryParams.pagenum++;
            this.getGoodsList();
        }
    },

    //下拉事件
    onPullDownRefresh() {
        this.queryParams.pagenum = 1;
        this.setData({
            goodsList: []
        });
        this.getGoodsList();
    },

    async getGoodsList() {
        const res: any = await request({
            url: "/goods/search",
            data: this.queryParams
        });
        // 获取总条数
        this.totalPages = Math.ceil(res.total / this.queryParams.pagesize);
        const goodsList: any = [...this.data.goodsList, ...res.goods];
        this.setData({
            goodsList
        });
        // 关闭下拉刷新loading
        wx.stopPullDownRefresh();
    }
    ,
    handleTabChange(e: any) {
        const index = e.detail;
        let {tabs} = this.data;
        tabs.forEach((item, i) => {
            item.isActive = index === i;
            /* if (index === i) {
                 item.isActive = true;
             } else {
                 item.isActive = false;
             }*/
        });

        this.setData({
            tabs: tabs
        });
    }


});

