import React, { Component } from 'react';
import {
  DataList,
  DataListItem,
  DataListCell,
  DataListItemRow,
  DataListItemCells
} from '@patternfly/react-core';
import { DataListActions } from '@app/Components/DataListActions';

class CompositeStatus extends Component<{error?: number, warning?: number, info?: number}, {}> {
  constructor(props) {
    super(props);
  };
  render() {
    const errorItems = Array(this.props.error).fill("ha-m-error");
    const warningItems = Array(this.props.warning).fill("ha-m-warning");
    const infoItems = Array(this.props.info).fill("ha-m-info");

  return (
    <div className="ha-c-composite-status">
      {errorItems.map(errorItem => (
        <div className={`ha-c-composite-status__item ${errorItem} `} />
      ))}
      {warningItems.map(warningItem => (
        <div className={`ha-c-composite-status__item ${warningItem} `} />
      ))}
      {infoItems.map(infoItem => (
        <div className={`ha-c-composite-status__item ${infoItem} `} />
      ))}
    </div>
  );
}
}

export { CompositeStatus };
