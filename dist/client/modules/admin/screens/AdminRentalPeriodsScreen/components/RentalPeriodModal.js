"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("antd/lib/modal/style");

var _modal = _interopRequireDefault(require("antd/lib/modal"));

require("antd/lib/form/style");

var _form = _interopRequireDefault(require("antd/lib/form"));

require("antd/lib/input-number/style");

var _inputNumber = _interopRequireDefault(require("antd/lib/input-number"));

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _react = _interopRequireDefault(require("react"));

require("./RentalPeriodModal.less");

var yup = _interopRequireWildcard(require("yup"));

var _formik = require("formik");

var _core = require("../../../../../core");

var _i18n = require("../../../../../i18n");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var RentalPeriodModal = function RentalPeriodModal(props) {
  var translate = props.t;
  var RentalPeriodValidateSchema = yup.object().shape({
    min: yup.number().required(translate('admin-rental-periods:pleaseInputMinRentalPeriod')).min(1, 'admin-rental-periods:min-min-rental-period'),
    max: yup.number()
  });
  var initialValues = props.rentalPeriodInfo && props.rentalPeriodInfo._id ? {
    min: props.rentalPeriodInfo.min,
    max: props.rentalPeriodInfo.max
  } : {
    min: 1,
    max: undefined
  };
  return _react.default.createElement(_formik.Formik, {
    initialValues: initialValues,
    validateOnChange: false,
    validationSchema: RentalPeriodValidateSchema,
    onSubmit:
    /*#__PURE__*/
    function () {
      var _ref = _asyncToGenerator(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee(values, formikBag) {
        return _regenerator.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return props.handleOk(values);

              case 2:
                formikBag.resetForm({
                  min: 1,
                  max: undefined
                });

              case 3:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      return function (_x, _x2) {
        return _ref.apply(this, arguments);
      };
    }()
  }, function (context) {
    return _react.default.createElement(_modal.default, {
      title: props.rentalPeriodInfo && props.rentalPeriodInfo._id ? "".concat(translate('admin-rental-periods:edit-rental-period')) : "".concat(translate('admin-rental-periods:create-rental-period')),
      visible: props.visible,
      onOk: context.handleSubmit,
      onCancel: props.handleCancel,
      okText: translate('common:save'),
      cancelText: translate('common:cancel'),
      confirmLoading: props.loading,
      className: "rental-period-modal"
    }, _react.default.createElement(_form.default, {
      layout: "inline",
      onSubmit: context.handleSubmit,
      style: {
        display: 'flex',
        alignItems: 'center'
      }
    }, translate('common:from'), " \xA0", _react.default.createElement(_form.default.Item, {
      validateStatus: context.errors.min ? 'error' : undefined
    }, _react.default.createElement(_inputNumber.default, {
      value: context.values.min,
      onChange: function onChange(value) {
        return context.setFieldValue('min', value ? value : 0);
      },
      placeholder: translate('admin-rental-periods:min-rental-period'),
      name: "min",
      min: 1,
      onBlur: function onBlur() {
        return (0, _core.validateField)({
          fieldName: 'min',
          validateSchema: RentalPeriodValidateSchema,
          context: context
        });
      }
    })), translate('common:to'), " \xA0 \xA0", _react.default.createElement(_form.default.Item, {
      validateStatus: context.errors.max ? 'error' : undefined
    }, _react.default.createElement(_inputNumber.default, {
      value: context.values.max,
      onChange: function onChange(value) {
        return context.setFieldValue('max', value ? value : 0);
      },
      placeholder: translate('admin-rental-periods:max-rental-period'),
      name: "max",
      onBlur: function onBlur() {
        return (0, _core.validateField)({
          fieldName: 'max',
          validateSchema: RentalPeriodValidateSchema,
          context: context
        });
      }
    })), translate('common:month')), _react.default.createElement("div", {
      className: "help"
    }, context.errors.min || context.errors.max));
  });
};

var _default = (0, _i18n.withNamespaces)('admin-rental-periods')(RentalPeriodModal);

exports.default = _default;
//# sourceMappingURL=RentalPeriodModal.js.map