const { override, useBabelRc } = require('customize-cra'); // 2 file babel và jsconfig.json không thể thực hiện
// nếu không ghi đè bằng customize-cra

module.exports = override(
    // eslint-disable-next-line react-hooks/rules-of-hooks
    useBabelRc()
);
