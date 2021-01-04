/*
 * File: icons.shared.component.tsx
 * File Created: Sunday, 3rd January 2021 12:17:23 am
 * -----
 * Last Modified: Sunday, 3rd January 2021 11:45:32 pm
 * -----
 * Description: This file contained all about icons.
 *
 *
 *
 */

import {Icon} from '@ui-kitten/components';
import React from 'react';

const BackIcon = (props: any) => (
  <Icon fill="#5EA23A" {...props} name="arrow-back" />
);

const EditIcon = (props: any) => <Icon fill="#5EA23A" {...props} name="edit" />;

const MenuIcon = (props: any) => (
  <Icon fill="#5EA23A" {...props} name="more-vertical" />
);

const InfoIcon = (props: any) => <Icon fill="#5EA23A" {...props} name="info" />;

const LogoutIcon = (props: any) => (
  <Icon fill="#5EA23A" {...props} name="log-out" />
);
const MenuOutline = (props: any) => (
  <Icon fill="#5EA23A" {...props} name="menu-outline" />
);
const MapOutline = (props: any) => (
  <Icon fill="#5EA23A" {...props} name="map-outline" />
);
const ShoppingBag = (props: any) => (
  <Icon fill="#5EA23A" {...props} name="shopping-bag-outline" />
);

//!EXPORT ALL

const SharedIcons = {
  EditIcon,
  MenuOutline,
  MenuIcon,
  InfoIcon,
  LogoutIcon,
  BackIcon,
  MapOutline,
  ShoppingBag,
};

export default SharedIcons;
