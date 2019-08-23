import * as React from 'react';
import { CubesIcon } from '@patternfly/react-icons';
import {
  PageSection,
  Button,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbHeading,
  Stack,
  StackItem
} from '@patternfly/react-core';
import { ResourcesToolbar } from '@app/Components/ResourcesToolbar';
import { ResourcesList } from '@app/Components/ResourcesList';

const Resources: React.FunctionComponent<any> = (props) => {
  return (
    <>
      <PageSection variant="light" hidden>
        <div className="pf-l-flex pf-u-justify-content-space-between">
          <Breadcrumb>
            <BreadcrumbItem to="#">Clusters</BreadcrumbItem>
            <BreadcrumbItem to="#">(cluster name)</BreadcrumbItem>
            <BreadcrumbHeading to="#">Resources</BreadcrumbHeading>
          </Breadcrumb>
          <ResourcesToolbar />
        </div>
      </PageSection>
      <PageSection variant="light">
        <Stack gutter="md">
          <StackItem>
            <Breadcrumb>
              <BreadcrumbItem to="#">Clusters</BreadcrumbItem>
              <BreadcrumbHeading to="#">(cluster name)</BreadcrumbHeading>
            </Breadcrumb>
          </StackItem>
          <StackItem>
          <div className="pf-c-tabs" id="primary">
            <ul className="pf-c-tabs__list">
              <li className="pf-c-tabs__item">
                <button className="pf-c-tabs__button" id="primary-tab1">
                  Properties
                </button>
              </li>
              <li className="pf-c-tabs__item">
                <button className="pf-c-tabs__button" id="primary-tab2">
                  Nodes
                </button>
              </li>
              <li className="pf-c-tabs__item pf-m-current">
                <button className="pf-c-tabs__button" id="primary-tab3">
                  Resources
                </button>
              </li>
              <li className="pf-c-tabs__item">
                <button className="pf-c-tabs__button" id="primary-tab1">
                  Fence Devices
                </button>
              </li>
              <li className="pf-c-tabs__item">
                <button className="pf-c-tabs__button" id="primary-tab2">
                  ACLs
                </button>
              </li>
            </ul>
          </div>
          </StackItem>
          <StackItem>
            <Button>Add Resource</Button>
            <Button variant="plain" aria-label="Action 1">
              Create Group
            </Button>          
          </StackItem>
        </Stack>
      </PageSection>
      <PageSection>  
        <ResourcesList fullWidth />
      </PageSection>
    </>
  );
}

export { Resources };
