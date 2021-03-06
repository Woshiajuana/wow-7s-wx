
module.exports = {
    choose: (options = {}) => new Promise((resolve, reject) => {
        wx.chooseImage({
            count: 1,
            sizeType: ['original', 'compressed'],  //可选择原图或压缩后的图片
            sourceType: ['album', 'camera'], //可选择性开放访问相册、相机
            ...options,
            success: res => {
                resolve(res);
            },
            fail: err => {
                reject(err);
            },
        })
    }),
    save: (options) => new Promise((resolve, reject) => {
        let filePath = '';
        if (typeof options === 'string') {
            filePath = options;
            options = {};
        }
        wx.saveImageToPhotosAlbum({
            filePath,
            ...options,
            success: res => {
                resolve(res);
            },
            fail: err => {
                reject('');
            },
        })
    }),
};
