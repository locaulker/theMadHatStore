import React from 'react';

export function CollectionTile({ title, description, backgroundImage }) {
  return (
    <div>
      <h1>{title}</h1>
      <p>{description}</p>
    </div>
  );
}
