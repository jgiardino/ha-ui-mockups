import * as React from 'react';
import '@patternfly/react-core/dist/styles/base.css';
import { BrowserRouter as Router } from 'react-router-dom';
import { AppLayout } from '@app/AppLayout/AppLayout';
import { AppRoutes } from '@app/routes';
import DocumentTitle from 'react-document-title';
import '@patternfly/react-styles/css/components/AlertGroup/alert-group.css';
import '@patternfly/react-styles/css/layouts/Flex/flex.css';
import '@patternfly/react-styles/css/utilities/Flex/flex.css';
import '@patternfly/react-styles/css/utilities/Spacing/spacing.css';
import '@patternfly/react-styles/css/utilities/Sizing/sizing.css';
import '@app/app.css';

const App: React.FunctionComponent = () => {
  return (
    <DocumentTitle title="Patternfly React Seed | App Title">
      <Router>
        <AppLayout>
          <AppRoutes />
        </AppLayout>
      </Router>
    </DocumentTitle>
  );
};

export { App };
