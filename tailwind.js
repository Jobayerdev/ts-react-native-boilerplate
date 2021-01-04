/*
 * File: tailwind.js
 * File Created: Tuesday, 5th January 2021 1:02:22 am
 * -----
 * Last Modified: Tuesday, 5th January 2021 1:02:27 am
 * -----
 * Description:
 */

import {create} from 'tailwind-rn';
import styles from './styles.json';

const {tailwind, getColor} = create(styles);
export {tailwind, getColor};
