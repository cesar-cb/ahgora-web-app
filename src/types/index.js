import {shape, string, bool, func} from 'prop-types';

export const userContainerType = shape({
  value: shape({
    state: shape({
      information: shape({
        name: string.isRequired,
        account: string.isRequired,
        password: string.isRequired,
        id: string.isRequired,
      }),
      error: bool.isRequired,
    }),
    initInformation: func.isRequired,
    setInformation: func.isRequired,
    resetInformation: func.isRequired,
  }),
});

export const punchResponse = shape({});
