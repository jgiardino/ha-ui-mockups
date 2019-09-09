import React, { Component } from 'react';
import {
  Alert,
  Form,
  FormGroup,
  ActionGroup,
  TextInput,
  Button,
  Tabs,
  Tab,
  Stack,
  StackItem,
  Toolbar,
  ToolbarGroup,
  ToolbarItem
} from '@patternfly/react-core';

class AttributesForm extends Component<{}, {activeTabKey: any }> {
  constructor(props) {
    super(props);
    this.state = {
      activeTabKey: 0
    };
    this.handleTabClick = this.handleTabClick.bind(this);
  };

  handleTabClick = (event, tabIndex) => {
    this.setState({
      activeTabKey: tabIndex
    });
  };
  
  render() {
    return (
      <Tabs activeKey={this.state.activeTabKey} onSelect={this.handleTabClick} isSecondary>
        <Tab eventKey={0} title="Read only">
          <Stack gutter="sm" className="pf-u-m-sm">
            <StackItem>
              <Toolbar className="pf-l-toolbar">
                <ToolbarGroup>
                  <ToolbarItem>
                    <Button>Edit Attributes</Button>
                  </ToolbarItem>
                </ToolbarGroup>
              </Toolbar>
            </StackItem>
            <StackItem>
              <div className="pf-c-content">
                <dl>
                  <dt>Color</dt>
                  <dd>red</dd>
                  <dt>Shape</dt>
                  <dd></dd>
                  <dt>Size</dt>
                  <dd></dd>
                  <dt>State</dt>
                  <dd></dd>
                </dl>
              </div>
            </StackItem>
          </Stack>
        </Tab>
        <Tab eventKey={1} title="Form on first load">
          <Stack className="pf-u-m-sm">
            <StackItem>
              <Form isHorizontal>
                <FormGroup
                  label="Color"
                  fieldId="form-one"
                >
                  <TextInput
                    type="text"
                    id="form-one"
                    name="form-one"
                    value="red"
                  />
                </FormGroup>
                <FormGroup
                  label="Shape"
                  fieldId="form-two"
                >
                  <TextInput
                    type="text"
                    id="form-two"
                    name="form-two"
                  />
                </FormGroup>
                <FormGroup
                  label="Size"
                  fieldId="form-three"
                >
                  <TextInput
                    type="text"
                    id="form-three"
                    name="form-three"
                  />
                </FormGroup>
                <FormGroup
                  label="State"
                  fieldId="form-four"
                >
                  <TextInput
                    type="text"
                    id="form-four"
                    name="form-one"
                  />
                </FormGroup>
                <ActionGroup>
                  <Button variant="primary">Save attributes</Button>
                  <Button variant="secondary">Cancel</Button>
                </ActionGroup>
              </Form>
            </StackItem>
          </Stack>
        </Tab>
        <Tab eventKey={2} title="Form after updates were made">
          <Stack gutter="md" className="pf-u-m-sm">
            <StackItem>
              <Alert 
                id="form-one-helper-text"
                variant="warning" 
                isInline 
                title="One or more values in this form were updated by another user after you opened the form.">
                  Values that were updated will require an additional input from you on which value to use.
              </Alert>
            </StackItem>
            <StackItem>
              <Form isHorizontal>
                <div className="pf-c-form__group">
                  <span className="pf-c-form__label pf-u-pt-md" id="form-one-fieldset-label">
                    <span className="pf-c-form__label-text">
                      Color
                    </span>
                    <span className="pf-c-form__label-required" aria-hidden="true">&#42;</span>
                  </span>
                  <div className="pf-c-form__horizontal-group" role="group" aria-labelledby="form-one-fieldset-label">
                    <Stack>
                      <StackItem className="pf-u-mb-sm">
                        <Alert 
                          variant="warning" 
                          isInline 
                          title="Another user provided a new value for this field." />
                      </StackItem>
                      <StackItem className="pf-u-mt-sm">
                        <div className="pf-c-radio ha-c-radio">
                          <input className="pf-c-radio__input" type="radio" id="form-one-radio-one" name="color" required />
                          <label className="pf-c-radio__label" htmlFor="form-one-radio-one">
                            Use the new value <br />
                            <strong>blue</strong>
                          </label>
                        </div>
                      </StackItem>
                      <StackItem className="pf-u-mt-sm">
                        <div className="pf-c-radio ha-c-radio">
                          <input className="pf-c-radio__input" type="radio" id="form-one-radio-two" name="color" required aria-label="Use the value specified in this form: red" />
                          <span className="pf-c-radio__label pf-u-w-100">
                            <label htmlFor="form-one-radio-two">Use the following value</label> <br />
                            <input className="pf-c-form-control" type="text" id="form-one-input" name="form-one-input" value="red" aria-label="Color" />
                          </span>
                        </div>
                      </StackItem>
                    </Stack>
                  </div>
                </div>
                <FormGroup
                  label="Shape"
                  fieldId="form-warning-two"
                >
                  <TextInput
                    type="text"
                    id="form-warning-two"
                    name="form-warning-two"
                  />
                </FormGroup>
                <div className="pf-c-form__group">
                  <span className="pf-c-form__label pf-u-pt-md" id="form-three-fieldset-label">
                    <span className="pf-c-form__label-text">
                      Size
                    </span>
                    <span className="pf-c-form__label-required" aria-hidden="true">&#42;</span>
                  </span>
                  <div className="pf-c-form__horizontal-group" role="group" aria-labelledby="form-three-fieldset-label">
                    <Stack>
                      <StackItem className="pf-u-mb-sm">
                        <Alert 
                          variant="warning" 
                          isInline 
                          title="Another user provided a new value for this field." />
                      </StackItem>
                      <StackItem className="pf-u-mt-sm">
                        <div className="pf-c-radio ha-c-radio">
                          <input className="pf-c-radio__input" type="radio" id="form-three-radio-one" name="size" required />
                          <label className="pf-c-radio__label" htmlFor="form-three-radio-one">
                            Use the new value <br />
                            <strong>small</strong>
                          </label>
                        </div>
                      </StackItem>
                      <StackItem className="pf-u-mt-sm">
                        <div className="pf-c-radio ha-c-radio">
                          <input className="pf-c-radio__input" type="radio" id="form-three-radio-two" name="size" required aria-label="Use the value specified in this form, which currently is blank" />
                          <span className="pf-c-radio__label pf-u-w-100">
                            <label htmlFor="form-one-radio-two">Use the following value</label> <br />
                            <input className="pf-c-form-control" type="text" id="form-one-input" name="form-one-input" value="" aria-label="Size" />
                          </span>
                        </div>
                      </StackItem>
                    </Stack>
                  </div>
                </div>
                <FormGroup
                  label="State"
                  fieldId="form-warning-four"
                >
                  <TextInput
                    type="text"
                    id="form-warning-four"
                    name="form-warning-four"
                  />
                </FormGroup>
                <ActionGroup>
                  <Button variant="primary" isDisabled>Save attributes</Button>
                  <Button variant="secondary">Cancel</Button>
                </ActionGroup>
              </Form>
            </StackItem>
          </Stack>
        </Tab>
      </Tabs>
    );
  }
}

export { AttributesForm };
