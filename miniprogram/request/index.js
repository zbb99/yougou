var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var ajaxTimes = 0;
export var request = function (params) {
    ajaxTimes++;
    wx.showLoading({
        title: "加载中",
        mask: true
    });
    var baseUrl = 'https://api-hmugo-web.itheima.net/api/public/v1';
    return new Promise(function (resolve, reject) {
        wx.request(__assign({}, params, { url: baseUrl + params.url, success: function (res) {
                resolve(res.data.message);
            }, fail: function (err) {
                reject(err);
            }, complete: function () {
                ajaxTimes--;
                if (ajaxTimes === 0) {
                    wx.hideLoading();
                }
            } }));
    });
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUVBLElBQUksU0FBUyxHQUFHLENBQUMsQ0FBQztBQUNsQixNQUFNLENBQUMsSUFBTSxPQUFPLEdBQUcsVUFBQyxNQUFxQjtJQUN6QyxTQUFTLEVBQUUsQ0FBQztJQUNaLEVBQUUsQ0FBQyxXQUFXLENBQUM7UUFDWCxLQUFLLEVBQUUsS0FBSztRQUNaLElBQUksRUFBRSxJQUFJO0tBQ2IsQ0FBQyxDQUFDO0lBRUgsSUFBTSxPQUFPLEdBQUcsaURBQWlELENBQUM7SUFDbEUsT0FBTyxJQUFJLE9BQU8sQ0FBQyxVQUFDLE9BQU8sRUFBRSxNQUFNO1FBQy9CLEVBQUUsQ0FBQyxPQUFPLGNBQ0gsTUFBTSxJQUNULEdBQUcsRUFBRSxPQUFPLEdBQUcsTUFBTSxDQUFDLEdBQUcsRUFDekIsT0FBTyxFQUFFLFVBQUMsR0FBUTtnQkFDZCxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztZQUM5QixDQUFDLEVBQ0QsSUFBSSxFQUFFLFVBQUMsR0FBRztnQkFDTixNQUFNLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDaEIsQ0FBQyxFQUNELFFBQVEsRUFBRTtnQkFPTixTQUFTLEVBQUUsQ0FBQztnQkFDWixJQUFJLFNBQVMsS0FBSyxDQUFDLEVBQUU7b0JBQ2pCLEVBQUUsQ0FBQyxXQUFXLEVBQUUsQ0FBQztpQkFDcEI7WUFDTCxDQUFDLElBQ0gsQ0FBQztJQUNQLENBQUMsQ0FBQyxDQUFDO0FBQ1AsQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlcXVlc3RPcHRpb24gPSBXZWNoYXRNaW5pcHJvZ3JhbS5SZXF1ZXN0T3B0aW9uO1xuXG5sZXQgYWpheFRpbWVzID0gMDtcbmV4cG9ydCBjb25zdCByZXF1ZXN0ID0gKHBhcmFtczogUmVxdWVzdE9wdGlvbikgPT4ge1xuICAgIGFqYXhUaW1lcysrO1xuICAgIHd4LnNob3dMb2FkaW5nKHtcbiAgICAgICAgdGl0bGU6IFwi5Yqg6L295LitXCIsXG4gICAgICAgIG1hc2s6IHRydWVcbiAgICB9KTtcbiAgICAvLyDlhazlhbF1cmxcbiAgICBjb25zdCBiYXNlVXJsID0gJ2h0dHBzOi8vYXBpLWhtdWdvLXdlYi5pdGhlaW1hLm5ldC9hcGkvcHVibGljL3YxJztcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICB3eC5yZXF1ZXN0KHtcbiAgICAgICAgICAgIC4uLnBhcmFtcyxcbiAgICAgICAgICAgIHVybDogYmFzZVVybCArIHBhcmFtcy51cmwsXG4gICAgICAgICAgICBzdWNjZXNzOiAocmVzOiBhbnkpID0+IHtcbiAgICAgICAgICAgICAgICByZXNvbHZlKHJlcy5kYXRhLm1lc3NhZ2UpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGZhaWw6IChlcnIpID0+IHtcbiAgICAgICAgICAgICAgICByZWplY3QoZXJyKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBjb21wbGV0ZTogKCkgPT4ge1xuICAgICAgICAgICAgICAgIC8qXG4gICAgICAgICAgICAgICAgKiAgIGFqYXhUaW1lc+ivtOaYjlxuICAgICAgICAgICAgICAgICogICDmr4/lvZPlj5HpgIHor7fmsYLmmK/liqAxXG4gICAgICAgICAgICAgICAgKiAgIOivt+axguaIkOWKn+WQjuWHjzFcbiAgICAgICAgICAgICAgICAqICAg5b2TYWpheFRpbWVz562J5LqOMOaXtuivtOaYjuaJgOacieivt+axguW3sue7j+WPkemAgeaIkOWKn++8jOWImeWFs+mXreWKoOi9vVxuICAgICAgICAgICAgICAgICogKi9cbiAgICAgICAgICAgICAgICBhamF4VGltZXMtLTtcbiAgICAgICAgICAgICAgICBpZiAoYWpheFRpbWVzID09PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgIHd4LmhpZGVMb2FkaW5nKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9KTtcbn07XG4iXX0=