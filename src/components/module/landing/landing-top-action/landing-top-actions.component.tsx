/*
 * File: landing-top-actions.component.tsx
 * File Created: Sunday, 3rd January 2021 11:49:51 pm
 * -----
 * Last Modified: Sunday, 3rd January 2021 11:57:26 pm
 * -----
 * Description:
 */

import {
  MenuItem,
  OverflowMenu,
  TopNavigation,
  TopNavigationAction,
} from '@ui-kitten/components';
import React, {useState} from 'react';

import SharedIcons from '../../../shared/icons/icons.shared.component';

interface IFProps {}
const LandingTopAction: React.FC<IFProps> = () => {
  const [menuVisible, setMenuVisible] = useState(false);
  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  //! Render menu action

  const renderMenuAction = () => {
    return (
      <TopNavigationAction icon={SharedIcons.MapOutline} onPress={toggleMenu} />
    );
  };

  //!Render right action
  const renderRightActions = () => (
    <>
      <TopNavigationAction icon={SharedIcons.ShoppingBag} />
      <OverflowMenu
        anchor={renderMenuAction}
        visible={menuVisible}
        onBackdropPress={toggleMenu}>
        <MenuItem accessoryLeft={SharedIcons.InfoIcon} title="About" />
        <MenuItem accessoryLeft={SharedIcons.LogoutIcon} title="Logout" />
      </OverflowMenu>
    </>
  );
  //!Render back action
  const renderBackAction = () => (
    <TopNavigationAction icon={SharedIcons.MenuOutline} />
  );
  return (
    <TopNavigation
      title="Home"
      alignment="center"
      accessoryLeft={renderBackAction}
      accessoryRight={renderRightActions}
    />
  );
};

export default LandingTopAction;
