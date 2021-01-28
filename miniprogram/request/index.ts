import RequestOption = WechatMiniprogram.RequestOption;

export const request = (params: RequestOption) => {
    return new Promise((resolve, reject) => {
        wx.request({
            ...params,
            success: (res) => {
                resolve(res);
            },
            fail: (err) => {
                reject(err);
            }
        });
    });
};
