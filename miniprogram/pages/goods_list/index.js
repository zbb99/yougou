var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
import { request } from '../../request/index';
Page({
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
    totalPages: 1,
    queryParams: {
        query: '',
        cid: '',
        pagenum: 1,
        pagesize: 10
    },
    onLoad: function (options) {
        this.queryParams.cid = options.cid;
        this.getGoodsList();
    },
    onReachBottom: function () {
        if (this.queryParams.pagenum >= this.totalPages) {
            wx.showToast({
                title: '暂无更多数据',
                icon: "none"
            });
        }
        else {
            this.queryParams.pagenum++;
            this.getGoodsList();
        }
    },
    onPullDownRefresh: function () {
        this.queryParams.pagenum = 1;
        this.setData({
            goodsList: []
        });
        this.getGoodsList();
    },
    getGoodsList: function () {
        return __awaiter(this, void 0, void 0, function () {
            var res, goodsList;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, request({
                            url: "/goods/search",
                            data: this.queryParams
                        })];
                    case 1:
                        res = _a.sent();
                        this.totalPages = Math.ceil(res.total / this.queryParams.pagesize);
                        goodsList = this.data.goodsList.concat(res.goods);
                        this.setData({
                            goodsList: goodsList
                        });
                        wx.stopPullDownRefresh();
                        return [2];
                }
            });
        });
    },
    handleTabChange: function (e) {
        var index = e.detail;
        var tabs = this.data.tabs;
        tabs.forEach(function (item, i) {
            item.isActive = index === i;
        });
        this.setData({
            tabs: tabs
        });
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBLE9BQU8sRUFBQyxPQUFPLEVBQUMsTUFBTSxxQkFBcUIsQ0FBQztBQUU1QyxJQUFJLENBQUM7SUFLRCxJQUFJLEVBQUU7UUFDRixJQUFJLEVBQUU7WUFDRjtnQkFDSSxFQUFFLEVBQUUsQ0FBQztnQkFDTCxLQUFLLEVBQUUsSUFBSTtnQkFDWCxRQUFRLEVBQUUsSUFBSTthQUNqQjtZQUNEO2dCQUNJLEVBQUUsRUFBRSxDQUFDO2dCQUNMLEtBQUssRUFBRSxJQUFJO2dCQUNYLFFBQVEsRUFBRSxLQUFLO2FBQ2xCO1lBQ0Q7Z0JBQ0ksRUFBRSxFQUFFLENBQUM7Z0JBQ0wsS0FBSyxFQUFFLElBQUk7Z0JBQ1gsUUFBUSxFQUFFLEtBQUs7YUFDbEI7U0FDSjtRQUNELFNBQVMsRUFBRSxFQUFFO0tBQ2hCO0lBR0QsVUFBVSxFQUFFLENBQUM7SUFDYixXQUFXLEVBQUU7UUFDVCxLQUFLLEVBQUUsRUFBRTtRQUNULEdBQUcsRUFBRSxFQUFFO1FBQ1AsT0FBTyxFQUFFLENBQUM7UUFDVixRQUFRLEVBQUUsRUFBRTtLQUNmO0lBSUQsTUFBTSxFQUFFLFVBQVUsT0FBTztRQUNyQixJQUFJLENBQUMsV0FBVyxDQUFDLEdBQUcsR0FBVyxPQUFPLENBQUMsR0FBRyxDQUFDO1FBQzNDLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztJQUN4QixDQUFDO0lBRUQsYUFBYTtRQUNULElBQUksSUFBSSxDQUFDLFdBQVcsQ0FBQyxPQUFPLElBQUksSUFBSSxDQUFDLFVBQVUsRUFBRTtZQUU3QyxFQUFFLENBQUMsU0FBUyxDQUFDO2dCQUNULEtBQUssRUFBRSxRQUFRO2dCQUNmLElBQUksRUFBRSxNQUFNO2FBQ2YsQ0FBQyxDQUFDO1NBQ047YUFBTTtZQUNILElBQUksQ0FBQyxXQUFXLENBQUMsT0FBTyxFQUFFLENBQUM7WUFDM0IsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO1NBQ3ZCO0lBQ0wsQ0FBQztJQUdELGlCQUFpQjtRQUNiLElBQUksQ0FBQyxXQUFXLENBQUMsT0FBTyxHQUFHLENBQUMsQ0FBQztRQUM3QixJQUFJLENBQUMsT0FBTyxDQUFDO1lBQ1QsU0FBUyxFQUFFLEVBQUU7U0FDaEIsQ0FBQyxDQUFDO1FBQ0gsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO0lBQ3hCLENBQUM7SUFFSyxZQUFZOzs7Ozs0QkFDRyxXQUFNLE9BQU8sQ0FBQzs0QkFDM0IsR0FBRyxFQUFFLGVBQWU7NEJBQ3BCLElBQUksRUFBRSxJQUFJLENBQUMsV0FBVzt5QkFDekIsQ0FBQyxFQUFBOzt3QkFISSxHQUFHLEdBQVEsU0FHZjt3QkFFRixJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLFFBQVEsQ0FBQyxDQUFDO3dCQUM3RCxTQUFTLEdBQVksSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLFFBQUssR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDO3dCQUM5RCxJQUFJLENBQUMsT0FBTyxDQUFDOzRCQUNULFNBQVMsV0FBQTt5QkFDWixDQUFDLENBQUM7d0JBRUgsRUFBRSxDQUFDLG1CQUFtQixFQUFFLENBQUM7Ozs7O0tBQzVCO0lBRUQsZUFBZSxZQUFDLENBQU07UUFDbEIsSUFBTSxLQUFLLEdBQUcsQ0FBQyxDQUFDLE1BQU0sQ0FBQztRQUNsQixJQUFBLHFCQUFJLENBQWM7UUFDdkIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxVQUFDLElBQUksRUFBRSxDQUFDO1lBQ2pCLElBQUksQ0FBQyxRQUFRLEdBQUcsS0FBSyxLQUFLLENBQUMsQ0FBQztRQU1oQyxDQUFDLENBQUMsQ0FBQztRQUVILElBQUksQ0FBQyxPQUFPLENBQUM7WUFDVCxJQUFJLEVBQUUsSUFBSTtTQUNiLENBQUMsQ0FBQztJQUNQLENBQUM7Q0FHSixDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBwYWdlcy9nb29kc19saXN0L2luZGV4LnRzXG5pbXBvcnQge3JlcXVlc3R9IGZyb20gJy4uLy4uL3JlcXVlc3QvaW5kZXgnO1xuXG5QYWdlKHtcblxuICAgIC8qKlxuICAgICAqIOmhtemdoueahOWIneWni+aVsOaNrlxuICAgICAqL1xuICAgIGRhdGE6IHtcbiAgICAgICAgdGFiczogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGlkOiAwLFxuICAgICAgICAgICAgICAgIHZhbHVlOiAn57u85ZCIJyxcbiAgICAgICAgICAgICAgICBpc0FjdGl2ZTogdHJ1ZVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBpZDogMSxcbiAgICAgICAgICAgICAgICB2YWx1ZTogJ+mUgOmHjycsXG4gICAgICAgICAgICAgICAgaXNBY3RpdmU6IGZhbHNlXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGlkOiAyLFxuICAgICAgICAgICAgICAgIHZhbHVlOiAn5Lu35qC8JyxcbiAgICAgICAgICAgICAgICBpc0FjdGl2ZTogZmFsc2VcbiAgICAgICAgICAgIH1cbiAgICAgICAgXSxcbiAgICAgICAgZ29vZHNMaXN0OiBbXVxuICAgIH0sXG5cbiAgICAvLyDmgLvpobXmlbBcbiAgICB0b3RhbFBhZ2VzOiAxLFxuICAgIHF1ZXJ5UGFyYW1zOiB7XG4gICAgICAgIHF1ZXJ5OiAnJyxcbiAgICAgICAgY2lkOiAnJyxcbiAgICAgICAgcGFnZW51bTogMSxcbiAgICAgICAgcGFnZXNpemU6IDEwXG4gICAgfSxcbiAgICAvKipcbiAgICAgKiDnlJ/lkb3lkajmnJ/lh73mlbAtLeebkeWQrOmhtemdouWKoOi9vVxuICAgICAqL1xuICAgIG9uTG9hZDogZnVuY3Rpb24gKG9wdGlvbnMpIHtcbiAgICAgICAgdGhpcy5xdWVyeVBhcmFtcy5jaWQgPSA8c3RyaW5nPm9wdGlvbnMuY2lkO1xuICAgICAgICB0aGlzLmdldEdvb2RzTGlzdCgpO1xuICAgIH0sXG4gICAgLy8g6aG16Z2i6Kem5bqV5LqL5Lu2XG4gICAgb25SZWFjaEJvdHRvbSgpIHtcbiAgICAgICAgaWYgKHRoaXMucXVlcnlQYXJhbXMucGFnZW51bSA+PSB0aGlzLnRvdGFsUGFnZXMpIHtcbiAgICAgICAgICAgIC8vIOayoeacieS4i+S4gOmhtVxuICAgICAgICAgICAgd3guc2hvd1RvYXN0KHtcbiAgICAgICAgICAgICAgICB0aXRsZTogJ+aaguaXoOabtOWkmuaVsOaNricsXG4gICAgICAgICAgICAgICAgaWNvbjogXCJub25lXCJcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5xdWVyeVBhcmFtcy5wYWdlbnVtKys7XG4gICAgICAgICAgICB0aGlzLmdldEdvb2RzTGlzdCgpO1xuICAgICAgICB9XG4gICAgfSxcblxuICAgIC8v5LiL5ouJ5LqL5Lu2XG4gICAgb25QdWxsRG93blJlZnJlc2goKSB7XG4gICAgICAgIHRoaXMucXVlcnlQYXJhbXMucGFnZW51bSA9IDE7XG4gICAgICAgIHRoaXMuc2V0RGF0YSh7XG4gICAgICAgICAgICBnb29kc0xpc3Q6IFtdXG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLmdldEdvb2RzTGlzdCgpO1xuICAgIH0sXG5cbiAgICBhc3luYyBnZXRHb29kc0xpc3QoKSB7XG4gICAgICAgIGNvbnN0IHJlczogYW55ID0gYXdhaXQgcmVxdWVzdCh7XG4gICAgICAgICAgICB1cmw6IFwiL2dvb2RzL3NlYXJjaFwiLFxuICAgICAgICAgICAgZGF0YTogdGhpcy5xdWVyeVBhcmFtc1xuICAgICAgICB9KTtcbiAgICAgICAgLy8g6I635Y+W5oC75p2h5pWwXG4gICAgICAgIHRoaXMudG90YWxQYWdlcyA9IE1hdGguY2VpbChyZXMudG90YWwgLyB0aGlzLnF1ZXJ5UGFyYW1zLnBhZ2VzaXplKTtcbiAgICAgICAgY29uc3QgZ29vZHNMaXN0OiBhbnkgPSBbLi4udGhpcy5kYXRhLmdvb2RzTGlzdCwgLi4ucmVzLmdvb2RzXTtcbiAgICAgICAgdGhpcy5zZXREYXRhKHtcbiAgICAgICAgICAgIGdvb2RzTGlzdFxuICAgICAgICB9KTtcbiAgICAgICAgLy8g5YWz6Zet5LiL5ouJ5Yi35pawbG9hZGluZ1xuICAgICAgICB3eC5zdG9wUHVsbERvd25SZWZyZXNoKCk7XG4gICAgfVxuICAgICxcbiAgICBoYW5kbGVUYWJDaGFuZ2UoZTogYW55KSB7XG4gICAgICAgIGNvbnN0IGluZGV4ID0gZS5kZXRhaWw7XG4gICAgICAgIGxldCB7dGFic30gPSB0aGlzLmRhdGE7XG4gICAgICAgIHRhYnMuZm9yRWFjaCgoaXRlbSwgaSkgPT4ge1xuICAgICAgICAgICAgaXRlbS5pc0FjdGl2ZSA9IGluZGV4ID09PSBpO1xuICAgICAgICAgICAgLyogaWYgKGluZGV4ID09PSBpKSB7XG4gICAgICAgICAgICAgICAgIGl0ZW0uaXNBY3RpdmUgPSB0cnVlO1xuICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgIGl0ZW0uaXNBY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgICAgICB9Ki9cbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5zZXREYXRhKHtcbiAgICAgICAgICAgIHRhYnM6IHRhYnNcbiAgICAgICAgfSk7XG4gICAgfVxuXG5cbn0pO1xuXG4iXX0=