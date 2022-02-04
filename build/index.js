/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/donationForm.js":
/*!*****************************!*\
  !*** ./src/donationForm.js ***!
  \*****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.scss */ "./src/style.scss");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_currency_input_field__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-currency-input-field */ "./node_modules/react-currency-input-field/dist/index.esm.js");
/* harmony import */ var radium__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! radium */ "./node_modules/radium/es/index.js");
/* harmony import */ var color__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! color */ "./node_modules/color/index.js");
/* harmony import */ var color__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(color__WEBPACK_IMPORTED_MODULE_5__);


/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * All files containing `style` keyword are bundled together. The code used
 * gets applied both to the front of your site and to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */







/**
 * Donation Form.
 *
 * @param props
 * @returns {JSX.Element}
 * @constructor
 */

const DonationForm = props => {
  const [donationAmount, setDonationAmount] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)('25');

  const updateDonationAmount = amount => {
    amount = amount.replace('$', '');
    setDonationAmount(amount);
  };

  const styles = {
    buttonBase: {
      color: '#FFF',
      background: `${props.attributes.color}`,
      borderRadius: '6px',
      border: `3px solid ${props.attributes.color}`,
      fontSize: '28px',
      fontWeight: '500',
      transition: 'all 0.2s ease',
      lineHeight: '1.6',
      cursor: 'pointer'
    },
    buttonPrimary: {
      ':hover': {
        background: color__WEBPACK_IMPORTED_MODULE_5___default()(`${props.attributes.color}`).lighten(0.2),
        border: color__WEBPACK_IMPORTED_MODULE_5___default()(`${props.attributes.color}`).lighten(0.2)
      }
    },
    buttonSelected: {
      color: `${props.attributes.color}`,
      background: '#FFF'
    },
    currencyField: {
      width: '100%',
      fontSize: '2.5rem',
      padding: '1rem 1.5rem',
      border: '2px solid #424242',
      borderRadius: '8px',
      textAlign: 'right',
      lineHeight: '1',
      boxSizing: 'border-box'
    }
  };
  const donationAmounts = ['5', '10', '25', '50', '100', '250'];
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    id: 'donation-form-block',
    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()('donation-form')
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "donation-form-header",
    style: {
      backgroundImage: `url(${props.attributes.backgroundUrl})`
    }
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "donation-form-inner"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: 'donation-form-fieldset-intro'
  }, props.attributes.introHeading && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("h2", {
    className: 'donation-form-main-heading'
  }, props.attributes.introHeading), props.attributes.introSubheading && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
    className: 'donation-form-main-subheading'
  }, props.attributes.introSubheading), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("form", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "donation-form-field-row"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(react_currency_input_field__WEBPACK_IMPORTED_MODULE_4__["default"], {
    className: "donation-form-amount-input",
    style: styles.currencyField,
    name: "donation-amount",
    allowDecimals: false,
    allowNegativeValue: false,
    maxLength: 6,
    value: donationAmount,
    defaultValue: donationAmount,
    onValueChange: (value, name) => console.log(value, name)
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "donation-form-field-row donation-form-amount-btns"
  }, donationAmounts.map((amount, index) => {
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {
      key: index,
      className: classnames__WEBPACK_IMPORTED_MODULE_2___default()('donation-form-amount-btn', {
        'is-selected': donationAmount === amount
      }),
      style: [styles.buttonBase, donationAmount === amount ? styles.buttonSelected : styles.buttonPrimary],
      onClick: e => {
        e.preventDefault();
        updateDonationAmount(amount);
      }
    }, amount);
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "donation-form-field-row"
  }, props.attributes.fieldsHeading && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("h3", {
    className: 'donation-form-fields-heading'
  }, props.attributes.fieldsHeading), props.attributes.fieldsSubheading && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
    className: 'donation-form-fields-subheading'
  }, props.attributes.fieldsSubheading)), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()('donation-form-field-row', 'donation-form-fields-wrap')
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("input", {
    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()('donation-form-field', 'donation-form-first-name'),
    type: 'text',
    placeholder: ''
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("input", {
    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()('donation-form-field', 'donation-form-last-name'),
    type: 'text',
    placeholder: ''
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("input", {
    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()('donation-form-field', 'donation-form-email'),
    type: 'email',
    placeholder: ''
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("input", {
    type: 'button',
    value: 'Donate Now',
    style: [styles.buttonBase, styles.buttonPrimary],
    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()('donation-form-submit')
  })), window.location.protocol === 'https:' && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()('donation-form-field-row')
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()('donation-form-secure-badge')
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('100% Secure', 'donation-form-block')))))));
};

DonationForm.defaultProps = {
  attributes: []
};
/* harmony default export */ __webpack_exports__["default"] = ((0,radium__WEBPACK_IMPORTED_MODULE_6__["default"])(DonationForm));

/***/ }),

/***/ "./src/edit.js":
/*!*********************!*\
  !*** ./src/edit.js ***!
  \*********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Edit; }
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _donationForm__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./donationForm */ "./src/donationForm.js");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./editor.scss */ "./src/editor.scss");


/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-i18n/
 */






/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */


/**
 * Edit function.
 *
 *  @see https://developer.wordpress.org/block-editor/developers/block-api/block-edit-save/#edit
 *
 * @return {WPElement} Element to render.
 */

function Edit(_ref) {
  let {
    attributes,
    setAttributes
  } = _ref;
  const blockProps = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__.useBlockProps)();
  const {
    backgroundId,
    backgroundUrl,
    color,
    introHeading,
    introSubheading,
    preview
  } = attributes; // Preview image when an admin hovers over the block.

  if (preview) {
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
      src: dfbPreview.profile_preview,
      alt: 'Donation form block for Stripe by GiveWP.',
      style: {
        width: '100%',
        height: 'auto'
      }
    }));
  }

  const removeBackground = () => {
    setAttributes({
      backgroundId: 0,
      backgroundUrl: ''
    });
  };

  const onSelectBackground = background => {
    setAttributes({
      backgroundId: background.id,
      backgroundUrl: background.url
    });
  };

  const background = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_5__.useSelect)(select => {
    return select('core').getMedia(backgroundId);
  }, [onSelectBackground]); // Color picker.

  const colors = [{
    name: 'Gray',
    color: '#2F363D'
  }, {
    name: 'Light Gray',
    color: '#6A737D'
  }, {
    name: 'Blue',
    color: '#044289'
  }, {
    name: 'Light Blue',
    color: '#0366D6'
  }, {
    name: 'Green',
    color: '#176F2C'
  }, {
    name: 'Light Green',
    color: '#28A745'
  }, {
    name: 'Yellow',
    color: '#DBAB09'
  }, {
    name: 'Light Yellow',
    color: '#FFD33D'
  }, {
    name: 'Orange',
    color: '#D15704'
  }, {
    name: 'Light Orange',
    color: '#F66A0A'
  }, {
    name: 'Red',
    color: '#B31D28'
  }, {
    name: 'Light Red',
    color: '#D73A49'
  }, {
    name: 'Pink',
    color: '#B93A86'
  }, {
    name: 'Light Pink',
    color: '#EA4AAA'
  }];
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__.InspectorControls, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Appearance Settings', 'donation-form-block'),
    initialOpen: true
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelRow, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "dfb-background-uploader"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
    className: 'dfb-label'
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Header background image', 'donation-form-block'))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__.MediaUploadCheck, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__.MediaUpload, {
    onSelect: onSelectBackground,
    value: attributes.backgroundId,
    allowedTypes: ['image'],
    render: _ref2 => {
      let {
        open
      } = _ref2;
      return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Button, {
        className: attributes.backgroundId === 0 ? 'editor-post-featured-image__toggle' : 'editor-post-featured-image__preview',
        onClick: open
      }, attributes.backgroundId === 0 && (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Choose an image', 'donation-form-block'), background !== undefined && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.ResponsiveWrapper, {
        naturalWidth: background.media_details.width,
        naturalHeight: background.media_details.height
      }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
        src: background.source_url
      })));
    }
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "dfb-background-btns"
  }, attributes.backgroundId !== 0 && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__.MediaUploadCheck, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__.MediaUpload, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Replace image', 'donation-form-block'),
    value: attributes.backgroundId,
    onSelect: onSelectBackground,
    allowedTypes: ['image'],
    render: _ref3 => {
      let {
        open
      } = _ref3;
      return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Button, {
        onClick: open,
        isSmall: true,
        variant: "secondary",
        className: 'dfb-replace-image-btn'
      }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Replace image', 'donation-form-block'));
    }
  })), attributes.backgroundId !== 0 && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__.MediaUploadCheck, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Button, {
    onClick: removeBackground,
    isSmall: true,
    variant: "secondary"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Remove image', 'donation-form-block')))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
    className: 'dfb-help-text'
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Upload or select an image for the header background.', 'donation-form-block')))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelRow, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", {
    className: 'dfb-label'
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Primary Color', 'donation-form-block')), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: 'dfb-color-picker'
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.ColorPalette, {
    colors: colors,
    value: color,
    onChange: value => setAttributes({
      color: value
    }),
    clearable: false
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
    className: 'dfb-help-text'
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Choose the primary color for this donation form.', 'donation-form-block'))))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Content Settings', 'donation-form-block'),
    initialOpen: false
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelRow, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.TextControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Main Heading', 'donation-form-block'),
    help: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Customize or delete all text to hide.', 'donation-form-block'),
    value: attributes.introHeading,
    onChange: value => setAttributes({
      introHeading: value
    })
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelRow, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.TextControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Main Sub-Heading', 'donation-form-block'),
    help: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Customize or delete all text to hide.', 'donation-form-block'),
    value: attributes.introSubheading,
    onChange: value => setAttributes({
      introSubheading: value
    })
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelRow, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.TextControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Fields Heading', 'donation-form-block'),
    help: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Customize or delete all text to hide.', 'donation-form-block'),
    value: attributes.fieldsHeading,
    onChange: value => setAttributes({
      fieldsHeading: value
    })
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelRow, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.TextControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Fields Sub-Heading', 'donation-form-block'),
    help: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Customize or delete all text to hide.', 'donation-form-block'),
    value: attributes.fieldsSubheading,
    onChange: value => setAttributes({
      fieldsSubheading: value
    })
  }))))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", blockProps, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_donationForm__WEBPACK_IMPORTED_MODULE_2__["default"], {
    attributes: attributes
  }))));
}

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./style.scss */ "./src/style.scss");
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./edit */ "./src/edit.js");
/* harmony import */ var _donationForm__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./donationForm */ "./src/donationForm.js");
/* harmony import */ var _wordpress_dom_ready__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @wordpress/dom-ready */ "@wordpress/dom-ready");
/* harmony import */ var _wordpress_dom_ready__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_wordpress_dom_ready__WEBPACK_IMPORTED_MODULE_6__);


/**
 * Registers a new block provided a unique name and an object defining its behavior.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-registration/
 */


/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * All files containing `style` keyword are bundled together. The code used
 * gets applied both to the front of your site and to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */


/**
 * Internal dependencies
 */





/**
 * Register the Block.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-registration/
 */

(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__.registerBlockType)('givewp/donation-form-block', {
  title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Donation Form Block', 'donation-form-block'),

  /**
   * @see ./edit.js
   */
  edit: _edit__WEBPACK_IMPORTED_MODULE_4__["default"],

  /**
   * @see ./save.js
   */
  save: () => {
    return null;
  }
});
_wordpress_dom_ready__WEBPACK_IMPORTED_MODULE_6___default()(function () {
  // Don't run when Gutenberg / Block editor is active.
  if (document.body.classList.contains('block-editor-page')) {
    return;
  }

  const donationForms = document.querySelectorAll('.root-donation-block');
  donationForms.forEach(donationForm => {
    const attributes = donationForm.dataset;
    (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.render)((0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_donationForm__WEBPACK_IMPORTED_MODULE_5__["default"], {
      attributes: attributes
    }), donationForm);
  });
});

/***/ }),

/***/ "./node_modules/bowser/src/bowser.js":
/*!*******************************************!*\
  !*** ./node_modules/bowser/src/bowser.js ***!
  \*******************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

/*!
 * Bowser - a browser detector
 * https://github.com/ded/bowser
 * MIT License | (c) Dustin Diaz 2015
 */

!function (root, name, definition) {
  if ( true && module.exports) module.exports = definition()
  else if (true) __webpack_require__.amdD(name, definition)
  else {}
}(this, 'bowser', function () {
  /**
    * See useragents.js for examples of navigator.userAgent
    */

  var t = true

  function detect(ua) {

    function getFirstMatch(regex) {
      var match = ua.match(regex);
      return (match && match.length > 1 && match[1]) || '';
    }

    function getSecondMatch(regex) {
      var match = ua.match(regex);
      return (match && match.length > 1 && match[2]) || '';
    }

    var iosdevice = getFirstMatch(/(ipod|iphone|ipad)/i).toLowerCase()
      , likeAndroid = /like android/i.test(ua)
      , android = !likeAndroid && /android/i.test(ua)
      , nexusMobile = /nexus\s*[0-6]\s*/i.test(ua)
      , nexusTablet = !nexusMobile && /nexus\s*[0-9]+/i.test(ua)
      , chromeos = /CrOS/.test(ua)
      , silk = /silk/i.test(ua)
      , sailfish = /sailfish/i.test(ua)
      , tizen = /tizen/i.test(ua)
      , webos = /(web|hpw)(o|0)s/i.test(ua)
      , windowsphone = /windows phone/i.test(ua)
      , samsungBrowser = /SamsungBrowser/i.test(ua)
      , windows = !windowsphone && /windows/i.test(ua)
      , mac = !iosdevice && !silk && /macintosh/i.test(ua)
      , linux = !android && !sailfish && !tizen && !webos && /linux/i.test(ua)
      , edgeVersion = getSecondMatch(/edg([ea]|ios)\/(\d+(\.\d+)?)/i)
      , versionIdentifier = getFirstMatch(/version\/(\d+(\.\d+)?)/i)
      , tablet = /tablet/i.test(ua) && !/tablet pc/i.test(ua)
      , mobile = !tablet && /[^-]mobi/i.test(ua)
      , xbox = /xbox/i.test(ua)
      , result

    if (/opera/i.test(ua)) {
      //  an old Opera
      result = {
        name: 'Opera'
      , opera: t
      , version: versionIdentifier || getFirstMatch(/(?:opera|opr|opios)[\s\/](\d+(\.\d+)?)/i)
      }
    } else if (/opr\/|opios/i.test(ua)) {
      // a new Opera
      result = {
        name: 'Opera'
        , opera: t
        , version: getFirstMatch(/(?:opr|opios)[\s\/](\d+(\.\d+)?)/i) || versionIdentifier
      }
    }
    else if (/SamsungBrowser/i.test(ua)) {
      result = {
        name: 'Samsung Internet for Android'
        , samsungBrowser: t
        , version: versionIdentifier || getFirstMatch(/(?:SamsungBrowser)[\s\/](\d+(\.\d+)?)/i)
      }
    }
    else if (/Whale/i.test(ua)) {
      result = {
        name: 'NAVER Whale browser'
        , whale: t
        , version: getFirstMatch(/(?:whale)[\s\/](\d+(?:\.\d+)+)/i)
      }
    }
    else if (/MZBrowser/i.test(ua)) {
      result = {
        name: 'MZ Browser'
        , mzbrowser: t
        , version: getFirstMatch(/(?:MZBrowser)[\s\/](\d+(?:\.\d+)+)/i)
      }
    }
    else if (/coast/i.test(ua)) {
      result = {
        name: 'Opera Coast'
        , coast: t
        , version: versionIdentifier || getFirstMatch(/(?:coast)[\s\/](\d+(\.\d+)?)/i)
      }
    }
    else if (/focus/i.test(ua)) {
      result = {
        name: 'Focus'
        , focus: t
        , version: getFirstMatch(/(?:focus)[\s\/](\d+(?:\.\d+)+)/i)
      }
    }
    else if (/yabrowser/i.test(ua)) {
      result = {
        name: 'Yandex Browser'
      , yandexbrowser: t
      , version: versionIdentifier || getFirstMatch(/(?:yabrowser)[\s\/](\d+(\.\d+)?)/i)
      }
    }
    else if (/ucbrowser/i.test(ua)) {
      result = {
          name: 'UC Browser'
        , ucbrowser: t
        , version: getFirstMatch(/(?:ucbrowser)[\s\/](\d+(?:\.\d+)+)/i)
      }
    }
    else if (/mxios/i.test(ua)) {
      result = {
        name: 'Maxthon'
        , maxthon: t
        , version: getFirstMatch(/(?:mxios)[\s\/](\d+(?:\.\d+)+)/i)
      }
    }
    else if (/epiphany/i.test(ua)) {
      result = {
        name: 'Epiphany'
        , epiphany: t
        , version: getFirstMatch(/(?:epiphany)[\s\/](\d+(?:\.\d+)+)/i)
      }
    }
    else if (/puffin/i.test(ua)) {
      result = {
        name: 'Puffin'
        , puffin: t
        , version: getFirstMatch(/(?:puffin)[\s\/](\d+(?:\.\d+)?)/i)
      }
    }
    else if (/sleipnir/i.test(ua)) {
      result = {
        name: 'Sleipnir'
        , sleipnir: t
        , version: getFirstMatch(/(?:sleipnir)[\s\/](\d+(?:\.\d+)+)/i)
      }
    }
    else if (/k-meleon/i.test(ua)) {
      result = {
        name: 'K-Meleon'
        , kMeleon: t
        , version: getFirstMatch(/(?:k-meleon)[\s\/](\d+(?:\.\d+)+)/i)
      }
    }
    else if (windowsphone) {
      result = {
        name: 'Windows Phone'
      , osname: 'Windows Phone'
      , windowsphone: t
      }
      if (edgeVersion) {
        result.msedge = t
        result.version = edgeVersion
      }
      else {
        result.msie = t
        result.version = getFirstMatch(/iemobile\/(\d+(\.\d+)?)/i)
      }
    }
    else if (/msie|trident/i.test(ua)) {
      result = {
        name: 'Internet Explorer'
      , msie: t
      , version: getFirstMatch(/(?:msie |rv:)(\d+(\.\d+)?)/i)
      }
    } else if (chromeos) {
      result = {
        name: 'Chrome'
      , osname: 'Chrome OS'
      , chromeos: t
      , chromeBook: t
      , chrome: t
      , version: getFirstMatch(/(?:chrome|crios|crmo)\/(\d+(\.\d+)?)/i)
      }
    } else if (/edg([ea]|ios)/i.test(ua)) {
      result = {
        name: 'Microsoft Edge'
      , msedge: t
      , version: edgeVersion
      }
    }
    else if (/vivaldi/i.test(ua)) {
      result = {
        name: 'Vivaldi'
        , vivaldi: t
        , version: getFirstMatch(/vivaldi\/(\d+(\.\d+)?)/i) || versionIdentifier
      }
    }
    else if (sailfish) {
      result = {
        name: 'Sailfish'
      , osname: 'Sailfish OS'
      , sailfish: t
      , version: getFirstMatch(/sailfish\s?browser\/(\d+(\.\d+)?)/i)
      }
    }
    else if (/seamonkey\//i.test(ua)) {
      result = {
        name: 'SeaMonkey'
      , seamonkey: t
      , version: getFirstMatch(/seamonkey\/(\d+(\.\d+)?)/i)
      }
    }
    else if (/firefox|iceweasel|fxios/i.test(ua)) {
      result = {
        name: 'Firefox'
      , firefox: t
      , version: getFirstMatch(/(?:firefox|iceweasel|fxios)[ \/](\d+(\.\d+)?)/i)
      }
      if (/\((mobile|tablet);[^\)]*rv:[\d\.]+\)/i.test(ua)) {
        result.firefoxos = t
        result.osname = 'Firefox OS'
      }
    }
    else if (silk) {
      result =  {
        name: 'Amazon Silk'
      , silk: t
      , version : getFirstMatch(/silk\/(\d+(\.\d+)?)/i)
      }
    }
    else if (/phantom/i.test(ua)) {
      result = {
        name: 'PhantomJS'
      , phantom: t
      , version: getFirstMatch(/phantomjs\/(\d+(\.\d+)?)/i)
      }
    }
    else if (/slimerjs/i.test(ua)) {
      result = {
        name: 'SlimerJS'
        , slimer: t
        , version: getFirstMatch(/slimerjs\/(\d+(\.\d+)?)/i)
      }
    }
    else if (/blackberry|\bbb\d+/i.test(ua) || /rim\stablet/i.test(ua)) {
      result = {
        name: 'BlackBerry'
      , osname: 'BlackBerry OS'
      , blackberry: t
      , version: versionIdentifier || getFirstMatch(/blackberry[\d]+\/(\d+(\.\d+)?)/i)
      }
    }
    else if (webos) {
      result = {
        name: 'WebOS'
      , osname: 'WebOS'
      , webos: t
      , version: versionIdentifier || getFirstMatch(/w(?:eb)?osbrowser\/(\d+(\.\d+)?)/i)
      };
      /touchpad\//i.test(ua) && (result.touchpad = t)
    }
    else if (/bada/i.test(ua)) {
      result = {
        name: 'Bada'
      , osname: 'Bada'
      , bada: t
      , version: getFirstMatch(/dolfin\/(\d+(\.\d+)?)/i)
      };
    }
    else if (tizen) {
      result = {
        name: 'Tizen'
      , osname: 'Tizen'
      , tizen: t
      , version: getFirstMatch(/(?:tizen\s?)?browser\/(\d+(\.\d+)?)/i) || versionIdentifier
      };
    }
    else if (/qupzilla/i.test(ua)) {
      result = {
        name: 'QupZilla'
        , qupzilla: t
        , version: getFirstMatch(/(?:qupzilla)[\s\/](\d+(?:\.\d+)+)/i) || versionIdentifier
      }
    }
    else if (/chromium/i.test(ua)) {
      result = {
        name: 'Chromium'
        , chromium: t
        , version: getFirstMatch(/(?:chromium)[\s\/](\d+(?:\.\d+)?)/i) || versionIdentifier
      }
    }
    else if (/chrome|crios|crmo/i.test(ua)) {
      result = {
        name: 'Chrome'
        , chrome: t
        , version: getFirstMatch(/(?:chrome|crios|crmo)\/(\d+(\.\d+)?)/i)
      }
    }
    else if (android) {
      result = {
        name: 'Android'
        , version: versionIdentifier
      }
    }
    else if (/safari|applewebkit/i.test(ua)) {
      result = {
        name: 'Safari'
      , safari: t
      }
      if (versionIdentifier) {
        result.version = versionIdentifier
      }
    }
    else if (iosdevice) {
      result = {
        name : iosdevice == 'iphone' ? 'iPhone' : iosdevice == 'ipad' ? 'iPad' : 'iPod'
      }
      // WTF: version is not part of user agent in web apps
      if (versionIdentifier) {
        result.version = versionIdentifier
      }
    }
    else if(/googlebot/i.test(ua)) {
      result = {
        name: 'Googlebot'
      , googlebot: t
      , version: getFirstMatch(/googlebot\/(\d+(\.\d+))/i) || versionIdentifier
      }
    }
    else {
      result = {
        name: getFirstMatch(/^(.*)\/(.*) /),
        version: getSecondMatch(/^(.*)\/(.*) /)
     };
   }

    // set webkit or gecko flag for browsers based on these engines
    if (!result.msedge && /(apple)?webkit/i.test(ua)) {
      if (/(apple)?webkit\/537\.36/i.test(ua)) {
        result.name = result.name || "Blink"
        result.blink = t
      } else {
        result.name = result.name || "Webkit"
        result.webkit = t
      }
      if (!result.version && versionIdentifier) {
        result.version = versionIdentifier
      }
    } else if (!result.opera && /gecko\//i.test(ua)) {
      result.name = result.name || "Gecko"
      result.gecko = t
      result.version = result.version || getFirstMatch(/gecko\/(\d+(\.\d+)?)/i)
    }

    // set OS flags for platforms that have multiple browsers
    if (!result.windowsphone && (android || result.silk)) {
      result.android = t
      result.osname = 'Android'
    } else if (!result.windowsphone && iosdevice) {
      result[iosdevice] = t
      result.ios = t
      result.osname = 'iOS'
    } else if (mac) {
      result.mac = t
      result.osname = 'macOS'
    } else if (xbox) {
      result.xbox = t
      result.osname = 'Xbox'
    } else if (windows) {
      result.windows = t
      result.osname = 'Windows'
    } else if (linux) {
      result.linux = t
      result.osname = 'Linux'
    }

    function getWindowsVersion (s) {
      switch (s) {
        case 'NT': return 'NT'
        case 'XP': return 'XP'
        case 'NT 5.0': return '2000'
        case 'NT 5.1': return 'XP'
        case 'NT 5.2': return '2003'
        case 'NT 6.0': return 'Vista'
        case 'NT 6.1': return '7'
        case 'NT 6.2': return '8'
        case 'NT 6.3': return '8.1'
        case 'NT 10.0': return '10'
        default: return undefined
      }
    }

    // OS version extraction
    var osVersion = '';
    if (result.windows) {
      osVersion = getWindowsVersion(getFirstMatch(/Windows ((NT|XP)( \d\d?.\d)?)/i))
    } else if (result.windowsphone) {
      osVersion = getFirstMatch(/windows phone (?:os)?\s?(\d+(\.\d+)*)/i);
    } else if (result.mac) {
      osVersion = getFirstMatch(/Mac OS X (\d+([_\.\s]\d+)*)/i);
      osVersion = osVersion.replace(/[_\s]/g, '.');
    } else if (iosdevice) {
      osVersion = getFirstMatch(/os (\d+([_\s]\d+)*) like mac os x/i);
      osVersion = osVersion.replace(/[_\s]/g, '.');
    } else if (android) {
      osVersion = getFirstMatch(/android[ \/-](\d+(\.\d+)*)/i);
    } else if (result.webos) {
      osVersion = getFirstMatch(/(?:web|hpw)os\/(\d+(\.\d+)*)/i);
    } else if (result.blackberry) {
      osVersion = getFirstMatch(/rim\stablet\sos\s(\d+(\.\d+)*)/i);
    } else if (result.bada) {
      osVersion = getFirstMatch(/bada\/(\d+(\.\d+)*)/i);
    } else if (result.tizen) {
      osVersion = getFirstMatch(/tizen[\/\s](\d+(\.\d+)*)/i);
    }
    if (osVersion) {
      result.osversion = osVersion;
    }

    // device type extraction
    var osMajorVersion = !result.windows && osVersion.split('.')[0];
    if (
         tablet
      || nexusTablet
      || iosdevice == 'ipad'
      || (android && (osMajorVersion == 3 || (osMajorVersion >= 4 && !mobile)))
      || result.silk
    ) {
      result.tablet = t
    } else if (
         mobile
      || iosdevice == 'iphone'
      || iosdevice == 'ipod'
      || android
      || nexusMobile
      || result.blackberry
      || result.webos
      || result.bada
    ) {
      result.mobile = t
    }

    // Graded Browser Support
    // http://developer.yahoo.com/yui/articles/gbs
    if (result.msedge ||
        (result.msie && result.version >= 10) ||
        (result.yandexbrowser && result.version >= 15) ||
		    (result.vivaldi && result.version >= 1.0) ||
        (result.chrome && result.version >= 20) ||
        (result.samsungBrowser && result.version >= 4) ||
        (result.whale && compareVersions([result.version, '1.0']) === 1) ||
        (result.mzbrowser && compareVersions([result.version, '6.0']) === 1) ||
        (result.focus && compareVersions([result.version, '1.0']) === 1) ||
        (result.firefox && result.version >= 20.0) ||
        (result.safari && result.version >= 6) ||
        (result.opera && result.version >= 10.0) ||
        (result.ios && result.osversion && result.osversion.split(".")[0] >= 6) ||
        (result.blackberry && result.version >= 10.1)
        || (result.chromium && result.version >= 20)
        ) {
      result.a = t;
    }
    else if ((result.msie && result.version < 10) ||
        (result.chrome && result.version < 20) ||
        (result.firefox && result.version < 20.0) ||
        (result.safari && result.version < 6) ||
        (result.opera && result.version < 10.0) ||
        (result.ios && result.osversion && result.osversion.split(".")[0] < 6)
        || (result.chromium && result.version < 20)
        ) {
      result.c = t
    } else result.x = t

    return result
  }

  var bowser = detect(typeof navigator !== 'undefined' ? navigator.userAgent || '' : '')

  bowser.test = function (browserList) {
    for (var i = 0; i < browserList.length; ++i) {
      var browserItem = browserList[i];
      if (typeof browserItem=== 'string') {
        if (browserItem in bowser) {
          return true;
        }
      }
    }
    return false;
  }

  /**
   * Get version precisions count
   *
   * @example
   *   getVersionPrecision("1.10.3") // 3
   *
   * @param  {string} version
   * @return {number}
   */
  function getVersionPrecision(version) {
    return version.split(".").length;
  }

  /**
   * Array::map polyfill
   *
   * @param  {Array} arr
   * @param  {Function} iterator
   * @return {Array}
   */
  function map(arr, iterator) {
    var result = [], i;
    if (Array.prototype.map) {
      return Array.prototype.map.call(arr, iterator);
    }
    for (i = 0; i < arr.length; i++) {
      result.push(iterator(arr[i]));
    }
    return result;
  }

  /**
   * Calculate browser version weight
   *
   * @example
   *   compareVersions(['1.10.2.1',  '1.8.2.1.90'])    // 1
   *   compareVersions(['1.010.2.1', '1.09.2.1.90']);  // 1
   *   compareVersions(['1.10.2.1',  '1.10.2.1']);     // 0
   *   compareVersions(['1.10.2.1',  '1.0800.2']);     // -1
   *
   * @param  {Array<String>} versions versions to compare
   * @return {Number} comparison result
   */
  function compareVersions(versions) {
    // 1) get common precision for both versions, for example for "10.0" and "9" it should be 2
    var precision = Math.max(getVersionPrecision(versions[0]), getVersionPrecision(versions[1]));
    var chunks = map(versions, function (version) {
      var delta = precision - getVersionPrecision(version);

      // 2) "9" -> "9.0" (for precision = 2)
      version = version + new Array(delta + 1).join(".0");

      // 3) "9.0" -> ["000000000"", "000000009"]
      return map(version.split("."), function (chunk) {
        return new Array(20 - chunk.length).join("0") + chunk;
      }).reverse();
    });

    // iterate in reverse order by reversed chunks array
    while (--precision >= 0) {
      // 4) compare: "000000009" > "000000010" = false (but "9" > "10" = true)
      if (chunks[0][precision] > chunks[1][precision]) {
        return 1;
      }
      else if (chunks[0][precision] === chunks[1][precision]) {
        if (precision === 0) {
          // all version chunks are same
          return 0;
        }
      }
      else {
        return -1;
      }
    }
  }

  /**
   * Check if browser is unsupported
   *
   * @example
   *   bowser.isUnsupportedBrowser({
   *     msie: "10",
   *     firefox: "23",
   *     chrome: "29",
   *     safari: "5.1",
   *     opera: "16",
   *     phantom: "534"
   *   });
   *
   * @param  {Object}  minVersions map of minimal version to browser
   * @param  {Boolean} [strictMode = false] flag to return false if browser wasn't found in map
   * @param  {String}  [ua] user agent string
   * @return {Boolean}
   */
  function isUnsupportedBrowser(minVersions, strictMode, ua) {
    var _bowser = bowser;

    // make strictMode param optional with ua param usage
    if (typeof strictMode === 'string') {
      ua = strictMode;
      strictMode = void(0);
    }

    if (strictMode === void(0)) {
      strictMode = false;
    }
    if (ua) {
      _bowser = detect(ua);
    }

    var version = "" + _bowser.version;
    for (var browser in minVersions) {
      if (minVersions.hasOwnProperty(browser)) {
        if (_bowser[browser]) {
          if (typeof minVersions[browser] !== 'string') {
            throw new Error('Browser version in the minVersion map should be a string: ' + browser + ': ' + String(minVersions));
          }

          // browser version and min supported version.
          return compareVersions([version, minVersions[browser]]) < 0;
        }
      }
    }

    return strictMode; // not found
  }

  /**
   * Check if browser is supported
   *
   * @param  {Object} minVersions map of minimal version to browser
   * @param  {Boolean} [strictMode = false] flag to return false if browser wasn't found in map
   * @param  {String}  [ua] user agent string
   * @return {Boolean}
   */
  function check(minVersions, strictMode, ua) {
    return !isUnsupportedBrowser(minVersions, strictMode, ua);
  }

  bowser.isUnsupportedBrowser = isUnsupportedBrowser;
  bowser.compareVersions = compareVersions;
  bowser.check = check;

  /*
   * Set our detect method to the main bowser object so we can
   * reuse it to test other user agents.
   * This is needed to implement future tests.
   */
  bowser._detect = detect;

  /*
   * Set our detect public method to the main bowser object
   * This is needed to implement bowser in server side
   */
  bowser.detect = detect;
  return bowser
});


/***/ }),

/***/ "./node_modules/classnames/index.js":
/*!******************************************!*\
  !*** ./node_modules/classnames/index.js ***!
  \******************************************/
/***/ (function(module, exports) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
  Copyright (c) 2018 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
/* global define */

(function () {
	'use strict';

	var hasOwn = {}.hasOwnProperty;

	function classNames() {
		var classes = [];

		for (var i = 0; i < arguments.length; i++) {
			var arg = arguments[i];
			if (!arg) continue;

			var argType = typeof arg;

			if (argType === 'string' || argType === 'number') {
				classes.push(arg);
			} else if (Array.isArray(arg)) {
				if (arg.length) {
					var inner = classNames.apply(null, arg);
					if (inner) {
						classes.push(inner);
					}
				}
			} else if (argType === 'object') {
				if (arg.toString === Object.prototype.toString) {
					for (var key in arg) {
						if (hasOwn.call(arg, key) && arg[key]) {
							classes.push(key);
						}
					}
				} else {
					classes.push(arg.toString());
				}
			}
		}

		return classes.join(' ');
	}

	if ( true && module.exports) {
		classNames.default = classNames;
		module.exports = classNames;
	} else if (true) {
		// register as 'classnames', consistent with npm package name
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function () {
			return classNames;
		}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else {}
}());


/***/ }),

/***/ "./node_modules/color-name/index.js":
/*!******************************************!*\
  !*** ./node_modules/color-name/index.js ***!
  \******************************************/
/***/ (function(module) {

"use strict";


module.exports = {
	"aliceblue": [240, 248, 255],
	"antiquewhite": [250, 235, 215],
	"aqua": [0, 255, 255],
	"aquamarine": [127, 255, 212],
	"azure": [240, 255, 255],
	"beige": [245, 245, 220],
	"bisque": [255, 228, 196],
	"black": [0, 0, 0],
	"blanchedalmond": [255, 235, 205],
	"blue": [0, 0, 255],
	"blueviolet": [138, 43, 226],
	"brown": [165, 42, 42],
	"burlywood": [222, 184, 135],
	"cadetblue": [95, 158, 160],
	"chartreuse": [127, 255, 0],
	"chocolate": [210, 105, 30],
	"coral": [255, 127, 80],
	"cornflowerblue": [100, 149, 237],
	"cornsilk": [255, 248, 220],
	"crimson": [220, 20, 60],
	"cyan": [0, 255, 255],
	"darkblue": [0, 0, 139],
	"darkcyan": [0, 139, 139],
	"darkgoldenrod": [184, 134, 11],
	"darkgray": [169, 169, 169],
	"darkgreen": [0, 100, 0],
	"darkgrey": [169, 169, 169],
	"darkkhaki": [189, 183, 107],
	"darkmagenta": [139, 0, 139],
	"darkolivegreen": [85, 107, 47],
	"darkorange": [255, 140, 0],
	"darkorchid": [153, 50, 204],
	"darkred": [139, 0, 0],
	"darksalmon": [233, 150, 122],
	"darkseagreen": [143, 188, 143],
	"darkslateblue": [72, 61, 139],
	"darkslategray": [47, 79, 79],
	"darkslategrey": [47, 79, 79],
	"darkturquoise": [0, 206, 209],
	"darkviolet": [148, 0, 211],
	"deeppink": [255, 20, 147],
	"deepskyblue": [0, 191, 255],
	"dimgray": [105, 105, 105],
	"dimgrey": [105, 105, 105],
	"dodgerblue": [30, 144, 255],
	"firebrick": [178, 34, 34],
	"floralwhite": [255, 250, 240],
	"forestgreen": [34, 139, 34],
	"fuchsia": [255, 0, 255],
	"gainsboro": [220, 220, 220],
	"ghostwhite": [248, 248, 255],
	"gold": [255, 215, 0],
	"goldenrod": [218, 165, 32],
	"gray": [128, 128, 128],
	"green": [0, 128, 0],
	"greenyellow": [173, 255, 47],
	"grey": [128, 128, 128],
	"honeydew": [240, 255, 240],
	"hotpink": [255, 105, 180],
	"indianred": [205, 92, 92],
	"indigo": [75, 0, 130],
	"ivory": [255, 255, 240],
	"khaki": [240, 230, 140],
	"lavender": [230, 230, 250],
	"lavenderblush": [255, 240, 245],
	"lawngreen": [124, 252, 0],
	"lemonchiffon": [255, 250, 205],
	"lightblue": [173, 216, 230],
	"lightcoral": [240, 128, 128],
	"lightcyan": [224, 255, 255],
	"lightgoldenrodyellow": [250, 250, 210],
	"lightgray": [211, 211, 211],
	"lightgreen": [144, 238, 144],
	"lightgrey": [211, 211, 211],
	"lightpink": [255, 182, 193],
	"lightsalmon": [255, 160, 122],
	"lightseagreen": [32, 178, 170],
	"lightskyblue": [135, 206, 250],
	"lightslategray": [119, 136, 153],
	"lightslategrey": [119, 136, 153],
	"lightsteelblue": [176, 196, 222],
	"lightyellow": [255, 255, 224],
	"lime": [0, 255, 0],
	"limegreen": [50, 205, 50],
	"linen": [250, 240, 230],
	"magenta": [255, 0, 255],
	"maroon": [128, 0, 0],
	"mediumaquamarine": [102, 205, 170],
	"mediumblue": [0, 0, 205],
	"mediumorchid": [186, 85, 211],
	"mediumpurple": [147, 112, 219],
	"mediumseagreen": [60, 179, 113],
	"mediumslateblue": [123, 104, 238],
	"mediumspringgreen": [0, 250, 154],
	"mediumturquoise": [72, 209, 204],
	"mediumvioletred": [199, 21, 133],
	"midnightblue": [25, 25, 112],
	"mintcream": [245, 255, 250],
	"mistyrose": [255, 228, 225],
	"moccasin": [255, 228, 181],
	"navajowhite": [255, 222, 173],
	"navy": [0, 0, 128],
	"oldlace": [253, 245, 230],
	"olive": [128, 128, 0],
	"olivedrab": [107, 142, 35],
	"orange": [255, 165, 0],
	"orangered": [255, 69, 0],
	"orchid": [218, 112, 214],
	"palegoldenrod": [238, 232, 170],
	"palegreen": [152, 251, 152],
	"paleturquoise": [175, 238, 238],
	"palevioletred": [219, 112, 147],
	"papayawhip": [255, 239, 213],
	"peachpuff": [255, 218, 185],
	"peru": [205, 133, 63],
	"pink": [255, 192, 203],
	"plum": [221, 160, 221],
	"powderblue": [176, 224, 230],
	"purple": [128, 0, 128],
	"rebeccapurple": [102, 51, 153],
	"red": [255, 0, 0],
	"rosybrown": [188, 143, 143],
	"royalblue": [65, 105, 225],
	"saddlebrown": [139, 69, 19],
	"salmon": [250, 128, 114],
	"sandybrown": [244, 164, 96],
	"seagreen": [46, 139, 87],
	"seashell": [255, 245, 238],
	"sienna": [160, 82, 45],
	"silver": [192, 192, 192],
	"skyblue": [135, 206, 235],
	"slateblue": [106, 90, 205],
	"slategray": [112, 128, 144],
	"slategrey": [112, 128, 144],
	"snow": [255, 250, 250],
	"springgreen": [0, 255, 127],
	"steelblue": [70, 130, 180],
	"tan": [210, 180, 140],
	"teal": [0, 128, 128],
	"thistle": [216, 191, 216],
	"tomato": [255, 99, 71],
	"turquoise": [64, 224, 208],
	"violet": [238, 130, 238],
	"wheat": [245, 222, 179],
	"white": [255, 255, 255],
	"whitesmoke": [245, 245, 245],
	"yellow": [255, 255, 0],
	"yellowgreen": [154, 205, 50]
};


/***/ }),

/***/ "./node_modules/color-string/index.js":
/*!********************************************!*\
  !*** ./node_modules/color-string/index.js ***!
  \********************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

/* MIT license */
var colorNames = __webpack_require__(/*! color-name */ "./node_modules/color-name/index.js");
var swizzle = __webpack_require__(/*! simple-swizzle */ "./node_modules/simple-swizzle/index.js");
var hasOwnProperty = Object.hasOwnProperty;

var reverseNames = {};

// create a list of reverse color names
for (var name in colorNames) {
	if (hasOwnProperty.call(colorNames, name)) {
		reverseNames[colorNames[name]] = name;
	}
}

var cs = module.exports = {
	to: {},
	get: {}
};

cs.get = function (string) {
	var prefix = string.substring(0, 3).toLowerCase();
	var val;
	var model;
	switch (prefix) {
		case 'hsl':
			val = cs.get.hsl(string);
			model = 'hsl';
			break;
		case 'hwb':
			val = cs.get.hwb(string);
			model = 'hwb';
			break;
		default:
			val = cs.get.rgb(string);
			model = 'rgb';
			break;
	}

	if (!val) {
		return null;
	}

	return {model: model, value: val};
};

cs.get.rgb = function (string) {
	if (!string) {
		return null;
	}

	var abbr = /^#([a-f0-9]{3,4})$/i;
	var hex = /^#([a-f0-9]{6})([a-f0-9]{2})?$/i;
	var rgba = /^rgba?\(\s*([+-]?\d+)(?=[\s,])\s*(?:,\s*)?([+-]?\d+)(?=[\s,])\s*(?:,\s*)?([+-]?\d+)\s*(?:[,|\/]\s*([+-]?[\d\.]+)(%?)\s*)?\)$/;
	var per = /^rgba?\(\s*([+-]?[\d\.]+)\%\s*,?\s*([+-]?[\d\.]+)\%\s*,?\s*([+-]?[\d\.]+)\%\s*(?:[,|\/]\s*([+-]?[\d\.]+)(%?)\s*)?\)$/;
	var keyword = /^(\w+)$/;

	var rgb = [0, 0, 0, 1];
	var match;
	var i;
	var hexAlpha;

	if (match = string.match(hex)) {
		hexAlpha = match[2];
		match = match[1];

		for (i = 0; i < 3; i++) {
			// https://jsperf.com/slice-vs-substr-vs-substring-methods-long-string/19
			var i2 = i * 2;
			rgb[i] = parseInt(match.slice(i2, i2 + 2), 16);
		}

		if (hexAlpha) {
			rgb[3] = parseInt(hexAlpha, 16) / 255;
		}
	} else if (match = string.match(abbr)) {
		match = match[1];
		hexAlpha = match[3];

		for (i = 0; i < 3; i++) {
			rgb[i] = parseInt(match[i] + match[i], 16);
		}

		if (hexAlpha) {
			rgb[3] = parseInt(hexAlpha + hexAlpha, 16) / 255;
		}
	} else if (match = string.match(rgba)) {
		for (i = 0; i < 3; i++) {
			rgb[i] = parseInt(match[i + 1], 0);
		}

		if (match[4]) {
			if (match[5]) {
				rgb[3] = parseFloat(match[4]) * 0.01;
			} else {
				rgb[3] = parseFloat(match[4]);
			}
		}
	} else if (match = string.match(per)) {
		for (i = 0; i < 3; i++) {
			rgb[i] = Math.round(parseFloat(match[i + 1]) * 2.55);
		}

		if (match[4]) {
			if (match[5]) {
				rgb[3] = parseFloat(match[4]) * 0.01;
			} else {
				rgb[3] = parseFloat(match[4]);
			}
		}
	} else if (match = string.match(keyword)) {
		if (match[1] === 'transparent') {
			return [0, 0, 0, 0];
		}

		if (!hasOwnProperty.call(colorNames, match[1])) {
			return null;
		}

		rgb = colorNames[match[1]];
		rgb[3] = 1;

		return rgb;
	} else {
		return null;
	}

	for (i = 0; i < 3; i++) {
		rgb[i] = clamp(rgb[i], 0, 255);
	}
	rgb[3] = clamp(rgb[3], 0, 1);

	return rgb;
};

cs.get.hsl = function (string) {
	if (!string) {
		return null;
	}

	var hsl = /^hsla?\(\s*([+-]?(?:\d{0,3}\.)?\d+)(?:deg)?\s*,?\s*([+-]?[\d\.]+)%\s*,?\s*([+-]?[\d\.]+)%\s*(?:[,|\/]\s*([+-]?(?=\.\d|\d)(?:0|[1-9]\d*)?(?:\.\d*)?(?:[eE][+-]?\d+)?)\s*)?\)$/;
	var match = string.match(hsl);

	if (match) {
		var alpha = parseFloat(match[4]);
		var h = ((parseFloat(match[1]) % 360) + 360) % 360;
		var s = clamp(parseFloat(match[2]), 0, 100);
		var l = clamp(parseFloat(match[3]), 0, 100);
		var a = clamp(isNaN(alpha) ? 1 : alpha, 0, 1);

		return [h, s, l, a];
	}

	return null;
};

cs.get.hwb = function (string) {
	if (!string) {
		return null;
	}

	var hwb = /^hwb\(\s*([+-]?\d{0,3}(?:\.\d+)?)(?:deg)?\s*,\s*([+-]?[\d\.]+)%\s*,\s*([+-]?[\d\.]+)%\s*(?:,\s*([+-]?(?=\.\d|\d)(?:0|[1-9]\d*)?(?:\.\d*)?(?:[eE][+-]?\d+)?)\s*)?\)$/;
	var match = string.match(hwb);

	if (match) {
		var alpha = parseFloat(match[4]);
		var h = ((parseFloat(match[1]) % 360) + 360) % 360;
		var w = clamp(parseFloat(match[2]), 0, 100);
		var b = clamp(parseFloat(match[3]), 0, 100);
		var a = clamp(isNaN(alpha) ? 1 : alpha, 0, 1);
		return [h, w, b, a];
	}

	return null;
};

cs.to.hex = function () {
	var rgba = swizzle(arguments);

	return (
		'#' +
		hexDouble(rgba[0]) +
		hexDouble(rgba[1]) +
		hexDouble(rgba[2]) +
		(rgba[3] < 1
			? (hexDouble(Math.round(rgba[3] * 255)))
			: '')
	);
};

cs.to.rgb = function () {
	var rgba = swizzle(arguments);

	return rgba.length < 4 || rgba[3] === 1
		? 'rgb(' + Math.round(rgba[0]) + ', ' + Math.round(rgba[1]) + ', ' + Math.round(rgba[2]) + ')'
		: 'rgba(' + Math.round(rgba[0]) + ', ' + Math.round(rgba[1]) + ', ' + Math.round(rgba[2]) + ', ' + rgba[3] + ')';
};

cs.to.rgb.percent = function () {
	var rgba = swizzle(arguments);

	var r = Math.round(rgba[0] / 255 * 100);
	var g = Math.round(rgba[1] / 255 * 100);
	var b = Math.round(rgba[2] / 255 * 100);

	return rgba.length < 4 || rgba[3] === 1
		? 'rgb(' + r + '%, ' + g + '%, ' + b + '%)'
		: 'rgba(' + r + '%, ' + g + '%, ' + b + '%, ' + rgba[3] + ')';
};

cs.to.hsl = function () {
	var hsla = swizzle(arguments);
	return hsla.length < 4 || hsla[3] === 1
		? 'hsl(' + hsla[0] + ', ' + hsla[1] + '%, ' + hsla[2] + '%)'
		: 'hsla(' + hsla[0] + ', ' + hsla[1] + '%, ' + hsla[2] + '%, ' + hsla[3] + ')';
};

// hwb is a bit different than rgb(a) & hsl(a) since there is no alpha specific syntax
// (hwb have alpha optional & 1 is default value)
cs.to.hwb = function () {
	var hwba = swizzle(arguments);

	var a = '';
	if (hwba.length >= 4 && hwba[3] !== 1) {
		a = ', ' + hwba[3];
	}

	return 'hwb(' + hwba[0] + ', ' + hwba[1] + '%, ' + hwba[2] + '%' + a + ')';
};

cs.to.keyword = function (rgb) {
	return reverseNames[rgb.slice(0, 3)];
};

// helpers
function clamp(num, min, max) {
	return Math.min(Math.max(min, num), max);
}

function hexDouble(num) {
	var str = Math.round(num).toString(16).toUpperCase();
	return (str.length < 2) ? '0' + str : str;
}


/***/ }),

/***/ "./node_modules/color/index.js":
/*!*************************************!*\
  !*** ./node_modules/color/index.js ***!
  \*************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

const colorString = __webpack_require__(/*! color-string */ "./node_modules/color-string/index.js");
const convert = __webpack_require__(/*! color-convert */ "./node_modules/color/node_modules/color-convert/index.js");

const _slice = [].slice;

const skippedModels = [
	// To be honest, I don't really feel like keyword belongs in color convert, but eh.
	'keyword',

	// Gray conflicts with some method names, and has its own method defined.
	'gray',

	// Shouldn't really be in color-convert either...
	'hex',
];

const hashedModelKeys = {};
for (const model of Object.keys(convert)) {
	hashedModelKeys[_slice.call(convert[model].labels).sort().join('')] = model;
}

const limiters = {};

function Color(object, model) {
	if (!(this instanceof Color)) {
		return new Color(object, model);
	}

	if (model && model in skippedModels) {
		model = null;
	}

	if (model && !(model in convert)) {
		throw new Error('Unknown model: ' + model);
	}

	let i;
	let channels;

	if (object == null) { // eslint-disable-line no-eq-null,eqeqeq
		this.model = 'rgb';
		this.color = [0, 0, 0];
		this.valpha = 1;
	} else if (object instanceof Color) {
		this.model = object.model;
		this.color = object.color.slice();
		this.valpha = object.valpha;
	} else if (typeof object === 'string') {
		const result = colorString.get(object);
		if (result === null) {
			throw new Error('Unable to parse color from string: ' + object);
		}

		this.model = result.model;
		channels = convert[this.model].channels;
		this.color = result.value.slice(0, channels);
		this.valpha = typeof result.value[channels] === 'number' ? result.value[channels] : 1;
	} else if (object.length > 0) {
		this.model = model || 'rgb';
		channels = convert[this.model].channels;
		const newArray = _slice.call(object, 0, channels);
		this.color = zeroArray(newArray, channels);
		this.valpha = typeof object[channels] === 'number' ? object[channels] : 1;
	} else if (typeof object === 'number') {
		// This is always RGB - can be converted later on.
		this.model = 'rgb';
		this.color = [
			(object >> 16) & 0xFF,
			(object >> 8) & 0xFF,
			object & 0xFF,
		];
		this.valpha = 1;
	} else {
		this.valpha = 1;

		const keys = Object.keys(object);
		if ('alpha' in object) {
			keys.splice(keys.indexOf('alpha'), 1);
			this.valpha = typeof object.alpha === 'number' ? object.alpha : 0;
		}

		const hashedKeys = keys.sort().join('');
		if (!(hashedKeys in hashedModelKeys)) {
			throw new Error('Unable to parse color from object: ' + JSON.stringify(object));
		}

		this.model = hashedModelKeys[hashedKeys];

		const labels = convert[this.model].labels;
		const color = [];
		for (i = 0; i < labels.length; i++) {
			color.push(object[labels[i]]);
		}

		this.color = zeroArray(color);
	}

	// Perform limitations (clamping, etc.)
	if (limiters[this.model]) {
		channels = convert[this.model].channels;
		for (i = 0; i < channels; i++) {
			const limit = limiters[this.model][i];
			if (limit) {
				this.color[i] = limit(this.color[i]);
			}
		}
	}

	this.valpha = Math.max(0, Math.min(1, this.valpha));

	if (Object.freeze) {
		Object.freeze(this);
	}
}

Color.prototype = {
	toString() {
		return this.string();
	},

	toJSON() {
		return this[this.model]();
	},

	string(places) {
		let self = this.model in colorString.to ? this : this.rgb();
		self = self.round(typeof places === 'number' ? places : 1);
		const args = self.valpha === 1 ? self.color : self.color.concat(this.valpha);
		return colorString.to[self.model](args);
	},

	percentString(places) {
		const self = this.rgb().round(typeof places === 'number' ? places : 1);
		const args = self.valpha === 1 ? self.color : self.color.concat(this.valpha);
		return colorString.to.rgb.percent(args);
	},

	array() {
		return this.valpha === 1 ? this.color.slice() : this.color.concat(this.valpha);
	},

	object() {
		const result = {};
		const channels = convert[this.model].channels;
		const labels = convert[this.model].labels;

		for (let i = 0; i < channels; i++) {
			result[labels[i]] = this.color[i];
		}

		if (this.valpha !== 1) {
			result.alpha = this.valpha;
		}

		return result;
	},

	unitArray() {
		const rgb = this.rgb().color;
		rgb[0] /= 255;
		rgb[1] /= 255;
		rgb[2] /= 255;

		if (this.valpha !== 1) {
			rgb.push(this.valpha);
		}

		return rgb;
	},

	unitObject() {
		const rgb = this.rgb().object();
		rgb.r /= 255;
		rgb.g /= 255;
		rgb.b /= 255;

		if (this.valpha !== 1) {
			rgb.alpha = this.valpha;
		}

		return rgb;
	},

	round(places) {
		places = Math.max(places || 0, 0);
		return new Color(this.color.map(roundToPlace(places)).concat(this.valpha), this.model);
	},

	alpha(value) {
		if (arguments.length > 0) {
			return new Color(this.color.concat(Math.max(0, Math.min(1, value))), this.model);
		}

		return this.valpha;
	},

	// Rgb
	red: getset('rgb', 0, maxfn(255)),
	green: getset('rgb', 1, maxfn(255)),
	blue: getset('rgb', 2, maxfn(255)),

	hue: getset(['hsl', 'hsv', 'hsl', 'hwb', 'hcg'], 0, value => ((value % 360) + 360) % 360),

	saturationl: getset('hsl', 1, maxfn(100)),
	lightness: getset('hsl', 2, maxfn(100)),

	saturationv: getset('hsv', 1, maxfn(100)),
	value: getset('hsv', 2, maxfn(100)),

	chroma: getset('hcg', 1, maxfn(100)),
	gray: getset('hcg', 2, maxfn(100)),

	white: getset('hwb', 1, maxfn(100)),
	wblack: getset('hwb', 2, maxfn(100)),

	cyan: getset('cmyk', 0, maxfn(100)),
	magenta: getset('cmyk', 1, maxfn(100)),
	yellow: getset('cmyk', 2, maxfn(100)),
	black: getset('cmyk', 3, maxfn(100)),

	x: getset('xyz', 0, maxfn(100)),
	y: getset('xyz', 1, maxfn(100)),
	z: getset('xyz', 2, maxfn(100)),

	l: getset('lab', 0, maxfn(100)),
	a: getset('lab', 1),
	b: getset('lab', 2),

	keyword(value) {
		if (arguments.length > 0) {
			return new Color(value);
		}

		return convert[this.model].keyword(this.color);
	},

	hex(value) {
		if (arguments.length > 0) {
			return new Color(value);
		}

		return colorString.to.hex(this.rgb().round().color);
	},

	hexa(value) {
		if (arguments.length > 0) {
			return new Color(value);
		}

		const rgbArray = this.rgb().round().color;

		let alphaHex = Math.round(this.valpha * 255).toString(16).toUpperCase();
		if (alphaHex.length === 1) {
			alphaHex = '0' + alphaHex;
		}

		return colorString.to.hex(rgbArray) + alphaHex;
	},

	rgbNumber() {
		const rgb = this.rgb().color;
		return ((rgb[0] & 0xFF) << 16) | ((rgb[1] & 0xFF) << 8) | (rgb[2] & 0xFF);
	},

	luminosity() {
		// http://www.w3.org/TR/WCAG20/#relativeluminancedef
		const rgb = this.rgb().color;

		const lum = [];
		for (const [i, element] of rgb.entries()) {
			const chan = element / 255;
			lum[i] = (chan <= 0.039_28) ? chan / 12.92 : ((chan + 0.055) / 1.055) ** 2.4;
		}

		return 0.2126 * lum[0] + 0.7152 * lum[1] + 0.0722 * lum[2];
	},

	contrast(color2) {
		// http://www.w3.org/TR/WCAG20/#contrast-ratiodef
		const lum1 = this.luminosity();
		const lum2 = color2.luminosity();

		if (lum1 > lum2) {
			return (lum1 + 0.05) / (lum2 + 0.05);
		}

		return (lum2 + 0.05) / (lum1 + 0.05);
	},

	level(color2) {
		const contrastRatio = this.contrast(color2);
		if (contrastRatio >= 7.1) {
			return 'AAA';
		}

		return (contrastRatio >= 4.5) ? 'AA' : '';
	},

	isDark() {
		// YIQ equation from http://24ways.org/2010/calculating-color-contrast
		const rgb = this.rgb().color;
		const yiq = (rgb[0] * 299 + rgb[1] * 587 + rgb[2] * 114) / 1000;
		return yiq < 128;
	},

	isLight() {
		return !this.isDark();
	},

	negate() {
		const rgb = this.rgb();
		for (let i = 0; i < 3; i++) {
			rgb.color[i] = 255 - rgb.color[i];
		}

		return rgb;
	},

	lighten(ratio) {
		const hsl = this.hsl();
		hsl.color[2] += hsl.color[2] * ratio;
		return hsl;
	},

	darken(ratio) {
		const hsl = this.hsl();
		hsl.color[2] -= hsl.color[2] * ratio;
		return hsl;
	},

	saturate(ratio) {
		const hsl = this.hsl();
		hsl.color[1] += hsl.color[1] * ratio;
		return hsl;
	},

	desaturate(ratio) {
		const hsl = this.hsl();
		hsl.color[1] -= hsl.color[1] * ratio;
		return hsl;
	},

	whiten(ratio) {
		const hwb = this.hwb();
		hwb.color[1] += hwb.color[1] * ratio;
		return hwb;
	},

	blacken(ratio) {
		const hwb = this.hwb();
		hwb.color[2] += hwb.color[2] * ratio;
		return hwb;
	},

	grayscale() {
		// http://en.wikipedia.org/wiki/Grayscale#Converting_color_to_grayscale
		const rgb = this.rgb().color;
		const value = rgb[0] * 0.3 + rgb[1] * 0.59 + rgb[2] * 0.11;
		return Color.rgb(value, value, value);
	},

	fade(ratio) {
		return this.alpha(this.valpha - (this.valpha * ratio));
	},

	opaquer(ratio) {
		return this.alpha(this.valpha + (this.valpha * ratio));
	},

	rotate(degrees) {
		const hsl = this.hsl();
		let hue = hsl.color[0];
		hue = (hue + degrees) % 360;
		hue = hue < 0 ? 360 + hue : hue;
		hsl.color[0] = hue;
		return hsl;
	},

	mix(mixinColor, weight) {
		// Ported from sass implementation in C
		// https://github.com/sass/libsass/blob/0e6b4a2850092356aa3ece07c6b249f0221caced/functions.cpp#L209
		if (!mixinColor || !mixinColor.rgb) {
			throw new Error('Argument to "mix" was not a Color instance, but rather an instance of ' + typeof mixinColor);
		}

		const color1 = mixinColor.rgb();
		const color2 = this.rgb();
		const p = weight === undefined ? 0.5 : weight;

		const w = 2 * p - 1;
		const a = color1.alpha() - color2.alpha();

		const w1 = (((w * a === -1) ? w : (w + a) / (1 + w * a)) + 1) / 2;
		const w2 = 1 - w1;

		return Color.rgb(
			w1 * color1.red() + w2 * color2.red(),
			w1 * color1.green() + w2 * color2.green(),
			w1 * color1.blue() + w2 * color2.blue(),
			color1.alpha() * p + color2.alpha() * (1 - p));
	},
};

// Model conversion methods and static constructors
for (const model of Object.keys(convert)) {
	if (skippedModels.includes(model)) {
		continue;
	}

	const channels = convert[model].channels;

	// Conversion methods
	Color.prototype[model] = function () {
		if (this.model === model) {
			return new Color(this);
		}

		if (arguments.length > 0) {
			return new Color(arguments, model);
		}

		const newAlpha = typeof arguments[channels] === 'number' ? channels : this.valpha;
		return new Color(assertArray(convert[this.model][model].raw(this.color)).concat(newAlpha), model);
	};

	// 'static' construction methods
	Color[model] = function (color) {
		if (typeof color === 'number') {
			color = zeroArray(_slice.call(arguments), channels);
		}

		return new Color(color, model);
	};
}

function roundTo(number, places) {
	return Number(number.toFixed(places));
}

function roundToPlace(places) {
	return function (number) {
		return roundTo(number, places);
	};
}

function getset(model, channel, modifier) {
	model = Array.isArray(model) ? model : [model];

	for (const m of model) {
		(limiters[m] || (limiters[m] = []))[channel] = modifier;
	}

	model = model[0];

	return function (value) {
		let result;

		if (arguments.length > 0) {
			if (modifier) {
				value = modifier(value);
			}

			result = this[model]();
			result.color[channel] = value;
			return result;
		}

		result = this[model]().color[channel];
		if (modifier) {
			result = modifier(result);
		}

		return result;
	};
}

function maxfn(max) {
	return function (v) {
		return Math.max(0, Math.min(max, v));
	};
}

function assertArray(value) {
	return Array.isArray(value) ? value : [value];
}

function zeroArray(array, length) {
	for (let i = 0; i < length; i++) {
		if (typeof array[i] !== 'number') {
			array[i] = 0;
		}
	}

	return array;
}

module.exports = Color;


/***/ }),

/***/ "./node_modules/color/node_modules/color-convert/conversions.js":
/*!**********************************************************************!*\
  !*** ./node_modules/color/node_modules/color-convert/conversions.js ***!
  \**********************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

/* MIT license */
/* eslint-disable no-mixed-operators */
const cssKeywords = __webpack_require__(/*! color-name */ "./node_modules/color/node_modules/color-name/index.js");

// NOTE: conversions should only return primitive values (i.e. arrays, or
//       values that give correct `typeof` results).
//       do not use box values types (i.e. Number(), String(), etc.)

const reverseKeywords = {};
for (const key of Object.keys(cssKeywords)) {
	reverseKeywords[cssKeywords[key]] = key;
}

const convert = {
	rgb: {channels: 3, labels: 'rgb'},
	hsl: {channels: 3, labels: 'hsl'},
	hsv: {channels: 3, labels: 'hsv'},
	hwb: {channels: 3, labels: 'hwb'},
	cmyk: {channels: 4, labels: 'cmyk'},
	xyz: {channels: 3, labels: 'xyz'},
	lab: {channels: 3, labels: 'lab'},
	lch: {channels: 3, labels: 'lch'},
	hex: {channels: 1, labels: ['hex']},
	keyword: {channels: 1, labels: ['keyword']},
	ansi16: {channels: 1, labels: ['ansi16']},
	ansi256: {channels: 1, labels: ['ansi256']},
	hcg: {channels: 3, labels: ['h', 'c', 'g']},
	apple: {channels: 3, labels: ['r16', 'g16', 'b16']},
	gray: {channels: 1, labels: ['gray']}
};

module.exports = convert;

// Hide .channels and .labels properties
for (const model of Object.keys(convert)) {
	if (!('channels' in convert[model])) {
		throw new Error('missing channels property: ' + model);
	}

	if (!('labels' in convert[model])) {
		throw new Error('missing channel labels property: ' + model);
	}

	if (convert[model].labels.length !== convert[model].channels) {
		throw new Error('channel and label counts mismatch: ' + model);
	}

	const {channels, labels} = convert[model];
	delete convert[model].channels;
	delete convert[model].labels;
	Object.defineProperty(convert[model], 'channels', {value: channels});
	Object.defineProperty(convert[model], 'labels', {value: labels});
}

convert.rgb.hsl = function (rgb) {
	const r = rgb[0] / 255;
	const g = rgb[1] / 255;
	const b = rgb[2] / 255;
	const min = Math.min(r, g, b);
	const max = Math.max(r, g, b);
	const delta = max - min;
	let h;
	let s;

	if (max === min) {
		h = 0;
	} else if (r === max) {
		h = (g - b) / delta;
	} else if (g === max) {
		h = 2 + (b - r) / delta;
	} else if (b === max) {
		h = 4 + (r - g) / delta;
	}

	h = Math.min(h * 60, 360);

	if (h < 0) {
		h += 360;
	}

	const l = (min + max) / 2;

	if (max === min) {
		s = 0;
	} else if (l <= 0.5) {
		s = delta / (max + min);
	} else {
		s = delta / (2 - max - min);
	}

	return [h, s * 100, l * 100];
};

convert.rgb.hsv = function (rgb) {
	let rdif;
	let gdif;
	let bdif;
	let h;
	let s;

	const r = rgb[0] / 255;
	const g = rgb[1] / 255;
	const b = rgb[2] / 255;
	const v = Math.max(r, g, b);
	const diff = v - Math.min(r, g, b);
	const diffc = function (c) {
		return (v - c) / 6 / diff + 1 / 2;
	};

	if (diff === 0) {
		h = 0;
		s = 0;
	} else {
		s = diff / v;
		rdif = diffc(r);
		gdif = diffc(g);
		bdif = diffc(b);

		if (r === v) {
			h = bdif - gdif;
		} else if (g === v) {
			h = (1 / 3) + rdif - bdif;
		} else if (b === v) {
			h = (2 / 3) + gdif - rdif;
		}

		if (h < 0) {
			h += 1;
		} else if (h > 1) {
			h -= 1;
		}
	}

	return [
		h * 360,
		s * 100,
		v * 100
	];
};

convert.rgb.hwb = function (rgb) {
	const r = rgb[0];
	const g = rgb[1];
	let b = rgb[2];
	const h = convert.rgb.hsl(rgb)[0];
	const w = 1 / 255 * Math.min(r, Math.min(g, b));

	b = 1 - 1 / 255 * Math.max(r, Math.max(g, b));

	return [h, w * 100, b * 100];
};

convert.rgb.cmyk = function (rgb) {
	const r = rgb[0] / 255;
	const g = rgb[1] / 255;
	const b = rgb[2] / 255;

	const k = Math.min(1 - r, 1 - g, 1 - b);
	const c = (1 - r - k) / (1 - k) || 0;
	const m = (1 - g - k) / (1 - k) || 0;
	const y = (1 - b - k) / (1 - k) || 0;

	return [c * 100, m * 100, y * 100, k * 100];
};

function comparativeDistance(x, y) {
	/*
		See https://en.m.wikipedia.org/wiki/Euclidean_distance#Squared_Euclidean_distance
	*/
	return (
		((x[0] - y[0]) ** 2) +
		((x[1] - y[1]) ** 2) +
		((x[2] - y[2]) ** 2)
	);
}

convert.rgb.keyword = function (rgb) {
	const reversed = reverseKeywords[rgb];
	if (reversed) {
		return reversed;
	}

	let currentClosestDistance = Infinity;
	let currentClosestKeyword;

	for (const keyword of Object.keys(cssKeywords)) {
		const value = cssKeywords[keyword];

		// Compute comparative distance
		const distance = comparativeDistance(rgb, value);

		// Check if its less, if so set as closest
		if (distance < currentClosestDistance) {
			currentClosestDistance = distance;
			currentClosestKeyword = keyword;
		}
	}

	return currentClosestKeyword;
};

convert.keyword.rgb = function (keyword) {
	return cssKeywords[keyword];
};

convert.rgb.xyz = function (rgb) {
	let r = rgb[0] / 255;
	let g = rgb[1] / 255;
	let b = rgb[2] / 255;

	// Assume sRGB
	r = r > 0.04045 ? (((r + 0.055) / 1.055) ** 2.4) : (r / 12.92);
	g = g > 0.04045 ? (((g + 0.055) / 1.055) ** 2.4) : (g / 12.92);
	b = b > 0.04045 ? (((b + 0.055) / 1.055) ** 2.4) : (b / 12.92);

	const x = (r * 0.4124) + (g * 0.3576) + (b * 0.1805);
	const y = (r * 0.2126) + (g * 0.7152) + (b * 0.0722);
	const z = (r * 0.0193) + (g * 0.1192) + (b * 0.9505);

	return [x * 100, y * 100, z * 100];
};

convert.rgb.lab = function (rgb) {
	const xyz = convert.rgb.xyz(rgb);
	let x = xyz[0];
	let y = xyz[1];
	let z = xyz[2];

	x /= 95.047;
	y /= 100;
	z /= 108.883;

	x = x > 0.008856 ? (x ** (1 / 3)) : (7.787 * x) + (16 / 116);
	y = y > 0.008856 ? (y ** (1 / 3)) : (7.787 * y) + (16 / 116);
	z = z > 0.008856 ? (z ** (1 / 3)) : (7.787 * z) + (16 / 116);

	const l = (116 * y) - 16;
	const a = 500 * (x - y);
	const b = 200 * (y - z);

	return [l, a, b];
};

convert.hsl.rgb = function (hsl) {
	const h = hsl[0] / 360;
	const s = hsl[1] / 100;
	const l = hsl[2] / 100;
	let t2;
	let t3;
	let val;

	if (s === 0) {
		val = l * 255;
		return [val, val, val];
	}

	if (l < 0.5) {
		t2 = l * (1 + s);
	} else {
		t2 = l + s - l * s;
	}

	const t1 = 2 * l - t2;

	const rgb = [0, 0, 0];
	for (let i = 0; i < 3; i++) {
		t3 = h + 1 / 3 * -(i - 1);
		if (t3 < 0) {
			t3++;
		}

		if (t3 > 1) {
			t3--;
		}

		if (6 * t3 < 1) {
			val = t1 + (t2 - t1) * 6 * t3;
		} else if (2 * t3 < 1) {
			val = t2;
		} else if (3 * t3 < 2) {
			val = t1 + (t2 - t1) * (2 / 3 - t3) * 6;
		} else {
			val = t1;
		}

		rgb[i] = val * 255;
	}

	return rgb;
};

convert.hsl.hsv = function (hsl) {
	const h = hsl[0];
	let s = hsl[1] / 100;
	let l = hsl[2] / 100;
	let smin = s;
	const lmin = Math.max(l, 0.01);

	l *= 2;
	s *= (l <= 1) ? l : 2 - l;
	smin *= lmin <= 1 ? lmin : 2 - lmin;
	const v = (l + s) / 2;
	const sv = l === 0 ? (2 * smin) / (lmin + smin) : (2 * s) / (l + s);

	return [h, sv * 100, v * 100];
};

convert.hsv.rgb = function (hsv) {
	const h = hsv[0] / 60;
	const s = hsv[1] / 100;
	let v = hsv[2] / 100;
	const hi = Math.floor(h) % 6;

	const f = h - Math.floor(h);
	const p = 255 * v * (1 - s);
	const q = 255 * v * (1 - (s * f));
	const t = 255 * v * (1 - (s * (1 - f)));
	v *= 255;

	switch (hi) {
		case 0:
			return [v, t, p];
		case 1:
			return [q, v, p];
		case 2:
			return [p, v, t];
		case 3:
			return [p, q, v];
		case 4:
			return [t, p, v];
		case 5:
			return [v, p, q];
	}
};

convert.hsv.hsl = function (hsv) {
	const h = hsv[0];
	const s = hsv[1] / 100;
	const v = hsv[2] / 100;
	const vmin = Math.max(v, 0.01);
	let sl;
	let l;

	l = (2 - s) * v;
	const lmin = (2 - s) * vmin;
	sl = s * vmin;
	sl /= (lmin <= 1) ? lmin : 2 - lmin;
	sl = sl || 0;
	l /= 2;

	return [h, sl * 100, l * 100];
};

// http://dev.w3.org/csswg/css-color/#hwb-to-rgb
convert.hwb.rgb = function (hwb) {
	const h = hwb[0] / 360;
	let wh = hwb[1] / 100;
	let bl = hwb[2] / 100;
	const ratio = wh + bl;
	let f;

	// Wh + bl cant be > 1
	if (ratio > 1) {
		wh /= ratio;
		bl /= ratio;
	}

	const i = Math.floor(6 * h);
	const v = 1 - bl;
	f = 6 * h - i;

	if ((i & 0x01) !== 0) {
		f = 1 - f;
	}

	const n = wh + f * (v - wh); // Linear interpolation

	let r;
	let g;
	let b;
	/* eslint-disable max-statements-per-line,no-multi-spaces */
	switch (i) {
		default:
		case 6:
		case 0: r = v;  g = n;  b = wh; break;
		case 1: r = n;  g = v;  b = wh; break;
		case 2: r = wh; g = v;  b = n; break;
		case 3: r = wh; g = n;  b = v; break;
		case 4: r = n;  g = wh; b = v; break;
		case 5: r = v;  g = wh; b = n; break;
	}
	/* eslint-enable max-statements-per-line,no-multi-spaces */

	return [r * 255, g * 255, b * 255];
};

convert.cmyk.rgb = function (cmyk) {
	const c = cmyk[0] / 100;
	const m = cmyk[1] / 100;
	const y = cmyk[2] / 100;
	const k = cmyk[3] / 100;

	const r = 1 - Math.min(1, c * (1 - k) + k);
	const g = 1 - Math.min(1, m * (1 - k) + k);
	const b = 1 - Math.min(1, y * (1 - k) + k);

	return [r * 255, g * 255, b * 255];
};

convert.xyz.rgb = function (xyz) {
	const x = xyz[0] / 100;
	const y = xyz[1] / 100;
	const z = xyz[2] / 100;
	let r;
	let g;
	let b;

	r = (x * 3.2406) + (y * -1.5372) + (z * -0.4986);
	g = (x * -0.9689) + (y * 1.8758) + (z * 0.0415);
	b = (x * 0.0557) + (y * -0.2040) + (z * 1.0570);

	// Assume sRGB
	r = r > 0.0031308
		? ((1.055 * (r ** (1.0 / 2.4))) - 0.055)
		: r * 12.92;

	g = g > 0.0031308
		? ((1.055 * (g ** (1.0 / 2.4))) - 0.055)
		: g * 12.92;

	b = b > 0.0031308
		? ((1.055 * (b ** (1.0 / 2.4))) - 0.055)
		: b * 12.92;

	r = Math.min(Math.max(0, r), 1);
	g = Math.min(Math.max(0, g), 1);
	b = Math.min(Math.max(0, b), 1);

	return [r * 255, g * 255, b * 255];
};

convert.xyz.lab = function (xyz) {
	let x = xyz[0];
	let y = xyz[1];
	let z = xyz[2];

	x /= 95.047;
	y /= 100;
	z /= 108.883;

	x = x > 0.008856 ? (x ** (1 / 3)) : (7.787 * x) + (16 / 116);
	y = y > 0.008856 ? (y ** (1 / 3)) : (7.787 * y) + (16 / 116);
	z = z > 0.008856 ? (z ** (1 / 3)) : (7.787 * z) + (16 / 116);

	const l = (116 * y) - 16;
	const a = 500 * (x - y);
	const b = 200 * (y - z);

	return [l, a, b];
};

convert.lab.xyz = function (lab) {
	const l = lab[0];
	const a = lab[1];
	const b = lab[2];
	let x;
	let y;
	let z;

	y = (l + 16) / 116;
	x = a / 500 + y;
	z = y - b / 200;

	const y2 = y ** 3;
	const x2 = x ** 3;
	const z2 = z ** 3;
	y = y2 > 0.008856 ? y2 : (y - 16 / 116) / 7.787;
	x = x2 > 0.008856 ? x2 : (x - 16 / 116) / 7.787;
	z = z2 > 0.008856 ? z2 : (z - 16 / 116) / 7.787;

	x *= 95.047;
	y *= 100;
	z *= 108.883;

	return [x, y, z];
};

convert.lab.lch = function (lab) {
	const l = lab[0];
	const a = lab[1];
	const b = lab[2];
	let h;

	const hr = Math.atan2(b, a);
	h = hr * 360 / 2 / Math.PI;

	if (h < 0) {
		h += 360;
	}

	const c = Math.sqrt(a * a + b * b);

	return [l, c, h];
};

convert.lch.lab = function (lch) {
	const l = lch[0];
	const c = lch[1];
	const h = lch[2];

	const hr = h / 360 * 2 * Math.PI;
	const a = c * Math.cos(hr);
	const b = c * Math.sin(hr);

	return [l, a, b];
};

convert.rgb.ansi16 = function (args, saturation = null) {
	const [r, g, b] = args;
	let value = saturation === null ? convert.rgb.hsv(args)[2] : saturation; // Hsv -> ansi16 optimization

	value = Math.round(value / 50);

	if (value === 0) {
		return 30;
	}

	let ansi = 30
		+ ((Math.round(b / 255) << 2)
		| (Math.round(g / 255) << 1)
		| Math.round(r / 255));

	if (value === 2) {
		ansi += 60;
	}

	return ansi;
};

convert.hsv.ansi16 = function (args) {
	// Optimization here; we already know the value and don't need to get
	// it converted for us.
	return convert.rgb.ansi16(convert.hsv.rgb(args), args[2]);
};

convert.rgb.ansi256 = function (args) {
	const r = args[0];
	const g = args[1];
	const b = args[2];

	// We use the extended greyscale palette here, with the exception of
	// black and white. normal palette only has 4 greyscale shades.
	if (r === g && g === b) {
		if (r < 8) {
			return 16;
		}

		if (r > 248) {
			return 231;
		}

		return Math.round(((r - 8) / 247) * 24) + 232;
	}

	const ansi = 16
		+ (36 * Math.round(r / 255 * 5))
		+ (6 * Math.round(g / 255 * 5))
		+ Math.round(b / 255 * 5);

	return ansi;
};

convert.ansi16.rgb = function (args) {
	let color = args % 10;

	// Handle greyscale
	if (color === 0 || color === 7) {
		if (args > 50) {
			color += 3.5;
		}

		color = color / 10.5 * 255;

		return [color, color, color];
	}

	const mult = (~~(args > 50) + 1) * 0.5;
	const r = ((color & 1) * mult) * 255;
	const g = (((color >> 1) & 1) * mult) * 255;
	const b = (((color >> 2) & 1) * mult) * 255;

	return [r, g, b];
};

convert.ansi256.rgb = function (args) {
	// Handle greyscale
	if (args >= 232) {
		const c = (args - 232) * 10 + 8;
		return [c, c, c];
	}

	args -= 16;

	let rem;
	const r = Math.floor(args / 36) / 5 * 255;
	const g = Math.floor((rem = args % 36) / 6) / 5 * 255;
	const b = (rem % 6) / 5 * 255;

	return [r, g, b];
};

convert.rgb.hex = function (args) {
	const integer = ((Math.round(args[0]) & 0xFF) << 16)
		+ ((Math.round(args[1]) & 0xFF) << 8)
		+ (Math.round(args[2]) & 0xFF);

	const string = integer.toString(16).toUpperCase();
	return '000000'.substring(string.length) + string;
};

convert.hex.rgb = function (args) {
	const match = args.toString(16).match(/[a-f0-9]{6}|[a-f0-9]{3}/i);
	if (!match) {
		return [0, 0, 0];
	}

	let colorString = match[0];

	if (match[0].length === 3) {
		colorString = colorString.split('').map(char => {
			return char + char;
		}).join('');
	}

	const integer = parseInt(colorString, 16);
	const r = (integer >> 16) & 0xFF;
	const g = (integer >> 8) & 0xFF;
	const b = integer & 0xFF;

	return [r, g, b];
};

convert.rgb.hcg = function (rgb) {
	const r = rgb[0] / 255;
	const g = rgb[1] / 255;
	const b = rgb[2] / 255;
	const max = Math.max(Math.max(r, g), b);
	const min = Math.min(Math.min(r, g), b);
	const chroma = (max - min);
	let grayscale;
	let hue;

	if (chroma < 1) {
		grayscale = min / (1 - chroma);
	} else {
		grayscale = 0;
	}

	if (chroma <= 0) {
		hue = 0;
	} else
	if (max === r) {
		hue = ((g - b) / chroma) % 6;
	} else
	if (max === g) {
		hue = 2 + (b - r) / chroma;
	} else {
		hue = 4 + (r - g) / chroma;
	}

	hue /= 6;
	hue %= 1;

	return [hue * 360, chroma * 100, grayscale * 100];
};

convert.hsl.hcg = function (hsl) {
	const s = hsl[1] / 100;
	const l = hsl[2] / 100;

	const c = l < 0.5 ? (2.0 * s * l) : (2.0 * s * (1.0 - l));

	let f = 0;
	if (c < 1.0) {
		f = (l - 0.5 * c) / (1.0 - c);
	}

	return [hsl[0], c * 100, f * 100];
};

convert.hsv.hcg = function (hsv) {
	const s = hsv[1] / 100;
	const v = hsv[2] / 100;

	const c = s * v;
	let f = 0;

	if (c < 1.0) {
		f = (v - c) / (1 - c);
	}

	return [hsv[0], c * 100, f * 100];
};

convert.hcg.rgb = function (hcg) {
	const h = hcg[0] / 360;
	const c = hcg[1] / 100;
	const g = hcg[2] / 100;

	if (c === 0.0) {
		return [g * 255, g * 255, g * 255];
	}

	const pure = [0, 0, 0];
	const hi = (h % 1) * 6;
	const v = hi % 1;
	const w = 1 - v;
	let mg = 0;

	/* eslint-disable max-statements-per-line */
	switch (Math.floor(hi)) {
		case 0:
			pure[0] = 1; pure[1] = v; pure[2] = 0; break;
		case 1:
			pure[0] = w; pure[1] = 1; pure[2] = 0; break;
		case 2:
			pure[0] = 0; pure[1] = 1; pure[2] = v; break;
		case 3:
			pure[0] = 0; pure[1] = w; pure[2] = 1; break;
		case 4:
			pure[0] = v; pure[1] = 0; pure[2] = 1; break;
		default:
			pure[0] = 1; pure[1] = 0; pure[2] = w;
	}
	/* eslint-enable max-statements-per-line */

	mg = (1.0 - c) * g;

	return [
		(c * pure[0] + mg) * 255,
		(c * pure[1] + mg) * 255,
		(c * pure[2] + mg) * 255
	];
};

convert.hcg.hsv = function (hcg) {
	const c = hcg[1] / 100;
	const g = hcg[2] / 100;

	const v = c + g * (1.0 - c);
	let f = 0;

	if (v > 0.0) {
		f = c / v;
	}

	return [hcg[0], f * 100, v * 100];
};

convert.hcg.hsl = function (hcg) {
	const c = hcg[1] / 100;
	const g = hcg[2] / 100;

	const l = g * (1.0 - c) + 0.5 * c;
	let s = 0;

	if (l > 0.0 && l < 0.5) {
		s = c / (2 * l);
	} else
	if (l >= 0.5 && l < 1.0) {
		s = c / (2 * (1 - l));
	}

	return [hcg[0], s * 100, l * 100];
};

convert.hcg.hwb = function (hcg) {
	const c = hcg[1] / 100;
	const g = hcg[2] / 100;
	const v = c + g * (1.0 - c);
	return [hcg[0], (v - c) * 100, (1 - v) * 100];
};

convert.hwb.hcg = function (hwb) {
	const w = hwb[1] / 100;
	const b = hwb[2] / 100;
	const v = 1 - b;
	const c = v - w;
	let g = 0;

	if (c < 1) {
		g = (v - c) / (1 - c);
	}

	return [hwb[0], c * 100, g * 100];
};

convert.apple.rgb = function (apple) {
	return [(apple[0] / 65535) * 255, (apple[1] / 65535) * 255, (apple[2] / 65535) * 255];
};

convert.rgb.apple = function (rgb) {
	return [(rgb[0] / 255) * 65535, (rgb[1] / 255) * 65535, (rgb[2] / 255) * 65535];
};

convert.gray.rgb = function (args) {
	return [args[0] / 100 * 255, args[0] / 100 * 255, args[0] / 100 * 255];
};

convert.gray.hsl = function (args) {
	return [0, 0, args[0]];
};

convert.gray.hsv = convert.gray.hsl;

convert.gray.hwb = function (gray) {
	return [0, 100, gray[0]];
};

convert.gray.cmyk = function (gray) {
	return [0, 0, 0, gray[0]];
};

convert.gray.lab = function (gray) {
	return [gray[0], 0, 0];
};

convert.gray.hex = function (gray) {
	const val = Math.round(gray[0] / 100 * 255) & 0xFF;
	const integer = (val << 16) + (val << 8) + val;

	const string = integer.toString(16).toUpperCase();
	return '000000'.substring(string.length) + string;
};

convert.rgb.gray = function (rgb) {
	const val = (rgb[0] + rgb[1] + rgb[2]) / 3;
	return [val / 255 * 100];
};


/***/ }),

/***/ "./node_modules/color/node_modules/color-convert/index.js":
/*!****************************************************************!*\
  !*** ./node_modules/color/node_modules/color-convert/index.js ***!
  \****************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

const conversions = __webpack_require__(/*! ./conversions */ "./node_modules/color/node_modules/color-convert/conversions.js");
const route = __webpack_require__(/*! ./route */ "./node_modules/color/node_modules/color-convert/route.js");

const convert = {};

const models = Object.keys(conversions);

function wrapRaw(fn) {
	const wrappedFn = function (...args) {
		const arg0 = args[0];
		if (arg0 === undefined || arg0 === null) {
			return arg0;
		}

		if (arg0.length > 1) {
			args = arg0;
		}

		return fn(args);
	};

	// Preserve .conversion property if there is one
	if ('conversion' in fn) {
		wrappedFn.conversion = fn.conversion;
	}

	return wrappedFn;
}

function wrapRounded(fn) {
	const wrappedFn = function (...args) {
		const arg0 = args[0];

		if (arg0 === undefined || arg0 === null) {
			return arg0;
		}

		if (arg0.length > 1) {
			args = arg0;
		}

		const result = fn(args);

		// We're assuming the result is an array here.
		// see notice in conversions.js; don't use box types
		// in conversion functions.
		if (typeof result === 'object') {
			for (let len = result.length, i = 0; i < len; i++) {
				result[i] = Math.round(result[i]);
			}
		}

		return result;
	};

	// Preserve .conversion property if there is one
	if ('conversion' in fn) {
		wrappedFn.conversion = fn.conversion;
	}

	return wrappedFn;
}

models.forEach(fromModel => {
	convert[fromModel] = {};

	Object.defineProperty(convert[fromModel], 'channels', {value: conversions[fromModel].channels});
	Object.defineProperty(convert[fromModel], 'labels', {value: conversions[fromModel].labels});

	const routes = route(fromModel);
	const routeModels = Object.keys(routes);

	routeModels.forEach(toModel => {
		const fn = routes[toModel];

		convert[fromModel][toModel] = wrapRounded(fn);
		convert[fromModel][toModel].raw = wrapRaw(fn);
	});
});

module.exports = convert;


/***/ }),

/***/ "./node_modules/color/node_modules/color-convert/route.js":
/*!****************************************************************!*\
  !*** ./node_modules/color/node_modules/color-convert/route.js ***!
  \****************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

const conversions = __webpack_require__(/*! ./conversions */ "./node_modules/color/node_modules/color-convert/conversions.js");

/*
	This function routes a model to all other models.

	all functions that are routed have a property `.conversion` attached
	to the returned synthetic function. This property is an array
	of strings, each with the steps in between the 'from' and 'to'
	color models (inclusive).

	conversions that are not possible simply are not included.
*/

function buildGraph() {
	const graph = {};
	// https://jsperf.com/object-keys-vs-for-in-with-closure/3
	const models = Object.keys(conversions);

	for (let len = models.length, i = 0; i < len; i++) {
		graph[models[i]] = {
			// http://jsperf.com/1-vs-infinity
			// micro-opt, but this is simple.
			distance: -1,
			parent: null
		};
	}

	return graph;
}

// https://en.wikipedia.org/wiki/Breadth-first_search
function deriveBFS(fromModel) {
	const graph = buildGraph();
	const queue = [fromModel]; // Unshift -> queue -> pop

	graph[fromModel].distance = 0;

	while (queue.length) {
		const current = queue.pop();
		const adjacents = Object.keys(conversions[current]);

		for (let len = adjacents.length, i = 0; i < len; i++) {
			const adjacent = adjacents[i];
			const node = graph[adjacent];

			if (node.distance === -1) {
				node.distance = graph[current].distance + 1;
				node.parent = current;
				queue.unshift(adjacent);
			}
		}
	}

	return graph;
}

function link(from, to) {
	return function (args) {
		return to(from(args));
	};
}

function wrapConversion(toModel, graph) {
	const path = [graph[toModel].parent, toModel];
	let fn = conversions[graph[toModel].parent][toModel];

	let cur = graph[toModel].parent;
	while (graph[cur].parent) {
		path.unshift(graph[cur].parent);
		fn = link(conversions[graph[cur].parent][cur], fn);
		cur = graph[cur].parent;
	}

	fn.conversion = path;
	return fn;
}

module.exports = function (fromModel) {
	const graph = deriveBFS(fromModel);
	const conversion = {};

	const models = Object.keys(graph);
	for (let len = models.length, i = 0; i < len; i++) {
		const toModel = models[i];
		const node = graph[toModel];

		if (node.parent === null) {
			// No possible conversion, or this node is the source model.
			continue;
		}

		conversion[toModel] = wrapConversion(toModel, graph);
	}

	return conversion;
};



/***/ }),

/***/ "./node_modules/color/node_modules/color-name/index.js":
/*!*************************************************************!*\
  !*** ./node_modules/color/node_modules/color-name/index.js ***!
  \*************************************************************/
/***/ (function(module) {

"use strict";


module.exports = {
	"aliceblue": [240, 248, 255],
	"antiquewhite": [250, 235, 215],
	"aqua": [0, 255, 255],
	"aquamarine": [127, 255, 212],
	"azure": [240, 255, 255],
	"beige": [245, 245, 220],
	"bisque": [255, 228, 196],
	"black": [0, 0, 0],
	"blanchedalmond": [255, 235, 205],
	"blue": [0, 0, 255],
	"blueviolet": [138, 43, 226],
	"brown": [165, 42, 42],
	"burlywood": [222, 184, 135],
	"cadetblue": [95, 158, 160],
	"chartreuse": [127, 255, 0],
	"chocolate": [210, 105, 30],
	"coral": [255, 127, 80],
	"cornflowerblue": [100, 149, 237],
	"cornsilk": [255, 248, 220],
	"crimson": [220, 20, 60],
	"cyan": [0, 255, 255],
	"darkblue": [0, 0, 139],
	"darkcyan": [0, 139, 139],
	"darkgoldenrod": [184, 134, 11],
	"darkgray": [169, 169, 169],
	"darkgreen": [0, 100, 0],
	"darkgrey": [169, 169, 169],
	"darkkhaki": [189, 183, 107],
	"darkmagenta": [139, 0, 139],
	"darkolivegreen": [85, 107, 47],
	"darkorange": [255, 140, 0],
	"darkorchid": [153, 50, 204],
	"darkred": [139, 0, 0],
	"darksalmon": [233, 150, 122],
	"darkseagreen": [143, 188, 143],
	"darkslateblue": [72, 61, 139],
	"darkslategray": [47, 79, 79],
	"darkslategrey": [47, 79, 79],
	"darkturquoise": [0, 206, 209],
	"darkviolet": [148, 0, 211],
	"deeppink": [255, 20, 147],
	"deepskyblue": [0, 191, 255],
	"dimgray": [105, 105, 105],
	"dimgrey": [105, 105, 105],
	"dodgerblue": [30, 144, 255],
	"firebrick": [178, 34, 34],
	"floralwhite": [255, 250, 240],
	"forestgreen": [34, 139, 34],
	"fuchsia": [255, 0, 255],
	"gainsboro": [220, 220, 220],
	"ghostwhite": [248, 248, 255],
	"gold": [255, 215, 0],
	"goldenrod": [218, 165, 32],
	"gray": [128, 128, 128],
	"green": [0, 128, 0],
	"greenyellow": [173, 255, 47],
	"grey": [128, 128, 128],
	"honeydew": [240, 255, 240],
	"hotpink": [255, 105, 180],
	"indianred": [205, 92, 92],
	"indigo": [75, 0, 130],
	"ivory": [255, 255, 240],
	"khaki": [240, 230, 140],
	"lavender": [230, 230, 250],
	"lavenderblush": [255, 240, 245],
	"lawngreen": [124, 252, 0],
	"lemonchiffon": [255, 250, 205],
	"lightblue": [173, 216, 230],
	"lightcoral": [240, 128, 128],
	"lightcyan": [224, 255, 255],
	"lightgoldenrodyellow": [250, 250, 210],
	"lightgray": [211, 211, 211],
	"lightgreen": [144, 238, 144],
	"lightgrey": [211, 211, 211],
	"lightpink": [255, 182, 193],
	"lightsalmon": [255, 160, 122],
	"lightseagreen": [32, 178, 170],
	"lightskyblue": [135, 206, 250],
	"lightslategray": [119, 136, 153],
	"lightslategrey": [119, 136, 153],
	"lightsteelblue": [176, 196, 222],
	"lightyellow": [255, 255, 224],
	"lime": [0, 255, 0],
	"limegreen": [50, 205, 50],
	"linen": [250, 240, 230],
	"magenta": [255, 0, 255],
	"maroon": [128, 0, 0],
	"mediumaquamarine": [102, 205, 170],
	"mediumblue": [0, 0, 205],
	"mediumorchid": [186, 85, 211],
	"mediumpurple": [147, 112, 219],
	"mediumseagreen": [60, 179, 113],
	"mediumslateblue": [123, 104, 238],
	"mediumspringgreen": [0, 250, 154],
	"mediumturquoise": [72, 209, 204],
	"mediumvioletred": [199, 21, 133],
	"midnightblue": [25, 25, 112],
	"mintcream": [245, 255, 250],
	"mistyrose": [255, 228, 225],
	"moccasin": [255, 228, 181],
	"navajowhite": [255, 222, 173],
	"navy": [0, 0, 128],
	"oldlace": [253, 245, 230],
	"olive": [128, 128, 0],
	"olivedrab": [107, 142, 35],
	"orange": [255, 165, 0],
	"orangered": [255, 69, 0],
	"orchid": [218, 112, 214],
	"palegoldenrod": [238, 232, 170],
	"palegreen": [152, 251, 152],
	"paleturquoise": [175, 238, 238],
	"palevioletred": [219, 112, 147],
	"papayawhip": [255, 239, 213],
	"peachpuff": [255, 218, 185],
	"peru": [205, 133, 63],
	"pink": [255, 192, 203],
	"plum": [221, 160, 221],
	"powderblue": [176, 224, 230],
	"purple": [128, 0, 128],
	"rebeccapurple": [102, 51, 153],
	"red": [255, 0, 0],
	"rosybrown": [188, 143, 143],
	"royalblue": [65, 105, 225],
	"saddlebrown": [139, 69, 19],
	"salmon": [250, 128, 114],
	"sandybrown": [244, 164, 96],
	"seagreen": [46, 139, 87],
	"seashell": [255, 245, 238],
	"sienna": [160, 82, 45],
	"silver": [192, 192, 192],
	"skyblue": [135, 206, 235],
	"slateblue": [106, 90, 205],
	"slategray": [112, 128, 144],
	"slategrey": [112, 128, 144],
	"snow": [255, 250, 250],
	"springgreen": [0, 255, 127],
	"steelblue": [70, 130, 180],
	"tan": [210, 180, 140],
	"teal": [0, 128, 128],
	"thistle": [216, 191, 216],
	"tomato": [255, 99, 71],
	"turquoise": [64, 224, 208],
	"violet": [238, 130, 238],
	"wheat": [245, 222, 179],
	"white": [255, 255, 255],
	"whitesmoke": [245, 245, 245],
	"yellow": [255, 255, 0],
	"yellowgreen": [154, 205, 50]
};


/***/ }),

/***/ "./node_modules/css-in-js-utils/lib/hyphenateProperty.js":
/*!***************************************************************!*\
  !*** ./node_modules/css-in-js-utils/lib/hyphenateProperty.js ***!
  \***************************************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = hyphenateProperty;

var _hyphenateStyleName = __webpack_require__(/*! hyphenate-style-name */ "./node_modules/hyphenate-style-name/index.js");

var _hyphenateStyleName2 = _interopRequireDefault(_hyphenateStyleName);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function hyphenateProperty(property) {
  return (0, _hyphenateStyleName2.default)(property);
}
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/css-in-js-utils/lib/isPrefixedValue.js":
/*!*************************************************************!*\
  !*** ./node_modules/css-in-js-utils/lib/isPrefixedValue.js ***!
  \*************************************************************/
/***/ (function(module, exports) {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = isPrefixedValue;
var regex = /-webkit-|-moz-|-ms-/;

function isPrefixedValue(value) {
  return typeof value === 'string' && regex.test(value);
}
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/exenv/index.js":
/*!*************************************!*\
  !*** ./node_modules/exenv/index.js ***!
  \*************************************/
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;/*!
  Copyright (c) 2015 Jed Watson.
  Based on code that is Copyright 2013-2015, Facebook, Inc.
  All rights reserved.
*/
/* global define */

(function () {
	'use strict';

	var canUseDOM = !!(
		typeof window !== 'undefined' &&
		window.document &&
		window.document.createElement
	);

	var ExecutionEnvironment = {

		canUseDOM: canUseDOM,

		canUseWorkers: typeof Worker !== 'undefined',

		canUseEventListeners:
			canUseDOM && !!(window.addEventListener || window.attachEvent),

		canUseViewport: canUseDOM && !!window.screen

	};

	if (true) {
		!(__WEBPACK_AMD_DEFINE_RESULT__ = (function () {
			return ExecutionEnvironment;
		}).call(exports, __webpack_require__, exports, module),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else {}

}());


/***/ }),

/***/ "./node_modules/hyphenate-style-name/index.js":
/*!****************************************************!*\
  !*** ./node_modules/hyphenate-style-name/index.js ***!
  \****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* eslint-disable no-var, prefer-template */
var uppercasePattern = /[A-Z]/g
var msPattern = /^ms-/
var cache = {}

function toHyphenLower(match) {
  return '-' + match.toLowerCase()
}

function hyphenateStyleName(name) {
  if (cache.hasOwnProperty(name)) {
    return cache[name]
  }

  var hName = name.replace(uppercasePattern, toHyphenLower)
  return (cache[name] = msPattern.test(hName) ? '-' + hName : hName)
}

/* harmony default export */ __webpack_exports__["default"] = (hyphenateStyleName);


/***/ }),

/***/ "./node_modules/inline-style-prefixer/dynamic/createPrefixer.js":
/*!**********************************************************************!*\
  !*** ./node_modules/inline-style-prefixer/dynamic/createPrefixer.js ***!
  \**********************************************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

exports["default"] = createPrefixer;

var _getBrowserInformation = __webpack_require__(/*! ../utils/getBrowserInformation */ "./node_modules/inline-style-prefixer/utils/getBrowserInformation.js");

var _getBrowserInformation2 = _interopRequireDefault(_getBrowserInformation);

var _getPrefixedKeyframes = __webpack_require__(/*! ../utils/getPrefixedKeyframes */ "./node_modules/inline-style-prefixer/utils/getPrefixedKeyframes.js");

var _getPrefixedKeyframes2 = _interopRequireDefault(_getPrefixedKeyframes);

var _capitalizeString = __webpack_require__(/*! ../utils/capitalizeString */ "./node_modules/inline-style-prefixer/utils/capitalizeString.js");

var _capitalizeString2 = _interopRequireDefault(_capitalizeString);

var _addNewValuesOnly = __webpack_require__(/*! ../utils/addNewValuesOnly */ "./node_modules/inline-style-prefixer/utils/addNewValuesOnly.js");

var _addNewValuesOnly2 = _interopRequireDefault(_addNewValuesOnly);

var _isObject = __webpack_require__(/*! ../utils/isObject */ "./node_modules/inline-style-prefixer/utils/isObject.js");

var _isObject2 = _interopRequireDefault(_isObject);

var _prefixValue = __webpack_require__(/*! ../utils/prefixValue */ "./node_modules/inline-style-prefixer/utils/prefixValue.js");

var _prefixValue2 = _interopRequireDefault(_prefixValue);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function createPrefixer(_ref) {
  var prefixMap = _ref.prefixMap,
      plugins = _ref.plugins;
  var fallback = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : function (style) {
    return style;
  };

  return function () {
    /**
     * Instantiante a new prefixer
     * @param {string} userAgent - userAgent to gather prefix information according to caniuse.com
     * @param {string} keepUnprefixed - keeps unprefixed properties and values
     */
    function Prefixer() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      _classCallCheck(this, Prefixer);

      var defaultUserAgent = typeof navigator !== 'undefined' ? navigator.userAgent : undefined;

      this._userAgent = options.userAgent || defaultUserAgent;
      this._keepUnprefixed = options.keepUnprefixed || false;

      if (this._userAgent) {
        this._browserInfo = (0, _getBrowserInformation2.default)(this._userAgent);
      }

      // Checks if the userAgent was resolved correctly
      if (this._browserInfo && this._browserInfo.cssPrefix) {
        this.prefixedKeyframes = (0, _getPrefixedKeyframes2.default)(this._browserInfo.browserName, this._browserInfo.browserVersion, this._browserInfo.cssPrefix);
      } else {
        this._useFallback = true;
        return false;
      }

      var prefixData = this._browserInfo.browserName && prefixMap[this._browserInfo.browserName];
      if (prefixData) {
        this._requiresPrefix = {};

        for (var property in prefixData) {
          if (prefixData[property] >= this._browserInfo.browserVersion) {
            this._requiresPrefix[property] = true;
          }
        }

        this._hasPropsRequiringPrefix = Object.keys(this._requiresPrefix).length > 0;
      } else {
        this._useFallback = true;
      }

      this._metaData = {
        browserVersion: this._browserInfo.browserVersion,
        browserName: this._browserInfo.browserName,
        cssPrefix: this._browserInfo.cssPrefix,
        jsPrefix: this._browserInfo.jsPrefix,
        keepUnprefixed: this._keepUnprefixed,
        requiresPrefix: this._requiresPrefix
      };
    }

    _createClass(Prefixer, [{
      key: 'prefix',
      value: function prefix(style) {
        // use static prefixer as fallback if userAgent can not be resolved
        if (this._useFallback) {
          return fallback(style);
        }

        // only add prefixes if needed
        if (!this._hasPropsRequiringPrefix) {
          return style;
        }

        return this._prefixStyle(style);
      }
    }, {
      key: '_prefixStyle',
      value: function _prefixStyle(style) {
        for (var property in style) {
          var value = style[property];

          // handle nested objects
          if ((0, _isObject2.default)(value)) {
            style[property] = this.prefix(value);
            // handle array values
          } else if (Array.isArray(value)) {
            var combinedValue = [];

            for (var i = 0, len = value.length; i < len; ++i) {
              var processedValue = (0, _prefixValue2.default)(plugins, property, value[i], style, this._metaData);
              (0, _addNewValuesOnly2.default)(combinedValue, processedValue || value[i]);
            }

            // only modify the value if it was touched
            // by any plugin to prevent unnecessary mutations
            if (combinedValue.length > 0) {
              style[property] = combinedValue;
            }
          } else {
            var _processedValue = (0, _prefixValue2.default)(plugins, property, value, style, this._metaData);

            // only modify the value if it was touched
            // by any plugin to prevent unnecessary mutations
            if (_processedValue) {
              style[property] = _processedValue;
            }

            // add prefixes to properties
            if (this._requiresPrefix.hasOwnProperty(property)) {
              style[this._browserInfo.jsPrefix + (0, _capitalizeString2.default)(property)] = value;
              if (!this._keepUnprefixed) {
                delete style[property];
              }
            }
          }
        }

        return style;
      }

      /**
       * Returns a prefixed version of the style object using all vendor prefixes
       * @param {Object} styles - Style object that gets prefixed properties added
       * @returns {Object} - Style object with prefixed properties and values
       */

    }], [{
      key: 'prefixAll',
      value: function prefixAll(styles) {
        return fallback(styles);
      }
    }]);

    return Prefixer;
  }();
}
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/inline-style-prefixer/dynamic/plugins/calc.js":
/*!********************************************************************!*\
  !*** ./node_modules/inline-style-prefixer/dynamic/plugins/calc.js ***!
  \********************************************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = calc;

var _getPrefixedValue = __webpack_require__(/*! ../../utils/getPrefixedValue */ "./node_modules/inline-style-prefixer/utils/getPrefixedValue.js");

var _getPrefixedValue2 = _interopRequireDefault(_getPrefixedValue);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function calc(property, value, style, _ref) {
  var browserName = _ref.browserName,
      browserVersion = _ref.browserVersion,
      cssPrefix = _ref.cssPrefix,
      keepUnprefixed = _ref.keepUnprefixed;

  if (typeof value === 'string' && value.indexOf('calc(') > -1 && (browserName === 'firefox' && browserVersion < 15 || browserName === 'chrome' && browserVersion < 25 || browserName === 'safari' && browserVersion < 6.1 || browserName === 'ios_saf' && browserVersion < 7)) {
    return (0, _getPrefixedValue2.default)(value.replace(/calc\(/g, cssPrefix + 'calc('), value, keepUnprefixed);
  }
}
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/inline-style-prefixer/dynamic/plugins/crossFade.js":
/*!*************************************************************************!*\
  !*** ./node_modules/inline-style-prefixer/dynamic/plugins/crossFade.js ***!
  \*************************************************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = crossFade;

var _getPrefixedValue = __webpack_require__(/*! ../../utils/getPrefixedValue */ "./node_modules/inline-style-prefixer/utils/getPrefixedValue.js");

var _getPrefixedValue2 = _interopRequireDefault(_getPrefixedValue);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function crossFade(property, value, style, _ref) {
  var browserName = _ref.browserName,
      browserVersion = _ref.browserVersion,
      cssPrefix = _ref.cssPrefix,
      keepUnprefixed = _ref.keepUnprefixed;

  if (typeof value === 'string' && value.indexOf('cross-fade(') > -1 && (browserName === 'chrome' || browserName === 'opera' || browserName === 'and_chr' || (browserName === 'ios_saf' || browserName === 'safari') && browserVersion < 10)) {
    return (0, _getPrefixedValue2.default)(value.replace(/cross-fade\(/g, cssPrefix + 'cross-fade('), value, keepUnprefixed);
  }
}
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/inline-style-prefixer/dynamic/plugins/cursor.js":
/*!**********************************************************************!*\
  !*** ./node_modules/inline-style-prefixer/dynamic/plugins/cursor.js ***!
  \**********************************************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = cursor;

var _getPrefixedValue = __webpack_require__(/*! ../../utils/getPrefixedValue */ "./node_modules/inline-style-prefixer/utils/getPrefixedValue.js");

var _getPrefixedValue2 = _interopRequireDefault(_getPrefixedValue);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var grabValues = {
  grab: true,
  grabbing: true
};


var zoomValues = {
  'zoom-in': true,
  'zoom-out': true
};

function cursor(property, value, style, _ref) {
  var browserName = _ref.browserName,
      browserVersion = _ref.browserVersion,
      cssPrefix = _ref.cssPrefix,
      keepUnprefixed = _ref.keepUnprefixed;

  // adds prefixes for firefox, chrome, safari, and opera regardless of
  // version until a reliable browser support info can be found
  // see: https://github.com/rofrischmann/inline-style-prefixer/issues/79
  if (property === 'cursor' && grabValues[value] && (browserName === 'firefox' || browserName === 'chrome' || browserName === 'safari' || browserName === 'opera')) {
    return (0, _getPrefixedValue2.default)(cssPrefix + value, value, keepUnprefixed);
  }

  if (property === 'cursor' && zoomValues[value] && (browserName === 'firefox' && browserVersion < 24 || browserName === 'chrome' && browserVersion < 37 || browserName === 'safari' && browserVersion < 9 || browserName === 'opera' && browserVersion < 24)) {
    return (0, _getPrefixedValue2.default)(cssPrefix + value, value, keepUnprefixed);
  }
}
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/inline-style-prefixer/dynamic/plugins/filter.js":
/*!**********************************************************************!*\
  !*** ./node_modules/inline-style-prefixer/dynamic/plugins/filter.js ***!
  \**********************************************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = filter;

var _getPrefixedValue = __webpack_require__(/*! ../../utils/getPrefixedValue */ "./node_modules/inline-style-prefixer/utils/getPrefixedValue.js");

var _getPrefixedValue2 = _interopRequireDefault(_getPrefixedValue);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function filter(property, value, style, _ref) {
  var browserName = _ref.browserName,
      browserVersion = _ref.browserVersion,
      cssPrefix = _ref.cssPrefix,
      keepUnprefixed = _ref.keepUnprefixed;

  if (typeof value === 'string' && value.indexOf('filter(') > -1 && (browserName === 'ios_saf' || browserName === 'safari' && browserVersion < 9.1)) {
    return (0, _getPrefixedValue2.default)(value.replace(/filter\(/g, cssPrefix + 'filter('), value, keepUnprefixed);
  }
}
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/inline-style-prefixer/dynamic/plugins/flex.js":
/*!********************************************************************!*\
  !*** ./node_modules/inline-style-prefixer/dynamic/plugins/flex.js ***!
  \********************************************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = flex;

var _getPrefixedValue = __webpack_require__(/*! ../../utils/getPrefixedValue */ "./node_modules/inline-style-prefixer/utils/getPrefixedValue.js");

var _getPrefixedValue2 = _interopRequireDefault(_getPrefixedValue);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var values = {
  flex: true,
  'inline-flex': true
};
function flex(property, value, style, _ref) {
  var browserName = _ref.browserName,
      browserVersion = _ref.browserVersion,
      cssPrefix = _ref.cssPrefix,
      keepUnprefixed = _ref.keepUnprefixed;

  if (property === 'display' && values[value] && (browserName === 'chrome' && browserVersion < 29 && browserVersion > 20 || (browserName === 'safari' || browserName === 'ios_saf') && browserVersion < 9 && browserVersion > 6 || browserName === 'opera' && (browserVersion === 15 || browserVersion === 16))) {
    return (0, _getPrefixedValue2.default)(cssPrefix + value, value, keepUnprefixed);
  }
}
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/inline-style-prefixer/dynamic/plugins/flexboxIE.js":
/*!*************************************************************************!*\
  !*** ./node_modules/inline-style-prefixer/dynamic/plugins/flexboxIE.js ***!
  \*************************************************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = flexboxIE;

var _getPrefixedValue = __webpack_require__(/*! ../../utils/getPrefixedValue */ "./node_modules/inline-style-prefixer/utils/getPrefixedValue.js");

var _getPrefixedValue2 = _interopRequireDefault(_getPrefixedValue);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var alternativeValues = {
  'space-around': 'distribute',
  'space-between': 'justify',
  'flex-start': 'start',
  'flex-end': 'end',
  flex: 'flexbox',
  'inline-flex': 'inline-flexbox'
};

var alternativeProps = {
  alignContent: 'msFlexLinePack',
  alignSelf: 'msFlexItemAlign',
  alignItems: 'msFlexAlign',
  justifyContent: 'msFlexPack',
  order: 'msFlexOrder',
  flexGrow: 'msFlexPositive',
  flexShrink: 'msFlexNegative',
  flexBasis: 'msFlexPreferredSize'
};

function flexboxIE(property, value, style, _ref) {
  var browserName = _ref.browserName,
      browserVersion = _ref.browserVersion,
      cssPrefix = _ref.cssPrefix,
      keepUnprefixed = _ref.keepUnprefixed,
      requiresPrefix = _ref.requiresPrefix;

  if ((alternativeProps.hasOwnProperty(property) || property === 'display' && typeof value === 'string' && value.indexOf('flex') > -1) && (browserName === 'ie_mob' || browserName === 'ie') && browserVersion === 10) {
    delete requiresPrefix[property];

    if (!keepUnprefixed && !Array.isArray(style[property])) {
      delete style[property];
    }
    if (property === 'display' && alternativeValues.hasOwnProperty(value)) {
      return (0, _getPrefixedValue2.default)(cssPrefix + alternativeValues[value], value, keepUnprefixed);
    }
    if (alternativeProps.hasOwnProperty(property)) {
      style[alternativeProps[property]] = alternativeValues[value] || value;
    }
  }
}
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/inline-style-prefixer/dynamic/plugins/flexboxOld.js":
/*!**************************************************************************!*\
  !*** ./node_modules/inline-style-prefixer/dynamic/plugins/flexboxOld.js ***!
  \**************************************************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = flexboxOld;

var _getPrefixedValue = __webpack_require__(/*! ../../utils/getPrefixedValue */ "./node_modules/inline-style-prefixer/utils/getPrefixedValue.js");

var _getPrefixedValue2 = _interopRequireDefault(_getPrefixedValue);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var alternativeValues = {
  'space-around': 'justify',
  'space-between': 'justify',
  'flex-start': 'start',
  'flex-end': 'end',
  'wrap-reverse': 'multiple',
  wrap: 'multiple',
  flex: 'box',
  'inline-flex': 'inline-box'
};


var alternativeProps = {
  alignItems: 'WebkitBoxAlign',
  justifyContent: 'WebkitBoxPack',
  flexWrap: 'WebkitBoxLines',
  flexGrow: 'WebkitBoxFlex'
};

var otherProps = ['alignContent', 'alignSelf', 'order', 'flexGrow', 'flexShrink', 'flexBasis', 'flexDirection'];
var properties = Object.keys(alternativeProps).concat(otherProps);

function flexboxOld(property, value, style, _ref) {
  var browserName = _ref.browserName,
      browserVersion = _ref.browserVersion,
      cssPrefix = _ref.cssPrefix,
      keepUnprefixed = _ref.keepUnprefixed,
      requiresPrefix = _ref.requiresPrefix;

  if ((properties.indexOf(property) > -1 || property === 'display' && typeof value === 'string' && value.indexOf('flex') > -1) && (browserName === 'firefox' && browserVersion < 22 || browserName === 'chrome' && browserVersion < 21 || (browserName === 'safari' || browserName === 'ios_saf') && browserVersion <= 6.1 || browserName === 'android' && browserVersion < 4.4 || browserName === 'and_uc')) {
    delete requiresPrefix[property];

    if (!keepUnprefixed && !Array.isArray(style[property])) {
      delete style[property];
    }
    if (property === 'flexDirection' && typeof value === 'string') {
      if (value.indexOf('column') > -1) {
        style.WebkitBoxOrient = 'vertical';
      } else {
        style.WebkitBoxOrient = 'horizontal';
      }
      if (value.indexOf('reverse') > -1) {
        style.WebkitBoxDirection = 'reverse';
      } else {
        style.WebkitBoxDirection = 'normal';
      }
    }
    if (property === 'display' && alternativeValues.hasOwnProperty(value)) {
      return (0, _getPrefixedValue2.default)(cssPrefix + alternativeValues[value], value, keepUnprefixed);
    }
    if (alternativeProps.hasOwnProperty(property)) {
      style[alternativeProps[property]] = alternativeValues[value] || value;
    }
  }
}
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/inline-style-prefixer/dynamic/plugins/gradient.js":
/*!************************************************************************!*\
  !*** ./node_modules/inline-style-prefixer/dynamic/plugins/gradient.js ***!
  \************************************************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = gradient;

var _getPrefixedValue = __webpack_require__(/*! ../../utils/getPrefixedValue */ "./node_modules/inline-style-prefixer/utils/getPrefixedValue.js");

var _getPrefixedValue2 = _interopRequireDefault(_getPrefixedValue);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var values = /linear-gradient|radial-gradient|repeating-linear-gradient|repeating-radial-gradient/gi;
function gradient(property, value, style, _ref) {
  var browserName = _ref.browserName,
      browserVersion = _ref.browserVersion,
      cssPrefix = _ref.cssPrefix,
      keepUnprefixed = _ref.keepUnprefixed;

  if (typeof value === 'string' && values.test(value) && (browserName === 'firefox' && browserVersion < 16 || browserName === 'chrome' && browserVersion < 26 || (browserName === 'safari' || browserName === 'ios_saf') && browserVersion < 7 || (browserName === 'opera' || browserName === 'op_mini') && browserVersion < 12.1 || browserName === 'android' && browserVersion < 4.4 || browserName === 'and_uc')) {
    return (0, _getPrefixedValue2.default)(value.replace(values, function (grad) {
      return cssPrefix + grad;
    }), value, keepUnprefixed);
  }
}
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/inline-style-prefixer/dynamic/plugins/imageSet.js":
/*!************************************************************************!*\
  !*** ./node_modules/inline-style-prefixer/dynamic/plugins/imageSet.js ***!
  \************************************************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = imageSet;

var _getPrefixedValue = __webpack_require__(/*! ../../utils/getPrefixedValue */ "./node_modules/inline-style-prefixer/utils/getPrefixedValue.js");

var _getPrefixedValue2 = _interopRequireDefault(_getPrefixedValue);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function imageSet(property, value, style, _ref) {
  var browserName = _ref.browserName,
      cssPrefix = _ref.cssPrefix,
      keepUnprefixed = _ref.keepUnprefixed;

  if (typeof value === 'string' && value.indexOf('image-set(') > -1 && (browserName === 'chrome' || browserName === 'opera' || browserName === 'and_chr' || browserName === 'and_uc' || browserName === 'ios_saf' || browserName === 'safari')) {
    return (0, _getPrefixedValue2.default)(value.replace(/image-set\(/g, cssPrefix + 'image-set('), value, keepUnprefixed);
  }
}
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/inline-style-prefixer/dynamic/plugins/position.js":
/*!************************************************************************!*\
  !*** ./node_modules/inline-style-prefixer/dynamic/plugins/position.js ***!
  \************************************************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = position;

var _getPrefixedValue = __webpack_require__(/*! ../../utils/getPrefixedValue */ "./node_modules/inline-style-prefixer/utils/getPrefixedValue.js");

var _getPrefixedValue2 = _interopRequireDefault(_getPrefixedValue);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function position(property, value, style, _ref) {
  var browserName = _ref.browserName,
      cssPrefix = _ref.cssPrefix,
      keepUnprefixed = _ref.keepUnprefixed;

  if (property === 'position' && value === 'sticky' && (browserName === 'safari' || browserName === 'ios_saf')) {
    return (0, _getPrefixedValue2.default)(cssPrefix + value, value, keepUnprefixed);
  }
}
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/inline-style-prefixer/dynamic/plugins/sizing.js":
/*!**********************************************************************!*\
  !*** ./node_modules/inline-style-prefixer/dynamic/plugins/sizing.js ***!
  \**********************************************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = sizing;

var _getPrefixedValue = __webpack_require__(/*! ../../utils/getPrefixedValue */ "./node_modules/inline-style-prefixer/utils/getPrefixedValue.js");

var _getPrefixedValue2 = _interopRequireDefault(_getPrefixedValue);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var properties = {
  maxHeight: true,
  maxWidth: true,
  width: true,
  height: true,
  columnWidth: true,
  minWidth: true,
  minHeight: true
};

var values = {
  'min-content': true,
  'max-content': true,
  'fill-available': true,
  'fit-content': true,
  'contain-floats': true

  // TODO: chrome & opera support it
};function sizing(property, value, style, _ref) {
  var cssPrefix = _ref.cssPrefix,
      keepUnprefixed = _ref.keepUnprefixed;

  // This might change in the future
  // Keep an eye on it
  if (properties.hasOwnProperty(property) && values.hasOwnProperty(value)) {
    return (0, _getPrefixedValue2.default)(cssPrefix + value, value, keepUnprefixed);
  }
}
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/inline-style-prefixer/dynamic/plugins/transition.js":
/*!**************************************************************************!*\
  !*** ./node_modules/inline-style-prefixer/dynamic/plugins/transition.js ***!
  \**************************************************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = transition;

var _hyphenateProperty = __webpack_require__(/*! css-in-js-utils/lib/hyphenateProperty */ "./node_modules/css-in-js-utils/lib/hyphenateProperty.js");

var _hyphenateProperty2 = _interopRequireDefault(_hyphenateProperty);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var properties = {
  transition: true,
  transitionProperty: true,
  WebkitTransition: true,
  WebkitTransitionProperty: true,
  MozTransition: true,
  MozTransitionProperty: true
};


var requiresPrefixDashCased = void 0;

function transition(property, value, style, _ref) {
  var cssPrefix = _ref.cssPrefix,
      keepUnprefixed = _ref.keepUnprefixed,
      requiresPrefix = _ref.requiresPrefix;

  if (typeof value === 'string' && properties.hasOwnProperty(property)) {
    // memoize the prefix array for later use
    if (!requiresPrefixDashCased) {
      requiresPrefixDashCased = Object.keys(requiresPrefix).map(function (prop) {
        return (0, _hyphenateProperty2.default)(prop);
      });
    }

    // only split multi values, not cubic beziers
    var multipleValues = value.split(/,(?![^()]*(?:\([^()]*\))?\))/g);

    requiresPrefixDashCased.forEach(function (prop) {
      multipleValues.forEach(function (val, index) {
        if (val.indexOf(prop) > -1 && prop !== 'order') {
          multipleValues[index] = val.replace(prop, cssPrefix + prop) + (keepUnprefixed ? ',' + val : '');
        }
      });
    });

    return multipleValues.join(',');
  }
}
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/inline-style-prefixer/static/createPrefixer.js":
/*!*********************************************************************!*\
  !*** ./node_modules/inline-style-prefixer/static/createPrefixer.js ***!
  \*********************************************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = createPrefixer;

var _prefixProperty = __webpack_require__(/*! ../utils/prefixProperty */ "./node_modules/inline-style-prefixer/utils/prefixProperty.js");

var _prefixProperty2 = _interopRequireDefault(_prefixProperty);

var _prefixValue = __webpack_require__(/*! ../utils/prefixValue */ "./node_modules/inline-style-prefixer/utils/prefixValue.js");

var _prefixValue2 = _interopRequireDefault(_prefixValue);

var _addNewValuesOnly = __webpack_require__(/*! ../utils/addNewValuesOnly */ "./node_modules/inline-style-prefixer/utils/addNewValuesOnly.js");

var _addNewValuesOnly2 = _interopRequireDefault(_addNewValuesOnly);

var _isObject = __webpack_require__(/*! ../utils/isObject */ "./node_modules/inline-style-prefixer/utils/isObject.js");

var _isObject2 = _interopRequireDefault(_isObject);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function createPrefixer(_ref) {
  var prefixMap = _ref.prefixMap,
      plugins = _ref.plugins;

  function prefixAll(style) {
    for (var property in style) {
      var value = style[property];

      // handle nested objects
      if ((0, _isObject2.default)(value)) {
        style[property] = prefixAll(value);
        // handle array values
      } else if (Array.isArray(value)) {
        var combinedValue = [];

        for (var i = 0, len = value.length; i < len; ++i) {
          var processedValue = (0, _prefixValue2.default)(plugins, property, value[i], style, prefixMap);
          (0, _addNewValuesOnly2.default)(combinedValue, processedValue || value[i]);
        }

        // only modify the value if it was touched
        // by any plugin to prevent unnecessary mutations
        if (combinedValue.length > 0) {
          style[property] = combinedValue;
        }
      } else {
        var _processedValue = (0, _prefixValue2.default)(plugins, property, value, style, prefixMap);

        // only modify the value if it was touched
        // by any plugin to prevent unnecessary mutations
        if (_processedValue) {
          style[property] = _processedValue;
        }

        style = (0, _prefixProperty2.default)(prefixMap, property, style);
      }
    }

    return style;
  }

  return prefixAll;
}
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/inline-style-prefixer/static/plugins/calc.js":
/*!*******************************************************************!*\
  !*** ./node_modules/inline-style-prefixer/static/plugins/calc.js ***!
  \*******************************************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = calc;

var _isPrefixedValue = __webpack_require__(/*! css-in-js-utils/lib/isPrefixedValue */ "./node_modules/css-in-js-utils/lib/isPrefixedValue.js");

var _isPrefixedValue2 = _interopRequireDefault(_isPrefixedValue);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var prefixes = ['-webkit-', '-moz-', ''];
function calc(property, value) {
  if (typeof value === 'string' && !(0, _isPrefixedValue2.default)(value) && value.indexOf('calc(') > -1) {
    return prefixes.map(function (prefix) {
      return value.replace(/calc\(/g, prefix + 'calc(');
    });
  }
}
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/inline-style-prefixer/static/plugins/crossFade.js":
/*!************************************************************************!*\
  !*** ./node_modules/inline-style-prefixer/static/plugins/crossFade.js ***!
  \************************************************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = crossFade;

var _isPrefixedValue = __webpack_require__(/*! css-in-js-utils/lib/isPrefixedValue */ "./node_modules/css-in-js-utils/lib/isPrefixedValue.js");

var _isPrefixedValue2 = _interopRequireDefault(_isPrefixedValue);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// http://caniuse.com/#search=cross-fade
var prefixes = ['-webkit-', ''];
function crossFade(property, value) {
  if (typeof value === 'string' && !(0, _isPrefixedValue2.default)(value) && value.indexOf('cross-fade(') > -1) {
    return prefixes.map(function (prefix) {
      return value.replace(/cross-fade\(/g, prefix + 'cross-fade(');
    });
  }
}
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/inline-style-prefixer/static/plugins/cursor.js":
/*!*********************************************************************!*\
  !*** ./node_modules/inline-style-prefixer/static/plugins/cursor.js ***!
  \*********************************************************************/
/***/ (function(module, exports) {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = cursor;
var prefixes = ['-webkit-', '-moz-', ''];

var values = {
  'zoom-in': true,
  'zoom-out': true,
  grab: true,
  grabbing: true
};

function cursor(property, value) {
  if (property === 'cursor' && values.hasOwnProperty(value)) {
    return prefixes.map(function (prefix) {
      return prefix + value;
    });
  }
}
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/inline-style-prefixer/static/plugins/filter.js":
/*!*********************************************************************!*\
  !*** ./node_modules/inline-style-prefixer/static/plugins/filter.js ***!
  \*********************************************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = filter;

var _isPrefixedValue = __webpack_require__(/*! css-in-js-utils/lib/isPrefixedValue */ "./node_modules/css-in-js-utils/lib/isPrefixedValue.js");

var _isPrefixedValue2 = _interopRequireDefault(_isPrefixedValue);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// http://caniuse.com/#feat=css-filter-function
var prefixes = ['-webkit-', ''];
function filter(property, value) {
  if (typeof value === 'string' && !(0, _isPrefixedValue2.default)(value) && value.indexOf('filter(') > -1) {
    return prefixes.map(function (prefix) {
      return value.replace(/filter\(/g, prefix + 'filter(');
    });
  }
}
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/inline-style-prefixer/static/plugins/flex.js":
/*!*******************************************************************!*\
  !*** ./node_modules/inline-style-prefixer/static/plugins/flex.js ***!
  \*******************************************************************/
/***/ (function(module, exports) {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = flex;
var values = {
  flex: ['-webkit-box', '-moz-box', '-ms-flexbox', '-webkit-flex', 'flex'],
  'inline-flex': ['-webkit-inline-box', '-moz-inline-box', '-ms-inline-flexbox', '-webkit-inline-flex', 'inline-flex']
};

function flex(property, value) {
  if (property === 'display' && values.hasOwnProperty(value)) {
    return values[value];
  }
}
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/inline-style-prefixer/static/plugins/flexboxIE.js":
/*!************************************************************************!*\
  !*** ./node_modules/inline-style-prefixer/static/plugins/flexboxIE.js ***!
  \************************************************************************/
/***/ (function(module, exports) {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = flexboxIE;
var alternativeValues = {
  'space-around': 'distribute',
  'space-between': 'justify',
  'flex-start': 'start',
  'flex-end': 'end'
};
var alternativeProps = {
  alignContent: 'msFlexLinePack',
  alignSelf: 'msFlexItemAlign',
  alignItems: 'msFlexAlign',
  justifyContent: 'msFlexPack',
  order: 'msFlexOrder',
  flexGrow: 'msFlexPositive',
  flexShrink: 'msFlexNegative',
  flexBasis: 'msFlexPreferredSize'
};

function flexboxIE(property, value, style) {
  if (alternativeProps.hasOwnProperty(property)) {
    style[alternativeProps[property]] = alternativeValues[value] || value;
  }
}
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/inline-style-prefixer/static/plugins/flexboxOld.js":
/*!*************************************************************************!*\
  !*** ./node_modules/inline-style-prefixer/static/plugins/flexboxOld.js ***!
  \*************************************************************************/
/***/ (function(module, exports) {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = flexboxOld;
var alternativeValues = {
  'space-around': 'justify',
  'space-between': 'justify',
  'flex-start': 'start',
  'flex-end': 'end',
  'wrap-reverse': 'multiple',
  wrap: 'multiple',
  flex: 'box',
  'inline-flex': 'inline-box'
};

var alternativeProps = {
  alignItems: 'WebkitBoxAlign',
  justifyContent: 'WebkitBoxPack',
  flexWrap: 'WebkitBoxLines',
  flexGrow: 'WebkitBoxFlex'
};

function flexboxOld(property, value, style) {
  if (property === 'flexDirection' && typeof value === 'string') {
    if (value.indexOf('column') > -1) {
      style.WebkitBoxOrient = 'vertical';
    } else {
      style.WebkitBoxOrient = 'horizontal';
    }
    if (value.indexOf('reverse') > -1) {
      style.WebkitBoxDirection = 'reverse';
    } else {
      style.WebkitBoxDirection = 'normal';
    }
  }
  if (alternativeProps.hasOwnProperty(property)) {
    style[alternativeProps[property]] = alternativeValues[value] || value;
  }
}
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/inline-style-prefixer/static/plugins/gradient.js":
/*!***********************************************************************!*\
  !*** ./node_modules/inline-style-prefixer/static/plugins/gradient.js ***!
  \***********************************************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = gradient;

var _isPrefixedValue = __webpack_require__(/*! css-in-js-utils/lib/isPrefixedValue */ "./node_modules/css-in-js-utils/lib/isPrefixedValue.js");

var _isPrefixedValue2 = _interopRequireDefault(_isPrefixedValue);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var prefixes = ['-webkit-', '-moz-', ''];

var values = /linear-gradient|radial-gradient|repeating-linear-gradient|repeating-radial-gradient/gi;

function gradient(property, value) {
  if (typeof value === 'string' && !(0, _isPrefixedValue2.default)(value) && values.test(value)) {
    return prefixes.map(function (prefix) {
      return value.replace(values, function (grad) {
        return prefix + grad;
      });
    });
  }
}
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/inline-style-prefixer/static/plugins/imageSet.js":
/*!***********************************************************************!*\
  !*** ./node_modules/inline-style-prefixer/static/plugins/imageSet.js ***!
  \***********************************************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = imageSet;

var _isPrefixedValue = __webpack_require__(/*! css-in-js-utils/lib/isPrefixedValue */ "./node_modules/css-in-js-utils/lib/isPrefixedValue.js");

var _isPrefixedValue2 = _interopRequireDefault(_isPrefixedValue);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// http://caniuse.com/#feat=css-image-set
var prefixes = ['-webkit-', ''];
function imageSet(property, value) {
  if (typeof value === 'string' && !(0, _isPrefixedValue2.default)(value) && value.indexOf('image-set(') > -1) {
    return prefixes.map(function (prefix) {
      return value.replace(/image-set\(/g, prefix + 'image-set(');
    });
  }
}
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/inline-style-prefixer/static/plugins/position.js":
/*!***********************************************************************!*\
  !*** ./node_modules/inline-style-prefixer/static/plugins/position.js ***!
  \***********************************************************************/
/***/ (function(module, exports) {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = position;
function position(property, value) {
  if (property === 'position' && value === 'sticky') {
    return ['-webkit-sticky', 'sticky'];
  }
}
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/inline-style-prefixer/static/plugins/sizing.js":
/*!*********************************************************************!*\
  !*** ./node_modules/inline-style-prefixer/static/plugins/sizing.js ***!
  \*********************************************************************/
/***/ (function(module, exports) {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = sizing;
var prefixes = ['-webkit-', '-moz-', ''];

var properties = {
  maxHeight: true,
  maxWidth: true,
  width: true,
  height: true,
  columnWidth: true,
  minWidth: true,
  minHeight: true
};
var values = {
  'min-content': true,
  'max-content': true,
  'fill-available': true,
  'fit-content': true,
  'contain-floats': true
};

function sizing(property, value) {
  if (properties.hasOwnProperty(property) && values.hasOwnProperty(value)) {
    return prefixes.map(function (prefix) {
      return prefix + value;
    });
  }
}
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/inline-style-prefixer/static/plugins/transition.js":
/*!*************************************************************************!*\
  !*** ./node_modules/inline-style-prefixer/static/plugins/transition.js ***!
  \*************************************************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = transition;

var _hyphenateProperty = __webpack_require__(/*! css-in-js-utils/lib/hyphenateProperty */ "./node_modules/css-in-js-utils/lib/hyphenateProperty.js");

var _hyphenateProperty2 = _interopRequireDefault(_hyphenateProperty);

var _isPrefixedValue = __webpack_require__(/*! css-in-js-utils/lib/isPrefixedValue */ "./node_modules/css-in-js-utils/lib/isPrefixedValue.js");

var _isPrefixedValue2 = _interopRequireDefault(_isPrefixedValue);

var _capitalizeString = __webpack_require__(/*! ../../utils/capitalizeString */ "./node_modules/inline-style-prefixer/utils/capitalizeString.js");

var _capitalizeString2 = _interopRequireDefault(_capitalizeString);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var properties = {
  transition: true,
  transitionProperty: true,
  WebkitTransition: true,
  WebkitTransitionProperty: true,
  MozTransition: true,
  MozTransitionProperty: true
};


var prefixMapping = {
  Webkit: '-webkit-',
  Moz: '-moz-',
  ms: '-ms-'
};

function prefixValue(value, propertyPrefixMap) {
  if ((0, _isPrefixedValue2.default)(value)) {
    return value;
  }

  // only split multi values, not cubic beziers
  var multipleValues = value.split(/,(?![^()]*(?:\([^()]*\))?\))/g);

  for (var i = 0, len = multipleValues.length; i < len; ++i) {
    var singleValue = multipleValues[i];
    var values = [singleValue];
    for (var property in propertyPrefixMap) {
      var dashCaseProperty = (0, _hyphenateProperty2.default)(property);

      if (singleValue.indexOf(dashCaseProperty) > -1 && dashCaseProperty !== 'order') {
        var prefixes = propertyPrefixMap[property];
        for (var j = 0, pLen = prefixes.length; j < pLen; ++j) {
          // join all prefixes and create a new value
          values.unshift(singleValue.replace(dashCaseProperty, prefixMapping[prefixes[j]] + dashCaseProperty));
        }
      }
    }

    multipleValues[i] = values.join(',');
  }

  return multipleValues.join(',');
}

function transition(property, value, style, propertyPrefixMap) {
  // also check for already prefixed transitions
  if (typeof value === 'string' && properties.hasOwnProperty(property)) {
    var outputValue = prefixValue(value, propertyPrefixMap);
    // if the property is already prefixed
    var webkitOutput = outputValue.split(/,(?![^()]*(?:\([^()]*\))?\))/g).filter(function (val) {
      return !/-moz-|-ms-/.test(val);
    }).join(',');

    if (property.indexOf('Webkit') > -1) {
      return webkitOutput;
    }

    var mozOutput = outputValue.split(/,(?![^()]*(?:\([^()]*\))?\))/g).filter(function (val) {
      return !/-webkit-|-ms-/.test(val);
    }).join(',');

    if (property.indexOf('Moz') > -1) {
      return mozOutput;
    }

    style['Webkit' + (0, _capitalizeString2.default)(property)] = webkitOutput;
    style['Moz' + (0, _capitalizeString2.default)(property)] = mozOutput;
    return outputValue;
  }
}
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/inline-style-prefixer/utils/addNewValuesOnly.js":
/*!**********************************************************************!*\
  !*** ./node_modules/inline-style-prefixer/utils/addNewValuesOnly.js ***!
  \**********************************************************************/
/***/ (function(module, exports) {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = addNewValuesOnly;
function addIfNew(list, value) {
  if (list.indexOf(value) === -1) {
    list.push(value);
  }
}

function addNewValuesOnly(list, values) {
  if (Array.isArray(values)) {
    for (var i = 0, len = values.length; i < len; ++i) {
      addIfNew(list, values[i]);
    }
  } else {
    addIfNew(list, values);
  }
}
module.exports = exports["default"];

/***/ }),

/***/ "./node_modules/inline-style-prefixer/utils/capitalizeString.js":
/*!**********************************************************************!*\
  !*** ./node_modules/inline-style-prefixer/utils/capitalizeString.js ***!
  \**********************************************************************/
/***/ (function(module, exports) {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = capitalizeString;
function capitalizeString(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}
module.exports = exports["default"];

/***/ }),

/***/ "./node_modules/inline-style-prefixer/utils/getBrowserInformation.js":
/*!***************************************************************************!*\
  !*** ./node_modules/inline-style-prefixer/utils/getBrowserInformation.js ***!
  \***************************************************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = getBrowserInformation;

var _bowser = __webpack_require__(/*! bowser */ "./node_modules/bowser/src/bowser.js");

var _bowser2 = _interopRequireDefault(_bowser);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var prefixByBrowser = {
  chrome: 'Webkit',
  safari: 'Webkit',
  ios: 'Webkit',
  android: 'Webkit',
  phantom: 'Webkit',
  opera: 'Webkit',
  webos: 'Webkit',
  blackberry: 'Webkit',
  bada: 'Webkit',
  tizen: 'Webkit',
  chromium: 'Webkit',
  vivaldi: 'Webkit',
  firefox: 'Moz',
  seamoney: 'Moz',
  sailfish: 'Moz',
  msie: 'ms',
  msedge: 'ms'
};


var browserByCanIuseAlias = {
  chrome: 'chrome',
  chromium: 'chrome',
  safari: 'safari',
  firfox: 'firefox',
  msedge: 'edge',
  opera: 'opera',
  vivaldi: 'opera',
  msie: 'ie'
};

function getBrowserName(browserInfo) {
  if (browserInfo.firefox) {
    return 'firefox';
  }

  if (browserInfo.mobile || browserInfo.tablet) {
    if (browserInfo.ios) {
      return 'ios_saf';
    } else if (browserInfo.android) {
      return 'android';
    } else if (browserInfo.opera) {
      return 'op_mini';
    }
  }

  for (var browser in browserByCanIuseAlias) {
    if (browserInfo.hasOwnProperty(browser)) {
      return browserByCanIuseAlias[browser];
    }
  }
}

/**
 * Uses bowser to get default browser browserInformation such as version and name
 * Evaluates bowser browserInfo and adds vendorPrefix browserInformation
 * @param {string} userAgent - userAgent that gets evaluated
 */
function getBrowserInformation(userAgent) {
  var browserInfo = _bowser2.default._detect(userAgent);

  if (browserInfo.yandexbrowser) {
    browserInfo = _bowser2.default._detect(userAgent.replace(/YaBrowser\/[0-9.]*/, ''));
  }

  for (var browser in prefixByBrowser) {
    if (browserInfo.hasOwnProperty(browser)) {
      var prefix = prefixByBrowser[browser];

      browserInfo.jsPrefix = prefix;
      browserInfo.cssPrefix = '-' + prefix.toLowerCase() + '-';
      break;
    }
  }

  browserInfo.browserName = getBrowserName(browserInfo);

  // For cordova IOS 8 the version is missing, set truncated osversion to prevent NaN
  if (browserInfo.version) {
    browserInfo.browserVersion = parseFloat(browserInfo.version);
  } else {
    browserInfo.browserVersion = parseInt(parseFloat(browserInfo.osversion), 10);
  }

  browserInfo.osVersion = parseFloat(browserInfo.osversion);

  // iOS forces all browsers to use Safari under the hood
  // as the Safari version seems to match the iOS version
  // we just explicitely use the osversion instead
  // https://github.com/rofrischmann/inline-style-prefixer/issues/72
  if (browserInfo.browserName === 'ios_saf' && browserInfo.browserVersion > browserInfo.osVersion) {
    browserInfo.browserVersion = browserInfo.osVersion;
  }

  // seperate native android chrome
  // https://github.com/rofrischmann/inline-style-prefixer/issues/45
  if (browserInfo.browserName === 'android' && browserInfo.chrome && browserInfo.browserVersion > 37) {
    browserInfo.browserName = 'and_chr';
  }

  // For android < 4.4 we want to check the osversion
  // not the chrome version, see issue #26
  // https://github.com/rofrischmann/inline-style-prefixer/issues/26
  if (browserInfo.browserName === 'android' && browserInfo.osVersion < 5) {
    browserInfo.browserVersion = browserInfo.osVersion;
  }

  // Samsung browser are basically build on Chrome > 44
  // https://github.com/rofrischmann/inline-style-prefixer/issues/102
  if (browserInfo.browserName === 'android' && browserInfo.samsungBrowser) {
    browserInfo.browserName = 'and_chr';
    browserInfo.browserVersion = 44;
  }

  return browserInfo;
}
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/inline-style-prefixer/utils/getPrefixedKeyframes.js":
/*!**************************************************************************!*\
  !*** ./node_modules/inline-style-prefixer/utils/getPrefixedKeyframes.js ***!
  \**************************************************************************/
/***/ (function(module, exports) {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = getPrefixedKeyframes;
function getPrefixedKeyframes(browserName, browserVersion, cssPrefix) {
  var prefixedKeyframes = 'keyframes';

  if (browserName === 'chrome' && browserVersion < 43 || (browserName === 'safari' || browserName === 'ios_saf') && browserVersion < 9 || browserName === 'opera' && browserVersion < 30 || browserName === 'android' && browserVersion <= 4.4 || browserName === 'and_uc') {
    return cssPrefix + prefixedKeyframes;
  }
  return prefixedKeyframes;
}
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/inline-style-prefixer/utils/getPrefixedValue.js":
/*!**********************************************************************!*\
  !*** ./node_modules/inline-style-prefixer/utils/getPrefixedValue.js ***!
  \**********************************************************************/
/***/ (function(module, exports) {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = getPrefixedValue;
function getPrefixedValue(prefixedValue, value, keepUnprefixed) {
  if (keepUnprefixed) {
    return [prefixedValue, value];
  }
  return prefixedValue;
}
module.exports = exports["default"];

/***/ }),

/***/ "./node_modules/inline-style-prefixer/utils/isObject.js":
/*!**************************************************************!*\
  !*** ./node_modules/inline-style-prefixer/utils/isObject.js ***!
  \**************************************************************/
/***/ (function(module, exports) {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = isObject;
function isObject(value) {
  return value instanceof Object && !Array.isArray(value);
}
module.exports = exports["default"];

/***/ }),

/***/ "./node_modules/inline-style-prefixer/utils/prefixProperty.js":
/*!********************************************************************!*\
  !*** ./node_modules/inline-style-prefixer/utils/prefixProperty.js ***!
  \********************************************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = prefixProperty;

var _capitalizeString = __webpack_require__(/*! ./capitalizeString */ "./node_modules/inline-style-prefixer/utils/capitalizeString.js");

var _capitalizeString2 = _interopRequireDefault(_capitalizeString);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function prefixProperty(prefixProperties, property, style) {
  if (prefixProperties.hasOwnProperty(property)) {
    var newStyle = {};
    var requiredPrefixes = prefixProperties[property];
    var capitalizedProperty = (0, _capitalizeString2.default)(property);
    var keys = Object.keys(style);
    for (var i = 0; i < keys.length; i++) {
      var styleProperty = keys[i];
      if (styleProperty === property) {
        for (var j = 0; j < requiredPrefixes.length; j++) {
          newStyle[requiredPrefixes[j] + capitalizedProperty] = style[property];
        }
      }
      newStyle[styleProperty] = style[styleProperty];
    }
    return newStyle;
  }
  return style;
}
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/inline-style-prefixer/utils/prefixValue.js":
/*!*****************************************************************!*\
  !*** ./node_modules/inline-style-prefixer/utils/prefixValue.js ***!
  \*****************************************************************/
/***/ (function(module, exports) {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = prefixValue;
function prefixValue(plugins, property, value, style, metaData) {
  for (var i = 0, len = plugins.length; i < len; ++i) {
    var processedValue = plugins[i](property, value, style, metaData);

    // we can stop processing if a value is returned
    // as all plugin criteria are unique
    if (processedValue) {
      return processedValue;
    }
  }
}
module.exports = exports["default"];

/***/ }),

/***/ "./src/editor.scss":
/*!*************************!*\
  !*** ./src/editor.scss ***!
  \*************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/style.scss":
/*!************************!*\
  !*** ./src/style.scss ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./node_modules/object-assign/index.js":
/*!*********************************************!*\
  !*** ./node_modules/object-assign/index.js ***!
  \*********************************************/
/***/ (function(module) {

"use strict";
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/


/* eslint-disable no-unused-vars */
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;

function toObject(val) {
	if (val === null || val === undefined) {
		throw new TypeError('Object.assign cannot be called with null or undefined');
	}

	return Object(val);
}

function shouldUseNative() {
	try {
		if (!Object.assign) {
			return false;
		}

		// Detect buggy property enumeration order in older V8 versions.

		// https://bugs.chromium.org/p/v8/issues/detail?id=4118
		var test1 = new String('abc');  // eslint-disable-line no-new-wrappers
		test1[5] = 'de';
		if (Object.getOwnPropertyNames(test1)[0] === '5') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test2 = {};
		for (var i = 0; i < 10; i++) {
			test2['_' + String.fromCharCode(i)] = i;
		}
		var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
			return test2[n];
		});
		if (order2.join('') !== '0123456789') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test3 = {};
		'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
			test3[letter] = letter;
		});
		if (Object.keys(Object.assign({}, test3)).join('') !==
				'abcdefghijklmnopqrst') {
			return false;
		}

		return true;
	} catch (err) {
		// We don't expect any of the above to throw, but better to be safe.
		return false;
	}
}

module.exports = shouldUseNative() ? Object.assign : function (target, source) {
	var from;
	var to = toObject(target);
	var symbols;

	for (var s = 1; s < arguments.length; s++) {
		from = Object(arguments[s]);

		for (var key in from) {
			if (hasOwnProperty.call(from, key)) {
				to[key] = from[key];
			}
		}

		if (getOwnPropertySymbols) {
			symbols = getOwnPropertySymbols(from);
			for (var i = 0; i < symbols.length; i++) {
				if (propIsEnumerable.call(from, symbols[i])) {
					to[symbols[i]] = from[symbols[i]];
				}
			}
		}
	}

	return to;
};


/***/ }),

/***/ "./node_modules/prop-types/checkPropTypes.js":
/*!***************************************************!*\
  !*** ./node_modules/prop-types/checkPropTypes.js ***!
  \***************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var printWarning = function() {};

if (true) {
  var ReactPropTypesSecret = __webpack_require__(/*! ./lib/ReactPropTypesSecret */ "./node_modules/prop-types/lib/ReactPropTypesSecret.js");
  var loggedTypeFailures = {};
  var has = __webpack_require__(/*! ./lib/has */ "./node_modules/prop-types/lib/has.js");

  printWarning = function(text) {
    var message = 'Warning: ' + text;
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) { /**/ }
  };
}

/**
 * Assert that the values match with the type specs.
 * Error messages are memorized and will only be shown once.
 *
 * @param {object} typeSpecs Map of name to a ReactPropType
 * @param {object} values Runtime values that need to be type-checked
 * @param {string} location e.g. "prop", "context", "child context"
 * @param {string} componentName Name of the component for error messages.
 * @param {?Function} getStack Returns the component stack.
 * @private
 */
function checkPropTypes(typeSpecs, values, location, componentName, getStack) {
  if (true) {
    for (var typeSpecName in typeSpecs) {
      if (has(typeSpecs, typeSpecName)) {
        var error;
        // Prop type validation may throw. In case they do, we don't want to
        // fail the render phase where it didn't fail before. So we log it.
        // After these have been cleaned up, we'll let them throw.
        try {
          // This is intentionally an invariant that gets caught. It's the same
          // behavior as without this statement except with a better message.
          if (typeof typeSpecs[typeSpecName] !== 'function') {
            var err = Error(
              (componentName || 'React class') + ': ' + location + ' type `' + typeSpecName + '` is invalid; ' +
              'it must be a function, usually from the `prop-types` package, but received `' + typeof typeSpecs[typeSpecName] + '`.' +
              'This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.'
            );
            err.name = 'Invariant Violation';
            throw err;
          }
          error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret);
        } catch (ex) {
          error = ex;
        }
        if (error && !(error instanceof Error)) {
          printWarning(
            (componentName || 'React class') + ': type specification of ' +
            location + ' `' + typeSpecName + '` is invalid; the type checker ' +
            'function must return `null` or an `Error` but returned a ' + typeof error + '. ' +
            'You may have forgotten to pass an argument to the type checker ' +
            'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' +
            'shape all require an argument).'
          );
        }
        if (error instanceof Error && !(error.message in loggedTypeFailures)) {
          // Only monitor this failure once because there tends to be a lot of the
          // same error.
          loggedTypeFailures[error.message] = true;

          var stack = getStack ? getStack() : '';

          printWarning(
            'Failed ' + location + ' type: ' + error.message + (stack != null ? stack : '')
          );
        }
      }
    }
  }
}

/**
 * Resets warning cache when testing.
 *
 * @private
 */
checkPropTypes.resetWarningCache = function() {
  if (true) {
    loggedTypeFailures = {};
  }
}

module.exports = checkPropTypes;


/***/ }),

/***/ "./node_modules/prop-types/factoryWithTypeCheckers.js":
/*!************************************************************!*\
  !*** ./node_modules/prop-types/factoryWithTypeCheckers.js ***!
  \************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactIs = __webpack_require__(/*! react-is */ "./node_modules/react-is/index.js");
var assign = __webpack_require__(/*! object-assign */ "./node_modules/object-assign/index.js");

var ReactPropTypesSecret = __webpack_require__(/*! ./lib/ReactPropTypesSecret */ "./node_modules/prop-types/lib/ReactPropTypesSecret.js");
var has = __webpack_require__(/*! ./lib/has */ "./node_modules/prop-types/lib/has.js");
var checkPropTypes = __webpack_require__(/*! ./checkPropTypes */ "./node_modules/prop-types/checkPropTypes.js");

var printWarning = function() {};

if (true) {
  printWarning = function(text) {
    var message = 'Warning: ' + text;
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };
}

function emptyFunctionThatReturnsNull() {
  return null;
}

module.exports = function(isValidElement, throwOnDirectAccess) {
  /* global Symbol */
  var ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
  var FAUX_ITERATOR_SYMBOL = '@@iterator'; // Before Symbol spec.

  /**
   * Returns the iterator method function contained on the iterable object.
   *
   * Be sure to invoke the function with the iterable as context:
   *
   *     var iteratorFn = getIteratorFn(myIterable);
   *     if (iteratorFn) {
   *       var iterator = iteratorFn.call(myIterable);
   *       ...
   *     }
   *
   * @param {?object} maybeIterable
   * @return {?function}
   */
  function getIteratorFn(maybeIterable) {
    var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
    if (typeof iteratorFn === 'function') {
      return iteratorFn;
    }
  }

  /**
   * Collection of methods that allow declaration and validation of props that are
   * supplied to React components. Example usage:
   *
   *   var Props = require('ReactPropTypes');
   *   var MyArticle = React.createClass({
   *     propTypes: {
   *       // An optional string prop named "description".
   *       description: Props.string,
   *
   *       // A required enum prop named "category".
   *       category: Props.oneOf(['News','Photos']).isRequired,
   *
   *       // A prop named "dialog" that requires an instance of Dialog.
   *       dialog: Props.instanceOf(Dialog).isRequired
   *     },
   *     render: function() { ... }
   *   });
   *
   * A more formal specification of how these methods are used:
   *
   *   type := array|bool|func|object|number|string|oneOf([...])|instanceOf(...)
   *   decl := ReactPropTypes.{type}(.isRequired)?
   *
   * Each and every declaration produces a function with the same signature. This
   * allows the creation of custom validation functions. For example:
   *
   *  var MyLink = React.createClass({
   *    propTypes: {
   *      // An optional string or URI prop named "href".
   *      href: function(props, propName, componentName) {
   *        var propValue = props[propName];
   *        if (propValue != null && typeof propValue !== 'string' &&
   *            !(propValue instanceof URI)) {
   *          return new Error(
   *            'Expected a string or an URI for ' + propName + ' in ' +
   *            componentName
   *          );
   *        }
   *      }
   *    },
   *    render: function() {...}
   *  });
   *
   * @internal
   */

  var ANONYMOUS = '<<anonymous>>';

  // Important!
  // Keep this list in sync with production version in `./factoryWithThrowingShims.js`.
  var ReactPropTypes = {
    array: createPrimitiveTypeChecker('array'),
    bigint: createPrimitiveTypeChecker('bigint'),
    bool: createPrimitiveTypeChecker('boolean'),
    func: createPrimitiveTypeChecker('function'),
    number: createPrimitiveTypeChecker('number'),
    object: createPrimitiveTypeChecker('object'),
    string: createPrimitiveTypeChecker('string'),
    symbol: createPrimitiveTypeChecker('symbol'),

    any: createAnyTypeChecker(),
    arrayOf: createArrayOfTypeChecker,
    element: createElementTypeChecker(),
    elementType: createElementTypeTypeChecker(),
    instanceOf: createInstanceTypeChecker,
    node: createNodeChecker(),
    objectOf: createObjectOfTypeChecker,
    oneOf: createEnumTypeChecker,
    oneOfType: createUnionTypeChecker,
    shape: createShapeTypeChecker,
    exact: createStrictShapeTypeChecker,
  };

  /**
   * inlined Object.is polyfill to avoid requiring consumers ship their own
   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
   */
  /*eslint-disable no-self-compare*/
  function is(x, y) {
    // SameValue algorithm
    if (x === y) {
      // Steps 1-5, 7-10
      // Steps 6.b-6.e: +0 != -0
      return x !== 0 || 1 / x === 1 / y;
    } else {
      // Step 6.a: NaN == NaN
      return x !== x && y !== y;
    }
  }
  /*eslint-enable no-self-compare*/

  /**
   * We use an Error-like object for backward compatibility as people may call
   * PropTypes directly and inspect their output. However, we don't use real
   * Errors anymore. We don't inspect their stack anyway, and creating them
   * is prohibitively expensive if they are created too often, such as what
   * happens in oneOfType() for any type before the one that matched.
   */
  function PropTypeError(message, data) {
    this.message = message;
    this.data = data && typeof data === 'object' ? data: {};
    this.stack = '';
  }
  // Make `instanceof Error` still work for returned errors.
  PropTypeError.prototype = Error.prototype;

  function createChainableTypeChecker(validate) {
    if (true) {
      var manualPropTypeCallCache = {};
      var manualPropTypeWarningCount = 0;
    }
    function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
      componentName = componentName || ANONYMOUS;
      propFullName = propFullName || propName;

      if (secret !== ReactPropTypesSecret) {
        if (throwOnDirectAccess) {
          // New behavior only for users of `prop-types` package
          var err = new Error(
            'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
            'Use `PropTypes.checkPropTypes()` to call them. ' +
            'Read more at http://fb.me/use-check-prop-types'
          );
          err.name = 'Invariant Violation';
          throw err;
        } else if ( true && typeof console !== 'undefined') {
          // Old behavior for people using React.PropTypes
          var cacheKey = componentName + ':' + propName;
          if (
            !manualPropTypeCallCache[cacheKey] &&
            // Avoid spamming the console because they are often not actionable except for lib authors
            manualPropTypeWarningCount < 3
          ) {
            printWarning(
              'You are manually calling a React.PropTypes validation ' +
              'function for the `' + propFullName + '` prop on `' + componentName + '`. This is deprecated ' +
              'and will throw in the standalone `prop-types` package. ' +
              'You may be seeing this warning due to a third-party PropTypes ' +
              'library. See https://fb.me/react-warning-dont-call-proptypes ' + 'for details.'
            );
            manualPropTypeCallCache[cacheKey] = true;
            manualPropTypeWarningCount++;
          }
        }
      }
      if (props[propName] == null) {
        if (isRequired) {
          if (props[propName] === null) {
            return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required ' + ('in `' + componentName + '`, but its value is `null`.'));
          }
          return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required in ' + ('`' + componentName + '`, but its value is `undefined`.'));
        }
        return null;
      } else {
        return validate(props, propName, componentName, location, propFullName);
      }
    }

    var chainedCheckType = checkType.bind(null, false);
    chainedCheckType.isRequired = checkType.bind(null, true);

    return chainedCheckType;
  }

  function createPrimitiveTypeChecker(expectedType) {
    function validate(props, propName, componentName, location, propFullName, secret) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== expectedType) {
        // `propValue` being instance of, say, date/regexp, pass the 'object'
        // check, but we can offer a more precise error message here rather than
        // 'of type `object`'.
        var preciseType = getPreciseType(propValue);

        return new PropTypeError(
          'Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + preciseType + '` supplied to `' + componentName + '`, expected ') + ('`' + expectedType + '`.'),
          {expectedType: expectedType}
        );
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createAnyTypeChecker() {
    return createChainableTypeChecker(emptyFunctionThatReturnsNull);
  }

  function createArrayOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside arrayOf.');
      }
      var propValue = props[propName];
      if (!Array.isArray(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an array.'));
      }
      for (var i = 0; i < propValue.length; i++) {
        var error = typeChecker(propValue, i, componentName, location, propFullName + '[' + i + ']', ReactPropTypesSecret);
        if (error instanceof Error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createElementTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!isValidElement(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createElementTypeTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!ReactIs.isValidElementType(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement type.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createInstanceTypeChecker(expectedClass) {
    function validate(props, propName, componentName, location, propFullName) {
      if (!(props[propName] instanceof expectedClass)) {
        var expectedClassName = expectedClass.name || ANONYMOUS;
        var actualClassName = getClassName(props[propName]);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + actualClassName + '` supplied to `' + componentName + '`, expected ') + ('instance of `' + expectedClassName + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createEnumTypeChecker(expectedValues) {
    if (!Array.isArray(expectedValues)) {
      if (true) {
        if (arguments.length > 1) {
          printWarning(
            'Invalid arguments supplied to oneOf, expected an array, got ' + arguments.length + ' arguments. ' +
            'A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z]).'
          );
        } else {
          printWarning('Invalid argument supplied to oneOf, expected an array.');
        }
      }
      return emptyFunctionThatReturnsNull;
    }

    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      for (var i = 0; i < expectedValues.length; i++) {
        if (is(propValue, expectedValues[i])) {
          return null;
        }
      }

      var valuesString = JSON.stringify(expectedValues, function replacer(key, value) {
        var type = getPreciseType(value);
        if (type === 'symbol') {
          return String(value);
        }
        return value;
      });
      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of value `' + String(propValue) + '` ' + ('supplied to `' + componentName + '`, expected one of ' + valuesString + '.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createObjectOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside objectOf.');
      }
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an object.'));
      }
      for (var key in propValue) {
        if (has(propValue, key)) {
          var error = typeChecker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
          if (error instanceof Error) {
            return error;
          }
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createUnionTypeChecker(arrayOfTypeCheckers) {
    if (!Array.isArray(arrayOfTypeCheckers)) {
       true ? printWarning('Invalid argument supplied to oneOfType, expected an instance of array.') : 0;
      return emptyFunctionThatReturnsNull;
    }

    for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
      var checker = arrayOfTypeCheckers[i];
      if (typeof checker !== 'function') {
        printWarning(
          'Invalid argument supplied to oneOfType. Expected an array of check functions, but ' +
          'received ' + getPostfixForTypeWarning(checker) + ' at index ' + i + '.'
        );
        return emptyFunctionThatReturnsNull;
      }
    }

    function validate(props, propName, componentName, location, propFullName) {
      var expectedTypes = [];
      for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
        var checker = arrayOfTypeCheckers[i];
        var checkerResult = checker(props, propName, componentName, location, propFullName, ReactPropTypesSecret);
        if (checkerResult == null) {
          return null;
        }
        if (checkerResult.data && has(checkerResult.data, 'expectedType')) {
          expectedTypes.push(checkerResult.data.expectedType);
        }
      }
      var expectedTypesMessage = (expectedTypes.length > 0) ? ', expected one of type [' + expectedTypes.join(', ') + ']': '';
      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`' + expectedTypesMessage + '.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createNodeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      if (!isNode(props[propName])) {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`, expected a ReactNode.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function invalidValidatorError(componentName, location, propFullName, key, type) {
    return new PropTypeError(
      (componentName || 'React class') + ': ' + location + ' type `' + propFullName + '.' + key + '` is invalid; ' +
      'it must be a function, usually from the `prop-types` package, but received `' + type + '`.'
    );
  }

  function createShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      for (var key in shapeTypes) {
        var checker = shapeTypes[key];
        if (typeof checker !== 'function') {
          return invalidValidatorError(componentName, location, propFullName, key, getPreciseType(checker));
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
        if (error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createStrictShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      // We need to check all keys in case some are required but missing from props.
      var allKeys = assign({}, props[propName], shapeTypes);
      for (var key in allKeys) {
        var checker = shapeTypes[key];
        if (has(shapeTypes, key) && typeof checker !== 'function') {
          return invalidValidatorError(componentName, location, propFullName, key, getPreciseType(checker));
        }
        if (!checker) {
          return new PropTypeError(
            'Invalid ' + location + ' `' + propFullName + '` key `' + key + '` supplied to `' + componentName + '`.' +
            '\nBad object: ' + JSON.stringify(props[propName], null, '  ') +
            '\nValid keys: ' + JSON.stringify(Object.keys(shapeTypes), null, '  ')
          );
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
        if (error) {
          return error;
        }
      }
      return null;
    }

    return createChainableTypeChecker(validate);
  }

  function isNode(propValue) {
    switch (typeof propValue) {
      case 'number':
      case 'string':
      case 'undefined':
        return true;
      case 'boolean':
        return !propValue;
      case 'object':
        if (Array.isArray(propValue)) {
          return propValue.every(isNode);
        }
        if (propValue === null || isValidElement(propValue)) {
          return true;
        }

        var iteratorFn = getIteratorFn(propValue);
        if (iteratorFn) {
          var iterator = iteratorFn.call(propValue);
          var step;
          if (iteratorFn !== propValue.entries) {
            while (!(step = iterator.next()).done) {
              if (!isNode(step.value)) {
                return false;
              }
            }
          } else {
            // Iterator will provide entry [k,v] tuples rather than values.
            while (!(step = iterator.next()).done) {
              var entry = step.value;
              if (entry) {
                if (!isNode(entry[1])) {
                  return false;
                }
              }
            }
          }
        } else {
          return false;
        }

        return true;
      default:
        return false;
    }
  }

  function isSymbol(propType, propValue) {
    // Native Symbol.
    if (propType === 'symbol') {
      return true;
    }

    // falsy value can't be a Symbol
    if (!propValue) {
      return false;
    }

    // 19.4.3.5 Symbol.prototype[@@toStringTag] === 'Symbol'
    if (propValue['@@toStringTag'] === 'Symbol') {
      return true;
    }

    // Fallback for non-spec compliant Symbols which are polyfilled.
    if (typeof Symbol === 'function' && propValue instanceof Symbol) {
      return true;
    }

    return false;
  }

  // Equivalent of `typeof` but with special handling for array and regexp.
  function getPropType(propValue) {
    var propType = typeof propValue;
    if (Array.isArray(propValue)) {
      return 'array';
    }
    if (propValue instanceof RegExp) {
      // Old webkits (at least until Android 4.0) return 'function' rather than
      // 'object' for typeof a RegExp. We'll normalize this here so that /bla/
      // passes PropTypes.object.
      return 'object';
    }
    if (isSymbol(propType, propValue)) {
      return 'symbol';
    }
    return propType;
  }

  // This handles more types than `getPropType`. Only used for error messages.
  // See `createPrimitiveTypeChecker`.
  function getPreciseType(propValue) {
    if (typeof propValue === 'undefined' || propValue === null) {
      return '' + propValue;
    }
    var propType = getPropType(propValue);
    if (propType === 'object') {
      if (propValue instanceof Date) {
        return 'date';
      } else if (propValue instanceof RegExp) {
        return 'regexp';
      }
    }
    return propType;
  }

  // Returns a string that is postfixed to a warning about an invalid type.
  // For example, "undefined" or "of type array"
  function getPostfixForTypeWarning(value) {
    var type = getPreciseType(value);
    switch (type) {
      case 'array':
      case 'object':
        return 'an ' + type;
      case 'boolean':
      case 'date':
      case 'regexp':
        return 'a ' + type;
      default:
        return type;
    }
  }

  // Returns class name of the object, if any.
  function getClassName(propValue) {
    if (!propValue.constructor || !propValue.constructor.name) {
      return ANONYMOUS;
    }
    return propValue.constructor.name;
  }

  ReactPropTypes.checkPropTypes = checkPropTypes;
  ReactPropTypes.resetWarningCache = checkPropTypes.resetWarningCache;
  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};


/***/ }),

/***/ "./node_modules/prop-types/index.js":
/*!******************************************!*\
  !*** ./node_modules/prop-types/index.js ***!
  \******************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

if (true) {
  var ReactIs = __webpack_require__(/*! react-is */ "./node_modules/react-is/index.js");

  // By explicitly using `prop-types` you are opting into new development behavior.
  // http://fb.me/prop-types-in-prod
  var throwOnDirectAccess = true;
  module.exports = __webpack_require__(/*! ./factoryWithTypeCheckers */ "./node_modules/prop-types/factoryWithTypeCheckers.js")(ReactIs.isElement, throwOnDirectAccess);
} else {}


/***/ }),

/***/ "./node_modules/prop-types/lib/ReactPropTypesSecret.js":
/*!*************************************************************!*\
  !*** ./node_modules/prop-types/lib/ReactPropTypesSecret.js ***!
  \*************************************************************/
/***/ (function(module) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

module.exports = ReactPropTypesSecret;


/***/ }),

/***/ "./node_modules/prop-types/lib/has.js":
/*!********************************************!*\
  !*** ./node_modules/prop-types/lib/has.js ***!
  \********************************************/
/***/ (function(module) {

module.exports = Function.call.bind(Object.prototype.hasOwnProperty);


/***/ }),

/***/ "./node_modules/radium/es/append-important-to-each-value.js":
/*!******************************************************************!*\
  !*** ./node_modules/radium/es/append-important-to-each-value.js ***!
  \******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ appendImportantToEachValue; }
/* harmony export */ });
/* harmony import */ var _append_px_if_needed__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./append-px-if-needed */ "./node_modules/radium/es/append-px-if-needed.js");
/* harmony import */ var _map_object__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./map-object */ "./node_modules/radium/es/map-object.js");


function appendImportantToEachValue(style) {
  return (0,_map_object__WEBPACK_IMPORTED_MODULE_0__["default"])(style, function (result, key) {
    return (0,_append_px_if_needed__WEBPACK_IMPORTED_MODULE_1__["default"])(key, style[key]) + ' !important';
  });
}

/***/ }),

/***/ "./node_modules/radium/es/append-px-if-needed.js":
/*!*******************************************************!*\
  !*** ./node_modules/radium/es/append-px-if-needed.js ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ appendPxIfNeeded; }
/* harmony export */ });
// Copied from https://github.com/facebook/react/blob/
// b87aabdfe1b7461e7331abb3601d9e6bb27544bc/
// packages/react-dom/src/shared/CSSProperty.js
var isUnitlessNumber = {
  animationIterationCount: true,
  borderImageOutset: true,
  borderImageSlice: true,
  borderImageWidth: true,
  boxFlex: true,
  boxFlexGroup: true,
  boxOrdinalGroup: true,
  columnCount: true,
  columns: true,
  flex: true,
  flexGrow: true,
  flexPositive: true,
  flexShrink: true,
  flexNegative: true,
  flexOrder: true,
  gridArea: true,
  gridRow: true,
  gridRowEnd: true,
  gridRowSpan: true,
  gridRowStart: true,
  gridColumn: true,
  gridColumnEnd: true,
  gridColumnSpan: true,
  gridColumnStart: true,
  fontWeight: true,
  lineClamp: true,
  lineHeight: true,
  opacity: true,
  order: true,
  orphans: true,
  tabSize: true,
  widows: true,
  zIndex: true,
  zoom: true,
  // SVG-related properties
  fillOpacity: true,
  floodOpacity: true,
  stopOpacity: true,
  strokeDasharray: true,
  strokeDashoffset: true,
  strokeMiterlimit: true,
  strokeOpacity: true,
  strokeWidth: true
};
function appendPxIfNeeded(propertyName, value) {
  var needsPxSuffix = !isUnitlessNumber[propertyName] && typeof value === 'number' && value !== 0;
  return needsPxSuffix ? value + 'px' : value;
}

/***/ }),

/***/ "./node_modules/radium/es/camel-case-props-to-dash-case.js":
/*!*****************************************************************!*\
  !*** ./node_modules/radium/es/camel-case-props-to-dash-case.js ***!
  \*****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "camelCaseToDashCase": function() { return /* binding */ camelCaseToDashCase; }
/* harmony export */ });
var _camelCaseRegex = /([a-z])?([A-Z])/g;

var _camelCaseReplacer = function _camelCaseReplacer(match, p1, p2) {
  return (p1 || '') + '-' + p2.toLowerCase();
};

var camelCaseToDashCase = function camelCaseToDashCase(s) {
  return s.replace(_camelCaseRegex, _camelCaseReplacer);
};

var camelCasePropsToDashCase = function camelCasePropsToDashCase(prefixedStyle) {
  // Since prefix is expected to work on inline style objects, we must
  // translate the keys to dash case for rendering to CSS.
  return Object.keys(prefixedStyle).reduce(function (result, key) {
    var dashCaseKey = camelCaseToDashCase(key); // Fix IE vendor prefix

    if (/^ms-/.test(dashCaseKey)) {
      dashCaseKey = "-".concat(dashCaseKey);
    }

    result[dashCaseKey] = prefixedStyle[key];
    return result;
  }, {});
};

/* harmony default export */ __webpack_exports__["default"] = (camelCasePropsToDashCase);

/***/ }),

/***/ "./node_modules/radium/es/clean-state-key.js":
/*!***************************************************!*\
  !*** ./node_modules/radium/es/clean-state-key.js ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* flow */
var cleanStateKey = function cleanStateKey(key) {
  return key === null || typeof key === 'undefined' ? 'main' : key.toString();
};

/* harmony default export */ __webpack_exports__["default"] = (cleanStateKey);

/***/ }),

/***/ "./node_modules/radium/es/components/style-root.js":
/*!*********************************************************!*\
  !*** ./node_modules/radium/es/components/style-root.js ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _enhancer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../enhancer */ "./node_modules/radium/es/enhancer.js");
/* harmony import */ var _style_keeper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../style-keeper */ "./node_modules/radium/es/style-keeper.js");
/* harmony import */ var _style_sheet__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./style-sheet */ "./node_modules/radium/es/components/style-sheet.js");
/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../context */ "./node_modules/radium/es/context.js");
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }







function getStyleKeeper(configProp, configContext) {
  var userAgent = configProp && configProp.userAgent || configContext && configContext.userAgent;
  return new _style_keeper__WEBPACK_IMPORTED_MODULE_1__["default"](userAgent);
}

var StyleRootInner = (0,_enhancer__WEBPACK_IMPORTED_MODULE_2__["default"])(function (_ref) {
  var children = _ref.children,
      otherProps = _objectWithoutProperties(_ref, ["children"]);

  return react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", otherProps, children, react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_style_sheet__WEBPACK_IMPORTED_MODULE_3__["default"], null));
});

var StyleRoot = function StyleRoot(props) {
  /* eslint-disable no-unused-vars */
  // Pass down all props except config to the rendered div.

  /* eslint-enable no-unused-vars */
  var radiumConfig = props.radiumConfig;
  var configContext = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_context__WEBPACK_IMPORTED_MODULE_4__.RadiumConfigContext);
  var styleKeeper = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(getStyleKeeper(radiumConfig, configContext));
  return react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_context__WEBPACK_IMPORTED_MODULE_4__.StyleKeeperContext.Provider, {
    value: styleKeeper.current
  }, react__WEBPACK_IMPORTED_MODULE_0___default().createElement(StyleRootInner, props));
};

/* harmony default export */ __webpack_exports__["default"] = (StyleRoot);

/***/ }),

/***/ "./node_modules/radium/es/components/style-sheet.js":
/*!**********************************************************!*\
  !*** ./node_modules/radium/es/components/style-sheet.js ***!
  \**********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../context */ "./node_modules/radium/es/context.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }





var StyleSheet =
/*#__PURE__*/
function (_Component) {
  _inherits(StyleSheet, _Component);

  // eslint-disable-next-line react/sort-comp
  function StyleSheet() {
    var _this;

    _classCallCheck(this, StyleSheet);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(StyleSheet).apply(this, arguments));
    _this.styleKeeper = void 0;
    _this._subscription = void 0;
    _this._root = void 0;
    _this._css = void 0;

    _this._onChange = function () {
      var nextCSS = _this.styleKeeper.getCSS();

      if (nextCSS !== _this._css) {
        if (_this._root) {
          _this._root.innerHTML = nextCSS;
        } else {
          throw new Error('No root style object found, even after StyleSheet mount.');
        }

        _this._css = nextCSS;
      }
    };

    if (!_this.props.styleKeeperContext) {
      throw new Error('StyleRoot is required to use StyleSheet');
    }

    _this.styleKeeper = _this.props.styleKeeperContext;
    _this._css = _this.styleKeeper.getCSS();
    return _this;
  }

  _createClass(StyleSheet, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this._subscription = this.styleKeeper.subscribe(this._onChange);

      this._onChange();
    }
  }, {
    key: "shouldComponentUpdate",
    value: function shouldComponentUpdate() {
      return false;
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      if (this._subscription) {
        this._subscription.remove();
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      return react__WEBPACK_IMPORTED_MODULE_0___default().createElement("style", {
        dangerouslySetInnerHTML: {
          __html: this._css
        },
        ref: function ref(c) {
          _this2._root = c;
        }
      });
    }
  }]);

  return StyleSheet;
}(react__WEBPACK_IMPORTED_MODULE_0__.Component);

/* harmony default export */ __webpack_exports__["default"] = ((0,_context__WEBPACK_IMPORTED_MODULE_1__.withRadiumContexts)(StyleSheet));

/***/ }),

/***/ "./node_modules/radium/es/components/style.js":
/*!****************************************************!*\
  !*** ./node_modules/radium/es/components/style.js ***!
  \****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _css_rule_set_to_string__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../css-rule-set-to-string */ "./node_modules/radium/es/css-rule-set-to-string.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../context */ "./node_modules/radium/es/context.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }






var Style =
/*#__PURE__*/
function (_PureComponent) {
  _inherits(Style, _PureComponent);

  function Style() {
    _classCallCheck(this, Style);

    return _possibleConstructorReturn(this, _getPrototypeOf(Style).apply(this, arguments));
  }

  _createClass(Style, [{
    key: "_buildStyles",
    value: function _buildStyles(styles) {
      var _this = this;

      var userAgent = this.props.radiumConfig && this.props.radiumConfig.userAgent || this.props.radiumConfigContext && this.props.radiumConfigContext.userAgent;
      var scopeSelector = this.props.scopeSelector;
      var rootRules = Object.keys(styles).reduce(function (accumulator, selector) {
        if (_typeof(styles[selector]) !== 'object') {
          accumulator[selector] = styles[selector];
        }

        return accumulator;
      }, {});
      var rootStyles = Object.keys(rootRules).length ? (0,_css_rule_set_to_string__WEBPACK_IMPORTED_MODULE_1__["default"])(scopeSelector || '', rootRules, userAgent) : '';
      return rootStyles + Object.keys(styles).reduce(function (accumulator, selector) {
        var rules = styles[selector];

        if (selector === 'mediaQueries') {
          accumulator += _this._buildMediaQueryString(rules);
        } else if (_typeof(styles[selector]) === 'object') {
          var completeSelector = scopeSelector ? selector.split(',').map(function (part) {
            return scopeSelector + ' ' + part.trim();
          }).join(',') : selector;
          accumulator += (0,_css_rule_set_to_string__WEBPACK_IMPORTED_MODULE_1__["default"])(completeSelector, rules, userAgent);
        }

        return accumulator;
      }, '');
    }
  }, {
    key: "_buildMediaQueryString",
    value: function _buildMediaQueryString(stylesByMediaQuery) {
      var _this2 = this;

      var mediaQueryString = '';
      Object.keys(stylesByMediaQuery).forEach(function (query) {
        mediaQueryString += '@media ' + query + '{' + _this2._buildStyles(stylesByMediaQuery[query]) + '}';
      });
      return mediaQueryString;
    }
  }, {
    key: "render",
    value: function render() {
      if (!this.props.rules) {
        return null;
      }

      var styles = this._buildStyles(this.props.rules);

      return react__WEBPACK_IMPORTED_MODULE_0___default().createElement("style", {
        dangerouslySetInnerHTML: {
          __html: styles
        }
      });
    }
  }]);

  return Style;
}(react__WEBPACK_IMPORTED_MODULE_0__.PureComponent);

Style.propTypes = {
  radiumConfig: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().object),
  rules: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().object),
  scopeSelector: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string)
};
Style.defaultProps = {
  scopeSelector: ''
};
/* harmony default export */ __webpack_exports__["default"] = ((0,_context__WEBPACK_IMPORTED_MODULE_3__.withRadiumContexts)(Style));

/***/ }),

/***/ "./node_modules/radium/es/context.js":
/*!*******************************************!*\
  !*** ./node_modules/radium/es/context.js ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StyleKeeperContext": function() { return /* binding */ StyleKeeperContext; },
/* harmony export */   "RadiumConfigContext": function() { return /* binding */ RadiumConfigContext; },
/* harmony export */   "withRadiumContexts": function() { return /* binding */ withRadiumContexts; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! hoist-non-react-statics */ "./node_modules/radium/node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js");
/* harmony import */ var hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_1__);
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }




var StyleKeeperContext = react__WEBPACK_IMPORTED_MODULE_0___default().createContext(undefined);
var RadiumConfigContext = react__WEBPACK_IMPORTED_MODULE_0___default().createContext(undefined);
function withRadiumContexts(WrappedComponent) {
  var WithRadiumContexts = react__WEBPACK_IMPORTED_MODULE_0___default().forwardRef(function (props, ref) {
    var radiumConfigContext = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(RadiumConfigContext);
    var styleKeeperContext = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(StyleKeeperContext);
    return react__WEBPACK_IMPORTED_MODULE_0___default().createElement(WrappedComponent, _extends({
      ref: ref
    }, props, {
      radiumConfigContext: radiumConfigContext,
      styleKeeperContext: styleKeeperContext
    }));
  });
  WithRadiumContexts.displayName = "withRadiumContexts(".concat(WrappedComponent.displayName || WrappedComponent.name || 'Component', ")");
  return hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_1___default()(WithRadiumContexts, WrappedComponent);
}

/***/ }),

/***/ "./node_modules/radium/es/css-rule-set-to-string.js":
/*!**********************************************************!*\
  !*** ./node_modules/radium/es/css-rule-set-to-string.js ***!
  \**********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ cssRuleSetToString; }
/* harmony export */ });
/* harmony import */ var _append_px_if_needed__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./append-px-if-needed */ "./node_modules/radium/es/append-px-if-needed.js");
/* harmony import */ var _camel_case_props_to_dash_case__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./camel-case-props-to-dash-case */ "./node_modules/radium/es/camel-case-props-to-dash-case.js");
/* harmony import */ var _map_object__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./map-object */ "./node_modules/radium/es/map-object.js");
/* harmony import */ var _prefixer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./prefixer */ "./node_modules/radium/es/prefixer.js");





function createMarkupForStyles(style) {
  return Object.keys(style).map(function (property) {
    return property + ': ' + style[property] + ';';
  }).join('\n');
}

function cssRuleSetToString(selector, rules, userAgent) {
  if (!rules) {
    return '';
  }

  var rulesWithPx = (0,_map_object__WEBPACK_IMPORTED_MODULE_0__["default"])(rules, function (value, key) {
    return (0,_append_px_if_needed__WEBPACK_IMPORTED_MODULE_1__["default"])(key, value);
  });
  var prefixedRules = (0,_prefixer__WEBPACK_IMPORTED_MODULE_2__.getPrefixedStyle)(rulesWithPx, userAgent);
  var cssPrefixedRules = (0,_camel_case_props_to_dash_case__WEBPACK_IMPORTED_MODULE_3__["default"])(prefixedRules);
  var serializedRules = createMarkupForStyles(cssPrefixedRules);
  return selector + '{' + serializedRules + '}';
}

/***/ }),

/***/ "./node_modules/radium/es/enhancer.js":
/*!********************************************!*\
  !*** ./node_modules/radium/es/enhancer.js ***!
  \********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ enhanceWithRadium; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! hoist-non-react-statics */ "./node_modules/radium/node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js");
/* harmony import */ var hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _resolve_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./resolve-styles */ "./node_modules/radium/es/resolve-styles.js");
/* harmony import */ var _get_radium_style_state__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./get-radium-style-state */ "./node_modules/radium/es/get-radium-style-state.js");
/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./context */ "./node_modules/radium/es/context.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }

function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }








var KEYS_TO_IGNORE_WHEN_COPYING_PROPERTIES = ['arguments', 'callee', 'caller', 'length', 'name', 'prototype', 'type'];
var RADIUM_PROTO;
var RADIUM_METHODS;

function copyProperties(source, target) {
  Object.getOwnPropertyNames(source).forEach(function (key) {
    if (KEYS_TO_IGNORE_WHEN_COPYING_PROPERTIES.indexOf(key) < 0 && !target.hasOwnProperty(key)) {
      var descriptor = Object.getOwnPropertyDescriptor(source, key);
      descriptor && Object.defineProperty(target, key, descriptor);
    }
  });
} // Handle scenarios of:
// - Inherit from `React.Component` in any fashion
//   See: https://github.com/FormidableLabs/radium/issues/738
// - There's an explicit `render` field defined


function isStateless(component) {
  var proto = component.prototype || {};
  return !component.isReactComponent && !proto.isReactComponent && !component.render && !proto.render;
} // Check if value is a real ES class in Native / Node code.
// See: https://stackoverflow.com/a/30760236


function isNativeClass(component) {
  return typeof component === 'function' && /^\s*class\s+/.test(component.toString());
} // Handle es7 arrow functions on React class method names by detecting
// and transfering the instance method to original class prototype.
// (Using a copy of the class).
// See: https://github.com/FormidableLabs/radium/issues/738


function copyArrowFuncs(enhancedSelf, ComposedComponent) {
  RADIUM_METHODS.forEach(function (name) {
    var thisDesc = Object.getOwnPropertyDescriptor(enhancedSelf, name);
    var thisMethod = (thisDesc || {}).value; // Only care if have instance method.

    if (!thisMethod) {
      return;
    }

    var radiumDesc = Object.getOwnPropertyDescriptor(RADIUM_PROTO, name);
    var radiumProtoMethod = (radiumDesc || {}).value;
    var superProtoMethod = ComposedComponent.prototype[name]; // Allow transfer when:
    // 1. have an instance method
    // 2. the super class prototype doesn't have any method
    // 3. it is not already the radium prototype's

    if (!superProtoMethod && thisMethod !== radiumProtoMethod) {
      // Transfer dynamic render component to Component prototype (copy).
      thisDesc && Object.defineProperty(ComposedComponent.prototype, name, thisDesc); // Remove instance property, leaving us to have a contrived
      // inheritance chain of (1) radium, (2) superclass.

      delete enhancedSelf[name];
    }
  });
}

function trimRadiumState(enhancer) {
  if (enhancer._extraRadiumStateKeys && enhancer._extraRadiumStateKeys.length > 0) {
    var trimmedRadiumState = enhancer._extraRadiumStateKeys.reduce(function (state, key) {
      // eslint-disable-next-line no-unused-vars
      var extraStateKey = state[key],
          remainingState = _objectWithoutProperties(state, [key].map(_toPropertyKey));

      return remainingState;
    }, (0,_get_radium_style_state__WEBPACK_IMPORTED_MODULE_2__["default"])(enhancer));

    enhancer._lastRadiumState = trimmedRadiumState;
    enhancer.setState({
      _radiumStyleState: trimmedRadiumState
    });
  }
}

function cleanUpEnhancer(enhancer) {
  var _radiumMouseUpListener = enhancer._radiumMouseUpListener,
      _radiumMediaQueryListenersByQuery = enhancer._radiumMediaQueryListenersByQuery;
  enhancer._radiumIsMounted = false;

  if (_radiumMouseUpListener) {
    _radiumMouseUpListener.remove();
  }

  if (_radiumMediaQueryListenersByQuery) {
    Object.keys(_radiumMediaQueryListenersByQuery).forEach(function (query) {
      _radiumMediaQueryListenersByQuery[query].remove();
    }, enhancer);
  }
}

function resolveConfig(propConfig, contextConfig, hocConfig) {
  var config = propConfig || contextConfig || hocConfig;

  if (hocConfig && config !== hocConfig) {
    config = _objectSpread({}, hocConfig, config);
  }

  return config;
}

function renderRadiumComponent(enhancer, renderedElement, resolvedConfig, propConfig) {
  var _resolveStyles = (0,_resolve_styles__WEBPACK_IMPORTED_MODULE_3__["default"])(enhancer, renderedElement, resolvedConfig),
      extraStateKeyMap = _resolveStyles.extraStateKeyMap,
      element = _resolveStyles.element;

  enhancer._extraRadiumStateKeys = Object.keys(extraStateKeyMap);

  if (propConfig) {
    return react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_context__WEBPACK_IMPORTED_MODULE_4__.RadiumConfigContext.Provider, {
      value: propConfig
    }, element);
  }

  return element;
}

function createEnhancedFunctionComponent(origComponent, config) {
  var RadiumEnhancer = react__WEBPACK_IMPORTED_MODULE_0___default().forwardRef(function (props, ref) {
    var radiumConfig = props.radiumConfig,
        otherProps = _objectWithoutProperties(props, ["radiumConfig"]);

    var radiumConfigContext = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_context__WEBPACK_IMPORTED_MODULE_4__.RadiumConfigContext);
    var styleKeeperContext = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_context__WEBPACK_IMPORTED_MODULE_4__.StyleKeeperContext);

    var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({
      _radiumStyleState: {}
    }),
        _useState2 = _slicedToArray(_useState, 2),
        state = _useState2[0],
        setState = _useState2[1];

    var enhancerApi = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)({
      state: state,
      setState: setState,
      _radiumMediaQueryListenersByQuery: undefined,
      _radiumMouseUpListener: undefined,
      _radiumIsMounted: true,
      _lastRadiumState: undefined,
      _extraRadiumStateKeys: undefined,
      _radiumStyleKeeper: styleKeeperContext
    }).current; // result of useRef is never recreated and is designed to be mutable
    // we need to make sure the latest state is attached to it

    enhancerApi.state = state;
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
      return function () {
        cleanUpEnhancer(enhancerApi);
      };
    }, [enhancerApi]);
    var hasExtraStateKeys = enhancerApi._extraRadiumStateKeys && enhancerApi._extraRadiumStateKeys.length > 0;
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
      trimRadiumState(enhancerApi);
    }, [hasExtraStateKeys, enhancerApi]);
    var renderedElement = origComponent(otherProps, ref);
    var currentConfig = resolveConfig(radiumConfig, radiumConfigContext, config);
    return renderRadiumComponent(enhancerApi, renderedElement, currentConfig, radiumConfig);
  });
  RadiumEnhancer._isRadiumEnhanced = true;
  RadiumEnhancer.defaultProps = origComponent.defaultProps;
  return hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_1___default()(RadiumEnhancer, origComponent);
}

function createEnhancedClassComponent(origComponent, ComposedComponent, config) {
  var RadiumEnhancer =
  /*#__PURE__*/
  function (_ComposedComponent) {
    _inherits(RadiumEnhancer, _ComposedComponent);

    // need to attempt to assign to this.state in case
    // super component is setting state on construction,
    // otherwise class properties reinitialize to undefined
    // need to assign the following methods to this.xxx as
    // tests attempt to set this on the original component
    function RadiumEnhancer() {
      var _this;

      _classCallCheck(this, RadiumEnhancer);

      _this = _possibleConstructorReturn(this, _getPrototypeOf(RadiumEnhancer).apply(this, arguments));
      _this.state = _this.state || {};
      _this._radiumStyleKeeper = _this.props.styleKeeperContext;
      _this._radiumMediaQueryListenersByQuery = _this._radiumMediaQueryListenersByQuery;
      _this._radiumMouseUpListener = _this._radiumMouseUpListener;
      _this._radiumIsMounted = true;
      _this._lastRadiumState = void 0;
      _this._extraRadiumStateKeys = void 0;
      _this.state._radiumStyleState = {};

      var self = _assertThisInitialized(_this); // Handle es7 arrow functions on React class method


      copyArrowFuncs(self, ComposedComponent);
      return _this;
    }

    _createClass(RadiumEnhancer, [{
      key: "componentDidUpdate",
      value: function componentDidUpdate(prevProps, prevState, snapshot) {
        if (_get(_getPrototypeOf(RadiumEnhancer.prototype), "componentDidUpdate", this)) {
          _get(_getPrototypeOf(RadiumEnhancer.prototype), "componentDidUpdate", this).call(this, prevProps, prevState, snapshot);
        }

        trimRadiumState(this);
      }
    }, {
      key: "componentWillUnmount",
      value: function componentWillUnmount() {
        if (_get(_getPrototypeOf(RadiumEnhancer.prototype), "componentWillUnmount", this)) {
          _get(_getPrototypeOf(RadiumEnhancer.prototype), "componentWillUnmount", this).call(this);
        }

        cleanUpEnhancer(this);
      }
    }, {
      key: "render",
      value: function render() {
        var renderedElement = _get(_getPrototypeOf(RadiumEnhancer.prototype), "render", this).call(this);

        var currentConfig = resolveConfig(this.props.radiumConfig, this.props.radiumConfigContext, config);
        return renderRadiumComponent(this, renderedElement, currentConfig, this.props.radiumConfig);
      }
    }]);

    return RadiumEnhancer;
  }(ComposedComponent); // Lazy infer the method names of the Enhancer.


  RadiumEnhancer._isRadiumEnhanced = true;
  RADIUM_PROTO = RadiumEnhancer.prototype;
  RADIUM_METHODS = Object.getOwnPropertyNames(RADIUM_PROTO).filter(function (n) {
    return n !== 'constructor' && typeof RADIUM_PROTO[n] === 'function';
  }); // Class inheritance uses Object.create and because of __proto__ issues
  // with IE <10 any static properties of the superclass aren't inherited and
  // so need to be manually populated.
  // See http://babeljs.io/docs/advanced/caveats/#classes-10-and-below-

  copyProperties(origComponent, RadiumEnhancer);

  if (true) {
    // This also fixes React Hot Loader by exposing the original components top
    // level prototype methods on the Radium enhanced prototype as discussed in
    // https://github.com/FormidableLabs/radium/issues/219.
    copyProperties(ComposedComponent.prototype, RadiumEnhancer.prototype);
  } // add Radium propTypes to enhanced component's propTypes


  if (RadiumEnhancer.propTypes && RadiumEnhancer.propTypes.style) {
    RadiumEnhancer.propTypes = _objectSpread({}, RadiumEnhancer.propTypes, {
      style: prop_types__WEBPACK_IMPORTED_MODULE_5___default().oneOfType([(prop_types__WEBPACK_IMPORTED_MODULE_5___default().array), (prop_types__WEBPACK_IMPORTED_MODULE_5___default().object)])
    });
  } // copy display name to enhanced component


  RadiumEnhancer.displayName = origComponent.displayName || origComponent.name || 'Component';
  return (0,_context__WEBPACK_IMPORTED_MODULE_4__.withRadiumContexts)(RadiumEnhancer);
}

function createComposedFromNativeClass(ComposedComponent) {
  ComposedComponent = function (OrigComponent) {
    function NewComponent() {
      // Use Reflect.construct to simulate 'new'
      var obj = Reflect.construct(OrigComponent, arguments, this.constructor);
      return obj;
    } // $FlowFixMe


    Reflect.setPrototypeOf(NewComponent.prototype, OrigComponent.prototype); // $FlowFixMe

    Reflect.setPrototypeOf(NewComponent, OrigComponent);
    return NewComponent;
  }(ComposedComponent);

  return ComposedComponent;
}

var ReactForwardRefSymbol = (0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(function () {
  return null;
}).$$typeof;
function enhanceWithRadium(configOrComposedComponent) {
  var config = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  if (ReactForwardRefSymbol && configOrComposedComponent.$$typeof === ReactForwardRefSymbol) {
    return createEnhancedFunctionComponent(configOrComposedComponent.render, config);
  }

  if (typeof configOrComposedComponent !== 'function') {
    return createFactoryFromConfig(config, configOrComposedComponent);
  }

  var origComponent = configOrComposedComponent; // Handle stateless components

  if (isStateless(origComponent)) {
    return createEnhancedFunctionComponent(origComponent, config);
  }

  var _ComposedComponent2 = origComponent; // Radium is transpiled in npm, so it isn't really using es6 classes at
  // runtime.  However, the user of Radium might be.  In this case we have
  // to maintain forward compatibility with native es classes.

  if (isNativeClass(_ComposedComponent2)) {
    _ComposedComponent2 = createComposedFromNativeClass(_ComposedComponent2);
  } // Shallow copy composed if still original (we may mutate later).


  if (_ComposedComponent2 === origComponent) {
    _ComposedComponent2 =
    /*#__PURE__*/
    function (_ComposedComponent3) {
      _inherits(ComposedComponent, _ComposedComponent3);

      function ComposedComponent() {
        _classCallCheck(this, ComposedComponent);

        return _possibleConstructorReturn(this, _getPrototypeOf(ComposedComponent).apply(this, arguments));
      }

      return ComposedComponent;
    }(_ComposedComponent2);
  }

  return createEnhancedClassComponent(origComponent, _ComposedComponent2, config);
}

function createFactoryFromConfig(config, configOrComposedComponent) {
  var newConfig = _objectSpread({}, config, configOrComposedComponent);

  return function (configOrComponent) {
    return enhanceWithRadium(configOrComponent, newConfig);
  };
}

/***/ }),

/***/ "./node_modules/radium/es/get-radium-style-state.js":
/*!**********************************************************!*\
  !*** ./node_modules/radium/es/get-radium-style-state.js ***!
  \**********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var getRadiumStyleState = function getRadiumStyleState(component) {
  return component._lastRadiumState || component.state && component.state._radiumStyleState || {};
};

/* harmony default export */ __webpack_exports__["default"] = (getRadiumStyleState);

/***/ }),

/***/ "./node_modules/radium/es/get-state-key.js":
/*!*************************************************!*\
  !*** ./node_modules/radium/es/get-state-key.js ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var getStateKey = function getStateKey(renderedElement) {
  return typeof renderedElement.ref === 'string' ? renderedElement.ref : renderedElement.key;
};

/* harmony default export */ __webpack_exports__["default"] = (getStateKey);

/***/ }),

/***/ "./node_modules/radium/es/get-state.js":
/*!*********************************************!*\
  !*** ./node_modules/radium/es/get-state.js ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _clean_state_key__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./clean-state-key */ "./node_modules/radium/es/clean-state-key.js");


var getState = function getState(state, elementKey, value) {
  var key = (0,_clean_state_key__WEBPACK_IMPORTED_MODULE_0__["default"])(elementKey);
  return !!state && !!state._radiumStyleState && !!state._radiumStyleState[key] && state._radiumStyleState[key][value];
};

/* harmony default export */ __webpack_exports__["default"] = (getState);

/***/ }),

/***/ "./node_modules/radium/es/hash.js":
/*!****************************************!*\
  !*** ./node_modules/radium/es/hash.js ***!
  \****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ hash; }
/* harmony export */ });
// a simple djb2 hash based on hash-string:
// https://github.com/MatthewBarker/hash-string/blob/master/source/hash-string.js
// returns a hex-encoded hash
function hash(text) {
  if (!text) {
    return '';
  }

  var hashValue = 5381;
  var index = text.length - 1;

  while (index) {
    hashValue = hashValue * 33 ^ text.charCodeAt(index);
    index -= 1;
  }

  return (hashValue >>> 0).toString(16);
}

/***/ }),

/***/ "./node_modules/radium/es/index.js":
/*!*****************************************!*\
  !*** ./node_modules/radium/es/index.js ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Plugins": function() { return /* reexport safe */ _plugins__WEBPACK_IMPORTED_MODULE_1__["default"]; },
/* harmony export */   "Style": function() { return /* reexport safe */ _components_style__WEBPACK_IMPORTED_MODULE_2__["default"]; },
/* harmony export */   "StyleRoot": function() { return /* reexport safe */ _components_style_root__WEBPACK_IMPORTED_MODULE_3__["default"]; },
/* harmony export */   "getState": function() { return /* reexport safe */ _get_state__WEBPACK_IMPORTED_MODULE_4__["default"]; },
/* harmony export */   "keyframes": function() { return /* reexport safe */ _keyframes__WEBPACK_IMPORTED_MODULE_5__["default"]; }
/* harmony export */ });
/* harmony import */ var _enhancer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./enhancer */ "./node_modules/radium/es/enhancer.js");
/* harmony import */ var _plugins__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./plugins */ "./node_modules/radium/es/plugins/index.js");
/* harmony import */ var _components_style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/style */ "./node_modules/radium/es/components/style.js");
/* harmony import */ var _components_style_root__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/style-root */ "./node_modules/radium/es/components/style-root.js");
/* harmony import */ var _get_state__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./get-state */ "./node_modules/radium/es/get-state.js");
/* harmony import */ var _keyframes__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./keyframes */ "./node_modules/radium/es/keyframes.js");
/* harmony import */ var _resolve_styles__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./resolve-styles */ "./node_modules/radium/es/resolve-styles.js");








function Radium(ComposedComponent) {
  return (0,_enhancer__WEBPACK_IMPORTED_MODULE_0__["default"])(ComposedComponent);
} // Legacy object support.
//
// Normally it would be disfavored to attach these to the `Radium` object
// because it defeats tree-shaking, using instead the ESM exports. But,
// the `Radium` `Enhancer` uses **all** of these, so there's no extra "cost"
// to them being explicitly on the `Radium` object.


Radium.Plugins = _plugins__WEBPACK_IMPORTED_MODULE_1__["default"];
Radium.Style = _components_style__WEBPACK_IMPORTED_MODULE_2__["default"];
Radium.StyleRoot = _components_style_root__WEBPACK_IMPORTED_MODULE_3__["default"];
Radium.getState = _get_state__WEBPACK_IMPORTED_MODULE_4__["default"];
Radium.keyframes = _keyframes__WEBPACK_IMPORTED_MODULE_5__["default"];

if (true) {
  Radium.TestMode = {
    clearState: _resolve_styles__WEBPACK_IMPORTED_MODULE_6__["default"].__clearStateForTests,
    disable: _resolve_styles__WEBPACK_IMPORTED_MODULE_6__["default"].__setTestMode.bind(null, false),
    enable: _resolve_styles__WEBPACK_IMPORTED_MODULE_6__["default"].__setTestMode.bind(null, true)
  };
}

/* harmony default export */ __webpack_exports__["default"] = (Radium); // ESM re-exports



/***/ }),

/***/ "./node_modules/radium/es/keyframes.js":
/*!*********************************************!*\
  !*** ./node_modules/radium/es/keyframes.js ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ keyframes; }
/* harmony export */ });
/* harmony import */ var _css_rule_set_to_string__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./css-rule-set-to-string */ "./node_modules/radium/es/css-rule-set-to-string.js");
/* harmony import */ var _hash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./hash */ "./node_modules/radium/es/hash.js");
/* harmony import */ var _prefixer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./prefixer */ "./node_modules/radium/es/prefixer.js");



function keyframes(keyframeRules, name) {
  return {
    __radiumKeyframes: true,
    __process: function __process(userAgent) {
      var keyframesPrefixed = (0,_prefixer__WEBPACK_IMPORTED_MODULE_0__.getPrefixedKeyframes)(userAgent);
      var rules = Object.keys(keyframeRules).map(function (percentage) {
        return (0,_css_rule_set_to_string__WEBPACK_IMPORTED_MODULE_1__["default"])(percentage, keyframeRules[percentage], userAgent);
      }).join('\n');
      var animationName = (name ? name + '-' : '') + 'radium-animation-' + (0,_hash__WEBPACK_IMPORTED_MODULE_2__["default"])(rules);
      var css = '@' + keyframesPrefixed + ' ' + animationName + ' {\n' + rules + '\n}\n';
      return {
        css: css,
        animationName: animationName
      };
    }
  };
}

/***/ }),

/***/ "./node_modules/radium/es/map-object.js":
/*!**********************************************!*\
  !*** ./node_modules/radium/es/map-object.js ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ mapObject; }
/* harmony export */ });
function mapObject(object, mapper) {
  return Object.keys(object).reduce(function (result, key) {
    result[key] = mapper(object[key], key);
    return result;
  }, {});
}

/***/ }),

/***/ "./node_modules/radium/es/merge-styles.js":
/*!************************************************!*\
  !*** ./node_modules/radium/es/merge-styles.js ***!
  \************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "isNestedStyle": function() { return /* binding */ isNestedStyle; },
/* harmony export */   "mergeStyles": function() { return /* binding */ mergeStyles; }
/* harmony export */ });
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function isNestedStyle(value) {
  // Don't merge objects overriding toString, since they should be converted
  // to string values.
  return value && value.constructor === Object && value.toString === Object.prototype.toString;
} // Merge style objects. Deep merge plain object values.

function mergeStyles(styles) {
  var result = {};
  styles.forEach(function (style) {
    if (!style || _typeof(style) !== 'object') {
      return;
    }

    if (Array.isArray(style)) {
      style = mergeStyles(style);
    }

    Object.keys(style).forEach(function (key) {
      // Simple case, nothing nested
      if (!isNestedStyle(style[key]) || !isNestedStyle(result[key])) {
        result[key] = style[key];
        return;
      } // If nested media, don't merge the nested styles, append a space to the
      // end (benign when converted to CSS). This way we don't end up merging
      // media queries that appear later in the chain with those that appear
      // earlier.


      if (key.indexOf('@media') === 0) {
        var newKey = key; // eslint-disable-next-line no-constant-condition

        while (true) {
          newKey += ' ';

          if (!result[newKey]) {
            result[newKey] = style[key];
            return;
          }
        }
      } // Merge all other nested styles recursively


      result[key] = mergeStyles([result[key], style[key]]);
    });
  });
  return result;
}

/***/ }),

/***/ "./node_modules/radium/es/plugins/check-props-plugin.js":
/*!**************************************************************!*\
  !*** ./node_modules/radium/es/plugins/check-props-plugin.js ***!
  \**************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var _checkProps = function checkProps() {};

if (true) {
  // Warn if you use longhand and shorthand properties in the same style
  // object.
  // https://developer.mozilla.org/en-US/docs/Web/CSS/Shorthand_properties
  var shorthandPropertyExpansions = {
    background: ['backgroundAttachment', 'backgroundBlendMode', 'backgroundClip', 'backgroundColor', 'backgroundImage', 'backgroundOrigin', 'backgroundPosition', 'backgroundPositionX', 'backgroundPositionY', 'backgroundRepeat', 'backgroundRepeatX', 'backgroundRepeatY', 'backgroundSize'],
    border: ['borderBottom', 'borderBottomColor', 'borderBottomStyle', 'borderBottomWidth', 'borderColor', 'borderLeft', 'borderLeftColor', 'borderLeftStyle', 'borderLeftWidth', 'borderRight', 'borderRightColor', 'borderRightStyle', 'borderRightWidth', 'borderStyle', 'borderTop', 'borderTopColor', 'borderTopStyle', 'borderTopWidth', 'borderWidth'],
    borderImage: ['borderImageOutset', 'borderImageRepeat', 'borderImageSlice', 'borderImageSource', 'borderImageWidth'],
    borderRadius: ['borderBottomLeftRadius', 'borderBottomRightRadius', 'borderTopLeftRadius', 'borderTopRightRadius'],
    font: ['fontFamily', 'fontKerning', 'fontSize', 'fontStretch', 'fontStyle', 'fontVariant', 'fontVariantLigatures', 'fontWeight', 'lineHeight'],
    listStyle: ['listStyleImage', 'listStylePosition', 'listStyleType'],
    margin: ['marginBottom', 'marginLeft', 'marginRight', 'marginTop'],
    padding: ['paddingBottom', 'paddingLeft', 'paddingRight', 'paddingTop'],
    transition: ['transitionDelay', 'transitionDuration', 'transitionProperty', 'transitionTimingFunction']
  };

  _checkProps = function checkProps(config) {
    var componentName = config.componentName,
        style = config.style;

    if (_typeof(style) !== 'object' || !style) {
      return;
    }

    var styleKeys = Object.keys(style);
    styleKeys.forEach(function (styleKey) {
      if (Array.isArray(shorthandPropertyExpansions[styleKey]) && shorthandPropertyExpansions[styleKey].some(function (sp) {
        return styleKeys.indexOf(sp) !== -1;
      })) {
        if (true) {
          /* eslint-disable no-console */
          console.warn('Radium: property "' + styleKey + '" in style object', style, ': do not mix longhand and ' + 'shorthand properties in the same style object. Check the render ' + 'method of ' + componentName + '.', 'See https://github.com/FormidableLabs/radium/issues/95 for more ' + 'information.');
          /* eslint-enable no-console */
        }
      }
    });
    styleKeys.forEach(function (k) {
      return _checkProps(_objectSpread({}, config, {
        style: style[k]
      }));
    });
    return;
  };
}

/* harmony default export */ __webpack_exports__["default"] = (_checkProps);

/***/ }),

/***/ "./node_modules/radium/es/plugins/index.js":
/*!*************************************************!*\
  !*** ./node_modules/radium/es/plugins/index.js ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _check_props_plugin__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./check-props-plugin */ "./node_modules/radium/es/plugins/check-props-plugin.js");
/* harmony import */ var _keyframes_plugin__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./keyframes-plugin */ "./node_modules/radium/es/plugins/keyframes-plugin.js");
/* harmony import */ var _merge_style_array_plugin__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./merge-style-array-plugin */ "./node_modules/radium/es/plugins/merge-style-array-plugin.js");
/* harmony import */ var _prefix_plugin__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./prefix-plugin */ "./node_modules/radium/es/plugins/prefix-plugin.js");
/* harmony import */ var _remove_nested_styles_plugin__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./remove-nested-styles-plugin */ "./node_modules/radium/es/plugins/remove-nested-styles-plugin.js");
/* harmony import */ var _resolve_interaction_styles_plugin__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./resolve-interaction-styles-plugin */ "./node_modules/radium/es/plugins/resolve-interaction-styles-plugin.js");
/* harmony import */ var _resolve_media_queries_plugin__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./resolve-media-queries-plugin */ "./node_modules/radium/es/plugins/resolve-media-queries-plugin.js");
/* harmony import */ var _visited_plugin__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./visited-plugin */ "./node_modules/radium/es/plugins/visited-plugin.js");
/* eslint-disable block-scoped-const */








/* harmony default export */ __webpack_exports__["default"] = ({
  checkProps: _check_props_plugin__WEBPACK_IMPORTED_MODULE_0__["default"],
  keyframes: _keyframes_plugin__WEBPACK_IMPORTED_MODULE_1__["default"],
  mergeStyleArray: _merge_style_array_plugin__WEBPACK_IMPORTED_MODULE_2__["default"],
  prefix: _prefix_plugin__WEBPACK_IMPORTED_MODULE_3__["default"],
  removeNestedStyles: _remove_nested_styles_plugin__WEBPACK_IMPORTED_MODULE_4__["default"],
  resolveInteractionStyles: _resolve_interaction_styles_plugin__WEBPACK_IMPORTED_MODULE_5__["default"],
  resolveMediaQueries: _resolve_media_queries_plugin__WEBPACK_IMPORTED_MODULE_6__["default"],
  visited: _visited_plugin__WEBPACK_IMPORTED_MODULE_7__["default"]
});

/***/ }),

/***/ "./node_modules/radium/es/plugins/keyframes-plugin.js":
/*!************************************************************!*\
  !*** ./node_modules/radium/es/plugins/keyframes-plugin.js ***!
  \************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ keyframesPlugin; }
/* harmony export */ });
function keyframesPlugin(_ref) {
  var addCSS = _ref.addCSS,
      config = _ref.config,
      style = _ref.style;

  var processKeyframeStyle = function processKeyframeStyle(value) {
    var keyframesValue = value;

    var _keyframesValue$__pro = keyframesValue.__process(config.userAgent),
        animationName = _keyframesValue$__pro.animationName,
        css = _keyframesValue$__pro.css;

    addCSS(css);
    return animationName;
  };

  var newStyle = Object.keys(style).reduce(function (newStyleInProgress, key) {
    var value = style[key];
    var isKeyframeArray = Array.isArray(value);

    if (key === 'animationName' && value && (value.__radiumKeyframes || isKeyframeArray)) {
      if (isKeyframeArray) {
        value = value.map(processKeyframeStyle).join(', ');
      } else {
        value = processKeyframeStyle(value);
      }
    }

    newStyleInProgress[key] = value;
    return newStyleInProgress;
  }, {});
  return {
    style: newStyle
  };
}

/***/ }),

/***/ "./node_modules/radium/es/plugins/merge-style-array-plugin.js":
/*!********************************************************************!*\
  !*** ./node_modules/radium/es/plugins/merge-style-array-plugin.js ***!
  \********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// Convenient syntax for multiple styles: `style={[style1, style2, etc]}`
// Ignores non-objects, so you can do `this.state.isCool && styles.cool`.
var mergeStyleArrayPlugin = function mergeStyleArrayPlugin(_ref) {
  var style = _ref.style,
      mergeStyles = _ref.mergeStyles;
  // eslint-disable-line no-shadow
  var newStyle = Array.isArray(style) ? mergeStyles(style) : style;
  return {
    style: newStyle
  };
};

/* harmony default export */ __webpack_exports__["default"] = (mergeStyleArrayPlugin);

/***/ }),

/***/ "./node_modules/radium/es/plugins/mouse-up-listener.js":
/*!*************************************************************!*\
  !*** ./node_modules/radium/es/plugins/mouse-up-listener.js ***!
  \*************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var _callbacks = [];
var _mouseUpListenerIsActive = false;

function _handleMouseUp() {
  _callbacks.forEach(function (callback) {
    callback();
  });
}

var subscribe = function subscribe(callback) {
  if (_callbacks.indexOf(callback) === -1) {
    _callbacks.push(callback);
  }

  if (!_mouseUpListenerIsActive) {
    window.addEventListener('mouseup', _handleMouseUp);
    _mouseUpListenerIsActive = true;
  }

  return {
    remove: function remove() {
      var index = _callbacks.indexOf(callback);

      _callbacks.splice(index, 1);

      if (_callbacks.length === 0 && _mouseUpListenerIsActive) {
        window.removeEventListener('mouseup', _handleMouseUp);
        _mouseUpListenerIsActive = false;
      }
    }
  };
};

/* harmony default export */ __webpack_exports__["default"] = ({
  subscribe: subscribe,
  __triggerForTests: _handleMouseUp
});

/***/ }),

/***/ "./node_modules/radium/es/plugins/prefix-plugin.js":
/*!*********************************************************!*\
  !*** ./node_modules/radium/es/plugins/prefix-plugin.js ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ prefixPlugin; }
/* harmony export */ });
/* harmony import */ var _prefixer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../prefixer */ "./node_modules/radium/es/prefixer.js");

function prefixPlugin(_ref) {
  var config = _ref.config,
      style = _ref.style;
  var newStyle = (0,_prefixer__WEBPACK_IMPORTED_MODULE_0__.getPrefixedStyle)(style, config.userAgent);
  return {
    style: newStyle
  };
}

/***/ }),

/***/ "./node_modules/radium/es/plugins/remove-nested-styles-plugin.js":
/*!***********************************************************************!*\
  !*** ./node_modules/radium/es/plugins/remove-nested-styles-plugin.js ***!
  \***********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ removeNestedStyles; }
/* harmony export */ });
function removeNestedStyles(_ref) {
  var isNestedStyle = _ref.isNestedStyle,
      style = _ref.style;
  // eslint-disable-line no-shadow
  var newStyle = Object.keys(style).reduce(function (newStyleInProgress, key) {
    var value = style[key];

    if (!isNestedStyle(value)) {
      newStyleInProgress[key] = value;
    }

    return newStyleInProgress;
  }, {});
  return {
    style: newStyle
  };
}

/***/ }),

/***/ "./node_modules/radium/es/plugins/resolve-interaction-styles-plugin.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/radium/es/plugins/resolve-interaction-styles-plugin.js ***!
  \*****************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _mouse_up_listener__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mouse-up-listener */ "./node_modules/radium/es/plugins/mouse-up-listener.js");


var _isInteractiveStyleField = function _isInteractiveStyleField(styleFieldName) {
  return styleFieldName === ':hover' || styleFieldName === ':active' || styleFieldName === ':focus';
};

var resolveInteractionStyles = function resolveInteractionStyles(config) {
  var ExecutionEnvironment = config.ExecutionEnvironment,
      getComponentField = config.getComponentField,
      getState = config.getState,
      mergeStyles = config.mergeStyles,
      props = config.props,
      setState = config.setState,
      style = config.style;
  var newComponentFields = {};
  var newProps = {}; // Only add handlers if necessary

  if (style[':hover']) {
    // Always call the existing handler if one is already defined.
    // This code, and the very similar ones below, could be abstracted a bit
    // more, but it hurts readability IMO.
    var existingOnMouseEnter = props.onMouseEnter;

    newProps.onMouseEnter = function (e) {
      existingOnMouseEnter && existingOnMouseEnter(e);
      setState(':hover', true);
    };

    var existingOnMouseLeave = props.onMouseLeave;

    newProps.onMouseLeave = function (e) {
      existingOnMouseLeave && existingOnMouseLeave(e);
      setState(':hover', false);
    };
  }

  if (style[':active']) {
    var existingOnMouseDown = props.onMouseDown;

    newProps.onMouseDown = function (e) {
      existingOnMouseDown && existingOnMouseDown(e);
      newComponentFields._lastMouseDown = Date.now();
      setState(':active', 'viamousedown');
    };

    var existingOnKeyDown = props.onKeyDown;

    newProps.onKeyDown = function (e) {
      existingOnKeyDown && existingOnKeyDown(e);

      if (e.key === ' ' || e.key === 'Enter') {
        setState(':active', 'viakeydown');
      }
    };

    var existingOnKeyUp = props.onKeyUp;

    newProps.onKeyUp = function (e) {
      existingOnKeyUp && existingOnKeyUp(e);

      if (e.key === ' ' || e.key === 'Enter') {
        setState(':active', false);
      }
    };
  }

  if (style[':focus']) {
    var existingOnFocus = props.onFocus;

    newProps.onFocus = function (e) {
      existingOnFocus && existingOnFocus(e);
      setState(':focus', true);
    };

    var existingOnBlur = props.onBlur;

    newProps.onBlur = function (e) {
      existingOnBlur && existingOnBlur(e);
      setState(':focus', false);
    };
  }

  if (style[':active'] && !getComponentField('_radiumMouseUpListener') && ExecutionEnvironment.canUseEventListeners) {
    newComponentFields._radiumMouseUpListener = _mouse_up_listener__WEBPACK_IMPORTED_MODULE_0__["default"].subscribe(function () {
      Object.keys(getComponentField('state')._radiumStyleState).forEach(function (key) {
        if (getState(':active', key) === 'viamousedown') {
          setState(':active', false, key);
        }
      });
    });
  } // Merge the styles in the order they were defined


  var interactionStyles = props.disabled ? [style[':disabled']] : Object.keys(style).filter(function (name) {
    return _isInteractiveStyleField(name) && getState(name);
  }).map(function (name) {
    return style[name];
  });
  var newStyle = mergeStyles([style].concat(interactionStyles)); // Remove interactive styles

  newStyle = Object.keys(newStyle).reduce(function (styleWithoutInteractions, name) {
    if (!_isInteractiveStyleField(name) && name !== ':disabled') {
      styleWithoutInteractions[name] = newStyle[name];
    }

    return styleWithoutInteractions;
  }, {});
  return {
    componentFields: newComponentFields,
    props: newProps,
    style: newStyle
  };
};

/* harmony default export */ __webpack_exports__["default"] = (resolveInteractionStyles);

/***/ }),

/***/ "./node_modules/radium/es/plugins/resolve-media-queries-plugin.js":
/*!************************************************************************!*\
  !*** ./node_modules/radium/es/plugins/resolve-media-queries-plugin.js ***!
  \************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ resolveMediaQueries; }
/* harmony export */ });
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var _windowMatchMedia;

function _getWindowMatchMedia(ExecutionEnvironment) {
  if (_windowMatchMedia === undefined) {
    _windowMatchMedia = !!ExecutionEnvironment.canUseDOM && !!window && !!window.matchMedia && function (mediaQueryString) {
      return window.matchMedia(mediaQueryString);
    } || null;
  }

  return _windowMatchMedia;
}

function _filterObject(obj, predicate) {
  return Object.keys(obj).filter(function (key) {
    return predicate(obj[key], key);
  }).reduce(function (result, key) {
    result[key] = obj[key];
    return result;
  }, {});
}

function _removeMediaQueries(style) {
  return Object.keys(style).reduce(function (styleWithoutMedia, key) {
    if (key.indexOf('@media') !== 0) {
      styleWithoutMedia[key] = style[key];
    }

    return styleWithoutMedia;
  }, {});
}

function _topLevelRulesToCSS(_ref) {
  var addCSS = _ref.addCSS,
      appendImportantToEachValue = _ref.appendImportantToEachValue,
      cssRuleSetToString = _ref.cssRuleSetToString,
      hash = _ref.hash,
      isNestedStyle = _ref.isNestedStyle,
      style = _ref.style,
      userAgent = _ref.userAgent;
  var className = '';
  Object.keys(style).filter(function (name) {
    return name.indexOf('@media') === 0;
  }).map(function (query) {
    var topLevelRules = appendImportantToEachValue(_filterObject(style[query], function (value) {
      return !isNestedStyle(value);
    }));

    if (!Object.keys(topLevelRules).length) {
      return;
    }

    var ruleCSS = cssRuleSetToString('', topLevelRules, userAgent); // CSS classes cannot start with a number

    var mediaQueryClassName = 'rmq-' + hash(query + ruleCSS);
    var css = query + '{ .' + mediaQueryClassName + ruleCSS + '}';
    addCSS(css);
    className += (className ? ' ' : '') + mediaQueryClassName;
  });
  return className;
}

function _subscribeToMediaQuery(_ref2) {
  var listener = _ref2.listener,
      listenersByQuery = _ref2.listenersByQuery,
      matchMedia = _ref2.matchMedia,
      mediaQueryListsByQuery = _ref2.mediaQueryListsByQuery,
      query = _ref2.query;
  query = query.replace('@media ', '');
  var mql = mediaQueryListsByQuery[query];

  if (!mql && matchMedia) {
    mediaQueryListsByQuery[query] = mql = matchMedia(query);
  }

  if (!listenersByQuery || !listenersByQuery[query]) {
    mql.addListener(listener);
    listenersByQuery[query] = {
      remove: function remove() {
        mql.removeListener(listener);
      }
    };
  }

  return mql;
}

function resolveMediaQueries(_ref3) {
  var ExecutionEnvironment = _ref3.ExecutionEnvironment,
      addCSS = _ref3.addCSS,
      appendImportantToEachValue = _ref3.appendImportantToEachValue,
      config = _ref3.config,
      cssRuleSetToString = _ref3.cssRuleSetToString,
      getComponentField = _ref3.getComponentField,
      getGlobalState = _ref3.getGlobalState,
      hash = _ref3.hash,
      isNestedStyle = _ref3.isNestedStyle,
      mergeStyles = _ref3.mergeStyles,
      props = _ref3.props,
      setState = _ref3.setState,
      style = _ref3.style;

  // eslint-disable-line no-shadow
  var newStyle = _removeMediaQueries(style);

  var mediaQueryClassNames = _topLevelRulesToCSS({
    addCSS: addCSS,
    appendImportantToEachValue: appendImportantToEachValue,
    cssRuleSetToString: cssRuleSetToString,
    hash: hash,
    isNestedStyle: isNestedStyle,
    style: style,
    userAgent: config.userAgent
  });

  var newProps = mediaQueryClassNames ? {
    className: mediaQueryClassNames + (props.className ? ' ' + props.className : '')
  } : null;

  var matchMedia = config.matchMedia || _getWindowMatchMedia(ExecutionEnvironment);

  if (!matchMedia) {
    return {
      props: newProps,
      style: newStyle
    };
  }

  var listenersByQuery = _objectSpread({}, getComponentField('_radiumMediaQueryListenersByQuery'));

  var mediaQueryListsByQuery = getGlobalState('mediaQueryListsByQuery') || {};
  Object.keys(style).filter(function (name) {
    return name.indexOf('@media') === 0;
  }).map(function (query) {
    var nestedRules = _filterObject(style[query], isNestedStyle);

    if (!Object.keys(nestedRules).length) {
      return;
    }

    var mql = _subscribeToMediaQuery({
      listener: function listener() {
        return setState(query, mql.matches, '_all');
      },
      listenersByQuery: listenersByQuery,
      matchMedia: matchMedia,
      mediaQueryListsByQuery: mediaQueryListsByQuery,
      query: query
    }); // Apply media query states


    if (mql.matches) {
      newStyle = mergeStyles([newStyle, nestedRules]);
    }
  });
  return {
    componentFields: {
      _radiumMediaQueryListenersByQuery: listenersByQuery
    },
    globalState: {
      mediaQueryListsByQuery: mediaQueryListsByQuery
    },
    props: newProps,
    style: newStyle
  };
}

/***/ }),

/***/ "./node_modules/radium/es/plugins/visited-plugin.js":
/*!**********************************************************!*\
  !*** ./node_modules/radium/es/plugins/visited-plugin.js ***!
  \**********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ visited; }
/* harmony export */ });
function visited(_ref) {
  var addCSS = _ref.addCSS,
      appendImportantToEachValue = _ref.appendImportantToEachValue,
      config = _ref.config,
      cssRuleSetToString = _ref.cssRuleSetToString,
      hash = _ref.hash,
      props = _ref.props,
      style = _ref.style;
  // eslint-disable-line no-shadow
  var className = props.className;
  var newStyle = Object.keys(style).reduce(function (newStyleInProgress, key) {
    var value = style[key];

    if (key === ':visited') {
      value = appendImportantToEachValue(value);
      var ruleCSS = cssRuleSetToString('', value, config.userAgent);
      var visitedClassName = 'rad-' + hash(ruleCSS);
      var css = '.' + visitedClassName + ':visited' + ruleCSS;
      addCSS(css);
      className = (className ? className + ' ' : '') + visitedClassName;
    } else {
      newStyleInProgress[key] = value;
    }

    return newStyleInProgress;
  }, {});
  return {
    props: className === props.className ? null : {
      className: className
    },
    style: newStyle
  };
}

/***/ }),

/***/ "./node_modules/radium/es/prefix-data/dynamic.js":
/*!*******************************************************!*\
  !*** ./node_modules/radium/es/prefix-data/dynamic.js ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var inline_style_prefixer_dynamic_plugins_calc__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! inline-style-prefixer/dynamic/plugins/calc */ "./node_modules/inline-style-prefixer/dynamic/plugins/calc.js");
/* harmony import */ var inline_style_prefixer_dynamic_plugins_calc__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(inline_style_prefixer_dynamic_plugins_calc__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var inline_style_prefixer_dynamic_plugins_crossFade__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! inline-style-prefixer/dynamic/plugins/crossFade */ "./node_modules/inline-style-prefixer/dynamic/plugins/crossFade.js");
/* harmony import */ var inline_style_prefixer_dynamic_plugins_crossFade__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(inline_style_prefixer_dynamic_plugins_crossFade__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var inline_style_prefixer_dynamic_plugins_cursor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! inline-style-prefixer/dynamic/plugins/cursor */ "./node_modules/inline-style-prefixer/dynamic/plugins/cursor.js");
/* harmony import */ var inline_style_prefixer_dynamic_plugins_cursor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(inline_style_prefixer_dynamic_plugins_cursor__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var inline_style_prefixer_dynamic_plugins_filter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! inline-style-prefixer/dynamic/plugins/filter */ "./node_modules/inline-style-prefixer/dynamic/plugins/filter.js");
/* harmony import */ var inline_style_prefixer_dynamic_plugins_filter__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(inline_style_prefixer_dynamic_plugins_filter__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var inline_style_prefixer_dynamic_plugins_flex__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! inline-style-prefixer/dynamic/plugins/flex */ "./node_modules/inline-style-prefixer/dynamic/plugins/flex.js");
/* harmony import */ var inline_style_prefixer_dynamic_plugins_flex__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(inline_style_prefixer_dynamic_plugins_flex__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var inline_style_prefixer_dynamic_plugins_flexboxIE__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! inline-style-prefixer/dynamic/plugins/flexboxIE */ "./node_modules/inline-style-prefixer/dynamic/plugins/flexboxIE.js");
/* harmony import */ var inline_style_prefixer_dynamic_plugins_flexboxIE__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(inline_style_prefixer_dynamic_plugins_flexboxIE__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var inline_style_prefixer_dynamic_plugins_flexboxOld__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! inline-style-prefixer/dynamic/plugins/flexboxOld */ "./node_modules/inline-style-prefixer/dynamic/plugins/flexboxOld.js");
/* harmony import */ var inline_style_prefixer_dynamic_plugins_flexboxOld__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(inline_style_prefixer_dynamic_plugins_flexboxOld__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var inline_style_prefixer_dynamic_plugins_gradient__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! inline-style-prefixer/dynamic/plugins/gradient */ "./node_modules/inline-style-prefixer/dynamic/plugins/gradient.js");
/* harmony import */ var inline_style_prefixer_dynamic_plugins_gradient__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(inline_style_prefixer_dynamic_plugins_gradient__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var inline_style_prefixer_dynamic_plugins_imageSet__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! inline-style-prefixer/dynamic/plugins/imageSet */ "./node_modules/inline-style-prefixer/dynamic/plugins/imageSet.js");
/* harmony import */ var inline_style_prefixer_dynamic_plugins_imageSet__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(inline_style_prefixer_dynamic_plugins_imageSet__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var inline_style_prefixer_dynamic_plugins_position__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! inline-style-prefixer/dynamic/plugins/position */ "./node_modules/inline-style-prefixer/dynamic/plugins/position.js");
/* harmony import */ var inline_style_prefixer_dynamic_plugins_position__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(inline_style_prefixer_dynamic_plugins_position__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var inline_style_prefixer_dynamic_plugins_sizing__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! inline-style-prefixer/dynamic/plugins/sizing */ "./node_modules/inline-style-prefixer/dynamic/plugins/sizing.js");
/* harmony import */ var inline_style_prefixer_dynamic_plugins_sizing__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(inline_style_prefixer_dynamic_plugins_sizing__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var inline_style_prefixer_dynamic_plugins_transition__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! inline-style-prefixer/dynamic/plugins/transition */ "./node_modules/inline-style-prefixer/dynamic/plugins/transition.js");
/* harmony import */ var inline_style_prefixer_dynamic_plugins_transition__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(inline_style_prefixer_dynamic_plugins_transition__WEBPACK_IMPORTED_MODULE_11__);












/* harmony default export */ __webpack_exports__["default"] = ({
  plugins: [(inline_style_prefixer_dynamic_plugins_calc__WEBPACK_IMPORTED_MODULE_0___default()), (inline_style_prefixer_dynamic_plugins_crossFade__WEBPACK_IMPORTED_MODULE_1___default()), (inline_style_prefixer_dynamic_plugins_cursor__WEBPACK_IMPORTED_MODULE_2___default()), (inline_style_prefixer_dynamic_plugins_filter__WEBPACK_IMPORTED_MODULE_3___default()), (inline_style_prefixer_dynamic_plugins_flex__WEBPACK_IMPORTED_MODULE_4___default()), (inline_style_prefixer_dynamic_plugins_flexboxIE__WEBPACK_IMPORTED_MODULE_5___default()), (inline_style_prefixer_dynamic_plugins_flexboxOld__WEBPACK_IMPORTED_MODULE_6___default()), (inline_style_prefixer_dynamic_plugins_gradient__WEBPACK_IMPORTED_MODULE_7___default()), (inline_style_prefixer_dynamic_plugins_imageSet__WEBPACK_IMPORTED_MODULE_8___default()), (inline_style_prefixer_dynamic_plugins_position__WEBPACK_IMPORTED_MODULE_9___default()), (inline_style_prefixer_dynamic_plugins_sizing__WEBPACK_IMPORTED_MODULE_10___default()), (inline_style_prefixer_dynamic_plugins_transition__WEBPACK_IMPORTED_MODULE_11___default())],
  prefixMap: {
    chrome: {
      transform: 35,
      transformOrigin: 35,
      transformOriginX: 35,
      transformOriginY: 35,
      backfaceVisibility: 35,
      perspective: 35,
      perspectiveOrigin: 35,
      transformStyle: 35,
      transformOriginZ: 35,
      animation: 42,
      animationDelay: 42,
      animationDirection: 42,
      animationFillMode: 42,
      animationDuration: 42,
      animationIterationCount: 42,
      animationName: 42,
      animationPlayState: 42,
      animationTimingFunction: 42,
      appearance: 66,
      userSelect: 53,
      fontKerning: 32,
      textEmphasisPosition: 66,
      textEmphasis: 66,
      textEmphasisStyle: 66,
      textEmphasisColor: 66,
      boxDecorationBreak: 66,
      clipPath: 54,
      maskImage: 66,
      maskMode: 66,
      maskRepeat: 66,
      maskPosition: 66,
      maskClip: 66,
      maskOrigin: 66,
      maskSize: 66,
      maskComposite: 66,
      mask: 66,
      maskBorderSource: 66,
      maskBorderMode: 66,
      maskBorderSlice: 66,
      maskBorderWidth: 66,
      maskBorderOutset: 66,
      maskBorderRepeat: 66,
      maskBorder: 66,
      maskType: 66,
      textDecorationStyle: 56,
      textDecorationSkip: 56,
      textDecorationLine: 56,
      textDecorationColor: 56,
      filter: 52,
      fontFeatureSettings: 47,
      breakAfter: 49,
      breakBefore: 49,
      breakInside: 49,
      columnCount: 49,
      columnFill: 49,
      columnGap: 49,
      columnRule: 49,
      columnRuleColor: 49,
      columnRuleStyle: 49,
      columnRuleWidth: 49,
      columns: 49,
      columnSpan: 49,
      columnWidth: 49,
      writingMode: 47
    },
    safari: {
      flex: 8,
      flexBasis: 8,
      flexDirection: 8,
      flexGrow: 8,
      flexFlow: 8,
      flexShrink: 8,
      flexWrap: 8,
      alignContent: 8,
      alignItems: 8,
      alignSelf: 8,
      justifyContent: 8,
      order: 8,
      transition: 6,
      transitionDelay: 6,
      transitionDuration: 6,
      transitionProperty: 6,
      transitionTimingFunction: 6,
      transform: 8,
      transformOrigin: 8,
      transformOriginX: 8,
      transformOriginY: 8,
      backfaceVisibility: 8,
      perspective: 8,
      perspectiveOrigin: 8,
      transformStyle: 8,
      transformOriginZ: 8,
      animation: 8,
      animationDelay: 8,
      animationDirection: 8,
      animationFillMode: 8,
      animationDuration: 8,
      animationIterationCount: 8,
      animationName: 8,
      animationPlayState: 8,
      animationTimingFunction: 8,
      appearance: 11,
      userSelect: 11,
      backdropFilter: 11,
      fontKerning: 9,
      scrollSnapType: 10.1,
      scrollSnapPointsX: 10.1,
      scrollSnapPointsY: 10.1,
      scrollSnapDestination: 10.1,
      scrollSnapCoordinate: 10.1,
      textEmphasisPosition: 7,
      textEmphasis: 7,
      textEmphasisStyle: 7,
      textEmphasisColor: 7,
      boxDecorationBreak: 11,
      clipPath: 11,
      maskImage: 11,
      maskMode: 11,
      maskRepeat: 11,
      maskPosition: 11,
      maskClip: 11,
      maskOrigin: 11,
      maskSize: 11,
      maskComposite: 11,
      mask: 11,
      maskBorderSource: 11,
      maskBorderMode: 11,
      maskBorderSlice: 11,
      maskBorderWidth: 11,
      maskBorderOutset: 11,
      maskBorderRepeat: 11,
      maskBorder: 11,
      maskType: 11,
      textDecorationStyle: 11,
      textDecorationSkip: 11,
      textDecorationLine: 11,
      textDecorationColor: 11,
      shapeImageThreshold: 10,
      shapeImageMargin: 10,
      shapeImageOutside: 10,
      filter: 9,
      hyphens: 11,
      flowInto: 11,
      flowFrom: 11,
      breakBefore: 8,
      breakAfter: 8,
      breakInside: 8,
      regionFragment: 11,
      columnCount: 8,
      columnFill: 8,
      columnGap: 8,
      columnRule: 8,
      columnRuleColor: 8,
      columnRuleStyle: 8,
      columnRuleWidth: 8,
      columns: 8,
      columnSpan: 8,
      columnWidth: 8,
      writingMode: 10.1
    },
    firefox: {
      appearance: 60,
      userSelect: 60,
      boxSizing: 28,
      textAlignLast: 48,
      textDecorationStyle: 35,
      textDecorationSkip: 35,
      textDecorationLine: 35,
      textDecorationColor: 35,
      tabSize: 60,
      hyphens: 42,
      fontFeatureSettings: 33,
      breakAfter: 51,
      breakBefore: 51,
      breakInside: 51,
      columnCount: 51,
      columnFill: 51,
      columnGap: 51,
      columnRule: 51,
      columnRuleColor: 51,
      columnRuleStyle: 51,
      columnRuleWidth: 51,
      columns: 51,
      columnSpan: 51,
      columnWidth: 51
    },
    opera: {
      flex: 16,
      flexBasis: 16,
      flexDirection: 16,
      flexGrow: 16,
      flexFlow: 16,
      flexShrink: 16,
      flexWrap: 16,
      alignContent: 16,
      alignItems: 16,
      alignSelf: 16,
      justifyContent: 16,
      order: 16,
      transform: 22,
      transformOrigin: 22,
      transformOriginX: 22,
      transformOriginY: 22,
      backfaceVisibility: 22,
      perspective: 22,
      perspectiveOrigin: 22,
      transformStyle: 22,
      transformOriginZ: 22,
      animation: 29,
      animationDelay: 29,
      animationDirection: 29,
      animationFillMode: 29,
      animationDuration: 29,
      animationIterationCount: 29,
      animationName: 29,
      animationPlayState: 29,
      animationTimingFunction: 29,
      appearance: 50,
      userSelect: 40,
      fontKerning: 19,
      textEmphasisPosition: 50,
      textEmphasis: 50,
      textEmphasisStyle: 50,
      textEmphasisColor: 50,
      boxDecorationBreak: 50,
      clipPath: 41,
      maskImage: 50,
      maskMode: 50,
      maskRepeat: 50,
      maskPosition: 50,
      maskClip: 50,
      maskOrigin: 50,
      maskSize: 50,
      maskComposite: 50,
      mask: 50,
      maskBorderSource: 50,
      maskBorderMode: 50,
      maskBorderSlice: 50,
      maskBorderWidth: 50,
      maskBorderOutset: 50,
      maskBorderRepeat: 50,
      maskBorder: 50,
      maskType: 50,
      textDecorationStyle: 43,
      textDecorationSkip: 43,
      textDecorationLine: 43,
      textDecorationColor: 43,
      filter: 39,
      fontFeatureSettings: 34,
      breakAfter: 36,
      breakBefore: 36,
      breakInside: 36,
      columnCount: 36,
      columnFill: 36,
      columnGap: 36,
      columnRule: 36,
      columnRuleColor: 36,
      columnRuleStyle: 36,
      columnRuleWidth: 36,
      columns: 36,
      columnSpan: 36,
      columnWidth: 36,
      writingMode: 34
    },
    ie: {
      flex: 10,
      flexDirection: 10,
      flexFlow: 10,
      flexWrap: 10,
      transform: 9,
      transformOrigin: 9,
      transformOriginX: 9,
      transformOriginY: 9,
      userSelect: 11,
      wrapFlow: 11,
      wrapThrough: 11,
      wrapMargin: 11,
      scrollSnapType: 11,
      scrollSnapPointsX: 11,
      scrollSnapPointsY: 11,
      scrollSnapDestination: 11,
      scrollSnapCoordinate: 11,
      touchAction: 10,
      hyphens: 11,
      flowInto: 11,
      flowFrom: 11,
      breakBefore: 11,
      breakAfter: 11,
      breakInside: 11,
      regionFragment: 11,
      gridTemplateColumns: 11,
      gridTemplateRows: 11,
      gridTemplateAreas: 11,
      gridTemplate: 11,
      gridAutoColumns: 11,
      gridAutoRows: 11,
      gridAutoFlow: 11,
      grid: 11,
      gridRowStart: 11,
      gridColumnStart: 11,
      gridRowEnd: 11,
      gridRow: 11,
      gridColumn: 11,
      gridColumnEnd: 11,
      gridColumnGap: 11,
      gridRowGap: 11,
      gridArea: 11,
      gridGap: 11,
      textSizeAdjust: 11,
      writingMode: 11
    },
    edge: {
      userSelect: 17,
      wrapFlow: 17,
      wrapThrough: 17,
      wrapMargin: 17,
      scrollSnapType: 17,
      scrollSnapPointsX: 17,
      scrollSnapPointsY: 17,
      scrollSnapDestination: 17,
      scrollSnapCoordinate: 17,
      hyphens: 17,
      flowInto: 17,
      flowFrom: 17,
      breakBefore: 17,
      breakAfter: 17,
      breakInside: 17,
      regionFragment: 17,
      gridTemplateColumns: 15,
      gridTemplateRows: 15,
      gridTemplateAreas: 15,
      gridTemplate: 15,
      gridAutoColumns: 15,
      gridAutoRows: 15,
      gridAutoFlow: 15,
      grid: 15,
      gridRowStart: 15,
      gridColumnStart: 15,
      gridRowEnd: 15,
      gridRow: 15,
      gridColumn: 15,
      gridColumnEnd: 15,
      gridColumnGap: 15,
      gridRowGap: 15,
      gridArea: 15,
      gridGap: 15
    },
    ios_saf: {
      flex: 8.1,
      flexBasis: 8.1,
      flexDirection: 8.1,
      flexGrow: 8.1,
      flexFlow: 8.1,
      flexShrink: 8.1,
      flexWrap: 8.1,
      alignContent: 8.1,
      alignItems: 8.1,
      alignSelf: 8.1,
      justifyContent: 8.1,
      order: 8.1,
      transition: 6,
      transitionDelay: 6,
      transitionDuration: 6,
      transitionProperty: 6,
      transitionTimingFunction: 6,
      transform: 8.1,
      transformOrigin: 8.1,
      transformOriginX: 8.1,
      transformOriginY: 8.1,
      backfaceVisibility: 8.1,
      perspective: 8.1,
      perspectiveOrigin: 8.1,
      transformStyle: 8.1,
      transformOriginZ: 8.1,
      animation: 8.1,
      animationDelay: 8.1,
      animationDirection: 8.1,
      animationFillMode: 8.1,
      animationDuration: 8.1,
      animationIterationCount: 8.1,
      animationName: 8.1,
      animationPlayState: 8.1,
      animationTimingFunction: 8.1,
      appearance: 11,
      userSelect: 11,
      backdropFilter: 11,
      fontKerning: 11,
      scrollSnapType: 10.3,
      scrollSnapPointsX: 10.3,
      scrollSnapPointsY: 10.3,
      scrollSnapDestination: 10.3,
      scrollSnapCoordinate: 10.3,
      boxDecorationBreak: 11,
      clipPath: 11,
      maskImage: 11,
      maskMode: 11,
      maskRepeat: 11,
      maskPosition: 11,
      maskClip: 11,
      maskOrigin: 11,
      maskSize: 11,
      maskComposite: 11,
      mask: 11,
      maskBorderSource: 11,
      maskBorderMode: 11,
      maskBorderSlice: 11,
      maskBorderWidth: 11,
      maskBorderOutset: 11,
      maskBorderRepeat: 11,
      maskBorder: 11,
      maskType: 11,
      textSizeAdjust: 11,
      textDecorationStyle: 11,
      textDecorationSkip: 11,
      textDecorationLine: 11,
      textDecorationColor: 11,
      shapeImageThreshold: 10,
      shapeImageMargin: 10,
      shapeImageOutside: 10,
      filter: 9,
      hyphens: 11,
      flowInto: 11,
      flowFrom: 11,
      breakBefore: 8.1,
      breakAfter: 8.1,
      breakInside: 8.1,
      regionFragment: 11,
      columnCount: 8.1,
      columnFill: 8.1,
      columnGap: 8.1,
      columnRule: 8.1,
      columnRuleColor: 8.1,
      columnRuleStyle: 8.1,
      columnRuleWidth: 8.1,
      columns: 8.1,
      columnSpan: 8.1,
      columnWidth: 8.1,
      writingMode: 10.3
    },
    android: {
      borderImage: 4.2,
      borderImageOutset: 4.2,
      borderImageRepeat: 4.2,
      borderImageSlice: 4.2,
      borderImageSource: 4.2,
      borderImageWidth: 4.2,
      flex: 4.2,
      flexBasis: 4.2,
      flexDirection: 4.2,
      flexGrow: 4.2,
      flexFlow: 4.2,
      flexShrink: 4.2,
      flexWrap: 4.2,
      alignContent: 4.2,
      alignItems: 4.2,
      alignSelf: 4.2,
      justifyContent: 4.2,
      order: 4.2,
      transition: 4.2,
      transitionDelay: 4.2,
      transitionDuration: 4.2,
      transitionProperty: 4.2,
      transitionTimingFunction: 4.2,
      transform: 4.4,
      transformOrigin: 4.4,
      transformOriginX: 4.4,
      transformOriginY: 4.4,
      backfaceVisibility: 4.4,
      perspective: 4.4,
      perspectiveOrigin: 4.4,
      transformStyle: 4.4,
      transformOriginZ: 4.4,
      animation: 4.4,
      animationDelay: 4.4,
      animationDirection: 4.4,
      animationFillMode: 4.4,
      animationDuration: 4.4,
      animationIterationCount: 4.4,
      animationName: 4.4,
      animationPlayState: 4.4,
      animationTimingFunction: 4.4,
      appearance: 62,
      userSelect: 4.4,
      fontKerning: 4.4,
      textEmphasisPosition: 62,
      textEmphasis: 62,
      textEmphasisStyle: 62,
      textEmphasisColor: 62,
      boxDecorationBreak: 62,
      clipPath: 4.4,
      maskImage: 62,
      maskMode: 62,
      maskRepeat: 62,
      maskPosition: 62,
      maskClip: 62,
      maskOrigin: 62,
      maskSize: 62,
      maskComposite: 62,
      mask: 62,
      maskBorderSource: 62,
      maskBorderMode: 62,
      maskBorderSlice: 62,
      maskBorderWidth: 62,
      maskBorderOutset: 62,
      maskBorderRepeat: 62,
      maskBorder: 62,
      maskType: 62,
      filter: 4.4,
      fontFeatureSettings: 4.4,
      breakAfter: 4.4,
      breakBefore: 4.4,
      breakInside: 4.4,
      columnCount: 4.4,
      columnFill: 4.4,
      columnGap: 4.4,
      columnRule: 4.4,
      columnRuleColor: 4.4,
      columnRuleStyle: 4.4,
      columnRuleWidth: 4.4,
      columns: 4.4,
      columnSpan: 4.4,
      columnWidth: 4.4,
      writingMode: 4.4
    },
    and_chr: {
      appearance: 62,
      textEmphasisPosition: 62,
      textEmphasis: 62,
      textEmphasisStyle: 62,
      textEmphasisColor: 62,
      boxDecorationBreak: 62,
      maskImage: 62,
      maskMode: 62,
      maskRepeat: 62,
      maskPosition: 62,
      maskClip: 62,
      maskOrigin: 62,
      maskSize: 62,
      maskComposite: 62,
      mask: 62,
      maskBorderSource: 62,
      maskBorderMode: 62,
      maskBorderSlice: 62,
      maskBorderWidth: 62,
      maskBorderOutset: 62,
      maskBorderRepeat: 62,
      maskBorder: 62,
      maskType: 62
    },
    and_uc: {
      flex: 11.4,
      flexBasis: 11.4,
      flexDirection: 11.4,
      flexGrow: 11.4,
      flexFlow: 11.4,
      flexShrink: 11.4,
      flexWrap: 11.4,
      alignContent: 11.4,
      alignItems: 11.4,
      alignSelf: 11.4,
      justifyContent: 11.4,
      order: 11.4,
      transform: 11.4,
      transformOrigin: 11.4,
      transformOriginX: 11.4,
      transformOriginY: 11.4,
      backfaceVisibility: 11.4,
      perspective: 11.4,
      perspectiveOrigin: 11.4,
      transformStyle: 11.4,
      transformOriginZ: 11.4,
      animation: 11.4,
      animationDelay: 11.4,
      animationDirection: 11.4,
      animationFillMode: 11.4,
      animationDuration: 11.4,
      animationIterationCount: 11.4,
      animationName: 11.4,
      animationPlayState: 11.4,
      animationTimingFunction: 11.4,
      appearance: 11.4,
      userSelect: 11.4,
      textEmphasisPosition: 11.4,
      textEmphasis: 11.4,
      textEmphasisStyle: 11.4,
      textEmphasisColor: 11.4,
      clipPath: 11.4,
      maskImage: 11.4,
      maskMode: 11.4,
      maskRepeat: 11.4,
      maskPosition: 11.4,
      maskClip: 11.4,
      maskOrigin: 11.4,
      maskSize: 11.4,
      maskComposite: 11.4,
      mask: 11.4,
      maskBorderSource: 11.4,
      maskBorderMode: 11.4,
      maskBorderSlice: 11.4,
      maskBorderWidth: 11.4,
      maskBorderOutset: 11.4,
      maskBorderRepeat: 11.4,
      maskBorder: 11.4,
      maskType: 11.4,
      textSizeAdjust: 11.4,
      filter: 11.4,
      hyphens: 11.4,
      fontFeatureSettings: 11.4,
      breakAfter: 11.4,
      breakBefore: 11.4,
      breakInside: 11.4,
      columnCount: 11.4,
      columnFill: 11.4,
      columnGap: 11.4,
      columnRule: 11.4,
      columnRuleColor: 11.4,
      columnRuleStyle: 11.4,
      columnRuleWidth: 11.4,
      columns: 11.4,
      columnSpan: 11.4,
      columnWidth: 11.4,
      writingMode: 11.4
    },
    op_mini: {}
  }
});

/***/ }),

/***/ "./node_modules/radium/es/prefix-data/static.js":
/*!******************************************************!*\
  !*** ./node_modules/radium/es/prefix-data/static.js ***!
  \******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var inline_style_prefixer_static_plugins_calc__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! inline-style-prefixer/static/plugins/calc */ "./node_modules/inline-style-prefixer/static/plugins/calc.js");
/* harmony import */ var inline_style_prefixer_static_plugins_calc__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(inline_style_prefixer_static_plugins_calc__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var inline_style_prefixer_static_plugins_crossFade__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! inline-style-prefixer/static/plugins/crossFade */ "./node_modules/inline-style-prefixer/static/plugins/crossFade.js");
/* harmony import */ var inline_style_prefixer_static_plugins_crossFade__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(inline_style_prefixer_static_plugins_crossFade__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var inline_style_prefixer_static_plugins_cursor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! inline-style-prefixer/static/plugins/cursor */ "./node_modules/inline-style-prefixer/static/plugins/cursor.js");
/* harmony import */ var inline_style_prefixer_static_plugins_cursor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(inline_style_prefixer_static_plugins_cursor__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var inline_style_prefixer_static_plugins_filter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! inline-style-prefixer/static/plugins/filter */ "./node_modules/inline-style-prefixer/static/plugins/filter.js");
/* harmony import */ var inline_style_prefixer_static_plugins_filter__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(inline_style_prefixer_static_plugins_filter__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var inline_style_prefixer_static_plugins_flex__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! inline-style-prefixer/static/plugins/flex */ "./node_modules/inline-style-prefixer/static/plugins/flex.js");
/* harmony import */ var inline_style_prefixer_static_plugins_flex__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(inline_style_prefixer_static_plugins_flex__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var inline_style_prefixer_static_plugins_flexboxIE__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! inline-style-prefixer/static/plugins/flexboxIE */ "./node_modules/inline-style-prefixer/static/plugins/flexboxIE.js");
/* harmony import */ var inline_style_prefixer_static_plugins_flexboxIE__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(inline_style_prefixer_static_plugins_flexboxIE__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var inline_style_prefixer_static_plugins_flexboxOld__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! inline-style-prefixer/static/plugins/flexboxOld */ "./node_modules/inline-style-prefixer/static/plugins/flexboxOld.js");
/* harmony import */ var inline_style_prefixer_static_plugins_flexboxOld__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(inline_style_prefixer_static_plugins_flexboxOld__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var inline_style_prefixer_static_plugins_gradient__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! inline-style-prefixer/static/plugins/gradient */ "./node_modules/inline-style-prefixer/static/plugins/gradient.js");
/* harmony import */ var inline_style_prefixer_static_plugins_gradient__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(inline_style_prefixer_static_plugins_gradient__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var inline_style_prefixer_static_plugins_imageSet__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! inline-style-prefixer/static/plugins/imageSet */ "./node_modules/inline-style-prefixer/static/plugins/imageSet.js");
/* harmony import */ var inline_style_prefixer_static_plugins_imageSet__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(inline_style_prefixer_static_plugins_imageSet__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var inline_style_prefixer_static_plugins_position__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! inline-style-prefixer/static/plugins/position */ "./node_modules/inline-style-prefixer/static/plugins/position.js");
/* harmony import */ var inline_style_prefixer_static_plugins_position__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(inline_style_prefixer_static_plugins_position__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var inline_style_prefixer_static_plugins_sizing__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! inline-style-prefixer/static/plugins/sizing */ "./node_modules/inline-style-prefixer/static/plugins/sizing.js");
/* harmony import */ var inline_style_prefixer_static_plugins_sizing__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(inline_style_prefixer_static_plugins_sizing__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var inline_style_prefixer_static_plugins_transition__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! inline-style-prefixer/static/plugins/transition */ "./node_modules/inline-style-prefixer/static/plugins/transition.js");
/* harmony import */ var inline_style_prefixer_static_plugins_transition__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(inline_style_prefixer_static_plugins_transition__WEBPACK_IMPORTED_MODULE_11__);












var w = ['Webkit'];
var m = ['Moz'];
var ms = ['ms'];
var wm = ['Webkit', 'Moz'];
var wms = ['Webkit', 'ms'];
var wmms = ['Webkit', 'Moz', 'ms'];
/* harmony default export */ __webpack_exports__["default"] = ({
  plugins: [(inline_style_prefixer_static_plugins_calc__WEBPACK_IMPORTED_MODULE_0___default()), (inline_style_prefixer_static_plugins_crossFade__WEBPACK_IMPORTED_MODULE_1___default()), (inline_style_prefixer_static_plugins_cursor__WEBPACK_IMPORTED_MODULE_2___default()), (inline_style_prefixer_static_plugins_filter__WEBPACK_IMPORTED_MODULE_3___default()), (inline_style_prefixer_static_plugins_flex__WEBPACK_IMPORTED_MODULE_4___default()), (inline_style_prefixer_static_plugins_flexboxIE__WEBPACK_IMPORTED_MODULE_5___default()), (inline_style_prefixer_static_plugins_flexboxOld__WEBPACK_IMPORTED_MODULE_6___default()), (inline_style_prefixer_static_plugins_gradient__WEBPACK_IMPORTED_MODULE_7___default()), (inline_style_prefixer_static_plugins_imageSet__WEBPACK_IMPORTED_MODULE_8___default()), (inline_style_prefixer_static_plugins_position__WEBPACK_IMPORTED_MODULE_9___default()), (inline_style_prefixer_static_plugins_sizing__WEBPACK_IMPORTED_MODULE_10___default()), (inline_style_prefixer_static_plugins_transition__WEBPACK_IMPORTED_MODULE_11___default())],
  prefixMap: {
    transform: wms,
    transformOrigin: wms,
    transformOriginX: wms,
    transformOriginY: wms,
    backfaceVisibility: w,
    perspective: w,
    perspectiveOrigin: w,
    transformStyle: w,
    transformOriginZ: w,
    animation: w,
    animationDelay: w,
    animationDirection: w,
    animationFillMode: w,
    animationDuration: w,
    animationIterationCount: w,
    animationName: w,
    animationPlayState: w,
    animationTimingFunction: w,
    appearance: wm,
    userSelect: wmms,
    fontKerning: w,
    textEmphasisPosition: w,
    textEmphasis: w,
    textEmphasisStyle: w,
    textEmphasisColor: w,
    boxDecorationBreak: w,
    clipPath: w,
    maskImage: w,
    maskMode: w,
    maskRepeat: w,
    maskPosition: w,
    maskClip: w,
    maskOrigin: w,
    maskSize: w,
    maskComposite: w,
    mask: w,
    maskBorderSource: w,
    maskBorderMode: w,
    maskBorderSlice: w,
    maskBorderWidth: w,
    maskBorderOutset: w,
    maskBorderRepeat: w,
    maskBorder: w,
    maskType: w,
    textDecorationStyle: wm,
    textDecorationSkip: wm,
    textDecorationLine: wm,
    textDecorationColor: wm,
    filter: w,
    fontFeatureSettings: wm,
    breakAfter: wmms,
    breakBefore: wmms,
    breakInside: wmms,
    columnCount: wm,
    columnFill: wm,
    columnGap: wm,
    columnRule: wm,
    columnRuleColor: wm,
    columnRuleStyle: wm,
    columnRuleWidth: wm,
    columns: wm,
    columnSpan: wm,
    columnWidth: wm,
    writingMode: wms,
    flex: wms,
    flexBasis: w,
    flexDirection: wms,
    flexGrow: w,
    flexFlow: wms,
    flexShrink: w,
    flexWrap: wms,
    alignContent: w,
    alignItems: w,
    alignSelf: w,
    justifyContent: w,
    order: w,
    transitionDelay: w,
    transitionDuration: w,
    transitionProperty: w,
    transitionTimingFunction: w,
    backdropFilter: w,
    scrollSnapType: wms,
    scrollSnapPointsX: wms,
    scrollSnapPointsY: wms,
    scrollSnapDestination: wms,
    scrollSnapCoordinate: wms,
    shapeImageThreshold: w,
    shapeImageMargin: w,
    shapeImageOutside: w,
    hyphens: wmms,
    flowInto: wms,
    flowFrom: wms,
    regionFragment: wms,
    boxSizing: m,
    textAlignLast: m,
    tabSize: m,
    wrapFlow: ms,
    wrapThrough: ms,
    wrapMargin: ms,
    touchAction: ms,
    gridTemplateColumns: ms,
    gridTemplateRows: ms,
    gridTemplateAreas: ms,
    gridTemplate: ms,
    gridAutoColumns: ms,
    gridAutoRows: ms,
    gridAutoFlow: ms,
    grid: ms,
    gridRowStart: ms,
    gridColumnStart: ms,
    gridRowEnd: ms,
    gridRow: ms,
    gridColumn: ms,
    gridColumnEnd: ms,
    gridColumnGap: ms,
    gridRowGap: ms,
    gridArea: ms,
    gridGap: ms,
    textSizeAdjust: wms,
    borderImage: w,
    borderImageOutset: w,
    borderImageRepeat: w,
    borderImageSlice: w,
    borderImageSource: w,
    borderImageWidth: w
  }
});

/***/ }),

/***/ "./node_modules/radium/es/prefixer.js":
/*!********************************************!*\
  !*** ./node_modules/radium/es/prefixer.js ***!
  \********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getPrefixedKeyframes": function() { return /* binding */ getPrefixedKeyframes; },
/* harmony export */   "getPrefixedStyle": function() { return /* binding */ getPrefixedStyle; }
/* harmony export */ });
/* harmony import */ var inline_style_prefixer_static_createPrefixer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! inline-style-prefixer/static/createPrefixer */ "./node_modules/inline-style-prefixer/static/createPrefixer.js");
/* harmony import */ var inline_style_prefixer_static_createPrefixer__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(inline_style_prefixer_static_createPrefixer__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var inline_style_prefixer_dynamic_createPrefixer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! inline-style-prefixer/dynamic/createPrefixer */ "./node_modules/inline-style-prefixer/dynamic/createPrefixer.js");
/* harmony import */ var inline_style_prefixer_dynamic_createPrefixer__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(inline_style_prefixer_dynamic_createPrefixer__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var exenv__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! exenv */ "./node_modules/exenv/index.js");
/* harmony import */ var exenv__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(exenv__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _prefix_data_static__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./prefix-data/static */ "./node_modules/radium/es/prefix-data/static.js");
/* harmony import */ var _prefix_data_dynamic__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./prefix-data/dynamic */ "./node_modules/radium/es/prefix-data/dynamic.js");
/* harmony import */ var _camel_case_props_to_dash_case__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./camel-case-props-to-dash-case */ "./node_modules/radium/es/camel-case-props-to-dash-case.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/**
 * Based on https://github.com/jsstyles/css-vendor, but without having to
 * convert between different cases all the time.
 *
 * 
 */






var prefixAll = inline_style_prefixer_static_createPrefixer__WEBPACK_IMPORTED_MODULE_0___default()(_prefix_data_static__WEBPACK_IMPORTED_MODULE_3__["default"]);
var InlineStylePrefixer = inline_style_prefixer_dynamic_createPrefixer__WEBPACK_IMPORTED_MODULE_1___default()(_prefix_data_dynamic__WEBPACK_IMPORTED_MODULE_4__["default"], prefixAll);

function transformValues(style) {
  return Object.keys(style).reduce(function (newStyle, key) {
    var value = style[key];

    if (Array.isArray(value)) {
      value = value.join(';' + key + ':');
    } else if (value && _typeof(value) === 'object' && typeof value.toString === 'function') {
      value = value.toString();
    }

    newStyle[key] = value;
    return newStyle;
  }, {});
} // Flatten prefixed values that are arrays to strings.
//
// We get prefixed styles back in the form of:
// - `display: "flex"` OR
// - `display: "-webkit-flex"` OR
// - `display: [/* ... */, "-webkit-flex", "flex"]
//
// The last form is problematic for eventual use in the browser and server
// render. More confusingly, we have to do **different** things on the
// browser and server (noted inline below).
//
// https://github.com/FormidableLabs/radium/issues/958


function flattenStyleValues(style) {
  return Object.keys(style).reduce(function (newStyle, key) {
    var val = style[key];

    if (Array.isArray(val)) {
      if ((exenv__WEBPACK_IMPORTED_MODULE_2___default().canUseDOM)) {
        // For the **browser**, when faced with multiple values, we just take
        // the **last** one, which is the original passed in value before
        // prefixing. This _should_ work, because `inline-style-prefixer`
        // we're just passing through what would happen without ISP.
        val = val[val.length - 1].toString();
      } else {
        // For the **server**, we just concatenate things together and convert
        // the style object values into a hacked-up string of like `display:
        // "-webkit-flex;display:flex"` that will SSR render correctly to like
        // `"display:-webkit-flex;display:flex"` but would otherwise be
        // totally invalid values.
        // We convert keys to dash-case only for the serialize values and
        // leave the real key camel-cased so it's as expected to React and
        // other parts of the processing chain.
        val = val.join(";".concat((0,_camel_case_props_to_dash_case__WEBPACK_IMPORTED_MODULE_5__.camelCaseToDashCase)(key), ":"));
      }
    }

    newStyle[key] = val;
    return newStyle;
  }, {});
}

var _hasWarnedAboutUserAgent = false;

var _lastUserAgent;

var _cachedPrefixer;

function getPrefixer(userAgent) {
  var actualUserAgent = userAgent || __webpack_require__.g && __webpack_require__.g.navigator && __webpack_require__.g.navigator.userAgent;

  if (true) {
    if (!actualUserAgent && !_hasWarnedAboutUserAgent) {
      /* eslint-disable no-console */
      console.warn('Radium: userAgent should be supplied for server-side rendering. See ' + 'https://github.com/FormidableLabs/radium/tree/master/docs/api#radium ' + 'for more information.');
      /* eslint-enable no-console */

      _hasWarnedAboutUserAgent = true;
    }
  }

  if ( false || !_cachedPrefixer || actualUserAgent !== _lastUserAgent) {
    if (actualUserAgent === 'all') {
      _cachedPrefixer = {
        prefix: prefixAll,
        prefixedKeyframes: 'keyframes'
      };
    } else {
      _cachedPrefixer = new InlineStylePrefixer({
        userAgent: actualUserAgent
      });
    }

    _lastUserAgent = actualUserAgent;
  }

  return _cachedPrefixer;
}

function getPrefixedKeyframes(userAgent) {
  return getPrefixer(userAgent).prefixedKeyframes || 'keyframes';
} // Returns a new style object with vendor prefixes added to property names and
// values.

function getPrefixedStyle(style, userAgent) {
  var styleWithFallbacks = transformValues(style);
  var prefixer = getPrefixer(userAgent);
  var prefixedStyle = prefixer.prefix(styleWithFallbacks);
  var flattenedStyle = flattenStyleValues(prefixedStyle);
  return flattenedStyle;
}

/***/ }),

/***/ "./node_modules/radium/es/resolve-styles.js":
/*!**************************************************!*\
  !*** ./node_modules/radium/es/resolve-styles.js ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _append_important_to_each_value__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./append-important-to-each-value */ "./node_modules/radium/es/append-important-to-each-value.js");
/* harmony import */ var _css_rule_set_to_string__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./css-rule-set-to-string */ "./node_modules/radium/es/css-rule-set-to-string.js");
/* harmony import */ var _get_state__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./get-state */ "./node_modules/radium/es/get-state.js");
/* harmony import */ var _get_state_key__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./get-state-key */ "./node_modules/radium/es/get-state-key.js");
/* harmony import */ var _clean_state_key__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./clean-state-key */ "./node_modules/radium/es/clean-state-key.js");
/* harmony import */ var _get_radium_style_state__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./get-radium-style-state */ "./node_modules/radium/es/get-radium-style-state.js");
/* harmony import */ var _hash__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./hash */ "./node_modules/radium/es/hash.js");
/* harmony import */ var _merge_styles__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./merge-styles */ "./node_modules/radium/es/merge-styles.js");
/* harmony import */ var _plugins___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./plugins/ */ "./node_modules/radium/es/plugins/index.js");
/* harmony import */ var exenv__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! exenv */ "./node_modules/exenv/index.js");
/* harmony import */ var exenv__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(exenv__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }













var DEFAULT_CONFIG = {
  plugins: [_plugins___WEBPACK_IMPORTED_MODULE_2__["default"].mergeStyleArray, _plugins___WEBPACK_IMPORTED_MODULE_2__["default"].checkProps, _plugins___WEBPACK_IMPORTED_MODULE_2__["default"].resolveMediaQueries, _plugins___WEBPACK_IMPORTED_MODULE_2__["default"].resolveInteractionStyles, _plugins___WEBPACK_IMPORTED_MODULE_2__["default"].keyframes, _plugins___WEBPACK_IMPORTED_MODULE_2__["default"].visited, _plugins___WEBPACK_IMPORTED_MODULE_2__["default"].removeNestedStyles, _plugins___WEBPACK_IMPORTED_MODULE_2__["default"].prefix, _plugins___WEBPACK_IMPORTED_MODULE_2__["default"].checkProps]
}; // Gross

var globalState = {}; // Only for use by tests

var __isTestModeEnabled = false;
// Declare early for recursive helpers.
var _resolveStyles5 = null;

var _shouldResolveStyles = function _shouldResolveStyles(component) {
  return component.type && !component.type._isRadiumEnhanced;
};

var _resolveChildren = function _resolveChildren(_ref) {
  var children = _ref.children,
      component = _ref.component,
      config = _ref.config,
      existingKeyMap = _ref.existingKeyMap,
      extraStateKeyMap = _ref.extraStateKeyMap;

  if (!children) {
    return children;
  }

  var childrenType = _typeof(children);

  if (childrenType === 'string' || childrenType === 'number') {
    // Don't do anything with a single primitive child
    return children;
  }

  if (childrenType === 'function') {
    // Wrap the function, resolving styles on the result
    return function () {
      var result = children.apply(this, arguments);

      if (react__WEBPACK_IMPORTED_MODULE_1___default().isValidElement(result)) {
        var _key = (0,_get_state_key__WEBPACK_IMPORTED_MODULE_3__["default"])(result);

        delete extraStateKeyMap[_key];

        var _resolveStyles = _resolveStyles5(component, result, config, existingKeyMap, true, extraStateKeyMap),
            element = _resolveStyles.element;

        return element;
      }

      return result;
    };
  }

  if (react__WEBPACK_IMPORTED_MODULE_1___default().Children.count(children) === 1 && children.type) {
    // If a React Element is an only child, don't wrap it in an array for
    // React.Children.map() for React.Children.only() compatibility.
    var onlyChild = react__WEBPACK_IMPORTED_MODULE_1___default().Children.only(children);

    var _key2 = (0,_get_state_key__WEBPACK_IMPORTED_MODULE_3__["default"])(onlyChild);

    delete extraStateKeyMap[_key2];

    var _resolveStyles2 = _resolveStyles5(component, onlyChild, config, existingKeyMap, true, extraStateKeyMap),
        element = _resolveStyles2.element;

    return element;
  }

  return react__WEBPACK_IMPORTED_MODULE_1___default().Children.map(children, function (child) {
    if (react__WEBPACK_IMPORTED_MODULE_1___default().isValidElement(child)) {
      var _key3 = (0,_get_state_key__WEBPACK_IMPORTED_MODULE_3__["default"])(child);

      delete extraStateKeyMap[_key3];

      var _resolveStyles3 = _resolveStyles5(component, child, config, existingKeyMap, true, extraStateKeyMap),
          _element = _resolveStyles3.element;

      return _element;
    }

    return child;
  });
}; // Recurse over props, just like children


var _resolveProps = function _resolveProps(_ref2) {
  var component = _ref2.component,
      config = _ref2.config,
      existingKeyMap = _ref2.existingKeyMap,
      props = _ref2.props,
      extraStateKeyMap = _ref2.extraStateKeyMap;
  var newProps = props;
  Object.keys(props).forEach(function (prop) {
    // We already recurse over children above
    if (prop === 'children') {
      return;
    }

    var propValue = props[prop];

    if (react__WEBPACK_IMPORTED_MODULE_1___default().isValidElement(propValue)) {
      var _key4 = (0,_get_state_key__WEBPACK_IMPORTED_MODULE_3__["default"])(propValue);

      delete extraStateKeyMap[_key4];
      newProps = _objectSpread({}, newProps);

      var _resolveStyles4 = _resolveStyles5(component, propValue, config, existingKeyMap, true, extraStateKeyMap),
          element = _resolveStyles4.element;

      newProps[prop] = element;
    }
  });
  return newProps;
};

var _buildGetKey = function _buildGetKey(_ref3) {
  var componentName = _ref3.componentName,
      existingKeyMap = _ref3.existingKeyMap,
      renderedElement = _ref3.renderedElement;
  // We need a unique key to correlate state changes due to user interaction
  // with the rendered element, so we know to apply the proper interactive
  // styles.
  var originalKey = (0,_get_state_key__WEBPACK_IMPORTED_MODULE_3__["default"])(renderedElement);
  var key = (0,_clean_state_key__WEBPACK_IMPORTED_MODULE_4__["default"])(originalKey);
  var alreadyGotKey = false;

  var getKey = function getKey() {
    if (alreadyGotKey) {
      return key;
    }

    alreadyGotKey = true;

    if (existingKeyMap[key]) {
      var elementName;

      if (typeof renderedElement.type === 'string') {
        elementName = renderedElement.type;
      } else if (renderedElement.type.constructor) {
        elementName = renderedElement.type.constructor.displayName || renderedElement.type.constructor.name;
      }

      throw new Error('Radium requires each element with interactive styles to have a unique ' + 'key, set using either the ref or key prop. ' + (originalKey ? 'Key "' + originalKey + '" is a duplicate.' : 'Multiple elements have no key specified.') + ' ' + 'Component: "' + componentName + '". ' + (elementName ? 'Element: "' + elementName + '".' : ''));
    }

    existingKeyMap[key] = true;
    return key;
  };

  return getKey;
};

var _setStyleState = function _setStyleState(component, key, stateKey, value) {
  if (!component._radiumIsMounted) {
    return;
  }

  var existing = (0,_get_radium_style_state__WEBPACK_IMPORTED_MODULE_5__["default"])(component);
  var state = {
    _radiumStyleState: _objectSpread({}, existing)
  };
  state._radiumStyleState[key] = _objectSpread({}, state._radiumStyleState[key]);
  state._radiumStyleState[key][stateKey] = value;
  component._lastRadiumState = state._radiumStyleState;
  component.setState(state);
};

var _runPlugins = function _runPlugins(_ref4) {
  var component = _ref4.component,
      config = _ref4.config,
      existingKeyMap = _ref4.existingKeyMap,
      props = _ref4.props,
      renderedElement = _ref4.renderedElement;

  // Don't run plugins if renderedElement is not a simple ReactDOMElement or has
  // no style.
  if (!react__WEBPACK_IMPORTED_MODULE_1___default().isValidElement(renderedElement) || typeof renderedElement.type !== 'string' || !props.style) {
    return props;
  }

  var newProps = props;
  var plugins = config.plugins || DEFAULT_CONFIG.plugins;
  var componentName = component.constructor.displayName || component.constructor.name;

  var getKey = _buildGetKey({
    renderedElement: renderedElement,
    existingKeyMap: existingKeyMap,
    componentName: componentName
  });

  var getComponentField = function getComponentField(key) {
    return component[key];
  };

  var getGlobalState = function getGlobalState(key) {
    return globalState[key];
  };

  var componentGetState = function componentGetState(stateKey, elementKey) {
    return (0,_get_state__WEBPACK_IMPORTED_MODULE_6__["default"])(component.state, elementKey || getKey(), stateKey);
  };

  var setState = function setState(stateKey, value, elementKey) {
    return _setStyleState(component, elementKey || getKey(), stateKey, value);
  };

  var addCSS = function addCSS(css) {
    var styleKeeper = component._radiumStyleKeeper;

    if (!styleKeeper) {
      if (__isTestModeEnabled) {
        return {
          remove: function remove() {}
        };
      }

      throw new Error('To use plugins requiring `addCSS` (e.g. keyframes, media queries), ' + 'please wrap your application in the StyleRoot component. Component ' + 'name: `' + componentName + '`.');
    }

    return styleKeeper.addCSS(css);
  };

  var newStyle = props.style;
  plugins.forEach(function (plugin) {
    var result = plugin({
      ExecutionEnvironment: (exenv__WEBPACK_IMPORTED_MODULE_0___default()),
      addCSS: addCSS,
      appendImportantToEachValue: _append_important_to_each_value__WEBPACK_IMPORTED_MODULE_7__["default"],
      componentName: componentName,
      config: config,
      cssRuleSetToString: _css_rule_set_to_string__WEBPACK_IMPORTED_MODULE_8__["default"],
      getComponentField: getComponentField,
      getGlobalState: getGlobalState,
      getState: componentGetState,
      hash: _hash__WEBPACK_IMPORTED_MODULE_9__["default"],
      mergeStyles: _merge_styles__WEBPACK_IMPORTED_MODULE_10__.mergeStyles,
      props: newProps,
      setState: setState,
      isNestedStyle: _merge_styles__WEBPACK_IMPORTED_MODULE_10__.isNestedStyle,
      style: newStyle
    }) || {};
    newStyle = result.style || newStyle;
    newProps = result.props && Object.keys(result.props).length ? _objectSpread({}, newProps, result.props) : newProps;
    var newComponentFields = result.componentFields || {};
    Object.keys(newComponentFields).forEach(function (fieldName) {
      component[fieldName] = newComponentFields[fieldName];
    });
    var newGlobalState = result.globalState || {};
    Object.keys(newGlobalState).forEach(function (key) {
      globalState[key] = newGlobalState[key];
    });
  });

  if (newStyle !== props.style) {
    newProps = _objectSpread({}, newProps, {
      style: newStyle
    });
  }

  return newProps;
}; // Wrapper around React.cloneElement. To avoid processing the same element
// twice, whenever we clone an element add a special prop to make sure we don't
// process this element again.


var _cloneElement = function _cloneElement(renderedElement, newProps, newChildren) {
  // Only add flag if this is a normal DOM element
  if (typeof renderedElement.type === 'string') {
    newProps = _objectSpread({}, newProps, {
      'data-radium': true
    });
  }

  return react__WEBPACK_IMPORTED_MODULE_1___default().cloneElement(renderedElement, newProps, newChildren);
}; //
// The nucleus of Radium. resolveStyles is called on the rendered elements
// before they are returned in render. It iterates over the elements and
// children, rewriting props to add event handlers required to capture user
// interactions (e.g. mouse over). It also replaces the style prop because it
// adds in the various interaction styles (e.g. :hover).
//

/* eslint-disable max-params */


_resolveStyles5 = function resolveStyles(component, renderedElement) {
  var config = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : DEFAULT_CONFIG;
  var existingKeyMap = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
  var shouldCheckBeforeResolve = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;
  var extraStateKeyMap = arguments.length > 5 ? arguments[5] : undefined;

  // The extraStateKeyMap is for determining which keys should be erased from
  // the state (i.e. which child components are unmounted and should no longer
  // have a style state).
  if (!extraStateKeyMap) {
    var state = (0,_get_radium_style_state__WEBPACK_IMPORTED_MODULE_5__["default"])(component);
    extraStateKeyMap = Object.keys(state).reduce(function (acc, key) {
      // 'main' is the auto-generated key when there is only one element with
      // interactive styles and if a custom key is not assigned. Because of
      // this, it is impossible to know which child is 'main', so we won't
      // count this key when generating our extraStateKeyMap.
      if (key !== 'main') {
        acc[key] = true;
      }

      return acc;
    }, {});
  }

  if (Array.isArray(renderedElement) && !renderedElement.props) {
    var elements = renderedElement.map(function (element) {
      // element is in-use, so remove from the extraStateKeyMap
      if (extraStateKeyMap) {
        var _key5 = (0,_get_state_key__WEBPACK_IMPORTED_MODULE_3__["default"])(element);

        delete extraStateKeyMap[_key5];
      } // this element is an array of elements,
      // so return an array of elements with resolved styles


      return _resolveStyles5(component, element, config, existingKeyMap, shouldCheckBeforeResolve, extraStateKeyMap).element;
    });
    return {
      extraStateKeyMap: extraStateKeyMap,
      element: elements
    };
  } // ReactElement


  if (!renderedElement || // Bail if we've already processed this element. This ensures that only the
  // owner of an element processes that element, since the owner's render
  // function will be called first (which will always be the case, since you
  // can't know what else to render until you render the parent component).
  renderedElement.props && renderedElement.props['data-radium'] || // Bail if this element is a radium enhanced element, because if it is,
  // then it will take care of resolving its own styles.
  shouldCheckBeforeResolve && !_shouldResolveStyles(renderedElement)) {
    return {
      extraStateKeyMap: extraStateKeyMap,
      element: renderedElement
    };
  }

  var children = renderedElement.props.children;

  var newChildren = _resolveChildren({
    children: children,
    component: component,
    config: config,
    existingKeyMap: existingKeyMap,
    extraStateKeyMap: extraStateKeyMap
  });

  var newProps = _resolveProps({
    component: component,
    config: config,
    existingKeyMap: existingKeyMap,
    extraStateKeyMap: extraStateKeyMap,
    props: renderedElement.props
  });

  newProps = _runPlugins({
    component: component,
    config: config,
    existingKeyMap: existingKeyMap,
    props: newProps,
    renderedElement: renderedElement
  }); // If nothing changed, don't bother cloning the element. Might be a bit
  // wasteful, as we add the sentinel to stop double-processing when we clone.
  // Assume benign double-processing is better than unneeded cloning.

  if (newChildren === children && newProps === renderedElement.props) {
    return {
      extraStateKeyMap: extraStateKeyMap,
      element: renderedElement
    };
  }

  var element = _cloneElement(renderedElement, newProps !== renderedElement.props ? newProps : {}, newChildren);

  return {
    extraStateKeyMap: extraStateKeyMap,
    element: element
  };
};
/* eslint-enable max-params */
// Only for use by tests


if (true) {
  _resolveStyles5.__clearStateForTests = function () {
    globalState = {};
  };

  _resolveStyles5.__setTestMode = function (isEnabled) {
    __isTestModeEnabled = isEnabled;
  };
}

/* harmony default export */ __webpack_exports__["default"] = (_resolveStyles5);

/***/ }),

/***/ "./node_modules/radium/es/style-keeper.js":
/*!************************************************!*\
  !*** ./node_modules/radium/es/style-keeper.js ***!
  \************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ StyleKeeper; }
/* harmony export */ });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var StyleKeeper =
/*#__PURE__*/
function () {
  function StyleKeeper(userAgent) {
    _classCallCheck(this, StyleKeeper);

    this._userAgent = void 0;
    this._listeners = void 0;
    this._cssSet = void 0;
    this._userAgent = userAgent;
    this._listeners = [];
    this._cssSet = {};
  }

  _createClass(StyleKeeper, [{
    key: "subscribe",
    value: function subscribe(listener) {
      var _this = this;

      if (this._listeners.indexOf(listener) === -1) {
        this._listeners.push(listener);
      }

      return {
        // Must be fat arrow to capture `this`
        remove: function remove() {
          var listenerIndex = _this._listeners.indexOf(listener);

          if (listenerIndex > -1) {
            _this._listeners.splice(listenerIndex, 1);
          }
        }
      };
    }
  }, {
    key: "addCSS",
    value: function addCSS(css) {
      var _this2 = this;

      if (!this._cssSet[css]) {
        this._cssSet[css] = true;

        this._emitChange();
      }

      return {
        // Must be fat arrow to capture `this`
        remove: function remove() {
          delete _this2._cssSet[css];

          _this2._emitChange();
        }
      };
    }
  }, {
    key: "getCSS",
    value: function getCSS() {
      return Object.keys(this._cssSet).join('\n');
    }
  }, {
    key: "_emitChange",
    value: function _emitChange() {
      this._listeners.forEach(function (listener) {
        return listener();
      });
    }
  }]);

  return StyleKeeper;
}();



/***/ }),

/***/ "./node_modules/radium/node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js":
/*!******************************************************************************************************!*\
  !*** ./node_modules/radium/node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js ***!
  \******************************************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";


/**
 * Copyright 2015, Yahoo! Inc.
 * Copyrights licensed under the New BSD License. See the accompanying LICENSE file for terms.
 */
var ReactIs = __webpack_require__(/*! react-is */ "./node_modules/react-is/index.js");
var REACT_STATICS = {
    childContextTypes: true,
    contextType: true,
    contextTypes: true,
    defaultProps: true,
    displayName: true,
    getDefaultProps: true,
    getDerivedStateFromError: true,
    getDerivedStateFromProps: true,
    mixins: true,
    propTypes: true,
    type: true
};

var KNOWN_STATICS = {
    name: true,
    length: true,
    prototype: true,
    caller: true,
    callee: true,
    arguments: true,
    arity: true
};

var FORWARD_REF_STATICS = {
    '$$typeof': true,
    render: true,
    defaultProps: true,
    displayName: true,
    propTypes: true
};

var MEMO_STATICS = {
    '$$typeof': true,
    compare: true,
    defaultProps: true,
    displayName: true,
    propTypes: true,
    type: true
};

var TYPE_STATICS = {};
TYPE_STATICS[ReactIs.ForwardRef] = FORWARD_REF_STATICS;

function getStatics(component) {
    if (ReactIs.isMemo(component)) {
        return MEMO_STATICS;
    }
    return TYPE_STATICS[component['$$typeof']] || REACT_STATICS;
}

var defineProperty = Object.defineProperty;
var getOwnPropertyNames = Object.getOwnPropertyNames;
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
var getPrototypeOf = Object.getPrototypeOf;
var objectPrototype = Object.prototype;

function hoistNonReactStatics(targetComponent, sourceComponent, blacklist) {
    if (typeof sourceComponent !== 'string') {
        // don't hoist over string (html) components

        if (objectPrototype) {
            var inheritedComponent = getPrototypeOf(sourceComponent);
            if (inheritedComponent && inheritedComponent !== objectPrototype) {
                hoistNonReactStatics(targetComponent, inheritedComponent, blacklist);
            }
        }

        var keys = getOwnPropertyNames(sourceComponent);

        if (getOwnPropertySymbols) {
            keys = keys.concat(getOwnPropertySymbols(sourceComponent));
        }

        var targetStatics = getStatics(targetComponent);
        var sourceStatics = getStatics(sourceComponent);

        for (var i = 0; i < keys.length; ++i) {
            var key = keys[i];
            if (!KNOWN_STATICS[key] && !(blacklist && blacklist[key]) && !(sourceStatics && sourceStatics[key]) && !(targetStatics && targetStatics[key])) {
                var descriptor = getOwnPropertyDescriptor(sourceComponent, key);
                try {
                    // Avoid failures from read-only properties
                    defineProperty(targetComponent, key, descriptor);
                } catch (e) {}
            }
        }

        return targetComponent;
    }

    return targetComponent;
}

module.exports = hoistNonReactStatics;


/***/ }),

/***/ "./node_modules/react-currency-input-field/dist/index.esm.js":
/*!*******************************************************************!*\
  !*** ./node_modules/react-currency-input-field/dist/index.esm.js ***!
  \*******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "formatValue": function() { return /* binding */ formatValue; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __spreadArray(to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || from);
}

/**
 * Escape regex char
 *
 * See: https://stackoverflow.com/questions/17885855/use-dynamic-variable-string-as-regex-pattern-in-javascript
 */
var escapeRegExp = function (stringToGoIntoTheRegex) {
    return stringToGoIntoTheRegex.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
};

var abbrMap = { k: 1000, m: 1000000, b: 1000000000 };
/**
 * Parse a value with abbreviation e.g 1k = 1000
 */
var parseAbbrValue = function (value, decimalSeparator) {
    if (decimalSeparator === void 0) { decimalSeparator = '.'; }
    var reg = new RegExp("(\\d+(" + escapeRegExp(decimalSeparator) + "\\d*)?)([kmb])$", 'i');
    var match = value.match(reg);
    if (match) {
        var digits = match[1], abbr = match[3];
        var multiplier = abbrMap[abbr.toLowerCase()];
        return Number(digits.replace(decimalSeparator, '.')) * multiplier;
    }
    return undefined;
};

/**
 * Remove group separator from value eg. 1,000 > 1000
 */
var removeSeparators = function (value, separator) {
    if (separator === void 0) { separator = ','; }
    var reg = new RegExp(escapeRegExp(separator), 'g');
    return value.replace(reg, '');
};

/**
 * Remove invalid characters
 */
var removeInvalidChars = function (value, validChars) {
    var chars = escapeRegExp(validChars.join(''));
    var reg = new RegExp("[^\\d" + chars + "]", 'gi');
    return value.replace(reg, '');
};

/**
 * Remove prefix, separators and extra decimals from value
 */
var cleanValue = function (_a) {
    var value = _a.value, _b = _a.groupSeparator, groupSeparator = _b === void 0 ? ',' : _b, _c = _a.decimalSeparator, decimalSeparator = _c === void 0 ? '.' : _c, _d = _a.allowDecimals, allowDecimals = _d === void 0 ? true : _d, _e = _a.decimalsLimit, decimalsLimit = _e === void 0 ? 2 : _e, _f = _a.allowNegativeValue, allowNegativeValue = _f === void 0 ? true : _f, _g = _a.disableAbbreviations, disableAbbreviations = _g === void 0 ? false : _g, _h = _a.prefix, prefix = _h === void 0 ? '' : _h, _j = _a.transformRawValue, transformRawValue = _j === void 0 ? function (rawValue) { return rawValue; } : _j;
    var transformedValue = transformRawValue(value);
    if (transformedValue === '-') {
        return transformedValue;
    }
    var abbreviations = disableAbbreviations ? [] : ['k', 'm', 'b'];
    var reg = new RegExp("((^|\\D)-\\d)|(-" + escapeRegExp(prefix) + ")");
    var isNegative = reg.test(transformedValue);
    // Is there a digit before the prefix? eg. 1$
    var _k = RegExp("(\\d+)-?" + escapeRegExp(prefix)).exec(value) || [], prefixWithValue = _k[0], preValue = _k[1];
    var withoutPrefix = prefix
        ? prefixWithValue
            ? transformedValue.replace(prefixWithValue, '').concat(preValue)
            : transformedValue.replace(prefix, '')
        : transformedValue;
    var withoutSeparators = removeSeparators(withoutPrefix, groupSeparator);
    var withoutInvalidChars = removeInvalidChars(withoutSeparators, __spreadArray([
        groupSeparator,
        decimalSeparator
    ], abbreviations));
    var valueOnly = withoutInvalidChars;
    if (!disableAbbreviations) {
        // disallow letter without number
        if (abbreviations.some(function (letter) { return letter === withoutInvalidChars.toLowerCase(); })) {
            return '';
        }
        var parsed = parseAbbrValue(withoutInvalidChars, decimalSeparator);
        if (parsed) {
            valueOnly = String(parsed);
        }
    }
    var includeNegative = isNegative && allowNegativeValue ? '-' : '';
    if (decimalSeparator && valueOnly.includes(decimalSeparator)) {
        var _l = withoutInvalidChars.split(decimalSeparator), int = _l[0], decimals = _l[1];
        var trimmedDecimals = decimalsLimit && decimals ? decimals.slice(0, decimalsLimit) : decimals;
        var includeDecimals = allowDecimals ? "" + decimalSeparator + trimmedDecimals : '';
        return "" + includeNegative + int + includeDecimals;
    }
    return "" + includeNegative + valueOnly;
};

var fixedDecimalValue = function (value, decimalSeparator, fixedDecimalLength) {
    if (fixedDecimalLength && value.length > 1) {
        if (value.includes(decimalSeparator)) {
            var _a = value.split(decimalSeparator), int = _a[0], decimals = _a[1];
            if (decimals.length > fixedDecimalLength) {
                return "" + int + decimalSeparator + decimals.slice(0, fixedDecimalLength);
            }
        }
        var reg = value.length > fixedDecimalLength
            ? new RegExp("(\\d+)(\\d{" + fixedDecimalLength + "})")
            : new RegExp("(\\d)(\\d+)");
        var match = value.match(reg);
        if (match) {
            var int = match[1], decimals = match[2];
            return "" + int + decimalSeparator + decimals;
        }
    }
    return value;
};

var getSuffix = function (value, _a) {
    var _b = _a.groupSeparator, groupSeparator = _b === void 0 ? ',' : _b, _c = _a.decimalSeparator, decimalSeparator = _c === void 0 ? '.' : _c;
    var suffixReg = new RegExp("\\d([^" + escapeRegExp(groupSeparator) + escapeRegExp(decimalSeparator) + "0-9]+)");
    var suffixMatch = value.match(suffixReg);
    return suffixMatch ? suffixMatch[1] : undefined;
};

/**
 * Format value with decimal separator, group separator and prefix
 */
var formatValue = function (options) {
    var _value = options.value, decimalSeparator = options.decimalSeparator, intlConfig = options.intlConfig, decimalScale = options.decimalScale, _a = options.prefix, prefix = _a === void 0 ? '' : _a, _b = options.suffix, suffix = _b === void 0 ? '' : _b;
    if (_value === '' || _value === undefined) {
        return '';
    }
    if (_value === '-') {
        return '-';
    }
    var isNegative = new RegExp("^\\d?-" + (prefix ? escapeRegExp(prefix) + "?" : '') + "\\d").test(_value);
    var value = decimalSeparator !== '.'
        ? replaceDecimalSeparator(_value, decimalSeparator, isNegative)
        : _value;
    var numberFormatter = intlConfig
        ? new Intl.NumberFormat(intlConfig.locale, intlConfig.currency
            ? {
                style: 'currency',
                currency: intlConfig.currency,
                minimumFractionDigits: decimalScale || 0,
                maximumFractionDigits: 20,
            }
            : undefined)
        : new Intl.NumberFormat(undefined, {
            minimumFractionDigits: decimalScale || 0,
            maximumFractionDigits: 20,
        });
    var parts = numberFormatter.formatToParts(Number(value));
    var formatted = replaceParts(parts, options);
    // Does intl formatting add a suffix?
    var intlSuffix = getSuffix(formatted, __assign({}, options));
    // Include decimal separator if user input ends with decimal separator
    var includeDecimalSeparator = _value.slice(-1) === decimalSeparator ? decimalSeparator : '';
    var _c = value.match(RegExp('\\d+\\.(\\d+)')) || [], decimals = _c[1];
    // Keep original decimal padding if no decimalScale
    if (decimalScale === undefined && decimals && decimalSeparator) {
        if (formatted.includes(decimalSeparator)) {
            formatted = formatted.replace(RegExp("(\\d+)(" + escapeRegExp(decimalSeparator) + ")(\\d+)", 'g'), "$1$2" + decimals);
        }
        else {
            if (intlSuffix && !suffix) {
                formatted = formatted.replace(intlSuffix, "" + decimalSeparator + decimals + intlSuffix);
            }
            else {
                formatted = "" + formatted + decimalSeparator + decimals;
            }
        }
    }
    if (suffix && includeDecimalSeparator) {
        return "" + formatted + includeDecimalSeparator + suffix;
    }
    if (intlSuffix && includeDecimalSeparator) {
        return formatted.replace(intlSuffix, "" + includeDecimalSeparator + intlSuffix);
    }
    if (intlSuffix && suffix) {
        return formatted.replace(intlSuffix, "" + includeDecimalSeparator + suffix);
    }
    return [formatted, includeDecimalSeparator, suffix].join('');
};
/**
 * Before converting to Number, decimal separator has to be .
 */
var replaceDecimalSeparator = function (value, decimalSeparator, isNegative) {
    var newValue = value;
    if (decimalSeparator && decimalSeparator !== '.') {
        newValue = newValue.replace(RegExp(escapeRegExp(decimalSeparator), 'g'), '.');
        if (isNegative && decimalSeparator === '-') {
            newValue = "-" + newValue.slice(1);
        }
    }
    return newValue;
};
var replaceParts = function (parts, _a) {
    var prefix = _a.prefix, groupSeparator = _a.groupSeparator, decimalSeparator = _a.decimalSeparator, decimalScale = _a.decimalScale, _b = _a.disableGroupSeparators, disableGroupSeparators = _b === void 0 ? false : _b;
    return parts
        .reduce(function (prev, _a, i) {
        var type = _a.type, value = _a.value;
        if (i === 0 && prefix) {
            if (type === 'minusSign') {
                return [value, prefix];
            }
            if (type === 'currency') {
                return __spreadArray(__spreadArray([], prev), [prefix]);
            }
            return [prefix, value];
        }
        if (type === 'currency') {
            return prefix ? prev : __spreadArray(__spreadArray([], prev), [value]);
        }
        if (type === 'group') {
            return !disableGroupSeparators
                ? __spreadArray(__spreadArray([], prev), [groupSeparator !== undefined ? groupSeparator : value]) : prev;
        }
        if (type === 'decimal') {
            if (decimalScale !== undefined && decimalScale === 0) {
                return prev;
            }
            return __spreadArray(__spreadArray([], prev), [decimalSeparator !== undefined ? decimalSeparator : value]);
        }
        if (type === 'fraction') {
            return __spreadArray(__spreadArray([], prev), [decimalScale !== undefined ? value.slice(0, decimalScale) : value]);
        }
        return __spreadArray(__spreadArray([], prev), [value]);
    }, [''])
        .join('');
};

var defaultConfig = {
    currencySymbol: '',
    groupSeparator: '',
    decimalSeparator: '',
    prefix: '',
    suffix: '',
};
/**
 * Get locale config from input or default
 */
var getLocaleConfig = function (intlConfig) {
    var _a = intlConfig || {}, locale = _a.locale, currency = _a.currency;
    var numberFormatter = locale
        ? new Intl.NumberFormat(locale, currency ? { currency: currency, style: 'currency' } : undefined)
        : new Intl.NumberFormat();
    return numberFormatter.formatToParts(1000.1).reduce(function (prev, curr, i) {
        if (curr.type === 'currency') {
            if (i === 0) {
                return __assign(__assign({}, prev), { currencySymbol: curr.value, prefix: curr.value });
            }
            else {
                return __assign(__assign({}, prev), { currencySymbol: curr.value, suffix: curr.value });
            }
        }
        if (curr.type === 'group') {
            return __assign(__assign({}, prev), { groupSeparator: curr.value });
        }
        if (curr.type === 'decimal') {
            return __assign(__assign({}, prev), { decimalSeparator: curr.value });
        }
        return prev;
    }, defaultConfig);
};

var isNumber = function (input) { return RegExp(/\d/, 'gi').test(input); };

var padTrimValue = function (value, decimalSeparator, decimalScale) {
    if (decimalSeparator === void 0) { decimalSeparator = '.'; }
    if (decimalScale === undefined || value === '' || value === undefined) {
        return value;
    }
    if (!value.match(/\d/g)) {
        return '';
    }
    var _a = value.split(decimalSeparator), int = _a[0], decimals = _a[1];
    if (decimalScale === 0) {
        return int;
    }
    var newValue = decimals || '';
    if (newValue.length < decimalScale) {
        while (newValue.length < decimalScale) {
            newValue += '0';
        }
    }
    else {
        newValue = newValue.slice(0, decimalScale);
    }
    return "" + int + decimalSeparator + newValue;
};

/**
 * Based on the last key stroke and the cursor position, update the value
 * and reposition the cursor to the right place
 */
var repositionCursor = function (_a) {
    var selectionStart = _a.selectionStart, value = _a.value, lastKeyStroke = _a.lastKeyStroke, stateValue = _a.stateValue, groupSeparator = _a.groupSeparator;
    var cursorPosition = selectionStart;
    var modifiedValue = value;
    if (stateValue && cursorPosition) {
        var splitValue = value.split('');
        // if cursor is to right of groupSeparator and backspace pressed, delete the character to the left of the separator and reposition the cursor
        if (lastKeyStroke === 'Backspace' && stateValue[cursorPosition] === groupSeparator) {
            splitValue.splice(cursorPosition - 1, 1);
            cursorPosition -= 1;
        }
        // if cursor is to left of groupSeparator and delete pressed, delete the character to the right of the separator and reposition the cursor
        if (lastKeyStroke === 'Delete' && stateValue[cursorPosition] === groupSeparator) {
            splitValue.splice(cursorPosition, 1);
            cursorPosition += 1;
        }
        modifiedValue = splitValue.join('');
        return { modifiedValue: modifiedValue, cursorPosition: cursorPosition };
    }
    return { modifiedValue: modifiedValue, cursorPosition: selectionStart };
};

var CurrencyInput = (0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(function (_a, ref) {
    var _b = _a.allowDecimals, allowDecimals = _b === void 0 ? true : _b, _c = _a.allowNegativeValue, allowNegativeValue = _c === void 0 ? true : _c, id = _a.id, name = _a.name, className = _a.className, customInput = _a.customInput, decimalsLimit = _a.decimalsLimit, defaultValue = _a.defaultValue, _d = _a.disabled, disabled = _d === void 0 ? false : _d, userMaxLength = _a.maxLength, userValue = _a.value, onValueChange = _a.onValueChange, fixedDecimalLength = _a.fixedDecimalLength, placeholder = _a.placeholder, decimalScale = _a.decimalScale, prefix = _a.prefix, suffix = _a.suffix, intlConfig = _a.intlConfig, step = _a.step, min = _a.min, max = _a.max, _e = _a.disableGroupSeparators, disableGroupSeparators = _e === void 0 ? false : _e, _f = _a.disableAbbreviations, disableAbbreviations = _f === void 0 ? false : _f, _decimalSeparator = _a.decimalSeparator, _groupSeparator = _a.groupSeparator, onChange = _a.onChange, onFocus = _a.onFocus, onBlur = _a.onBlur, onKeyDown = _a.onKeyDown, onKeyUp = _a.onKeyUp, transformRawValue = _a.transformRawValue, props = __rest(_a, ["allowDecimals", "allowNegativeValue", "id", "name", "className", "customInput", "decimalsLimit", "defaultValue", "disabled", "maxLength", "value", "onValueChange", "fixedDecimalLength", "placeholder", "decimalScale", "prefix", "suffix", "intlConfig", "step", "min", "max", "disableGroupSeparators", "disableAbbreviations", "decimalSeparator", "groupSeparator", "onChange", "onFocus", "onBlur", "onKeyDown", "onKeyUp", "transformRawValue"]);
    if (_decimalSeparator && isNumber(_decimalSeparator)) {
        throw new Error('decimalSeparator cannot be a number');
    }
    if (_groupSeparator && isNumber(_groupSeparator)) {
        throw new Error('groupSeparator cannot be a number');
    }
    var localeConfig = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(function () { return getLocaleConfig(intlConfig); }, [intlConfig]);
    var decimalSeparator = _decimalSeparator || localeConfig.decimalSeparator || '';
    var groupSeparator = _groupSeparator || localeConfig.groupSeparator || '';
    if (decimalSeparator &&
        groupSeparator &&
        decimalSeparator === groupSeparator &&
        disableGroupSeparators === false) {
        throw new Error('decimalSeparator cannot be the same as groupSeparator');
    }
    var formatValueOptions = {
        decimalSeparator: decimalSeparator,
        groupSeparator: groupSeparator,
        disableGroupSeparators: disableGroupSeparators,
        intlConfig: intlConfig,
        prefix: prefix || localeConfig.prefix,
        suffix: suffix,
    };
    var cleanValueOptions = {
        decimalSeparator: decimalSeparator,
        groupSeparator: groupSeparator,
        allowDecimals: allowDecimals,
        decimalsLimit: decimalsLimit || fixedDecimalLength || 2,
        allowNegativeValue: allowNegativeValue,
        disableAbbreviations: disableAbbreviations,
        prefix: prefix || localeConfig.prefix,
        transformRawValue: transformRawValue,
    };
    var formattedStateValue = defaultValue !== undefined && defaultValue !== null
        ? formatValue(__assign(__assign({}, formatValueOptions), { decimalScale: decimalScale, value: String(defaultValue) }))
        : userValue !== undefined && userValue !== null
            ? formatValue(__assign(__assign({}, formatValueOptions), { decimalScale: decimalScale, value: String(userValue) }))
            : '';
    var _g = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(formattedStateValue), stateValue = _g[0], setStateValue = _g[1];
    var _h = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false), dirty = _h[0], setDirty = _h[1];
    var _j = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0), cursor = _j[0], setCursor = _j[1];
    var _k = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0), changeCount = _k[0], setChangeCount = _k[1];
    var _l = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null), lastKeyStroke = _l[0], setLastKeyStroke = _l[1];
    var inputRef = ref || (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
    /**
     * Process change in value
     */
    var processChange = function (value, selectionStart) {
        setDirty(true);
        var _a = repositionCursor({
            selectionStart: selectionStart,
            value: value,
            lastKeyStroke: lastKeyStroke,
            stateValue: stateValue,
            groupSeparator: groupSeparator,
        }), modifiedValue = _a.modifiedValue, cursorPosition = _a.cursorPosition;
        var stringValue = cleanValue(__assign({ value: modifiedValue }, cleanValueOptions));
        if (userMaxLength && stringValue.replace(/-/g, '').length > userMaxLength) {
            return;
        }
        if (stringValue === '' || stringValue === '-' || stringValue === decimalSeparator) {
            onValueChange && onValueChange(undefined, name, { float: null, formatted: '', value: '' });
            setStateValue(stringValue);
            return;
        }
        var numberValue = parseFloat(stringValue.replace(decimalSeparator, '.'));
        var formattedValue = formatValue(__assign({ value: stringValue }, formatValueOptions));
        if (cursorPosition !== undefined && cursorPosition !== null) {
            // Prevent cursor jumping
            var newCursor = cursorPosition + (formattedValue.length - value.length);
            newCursor = newCursor <= 0 ? (prefix ? prefix.length : 0) : newCursor;
            setCursor(newCursor);
            setChangeCount(changeCount + 1);
        }
        setStateValue(formattedValue);
        if (onValueChange) {
            var values = {
                float: numberValue,
                formatted: formattedValue,
                value: stringValue,
            };
            onValueChange(stringValue, name, values);
        }
    };
    /**
     * Handle change event
     */
    var handleOnChange = function (event) {
        var _a = event.target, value = _a.value, selectionStart = _a.selectionStart;
        processChange(value, selectionStart);
        onChange && onChange(event);
    };
    /**
     * Handle focus event
     */
    var handleOnFocus = function (event) {
        onFocus && onFocus(event);
        return stateValue ? stateValue.length : 0;
    };
    /**
     * Handle blur event
     *
     * Format value by padding/trimming decimals if required by
     */
    var handleOnBlur = function (event) {
        var value = event.target.value;
        var valueOnly = cleanValue(__assign({ value: value }, cleanValueOptions));
        if (valueOnly === '-' || !valueOnly) {
            setStateValue('');
            onBlur && onBlur(event);
            return;
        }
        var fixedDecimals = fixedDecimalValue(valueOnly, decimalSeparator, fixedDecimalLength);
        var newValue = padTrimValue(fixedDecimals, decimalSeparator, decimalScale !== undefined ? decimalScale : fixedDecimalLength);
        var numberValue = parseFloat(newValue.replace(decimalSeparator, '.'));
        var formattedValue = formatValue(__assign(__assign({}, formatValueOptions), { value: newValue }));
        if (onValueChange) {
            onValueChange(newValue, name, {
                float: numberValue,
                formatted: formattedValue,
                value: newValue,
            });
        }
        setStateValue(formattedValue);
        onBlur && onBlur(event);
    };
    /**
     * Handle key down event
     *
     * Increase or decrease value by step
     */
    var handleOnKeyDown = function (event) {
        var key = event.key;
        setLastKeyStroke(key);
        if (step && (key === 'ArrowUp' || key === 'ArrowDown')) {
            event.preventDefault();
            setCursor(stateValue.length);
            var currentValue = parseFloat(userValue !== undefined && userValue !== null
                ? String(userValue).replace(decimalSeparator, '.')
                : cleanValue(__assign({ value: stateValue }, cleanValueOptions))) || 0;
            var newValue = key === 'ArrowUp' ? currentValue + step : currentValue - step;
            if (min !== undefined && newValue < min) {
                return;
            }
            if (max !== undefined && newValue > max) {
                return;
            }
            var fixedLength = String(step).includes('.')
                ? Number(String(step).split('.')[1].length)
                : undefined;
            processChange(String(fixedLength ? newValue.toFixed(fixedLength) : newValue).replace('.', decimalSeparator));
        }
        onKeyDown && onKeyDown(event);
    };
    /**
     * Handle key up event
     *
     * Move cursor if there is a suffix to prevent user typing past suffix
     */
    var handleOnKeyUp = function (event) {
        var key = event.key, selectionStart = event.currentTarget.selectionStart;
        if (key !== 'ArrowUp' && key !== 'ArrowDown' && stateValue !== '-') {
            var suffix_1 = getSuffix(stateValue, { groupSeparator: groupSeparator, decimalSeparator: decimalSeparator });
            if (suffix_1 && selectionStart && selectionStart > stateValue.length - suffix_1.length) {
                /* istanbul ignore else */
                if (inputRef && typeof inputRef === 'object' && inputRef.current) {
                    var newCursor = stateValue.length - suffix_1.length;
                    inputRef.current.setSelectionRange(newCursor, newCursor);
                }
            }
        }
        onKeyUp && onKeyUp(event);
    };
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
        // prevent cursor jumping if editing value
        if (dirty &&
            stateValue !== '-' &&
            inputRef &&
            typeof inputRef === 'object' &&
            inputRef.current) {
            inputRef.current.setSelectionRange(cursor, cursor);
        }
    }, [stateValue, cursor, inputRef, dirty, changeCount]);
    /**
     * If user has only entered "-" or decimal separator,
     * keep the char to allow them to enter next value
     */
    var getRenderValue = function () {
        if (userValue !== undefined &&
            userValue !== null &&
            stateValue !== '-' &&
            (!decimalSeparator || stateValue !== decimalSeparator)) {
            return formatValue(__assign(__assign({}, formatValueOptions), { decimalScale: dirty ? undefined : decimalScale, value: String(userValue) }));
        }
        return stateValue;
    };
    var inputProps = __assign({ type: 'text', inputMode: 'decimal', id: id,
        name: name,
        className: className, onChange: handleOnChange, onBlur: handleOnBlur, onFocus: handleOnFocus, onKeyDown: handleOnKeyDown, onKeyUp: handleOnKeyUp, placeholder: placeholder,
        disabled: disabled, value: getRenderValue(), ref: inputRef }, props);
    if (customInput) {
        var CustomInput = customInput;
        return react__WEBPACK_IMPORTED_MODULE_0___default().createElement(CustomInput, __assign({}, inputProps));
    }
    return react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", __assign({}, inputProps));
});
CurrencyInput.displayName = 'CurrencyInput';

/* harmony default export */ __webpack_exports__["default"] = (CurrencyInput);

//# sourceMappingURL=index.esm.js.map


/***/ }),

/***/ "./node_modules/react-is/cjs/react-is.development.js":
/*!***********************************************************!*\
  !*** ./node_modules/react-is/cjs/react-is.development.js ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, exports) {

"use strict";
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */





if (true) {
  (function() {
'use strict';

// The Symbol used to tag the ReactElement-like types. If there is no native Symbol
// nor polyfill, then a plain number is used for performance.
var hasSymbol = typeof Symbol === 'function' && Symbol.for;
var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for('react.element') : 0xeac7;
var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for('react.portal') : 0xeaca;
var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for('react.fragment') : 0xeacb;
var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for('react.strict_mode') : 0xeacc;
var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for('react.profiler') : 0xead2;
var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for('react.provider') : 0xeacd;
var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for('react.context') : 0xeace; // TODO: We don't use AsyncMode or ConcurrentMode anymore. They were temporary
// (unstable) APIs that have been removed. Can we remove the symbols?

var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol.for('react.async_mode') : 0xeacf;
var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for('react.concurrent_mode') : 0xeacf;
var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for('react.forward_ref') : 0xead0;
var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for('react.suspense') : 0xead1;
var REACT_SUSPENSE_LIST_TYPE = hasSymbol ? Symbol.for('react.suspense_list') : 0xead8;
var REACT_MEMO_TYPE = hasSymbol ? Symbol.for('react.memo') : 0xead3;
var REACT_LAZY_TYPE = hasSymbol ? Symbol.for('react.lazy') : 0xead4;
var REACT_BLOCK_TYPE = hasSymbol ? Symbol.for('react.block') : 0xead9;
var REACT_FUNDAMENTAL_TYPE = hasSymbol ? Symbol.for('react.fundamental') : 0xead5;
var REACT_RESPONDER_TYPE = hasSymbol ? Symbol.for('react.responder') : 0xead6;
var REACT_SCOPE_TYPE = hasSymbol ? Symbol.for('react.scope') : 0xead7;

function isValidElementType(type) {
  return typeof type === 'string' || typeof type === 'function' || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
  type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || typeof type === 'object' && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_RESPONDER_TYPE || type.$$typeof === REACT_SCOPE_TYPE || type.$$typeof === REACT_BLOCK_TYPE);
}

function typeOf(object) {
  if (typeof object === 'object' && object !== null) {
    var $$typeof = object.$$typeof;

    switch ($$typeof) {
      case REACT_ELEMENT_TYPE:
        var type = object.type;

        switch (type) {
          case REACT_ASYNC_MODE_TYPE:
          case REACT_CONCURRENT_MODE_TYPE:
          case REACT_FRAGMENT_TYPE:
          case REACT_PROFILER_TYPE:
          case REACT_STRICT_MODE_TYPE:
          case REACT_SUSPENSE_TYPE:
            return type;

          default:
            var $$typeofType = type && type.$$typeof;

            switch ($$typeofType) {
              case REACT_CONTEXT_TYPE:
              case REACT_FORWARD_REF_TYPE:
              case REACT_LAZY_TYPE:
              case REACT_MEMO_TYPE:
              case REACT_PROVIDER_TYPE:
                return $$typeofType;

              default:
                return $$typeof;
            }

        }

      case REACT_PORTAL_TYPE:
        return $$typeof;
    }
  }

  return undefined;
} // AsyncMode is deprecated along with isAsyncMode

var AsyncMode = REACT_ASYNC_MODE_TYPE;
var ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
var ContextConsumer = REACT_CONTEXT_TYPE;
var ContextProvider = REACT_PROVIDER_TYPE;
var Element = REACT_ELEMENT_TYPE;
var ForwardRef = REACT_FORWARD_REF_TYPE;
var Fragment = REACT_FRAGMENT_TYPE;
var Lazy = REACT_LAZY_TYPE;
var Memo = REACT_MEMO_TYPE;
var Portal = REACT_PORTAL_TYPE;
var Profiler = REACT_PROFILER_TYPE;
var StrictMode = REACT_STRICT_MODE_TYPE;
var Suspense = REACT_SUSPENSE_TYPE;
var hasWarnedAboutDeprecatedIsAsyncMode = false; // AsyncMode should be deprecated

function isAsyncMode(object) {
  {
    if (!hasWarnedAboutDeprecatedIsAsyncMode) {
      hasWarnedAboutDeprecatedIsAsyncMode = true; // Using console['warn'] to evade Babel and ESLint

      console['warn']('The ReactIs.isAsyncMode() alias has been deprecated, ' + 'and will be removed in React 17+. Update your code to use ' + 'ReactIs.isConcurrentMode() instead. It has the exact same API.');
    }
  }

  return isConcurrentMode(object) || typeOf(object) === REACT_ASYNC_MODE_TYPE;
}
function isConcurrentMode(object) {
  return typeOf(object) === REACT_CONCURRENT_MODE_TYPE;
}
function isContextConsumer(object) {
  return typeOf(object) === REACT_CONTEXT_TYPE;
}
function isContextProvider(object) {
  return typeOf(object) === REACT_PROVIDER_TYPE;
}
function isElement(object) {
  return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
}
function isForwardRef(object) {
  return typeOf(object) === REACT_FORWARD_REF_TYPE;
}
function isFragment(object) {
  return typeOf(object) === REACT_FRAGMENT_TYPE;
}
function isLazy(object) {
  return typeOf(object) === REACT_LAZY_TYPE;
}
function isMemo(object) {
  return typeOf(object) === REACT_MEMO_TYPE;
}
function isPortal(object) {
  return typeOf(object) === REACT_PORTAL_TYPE;
}
function isProfiler(object) {
  return typeOf(object) === REACT_PROFILER_TYPE;
}
function isStrictMode(object) {
  return typeOf(object) === REACT_STRICT_MODE_TYPE;
}
function isSuspense(object) {
  return typeOf(object) === REACT_SUSPENSE_TYPE;
}

exports.AsyncMode = AsyncMode;
exports.ConcurrentMode = ConcurrentMode;
exports.ContextConsumer = ContextConsumer;
exports.ContextProvider = ContextProvider;
exports.Element = Element;
exports.ForwardRef = ForwardRef;
exports.Fragment = Fragment;
exports.Lazy = Lazy;
exports.Memo = Memo;
exports.Portal = Portal;
exports.Profiler = Profiler;
exports.StrictMode = StrictMode;
exports.Suspense = Suspense;
exports.isAsyncMode = isAsyncMode;
exports.isConcurrentMode = isConcurrentMode;
exports.isContextConsumer = isContextConsumer;
exports.isContextProvider = isContextProvider;
exports.isElement = isElement;
exports.isForwardRef = isForwardRef;
exports.isFragment = isFragment;
exports.isLazy = isLazy;
exports.isMemo = isMemo;
exports.isPortal = isPortal;
exports.isProfiler = isProfiler;
exports.isStrictMode = isStrictMode;
exports.isSuspense = isSuspense;
exports.isValidElementType = isValidElementType;
exports.typeOf = typeOf;
  })();
}


/***/ }),

/***/ "./node_modules/react-is/index.js":
/*!****************************************!*\
  !*** ./node_modules/react-is/index.js ***!
  \****************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";


if (false) {} else {
  module.exports = __webpack_require__(/*! ./cjs/react-is.development.js */ "./node_modules/react-is/cjs/react-is.development.js");
}


/***/ }),

/***/ "./node_modules/simple-swizzle/index.js":
/*!**********************************************!*\
  !*** ./node_modules/simple-swizzle/index.js ***!
  \**********************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";


var isArrayish = __webpack_require__(/*! is-arrayish */ "./node_modules/simple-swizzle/node_modules/is-arrayish/index.js");

var concat = Array.prototype.concat;
var slice = Array.prototype.slice;

var swizzle = module.exports = function swizzle(args) {
	var results = [];

	for (var i = 0, len = args.length; i < len; i++) {
		var arg = args[i];

		if (isArrayish(arg)) {
			// http://jsperf.com/javascript-array-concat-vs-push/98
			results = concat.call(results, slice.call(arg));
		} else {
			results.push(arg);
		}
	}

	return results;
};

swizzle.wrap = function (fn) {
	return function () {
		return fn(swizzle(arguments));
	};
};


/***/ }),

/***/ "./node_modules/simple-swizzle/node_modules/is-arrayish/index.js":
/*!***********************************************************************!*\
  !*** ./node_modules/simple-swizzle/node_modules/is-arrayish/index.js ***!
  \***********************************************************************/
/***/ (function(module) {

module.exports = function isArrayish(obj) {
	if (!obj || typeof obj === 'string') {
		return false;
	}

	return obj instanceof Array || Array.isArray(obj) ||
		(obj.length >= 0 && (obj.splice instanceof Function ||
			(Object.getOwnPropertyDescriptor(obj, (obj.length - 1)) && obj.constructor.name !== 'String')));
};


/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "React" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = window["React"];

/***/ }),

/***/ "@wordpress/block-editor":
/*!*************************************!*\
  !*** external ["wp","blockEditor"] ***!
  \*************************************/
/***/ (function(module) {

"use strict";
module.exports = window["wp"]["blockEditor"];

/***/ }),

/***/ "@wordpress/blocks":
/*!********************************!*\
  !*** external ["wp","blocks"] ***!
  \********************************/
/***/ (function(module) {

"use strict";
module.exports = window["wp"]["blocks"];

/***/ }),

/***/ "@wordpress/components":
/*!************************************!*\
  !*** external ["wp","components"] ***!
  \************************************/
/***/ (function(module) {

"use strict";
module.exports = window["wp"]["components"];

/***/ }),

/***/ "@wordpress/data":
/*!******************************!*\
  !*** external ["wp","data"] ***!
  \******************************/
/***/ (function(module) {

"use strict";
module.exports = window["wp"]["data"];

/***/ }),

/***/ "@wordpress/dom-ready":
/*!**********************************!*\
  !*** external ["wp","domReady"] ***!
  \**********************************/
/***/ (function(module) {

"use strict";
module.exports = window["wp"]["domReady"];

/***/ }),

/***/ "@wordpress/element":
/*!*********************************!*\
  !*** external ["wp","element"] ***!
  \*********************************/
/***/ (function(module) {

"use strict";
module.exports = window["wp"]["element"];

/***/ }),

/***/ "@wordpress/i18n":
/*!******************************!*\
  !*** external ["wp","i18n"] ***!
  \******************************/
/***/ (function(module) {

"use strict";
module.exports = window["wp"]["i18n"];

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/amd define */
/******/ 	!function() {
/******/ 		__webpack_require__.amdD = function () {
/******/ 			throw new Error('define cannot be used indirect');
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	!function() {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = function(result, chunkIds, fn, priority) {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var chunkIds = deferred[i][0];
/******/ 				var fn = deferred[i][1];
/******/ 				var priority = deferred[i][2];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every(function(key) { return __webpack_require__.O[key](chunkIds[j]); })) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	!function() {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	!function() {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"index": 0,
/******/ 			"style-index": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = function(chunkId) { return installedChunks[chunkId] === 0; };
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = function(parentChunkLoadingFunction, data) {
/******/ 			var chunkIds = data[0];
/******/ 			var moreModules = data[1];
/******/ 			var runtime = data[2];
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some(function(id) { return installedChunks[id] !== 0; })) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkdonation_blocks_for_stripe"] = self["webpackChunkdonation_blocks_for_stripe"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["style-index"], function() { return __webpack_require__("./src/index.js"); })
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=index.js.map