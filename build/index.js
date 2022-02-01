/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/donationForm.js":
/*!*****************************!*\
  !*** ./src/donationForm.js ***!
  \*****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ DonationForm; }
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.scss */ "./src/style.scss");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_currency_input_field__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-currency-input-field */ "./node_modules/react-currency-input-field/dist/index.esm.js");


/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * All files containing `style` keyword are bundled together. The code used
 * gets applied both to the front of your site and to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */





function DonationForm(props) {
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: 'donation-form'
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
    id: "input-example",
    name: "input-name",
    defaultValue: 1000,
    decimalsLimit: 2,
    onValueChange: (value, name) => console.log(value, name)
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "donation-form-field-row donation-form-amount-btns"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("input", {
    type: 'button',
    value: '$5',
    className: 'donation-form-field-button'
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("input", {
    type: 'button',
    value: '$10',
    className: 'donation-form-field-button'
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("input", {
    type: 'button',
    value: '$25',
    className: 'donation-form-field-button'
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("input", {
    type: 'button',
    value: '$50',
    className: 'donation-form-field-button'
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("input", {
    type: 'button',
    value: '$50',
    className: 'donation-form-field-button'
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("input", {
    type: 'button',
    value: '$50',
    className: 'donation-form-field-button'
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
    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()('donation-form-submit')
  })), window.location.protocol === 'https:' && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()('donation-form-field-row')
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()('donation-form-secure-badge')
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('100% Secure', 'donation-form-block')))))));
}
DonationForm.defaultProps = {
  attributes: []
};

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
  const {
    backgroundId,
    backgroundUrl,
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
  }, [onSelectBackground]);
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
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Upload or select an image for the header background.', 'donation-form-block')))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelRow, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.TextControl, {
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
  }))))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__.useBlockProps)(), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_donationForm__WEBPACK_IMPORTED_MODULE_2__["default"], {
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
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
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