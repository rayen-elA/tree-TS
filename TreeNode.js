"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TreeNode = void 0;
var TreeNode = /** @class */ (function () {
    function TreeNode(val) {
        this.val = val !== undefined ? val : 0;
        this.left = null;
        this.right = null;
    }
    TreeNode.prototype.getVal = function () {
        return this.val;
    };
    TreeNode.prototype.setVal = function (val) {
        this.val = val;
    };
    TreeNode.prototype.getLeft = function () {
        return this.left;
    };
    TreeNode.prototype.setLeft = function (left) {
        this.left = left;
    };
    TreeNode.prototype.getRight = function () {
        return this.right;
    };
    TreeNode.prototype.setRight = function (right) {
        this.right = right;
    };
    return TreeNode;
}());
exports.TreeNode = TreeNode;
