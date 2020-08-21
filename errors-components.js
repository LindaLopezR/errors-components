import React from 'react';

export const ErrorFallback = (error) => {
  console.log('ERROR = > ', error);
  return (
    <div role="alert" style={{marginTop: 15}}>
      <h3>Something went wrong:</h3>
      <pre style={{color: 'red'}}>
        {TAPi18n.__('error_try_later')}
      </pre>
    </div>
  )
}

export const ErrorRender = () => {
  throw new Error ('Error cargando la información');
}
