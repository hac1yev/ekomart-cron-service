"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const node_cron_1 = __importDefault(require("node-cron"));
const axios_1 = __importDefault(require("axios"));
node_cron_1.default.schedule("*/30 * * * * *", () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const notificationObj = {
            title: '🔥 Flash Sale!',
            description: 'Save up to 50% for 2 hours only!',
            type: 'promo'
        };
        yield axios_1.default.post(`${process.env.API_URL}/api/notification/send`, JSON.stringify(notificationObj), {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${process.env.CRON_SECRET}`
            }
        });
    }
    catch (err) {
        console.error(err);
    }
}));
