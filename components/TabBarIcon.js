import React from '../../../../../Library/Caches/typescript/2.9/node_modules/@types/react';
import { Icon } from '../../../../../Library/Caches/typescript/2.9/node_modules/@types/expo';

import Colors from '../constants/Colors';

export default class TabBarIcon extends React.Component {
  render() {
    return (
      <Icon.Ionicons
        name={this.props.name}
        size={26}
        style={{ marginBottom: -3 }}
        color={this.props.focused ? Colors.tabIconSelected : Colors.tabIconDefault}
      />
    );
  }
}