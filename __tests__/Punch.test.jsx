// import React from 'react';
// import { shallow, render, mount } from 'enzyme';
// import { Provider, Subscribe } from 'unstated';

// import Punch from '@/components/Punch/Punch';
// import PunchContainer from '@/components/Punch/PunchContainer';
// import UserContainer from '@/components/User/UserContainer';

// import testWithUnstated from '@/testWithUnstated';

// describe('Punch', () => {
//   describe('Container', () => {
//     test('should have correct initial state', () => {
//       const punch = new PunchContainer();

//       expect(punch.state.response).toEqual(null);
//       expect(punch.state.loading).toEqual(false);
//       expect(punch.state.error).toEqual(null);
//     });
//     test('should change loading state', async () => {
//       const punch = new PunchContainer();
//       const user = new UserContainer();

//       await user.setState({
//         information: {
//           name: 'test user',
//           account: '456',
//           password: '159',
//           id: '1231k24gb'
//         }
//       });

//       const tree = mount(
//         <testWithUnstated containers={[punch, user]}>
//           <Punch />
//         </testWithUnstated>
//       );

//       // tree.find('#punch').simulate('click');

//       expect(
//         mount(
//           <testWithUnstated containers={[punch, user]}>
//             <Punch />
//           </testWithUnstated>
//         )
//       ).toEqual('');

//       // tree.find('#punch').simulate('click');

//       // expect(punch.state.loading).toBeFalsy();
//     });
//   });
// });

import React from 'react';
import { mount } from 'enzyme';

describe('test', () => {
  test('it', () => {
    const tree = mount(<h1>Ola</h1>);
  });
});
