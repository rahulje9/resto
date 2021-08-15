import {useEffect} from 'react';
import {useDispatch} from 'react-redux';
import {initializeData} from '../../action/common';

const InitializeData = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(initializeData());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return null;
};

export default InitializeData;
