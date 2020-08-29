/**
 * @file 二叉树后序遍历
 * @author felix
 */

import {root, IRoot} from './tree';

const postorder = (root: IRoot) => {
    if (!root) {
        return;
    }
    
    postorder(root.left);
    postorder(root.right);
    console.log(root.val);
};

postorder(root);