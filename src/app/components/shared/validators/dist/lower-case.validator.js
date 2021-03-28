"use strict";
exports.__esModule = true;
exports.lowerCaseValidator = void 0;
function lowerCaseValidator(control) {
    if (control.value.trim() && !/^[a-z0-9_\-]+$/.test(control.value)) {
        return { lowerCase: true };
    }
    return null;
}
exports.lowerCaseValidator = lowerCaseValidator;
