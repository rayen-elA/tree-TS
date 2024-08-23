"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var TreeNode_1 = require("./TreeNode");
var TreeVisService = /** @class */ (function () {
    function TreeVisService() {
    }
    // constructor(tree: TreeNode | null) {
    //     this.tree = tree;
    // }
    TreeVisService.prototype.setTreeRoot = function (val, tree) {
        var tree1 = new TreeNode_1.TreeNode(val);
        return tree1;
    };
    TreeVisService.prototype.printTree = function (tree) {
        if (tree !== null) {
            console.log(tree.getVal() + " | ");
            this.printTree(tree.getRight());
            this.printTree(tree.getLeft());
        }
        else {
            return;
        }
    };
    TreeVisService.prototype.addNode = function (tree, val) {
        var current = tree;
        var newNode = new TreeNode_1.TreeNode(val);
        var parent;
        if (tree === null) {
            tree = newNode;
        }
        else {
            while (true) {
                parent = current;
                if (val < current.getVal()) {
                    current = current.getLeft();
                    if (current === null) {
                        parent.setLeft(newNode);
                        break;
                    }
                }
                else {
                    current = current.getRight();
                    if (current === null) {
                        parent.setRight(newNode);
                        break;
                    }
                }
            }
        }
        console.log("");
    };
    TreeVisService.prototype.searchTree = function (current, val, parent) {
        while (true) {
            if (current.getVal() === val) {
                return parent;
            }
            parent = current;
            if (val < current.getVal()) {
                current = current.getLeft();
                if (current === null) {
                    console.log("Sorry, ".concat(val, " doesn't exist"));
                    return false;
                }
            }
            else {
                current = current.getRight();
                if (current === null) {
                    console.log("Sorry, ".concat(val, " doesn't exist"));
                    return false;
                }
            }
        }
    };
    TreeVisService.prototype.deleteNode = function (tree, val) {
        var current = tree;
        var parent = null;
        if (tree === null) {
            console.log("Tree is empty, nothing to delete");
        }
        else {
            var result = this.searchTree(tree, val, parent);
            if (typeof result === 'boolean') {
                return tree;
            }
            else {
                parent = result;
                if (parent !== null) {
                    if (parent.getLeft() !== null && parent.getLeft().getVal() === val) {
                        current = parent.getLeft();
                    }
                    if (parent.getRight() !== null && parent.getRight().getVal() === val) {
                        current = parent.getRight();
                    }
                }
            }
            if (current.getRight() === null && current.getLeft() === null) {
                if (parent === null) {
                    return null;
                }
                else if (parent.getLeft() === current) {
                    parent.setLeft(null);
                }
                else {
                    parent.setRight(null);
                }
                return tree;
            }
            if (current.getRight() === null && current.getLeft() !== null) {
                if (parent !== null) {
                    if (parent.getLeft() === current) {
                        parent.setLeft(current.getLeft());
                    }
                    else {
                        parent.setRight(current.getLeft());
                    }
                }
                else {
                    tree = tree.getLeft();
                }
                return tree;
            }
            else if (current.getLeft() === null && current.getRight() !== null) {
                if (parent !== null) {
                    if (parent.getLeft() === current) {
                        parent.setLeft(current.getRight());
                    }
                    else {
                        parent.setRight(current.getRight());
                    }
                }
                else {
                    tree = tree.getRight();
                }
            }
            if (current.getLeft() !== null && current.getRight() !== null) {
                if (parent === null) {
                    var x = this.searchSmallestNode(current.getRight());
                    current.setVal(x.getVal());
                    if (x.getLeft() !== null) {
                        x.getLeft().setRight(x.getRight());
                        current.setRight(x.getLeft());
                    }
                    else {
                        current.setRight(x.getRight());
                    }
                    return tree;
                }
                else {
                    var treeNode = this.searchSmallestNode(current.getRight());
                    if (treeNode === current.getRight()) {
                        if (current.getRight().getLeft() !== null) {
                            current.setVal(current.getRight().getLeft().getVal());
                            current.getRight().setLeft(null);
                        }
                        else {
                            current.setVal(current.getRight().getVal());
                            current.setRight(current.getRight().getRight());
                        }
                    }
                    else {
                        current.setVal(treeNode.getLeft().getVal());
                        treeNode.setLeft(treeNode.getLeft().getRight());
                    }
                }
                return tree;
            }
        }
        return tree;
    };
    TreeVisService.prototype.searchTreeDFS = function (tree, val, path) {
        if (tree === null)
            return false;
        path.push(tree.getVal());
        if (tree.getVal() === val)
            return true;
        if (this.searchTreeDFS(tree.getRight(), val, path))
            return true;
        if (this.searchTreeDFS(tree.getLeft(), val, path))
            return true;
        path.pop();
        return false;
    };
    TreeVisService.prototype.searchSmallestNode = function (tree) {
        var treeNode = tree;
        while (treeNode.getLeft() !== null) {
            while (treeNode.getLeft().getLeft() !== null) {
                treeNode = treeNode.getLeft();
            }
            if (treeNode.getLeft() !== null && treeNode.getLeft().getLeft() === null)
                break;
        }
        return treeNode;
    };
    return TreeVisService;
}());
var obj = new TreeVisService();
