import React, { useState, useEffect } from "react";
import { BsSearch } from "react-icons/bs";
import { FiX } from "react-icons/fi";
import { useNavigate } from 'react-router-dom';
import Items from "./Items";
import { SearchInput, InputWrapper, SearchButton, SearchContainer, ClearText } from './sreachStyle';
import useLoader from "../Loader/useLoader";
import Loader from "../Loader/Loader";
import concatStrings from "./concatStrings";
import searchEngine from './searchEngine';
import searchEngineMatch from './searchEngineMatch';
import usePlaceholder from "./usePlaceHolder";

const Search = (props) => {
  const [loading, handlerLodaer] = useLoader(false);
  const [value, setValue] = useState(null);
  const [text, setText] = useState("");
  const [showList, setShowList] = useState(false);
  const { placeHolderName, placeHolder } = usePlaceholder(props.data);
  const navigate = useNavigate();

  const onChange = ({ target }) => {
    setValue(target.value.trim());
    setShowList(true);
    setText(target.value);
  };

  const onSearch = (searchTerm, item) => {
    setValue(searchTerm);
    setText(item);
  };

  const handleSreach = () => {
    const result = props.data.find(val => {
      if (props.keys.length >= 2) {
        let findFirst = val[props.keys[0]];
        let findSecond = val[props.keys[1]];
        let concatenation = concatStrings(findFirst, findSecond);
        return searchEngine(concatenation, text);
      };
      return searchEngineMatch(val[props.keys[0]], text);
    });
    if (!result) return;
    if (result[props.keys[1]]) {
      clearInput();
      handlerLodaer(() => props.operation(result));
    } else handlerLodaer(() => navigate(`/brand-models/${result[props.keys[0]]}`));
  };

  const clearInput = () => {
    setValue(null);
    setText("");
  };

  useEffect(() => {
    const keyDownHandler = event => {
      if (event.key === 'Enter') {
        event.preventDefault();
        handleSreach();
      };
    };
    document.addEventListener('keydown', keyDownHandler);
    return () => {
      document.removeEventListener('keydown', keyDownHandler);
    };
  });

  useEffect(() => {
    placeHolder("model", "brand");
  }, [placeHolder, props.data]);

  return (
    <SearchContainer>
      <InputWrapper>
        <SearchInput
          type="text"
          placeholder={placeHolderName}
          name="title"
          value={text}
          onChange={onChange}
        />

        <ClearText>{text && <FiX onClick={clearInput} />}</ClearText>
        <SearchButton onClick={handleSreach}><BsSearch size="35" /></SearchButton>
        <Loader loading={loading} />
      </InputWrapper>

      <Items
        data={props.data}
        value={value}
        keys={props.keys}
        showList={showList}
        onSearch={onSearch}
      />
    </SearchContainer>
  );
};

export default Search;