import { Option, TileId } from "@/types";
import { Box, BoxProps, Select, Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";

interface TypePickerProps extends BoxProps {
  option: Option;
  textColor: string;
  subTextColor: string;
  value: string;
  changeSetting: (key: string, value: string, tileId: TileId) => void;
  resetOptionToDefault: (option: Option) => void;
}

export const TypePicker: React.FC<TypePickerProps> = ({
  option,
  textColor,
  subTextColor,
  changeSetting,
  value,
  resetOptionToDefault,
}) => {
  const { title, subTitle, localStorageId } = option;

  const onTypeSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    changeSetting(option.localStorageId, e.target.value, option.tileId);
  };

  return (
    <Box key={localStorageId} my="2">
      <Text fontSize="md" color={textColor}>
        {title}
      </Text>
      <Text fontSize="xs" color={subTextColor}>
        {subTitle}
        <span
          style={{ cursor: "pointer" }}
          onClick={() => resetOptionToDefault(option)}
        >
          .&nbsp;Reset to default.
        </span>
      </Text>
      <Box display="flex" flexDir="column" mt="1">
        <Select
          placeholder="Select option"
          size="sm"
          onChange={onTypeSelectChange}
          value={value}
        >
          <option value="Reddit Feed">Reddit Feed</option>
          <option value="Hacker News Feed">Hacker News Feed</option>
          <option value="Todo List">Todo List</option>
        </Select>
      </Box>
    </Box>
  );
};