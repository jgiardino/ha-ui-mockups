import * as React from 'react';
import {
  Button,
  Dropdown,
  DropdownPosition,
  DropdownToggle,
  DropdownItem,
  KebabToggle,
  TextInput,
  Toolbar,
  ToolbarGroup,
  ToolbarItem,
  ToolbarSection
} from '@patternfly/react-core';
import { ListUlIcon, SortAlphaDownIcon, TableIcon } from '@patternfly/react-icons';

const ResourcesToolbar: React.FunctionComponent<any> = (props) => {
  return (
    <Toolbar className="pf-l-toolbar pf-u-justify-content-space-between">
      <ToolbarGroup>
        <ToolbarItem>
          <Button variant="plain" aria-label="Action 1">
            Create Group
          </Button>
        </ToolbarItem>
        <ToolbarItem>
          <Button>Add Resource</Button>
        </ToolbarItem>
      </ToolbarGroup>
    </Toolbar>
  );
}

export { ResourcesToolbar };
