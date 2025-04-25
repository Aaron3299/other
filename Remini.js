/*************************************
更新日期：2024-09-04
脚本作者：@ddm1023
电报频道：https://t.me/ddm1023
**************************************

[rewrite_local]
^https?:\/\/.*\.oracle\.bendingspoonsapps\.com\/v\d\/(users\/.+|purchases\/verify) url script-response-body https://github.com/Aaron3299/other/blob/main/Remini.js

[mitm]
hostname = *.oracle.bendingspoonsapps.com

*************************************/


var ddm = JSON.parse($response.body);
const headers = $request.headers;
const ua = headers['User-Agent'] || headers['user-agent'];

const list = {
  'remini': { id: "com.bigwinepot.nwdn.international.1y_p99_99_ft_pro" },  //Remini-人工智能修图
  'focoslive': { id: "com.focoslive.1y_t130_adj" },  //Focos live-视频编辑工具
};

for (const key in list) {
  if (new RegExp(`^${key}`, `i`).test(ua)) {
    ddm["me"]["active_subscriptions_ids"] = [list[key].id];
    ddm["me"]["active_bundle_subscriptions"] = [{
      "expiry": "2099-09-09T09:09:09+00:00",
      "product_id": list[key].id,
      "features": ["unlock"]
    }];
    ddm["settings"]["__identity__"]["expiration"] = "2099-09-09T09:09:09+00:00";
    break;
  }
}

$done({body: JSON.stringify(ddm)});