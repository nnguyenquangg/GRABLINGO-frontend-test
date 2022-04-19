import React from 'react';
import renderer from 'react-test-renderer';
import App from '../App';

test('swap between any 2 boxes', async () => {

  const event = {preventDefault: jest.fn()}
  const component = renderer.create(<App/>);
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();

  const dragColorItem = tree.children[0].children[0]
  dragColorItem.children[0].props.onDragStart()

  tree = component.toJSON();
  expect(tree).toMatchSnapshot();

  const dropColorItem = tree.children[0].children[10].props;
  dropColorItem.onDrop(event);

  tree = component.toJSON();
  expect(tree).toMatchSnapshot();

  const lastDragColorItem = tree.children[0].children[0].props;
  const lastDropColorItem =  tree.children[0].children[10].props;

  expect(dragColorItem.props.name).toBe(lastDropColorItem.name);
  expect(dropColorItem.name).toBe(lastDragColorItem.name)





});
