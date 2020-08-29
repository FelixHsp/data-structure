/**
 * @file 二叉树中序遍历
 * @author felix
 */

import {root, IRoot} from './tree';

const inorder = (root: IRoot) => {
    if (!root) {
        return;
    }
    
    inorder(root.left);
    console.log(root.val);
    inorder(root.right);
};

inorder(root);