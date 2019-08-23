import * as React from 'react';
import {
  DataList,
  DataListItem,
  DataListCell,
  DataListItemRow,
  DataListItemCells
} from '@patternfly/react-core';
import { DataListActions } from '@app/Components/DataListActions';

const PreferencesDataList: React.FunctionComponent<any> = (props) => {
  return (
    <DataList aria-label="single action data list example ">
          <DataListItem aria-labelledby="pref-1">
            <DataListItemRow>
              <DataListItemCells
                dataListCells={[
                  <DataListCell key="primary content">
                    <span>Type</span> <strong>Ordering</strong>
                  </DataListCell>,
                  <DataListCell key="secondary content">
                    <span id="pref-1">
                      <strong>G1</strong> starts before <strong>R1-clone</strong> starts
                    </span>
                  </DataListCell>,
                  <DataListCell key="tertiary content">
                    <span>Score</span> <strong>50</strong>
                  </DataListCell>
                ]}
              />
              <DataListActions id="pref-1"/>
            </DataListItemRow>
          </DataListItem>
          <DataListItem aria-labelledby="pref-2">
            <DataListItemRow>
            <DataListItemCells
                  dataListCells={[
                    <DataListCell key="primary content">
                      <span>Type</span> <strong>Location</strong>
                    </DataListCell>,
                    <DataListCell key="secondary content">
                      <span id="pref-1">
                        Node <strong>virt-431.cluster-qe.lab.eng.brq.redhat.com</strong> 
                      </span>
                    </DataListCell>,
                    <DataListCell key="tertiary content">
                      <span>Score</span> <strong>70</strong>
                    </DataListCell>
                  ]}
                />
              <DataListActions id="pref-2"/>
            </DataListItemRow>
          </DataListItem>
        </DataList>
  );
}

export { PreferencesDataList };
