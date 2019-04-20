import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import uuid from '@/utils/uuid';

const id = uuid();

const Tab = styled.div`
  margin-bottom: 1px;
  overflow: hidden;
  position: relative;
  width: 100%;
`;

const Input = styled.input.attrs({
  id,
  type: 'checkbox',
  name: 'tabs'
})`
  opacity: 0;
  position: absolute;
  z-index: -1;

  &+.label {
    &:after {
      content: '+';
    }
  }

  &:checked {
    &~.content {
      max-height: 100vh;
    }

    &+.label {
      &:after {
        transform: rotate(315deg);
      }
    }
  }
`;

const Label = styled.label.attrs({
  htmlFor: id
})`
  background-color: #AEDCF0;
  color: #242F3F;
  cursor: pointer;
  display: block;
  font-weight: bold;
  line-height: 3em;
  padding: 0 0 0 1em;
  position: relative;

  &:after {
    display: block;
    height: 3em;
    line-height: 3;
    position: absolute;
    right: 0;
    text-align: center;
    top: 0;
    transition: all 0.35s;
    width: 3em;
  }
`;

const Content = styled.div`
  margin-top: 2px;
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.35s;
`;

const Accordion = ({ label, children }) => (
  <Tab>
    <Input />
    <Label className="label">{label}</Label>
    <Content className="content">{children}</Content>
  </Tab>
);

Accordion.propTypes = {
  label: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};


export default Accordion;
