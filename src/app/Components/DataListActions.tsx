import React, { Component } from "react";
import {
  DataListAction,
  Dropdown,
  DropdownItem,
  DropdownPosition,
  DropdownDirection,
  KebabToggle
} from '@patternfly/react-core';

class DataListActions extends Component<{id: String, directionUp?: Boolean}, {isOpen: Boolean}> {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false
    };

    this.onToggle = this.onToggle.bind(this);
    this.onSelect = this.onSelect.bind(this);
  }

  onToggle = isOpen => {
    this.setState({ isOpen });
  };

  onSelect = event => {
    this.setState(prevState => ({
      isOpen: !prevState.isOpen
    }));
  };
  
  render() {
    const direction = this.props.directionUp ? DropdownDirection.up : DropdownDirection.down;
    return (
      <DataListAction aria-labelledby={`${this.props.id} ${this.props.id}-action`} id={`${this.props.id}-action`} aria-label="Actions">
        <Dropdown
          isPlain
          position={DropdownPosition.right}
          direction={direction}
          isOpen={this.state.isOpen}
          onSelect={this.onSelect}
          toggle={<KebabToggle onToggle={this.onToggle} />}
          aria-labelledby={`${this.props.id} ${this.props.id}-action`} id={`${this.props.id}-action`} aria-label="Actions"
          dropdownItems={[
            <DropdownItem key="link">Link</DropdownItem>,
            <DropdownItem key="action" component="button">
              Action
            </DropdownItem>,
            <DropdownItem key="disabled link" isDisabled>
              Disabled Link
            </DropdownItem>
          ]}
        />
      </DataListAction>
    );
  }
}
   
export { DataListActions };