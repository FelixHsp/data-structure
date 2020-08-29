/**
 * @file 二叉树前序遍历
 * @author felix
 */

import {root, IRoot} from './tree';

const preorder = (root: IRoot) => {
    if (!root) {
        return;
    }

    console.log(root.val);
    preorder(root.left);
    preorder(root.right);
};

preorder(root);