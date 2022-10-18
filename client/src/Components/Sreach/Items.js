import React from "react";
import { DisplayResult, Item, Dropdown, ItemsContainer } from './sreachStyle'
import concatStrings from "./concatStrings";
import multipleSearchResults from './multipleSearchResults'

const Items = (props) => (
  <Dropdown>
    {props.keys && props.data.filter((item) => {
      let dataResult = props.keys.map(value => item[value])
      return multipleSearchResults(dataResult, props.value)
    }).slice(0, 10).map((item) => {
      const dataResult = props.keys.map(value => item[value])
      return (
        <DisplayResult
          onClick={() => props?.onSearch(item, dataResult[1] ? concatStrings(dataResult[0], dataResult[1]) : dataResult[0])} key={(dataResult[1] || dataResult[0])}>
          <ItemsContainer>
            <Item>
              {props.showList &&
                (dataResult[1] ? concatStrings(dataResult[0], dataResult[1]) : dataResult[0])}
            </Item>
          </ItemsContainer>
        </DisplayResult>
      )
    })}
  </Dropdown>
);

export default Items;