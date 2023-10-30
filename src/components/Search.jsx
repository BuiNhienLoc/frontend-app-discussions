import React, { useContext, useEffect, useState } from 'react';

import camelCase from 'lodash/camelCase';
import { useDispatch, useSelector } from 'react-redux';
import { setFilter as setTopicFilter } from '../discussions/topics/data/slices';

const Search = ({ intl }) => {
  const [previousSearchValue, setPreviousSearchValue] = useState('');
  const dispatch = useDispatch();
  const { page } = useContext(DiscussionContext);
  const postSearch = useSelector(({ threads }) => threads.filters.search);
    dispatch(setSearchQuery(''));
    dispatch(setTopicFilter(''));
    dispatch(setUsernameSearch(''));
    setPreviousSearchValue('');
  };

  const onChange = (query) => {
    searchValue = query;
  };

  const onSubmit = (query) => {
    if (query === '' || query === previousSearchValue) {
      return;
    }
    if (isPostSearch) {
    } else if (page === 'learners') {
      dispatch(setUsernameSearch(query));
    }
    setPreviousSearchValue(query);
  };

  useEffect(() => onClear(), [page]);