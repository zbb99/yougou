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
import { request } from "../../request/index";
Page({
    data: {
        swiperList: [],
        cateList: [],
        floorList: []
    },
    onLoad: function () {
        this.getSwiperList();
        this.getCateList();
        this.getFloorList();
    },
    getSwiperList: function () {
        return __awaiter(this, void 0, void 0, function () {
            var res;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, request({
                            url: "/home/swiperdata"
                        })];
                    case 1:
                        res = _a.sent();
                        this.setData({
                            swiperList: res
                        });
                        return [2];
                }
            });
        });
    },
    getCateList: function () {
        return __awaiter(this, void 0, void 0, function () {
            var res;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, request({
                            url: "/home/catitems"
                        })];
                    case 1:
                        res = _a.sent();
                        this.setData({
                            cateList: res
                        });
                        return [2];
                }
            });
        });
    },
    getFloorList: function () {
        return __awaiter(this, void 0, void 0, function () {
            var res;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, request({
                            url: "/home/floordata"
                        })];
                    case 1:
                        res = _a.sent();
                        this.setData({
                            floorList: res
                        });
                        return [2];
                }
            });
        });
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLE9BQU8sRUFBQyxPQUFPLEVBQUMsTUFBTSxxQkFBcUIsQ0FBQztBQUU1QyxJQUFJLENBQUM7SUFDRCxJQUFJLEVBQUU7UUFDRixVQUFVLEVBQUUsRUFBRTtRQUNkLFFBQVEsRUFBRSxFQUFFO1FBQ1osU0FBUyxFQUFFLEVBQUU7S0FDaEI7SUFHRCxNQUFNLEVBQUU7UUFDSixJQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7UUFDckIsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQ25CLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztJQUN4QixDQUFDO0lBQ0ssYUFBYTs7Ozs7NEJBQ0UsV0FBTSxPQUFPLENBQUM7NEJBQzNCLEdBQUcsRUFBRSxrQkFBa0I7eUJBQzFCLENBQUMsRUFBQTs7d0JBRkksR0FBRyxHQUFRLFNBRWY7d0JBQ0YsSUFBSSxDQUFDLE9BQU8sQ0FBQzs0QkFDVCxVQUFVLEVBQUUsR0FBRzt5QkFDbEIsQ0FBQyxDQUFDOzs7OztLQUNOO0lBQ0ssV0FBVzs7Ozs7NEJBQ0ksV0FBTSxPQUFPLENBQUM7NEJBQzNCLEdBQUcsRUFBRSxnQkFBZ0I7eUJBQ3hCLENBQUMsRUFBQTs7d0JBRkksR0FBRyxHQUFRLFNBRWY7d0JBQ0YsSUFBSSxDQUFDLE9BQU8sQ0FBQzs0QkFDVCxRQUFRLEVBQUUsR0FBRzt5QkFDaEIsQ0FBQyxDQUFDOzs7OztLQUNOO0lBQ0ssWUFBWTs7Ozs7NEJBQ0csV0FBTSxPQUFPLENBQUM7NEJBQzNCLEdBQUcsRUFBRSxpQkFBaUI7eUJBQ3pCLENBQUMsRUFBQTs7d0JBRkksR0FBRyxHQUFRLFNBRWY7d0JBQ0YsSUFBSSxDQUFDLE9BQU8sQ0FBQzs0QkFDVCxTQUFTLEVBQUUsR0FBRzt5QkFDakIsQ0FBQyxDQUFDOzs7OztLQUNOO0NBQ0osQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtyZXF1ZXN0fSBmcm9tIFwiLi4vLi4vcmVxdWVzdC9pbmRleFwiO1xuXG5QYWdlKHtcbiAgICBkYXRhOiB7XG4gICAgICAgIHN3aXBlckxpc3Q6IFtdLFxuICAgICAgICBjYXRlTGlzdDogW10sXG4gICAgICAgIGZsb29yTGlzdDogW11cbiAgICB9LFxuICAgIC8vb3B0aW9ucyhPYmplY3QpXG4gICAgLy8g6aG16Z2i5byA5aeL5Yqg6L295pe2XG4gICAgb25Mb2FkOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMuZ2V0U3dpcGVyTGlzdCgpO1xuICAgICAgICB0aGlzLmdldENhdGVMaXN0KCk7XG4gICAgICAgIHRoaXMuZ2V0Rmxvb3JMaXN0KCk7XG4gICAgfSxcbiAgICBhc3luYyBnZXRTd2lwZXJMaXN0KCkge1xuICAgICAgICBjb25zdCByZXM6IGFueSA9IGF3YWl0IHJlcXVlc3Qoe1xuICAgICAgICAgICAgdXJsOiBcIi9ob21lL3N3aXBlcmRhdGFcIlxuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5zZXREYXRhKHtcbiAgICAgICAgICAgIHN3aXBlckxpc3Q6IHJlc1xuICAgICAgICB9KTtcbiAgICB9LFxuICAgIGFzeW5jIGdldENhdGVMaXN0KCkge1xuICAgICAgICBjb25zdCByZXM6IGFueSA9IGF3YWl0IHJlcXVlc3Qoe1xuICAgICAgICAgICAgdXJsOiBcIi9ob21lL2NhdGl0ZW1zXCJcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuc2V0RGF0YSh7XG4gICAgICAgICAgICBjYXRlTGlzdDogcmVzXG4gICAgICAgIH0pO1xuICAgIH0sXG4gICAgYXN5bmMgZ2V0Rmxvb3JMaXN0KCkge1xuICAgICAgICBjb25zdCByZXM6IGFueSA9IGF3YWl0IHJlcXVlc3Qoe1xuICAgICAgICAgICAgdXJsOiBcIi9ob21lL2Zsb29yZGF0YVwiXG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLnNldERhdGEoe1xuICAgICAgICAgICAgZmxvb3JMaXN0OiByZXNcbiAgICAgICAgfSk7XG4gICAgfVxufSk7XG4iXX0=