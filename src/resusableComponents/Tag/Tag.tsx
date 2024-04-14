import React from 'react';
import { TagContainer, TagLabel } from './TagStyles';

interface TagProps {
  label: string;
}

const Tag: React.FC<TagProps> = ({ label }) => {
  return (
    <TagContainer>
      <TagLabel>{label}</TagLabel>
    </TagContainer>
  );
};

export default Tag;
