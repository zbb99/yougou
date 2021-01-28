import RequestOption = WechatMiniprogram.RequestOption;

let ajaxTimes = 0;
export const request = (params: RequestOption) => {
    ajaxTimes++;
    wx.showLoading({
        title: "加载中",
        mask: true
    });
    // 公共url
    const baseUrl = 'https://api-hmugo-web.itheima.net/api/public/v1';
    return new Promise((resolve, reject) => {
        wx.request({
            ...params,
            url: baseUrl + params.url,
            success: (res: any) => {
                resolve(res.data.message);
            },
            fail: (err) => {
                reject(err);
            },
            complete: () => {
                /*
                *   ajaxTimes说明
                *   每当发送请求是加1
                *   请求成功后减1
                *   当ajaxTimes等于0时说明所有请求已经发送成功，则关闭加载
                * */
                ajaxTimes--;
                if (ajaxTimes === 0) {
                    wx.hideLoading();
                }
            }
        });
    });
};
