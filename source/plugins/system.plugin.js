


module.exports = {
    getInfo: () => new Promise((resolve, reject) => {
        wx.getSystemInfo({
            success: res => {
                resolve(res);
            },
            fail: err => {
                reject(err);
            },
        })
    }),
};
