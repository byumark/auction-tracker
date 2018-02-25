
import React from 'react'
import { Card, CardBody, CardHeader, CardTitle, CardText } from 'reactstrap';
import { Form, Text, Radio, RadioGroup, Select, Checkbox } from 'react-form';


export class PeopleAndItemsForm extends React.Component {
  constructor(props) {
    super(props)

    this.state = {}
  }

  render() {
    return (
      <Form onSubmit={submittedValues => this.setState({ submittedValues })} >
        {
          formApi => (
            <form onSubmit={formApi.submitForm} id="form2">
              <label htmlFor="name">Name</label>
              <Text field="name" id="name" />
              <h4 style={{ marginTop: '20px' }}>Items</h4>
              <button
                onClick={() => formApi.addValue('items', '')}
                type="button"
                className="mb-4 mr-4 btn btn-success">add</button>
              {formApi.values.items ?
                <Card>
                  <CardBody>
                    {formApi.values.items.map((item, i) => (
                      <div key={`item${i}`}>
                        <label htmlFor={`item-name-${i}`}>Name</label>
                        <Text field={['items', i]} id={`item-name-${i}`} />
                        <label htmlFor={`item-category-${i}`}>Category</label>
                        <Text field={['category', i]} id={`item-category-${i}`} />
                        <button
                          onClick={() => formApi.removeValue('items', i)}
                          type="button"
                          className="mb-4 btn btn-danger">remove</button>
                      </div>
                    ))}
                  </CardBody>
                </Card>
                : null}
                <br />
              <button type="submit" className="mb-4 btn btn-primary">Save</button>
              {' '}
              <button type="submit" className="mb-4 btn btn-primary">Save and Add Another</button>
            </form>
          )
        }
      </Form >
    )
  }
}

export default () => {
  return (
    <div>
      <h1>People and Items</h1>
      <p>Enter person here and optionally add donated items.</p>
      <br />
      <PeopleAndItemsForm />
    </div>
  )
}