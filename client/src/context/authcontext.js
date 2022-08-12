import { CometChat } from '@cometchat-pro/chat';
import { AUTH_KEY } from '../constants/constants';

export const SignUpUser = async (name, UID) => {
   var user = new CometChat.User(UID);

   user.setName(name);

   await CometChat.createUser(user, AUTH_KEY).then(
      (user) => {
         alert('user created', user);
      },
      (error) => {
         alert('error', error);
      }
   );
};

export const LoginUser = async (UID) => {
   CometChat.getLoggedinUser().then(
      (user) => {
         if (!user) {
            CometChat.login(UID, AUTH_KEY).then(
               (user) => {
                  alert('Login Successful:', { user });
               },
               (error) => {
                  alert('Login failed with exception:', { error });
               }
            );
         }
      },
      (error) => {
         alert('Some Error Occured', { error });
      }
   );
};

export const Logout = () => {
   CometChat.logout().then(
      () => {
         alert('Logout completed successfully');
      },
      (error) => {
         alert('Logout failed with exception:', { error });
      }
   );
};
