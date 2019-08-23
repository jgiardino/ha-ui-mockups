import * as React from 'react';
import {
  Button,
  Toolbar,
  ToolbarGroup,
  ToolbarItem
} from '@patternfly/react-core';
import { ListUlIcon, SortAlphaDownIcon, TableIcon } from '@patternfly/react-icons';

const PreferencesToolbar: React.FunctionComponent<any> = (props) => {
  return (
    <Toolbar className="pf-l-toolbar">
        <ToolbarGroup>
          <ToolbarItem>
            <Button variant="plain" aria-label="Sort A-Z">
              <SortAlphaDownIcon />
            </Button>
          </ToolbarItem>
        </ToolbarGroup>
        <ToolbarGroup>
          <ToolbarItem>
            <Button>Add Preference</Button>
          </ToolbarItem>
        </ToolbarGroup>
      </Toolbar>
  );
}

export { PreferencesToolbar };
