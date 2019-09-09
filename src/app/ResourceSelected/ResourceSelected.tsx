import React, { Component } from 'react';
import { TimesIcon } from '@patternfly/react-icons';
import {
  Alert,
  AlertActionCloseButton,
  Button,
  PageSection,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbHeading,
  Stack,
  StackItem,
  Tabs,
  Tab,
  TabContent
} from '@patternfly/react-core';
import { ResourcesToolbar } from '@app/Components/ResourcesToolbar';
import { ResourcesList } from '@app/Components/ResourcesList';
import { PreferencesToolbar } from '@app/Components/PreferencesToolbar';
import { PreferencesDataList } from '@app/Components/PreferencesDataList';
import { AttributesForm } from '@app/Components/AttributesForm';

class ResourceSelected extends Component<{}, {activeTabKey: any }> {
  constructor(props) {
    super(props);
    this.state = {
      activeTabKey: 0
    };
    this.handleTabClick = this.handleTabClick.bind(this);
  };

  contentRef1 = React.createRef<HTMLDivElement>();
  contentRef2 = React.createRef<HTMLDivElement>();
  contentRef3 = React.createRef<HTMLDivElement>();
  contentRef4 = React.createRef<HTMLDivElement>();

  handleTabClick = (event, tabIndex) => {
    this.setState({
      activeTabKey: tabIndex
    });
  };

  render() { 
    return (
      <>
      <PageSection variant="light" hidden>
        <div className="pf-l-flex pf-u-justify-content-space-between">
          <Breadcrumb>
            <BreadcrumbItem to="#">Clusters</BreadcrumbItem>
            <BreadcrumbItem to="#">(cluster name)</BreadcrumbItem>
            <BreadcrumbItem to="#">Resources</BreadcrumbItem>
            <BreadcrumbHeading to="#">R1-clone</BreadcrumbHeading>
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
      <PageSection className="ha-m-full-height pf-m-fill">
            <div className="pf-l-flex pf-u-align-items-flex-start pf-u-h-100">
              <div className="pf-c-card ha-c-panel__tree-view">
                <ResourcesList />
              </div>
              <div className="pf-c-card pf-m-flex-1 ha-c-panel__details-view">
                <Stack gutter="md" className="pf-u-m-md">
                  <StackItem>
                    <div className="pf-l-flex pf-u-justify-content-space-between">
                      <Tabs activeKey={this.state.activeTabKey} onSelect={this.handleTabClick}>
                        <Tab eventKey={0} title="Details" tabContentId="refTab1Section" tabContentRef={this.contentRef1} />
                        <Tab eventKey={1} title="Preferences" tabContentId="refTab2Section" tabContentRef={this.contentRef2} />
                        <Tab eventKey={2} title="Attributes" tabContentId="refTab3Section" tabContentRef={this.contentRef3} />
                        <Tab eventKey={3} title="Arguments" tabContentId="refTab4Section" tabContentRef={this.contentRef4} />
                      </Tabs>
                      <Button variant="plain" aria-label="Close panel">
                        <TimesIcon />
                      </Button>
                    </div>
                  </StackItem>
                  <StackItem>
                    <TabContent eventKey={0} id="refTab1Section" ref={this.contentRef1} aria-label="Details">
                      <Stack gutter="md">
                        <StackItem>
                          <ul className="pf-c-alert-group">
                            <li className="pf-c-alert-group__item">
                              <Alert variant="danger" isInline title="Alerts for the selected resource can display here." />
                            </li>
                            <li className="pf-c-alert-group__item">
                              <Alert 
                                variant="warning" 
                                isInline 
                                title="More than one alert can display."
                                action={<AlertActionCloseButton/>}>
                                  Alerts can include a close button and additional text.
                              </Alert>
                            </li>
                          </ul>
                        </StackItem>
                        <StackItem>
                          Details about the resource, like status and type would display here. Along with actions for managing the state of the resource.
                          It might also make sense to move inline alerts to specific tabs, and show status icons in the tab label.
                        </StackItem>
                      </Stack>
                    </TabContent>
                    <TabContent eventKey={1} id="refTab2Section" ref={this.contentRef2} aria-label="Preferences" hidden>
                      <Stack gutter="sm">
                        <StackItem><PreferencesToolbar /></StackItem>
                        <StackItem><PreferencesDataList /></StackItem>
                      </Stack>
                    </TabContent>
                    <TabContent eventKey={2} id="refTab3Section" ref={this.contentRef3} aria-label="Attributes" hidden>
                      <AttributesForm />
                    </TabContent>
                    <TabContent eventKey={3} id="refTab4Section" ref={this.contentRef4} aria-label="Arguments" hidden>
                      Arguments section
                    </TabContent>
                  </StackItem>
                </Stack>
              </div>
            </div>
      </PageSection>
      </>
    );
  }
}

export { ResourceSelected };
