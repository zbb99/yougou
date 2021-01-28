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
        leftMenuList: [],
        rightContent: [],
        currentIndex: 0,
        scrollTop: 0
    },
    cateList: [],
    onLoad: function () {
        var cates = wx.getStorageSync('cates');
        if (!cates) {
            this.getCateList();
        }
        else {
            if (Date.now() - cates.time > 1000 * 10) {
                this.getCateList();
            }
            else {
                this.cateList = cates.data;
                this.menuListInit();
            }
        }
    },
    handleItemTap: function (e) {
        var index = e.currentTarget.dataset.index;
        var rightContent = this.cateList[index].children;
        this.setData({
            currentIndex: index,
            rightContent: rightContent,
            scrollTop: 0
        });
    },
    getCateList: function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this;
                        return [4, request({
                                url: "/categories"
                            })];
                    case 1:
                        _a.cateList = (_b.sent());
                        wx.setStorageSync("cates", { time: Date.now(), data: this.cateList });
                        this.menuListInit();
                        return [2];
                }
            });
        });
    },
    menuListInit: function () {
        var leftMenuList = this.cateList.map(function (item) { return item.cat_name; });
        var rightContent = this.cateList[0].children;
        this.setData({
            leftMenuList: leftMenuList,
            rightContent: rightContent
        });
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVBLE9BQU8sRUFBQyxPQUFPLEVBQUMsTUFBTSxxQkFBcUIsQ0FBQztBQUU1QyxJQUFJLENBQUM7SUFLRCxJQUFJLEVBQUU7UUFHRixZQUFZLEVBQUUsRUFBRTtRQUVoQixZQUFZLEVBQUUsRUFBRTtRQUNoQixZQUFZLEVBQUUsQ0FBQztRQUNmLFNBQVMsRUFBRSxDQUFDO0tBQ2Y7SUFDRCxRQUFRLEVBQUUsRUFBRTtJQUlaLE1BQU0sRUFBRTtRQUVKLElBQU0sS0FBSyxHQUFHLEVBQUUsQ0FBQyxjQUFjLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDekMsSUFBSSxDQUFDLEtBQUssRUFBRTtZQUNSLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztTQUN0QjthQUFNO1lBQ0gsSUFBSSxJQUFJLENBQUMsR0FBRyxFQUFFLEdBQUcsS0FBSyxDQUFDLElBQUksR0FBRyxJQUFJLEdBQUcsRUFBRSxFQUFHO2dCQUN0QyxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7YUFDdEI7aUJBQU07Z0JBQ0gsSUFBSSxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUMsSUFBSSxDQUFDO2dCQUMzQixJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7YUFDdkI7U0FDSjtJQUNMLENBQUM7SUFDRCxhQUFhLFlBQUMsQ0FBTTtRQUNoQixJQUFNLEtBQUssR0FBRyxDQUFDLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUM7UUFDckMsSUFBQSw0Q0FBc0IsQ0FBeUI7UUFDdEQsSUFBSSxDQUFDLE9BQU8sQ0FBQztZQUNULFlBQVksRUFBRSxLQUFLO1lBQ25CLFlBQVksRUFBRSxZQUFZO1lBQzFCLFNBQVMsRUFBRSxDQUFDO1NBQ2YsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUVLLFdBQVc7Ozs7Ozt3QkFDYixLQUFBLElBQUksQ0FBQTt3QkFBaUIsV0FBTSxPQUFPLENBQUM7Z0NBQy9CLEdBQUcsRUFBRSxhQUFhOzZCQUNyQixDQUFDLEVBQUE7O3dCQUZGLEdBQUssUUFBUSxJQUFRLFNBRW5CLENBQUEsQ0FBQzt3QkFFSCxFQUFFLENBQUMsY0FBYyxDQUFDLE9BQU8sRUFBRSxFQUFDLElBQUksRUFBRSxJQUFJLENBQUMsR0FBRyxFQUFFLEVBQUUsSUFBSSxFQUFFLElBQUksQ0FBQyxRQUFRLEVBQUMsQ0FBQyxDQUFDO3dCQUNwRSxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7Ozs7O0tBRXZCO0lBQ0QsWUFBWTtRQUNSLElBQUksWUFBWSxHQUFRLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLFVBQUMsSUFBUyxJQUFLLE9BQUEsSUFBSSxDQUFDLFFBQVEsRUFBYixDQUFhLENBQUMsQ0FBQztRQUNqRSxJQUFBLHdDQUFzQixDQUFxQjtRQUNsRCxJQUFJLENBQUMsT0FBTyxDQUFDO1lBQ1QsWUFBWSxjQUFBO1lBQ1osWUFBWSxFQUFFLFlBQVk7U0FDN0IsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztDQUNKLENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8vIHBhZ2VzL2NhdGVnb3J5L2luZGV4LnRzXG5cbmltcG9ydCB7cmVxdWVzdH0gZnJvbSAnLi4vLi4vcmVxdWVzdC9pbmRleCc7XG5cblBhZ2Uoe1xuXG4gICAgLyoqXG4gICAgICog6aG16Z2i55qE5Yid5aeL5pWw5o2uXG4gICAgICovXG4gICAgZGF0YToge1xuXG4gICAgICAgIC8vIOW3puS+p+iPnOWNleaVsOaNrlxuICAgICAgICBsZWZ0TWVudUxpc3Q6IFtdLFxuICAgICAgICAvLyDlj7PkvqfllYblk4HmlbDmja5cbiAgICAgICAgcmlnaHRDb250ZW50OiBbXSxcbiAgICAgICAgY3VycmVudEluZGV4OiAwLFxuICAgICAgICBzY3JvbGxUb3A6IDBcbiAgICB9LFxuICAgIGNhdGVMaXN0OiBbXSxcbiAgICAvKipcbiAgICAgKiDnlJ/lkb3lkajmnJ/lh73mlbAtLeebkeWQrOmhtemdouWKoOi9vVxuICAgICAqL1xuICAgIG9uTG9hZDogZnVuY3Rpb24gKCkge1xuICAgICAgICAvKuiOt+WPluacrOWcsOaVsOaNriovXG4gICAgICAgIGNvbnN0IGNhdGVzID0gd3guZ2V0U3RvcmFnZVN5bmMoJ2NhdGVzJyk7XG4gICAgICAgIGlmICghY2F0ZXMpIHtcbiAgICAgICAgICAgIHRoaXMuZ2V0Q2F0ZUxpc3QoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGlmIChEYXRlLm5vdygpIC0gY2F0ZXMudGltZSA+IDEwMDAgKiAxMCApIHtcbiAgICAgICAgICAgICAgICB0aGlzLmdldENhdGVMaXN0KCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMuY2F0ZUxpc3QgPSBjYXRlcy5kYXRhO1xuICAgICAgICAgICAgICAgIHRoaXMubWVudUxpc3RJbml0KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9LFxuICAgIGhhbmRsZUl0ZW1UYXAoZTogYW55KSB7XG4gICAgICAgIGNvbnN0IGluZGV4ID0gZS5jdXJyZW50VGFyZ2V0LmRhdGFzZXQuaW5kZXg7XG4gICAgICAgIGNvbnN0IHtjaGlsZHJlbjogcmlnaHRDb250ZW50fSA9IHRoaXMuY2F0ZUxpc3RbaW5kZXhdO1xuICAgICAgICB0aGlzLnNldERhdGEoe1xuICAgICAgICAgICAgY3VycmVudEluZGV4OiBpbmRleCxcbiAgICAgICAgICAgIHJpZ2h0Q29udGVudDogcmlnaHRDb250ZW50LFxuICAgICAgICAgICAgc2Nyb2xsVG9wOiAwXG4gICAgICAgIH0pO1xuICAgIH0sXG5cbiAgICBhc3luYyBnZXRDYXRlTGlzdCgpIHtcbiAgICAgICAgdGhpcy5jYXRlTGlzdCA9IDxhbnk+YXdhaXQgcmVxdWVzdCh7XG4gICAgICAgICAgICB1cmw6IFwiL2NhdGVnb3JpZXNcIlxuICAgICAgICB9KTtcbiAgICAgICAgLy8g5pS+5YWl5a2Y5YKo5LitXG4gICAgICAgIHd4LnNldFN0b3JhZ2VTeW5jKFwiY2F0ZXNcIiwge3RpbWU6IERhdGUubm93KCksIGRhdGE6IHRoaXMuY2F0ZUxpc3R9KTtcbiAgICAgICAgdGhpcy5tZW51TGlzdEluaXQoKTtcblxuICAgIH0sXG4gICAgbWVudUxpc3RJbml0KCkge1xuICAgICAgICBsZXQgbGVmdE1lbnVMaXN0OiBhbnkgPSB0aGlzLmNhdGVMaXN0Lm1hcCgoaXRlbTogYW55KSA9PiBpdGVtLmNhdF9uYW1lKTtcbiAgICAgICAgY29uc3Qge2NoaWxkcmVuOiByaWdodENvbnRlbnR9ID0gdGhpcy5jYXRlTGlzdFswXTtcbiAgICAgICAgdGhpcy5zZXREYXRhKHtcbiAgICAgICAgICAgIGxlZnRNZW51TGlzdCxcbiAgICAgICAgICAgIHJpZ2h0Q29udGVudDogcmlnaHRDb250ZW50XG4gICAgICAgIH0pO1xuICAgIH1cbn0pO1xuIl19