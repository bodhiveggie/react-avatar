'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var FacebookSource = function FacebookSource(props) {
    var _this = this;

    (0, _classCallCheck3.default)(this, FacebookSource);
    this.props = null;

    this.isCompatible = function () {
        return !!_this.props.facebookId;
    };

    this.get = function (setState) {
        var _props = _this.props,
            size = _props.size,
            facebookId = _props.facebookId;

        var url = 'https://graph.facebook.com/' + (facebookId + '/picture?width=' + size + '&height=' + size);

        setState({
            sourceName: 'facebook',
            src: url
        });
    };

    this.props = props;
};

FacebookSource.propTypes = {
    facebookId: _propTypes2.default.string
};
exports.default = FacebookSource;
module.exports = exports['default'];