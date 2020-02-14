import React, { Component } from 'react';
import { ArrowCircleRightIcon, CheckCircleIcon, ExclamationTriangleIcon, ExclamationCircleIcon } from '@patternfly/react-icons';
import {
  Button,
  DataList,
  DataListItem,
  DataListItemRow,
  DataListCell,
  DataListToggle,
  DataListContent,
  DataListItemCells,

} from '@patternfly/react-core';
import { DataListActions } from '@app/Components/DataListActions';
import { CompositeStatus } from '@app/Components/CompositeStatus';

class ResourcesList extends Component<{fullWidth?: boolean}, {expanded: Array<string> }> {
  constructor(props) {
    super(props);
    this.state = {
      expanded: ['ex-toggle1', 'ex-toggle1a', 'ex-toggle3']
    };
  };

  render() {
    const toggle = id => {
      const expanded = this.state.expanded;
      const index = expanded.indexOf(id);
      const newExpanded =
        index >= 0 ? [...expanded.slice(0, index), ...expanded.slice(index + 1, expanded.length)] : [...expanded, id];
      this.setState(() => ({ expanded: newExpanded }));
    };
    return (
      <DataList aria-label="Resources level 1" className={`ha-c-tree-view ${this.props.fullWidth ? "ha-m-full-width" : ""}`}>
        <DataListItem aria-labelledby="ex-item1" isExpanded={this.state.expanded.includes('ex-toggle1')}>
          <DataListItemRow>
            <DataListToggle
              onClick={() => toggle('ex-toggle1')}
              isExpanded={this.state.expanded.includes('ex-toggle1')}
              id="ex-toggle1"
              aria-controls="ex-expand1"
            />
            <DataListItemCells
              dataListCells={[
                <DataListCell key="primary content">
                  <a href="#A-clone"><strong id="ex-item3a">A-clone</strong></a>
                </DataListCell>,
                <DataListCell key="secondary content">
                  <span>Type</span> <strong>Clone</strong>
                </DataListCell>
              ]}
            />
            <div className="ha-c-data-list__item-status">
              <CompositeStatus error={0} warning={0} info={1} />
            </div>
            <DataListActions id="ex-item1" />
            {!this.props.fullWidth &&
              <div className="ha-c-tree-view__selected-status">
                <ArrowCircleRightIcon />
              </div>
            }
          </DataListItemRow>
          <DataListContent
            aria-label="Resources of resource A"
            id="ex-expand1"
            isHidden={!this.state.expanded.includes('ex-toggle1')}
            noPadding
          >
            <DataList aria-label="Resources level 2" data-level="2">
              <DataListItem aria-labelledby="ex-item1a" isExpanded={this.state.expanded.includes('ex-toggle1a')}>
                <DataListItemRow>
                  <DataListToggle
                    onClick={() => toggle('ex-toggle1a')}
                    isExpanded={this.state.expanded.includes('ex-toggle1a')}
                    id="ex-toggle1a"
                    aria-controls="ex-expand1a"
                  />
                  <DataListItemCells
                    dataListCells={[
                      <DataListCell key="primary content">
                        <a href="#A"><strong id="ex-item3a">A</strong></a>
                      </DataListCell>,
                      <DataListCell key="secondary content">
                        <span>Type</span> <strong>Group</strong>
                      </DataListCell>
                    ]}
                  />
                  <div className="ha-c-data-list__item-status">
                    <CheckCircleIcon className="ha-u-status-success" /> <span>Running</span>
                  </div>
                  <DataListActions id="ex-item1a" />
                  {!this.props.fullWidth &&
                    <div className="ha-c-tree-view__selected-status">
                      <ArrowCircleRightIcon />
                    </div>
                  }
                </DataListItemRow>
                <DataListContent
                  aria-label="Primary Content Details"
                  id="ex-expand1"
                  isHidden={!this.state.expanded.includes('ex-toggle1a')}
                  noPadding
                >
                  <DataList aria-label="Resources level 3" data-level="3">
                    <DataListItem aria-labelledby="ex-item1a1">
                      <DataListItemRow>
                        <DataListToggle
                          id="ex-toggle1a1"
                          aria-hidden="true"
                        />
                        <DataListItemCells
                          dataListCells={[
                            <DataListCell key="primary content">
                              <a href="#apache"><strong id="ex-item3a">apache</strong></a>
                            </DataListCell>,
                            <DataListCell key="secondary content">
                              <span>Type</span> <strong>apache</strong> (ocf:heartbeat)
                            </DataListCell>
                          ]}
                        />
                        <div className="ha-c-data-list__item-status">
                        <ExclamationCircleIcon  className="ha-u-status-danger" /> <span>Failed</span>
                        </div>
                        <DataListActions id="ex-item1a" />
                        {!this.props.fullWidth &&
                          <div className="ha-c-tree-view__selected-status">
                            <ArrowCircleRightIcon />
                          </div>
                        }
                      </DataListItemRow>
                    </DataListItem>
                  </DataList>
                </DataListContent>
              </DataListItem>
            </DataList>
          </DataListContent>
        </DataListItem>
        <DataListItem aria-labelledby="ex-item2" isExpanded={this.state.expanded.includes('ex-toggle2')}>
          <DataListItemRow>
            <DataListToggle
              onClick={() => toggle('ex-toggle2')}
              isExpanded={this.state.expanded.includes('ex-toggle2')}
              id="ex-toggle2"
              aria-controls="ex-expand2"
            />
            <DataListItemCells
              dataListCells={[
                <DataListCell key="primary content">
                  <a href="#G1"><strong id="ex-item3a">G1</strong></a>
                </DataListCell>,
                <DataListCell key="secondary content">
                  <span>Type</span> <strong>Clone</strong>
                </DataListCell>
              ]}
            />
            <div className="ha-c-data-list__item-status">
              <CompositeStatus error={2} warning={1} info={1} />
            </div>
            <DataListActions id="ex-item1a" />
            {!this.props.fullWidth &&
              <div className="ha-c-tree-view__selected-status">
                <ArrowCircleRightIcon />
              </div>
            }
          </DataListItemRow>
          <DataListContent
            aria-label="Primary Content Details"
            id="ex-expand2"
            isHidden={!this.state.expanded.includes('ex-toggle2')}
            noPadding
          >
            <DataList aria-label="Resources level 2" data-level="2">
              <DataListItem aria-labelledby="ex-item2a">
                <DataListItemRow>
                  <DataListToggle
                    id="ex-toggle2a"
                    aria-hidden="true"
                  />
                  <DataListItemCells
                    dataListCells={[
                      <DataListCell key="primary content">
                        <a href="#R2"><strong id="ex-item3a">R2</strong></a>
                      </DataListCell>,
                      <DataListCell key="secondary content">
                        <span>Type</span> <strong>Dummy</strong> (ocf:heartbeat)
                      </DataListCell>
                    ]}
                  />
                  <div className="ha-c-data-list__item-status">
                    <CheckCircleIcon className="ha-u-status-success" /> <span>Running</span>
                  </div>
                  <DataListActions id="ex-item1a" />
                  {!this.props.fullWidth &&
                    <div className="ha-c-tree-view__selected-status">
                      <ArrowCircleRightIcon />
                    </div>
                  }
                </DataListItemRow>
              </DataListItem>
              <DataListItem aria-labelledby="ex-item2b">
                <DataListItemRow>
                  <DataListToggle
                    id="ex-toggle2b"
                    aria-hidden="true"
                  />
                  <DataListItemCells
                    dataListCells={[
                      <DataListCell key="primary content">
                        <a href="#R3"><strong id="ex-item3a">R3</strong></a>
                      </DataListCell>,
                      <DataListCell key="secondary content">
                        <span>Type</span> <strong>Dummy</strong> (ocf:heartbeat)
                      </DataListCell>
                    ]}
                  />
                  <div className="ha-c-data-list__item-status">
                    <div>
                      <ExclamationCircleIcon  className="ha-u-status-danger" /> <span>Failed</span>
                    </div>
                    <div>
                      <ExclamationCircleIcon  className="ha-u-status-danger" /> <span>Blocked</span>
                    </div>
                  </div>
                  <DataListActions id="ex-item2b" />
                  {!this.props.fullWidth &&
                    <div className="ha-c-tree-view__selected-status">
                      <ArrowCircleRightIcon />
                    </div>
                  }
                </DataListItemRow>
              </DataListItem>
              <DataListItem aria-labelledby="ex-item2b">
                <DataListItemRow>
                  <DataListToggle
                    id="ex-toggle2b"
                    aria-hidden="true"
                  />
                  <DataListItemCells
                    dataListCells={[
                      <DataListCell key="primary content">
                        <a href="#R3"><strong id="ex-item3a">R3</strong></a>
                      </DataListCell>,
                      <DataListCell key="secondary content">
                        <span>Type</span> <strong>Dummy</strong> (ocf:heartbeat)
                      </DataListCell>
                    ]}
                  />
                  <div className="ha-c-data-list__item-status">
                    <div>
                      <ExclamationCircleIcon  className="ha-u-status-danger" /> <span>Failed</span>
                    </div>
                  </div>
                  <DataListActions id="ex-item2b" />
                  {!this.props.fullWidth &&
                    <div className="ha-c-tree-view__selected-status">
                      <ArrowCircleRightIcon />
                    </div>
                  }
                </DataListItemRow>
              </DataListItem>
              <DataListItem aria-labelledby="ex-item2b">
                <DataListItemRow>
                  <DataListToggle
                    id="ex-toggle2b"
                    aria-hidden="true"
                  />
                  <DataListItemCells
                    dataListCells={[
                      <DataListCell key="primary content">
                        <a href="#R3"><strong id="ex-item3a">R5</strong></a>
                      </DataListCell>,
                      <DataListCell key="secondary content">
                        <span>Type</span> <strong>Dummy</strong> (ocf:heartbeat)
                      </DataListCell>
                    ]}
                  />
                  <div className="ha-c-data-list__item-status">
                    <div>
                      <ExclamationTriangleIcon  className="ha-u-status-warning" /> <span>Unmanaged</span>
                    </div>
                    <div>
                      <CheckCircleIcon className="ha-u-status-success" /> <span>Success status text</span>
                    </div>
                  </div>
                  <DataListActions id="ex-item2b" />
                  {!this.props.fullWidth &&
                    <div className="ha-c-tree-view__selected-status">
                      <ArrowCircleRightIcon />
                    </div>
                  }
                </DataListItemRow>
              </DataListItem>
            </DataList>


          </DataListContent>
        </DataListItem>
        <DataListItem aria-labelledby="ex-item3" isExpanded={this.state.expanded.includes('ex-toggle3')}>
          <DataListItemRow>
            <DataListToggle
              onClick={() => toggle('ex-toggle3')}
              isExpanded={this.state.expanded.includes('ex-toggle3')}
              id="ex-toggle3"
              aria-controls="ex-expand3"
            />
            <DataListItemCells
              dataListCells={[
                <DataListCell key="primary content">
                  <a href="#R1-clone"><strong id="ex-item3a">R1-clone</strong></a>
                </DataListCell>,
                <DataListCell key="secondary content">
                  <span>Type</span> <strong>Clone</strong>
                </DataListCell>
              ]}
            />
            <div className="ha-c-data-list__item-status">
              <CompositeStatus error={0} warning={1} info={1} />
              
            </div>
            <DataListActions id="ex-item3" directionUp={!this.state.expanded.includes('ex-toggle3')}/>
            {!this.props.fullWidth &&
              <div className="ha-c-tree-view__selected-status ha-m-active">
                <ArrowCircleRightIcon />
              </div>
            }
          </DataListItemRow>
          <DataListContent
            aria-label="Primary Content Details"
            id="ex-expand3"
            isHidden={!this.state.expanded.includes('ex-toggle3')}
            noPadding
          >
            <DataList aria-label="Resources level 2" data-level="2">
              <DataListItem aria-labelledby="ex-item3a">
                <DataListItemRow>
                  <DataListToggle
                    id="ex-toggle3a"
                    aria-hidden="true"
                  />
                  <DataListItemCells
                    dataListCells={[
                      <DataListCell key="primary content">
                        <a href="#R1"><strong id="ex-item3a">R1</strong></a>
                      </DataListCell>,
                      <DataListCell key="secondary content">
                        <span>Type</span> <strong>Dummy</strong> (ocf:heartbeat)
                      </DataListCell>
                    ]}
                  />
                  <div className="ha-c-data-list__item-status">
                    <CheckCircleIcon className="ha-u-status-success" /> <span>Success status text</span>
                  </div>
                  <DataListActions id="ex-item3a" directionUp={true} />
                  {!this.props.fullWidth &&
                    <div className="ha-c-tree-view__selected-status">
                      <ArrowCircleRightIcon />
                    </div>
                  }
                </DataListItemRow>
              </DataListItem>
            </DataList>
            <DataList aria-label="Resources level 2" data-level="2">
              <DataListItem aria-labelledby="ex-item3a">
                <DataListItemRow>
                  <DataListToggle
                    id="ex-toggle3a"
                    aria-hidden="true"
                  />
                  <DataListItemCells
                    dataListCells={[
                      <DataListCell key="primary content">
                        <a href="#R1"><strong id="ex-item3a">R1</strong></a>
                      </DataListCell>,
                      <DataListCell key="secondary content">
                        <span>Type</span> <strong>Dummy</strong> (ocf:heartbeat)
                      </DataListCell>
                    ]}
                  />
                  <div className="ha-c-data-list__item-status">
                    <ExclamationTriangleIcon className="ha-u-status-warning" /> <span>Warning status text</span>
                  </div>
                  <DataListActions id="ex-item3a" directionUp={true} />
                  {!this.props.fullWidth &&
                    <div className="ha-c-tree-view__selected-status">
                      <ArrowCircleRightIcon />
                    </div>
                  }
                </DataListItemRow>
              </DataListItem>
            </DataList>
          </DataListContent>
        </DataListItem>
      </DataList>
  );
}
}

export { ResourcesList };