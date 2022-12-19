import {AxiosError} from 'axios';
import {Alert} from 'react-native';
import {useForm} from 'react-hook-form';
import {useMutation} from 'react-query';

import {localSignUp} from '@/api/user';
import {ILocalSignUpBody} from '@/types/api/user';
import {SignUpScreenProps} from '@/types/navigation';

interface IProps {
  navigation: SignUpScreenProps['navigation'];
}
function useLocalSignUp({navigation}: IProps) {
  const formMethods = useForm({mode: 'onBlur'});
  const {localId, password, passwordCheck, nickname} = formMethods.watch();
  const isActiveButton = Boolean(
    localId && password && passwordCheck && nickname,
  );
  const mutation = useMutation<number, AxiosError, ILocalSignUpBody>(
    payload => localSignUp(payload),
    {
      retry: false,
      onSuccess: () => {
        Alert.alert('kino', '계정을 성공적으로 생성하였습니다.', [
          {text: '확인', onPress: () => navigation.navigate('SignIn')},
        ]);
      },
    },
  );
  const onSubmit = () => {
    mutation.mutate({localId, password, passwordCheck, nickname});
  };
  return {isActiveButton, formMethods, onSubmit};
}

export default useLocalSignUp;
